import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Wrapper component that applies scroll-triggered fade-in and slide-up animations
 * @param {React.ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 * @param {number|string} delay - Animation delay in milliseconds or CSS class (e.g., 100, 'delay-100')
 * @param {number} threshold - Intersection threshold (0-1)
 */
export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.2 
}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px'
  });

  const delayValue = typeof delay === 'number' ? delay : 0;
  const delayClass = typeof delay === 'string' ? delay : '';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${delayClass} ${className}`}
      style={{
        transitionDelay: typeof delay === 'number' ? `${delay}ms` : undefined
      }}
    >
      {children}
    </div>
  );
}

