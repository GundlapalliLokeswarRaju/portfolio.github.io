import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/* CSS already honours prefers-reduced-motion, but the JS-driven effects
   (canvas rain, generated particles, counters) have to opt in themselves.
   This subscribes to the query rather than reading it once, so toggling the
   OS setting takes effect without a reload. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(QUERY);
    const onChange = (event) => setReduced(event.matches);

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
