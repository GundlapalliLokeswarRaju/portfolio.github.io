# Portfolio — Lokeswar Raju Gundlapalli

AI Engineer portfolio. Hand-written HTML, CSS and JavaScript — no framework, no
build step, no dependencies. Cinematic dark design: near-black ground with film
grain, Cormorant Garamond display type, and a scroll-stacking work section.

Live: https://gundlapallilokeswarraju.github.io/portfolio.github.io/

## Running it

There is nothing to install and nothing to compile. Open `index.html`, or serve
the folder if you want correct relative paths and no `file://` quirks:

```bash
python -m http.server 4200   # then visit http://localhost:4200/
```

Deploying is a `git push` — GitHub Pages serves these files as they are.

## Layout

```
index.html              The whole page. All copy lives here.
assets/
  css/styles.css        Design tokens, then sections in page order,
                        then overlays and preferences last.
  js/main.js            Six independent behaviours (see below).
  img/lokesh.jpeg       Portrait.
legacy-react/           The previous React 19 + Vite version, kept for
                        reference. Nothing in the live site reads from it;
                        delete it whenever you like.
```

## The JavaScript

`assets/js/main.js` is one IIFE with six features, each guarded so a browser
missing any API loses that feature alone. Everything motion-related checks
`prefers-reduced-motion` first and simply does not initialise.

| Feature | What it does |
|---|---|
| Reveal | Fades and unblurs sections as they reach a trigger line |
| Counters | Counts the headline figures up on first sight |
| Scroll stack | Feeds each project card its `--p` progress; CSS scales and dims |
| Spotlight | Publishes pointer position per panel; CSS draws the glow |
| Cursor | Dot tracks exactly, ring lags behind it |
| Nav | Condenses on scroll, marks the active section, drives the mobile menu |

All six share **one** rAF-throttled scroll listener. Six separate listeners each
doing their own layout reads is how a page ends up janky.

### Two decisions worth knowing about

**Reveals compare against a trigger line rather than using an
IntersectionObserver.** An observer only fires when the intersection ratio
crosses a threshold, so an element that is *skipped over* never fires at all —
press End, drag the scrollbar, or open `#contact` directly, and every section in
between goes from below the viewport to above it without ever being on screen.
Anything gated on that observer then stays hidden permanently. Asking "is it at
or past the line" is true whether it was scrolled to or jumped past.

**The checks also re-run on `load` and on `document.fonts.ready`, not only on
scroll.** The first evaluation happens while the web fonts are still swapping
and the portrait has not decoded; both move content down. Without those extra
passes, an element that crosses the line a beat later waits for a scroll event
that may never come — which is exactly how the hero buttons ended up stranded at
`opacity: 0` for anyone who landed and did not scroll.

## Editing content

Everything is in `index.html`. There is no data layer to keep in sync — the
trade for having no build step is that the copy lives in the markup.

## Accessibility

Skip link, visible focus rings, labelled icon buttons, `aria-hidden` on
decoration, and 44px minimum touch targets. `prefers-reduced-motion` disables
the tilt, cursor, stack compression and grain, and lands every reveal open so
nothing can be stranded invisible. `prefers-reduced-transparency` swaps the
translucent panels for solid ones. There is a print stylesheet.
