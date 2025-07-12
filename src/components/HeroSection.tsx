'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import { Header } from './home/Header';
import { HeroMainSection } from './home/HeroMainSection';
import { SideCarousels } from './home/SideCarousels';
import { PresentationSection } from './home/PresentationSection';
import { PanoramicSection } from './home/PanoramicSection';
import { MenuPreviewSection } from './home/MenuPreviewSection';

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { t, locale, setLocale } = useI18n();
  const { setTheme, theme } = useTheme();
  
  // Imágenes para los carruseles laterales
  const leftCarouselImages = [
    '/images/carousel/left/dish1.jpg',
    '/images/carousel/left/dish2.jpg',
    '/images/carousel/left/dish3.jpg',
    '/images/carousel/left/dish4.jpg',
    '/images/carousel/left/dish5.jpg',
    '/images/carousel/left/dish6.jpg',
    '/images/carousel/left/dish7.jpg',
    '/images/carousel/left/dish8.jpg'
  ];

  const rightCarouselImages = [
    '/images/carousel/right/dish1.jpg',
    '/images/carousel/right/dish2.jpg',
    '/images/carousel/right/dish3.jpg',
    '/images/carousel/right/dish4.jpg',
    '/images/carousel/right/dish5.jpg',
    '/images/carousel/right/dish6.jpg',
    '/images/carousel/right/dish7.jpg',
    '/images/carousel/right/dish8.jpg'
  ];
  
  // Imágenes de fondo para alternar
  const backgroundImages = [
    '/images/background/bg1.jpg',
    '/images/background/bg2.jpg',
    '/images/background/bg3.jpg',
    '/images/background/bg4.jpg',
  ];

  // Imágenes para la galería rotativa
  const galleryImages = [
    '/images/gallery/gallery1.jpg',
    '/images/gallery/gallery2.jpg',
    '/images/gallery/gallery3.jpg',
    '/images/gallery/gallery4.jpg',
  ];

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Progreso de la barra de carga y cambio de imagen de galería
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Cambiar la imagen cuando la barra llegue al 100%
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
          return 0;
        } else {
          return prev + 0.5; // Incrementar el progreso gradualmente
        }
      });
    }, 50); // Actualizar cada 50ms para una animación suave

    return () => clearInterval(interval);
  }, [galleryImages.length]);
  
  // Cambio de fondo cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <Header scrolled={scrolled} />
      
      <div className="relative">
        <HeroMainSection 
          galleryImages={galleryImages}
          currentImageIndex={currentImageIndex}
          progress={progress}
          backgroundImages={backgroundImages}
          currentBgIndex={currentBgIndex}
          scrollY={scrollY}
        />
        
        <SideCarousels 
          leftCarouselImages={leftCarouselImages}
          rightCarouselImages={rightCarouselImages}
        />
      </div>
      
      <PresentationSection />
      <PanoramicSection />
      <MenuPreviewSection />
    </>
  );
}
