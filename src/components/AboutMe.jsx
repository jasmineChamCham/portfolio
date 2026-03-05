import './AboutMe.css'

const stats = [
  { value: '3.8', label: 'GPA (DUT - Ranked 3/357)' },
  { value: '7.5', label: 'IELTS' },
  { value: '2+', label: 'Years Experience' },
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
              I'm a Full-Stack Developer who enjoys building modern web applications using Node.js,
              Python, and scalable backend architectures. I'm passionate about creating meaningful technology 
              that solves real problems and positively impacts people's lives.
            </p>
            <p className="about-text">
              I'm continuously exploring AI and new technologies to build smarter, more human-centered 
              products while contributing to impactful projects with collaborative teams.
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
