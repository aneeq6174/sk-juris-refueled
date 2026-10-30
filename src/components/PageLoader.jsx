import React, { useEffect, useState } from 'react';
import BrandWordmark from './BrandWordmark.jsx';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 1000);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[color:var(--navy-dark)] flex items-center justify-center z-[9999] animate-fade-out">
      <div className="animate-pulse">
        <BrandWordmark className="items-center" />
      </div>
    </div>
  );
}
