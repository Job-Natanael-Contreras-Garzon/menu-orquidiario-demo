import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu, Instagram } from 'lucide-react';
import { useI18n } from '../../lib/i18n';

interface HeroMainSectionProps {
  galleryImages: string[];
  currentImageIndex: number;
  progress: number;
  backgroundImages: string[];
  currentBgIndex: number;
  scrollY: number;
}

export function HeroMainSection({
  galleryImages,
  currentImageIndex,
  progress,
  backgroundImages,
  currentBgIndex,
  scrollY
}: HeroMainSectionProps) {
  const { t } = useI18n();
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${backgroundImages[currentBgIndex]}")`,
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        />
        
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">

        {/* Main Title with Background Image */}
        <div className="relative max-w-6xl mx-auto text-shadow-xl">
          {/* Imagen de fondo detrás del título - posicionada arriba */}
          <div 
            className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 -translate-y-10 md:-translate-y-20 z-0"
            style={{
              transform: `translateX(-50%) translateY(-40px) translateY(-${scrollY * 0.3}px)`,
            }}
          >
            <div className="w-32 h-52 md:w-48 md:h-80 relative overflow-hidden rounded-2xl opacity-70 shadow-2xl">
              <img 
                src={galleryImages[currentImageIndex]}
                alt="Gourmet dish"
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out scale-105 hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Barra de progreso encima de la imagen */}
              <div className="absolute top-0 left-2 right-2 md:left-4 md:right-4 z-20">
                <div className="w-full bg-white/20 rounded-full h-1 md:h-1 overflow-hidden backdrop-blur-sm border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 h-1 md:h-1 rounded-full transition-all duration-200 ease-out shadow-lg"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Títulos */}
          <div 
            className="relative z-10 drop-shadow-2xl mt-48 md:mt-60"
            style={{
              transform: `translateY(-${scrollY * 0.2}px)`,
            }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide leading-none mb-2 md:mb-4 text-amber-100 drop-shadow-lg">
              {t('home.hero.mainTitle.line1')}
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide leading-none mb-2 md:mb-4 text-amber-100 drop-shadow-lg">
              {t('home.hero.mainTitle.line2')}
            </h3>
            <h4 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide leading-none mb-4 md:mb-8 text-amber-100 drop-shadow-lg">
              {t('home.hero.mainTitle.line3')}
            </h4>
          </div>
        </div>

        {/* Instagram Icon */}
        {/* <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Instagram className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div> */}

        {/* Hamburger Menu Icon */}
        {/* <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-30"
        onClick={() => {
          // Smooth scroll to presentation section
          const presentationSection = document.getElementById('presentation-section');
          if (presentationSection) {
            presentationSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-2 md:h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
