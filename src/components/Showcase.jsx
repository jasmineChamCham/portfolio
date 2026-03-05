import './Showcase.css'

export default function Showcase() {
  return (
    <section className="showcase section" id="showcase">
      <div className="container">
        <div className="showcase-top">
          <div>
            <p className="section-label">Featured Project</p>
            <h2 className="showcase-title">Showcasing<br />My Best Work</h2>
            <p className="showcase-desc">
              A deep dive into one of my most impactful projects — blending strategy,
              visual storytelling, and technical execution to deliver outstanding results.
            </p>
            <a href="#work" className="showcase-cta" id="showcase-view-btn">View Case Study →</a>
          </div>
        </div>

        <div className="showcase-visual">
          <div className="showcase-main-img">
            <img src="/showcase_street.png" alt="Street fashion editorial showcase" />
            <div className="showcase-badge">
              <span>BE SUPPORTED BY</span>
            </div>
          </div>
          <div className="showcase-side">
            <div className="showcase-info-card">
              <span className="sc-tag">2024 — Webflow</span>
              <h4 className="sc-project-name">Editorial Campaign</h4>
              <p className="sc-desc">Brand launch strategy combined with immersive digital experiences.</p>
            </div>
            <div className="showcase-stat-card">
              <span className="sc-stat-num">340%</span>
              <span className="sc-stat-label">Engagement Increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
