import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button as soon as the user scrolls down past 160px
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      title="Back to Top"
      className={`fixed bottom-6 right-6 z-40 p-2.5 sm:p-3 rounded-xl bg-[#172033]/90 hover:bg-[#1e2a42] text-[#94A3B8] hover:text-[#38BDF8] border border-[#263244] hover:border-[#38BDF8]/50 shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#38BDF8] group cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
