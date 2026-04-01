import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="H4H Logo" className="footer-logo" />
          <div className="footer-brand">H4H Gainesville</div>
          <p className="footer-tagline">
            Promoting heart health among the homeless population through
            education, screenings, and meaningful volunteer opportunities.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/h4hgnv" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/events">Get Involved</Link></li>
            <li><Link href="/members">Members</Link></li>
            <li><Link href="/join">Join</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>More</h4>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><a href="https://www.h4hinternational.org/" target="_blank" rel="noopener">H4H International</a></li>
            <li><a href="https://groupme.com/join_group/109858634/NknQTwCA" target="_blank" rel="noopener">Join GroupMe</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>University of Florida<br />Gainesville, FL 32611</p>
          <p style={{ marginTop: '12px' }}>
            <a href="mailto:hhgainesville@gmail.com">hhgainesville@gmail.com</a>
          </p>
          <p style={{ marginTop: '8px' }}>
            <a href="https://www.instagram.com/h4hgnv" target="_blank" rel="noopener">@h4hgnv</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 H4H Gainesville · University of Florida</span>
        <span>Gainesville, FL 32611</span>
      </div>
    </footer>
  );
}
