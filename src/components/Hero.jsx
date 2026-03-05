import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Full-bleed photo */}
      <div className="hero-photo-wrap">
        <img
          src="jasmine.jpg"
          alt="Tram - Portfolio Designer"
          className="hero-photo"
        />
        {/* Dark gradient overlay so text is readable */}
        <div className="hero-overlay" />
      </div>

      {/* Content layer on top */}
      <div className="hero-content">
        {/* Top bar */}
        <div className="hero-topbar">
          <div className="hero-label-group">
            <span className="hero-label-small">Fullstack</span>
            <span className="hero-label-small">Developer</span>
          </div>
          <div className="hero-label-group right">
            {/* <span className="hero-label-small">Code For Impact</span> */}
            <span className="hero-label-small muted">Code For Impact</span>
          </div>
        </div>

        {/* Big name */}
        <h1 className="hero-name">Tram</h1>

        {/* Big last name - bottom right */}
        <h1 className="hero-lastname">Tran</h1>

        {/* QR code — positioned mid-right */}
        <div className="hero-qr">
          {/* <img src="qr-code.svg" className="qr-svg" alt="QR Code" /> */}
          {/* <span className="qr-label">©2026</span> */}
        </div>
      </div>
    </section>
  )
}
