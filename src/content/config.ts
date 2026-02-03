
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

console.log("Current dir:", import.meta.url);

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
        detailedDescription: z.string().optional(),
        image: image(),
        github: z.string().url(),
        liveDemo: z.string().url().nullable().optional(),
        technologies: z.array(z.string()),
        features: z.array(z.string()),
        dateCreated: z.string(),
        challenges: z.string(),
        solutions: z.string(),
        questions: z.array(z.object({
            q: z.string(),
            a: z.string()
        })).optional(),
        interactionGroups: z.array(z.object({
            title: z.string(),
            steps: z.array(z.string())
        })).optional(),
        architecture: z.string().optional(),
        order: z.number().default(0) // Good for sorting
    })
});

export const collections = { projects };
