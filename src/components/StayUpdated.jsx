import './StayUpdated.css'

const posts = [
  {
    id: 1,
    title: 'Designing for Impact',
    date: 'Jan 2024',
    category: 'Design Tips',
    image: '/blog_mockup.png',
  },
  {
    id: 2,
    title: 'The Future of Webflow',
    date: 'Nov 2023',
    category: 'Industry',
    image: '/recent_work_glow.png',
  },
  {
    id: 3,
    title: 'Motion in UI Design',
    date: 'Sep 2023',
    category: 'Motion',
    image: '/service_orange.png',
  },
]

export default function StayUpdated() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog-header">
          <div>
            <p className="section-label">Blog</p>
            <h2 className="blog-title">Stay Updated on<br />Our Progress</h2>
          </div>
          <a href="#blog" className="blog-all-btn" id="view-all-posts">All Articles →</a>
        </div>

        <div className="blog-grid">
          {posts.map((p, i) => (
            <article className="blog-card" key={p.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="blog-img-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-cat">{p.category}</span>
                  <span className="blog-date">{p.date}</span>
                </div>
                <h3 className="blog-card-title">{p.title}</h3>
                <a href="#blog" className="blog-read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
