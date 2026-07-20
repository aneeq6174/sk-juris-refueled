import React, { useEffect, useState } from 'react';
import logo from '../assets/SKJ logo.png';

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
        <img src={logo} alt="SK Juris & Co." className="h-32 w-auto" />
      </div>
    </div>
  );
}

