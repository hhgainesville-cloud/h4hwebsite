export const metadata = { title: 'Executive Board — H4H Gainesville' };

const PersonIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const boardMembers = [
  'President',
  'Vice President',
  'Secretary',
  'Treasurer',
];

export default function ExecutiveBoard() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ marginBottom: 12 }}>Executive Board</h2>
      <p className="section-subtitle" style={{ marginBottom: 40 }}>Meet the team leading H4H Gainesville.</p>

      <div className="board-note">
        <p>
          Board member profiles will appear here. Contact{' '}
          <a href="mailto:hhgainesville@gmail.com" style={{ color: 'var(--red)' }}>
            hhgainesville@gmail.com
          </a>{' '}
          for more information.
        </p>
      </div>

      <div className="board-grid">
        {boardMembers.map(role => (
          <div className="board-card" key={role}>
            <div className="board-avatar">
              <PersonIcon />
            </div>
            <h3>{role}</h3>
            <p>Executive Board</p>
          </div>
        ))}
      </div>
    </div>
  );
}
