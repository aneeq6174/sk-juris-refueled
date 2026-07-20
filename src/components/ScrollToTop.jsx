import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change - works with Lenis
    if (typeof window !== 'undefined') {
      // Use Lenis if available, otherwise fallback to native smooth scroll
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return null;
}














