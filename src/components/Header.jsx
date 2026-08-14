import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks, profile } from '../data/profile.js';
import { useHeaderHeight } from '../hooks/useHeaderHeight.js';
import { useScrolled } from '../hooks/useScrolled.js';

const DESKTOP_NAV_WIDTH = 860; // must match the breakpoint in Header.css

export default function Header() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(100);
  const { pathname } = useLocation();

  useHeaderHeight(headerRef);

  /* Close the drawer whenever the route changes — including via back/forward,
     which no click handler would catch. */
  useEffect(() => setMenuOpen(false), [pathname]);

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

  return (
    <header ref={headerRef} className={scrolled ? 'scrolled' : undefined}>
      <nav>
        <NavLink className="logo" to="/">
          {profile.shortName}
        </NavLink>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
          {navLinks.map(({ to, label, icon }) => (
            <li key={to}>
              {/* `end` on the index route only — without it "/" would match
                  every path and Home would always look active. */}
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                <i className={icon} aria-hidden="true" /> {label}
              </NavLink>
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
