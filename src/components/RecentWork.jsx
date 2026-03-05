import './RecentWork.css'

const works = [
  {
    id: 1,
    title: 'GLOW',
    category: 'Brand Identity',
    image: '/recent_work_glow.png',
    year: '2024',
  },
  {
    id: 2,
    title: 'Orbita',
    category: 'UI/UX Design',
    image: '/hero_portrait.png',
    year: '2023',
  },
  {
    id: 3,
    title: 'Natura',
    category: 'Motion Graphics',
    image: '/service_orange.png',
    year: '2023',
  },
]

export default function RecentWork() {
  return (
    <section className="recent-work section" id="work">
      <div className="container">
        <div className="rw-header">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="rw-title">Recent Work</h2>
            <p className="rw-sub">
              A curated selection of projects I've worked on — from brand identities
              to interactive digital experiences.
            </p>
          </div>
          <a href="#work" className="rw-all-btn" id="view-all-work">View All →</a>
        </div>

        <div className="rw-grid">
          {works.map((w, i) => (
            <div className="rw-card" key={w.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="rw-img-wrap">
                <img src={w.image} alt={w.title} className="rw-img" />
                <div className="rw-overlay">
                  <span className="rw-overlay-text">View Project</span>
                </div>
              </div>
              <div className="rw-meta">
                <div>
                  <h3 className="rw-name">{w.title}</h3>
                  <p className="rw-category">{w.category}</p>
                </div>
                <span className="rw-year">{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
