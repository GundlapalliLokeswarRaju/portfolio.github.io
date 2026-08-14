import { useEffect, useState } from 'react';
import { useInViewport } from './useInViewport.js';

/* Counts 0 → target once the element reaches the viewport, then stops.
   Uses rAF rather than setInterval so the count stays in step with the
   compositor and pauses with the tab.

   Returns [ref, value] — attach the ref to the element that should trigger it. */
export function useCountUp(target, { duration = 2000, enabled = true } = {}) {
  const [ref, entered] = useInViewport(enabled);
  const [value, setValue] = useState(enabled ? 0 : target);

  useEffect(() => {
    if (!entered) return undefined;

    // Reduced motion: show the real number rather than animating to it. Never
    // leave a permanent zero on screen.
    if (!enabled) {
      setValue(target);
      return undefined;
    }

    let frame = 0;
    let startedAt = 0;

    const step = (now) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);

      if (progress < 1) {
        setValue(Math.floor(target * progress));
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [entered, enabled, target, duration]);

  return [ref, value];
}
