import { benefits, contactChannels } from '../data/contact.js';
import Section from './Section.jsx';

/* target/rel only on off-site links — mailto: and tel: should stay in place. */
const externalProps = { target: '_blank', rel: 'noopener noreferrer' };

export default function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <h2 className="section-title-amazing">Let&apos;s Build The Future Together</h2>

      <div className="contact-container">
        <div className="contact-card-hologram">
          <h3>Ready to Hire? Let&apos;s Connect! 🚀</h3>
          <p>
            I&apos;m excited to bring my AI expertise to your team and create groundbreaking
            solutions that drive real business results. Let&apos;s discuss how I can contribute to
            your company&apos;s success!
          </p>

          <div className="contact-info-grid">
            {contactChannels.map(({ icon, label, text, href, external }) => (
              <div className="contact-item-glow" key={label}>
                <div className="contact-icon-amazing">
                  <i className={icon} aria-hidden="true" />
                </div>
                <h4>{label}</h4>
                <a href={href} {...(external ? externalProps : {})}>
                  {text}
                </a>
              </div>
            ))}
          </div>

          <div className="hire-me-section">
            <h4>Why Choose Me?</h4>
            <div className="benefits-grid">
              {benefits.map(({ icon, label }) => (
                <div className="benefit" key={label}>
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
