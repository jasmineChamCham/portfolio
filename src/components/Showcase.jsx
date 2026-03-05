import './Showcase.css'

export default function Showcase() {
  return (
    <section className="showcase section" id="showcase">
      <div className="container">
        <div className="showcase-top">
          <div>
            <p className="section-label">Featured Project</p>
            <h2 className="showcase-title">AI Skincare<br />Consultation</h2>
            <p className="showcase-desc">
              A web application for a beauty center that analyzes skin conditions — classifying acne, 
              assessing severity, and providing a chatbot to answer queries using KG-RAG. Implemented with 
              NestJS microservices, TensorFlow, Neo4j, and Airflow.
            </p>
            <a href="#work" className="showcase-cta" id="showcase-view-btn">View Architecture →</a>
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
              <span className="sc-tag">2024 — University Project</span>
              <h4 className="sc-project-name">Facial Analysis App</h4>
              <p className="sc-desc">Microservices architecture with Deep Learning integration.</p>
            </div>
            <div className="showcase-stat-card">
              <span className="sc-stat-num">5+</span>
              <span className="sc-stat-label">AI Models Deployed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
