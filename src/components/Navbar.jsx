import "./Navbar.css";

export default function Navbar() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Education", id: "education" },
    { name: "Showcase", id: "showcase" },
  ];

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">Tram Tran</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:jasminebkdn@gmail.com" className="nav-cta">
          Contact Me
        </a>
      </div>
    </nav>
  );
}
