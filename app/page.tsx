import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">University of Florida · Gainesville, FL</p>
          <h1 className="hero-title">
            <em>Hearts For The Homeless</em> –{' '}
            <span className="underline">University of Florida</span>
          </h1>
          <p className="hero-body">
            Hearts for the Homeless (H4H) Gainesville promotes heart health among the
            homeless population through education, free blood pressure and BMI
            screenings, hygiene kit distribution, connections to local clinics,
            and meaningful volunteer opportunities for students.
          </p>
          <Link href="/about" className="btn">Learn more</Link>
        </div>
        <div className="hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.squarespace-cdn.com/content/v1/69ab4c8428b2286bdc334a79/2b12c7f8-cda8-4bae-9bee-53445491676f/20251204_160502_EE3FAD.JPEG?format=1000w"
            alt="H4H members at UF event with Albert the Gator mascot"
          />
        </div>
      </section>

      {/* BECOME A MEMBER */}
      <div style={{ background: '#e8e2dc' }}>
        <div className="section" style={{ maxWidth: 800, margin: '0 auto' }}>
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
    </>
  );
}
