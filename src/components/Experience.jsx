import { experience } from '../data/experience.js';
import Section from './Section.jsx';

export default function Experience() {
  return (
    <Section id="experience" className="experience-section">
      <h2 className="section-title-amazing">Professional Journey</h2>

      <div className="timeline-container">
        {experience.map(({ date, title, company, summary, highlights }) => (
          <div className="timeline-item" key={`${company}-${date}`}>
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
        ))}
      </div>
    </Section>
  );
}
