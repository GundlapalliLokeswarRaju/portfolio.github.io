import { useInViewport } from './useInViewport.js';

/* One-shot reveal: the element starts offset and fades up the first time it
   reaches the trigger line.

   `revealed` starts true whenever the effect is disabled (reduced motion) so
   content is never left invisible with nothing able to un-hide it. See
   useInViewport for why this isn't an IntersectionObserver. */
export function useScrollReveal(enabled = true) {
  return useInViewport(enabled);
}
