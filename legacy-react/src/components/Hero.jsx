import { Fragment, useMemo } from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/lokesh.jpeg';
import { floatingCode, heroButtons, profile } from '../data/profile.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import Section from './Section.jsx';

const NODE_COUNT = 12;

/* Scattered nodes joined by rotated line segments — a suggestion of a neural
   net rather than an accurate one. Positions are generated once so the shape
   stays put across re-renders. */
function AiBrain() {
  const nodes = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, (_, index) => ({
        id: index,
        node: {
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
          animationDelay: `${Math.random() * 2}s`,
        },
        // The first node anchors the cluster and gets no incoming edge.
        connection:
          index === 0
            ? null
            : {
                width: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 3}s`,
              },
      })),
    [],
  );

  return (
    <div className="ai-brain" aria-hidden="true">
      {nodes.map(({ id, node, connection }) => (
        // Fragment, not a wrapper div: the nodes position absolutely against
        // .ai-brain and an extra element in between only invites confusion.
        <Fragment key={id}>
          <div className="brain-node" style={node} />
          {connection && <div className="brain-connection" style={connection} />}
        </Fragment>
      ))}
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <Section id="home" className="hero">
      {!reduced && <AiBrain />}

      <div className="hero-content">
        <img src={photo} alt={profile.photoAlt} className="hero-photo" width="210" height="210" />
        <p className="hero-tagline">{profile.tagline}</p>
        <h1 className="hero-title">{profile.name}</h1>
        {/* The step count is the role's own length, so the typewriter stays in
            sync with the copy when the role is edited in data/profile.js. */}
        <div className="ai-subtitle" style={{ '--role-chars': profile.role.length }}>
          <span>{profile.role}</span>
        </div>
        <p className="hero-description">{profile.heroDescription}</p>

        <div className="hero-buttons">
          {heroButtons.map(({ to, href, label, icon, variant }) => {
            const content = (
              <>
                <i className={icon} aria-hidden="true" /> {label}
              </>
            );
            const className = `btn-spectacular ${variant}`;

            // `to` is an in-app route, `href` is off-site (mailto:).
            return to ? (
              <Link key={label} to={to} className={className}>
                {content}
              </Link>
            ) : (
              <a key={label} href={href} className={className}>
                {content}
              </a>
            );
          })}
        </div>
      </div>

      {/* A full-viewport hero shows no edge, so nothing signals that the page
          continues. A real anchor rather than a decorative chevron: it lands on
          the same target a click would, works from the keyboard, and inherits
          the smooth scroll and header offset already set in base.css. */}
      <a href="#highlights" className="hero-scroll-cue" aria-label="Scroll to highlights">
        <i className="fas fa-chevron-down" aria-hidden="true" />
      </a>

      <div className="floating-code" aria-hidden="true">
        {floatingCode.map((line) => (
          <div className="code-line" key={line}>
            {line}
          </div>
        ))}
      </div>
    </Section>
  );
}
