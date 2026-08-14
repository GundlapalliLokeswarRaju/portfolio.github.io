import { skillGroups } from '../data/skills.js';
import Section from './Section.jsx';

export default function Skills() {
  return (
    <Section id="skills" className="skills-section">
      <h2 className="section-title-amazing">Technical Arsenal</h2>

      <div className="skills-container">
        {skillGroups.map(({ icon, title, skills }) => (
          <div className="skill-card-floating" key={title}>
            <div className="skill-icon">
              <i className={icon} aria-hidden="true" />
            </div>
            <h3 className="skill-title">{title}</h3>

            <div className="skill-tags-amazing">
              {skills.map((skill) => (
                <span className="skill-tag-glow" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
