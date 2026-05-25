import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const isDev = import.meta.env.DEV;

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-05-24',
  useCdn: !isDev,           // Fresh data in development, cached in production
  token: import.meta.env.PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}