import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // This is the file crawler tool

const projectsCollection = defineCollection({
  // Tell Astro to crawl your markdown files using the glob loader
  loader: glob({ 
    pattern: '**/[^_]*.md', 
    base: './src/content/projects' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

export const collections = {
  'projects': projectsCollection,
};