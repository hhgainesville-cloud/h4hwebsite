import Link from 'next/link';

export const metadata = { title: 'Members — H4H Gainesville' };

export default function Members() {
  return (
    <div className="section">
      <div style={{ maxWidth: 760 }}>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 48, color: 'var(--dark)' }}>
          Active Member Requirements
        </h1>

        <div style={{ fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.9 }}>
          <ul style={{ marginBottom: 28 }}>
            <li style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--dark)' }}>5 total points</strong> (Need 1 from each category)
              <ul style={{ marginTop: 10, listStyle: 'circle' }}>
                <li>Donations</li>
                <li>
                  Blood Pressure Screenings
                  <ul style={{ marginTop: 6, listStyle: 'square' }}>
                    <li>An additional HES point may substitute for a BP point</li>
                  </ul>
                </li>
                <li>Health Education Service Events (HES)</li>
                <li>Social</li>
                <li>Fundraising</li>
              </ul>
            </li>
            <li>
              Our event schedule will be posted through the calendar feature of{' '}
              <a href="https://givepul.se/epy4bp" target="_blank" rel="noopener" style={{ color: 'var(--dark)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Gators for Good Network
              </a>{' '}
              and continuously announced in the{' '}
              <a href="https://groupme.com/join_group/109858634/NknQTwCA" target="_blank" rel="noopener" style={{ color: 'var(--dark)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                GroupMe
              </a>!
            </li>
          </ul>

          <div style={{ marginTop: 48, padding: 32, background: '#e8e2dc', borderRadius: 4 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--light)', marginBottom: 12 }}>Ready to join?</p>
            <p style={{ marginBottom: 20, color: 'var(--mid)' }}>Interested in becoming an active member of H4H Gainesville? Fill out our membership form to get started.</p>
            <Link href="/join" className="btn">Become a Member</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
