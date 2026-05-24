// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://cackalackycraft.com',
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
    },
  },

  adapter: cloudflare(),
});