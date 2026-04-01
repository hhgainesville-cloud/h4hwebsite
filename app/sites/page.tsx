export const metadata = { title: 'Sites — H4H Gainesville' };

export default function Sites() {
  return (
    <>
      <div className="sites-hero">
        <h1>Our Volunteer<br />Sites</h1>
      </div>

      <div className="section">
        {/* Grace Marketplace */}
        <div className="site-block">
          <div className="site-images">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grace-Ji7hNFSPWKZUZeuZFezhwPXDhhQuIW.jpeg"
              alt="Grace Marketplace facility entrance sign showing Dorm, Veteran Dorm, Showers, and Pavilion"
              className="full-width"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260228_111720_E59E50.JPEG-Sl5xgKUqyTLhHiO5htZp6StXY6ibr9.jpeg"
              alt="Six H4H GNV volunteers in gray shirts standing outside Grace Marketplace holding Trader Joe's bags"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260214_172242_E2EAFD.JPEG-qX5qG0Kl6Cbm9rTBzpwRLkX3BDtIgq.jpeg"
              alt="H4H volunteer in purple gloves performing blood pressure screening on a community member outdoors at Grace Marketplace"
            />
          </div>
          <div className="site-text">
            <h2>Grace Marketplace</h2>
            <p>
              GRACE Marketplace is a one-stop homeless services campus in Gainesville
              that provides safety, stability, and support to help individuals
              experiencing homelessness get back on their feet.
            </p>
            <p>
              It offers essential resources such as meals, restrooms, laundry
              facilities, mail services, a computer lab, shelter, storage, and a
              clothing closet. Through coordinated services and community partnerships,
              GRACE Marketplace has helped contribute to a{' '}
              <strong>52% reduction in homelessness in Alachua County</strong>.
            </p>
            <span className="tag">Blood Pressure &amp; HES Events</span>
          </div>
        </div>

        {/* City Hall */}
        <div className="site-block">
          <div className="site-images">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/69ab4c8428b2286bdc334a79/2b12c7f8-cda8-4bae-9bee-53445491676f/20251204_160502_EE3FAD.JPEG?format=750w"
              alt="Gainesville City Hall sign"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/69ab4c8428b2286bdc334a79/2b12c7f8-cda8-4bae-9bee-53445491676f/20251204_160502_EE3FAD.JPEG?format=750w"
              alt="H4H group at City Hall outreach"
            />
          </div>
          <div className="site-text">
            <h2>City Hall</h2>
            <p>
              Gainesville City Hall is a location where we volunteer alongside the BP
              Team to distribute blood pressure information sheets to members of the
              homeless community.
            </p>
            <p>
              During these outreach efforts, Gainesville Police Department also
              provides food to support individuals in need.
            </p>
            <span className="tag">Blood Pressure Events</span>
          </div>
        </div>
      </div>
    </>
  );
}
