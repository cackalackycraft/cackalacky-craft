import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    price: z.number(),
    images: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  products: productsCollection,
};