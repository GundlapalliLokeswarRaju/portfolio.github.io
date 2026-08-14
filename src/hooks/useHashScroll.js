import { useEffect } from 'react';

/* Restores deep linking.

   With a client-rendered app the browser runs its own "scroll to #contact" pass
   while #root is still empty, finds nothing, and gives up — so opening
   /portfolio.github.io/#projects silently lands you at the top of the page.
   Nothing throws and the console stays clean, which is why it's easy to miss.

   Re-running the jump after mount fixes it. rAF so layout has settled, and a
   try/catch because the hash is user input and `#1` is a valid URL fragment but
   an invalid CSS selector. */
export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === '#') return undefined;

    const frame = requestAnimationFrame(() => {
      try {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      } catch {
        /* Not a valid selector — leave the page where it is. */
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);
}
