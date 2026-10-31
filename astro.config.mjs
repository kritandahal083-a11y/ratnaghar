// @ts-check
import { defineConfig } from 'astro/config';

// Fully static output — no adapter, no SSR, no server code.
export default defineConfig({
  // Replace with the production domain before launch (enables canonical URLs/sitemaps later).
  site: 'https://shreeratnaghar.example.com',
  compressHTML: true,
});
