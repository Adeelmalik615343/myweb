export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Pro-level AI & automation agency</p>
          <h1>We build high-converting websites, automations, and AI chatbots that scale.</h1>
          <p className="hero-copy">
            From modern Next.js experiences to smart Python automations and AI assistants, we help brands move faster, convert better, and operate with less manual effort.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#pricing">View Pricing</a>
            <a className="btn btn-secondary" href="#projects">See Projects</a>
          </div>
          <div className="stats">
            <div>
              <strong>50+</strong>
              <span>Launches shipped</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>AI automations built</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support & strategy</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <h3>What makes us different</h3>
          <ul>
            <li>Fast, responsive, mobile-first design</li>
            <li>Next.js, React, Python, and AI workflow expertise</li>
            <li>Clear strategy, clean code, and measurable growth</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
