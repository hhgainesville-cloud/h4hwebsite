import Link from 'next/link';

export const metadata = { title: 'Contact — H4H Gainesville' };

export default function Contact() {
  return (
    <div className="section">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <div className="contact-detail">
            <div>
              <strong>Organization</strong>
              <p>H4H Gainesville<br />University of Florida</p>
            </div>
            <div>
              <strong>Location</strong>
              <p>Gainesville, FL 32611</p>
            </div>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:hhgainesville@gmail.com">hhgainesville@gmail.com</a></p>
            </div>
            <div>
              <strong>Instagram</strong>
              <p><a href="https://www.instagram.com/h4hgnv" target="_blank" rel="noopener">@h4hgnv</a></p>
            </div>
            <div>
              <strong>GroupMe</strong>
              <p><a href="https://groupme.com/join_group/109858634/NknQTwCA" target="_blank" rel="noopener">Join our GroupMe</a></p>
            </div>
          </div>
          <Link href="/join" className="btn">Become a Member</Link>
        </div>

        <div>
          <div className="form-card">
            <form action="#" method="post">
              <div className="form-group">
                <label>Name <span className="req">*</span></label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Message <span className="req">*</span></label>
                <textarea name="message" rows={5} required />
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
