/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#5c3a2a',
        background: '#F5F0E1',
        accent1: '#8A9A5B',
        accent2: '#6B8E9E',
        dark: '#3C3C3C',
      },
      fontFamily: {
        heading: ['ChunkFive Print', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      }
    }
  }
}

/** is this real? */