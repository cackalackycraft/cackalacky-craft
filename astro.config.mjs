import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://a84ff1ae.cackalacky-craft.pages.dev',
  output: 'static',
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});