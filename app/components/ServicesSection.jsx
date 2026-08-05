const services = [
  { title: 'Brand Strategy', description: 'Clear messaging, differentiation, and market positioning that sharpen your story.', icon: '🎯' },
  { title: 'Web Experiences', description: 'Fast, beautiful sites built to feel premium on every screen size.', icon: '🌐' },
  { title: 'Growth Systems', description: 'Funnels, lifecycle messaging, and product marketing that bring momentum.', icon: '📈' }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Built for ambitious growth</h2>
          <p className="section-copy">We turn strategy into polished digital experiences that feel modern and built to perform.</p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="text-link">Start a project →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
