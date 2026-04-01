import Link from 'next/link';

export const metadata = { title: 'Event Dates — H4H Gainesville' };

export default function EventDates() {
  return (
    <div className="section">
      <h2 className="section-title">Event Dates</h2>

      <div className="calendar-note">
        <p>
          Our event schedule is posted through the calendar feature of{' '}
          <a href="https://givepul.se/epy4bp" target="_blank" rel="noopener" style={{ color: 'var(--dark)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Gators for Good Network
          </a>{' '}
          and continuously announced in the{' '}
          <a href="https://groupme.com/join_group/109858634/NknQTwCA" target="_blank" rel="noopener" style={{ color: 'var(--dark)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            GroupMe
          </a>
          . Check back here for upcoming Blood Pressure Screenings, Health
          Education Service Events, socials, and fundraisers.
        </p>
      </div>

      <div className="calendar-placeholder">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <h3>Calendar Coming Soon</h3>
        <p>Event dates will be embedded here. Check the GroupMe and Gators for Good Network for the latest schedule.</p>
        <Link href="/events" className="btn btn-outline" style={{ marginTop: 8 }}>View Event Types</Link>
      </div>
    </div>
  );
}
