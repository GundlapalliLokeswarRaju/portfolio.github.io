import { useEffect, useRef, useState } from 'react';

/* Reveal once the element's top edge rises past this fraction of the viewport
   height — slightly inside the bottom edge, so content is already settled by
   the time the reader's eye reaches it. */
const TRIGGER_RATIO = 0.92;

/* Latching "has this element reached the trigger line yet" — once true, it
   stays true.

   Deliberately NOT an IntersectionObserver. An observer only fires when the
   intersection ratio crosses a threshold, so an element that is skipped over
   entirely never fires at all: drag the scrollbar to the bottom, press End, or
   open a deep link like #contact, and every section in between goes from
   "below the viewport" to "above the viewport" without ever being on screen.
   Anything gated on that observer — a fade-in, a counter — then stays in its
   initial state permanently, which is how content ends up invisible.

   Comparing against the trigger line instead answers "is it at or past the
   line", which is true whether the element was scrolled to or jumped past.
   Reads are rAF-throttled and the listeners detach on the first hit, so this
   costs one getBoundingClientRect per element per frame while scrolling, and
   nothing at all afterwards. */
export function useInViewport(enabled = true) {
  const ref = useRef(null);
  const [entered, setEntered] = useState(!enabled);

  useEffect(() => {
    if (!enabled || !ref.current) {
      setEntered(true);
      return undefined;
    }

    let frame = 0;
    let settled = false;

    const teardown = () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const check = () => {
      frame = 0;
      if (settled) return;

      const node = ref.current;
      if (!node) return;
      if (node.getBoundingClientRect().top > window.innerHeight * TRIGGER_RATIO) return;

      settled = true;
      setEntered(true);
      teardown();
    };

    // Declaration, not a const: teardown() references it above this line.
    function schedule() {
      if (!frame) frame = requestAnimationFrame(check);
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    /* Check on the next frame rather than now, so the hidden start state gets
       painted once and the transition actually runs for whatever is already
       on screen at load. */
    schedule();

    return teardown;
  }, [enabled]);

  return [ref, entered];
}
