import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  /* This repo is a GitHub Pages *project* site, so the build is served from
     /portfolio.github.io/ rather than the domain root. Every asset URL Vite
     emits is prefixed with this. Change it to '/' if you ever point a custom
     domain (or a <username>.github.io repo) at the site. */
  base: '/portfolio.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
