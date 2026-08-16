import { useEffect } from 'react';

/* Feeds the header's real height back into CSS as --header-h, so anchor scroll
   offsets stay correct even when the nav wraps to two lines at an awkward
   width. Measuring beats hard-coding: the token is only a starting guess. */
export function useHeaderHeight(ref) {
  useEffect(() => {
    const header = ref.current;
    if (!header) return undefined;

    const apply = () => {
      const { height } = header.getBoundingClientRect();
      if (height) document.documentElement.style.setProperty('--header-h', `${height}px`);
    };

    apply();

    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(apply);
      observer.observe(header);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [ref]);
}
