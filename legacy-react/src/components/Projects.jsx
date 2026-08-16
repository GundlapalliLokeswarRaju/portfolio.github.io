import { projects } from '../data/projects.js';
import { useCountUp } from '../hooks/useCountUp.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import { useCardPointer } from '../hooks/useCardPointer.js';
import CardFx from './CardFx.jsx';
import Section from './Section.jsx';

/* Splits a stat into the number and the words around it: "20,000+ Recordings"
   becomes ["", "20,000", "+ Recordings"]. Anything without a leading figure —
   "Grounded, Not Hallucinated" — simply doesn't match and renders as written. */
const STAT_PATTERN = /^(\D*?)(\d[\d,]*)(.*)$/s;

function StatTicker({ text }) {
  const reduced = useReducedMotion();
  const match = STAT_PATTERN.exec(text);
  const raw = match?.[2] ?? '';
  const target = Number(raw.replace(/,/g, ''));
  // Hooks cannot be called conditionally, so the counter is always created and
  // simply ignored for stats that carry no number.
  const [ref, value] = useCountUp(target || 0, !reduced && Boolean(match));

  if (!match) return <div className="stat">{text}</div>;

  const [, prefix, , suffix] = match;
  // Re-apply grouping only if the source had it, so "20,000" counts through
  // 8,412 rather than 8412 while "152" stays plain.
  const shown = raw.includes(',') ? value.toLocaleString('en-US') : String(value);

  return (
    <div className="stat" ref={ref}>
      {prefix}
      <span className="stat-figure">{shown}</span>
      {suffix}
    </div>
  );
}

/* One card per project. Extracted from the map because each card runs its own
   spotlight hook, and a hook cannot be called from inside a loop. */
function ProjectCard({ title, date, client, description, features, tech, stats, links }) {
  const reduced = useReducedMotion();
  // Spotlight and tilt are pointer affordances: meaningless on touch, and
  // unwanted when reduced motion is asked for. The hook hands back a bare ref.
  const { ref, ...pointer } = useCardPointer(!reduced);

  return (
    <article className="project-card-3d fx-card" ref={ref} {...pointer}>
      <CardFx />

      <div className="project-header">
        <h3 className="project-title-glow">{title}</h3>
        <div className="project-date">{date}</div>
      </div>

      <p className="project-client">{client}</p>

      {/* Sits directly under the title: a reachable demo or repo is the
          first thing a reviewer clicks, so it shouldn't be buried at the
          bottom of the card. Omitted entirely for client work that
          can't be linked. */}
      {links?.length > 0 && (
        <div className="project-links">
          {links.map(({ label, href, icon }) => (
            <a
              key={href}
              className="project-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={icon} aria-hidden="true" /> {label}
            </a>
          ))}
        </div>
      )}

      <div className="project-description">
        <p>{description}</p>
      </div>

      <div className="project-features">
        {features.map(({ icon, text }) => (
          <div className="feature" key={text}>
            <i className={icon} aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>

      <div className="project-tech-tags">
        {tech.map((item, i) => (
          // --i staggers the shimmer so the row lights up left to right
          // instead of every tag flashing at once.
          <span className="tech-tag-neon" key={item} style={{ '--i': i }}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-stats">
        {stats.map((stat) => (
          <StatTicker key={stat} text={stat} />
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="projects-section">
      <h2 className="section-title-amazing">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
