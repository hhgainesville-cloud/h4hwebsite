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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20251204_160444_E7DC72.JPEG-4oaGL2kHhzWDO0VvgiIMIWedJ9S7aF.jpeg"
              alt="H4H volunteers in gray shirts posing outdoors at a health screening event near the Battle of Gainesville marker"
            />
          </div>
        </div>

        {/* Hygiene Kit Assemblies */}
        <div className="event-block">
          <div className="event-text">
            <h2>Hygiene Kit Assemblies</h2>
            <p>
              Hygiene kit assemblies bring volunteers together to pack essential personal
              care items — such as soap, toothbrushes, toothpaste, and other hygiene
              supplies — into kits that are distributed to underserved community members.
              These events are a hands-on way to directly support the health and dignity
              of those in need while fostering teamwork and community spirit among H4H members.
            </p>
          </div>
          <div className="event-img event-img--placeholder">
            <span>Hygiene Kit Assembly</span>
          </div>
        </div>

        {/* Socials */}
        <div className="event-block reverse">
          <div className="event-text">
            <h2>Socials</h2>
            <p>
              H4H socials are fun, low-key gatherings where members can connect, unwind,
              and build friendships outside of service events. From game nights to casual
              hangouts, socials strengthen our community and keep the H4H family close-knit.
              They are a great way for new members to get to know the organization and for
              returning members to reconnect.
            </p>
          </div>
          <div className="event-img event-img--placeholder">
            <span>Socials</span>
          </div>
        </div>

        {/* Partnering with Other Orgs */}
        <div className="event-block">
          <div className="event-text">
            <h2>Partnering with Other Orgs</h2>
            <p>
              H4H Gainesville actively collaborates with other student organizations and
              community groups to broaden our impact. By joining forces with like-minded
              organizations, we are able to reach more people, share resources, and create
              larger-scale service opportunities. These partnerships reflect our commitment
              to collective action and community-wide health advocacy.
            </p>
          </div>
          <div className="event-img event-img--placeholder">
            <span>Partnerships</span>
          </div>
        </div>

        {/* Fundraising */}
        <div className="event-block reverse">
          <div className="event-text">
            <h2>Fundraising</h2>
            <p>
              Fundraising events help H4H Gainesville sustain and grow our programs by
              raising money for supplies, training, and community initiatives. From bake
              sales to donation drives, our fundraisers are creative, community-oriented,
              and open to everyone. Every dollar raised goes directly toward supporting
              the health and well-being of Gainesville residents.
            </p>
          </div>
          <div className="event-img event-img--placeholder">
            <span>Fundraising</span>
          </div>
        </div>
      </div>
    </div>
  );
}
