// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
//import vercel from '@vercel/analytics/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://hesslero.github.io',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
