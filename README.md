# Portfolio — Lokeswar Raju Gundlapalli

AI Engineer portfolio built with **React 19 + Vite**, styled with a glassmorphism
design system (warm cream base, frosted white panes, jewel-tone accents).

Live: https://gundlapallilokeswarraju.github.io/portfolio.github.io/

## Running it

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run deploy   # build and publish to the gh-pages branch
```

## Layout

```
index.html              Vite entry — mounts #root, loads Font Awesome
src/
  main.jsx              React root; imports the one stylesheet manifest
  App.jsx               Page composition
  components/           One .jsx + one .css per section
  data/                 All page copy — edit content here, not in components
  hooks/                Scroll, reveal, counter and motion-preference logic
  styles/
    index.css           Stylesheet manifest (import order = cascade order)
    base.css            Design tokens, reset, layout primitives
    glass-refinements.css
    utilities.css       Focus rings, fallbacks, motion prefs, print
.github/workflows/      GitHub Pages deploy
```

### Editing content

Text, projects, skills and jobs live in `src/data/`. Adding a project is one
object in `src/data/projects.js` — no component changes.

### Styling

`src/styles/index.css` imports every stylesheet in a fixed order, and **that
order is the cascade**. Component files do not import their own CSS, so the
cascade can't be reordered by accident when refactoring imports.

The glass surfaces are driven by tokens in `base.css` (`--glass`,
`--glass-blur`, `--glass-shadow`, …). Change the frost everywhere by changing
those, not by editing individual rules.

Inner panes (skill tags, contact tiles) deliberately carry **no**
`backdrop-filter` — they sit on top of already-frosted parents, where a second
blur drains the colour and costs a full extra GPU pass per element. See
`glass-refinements.css`.

## Deployment

```bash
npm run deploy
```

Builds into `dist/` and force-pushes it to the **`gh-pages`** branch, which is
what GitHub Pages serves. Deploys are manual — nothing publishes on push to
`main`, so you can commit work in progress freely.

One-time setup, under **Settings → Pages → Build and deployment**:

- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / **`/ (root)`**

`main` holds the source; `gh-pages` holds only build output and is rewritten on
every deploy — never commit to it by hand.

`vite.config.js` sets `base: '/portfolio.github.io/'` because this is a Pages
*project* site. If you move to a custom domain or a `<username>.github.io`
repo, change `base` to `'/'`.
