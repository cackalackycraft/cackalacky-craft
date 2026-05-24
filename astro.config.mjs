import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',           // Changed back to static for simplicity
  adapter: cloudflare(),
  site: 'https://cackalacky-craft.pages.dev',
  trailingSlash: 'never',
});