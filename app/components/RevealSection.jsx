'use client';

import { useEffect, useRef, useState } from 'react';

export default function RevealSection({ children, className = '', ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cancelled = false;

    const init = async () => {
      try {
        const { default: gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          node,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        if (!cancelled) setVisible(true);
      } catch (e) {
        // fallback to IntersectionObserver if GSAP isn't available
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          },
          { threshold: 0.18 }
        );

        observer.observe(node);
      }
    };

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={ref} className={`${visible ? 'reveal is-visible' : 'reveal'} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
