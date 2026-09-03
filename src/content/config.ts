import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Berislav Sokač'),
    tags: z.array(z.string()).default([]),
    /** Links the EN and HR versions of the same piece, for hreflang. */
    translationKey: z.string(),
    /** Answer-first opening sentence, used for AI answer surfaces. */
    answer: z.string().optional(),
  }),
});

export const collections = { insights };
