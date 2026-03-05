import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner container">
        {/* Top section */}
        <div className="footer-top">
          <div className="footer-left">
            <p className="footer-copy-label">Contact/Owner</p>
            <a href="mailto:jasminebkdn@gmail.com" className="footer-email">jasminebkdn@gmail.com</a>
          </div>
          <div className="footer-center">
            <a href="#home" className="footer-cta-btn" id="footer-cta">
              Let's Collaborate
            </a>
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://www.facebook.com/tram.tran.981397" className="footer-social-link" aria-label="Facebook" title="Facebook: Trâm Trần" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/tr%C3%A2m-tr%E1%BA%A7n-9754b932a/" className="footer-social-link" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Big name */}
        <div className="footer-name-wrap">
          <h2 className="footer-big-name">Tram</h2>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-legal">© 2026 Tram Tran. All rights reserved.</p>
          <p className="footer-made">Code for impact ❤</p>
        </div>
      </div>
    </footer>
  )
}
