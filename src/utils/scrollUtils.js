/**
 * Utility function for smooth scrolling to sections
 * Works with Lenis smooth scroll if available
 */
export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use Lenis if available
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80, // Account for fixed navbar
          duration: 1.2,
        });
      } else {
        // Fallback to native smooth scroll
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };
  
  /**
   * Scroll to top of page
   */
  export const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  
  