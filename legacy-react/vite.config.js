import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* GitHub Pages serves static files only — it has no router, so a request for
   /portfolio.github.io/projects looks for a file that doesn't exist and returns
   its 404 page. The site works while you click around (React Router handles
   that in the browser) but breaks the moment anyone refreshes or opens a link
   directly, which is exactly what a shared link is.

   The fix Pages supports: 404.html is what it serves for any unmatched path.
   Make that a copy of index.html and the app boots as usual, then React Router
   reads the URL and renders the right page. */
function githubPagesSpaFallback() {
  let outDir = 'dist';

  return {
    name: 'github-pages-spa-fallback',

    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },

    closeBundle() {
      const index = path.join(outDir, 'index.html');
      if (!fs.existsSync(index)) return;

      fs.copyFileSync(index, path.join(outDir, '404.html'));
      console.log('github-pages-spa-fallback: wrote 404.html');
    },
  };
}

export default defineConfig({
  /* This repo is a GitHub Pages *project* site, so the build is served from
     /portfolio.github.io/ rather than the domain root. Every asset URL Vite
     emits is prefixed with this, and main.jsx feeds it to the router as its
     basename. Change it to '/' if you ever point a custom domain (or a
     <username>.github.io repo) at the site. */
  base: '/portfolio.github.io/',
  plugins: [react(), githubPagesSpaFallback()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
