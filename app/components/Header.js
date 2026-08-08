export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav-shell">
        <a className="brand" href="#home">
          My<span>Company</span>
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#projects">Projects</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
