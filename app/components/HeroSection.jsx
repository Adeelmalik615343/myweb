export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Premium digital agency</span>
          <h1>Launch bold ideas that feel effortless.</h1>
          <p className="hero-copy">
            We design modern experiences for ambitious brands with strategy, storytelling, and motion that convert.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Book a strategy call</a>
            <a href="#projects" className="btn btn-secondary">See our work</a>
          </div>
          <div className="stats">
            <div><strong>45+</strong><span>Launches shipped</span></div>
            <div><strong>4.9/5</strong><span>Client rating</span></div>
            <div><strong>24h</strong><span>Response time</span></div>
          </div>
        </div>

        <div className="hero-card">
          <h3>What you can expect</h3>
          <ul>
            <li>Research-led positioning</li>
            <li>Conversion-friendly design systems</li>
            <li>Fast launches with measurable growth</li>
          </ul>
          <p>Trusted by founders, SaaS startups, and modern e-commerce teams.</p>
        </div>
      </div>
    </section>
  );
}
