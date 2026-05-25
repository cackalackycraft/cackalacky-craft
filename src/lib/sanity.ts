import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const isDev = import.meta.env.DEV;

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-05-24',
  useCdn: !isDev,           // Fresh data locally, cached on live site
  token: import.meta.env.PUBLIC_SANITY_TOKEN,
});

// Modern image URL builder
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}