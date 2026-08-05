'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={hidden ? 'loading-screen hidden' : 'loading-screen'} aria-hidden="true">
      <div className="loading-box">
        <div className="loading-ring"></div>
        <h3>Building your experience</h3>
        <p>Just a moment while we prepare the site.</p>
      </div>
    </div>
  );
}
