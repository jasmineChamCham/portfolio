import './Project.css'

export default function Project() {
  return (
    <section className="project section" id="project">
      <div className="container">
        <div className="project-top">
          <div>
            <p className="section-label">Featured Project</p>
            <h2 className="project-title">
              <img src="/logo-primary-color-without-bg.png" alt="Encantta Logo" className="project-logo" />
              Encantta
            </h2>
            <p className="project-desc">
              Encantta is an AI-powered conversation intelligence application analyzing emotional tone and psychological patterns in text. It turns everyday conversations into insights that help people build deeper understanding, empathy, and healthier relationships.
            </p>
            <a href="https://encantta.click/" target="_blank" rel="noopener noreferrer" className="project-cta" id="project-view-btn">View Project →</a>
          </div>
        </div>

        <div className="project-visual">
          <a href="https://encantta.click/" target="_blank" rel="noopener noreferrer" className="project-main-img">
            <img src="/encantta-hero.jpg" alt="Encantta Platform Preview" />
            <div className="project-badge">
              <span>Powered by AI</span>
            </div>
          </a>
          <div className="project-side">
            <div className="project-info-card">
              <span className="sc-tag">2026 — Commercial Project</span>
              <h4 className="sc-project-name">Conversation Intelligence</h4>
              <p className="sc-desc">Clear conversations. No misunderstandings.</p>
            </div>
            <div className="project-stat-card">
              <span className="sc-stat-num">7+</span>
              <span className="sc-stat-label">Conversation Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
