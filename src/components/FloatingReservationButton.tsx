'use client';

import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingReservationButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = () => {
    const whatsappNumber = '59162014808';
    const message = encodeURIComponent('¡Hola! Me gustaría hacer una reserva en El Orquideario. ¿Podrían ayudarme con la disponibilidad?');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Adjust positioning when scroll up button is visible
  const isScrollUpVisible = scrollY > 300;

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ${
        isScrollUpVisible 
          ? 'bottom-4 right-20' // Position next to scroll up button
          : 'bottom-6 right-6'   // Default centered position
      }`}
    >
      <Button
        onClick={handleReservation}
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-5 py-3 border-2 border-green-500 hover:border-green-400"
        aria-label="Hacer reserva por WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5 mr-2" />
        <span className="text-base font-semibold">Reservar</span>
      </Button>
    </div>
  );
};
