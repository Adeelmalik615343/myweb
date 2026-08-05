const projects = [
  {
    title: 'Northstar Labs',
    client: 'Product Studio',
    description: 'A premium SaaS launch site with a narrative-first flow.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Avenue Studio',
    client: 'Creative Collective',
    description: 'A refined portfolio built around storytelling and case studies.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Helio Commerce',
    client: 'DTC Brand',
    description: 'A conversion-friendly storefront experience for a modern DTC brand.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Luma Health',
    client: 'Healthcare Platform',
    description: 'A polished product page with patient-focused messaging and clear conversion paths.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Pulse Travel',
    client: 'Hospitality Brand',
    description: 'A dynamic booking experience designed to inspire travel and simplify checkout.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Forge Labs',
    client: 'B2B Innovation',
    description: 'A business-focused showcase with bold visuals and a streamlined product narrative.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p className="section-copy">A few recent launches that blend strategy, design, and measurable growth.</p>
        </div>
        <div className="card-grid projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-body">
                <span className="project-client">{project.client}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
