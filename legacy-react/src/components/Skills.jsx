import { skillGroups } from '../data/skills.js';
import { useCardPointer } from '../hooks/useCardPointer.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import CardFx from './CardFx.jsx';
import Section from './Section.jsx';

/* Extracted from the map because each card runs its own pointer hook, and a
   hook cannot be called from inside a loop. */
function SkillCard({ icon, title, skills }) {
  const reduced = useReducedMotion();
  const { ref, ...pointer } = useCardPointer(!reduced);

  return (
    <div className="skill-card-floating fx-card" ref={ref} {...pointer}>
      <CardFx />

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
  );
}

export default function Skills() {
  return (
    <Section id="skills" className="skills-section">
      <h2 className="section-title-amazing">Technical Arsenal</h2>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </Section>
  );
}
