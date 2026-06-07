#!/usr/bin/env node
// Encrypts a JSON file with a password so it can be safely shipped to a static
// site and decrypted client-side (see src/pages/data.astro).
//
// Crypto: PBKDF2 (SHA-256, 250k iterations) derives an AES-GCM 256-bit key from
// the password. The output blob holds the random salt + IV + ciphertext, all
// base64. Without the password the ciphertext is unreadable.
//
// Usage:
//   node scripts/encrypt-json.mjs <input.json> [output.json] [--password <pw>]
//
//   node scripts/encrypt-json.mjs src/data/data.json public/data.enc.json
//   # If --password is omitted you'll be prompted (input is hidden).

import { readFile, writeFile } from "node:fs/promises";
import { webcrypto as crypto } from "node:crypto";
import { createInterface } from "node:readline";

const PBKDF2_ITERATIONS = 250000;

function parseArgs(argv) {
  const positional = [];
  let password;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--password" || argv[i] === "-p") {
      password = argv[++i];
    } else {
      positional.push(argv[i]);
    }
  }
  return { positional, password };
}

function promptHidden(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const onData = (char) => {
      const c = char.toString();
      if (c === "\n" || c === "\r" || c === "") {
        process.stdin.removeListener("data", onData);
      } else {
        // Re-write the prompt with no echoed characters.
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(question);
      }
    };
    process.stdout.write(question);
    process.stdin.on("data", onData);
    rl.question("", (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
  });
}

function toBase64(buf) {
  return Buffer.from(buf).toString("base64");
}

async function main() {
  const { positional, password: pwArg } = parseArgs(process.argv.slice(2));
  const input = positional[0];
  const output = positional[1] ?? "public/data.enc.json";

  if (!input) {
    console.error(
      "Usage: node scripts/encrypt-json.mjs <input.json> [output.json] [--password <pw>]",
    );
    process.exit(1);
  }

  const plaintext = await readFile(input, "utf8");
  // Validate it's JSON so we don't silently encrypt garbage.
  JSON.parse(plaintext);

  const password = pwArg ?? (await promptHidden("Password: "));
  if (!password) {
    console.error("A password is required.");
    process.exit(1);
  }

  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"],
  );

  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(plaintext),
  );

  const blob = {
    v: 1,
    kdf: "PBKDF2",
    iterations: PBKDF2_ITERATIONS,
    hash: "SHA-256",
    cipher: "AES-GCM",
    salt: toBase64(salt),
    iv: toBase64(iv),
    ciphertext: toBase64(ciphertext),
  };

  await writeFile(output, JSON.stringify(blob, null, 2) + "\n");
  console.log(`Encrypted ${input} -> ${output}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
