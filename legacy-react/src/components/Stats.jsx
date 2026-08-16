import { stats } from '../data/stats.js';
import { useCountUp } from '../hooks/useCountUp.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import Section from './Section.jsx';

/* Split out so each card owns its own counter — hooks can't run in a loop. */
function StatCard({ icon, count, label, animate }) {
  const [ref, value] = useCountUp(count, { enabled: animate });

  return (
    <div className="stat-card-amazing">
      <div className="stat-icon">
        <i className={icon} aria-hidden="true" />
      </div>
      <div className="stat-number-amazing" ref={ref}>
        {value}
      </div>
      <div className="stat-label-amazing">{label}</div>
    </div>
  );
}

export default function Stats() {
  const reduced = useReducedMotion();

  // id is the hero scroll cue's target — the cue is the "what's next" signal
  // for a hero that otherwise fills the viewport with no edge showing.
  return (
    <Section id="highlights" className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} animate={!reduced} />
        ))}
      </div>
    </Section>
  );
}
