'use client';

import { useState } from 'react';

const slides = [
  {
    title: 'Strategy that feels calm and clear',
    body: 'We make every decision intentional so the experience feels effortless from first click to loyal customer.'
  },
  {
    title: 'Design1 that earns trust',
    body: 'Every interface is built to feel premium, intuitive, and aligned with your brand voice.'
  },
  {
    title: 'Launches with momentum',
    body: 'From the first concept to post-launch support, we shape the experience around growth.'
  }
];

export default function CarouselSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="carousel-card">
          <div className="carousel-copy">
            <span className="eyebrow">How we work</span>
            <h2>{slides[active].title}</h2>
            <p>{slides[active].body}</p>
          </div>
          <div className="carousel-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === active ? 'dot active' : 'dot'}
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
