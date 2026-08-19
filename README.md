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
resume.html             The CV, laid out for A4 print (see below).
robots.txt              Allows everything; points at the sitemap.
sitemap.xml             The one indexable URL. resume.html is noindex.
assets/
  css/styles.css        Design tokens, then sections in page order,
                        then overlays and preferences last.
  css/resume.css        The CV only. Print-first, deliberately plain.
  js/main.js            Six independent behaviours (see below).
  img/lokesh.jpeg       Portrait.
```

That is the whole repository. There is no build directory, no config and no
dependency tree, because there is nothing to build — what is committed here is
byte-for-byte what gets served. The previous React 19 + Vite version lived in
`legacy-react/` until it was deleted; it is in the history if it is ever wanted.

## Icons

38 icons, inlined as `<symbol>` definitions in a hidden `<svg class="sprite">` at
the top of `<body>`, drawn with `<svg class="icon"><use href="#i-name"></use></svg>`.

They used to be Font Awesome from a CDN, which meant ~100KB of render-blocking
third-party CSS plus a webfont for 38 glyphs — on a page with no other
dependencies. Inlined they cost ~20KB in `index.html` (~7KB gzipped), no request
and no third party.

`.icon` is sized `width: 1em; height: 1em; fill: currentColor`, so an icon still
takes its size from the `font-size` of its context and its colour from the
surrounding text — exactly as it behaved when it was a font glyph. That is why
rules like `.feature .icon` still set `font-size`.

Artwork is Font Awesome Free 7.3.1, [CC BY 4.0](https://fontawesome.com/license/free).
To add one: install `@fortawesome/fontawesome-free`, copy the `<path>` out of
`svgs/solid/<name>.svg` into a new `<symbol id="i-<name>">` keeping that file's
own `viewBox`, then reference it. Nothing needs rebuilding.

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

## Swapping the hero still for video

The hero is built so footage drops in without a redesign. The CSS grades, masks
and feathers a `<video>` exactly as it does the `<img>`.

1. Put the file at `assets/video/hero.mp4`.
2. In `index.html`, find the `── Video slot ──` comment in the hero and remove
   the two comment markers around the `<video>` block inside it.

That is the whole change. Encode with:

```bash
ffmpeg -i raw.mov -t 12 -an -vf "scale=720:-2" \
       -c:v libx264 -crf 26 -pix_fmt yuv420p -movflags +faststart \
       assets/video/hero.mp4
```

`-an` strips the audio track — it is never heard and it is dead weight.
`+faststart` moves the index to the front so playback can begin before the file
finishes downloading. Aim under ~2 MB. **A seamless loop matters more than
length:** 8–12 seconds that return to where they started beats 30 seconds with a
visible cut.

### Why the still stays in the markup

It is the poster, the buffering frame, the 404 fallback, the unsupported-codec
fallback, and what shows under `prefers-reduced-motion` — where playback is
deliberately never started. The video sits on top at `opacity: 0` and only fades
in once the browser fires `canplay`. Every failure mode therefore lands on the
photograph, which is already loaded and already correct, rather than on a black
rectangle.

**Leave the block commented until the file exists.** An active `<video>` with a
missing source puts a 404 in every visitor's console.

## The CV

The CV is a PDF — `Lokeswar_Raju_Resume.pdf` in the repo root. `resume.html` is
only a frame around it: a header with a **Download PDF** button, and the document
itself embedded below.

### Updating it

```
1. Export your new CV over the top of Lokeswar_Raju_Resume.pdf  (same filename)
2. git add Lokeswar_Raju_Resume.pdf && git commit -m "Update CV" && git push
```

That is the whole process — no HTML or CSS is touched. **The filename is the
contract.** `resume.html` references it in six places, so a PDF exported as
`Resume_v3_final.pdf` does not "just work"; it leaves the page pointing at a file
that is no longer there. Always overwrite, never add alongside.

Two things worth knowing:

- **It is not live until it is pushed.** Overwriting the local file changes
  nothing for a recruiter. GitHub Pages serves what is in the repo, and then
  caches it for around ten minutes, so allow a few minutes after the push before
  concluding the old one is stuck.
- **The download filename is set separately.** The `download` attribute renames
  the file as it lands in the reader's Downloads folder — currently
  `Lokeswar_Raju_Gundlapalli_AI_Engineer_CV.pdf`, which is more use to a
  recruiter sorting a folder of attachments than whatever the repo file is
  called. That one string is in `resume.html` and is the only thing there you may
  want to edit.

### Why `<object>` and not `<iframe>`

When a browser cannot render a PDF inline, `<object>` renders its child content
instead — so the page falls back to a real download prompt with contact details.
An `<iframe>` in the same situation shows an empty frame, and the reader concludes
the CV is broken. That fallback is not an edge case: it is most mobile browsers,
which is a large share of the people who open a link like this.

### Keeping it honest

The PDF, the visible copy in `index.html`, and the `knowsAbout` list in the
JSON-LD block should all state the same facts — same job titles, same dates, same
grades. A recruiter reads the page and the CV side by side, and a contradiction
between them is more damaging than either version's weaknesses. When you change
the PDF, re-read the site against it.

## Editing content

Everything is in `index.html`. There is no data layer to keep in sync — the
trade for having no build step is that the copy lives in the markup.

## Accessibility

Skip link, visible focus rings, labelled icon buttons, `aria-hidden` on
decoration, and 44px minimum touch targets. `prefers-reduced-motion` disables
the tilt, cursor, stack compression and grain, and lands every reveal open so
nothing can be stranded invisible. `prefers-reduced-transparency` swaps the
translucent panels for solid ones. There is a print stylesheet.

A `<noscript>` block lands every `[data-reveal]` element open too. Those elements
start at `opacity: 0` and are revealed by `main.js`, so without that block a page
whose script does not run — parse error, blocked script, stripped file — is a
black rectangle and a portrait, with all the copy present but invisible.
