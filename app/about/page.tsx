import Link from 'next/link';

export const metadata = { title: 'Who We Are — H4H Gainesville' };

export default function About() {
  return (
    <div className="section">
      <div className="two-col">
        <div className="about-intro">
          <h2>What does H4H do?</h2>
          <p>
            <strong>Hearts for the Homeless (H4H) Gainesville</strong> contributes to the
            well-being of one of the most vulnerable populations in our nation through
            heart disease prevention.
          </p>
          <h3>Our members...</h3>
          <ul>
            <li>Educate the homeless population about heart disease</li>
            <li>Provide free blood pressure and BMI screenings</li>
            <li>Share resources to accessible, local clinics</li>
            <li>Promote hygiene &amp; heart health by handing out hygiene kits</li>
            <li>Have access to consistent volunteer opportunities</li>
            <li>Find a support system of compassionate student volunteers</li>
          </ul>
          <Link href="/join" className="btn" style={{ marginTop: 40 }}>Join H4H</Link>
          <a href="https://www.h4hinternational.org/" target="_blank" rel="noopener" className="btn btn-outline" style={{ marginTop: 12 }}>
            H4H International ↗
          </a>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20251204_160444_E3D883.JPEG-1pQIftm90WzVmFs5Wz5UyfoIFLMOQa.jpeg"
            alt="Two H4H volunteers performing a blood pressure screening outdoors near the Battle of Gainesville marker"
            style={{ width: '100%', borderRadius: 4, objectFit: 'cover', aspectRatio: '4/5' }}
          />
        </div>
      </div>
    </div>
  );
}
