import Link from 'next/link';

export const metadata = { title: 'Events — H4H Gainesville' };

export default function Events() {
  return (
    <div className="events-page">
      <div className="events-hero">
        <h1>Events</h1>
        <Link href="/event-dates" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
          Calendar
        </Link>
      </div>

      <div className="events-content">
        {/* Blood Pressure Screenings */}
        <div className="event-block">
          <div className="event-text">
            <h2>Blood Pressure Screenings</h2>
            <p>
              Blood pressure screenings provide community members with free blood
              pressure checks and education about cardiovascular health. Volunteers
              measure blood pressure, calculate BMI, explain what the results mean,
              and share information about healthy lifestyle habits and local healthcare
              resources. These events raise awareness about hypertension and encourage
              early detection.
            </p>
            <p>
              <strong>**Training for BP events happen regularly, so be on the lookout
              for those on the Calendar!</strong>
            </p>
            <p>
              **BP training is <em>required</em> to be able to attend a BP event.
              Must be <strong>renewed every year</strong>!
            </p>
            <a
              href="https://docs.google.com/presentation/d/1zTdXeNe3_xTlAwc5MqYorovC8tFh67Uh/edit?usp=sharing&ouid=107735245604823261674&rtpof=true&sd=true"
              target="_blank"
              rel="noopener"
              className="btn btn-outline"
              style={{ marginTop: 8, borderColor: '#fff', color: '#fff' }}
            >
              View BP Training Presentation
            </a>
          </div>
          <div className="event-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250919_160453_E8392E.JPEG-LlgYM6a9NtXZW97ui1h8FsNBrqWkcI.jpeg"
              alt="H4H volunteer performing health screening on a community member"
            />
          </div>
        </div>

        {/* Health Education Screenings */}
        <div className="event-block reverse">
          <div className="event-text">
            <h2>Health Education Screenings</h2>
            <p>
              Health education screenings help connect community members with important
              healthcare information and resources. Volunteers provide education about
              preventive health and distribute printed sheets with information on
              accessible local primary care, dental services, and animal care resources.
              These screenings help increase awareness and guide individuals toward
              better health decisions.
            </p>
          </div>
          <div className="event-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/69ab4c8428b2286bdc334a79/2b12c7f8-cda8-4bae-9bee-53445491676f/20251204_160502_EE3FAD.JPEG?format=1000w"
              alt="H4H members at Health Education Screening event"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
