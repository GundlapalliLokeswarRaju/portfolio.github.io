/* The two visible layers of the card treatment, as real elements rather than
   pseudo-elements.

   ::before and ::after are already spoken for on the cards this has to serve —
   the timeline dot is .timeline-item::before, the skill card's gradient border
   is .skill-card-floating::before — so a pseudo-element implementation would
   need a different pair per card type, or would quietly overwrite one of them.
   Two spans cost two DOM nodes and work identically everywhere.

   Purely decorative, hence aria-hidden and pointer-events: none in the CSS. */
export default function CardFx() {
  return (
    <>
      <span className="fx-spotlight" aria-hidden="true" />
      <span className="fx-beam" aria-hidden="true" />
    </>
  );
}
