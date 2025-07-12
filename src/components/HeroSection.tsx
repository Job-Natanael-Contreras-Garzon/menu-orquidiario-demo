'use client';

import { useState, useEffect } from 'react';
import { Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Arrays de imágenes para la galería detrás del título y para el fondo
  const galleryImages = [
    'https://images.unsplash.com/photo-1580554530778-ca36943938b2?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop'
  ];

  const backgroundImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      setScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Progreso de la barra de carga y cambio de imagen de galería
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
          return 0;
        }
        return prev + 0.5; // Más lento: 0.5% cada 100ms = 20 segundos total
      });
    }, 100);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Cambio de fondo cada 10 segundos
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(bgInterval);
  }, [backgroundImages.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${backgroundImages[currentBgIndex]}")`,
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Header with background that appears on scroll */}
      <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
        {/* Background fill animation */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-amber-900/95 to-amber-800/95 backdrop-blur-md shadow-lg transition-all duration-700 ease-out ${
            scrolled ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        />
        <div className="relative container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="text-white text-sm font-light tracking-widest uppercase hover:text-amber-400 transition-colors">
              ES
            </button>
            <button className="text-white text-sm font-light tracking-widest uppercase hover:text-amber-400 transition-colors">
              RESEÑAS
            </button>
            <button className="text-white text-sm font-light tracking-widest uppercase hover:text-amber-400 transition-colors">
              INSTAGRAM
            </button>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-white text-2xl md:text-3xl font-light tracking-[0.4em] uppercase">
              ORQUIDEARIO
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 font-light tracking-wide rounded-full px-6"
            >
              RESERVAS
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-black transition-all duration-300 font-light tracking-wide rounded-full px-6"
            >
              REGALA
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        {/* Main Title with Background Image */}
        <div className="relative max-w-6xl mx-auto text-shadow-xl">
          {/* Imagen de fondo detrás del título - posicionada arriba */}
          <div 
            className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-20 z-0"
            style={{
              transform: `translateX(-50%) translateY(-80px) translateY(-${scrollY * 0.3}px)`,
            }}
          >
            <div className="w-48 h-80 relative overflow-hidden rounded-2xl opacity-70 shadow-2xl">
              <img 
                src={galleryImages[currentImageIndex]}
                alt="Gourmet dish"
                className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Barra de progreso encima de la imagen */}
              <div className="absolute top-0 left-4 right-4 z-20">
                <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden backdrop-blur-sm border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 h-1.5 rounded-full transition-all duration-200 ease-out shadow-lg"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Títulos */}
          <div 
            className="relative z-10 drop-shadow-2xl mt-60"
            style={{
              transform: `translateY(-${scrollY * 0.2}px)`,
            }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide leading-none mb-4 text-amber-100 drop-shadow-lg">
              UN VIAJE
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide leading-none mb-4 text-amber-100 drop-shadow-lg">
              GASTRONÓMICO
            </h3>
            <h4 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide leading-none mb-8 text-amber-100 drop-shadow-lg">
              ÚNICO
            </h4>
          </div>
        </div>

        {/* Instagram Icon */}
        <div className="absolute bottom-8 left-8">
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Instagram className="h-6 w-6" />
          </Button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="absolute bottom-8 right-8">
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
