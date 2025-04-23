'use client'
import { useEffect, useState } from 'react';

const useVisibleSection = (selector: string = '.section', threshold = 0.6) => {
  const [visibleSection, setVisibleSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSection(id);
          }
        });
      },
      { threshold }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selector, threshold]);

  return visibleSection;
};

export default useVisibleSection;