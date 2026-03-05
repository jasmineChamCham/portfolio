import './Showcase.css'

export default function Showcase() {
  return (
    <section className="showcase section" id="showcase">
      <div className="container">
        <div className="showcase-top">
          <div>
            <p className="section-label">Featured Project</p>
            <h2 className="showcase-title">
              <img src="/logo-primary-color-without-bg.png" alt="Encantta Logo" className="showcase-logo" />
              Encantta
            </h2>
            <p className="showcase-desc">
              Encantta is an AI-powered conversation intelligence application analyzing emotional tone and psychological patterns in text. It turns everyday conversations into insights that help people build deeper understanding, empathy, and healthier relationships.
            </p>
            <a href="https://encantta.click/" target="_blank" rel="noopener noreferrer" className="showcase-cta" id="showcase-view-btn">View Project →</a>
          </div>
        </div>

        <div className="showcase-visual">
          <a href="https://encantta.click/" target="_blank" rel="noopener noreferrer" className="showcase-main-img">
            <img src="/encantta-hero.jpg" alt="Encantta Platform Preview" />
            <div className="showcase-badge">
              <span>Powered by AI</span>
            </div>
          </a>
          <div className="showcase-side">
            <div className="showcase-info-card">
              <span className="sc-tag">2026 — Commercial Project</span>
              <h4 className="sc-project-name">Conversation Intelligence</h4>
              <p className="sc-desc">Clear conversations. No misunderstandings.</p>
            </div>
            <div className="showcase-stat-card">
              <span className="sc-stat-num">7+</span>
              <span className="sc-stat-label">Conversation Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
