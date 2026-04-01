export const metadata = { title: 'Join — H4H Gainesville' };

export default function Join() {
  return (
    <div className="section">
      <div className="join-section">
        <h2 className="section-title">Become a Member!</h2>
        <p className="section-subtitle">If you&apos;re interested in joining H4H, complete the form below!</p>
        <div className="form-card">
          <form action="#" method="post">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--light)', marginBottom: 20 }}>Name</p>
            <div className="form-row">
              <div className="form-group">
                <label>First Name <span className="req">*</span></label>
                <input type="text" name="first_name" required />
              </div>
              <div className="form-group">
                <label>Last Name <span className="req">*</span></label>
                <input type="text" name="last_name" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email <span className="req">*</span></label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
