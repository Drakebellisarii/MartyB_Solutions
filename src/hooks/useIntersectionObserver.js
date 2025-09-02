import { useState, useEffect } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return isVisible;
};

export default useIntersectionObserver;