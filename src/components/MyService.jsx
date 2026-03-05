import './MyService.css'

const services = [
  {
    id: 1,
    name: 'Webflow Designer',
    desc: 'Building responsive, pixel-perfect websites using Webflow CMS — from concept to live launch.',
    image: '/service_orange.png',
    tag: 'WEB',
  },
  {
    id: 2,
    name: 'UI-UX Design',
    desc: 'Creating user-centered interfaces that balance beauty with seamless usability for web and mobile apps.',
    image: null,
    tag: 'UX',
  },
  {
    id: 3,
    name: 'Motion Graphics',
    desc: 'Bringing brands to life with dynamic animations, motion design, and visual storytelling.',
    image: null,
    tag: 'MG',
  },
]

export default function MyService() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <p className="section-label">What I Do</p>
        <h2 className="services-title">My Service</h2>

        <div className="services-list">
          {services.map((s, i) => (
            <div className="service-row" key={s.id}>
              <div className="service-row-inner">
                <div className="service-left">
                  <span className="service-number">0{i + 1}</span>
                  <div className="service-info">
                    <h3 className="service-name">{s.name}</h3>
                    <p className="service-desc">{s.desc}</p>
                  </div>
                </div>
                <div className="service-right">
                  {s.image ? (
                    <div className="service-thumb">
                      <img src={s.image} alt={s.name} />
                    </div>
                  ) : (
                    <div className="service-tag-box">
                      <span className="service-tag">{s.tag}</span>
                    </div>
                  )}
                  <button className="service-arrow" aria-label={`Explore ${s.name}`} id={`service-btn-${i+1}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </button>
                </div>
              </div>
              {i < services.length - 1 && <div className="service-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
