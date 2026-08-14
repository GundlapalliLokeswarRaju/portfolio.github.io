import { projects } from '../data/projects.js';
import Section from './Section.jsx';

export default function Projects() {
  return (
    <Section id="projects" className="projects-section">
      <h2 className="section-title-amazing">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map(({ title, date, client, description, features, tech, stats, links }) => (
          <article className="project-card-3d" key={title}>
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
              {tech.map((item) => (
                <span className="tech-tag-neon" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-stats">
              {stats.map((stat) => (
                <div className="stat" key={stat}>
                  {stat}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
