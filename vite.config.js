import { defineConfig } from 'vite';

export default defineConfig({
  root: 'vite',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssMinify: false
  },
});