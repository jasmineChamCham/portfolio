import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner container">
        {/* Top section */}
        <div className="footer-top">
          <div className="footer-left">
            <p className="footer-copy-label">Contact/Owner</p>
            <a href="mailto:janice92@gmail.com" className="footer-email">janice92@gmail.com</a>
          </div>
          <div className="footer-center">
            <a href="#home" className="footer-cta-btn" id="footer-cta">
              Let's Collaborate
            </a>
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              {['Behance', 'Dribbble', 'LinkedIn', 'Instagram'].map(s => (
                <a key={s} href="#" className="footer-social-link">{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Big name */}
        <div className="footer-name-wrap">
          <h2 className="footer-big-name">Janice</h2>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-legal">© 2024 Janice. All rights reserved.</p>
          <p className="footer-made">Designed & Built with ❤</p>
        </div>
      </div>
    </footer>
  )
}
