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
import { Footer } from './Footer';

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
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
  
  // Cambio de fondo cada 15 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <Header scrolled={scrolled} />
      
      <div className="relative">
        <HeroMainSection 
          backgroundImages={backgroundImages}
          currentBgIndex={currentBgIndex}
          scrollY={scrollY}
        />
        
        <SideCarousels 
          leftCarouselImages={leftCarouselImages}
          rightCarouselImages={rightCarouselImages}
        />
      </div>
      
      <div id="presentation-section">
        <PresentationSection />
      </div>
      <PanoramicSection />
      <MenuPreviewSection />
      <IngredientesSection />
      <Footer/>
    </>
  );
}
