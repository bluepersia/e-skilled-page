import { defineConfig } from 'vite';

import { execSync } from 'child_process';

export default defineConfig({
  root: 'vite',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssMinify: false
  },
  plugins: [
    {
      name: 'fluid-build',
      buildStart() {
        execSync('npx fluid-build', { stdio: 'inherit' });
      },
    },
  ],
});