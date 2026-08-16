import { useCallback, useEffect, useRef } from 'react';

/* Pointer state for the card effects, shared by projects, skills and timeline.

   Publishes four numbers and draws nothing: --mouse-x/--mouse-y locate the
   spotlight, --tilt-x/--tilt-y drive the 3D rotation. Every visible decision —
   glow radius, tilt depth, which layer reads which variable — stays in
   card-fx.css, which is what lets one handler serve three different card
   layouts that share no markup.

   Deliberately shallow: 5 degrees on a 1100px project card is already a large
   screen-space movement at the corners, and anything more starts to blur text
   under the rotation on lower-DPI displays. */
const MAX_DEG = 5;

export function useCardPointer(enabled = true) {
  const ref = useRef(null);
  const rect = useRef(null);
  const frame = useRef(0);

  const onPointerEnter = useCallback(
    (event) => {
      if (!enabled) return;
      // Measured once per hover: getBoundingClientRect inside a pointermove
      // handler forces layout on a card that is already compositing a
      // backdrop-filter, and the card cannot resize while the pointer is in it.
      rect.current = event.currentTarget.getBoundingClientRect();
    },
    [enabled],
  );

  const onPointerMove = useCallback(
    (event) => {
      if (!enabled) return;
      const el = ref.current;
      if (!el) return;

      const r = rect.current ?? event.currentTarget.getBoundingClientRect();
      const x = event.clientX - r.left;
      const y = event.clientY - r.top;

      cancelAnimationFrame(frame.current);
      // Pointer events outpace the compositor on a fast sweep; one write per
      // frame is all the gradient and the transform can actually show.
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
        el.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
        // -0.5..0.5 from the centre. Y is inverted so that pointing low pushes
        // the top edge away, which is what reads as tilting toward you.
        const px = x / r.width - 0.5;
        const py = y / r.height - 0.5;
        el.style.setProperty('--tilt-x', `${(-py * MAX_DEG).toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${(px * MAX_DEG).toFixed(2)}deg`);
      });
    },
    [enabled],
  );

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    rect.current = null;
    const el = ref.current;
    if (!el) return;
    /* Only the tilt resets. The transform transition eases the card back to
       flat, whereas the spotlight fades out via opacity on :hover ending —
       re-centring --mouse-x too would visibly slide the glow while it faded. */
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return enabled ? { ref, onPointerEnter, onPointerMove, onPointerLeave } : { ref };
}
