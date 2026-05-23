import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().url(),
    last_reviewed: z.string().optional(),
    schema: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { pages };
