import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Full-bleed photo */}
      <div className="hero-photo-wrap">
        <img
          src="/hero_portrait.png"
          alt="Janice - Portfolio Designer"
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
            <span className="hero-label-small">Creative</span>
            <span className="hero-label-small">Developer</span>
          </div>
          <div className="hero-label-group right">
            <span className="hero-label-small">Product</span>
            <span className="hero-label-small">Designer</span>
            <span className="hero-label-small muted">Since 2018</span>
          </div>
        </div>

        {/* Big name */}
        <h1 className="hero-name">Janice</h1>

        {/* QR code — positioned mid-right */}
        <div className="hero-qr">
          <svg viewBox="0 0 80 80" width="80" height="80" className="qr-svg" aria-label="QR Code">
            <rect width="80" height="80" fill="rgba(255,255,255,0.92)" rx="6"/>
            <rect x="8" y="8" width="24" height="24" fill="none" stroke="#1a1a18" strokeWidth="3"/>
            <rect x="12" y="12" width="16" height="16" fill="#1a1a18"/>
            <rect x="48" y="8" width="24" height="24" fill="none" stroke="#1a1a18" strokeWidth="3"/>
            <rect x="52" y="12" width="16" height="16" fill="#1a1a18"/>
            <rect x="8" y="48" width="24" height="24" fill="none" stroke="#1a1a18" strokeWidth="3"/>
            <rect x="12" y="52" width="16" height="16" fill="#1a1a18"/>
            <rect x="48" y="48" width="10" height="10" fill="#1a1a18"/>
            <rect x="62" y="48" width="10" height="10" fill="#1a1a18"/>
            <rect x="48" y="62" width="10" height="10" fill="#1a1a18"/>
            <rect x="62" y="62" width="10" height="10" fill="#1a1a18"/>
            <rect x="38" y="8" width="6" height="6" fill="#1a1a18"/>
            <rect x="38" y="18" width="6" height="6" fill="#1a1a18"/>
            <rect x="38" y="28" width="6" height="6" fill="#1a1a18"/>
            <rect x="8" y="38" width="6" height="6" fill="#1a1a18"/>
            <rect x="18" y="38" width="6" height="6" fill="#1a1a18"/>
            <rect x="28" y="38" width="6" height="6" fill="#1a1a18"/>
            <rect x="38" y="38" width="6" height="6" fill="#1a1a18"/>
          </svg>
          <span className="qr-label">©2025</span>
        </div>
      </div>
    </section>
  )
}
