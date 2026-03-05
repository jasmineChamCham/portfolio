import './ClientFeedback.css'

const testimonials = [
  {
    id: 1,
    name: 'Grace Brown',
    role: 'Founder, Lumina Studio',
    avatar: '/client_avatar.png',
    quote: 'Janice completely transformed our digital presence. The Webflow site she built for us not only looks stunning but has dramatically improved our conversion rates. Her attention to detail and creative vision are unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex Reed',
    role: 'CEO, Orbita App',
    avatar: '/client_avatar.png',
    quote: 'Working with Janice on our app\'s UI/UX was an absolute pleasure. She has a rare ability to translate complex product requirements into beautiful, intuitive interfaces. Highly recommend!',
    rating: 5,
  },
]

export default function ClientFeedback() {
  return (
    <section className="feedback section" id="feedback">
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2 className="feedback-title">Clients Feedback</h2>

        <div className="feedback-grid">
          {testimonials.map((t) => (
            <div className="feedback-card" key={t.id}>
              <div className="feedback-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="feedback-quote">"{t.quote}"</p>
              <div className="feedback-author">
                <img src={t.avatar} alt={t.name} className="feedback-avatar" />
                <div>
                  <p className="feedback-name">{t.name}</p>
                  <p className="feedback-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
