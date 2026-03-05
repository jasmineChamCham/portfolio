import './AboutMe.css'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
]

export default function AboutMe() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label">About Me</p>
            <h2 className="about-heading">About Me</h2>
            <p className="about-text">
              I'm Tram, a creative designer specializing in Webflow development, UI-UX design,
              and motion graphics. With over a decade of experience crafting digital experiences,
              I help brands tell their stories through thoughtful, beautiful design.
            </p>
            <p className="about-text">
              My work bridges the gap between aesthetics and functionality — creating interfaces
              that not only look stunning but also feel intuitive and drive real results.
            </p>
          </div>

          <div className="about-right">
            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="stat-item" key={i}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
