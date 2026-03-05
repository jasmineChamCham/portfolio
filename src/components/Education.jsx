import { useState } from 'react'
import './Education.css'

export default function Education() {
  const [selectedItem, setSelectedItem] = useState(null)

  const educationData = [
    {
      id: 'dut',
      title: 'Danang University of Science and Technology',
      institution: 'The University of Danang - University of Science and Technology',
      image: '/dut.jpg',
      date: '09/2020 \u2013 09/2025',
      type: 'Education',
      details: {
        meta: [
          { label: 'Degree', value: 'Engineer in Information Technology' },
          { label: 'Final grade', value: '3.8/4.0 (Ranked 3rd among 357 students upon graduation)' },
          { label: 'Thesis', value: 'Building a Cosmetic Consultation and Skin Analysis Website System Using Artificial Intelligence (Score: 9.6/10)' }
        ],
        desc: 'A web application for a beauty center that analyzes skin conditions\u2014classifying acne, assessing its severity, and providing a chatbot to answer questions about skincare and cosmetics.',
        teamSize: '2',
        techStack: 'ReactJS, Node.js (NestJS), Java, Python (TensorFlow, PyTorch, FastAPI), Prisma, Microservices, Airflow, Docker, Cloudinary, Kafka, RabbitMQ.',
        databases: 'PostgreSQL, MongoDB, Neo4j, Qdrant (Vector store)',
        responsibilities: [
          'Designed database and implemented RESTful APIs for multiple microservices using NestJS (e.g., authentication, e-commerce).',
          'Containerized and orchestrated multiple microservices using Docker Compose, and deployed them within a microservices architecture.',
          'Trained deep learning models for skin type classification and contributed to acne severity assessment models.',
          'Built an automated data pipeline with Airflow to periodically crawl and update cosmetic product data into a Neo4j graph database.',
          'Developed a KG-RAG system to support a chatbot for answering skincare and cosmetic-related queries.'
        ]
      }
    },
    {
      id: 'ielts',
      title: 'IELTS',
      institution: 'IDP',
      image: '/IELTS-2024.jpeg',
      date: '2024',
      type: 'Language',
      details: {
        meta: [
          { label: 'Overall Band Score', value: '7.5' }
        ],
        desc: 'Proficient in listening, reading, writing, and speaking English in academic and professional contexts.',
        responsibilities: []
      }
    },
    {
      id: 'delf',
      title: 'French DELF B1',
      institution: 'Minist\u00e8re de l\'\u00c9ducation Nationale',
      image: '/DELF-B1-Score.jpg',
      date: '2021',
      type: 'Language',
      details: {
        meta: [
          { label: 'Final Score', value: '80/100' }
        ],
        desc: 'Independent user of the French language. Capable of maintaining a conversation, giving opinions, and dealing with everyday situations.',
        responsibilities: []
      }
    }
  ]

  const openModal = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <section className="education section" id="education">
      <div className="container">
        
        <div className="edu-header">
          <div>
            <p className="section-label">Qualifications</p>
            <h2 className="edu-title">Education & Languages</h2>
          </div>
        </div>

        <div className="blog-grid edu-grid-override">
          {educationData.map((item, i) => (
            <article 
              className="blog-card edu-card-override" 
              key={item.id} 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => openModal(item)}
            >
              <div className="blog-img-wrap edu-img-override">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-cat">{item.type}</span>
                  <span className="blog-date">{item.date}</span>
                </div>
                <h3 className="blog-card-title" style={{ color: '#0b5394' }}>{item.title}</h3>
                <span className="blog-read-more" style={{ cursor: 'pointer' }}>View Details &rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedItem && (
        <div className="edu-modal-overlay" onClick={closeModal}>
          <div className="edu-modal-content" onClick={e => e.stopPropagation()}>
            <button className="edu-modal-close" onClick={closeModal}>&times;</button>
            
            <div className="edu-modal-header">
              <span className="edu-modal-type">{selectedItem.type}</span>
              <span className="edu-modal-date">{selectedItem.date}</span>
            </div>
            
            <h2 className="edu-modal-title">{selectedItem.title}</h2>
            {selectedItem.institution && <h3 className="edu-modal-inst">{selectedItem.institution}</h3>}
            
            <div className="edu-modal-body">
              {selectedItem.details.meta && selectedItem.details.meta.length > 0 && (
                <div className="edu-modal-meta-grid">
                  {selectedItem.details.meta.map((m, i) => (
                    <div className="edu-modal-meta-item" key={i}>
                      <span className="meta-label">{m.label}:</span>
                      <span className="meta-value">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {selectedItem.details.desc && (
                <p className="edu-modal-desc">{selectedItem.details.desc}</p>
              )}

              {selectedItem.details.teamSize && (
                <p className="edu-modal-text"><strong>Team size:</strong> {selectedItem.details.teamSize}</p>
              )}
              
              {selectedItem.details.techStack && (
                <p className="edu-modal-text"><strong>Tech stack:</strong> {selectedItem.details.techStack}</p>
              )}
              
              {selectedItem.details.databases && (
                <p className="edu-modal-text"><strong>Databases:</strong> {selectedItem.details.databases}</p>
              )}

              {selectedItem.details.responsibilities && selectedItem.details.responsibilities.length > 0 && (
                <div className="edu-modal-resp">
                  <strong>Responsibilities:</strong>
                  <ul>
                    {selectedItem.details.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
