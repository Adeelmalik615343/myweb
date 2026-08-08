const projects = [
  {
    title: 'Full Project 5',
    category: 'Full-stack web app',
    link: 'https://full-project-5.onrender.com/'
  },
  {
    title: 'Online Store Auth',
    category: 'Authentication + ecommerce',
    link: 'https://onlinestoreauth.onrender.com/'
  },
  {
    title: 'MyWeb Portfolio',
    category: 'Portfolio website',
    link: 'https://myweb-va1l.vercel.app/#portfolio'
  },
  {
    title: 'Pizza Hut Clone',
    category: 'Food delivery UI',
    link: 'https://pizzahutsitereadytouse.onrender.com/#delivery'
  },
  {
    title: 'Online Store 1',
    category: 'Retail storefront',
    link: 'https://onlinestore1-yfce.onrender.com/'
  },
  {
    title: 'Tools Platform',
    category: 'Utility web app',
    link: 'https://tools-six-nu-26.vercel.app/'
  }
];

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2>Selected projects that reflect real-world delivery.</h2>
        </div>
        <div className="card-grid projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                  Visit project ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
