import { useReducedMotion } from '../hooks/useReducedMotion.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

/* Wraps every page section so they share one reveal behaviour and one place to
   change it. The `reveal` class holds the hidden start state; `animate-in`
   (utilities.css) overrides it once the section scrolls into view. */
export default function Section({ id, className = '', children }) {
  const reduced = useReducedMotion();
  const [ref, revealed] = useScrollReveal(!reduced);

  const classes = ['reveal', className, revealed && 'animate-in'].filter(Boolean).join(' ');

  return (
    <section id={id} ref={ref} className={classes}>
      {children}
    </section>
  );
}
