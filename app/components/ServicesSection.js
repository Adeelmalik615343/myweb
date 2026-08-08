const services = [
  {
    title: 'Custom Web Development',
    description: 'Fast, SEO-friendly websites built with modern stacks like Next.js and React.',
    icon: '⚡'
  },
  {
    title: 'AI Chatbots & Automation',
    description: 'Smart assistants and Python-based automations that save time and improve customer experience.',
    icon: '🤖'
  },
  {
    title: 'Ecommerce Growth',
    description: 'Shopify storefronts and conversion-first experiences that turn visitors into buyers.',
    icon: '🛒'
  },
  {
    title: 'Performance Marketing',
    description: 'Campaign strategy, paid media, and analytics designed to generate real demand.',
    icon: '📈'
  },
  {
    title: 'Brand Systems',
    description: 'Polished UI systems and messaging that make your business look premium online.',
    icon: '🎨'
  },
  {
    title: 'Technical Consulting',
    description: 'Scalable architecture, API integrations, and product support for ambitious teams.',
    icon: '🧠'
  }
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>End-to-end digital solutions for modern brands.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
