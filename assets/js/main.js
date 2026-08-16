/* ==========================================================================
   Lokeswar Raju Gundlapalli — portfolio behaviour
   Plain ES modules-free JavaScript. No framework, no build step, no bundle.

   Six independent features, each guarded so that a browser lacking any one API
   loses that feature and nothing else. Everything motion-related checks the
   reduced-motion preference first and simply does not initialise.
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Every scroll-driven feature registers here and is called from one rAF-
     throttled listener. Six separate scroll listeners each doing their own
     layout reads is how a page ends up janky; one pass, one frame. */
  var onScroll = [];

  function scheduleScroll() {
    if (scheduleScroll.frame) return;
    scheduleScroll.frame = requestAnimationFrame(function () {
      scheduleScroll.frame = 0;
      /* Iterate a snapshot. Several of these callbacks unregister themselves
         once their work is finished, and splicing the live array while walking
         it with an incrementing index makes the *next* callback shift into the
         slot just passed — so it gets skipped for that frame.

         That is not theoretical. Press End on a fresh page: the reveal pass
         finishes and removes itself, the counter pass silently loses its turn,
         and with no further scroll event it never runs again — leaving every
         headline figure reading 0, which is the one failure this whole
         trigger-line approach exists to prevent. */
      var due = onScroll.slice();
      for (var i = 0; i < due.length; i++) due[i]();
    });
  }

  /* ------------------------------------------------------------------------
     1. Reveal on scroll
     ------------------------------------------------------------------------
     Compares each element against a trigger line rather than using an
     IntersectionObserver, on purpose. An observer only fires when the
     intersection ratio crosses a threshold, so an element that is skipped over
     entirely never fires at all — press End, drag the scrollbar, or open a deep
     link like #contact, and every section in between goes from below the
     viewport to above it without ever being on screen. Anything gated on that
     observer then stays hidden permanently.

     Asking "is it at or past the line" is true whether it was scrolled to or
     jumped past, so content cannot get stranded invisible. */
  function initReveal() {
    var items = [].slice.call(document.querySelectorAll('[data-reveal]'));
    if (!items.length) return;

    if (reduced) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    function check() {
      var line = window.innerHeight * 0.92;
      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].getBoundingClientRect().top <= line) {
          items[i].classList.add('is-in');
          items.splice(i, 1);
        }
      }
      if (!items.length) {
        var at = onScroll.indexOf(check);
        if (at > -1) onScroll.splice(at, 1);
      }
    }

    onScroll.push(check);
    check();
  }

  /* ------------------------------------------------------------------------
     2. Count-up
     ------------------------------------------------------------------------
     These figures are the evidence the whole page rests on, so the failure mode
     that matters is a stat stuck reading 0. Same trigger-line approach as the
     reveals, and the value is written once immediately if motion is reduced. */
  function initCounters() {
    var els = [].slice.call(document.querySelectorAll('[data-count]'));
    if (!els.length) return;

    function render(el, value) {
      el.textContent = value.toLocaleString('en-US') + (el.dataset.suffix || '');
    }

    if (reduced) {
      els.forEach(function (el) { render(el, Number(el.dataset.count)); });
      return;
    }

    var pending = els.slice();

    function run(el) {
      var target = Number(el.dataset.count) || 0;
      var start;
      var DURATION = 1600;

      function frame(now) {
        if (start === undefined) start = now;
        var p = Math.min((now - start) / DURATION, 1);
        // Decelerating: the number arrives at its value instead of slamming
        // into it, and the long tail is what reads as counting.
        render(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    function check() {
      var line = window.innerHeight * 0.92;
      for (var i = pending.length - 1; i >= 0; i--) {
        if (pending[i].getBoundingClientRect().top <= line) {
          run(pending[i]);
          pending.splice(i, 1);
        }
      }
      if (!pending.length) {
        var at = onScroll.indexOf(check);
        if (at > -1) onScroll.splice(at, 1);
      }
    }

    onScroll.push(check);
    check();
  }

  /* ------------------------------------------------------------------------
     3. Scroll stack
     ------------------------------------------------------------------------
     The cards are sticky in CSS; this only supplies --p, how far each card has
     been travelled past, as 0 -> 1. CSS turns that into scale and opacity.

     Progress is the distance the next card still has to travel before it sits
     exactly on top of this one, normalised by how far that is in total.

     Two things that look like details and are not:

     - The span is THIS card's height plus the gap, not the next card's height.
       What the next card must close is the length of the card it is covering;
       normalising by its own height makes a tall card following a short one
       report almost no progress until the very end.

     - Heights come from offsetHeight, not getBoundingClientRect. The rect is
       post-transform, and these cards are being scaled by the very value this
       function computes — feeding a scaled height back in makes the progress
       depend on its own output. offsetHeight is the untransformed layout box. */
  function initStack() {
    var stack = document.querySelector('[data-stack]');
    if (!stack || reduced) return;
    if (window.matchMedia('(max-width: 48rem)').matches) return;

    var cards = [].slice.call(stack.children);
    if (cards.length < 2) return;

    function check() {
      var gap = parseFloat(getComputedStyle(stack).rowGap) || 0;

      for (var i = 0; i < cards.length - 1; i++) {
        var hereTop = cards[i].getBoundingClientRect().top;
        var nextTop = cards[i + 1].getBoundingClientRect().top;
        var span = cards[i].offsetHeight + gap;
        var remaining = Math.max(nextTop - hereTop, 0);
        var p = span > 0 ? 1 - Math.min(remaining / span, 1) : 0;
        cards[i].style.setProperty('--p', p.toFixed(3));
      }
      // Nothing follows the last card, so nothing ever covers it.
      cards[cards.length - 1].style.setProperty('--p', '0');
    }

    onScroll.push(check);
    window.addEventListener('resize', scheduleScroll);
    check();
  }

  /* ------------------------------------------------------------------------
     4. Panel spotlight
     ------------------------------------------------------------------------
     Publishes the pointer position in each panel's own coordinates; the glow
     itself is a gradient in CSS reading --mx/--my. Keeping the look in the
     stylesheet is what lets one handler serve panels, project cards and contact
     tiles without knowing any of their layouts.

     The rect is measured on enter, not per move: getBoundingClientRect inside a
     pointermove handler forces layout, and a panel cannot resize mid-hover. */
  function initSpotlight() {
    if (!finePointer || reduced) return;

    var panels = document.querySelectorAll('[data-panel]');
    Array.prototype.forEach.call(panels, function (panel) {
      var box = null;
      var frame = 0;

      panel.addEventListener('pointerenter', function () {
        box = panel.getBoundingClientRect();
      });

      panel.addEventListener('pointermove', function (e) {
        if (!box) box = panel.getBoundingClientRect();
        var x = e.clientX - box.left;
        var y = e.clientY - box.top;
        cancelAnimationFrame(frame);
        // Pointer events outpace the compositor on a fast sweep; one write per
        // frame is all the gradient can actually show.
        frame = requestAnimationFrame(function () {
          panel.style.setProperty('--mx', x.toFixed(1) + 'px');
          panel.style.setProperty('--my', y.toFixed(1) + 'px');
        });
      });

      panel.addEventListener('pointerleave', function () {
        cancelAnimationFrame(frame);
        box = null;
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Custom cursor
     ------------------------------------------------------------------------
     Built only when there is a real pointer, so touch never pays for it and
     can never end up with the native cursor hidden and nothing drawn.

     The dot tracks exactly and the ring lags behind it — the lag is the whole
     effect; a ring pinned to the dot just looks like a bigger cursor. */
  function initCursor() {
    if (!finePointer || reduced) return;

    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    var tx = window.innerWidth / 2;
    var ty = window.innerHeight / 2;
    var rx = tx;
    var ry = ty;

    document.addEventListener('pointermove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
    }, { passive: true });

    (function loop() {
      // Exponential follow: each frame closes 18% of the remaining distance,
      // which decelerates naturally without needing a duration.
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(loop);
    })();

    var hot = 'a, button, [data-panel], input, textarea, select';
    document.addEventListener('pointerover', function (e) {
      if (e.target.closest && e.target.closest(hot)) ring.classList.add('is-hot');
    });
    document.addEventListener('pointerout', function (e) {
      if (e.target.closest && e.target.closest(hot)) ring.classList.remove('is-hot');
    });
  }

  /* ------------------------------------------------------------------------
     6. Navigation — condensed bar, scroll spy, mobile menu
     ------------------------------------------------------------------------ */
  function initNav() {
    var nav = document.getElementById('nav');
    var toggle = nav && nav.querySelector('.nav-toggle');
    var links = [].slice.call(document.querySelectorAll('.nav-link'));
    if (!nav) return;

    var sections = links
      .map(function (link) {
        var id = link.getAttribute('href');
        return id && id.charAt(0) === '#' ? document.querySelector(id) : null;
      })
      .map(function (el, i) { return { el: el, link: links[i] }; })
      .filter(function (s) { return s.el; });

    function check() {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);

      /* The section whose top has most recently passed under the nav is the
         one being read. Walking backwards finds it without tracking bottoms.

         Document position comes from the rect plus scrollY, not offsetTop:
         offsetTop is measured from the nearest positioned ancestor, and both
         .page and .section are position: relative, so offsetTop here is a
         section-relative number that only coincidentally resembles the
         document one. */
      var mark = nav.offsetHeight + 24;
      var active = null;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.getBoundingClientRect().top <= mark) { active = sections[i]; break; }
      }
      links.forEach(function (l) { l.classList.remove('is-active'); });
      if (active) active.link.classList.add('is-active');
    }

    onScroll.push(check);
    check();

    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.getAttribute('data-open') === 'true';
        nav.setAttribute('data-open', String(!open));
        toggle.setAttribute('aria-expanded', String(!open));
      });

      // Choosing a destination should close the menu covering it.
      links.forEach(function (link) {
        link.addEventListener('click', function () {
          nav.setAttribute('data-open', 'false');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* ---------------------------------------------------------------------- */

  function init() {
    initReveal();
    initCounters();
    initStack();
    initSpotlight();
    initCursor();
    initNav();
    window.addEventListener('scroll', scheduleScroll, { passive: true });
    window.addEventListener('resize', scheduleScroll);

    /* Re-check once layout has settled, not only when the reader scrolls.

       Everything above is evaluated against a trigger line, and the first
       evaluation happens while the web fonts are still swapping and the
       portrait has not decoded. Both move content down. An element that was
       below the line at that moment and is above it a beat later would, without
       these, wait for a scroll event that may never come — landing on the page
       and not scrolling left the hero buttons stranded at opacity 0.

       Cheap to be thorough here: the checks unregister themselves once their
       work is done, so these are at most a few extra frames. */
    window.addEventListener('load', scheduleScroll);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleScroll).catch(function () {});
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
