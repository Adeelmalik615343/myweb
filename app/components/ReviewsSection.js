const reviews = [
  {
    name: 'Adeel Malik',
    role: 'Founder, Product Studio',
    quote: 'The work felt premium, strategic, and fast. The automation layer made a real difference for the business.'
  },
  {
    name: 'Riley Chen',
    role: 'Ecommerce Brand Owner',
    quote: 'From the first concept to launch, the experience was polished and incredibly efficient.'
  },
  {
    name: 'Samir Khan',
    role: 'Startup Founder',
    quote: 'The website and chatbot integration gave us a serious edge in both conversion and support.'
  }
];

export default function ReviewsSection() {
  return (
    <section className="section section-alt" id="reviews">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Reviews</p>
          <h2>Trusted by founders who want more than a basic site.</h2>
        </div>
        <div className="card-grid reviews-grid">
          {reviews.map((review) => (
            <article className="card review-card" key={review.name}>
              <p className="quote">“{review.quote}”</p>
              <h3>{review.name}</h3>
              <span>{review.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
