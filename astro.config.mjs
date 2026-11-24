// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-source-sans',
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Permanent Marker',
      cssVariable: '--font-permanent-marker',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['cursive'],
    },
    {
      provider: fontProviders.google(),
      name: 'Crafty Girls',
      cssVariable: '--font-crafty-girls',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['serif'],
    },
  ],
});