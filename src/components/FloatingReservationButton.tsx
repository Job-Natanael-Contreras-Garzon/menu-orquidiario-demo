'use client';

import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { useI18n } from '../lib/i18n';

export const FloatingReservationButton = () => {
  const { t } = useI18n();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = () => {
    const whatsappNumber = '59162014808';
    const message = encodeURIComponent(t('reservation.whatsappMessage'));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Adjust positioning when scroll up button is visible - more integrated position
  const isScrollUpVisible = scrollY > 300;

  return (
    <div 
      className={`fixed z-50 transition-all duration-700 ease-in-out ${
        isScrollUpVisible 
          ? 'bottom-4 right-20 transform' // Al lado del botón de scroll up
          : 'bottom-4 right-4'            // Posición original
      }`}
    >
      <Button
        onClick={handleReservation}
        size={isScrollUpVisible ? "default" : "lg"} // Tamaño ajustado cuando está al lado del scroll up
        className={`btn-reservation-orquideario rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-in-out ${
          isScrollUpVisible 
            ? 'px-3 py-2 md:px-4 md:py-3' // Tamaño más compacto
            : 'px-4 py-3 md:px-6 md:py-4' // Tamaño original
        }`}
        aria-label={t('reservation.ariaLabel')}
      >
        <Phone className={`mr-2 orquideario-icon transition-all duration-700 ${
          isScrollUpVisible 
            ? 'h-4 w-4' // Icono más pequeño
            : 'h-4 w-4 md:h-5 md:w-5' // Icono original
        }`} />
        <span className="font-medium">{t('reservation.buttonText')}</span>
      </Button>
    </div>
  );
};
