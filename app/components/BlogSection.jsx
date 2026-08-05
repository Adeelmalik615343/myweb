const posts = [
  { title: 'How to make a brand feel premium online', excerpt: 'A simple framework for designing trust with detail and clarity.' },
  { title: 'The anatomy of a high-converting launch page', excerpt: 'What to prioritize when every section needs to earn attention.' },
  { title: 'Why product storytelling matters', excerpt: 'Build momentum by connecting product value to human outcomes.' }
];

export default function BlogSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <h2>From the journal</h2>
          <p className="section-copy">Notes and ideas on building better digital experiences.</p>
        </div>
        <div className="card-grid">
          {posts.map((post) => (
            <article key={post.title} className="card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#contact" className="text-link">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
