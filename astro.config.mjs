import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',           // Use static for now (simpler)
  adapter: cloudflare(),
  site: 'https://cackalacky-craft.pages.dev',
});