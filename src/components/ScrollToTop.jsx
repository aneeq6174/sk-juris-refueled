import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -headerHeight });
        } else {
          const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top, left: 0, behavior: 'smooth' });
        }
        return;
      }
    }

    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}












