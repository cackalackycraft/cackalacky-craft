import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://a84ff1ae.cackalacky-craft.pages.dev',
  output: 'static',
  vite: {
    css: {
      devSourcemap: true,
    },

    plugins: [tailwindcss()],
  },
});