import { experience } from '../data/experience.js';
import { useCardPointer } from '../hooks/useCardPointer.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import CardFx from './CardFx.jsx';
import Section from './Section.jsx';

/* Extracted from the map because each item runs its own pointer hook, and a
   hook cannot be called from inside a loop. */
function TimelineItem({ date, title, company, summary, highlights }) {
  const reduced = useReducedMotion();
  const { ref, ...pointer } = useCardPointer(!reduced);

  return (
    <div className="timeline-item fx-card" ref={ref} {...pointer}>
      <CardFx />

      <div className="timeline-date">{date}</div>

      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-company">{company}</p>

        <div className="timeline-description">
          <p>{summary}</p>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" className="experience-section">
      <h2 className="section-title-amazing">Professional Journey</h2>

      <div className="timeline-container">
        {experience.map((job) => (
          <TimelineItem key={`${job.company}-${job.date}`} {...job} />
        ))}
      </div>
    </Section>
  );
}
