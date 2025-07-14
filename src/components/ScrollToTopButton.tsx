'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        // En tu archivo ScrollToTopButton.tsx

        <Button
          onClick={scrollToTop}
          size="icon"
          aria-label="Scroll to top"
          // 👇 LA MAGIA ESTÁ AQUÍ. Reemplaza tu className con esto:
          className="
    h-12 w-12 rounded-full shadow-lg transition-all duration-300 ease-in-out

    // --- Estilos para Modo Claro ---
    bg-secondary border border-border text-foreground
    hover:bg-secondary hover:translate-y-[-2px]

    // --- Estilos para Modo Oscuro (con el prefijo 'dark:') ---
    dark:bg-[rgba(75,75,75,0.8)] dark:border-[rgba(184,134,11,0.5)] dark:text-[#F5F5DC]
    dark:hover:bg-[rgba(90,90,90,0.9)] dark:hover:border-[rgba(218,165,32,0.7)]
    dark:hover:translate-y-[-2px]
  "
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
