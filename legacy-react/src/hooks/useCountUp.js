import { useEffect, useState } from 'react';
import { useInViewport } from './useInViewport.js';

const DURATION = 1400;

/* Decelerating: the number arrives at its value rather than slamming into it,
   and the last few hundred milliseconds are what make it read as a count
   instead of a flicker. */
const easeOut = (t) => 1 - (1 - t) ** 3;

/* Counts 0 -> target the first time the element reaches the trigger line.

   Built on useInViewport rather than its own observer for the reason documented
   there: an element that is jumped past — End key, deep link, dragged scrollbar
   — never fires an IntersectionObserver threshold, and a counter gated on one
   would sit at 0 permanently. These numbers are the evidence on the page; they
   must not be able to end up showing zero. */
export function useCountUp(target, enabled = true) {
  const [ref, entered] = useInViewport(enabled);
  const [value, setValue] = useState(enabled ? 0 : target);

  useEffect(() => {
    if (!entered) return undefined;

    if (!enabled) {
      setValue(target);
      return undefined;
    }

    let frame = 0;
    let start;

    const tick = (now) => {
      start ??= now;
      const progress = Math.min((now - start) / DURATION, 1);
      setValue(Math.round(target * easeOut(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [entered, enabled, target]);

  return [ref, value];
}
