import { useEffect, useState } from 'react';

/* True once the page has scrolled past `threshold`. Drives the header's
   heavier glass state. Passive listener so it never blocks scrolling. */
export function useScrolled(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    onScroll(); // catch a page loaded already scrolled (refresh mid-page)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
