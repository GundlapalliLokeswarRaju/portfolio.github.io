import { useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

/* Returns a click handler for in-page anchors. Falls back to the browser's
   default jump when the target is missing, and to an instant jump under
   reduced motion. */
export function useSmoothScroll() {
  const reduced = useReducedMotion();

  return useCallback(
    (event, href) => {
      if (!href?.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });

      // Keep the URL hash in sync so the link is still shareable/back-navigable.
      window.history.replaceState(null, '', href);
    },
    [reduced],
  );
}
