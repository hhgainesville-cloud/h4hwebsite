export const metadata = { title: 'Donate — H4H Gainesville' };

export default function Donate() {
  return (
    <div className="section">
      <div className="donate-content">
        <h2>Support Our Mission</h2>
        <p>
          Your donation helps H4H Gainesville provide free blood pressure
          screenings, hygiene kits, and health education to Gainesville&apos;s
          homeless community. Every contribution makes a difference.
        </p>
        <a
          href="https://givepul.se/epy4bp"
          target="_blank"
          rel="noopener"
          className="btn btn-red"
          style={{ marginBottom: 16, display: 'inline-block' }}
        >
          Donate via Gators for Good
        </a>
        <br />
        <a
          href="mailto:hhgainesville@gmail.com"
          className="btn btn-outline"
          style={{ borderColor: 'var(--dark)', color: 'var(--dark)' }}
        >
          Contact Us to Donate
        </a>
      </div>
    </div>
  );
}
