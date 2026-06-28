import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content', // Specifies that this collection handles markdown/mdx files
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

export const collections = {
  'projects': projectsCollection,
};