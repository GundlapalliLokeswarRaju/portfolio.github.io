import photo from '../assets/lokesh.jpeg';
import { aboutCards, education } from '../data/about.js';
import { profile } from '../data/profile.js';
import Section from './Section.jsx';

export default function About() {
  return (
    <Section id="about" className="about-section">
      <h2 className="section-title-amazing">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          {aboutCards.map(({ title, body }) => (
            <div className="about-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className="about-visual">
          <div className="profile-glow">
            <img src={photo} alt={profile.photoAlt} className="profile-photo" loading="lazy" />
          </div>

          <div className="education-timeline">
            <h4>🎓 Education Excellence</h4>
            {education.map(({ degree, institution, grade }) => (
              <div className="edu-item" key={degree}>
                <strong>{degree}</strong> - {institution}
                <br />
                <span className="grade">{grade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
