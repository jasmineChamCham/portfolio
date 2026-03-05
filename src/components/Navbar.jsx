import "./Navbar.css";

export default function Navbar() {
  const navLinks = ["Home", "About", "Work", "Services", "Contact"];

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">Portfolio</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:jasminebkdn@gmail.com" className="nav-cta">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
