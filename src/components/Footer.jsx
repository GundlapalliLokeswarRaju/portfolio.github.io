import { socialLinks } from '../data/contact.js';
import { profile } from '../data/profile.js';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="social-links">
          {socialLinks.map(({ icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <i className={icon} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p>&copy; {YEAR} {profile.name}. Crafted with ❤️ and AI</p>
        <p className="footer-tagline">
          Ready to transform your business with AI? Let&apos;s make it happen! 🚀
        </p>
      </div>
    </footer>
  );
}
