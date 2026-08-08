'use client';

import { useState } from 'react';

const faqs = [
  { question: 'How quickly can we start?', answer: 'Most projects begin within one week, depending on scope and availability.' },
  { question: 'Do you only work on new websites?', answer: 'No. We also refresh existing sites, improve onboarding flows, and support marketing launches.' },
  { question: 'Can you help with messaging too?', answer: 'Absolutely. We often shape positioning, content hierarchy, and conversion storytelling alongside design.' }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Frequently asked questions</h2>
          <p className="section-copy">Straight answers for teams planning their next launch.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={item.question} className="faq-item">
              <button className={openIndex === index ? 'faq-question active' : 'faq-question'} onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
