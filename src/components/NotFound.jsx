import { Link } from 'react-router-dom';
import Section from './Section.jsx';

export default function NotFound() {
  return (
    <Section className="notfound-section">
      <h2 className="section-title-amazing">Page Not Found</h2>

      <div className="notfound-card">
        <div className="notfound-code">404</div>
        <p>That page doesn&apos;t exist — it may have been renamed or never existed at all.</p>

        <Link to="/" className="btn-spectacular btn-primary-spec">
          <i className="fas fa-home" aria-hidden="true" /> Back to Home
        </Link>
      </div>
    </Section>
  );
}
