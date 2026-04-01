'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (...paths: string[]) =>
    paths.some(p => (p === '/' ? pathname === '/' : pathname.startsWith(p)));

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleDropdownClick = (e: React.MouseEvent, name: string) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      e.preventDefault();
      toggleDropdown(name);
    }
  };

  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="H4H Logo" className="nav-logo" />
        H4H Gainesville
      </Link>

      <button
        className="nav-toggle"
        aria-label="Menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
        <li className={`has-dropdown${openDropdown === 'about' ? ' open' : ''}`}>
          <Link
            href="/about"
            className={isActive('/about', '/executive-board') ? 'active' : ''}
            onClick={e => handleDropdownClick(e, 'about')}
          >
            About Us
          </Link>
          <ul className="nav-dropdown">
            <li><Link href="/about">Who We Are</Link></li>
            <li><Link href="/executive-board">Executive Board</Link></li>
          </ul>
        </li>

        <li className={`has-dropdown${openDropdown === 'events' ? ' open' : ''}`}>
          <Link
            href="/events"
            className={isActive('/events', '/event-dates', '/sites') ? 'active' : ''}
            onClick={e => handleDropdownClick(e, 'events')}
          >
            Get Involved
          </Link>
          <ul className="nav-dropdown">
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/event-dates">Event Dates</Link></li>
            <li><Link href="/sites">Sites</Link></li>
          </ul>
        </li>

        <li><Link href="/members" className={isActive('/members') ? 'active' : ''}>Members</Link></li>
        <li><Link href="/join" className={isActive('/join') ? 'active' : ''}>Join</Link></li>
        <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        <li><Link href="/donate" className={isActive('/donate') ? 'active' : ''}>Donate</Link></li>

        <li className="nav-social">
          <a href="https://www.instagram.com/h4hgnv" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
