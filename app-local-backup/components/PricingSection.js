'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Launch',
    monthly: 79,
    annual: 59,
    description: 'Ideal for startups needing a polished digital foundation fast.',
    features: ['Landing page', 'Mobile-first design', 'Basic SEO', '1 revision cycle']
  },
  {
    name: 'Growth',
    monthly: 149,
    annual: 119,
    description: 'For growing brands that want stronger conversion and automation.',
    features: ['Up to 8 sections', 'AI chatbot setup', 'Speed optimization', 'Priority support'],
    featured: true
  },
  {
    name: 'Scale',
    monthly: 299,
    annual: 239,
    description: 'Advanced support for full automation, integrations, and growth systems.',
    features: ['Custom integrations', 'Python automations', 'Monthly strategy call', 'Dedicated support']
  }
];

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Flexible packages built for real growth.</h2>
          <p className="section-copy">Choose a plan that fits your stage and scale when you are ready.</p>
        </div>

        <div className="billing-toggle" role="tablist" aria-label="Billing toggle">
          <button className={billing === 'monthly' ? 'toggle-btn active' : 'toggle-btn'} onClick={() => setBilling('monthly')}>
            Monthly
          </button>
          <button className={billing === 'annual' ? 'toggle-btn active' : 'toggle-btn'} onClick={() => setBilling('annual')}>
            Annual <span>Save 20%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={plan.featured ? 'pricing-card featured' : 'pricing-card'} key={plan.name}>
              {plan.featured && <span className="badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price-row">
                <strong>${billing === 'monthly' ? plan.monthly : plan.annual}</strong>
                <span>/{billing === 'monthly' ? 'mo' : 'mo'}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <a className={plan.featured ? 'btn btn-primary full' : 'btn btn-secondary full'} href="#contact">
                Choose plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
