import { useEffect, useRef, useState } from 'react';
import { navLinks, profile } from '../data/profile.js';
import { useHeaderHeight } from '../hooks/useHeaderHeight.js';
import { useScrolled } from '../hooks/useScrolled.js';
import { useSmoothScroll } from '../hooks/useSmoothScroll.js';

const DESKTOP_NAV_WIDTH = 860; // must match the breakpoint in Header.css

export default function Header() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(100);
  const smoothScroll = useSmoothScroll();

  useHeaderHeight(headerRef);

  /* A drawer left open while the layout widens back to the desktop nav would
     otherwise stay flagged as active. */
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onResize = () => {
      if (window.innerWidth > DESKTOP_NAV_WIDTH) setMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const handleNavClick = (event, href) => {
    setMenuOpen(false);
    smoothScroll(event, href);
  };

  return (
    <header ref={headerRef} className={scrolled ? 'scrolled' : undefined}>
      <nav>
        <a className="logo" href="#home" onClick={(event) => handleNavClick(event, '#home')}>
          {profile.shortName}
        </a>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
          {navLinks.map(({ href, label, icon }) => (
            <li key={href}>
              <a href={href} onClick={(event) => handleNavClick(event, href)}>
                <i className={icon} aria-hidden="true" /> {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`mobile-menu${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
