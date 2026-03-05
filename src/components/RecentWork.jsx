import { useState, useEffect } from 'react'
import './RecentWork.css'

const works = [
  {
    id: 1,
    title: 'Saigon Technology',
    category: 'Software Engineer',
    image: '/saigon-technology-logo.png',
    year: '07/2025 \u2013 02/2026',
    url: 'https://saigontechnology.com/',
    details: {
      headline: 'Saigon Technology - AI-Driven Software Development Company in Vietnam',
      location: 'Da Nang City, Vietnam',
      description: 'A leading software outsourcing company in Vietnam offering AI & ML-driven solutions and serving global clients.',
      responsibilities: [
        'Developing both backend logic and frontend UI screens for a web application with server-side rendering (SSR).',
        'Designing and implementing REST APIs consumed by the mobile team.',
        'Integrating AI-powered object detection models (humans, animals, vehicles, drones, etc.).',
        'Working in a six-member team, contributing across the full stack to deliver scalable, production-ready features.'
      ]
    }
  },
  {
    id: 2,
    title: 'DAC Data Technology',
    category: 'Data Engineer',
    image: '/dac-logo.png',
    year: '04/2025 \u2013 06/2025',
    url: 'https://dac-datatech.vn/',
    details: {
      headline: 'DAC Data Technology Vietnam',
      location: 'Da Nang City, Vietnam',
      description: 'DAC Data Technology is a subsidiary of D.A.Consortium (Japan\u2019s DAC) under Hakuhodo DY ONE, is a ~200-person technology & data science company specializing in AdTech product development and digital marketing data solutions.',
      responsibilities: [
        'Experienced in a project and got used to Docker and GCP Services: Cloud Storage, Cloud Scheduler, Cloud Function, Pub/Sub and BigQuery.',
        'Developed a system to collect daily view counts of multiple car brands (e.g., Honda, Mazda) on YouTube, leveraging GCP YouTube API and other GCP services.',
        'Implemented solutions to handle API daily quota limitations and visualized growth trends over time.'
      ]
    }
  },
  {
    id: 3,
    title: 'Datahouse',
    category: 'Junior Backend Dev',
    image: '/datahouse-logo.jpg',
    year: '05/2023 \u2013 02/2024',
    url: 'https://www.datahouse.com/',
    details: {
      headline: 'Datahouse Asia Company',
      location: 'Da Nang City, Vietnam',
      description: 'DataHouse Asia is a technology consulting and software development company, part of the \u2018ike Hawai\u2019i group, delivering end-to-end digital solutions for enterprises, governments, and startups worldwide.',
      responsibilities: [
        'Gained practical experience in a professional environment with Git, Agile Scrum, teamwork, and communication.',
        'Contributed to two microservices-based projects, applying NestJS Framework, Prisma, PostgreSQL Database, and leveraging AWS services.',
        'Developed a system to evaluate employee performance for each evaluation period (Internal Project).',
        'Contributed to several business modules within a large-scale ERP system including Account Management, Timekeeping, and Recruitment.',
        'Participated in sprint events and demonstrated project outcomes in English during sprint reviews.',
        'Engaged in company activities such as serving as an Evaluator in the Public English Speaking Club.'
      ]
    }
  },
]

export default function RecentWork() {
  const [selectedWork, setSelectedWork] = useState(null)

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedWork])

  const openModal = (e, work) => {
    e.preventDefault()
    setSelectedWork(work)
  }

  const closeModal = () => {
    setSelectedWork(null)
  }

  return (
    <section className="recent-work section" id="work">
      <div className="container">
        <div className="rw-header">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="rw-title">Work History</h2>
            <p className="rw-sub">
              A timeline of my professional experience \u2014 from fullstack engineering
              to data pipelines and scalable backend systems.
            </p>
          </div>
        </div>

        <div className="rw-grid">
          {works.map((w, i) => (
            <div className="rw-card" key={w.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="rw-img-wrap">
                <img src={w.image} alt={w.title} className="rw-img" style={{ objectFit: 'contain', backgroundColor: '#fff' }} />
                <div className="rw-overlay">
                  <div className="rw-overlay-content">
                    <a href={w.url} target="_blank" rel="noopener noreferrer" className="rw-overlay-link">Visit Website</a>
                    <button className="rw-overlay-btn" onClick={(e) => openModal(e, w)}>View Details</button>
                  </div>
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

      {/* Modal / Popup */}
      {selectedWork && (
        <div className="rw-modal-overlay" onClick={closeModal}>
          <div className="rw-modal-content" onClick={e => e.stopPropagation()}>
            <button className="rw-modal-close" onClick={closeModal}>&times;</button>
            <div className="rw-modal-header">
              <span className="rw-modal-company">{selectedWork.title}</span>
              <span className="rw-modal-year">{selectedWork.year}</span>
            </div>
            <h2 className="rw-modal-role">{selectedWork.category}</h2>
            <div className="rw-modal-body">
              <p className="rw-modal-headline"><strong>{selectedWork.details.headline}</strong></p>
              <p className="rw-modal-loc"><em>Location: {selectedWork.details.location}</em></p>
              <p className="rw-modal-desc">{selectedWork.details.description}</p>
              
              <div className="rw-modal-resp">
                <strong>Key Contributions & Responsibilities:</strong>
                <ul>
                  {selectedWork.details.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
