import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Menu, Instagram, ChevronUp } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { ScrollToTopButton } from '../ScrollToTopButton';

interface HeroMainSectionProps {
  backgroundImages: string[];
  currentBgIndex: number;
  scrollY: number;
}

export function HeroMainSection({
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

        {/* Main Title - Centrado */}
        <div className="relative max-w-6xl mx-auto text-shadow-xl">
          {/* Logo detrás del título pero un poco por encima */}
          <div 
            className="absolute inset-0 z-0 flex items-center justify-center"
            style={{
              transform: `translateY(-${scrollY * 0.15}px) translateY(var(--logo-offset))`,
            }}
          >
            <Image 
              src="/images/logo/LogoOrqui4K.webp"
              alt="El Orquideario Logo"
              width={200}
              height={200}
              className="opacity-85 object-cover"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          
          {/* Títulos centrados */}
          <div 
            className="relative z-10 drop-shadow-2xl"
            style={{
              transform: `translateY(-${scrollY * 0.2}px) translateY(var(--title-offset))`,
            }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-headline font-light tracking-wide leading-none mb-2 md:mb-4 text-amber-100 drop-shadow-2xl">
              {t('home.hero.mainTitle.line1')}
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-headline font-light tracking-wide leading-none mb-2 md:mb-4 text-amber-100 drop-shadow-2xl">
              {t('home.hero.mainTitle.line2')}
            </h3>
            <h4 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-headline font-light tracking-wide leading-none mb-4 md:mb-8 text-amber-100 drop-shadow-2xl">
              {t('home.hero.mainTitle.line3')}
            </h4>
            
            {/* Botón Ver Menú - Más centrado y prominente */}
            <div className="mt-8 md:mt-12 flex justify-center">
              <Link href="/menu">
                <Button 
                  size="lg"
                  className="btn-menu-orquideario rounded-full px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl font-medium shadow-lg hover:shadow-xl"
                >
                  <Menu className="h-5 w-5 md:h-6 md:w-6 mr-3 orquideario-icon" />
                  Ver Nuestro Menú
                </Button>
              </Link>
            </div>
          </div>
        </div>

        
      </div>

      

      {/* Scroll Up Button - appears after scrolling */}
      {scrollY > 300 && (
        <div className="fixed bottom-4 right-4 z-40">
          {/* <Button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            size="sm"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
            
          </Button> */}
            <ScrollToTopButton/>
        </div>
      )}
    </section>
  );
}
