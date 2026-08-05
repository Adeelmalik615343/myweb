const plans = [
  { name: 'Launch', price: '$2.5k', description: 'Perfect for founders needing a polished one-page experience.', features: ['Strategy session', 'One-page website', 'Basic analytics setup'], featured: false },
  { name: 'Growth', price: '$6k', description: 'A strong, conversion-ready website with deeper UX and messaging.', features: ['Custom UI system', 'Conversion-focused pages', 'Performance optimization'], featured: true },
  { name: 'Scale', price: '$12k+', description: 'For teams needing ongoing product and marketing support.', features: ['Dedicated roadmap', 'Multi-page product suite', 'Quarterly experiments'], featured: false }
];

export default function PricingSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <h2>Flexible packages</h2>
          <p className="section-copy">Choose a plan that matches your stage and grow from there.</p>
        </div>
        <div className="card-grid pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={plan.featured ? 'pricing-card featured' : 'pricing-card'}>
              {plan.featured && <span className="badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price-row"><strong>{plan.price}</strong></div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={plan.featured ? 'btn btn-primary full' : 'btn btn-secondary full'}>Start here</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
