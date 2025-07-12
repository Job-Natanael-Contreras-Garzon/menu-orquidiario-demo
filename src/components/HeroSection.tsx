'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import { Header } from './home/Header';
import { HeroMainSection } from './home/HeroMainSection';
import { SideCarousels } from './home/SideCarousels';
import { PresentationSection } from './home/PresentationSection';
import { IngredientesSection } from './home/IngredientesSection';
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
  
  // Imágenes para los carruseles laterales (bebidas)
  const leftCarouselImages = [
    '/images/carousel/left/drink1.jpg',
    '/images/carousel/left/drink2.jpg',
    '/images/carousel/left/drink3.jpg',
    '/images/carousel/left/drink4.jpg',
    '/images/carousel/left/drink5.jpg',
    '/images/carousel/left/drink6.jpg',
    '/images/carousel/left/drink7.jpg',
    // Usamos drink1.jpg de nuevo para el octavo elemento
    '/images/carousel/left/drink1.jpg'
  ];

  // Imágenes para los carruseles laterales (repostería y salados)
  const rightCarouselImages = [
    // Usamos food2.jpg para el primer elemento ya que food1.jpg no existe
    '/images/carousel/right/food2.jpg',
    '/images/carousel/right/food2.jpg',
    '/images/carousel/right/food3.jpg',
    '/images/carousel/right/food4.jpg',
    '/images/carousel/right/food5.jpg',
    // Reemplazamos las imágenes faltantes con las existentes
    '/images/carousel/right/food3.jpg',
    '/images/carousel/right/food4.jpg',
    '/images/carousel/right/food8.jpg'
  ];
  
  // Imágenes de fondo para alternar
  const backgroundImages = [
    '/images/background/bg1.jpg',
    '/images/background/bg2.jpg',
    '/images/background/bg3.jpg',
    '/images/background/bg4.jpg',
  ];

  // Imágenes para la galería rotativa (combos especiales)
  const galleryImages = [
    '/images/gallery/combo1.jpg',
    '/images/gallery/combo1.jpg', // Usamos combo1.jpg de nuevo ya que combo2.jpg no existe
    '/images/gallery/combo3.jpg',
    '/images/gallery/combo4.jpg',
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
      <IngredientesSection />
    </>
  );
}
