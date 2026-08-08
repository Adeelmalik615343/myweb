const reviews = [
  { name: 'Maya Chen', role: 'Founder, Northstar', quote: 'The new site instantly made our offer feel sharper and more premium.' },
  { name: 'Jordan Alvarez', role: 'Product Lead, Helio', quote: 'Their process was thoughtful, fast, and incredibly collaborative from start to finish.' },
  { name: 'Samira Patel', role: 'Marketing Director, Avenue', quote: 'We launched with confidence and saw stronger engagement within days.' }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>What clients say</h2>
          <p className="section-copy">A thoughtful partner that helps ambitious teams move forward with clarity.</p>
        </div>
        <div className="card-grid">
          {reviews.map((review) => (
            <article key={review.name} className="card review-card">
              <p>“{review.quote}”</p>
              <h3>{review.name}</h3>
              <span>{review.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
