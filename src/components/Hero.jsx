import { Fragment, useMemo } from 'react';
import photo from '../assets/lokesh.jpeg';
import { floatingCode, heroButtons, profile } from '../data/profile.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import { useSmoothScroll } from '../hooks/useSmoothScroll.js';
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
  const smoothScroll = useSmoothScroll();

  return (
    <Section id="home" className="hero">
      {!reduced && <AiBrain />}

      <div className="hero-content">
        <img src={photo} alt={profile.photoAlt} className="hero-photo" width="210" height="210" />
        <h1 className="hero-title">{profile.name}</h1>
        <div className="ai-subtitle">{profile.role}</div>
        <p className="hero-description">{profile.heroDescription}</p>

        <div className="hero-buttons">
          {heroButtons.map(({ href, label, icon, variant }) => (
            <a
              key={label}
              href={href}
              className={`btn-spectacular ${variant}`}
              onClick={(event) => smoothScroll(event, href)}
            >
              <i className={icon} aria-hidden="true" /> {label}
            </a>
          ))}
        </div>
      </div>

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
