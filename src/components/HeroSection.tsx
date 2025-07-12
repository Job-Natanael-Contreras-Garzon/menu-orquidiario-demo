'use client';

import { useState, useEffect, useRef } from 'react';
import { Instagram, Menu, Sun, Moon, Home, MenuSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const { t, locale, setLocale } = useI18n();
  const { setTheme, theme } = useTheme();

  const closeSheet = () => setIsSheetOpen(false);

  const handleNavigation = (page: string) => {
    if (page === 'HOME') {
      router.push('/');
    } else if (page === 'MENU') {
      router.push('/menu');
    }
  };

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

  // Imágenes para los carruseles laterales
  const leftCarouselImages = [
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580554530778-ca36943938b2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=800&auto=format&fit=crop'
  ];

  const rightCarouselImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563379091339-03246963d7d3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559847844-d7beff8e5633?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544896478-d5ac9149ecbc?q=80&w=800&auto=format&fit=crop'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      setScrollY(scrollTop);
      
      // Enhanced parallax effect for images with better elevation
      const parallaxElements = document.querySelectorAll('[data-scroll-parallax="vertical"]');
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement;
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.1');
        const isInView = rect.top < window.innerHeight + 200 && rect.bottom > -200; // Expanded view range
        
        if (isInView) {
          // Enhanced calculation for smoother effect
          const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const elementPosition = Math.min(Math.max(scrollProgress, 0), 1); // Clamp between 0 and 1
          
          // Advanced transform with improved elevation effects
          const transformY = 70 * speed * (elementPosition - 0.5) * -1; // Increased vertical movement
          const scale = 1 + (elementPosition * speed * 0.08); // More pronounced scaling
          const rotateX = Math.min(7 * elementPosition, 7); // Enhanced tilt effect
          const rotateY = (elementPosition - 0.5) * speed * 3; // Subtle horizontal rotation
          const translateZ = elementPosition * speed * 30; // Z-axis movement for depth
          
          el.style.transform = `translateY(${transformY}px) translateZ(${translateZ}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          el.style.boxShadow = `0 ${10 + elementPosition * 20}px ${20 + elementPosition * 30}px rgba(0,0,0,${0.2 + elementPosition * 0.1})`;
          el.style.transition = 'transform 0.1s ease-out';
        }
      });
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
    <>
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
        <div className="relative container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-center text-white relative">
            
            {/* Logo Centrado */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-headline text-lg md:text-2xl lg:text-3xl font-bold tracking-tight">
                El orquideario
              </span>
            </Link>

            {/* Desktop Nav - Derecha */}
            <div className="hidden md:flex items-center gap-2 md:gap-4 absolute right-0">
              <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  {t('header.home')}
                </Link>
              </Button>
              <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/menu">
                  <MenuSquare className="mr-2 h-4 w-4" />
                  {t('header.menu')}
                </Link>
              </Button>
              <div className="[&>div]:border-white/20 [&_button]:text-white [&_button[data-active=true]]:bg-white/20 [&_button:not([data-active=true])]:hover:bg-white/10">
                <div className="flex items-center rounded-md border border-white/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLocale('es')}
                    className="px-3 py-1 h-8 rounded-r-none border-r border-white/20 text-white hover:bg-white/10"
                    data-active={locale === 'es'}
                  >
                    ES
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLocale('en')}
                    className="px-3 py-1 h-8 rounded-l-none text-white hover:bg-white/10"
                    data-active={locale === 'en'}
                  >
                    EN
                  </Button>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden absolute right-0">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-4">
                  <SheetHeader className="text-left mb-4">
                    <SheetTitle>
                      <Link href="/" className="flex items-center gap-2">
                        <span className="font-headline text-2xl font-bold tracking-tight">
                          El orquideario
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="grid gap-2">
                    <Button variant="ghost" asChild className="justify-start text-base" onClick={closeSheet}>
                      <Link href="/">
                        <Home className="mr-2 h-5 w-5" />
                        {t('header.home')}
                      </Link>
                    </Button>
                    <Button variant="ghost" asChild className="justify-start text-base" onClick={closeSheet}>
                      <Link href="/menu">
                        <MenuSquare className="mr-2 h-5 w-5" />
                        {t('header.menu')}
                      </Link>
                    </Button>
                  </nav>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-md border">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLocale('es')}
                        className="px-3 py-1 h-8 rounded-r-none border-r"
                        data-active={locale === 'es'}
                      >
                        ES
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLocale('en')}
                        className="px-3 py-1 h-8 rounded-l-none"
                        data-active={locale === 'en'}
                      >
                        EN
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Carruseles Laterales - Fijos en la carátula */}
      {/* Carrusel Lateral Izquierdo */}
      <div className="absolute left-6 top-0 bottom-0 w-40 overflow-hidden z-20 pointer-events-none hidden lg:block">
        <div className="relative h-full">
          {/* Gradiente superior */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none" />
          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex flex-col animate-scroll-down">
            {/* Duplicamos las imágenes para crear efecto infinito */}
            {[...leftCarouselImages, ...leftCarouselImages].map((image, index) => (
              <div key={index} className="mb-6">
                {/* Imagen cuadrada */}
                <div className="relative w-36 h-36 rounded-lg overflow-hidden shadow-xl opacity-70 hover:opacity-90 transition-opacity border border-white/30">
                  <img 
                    src={image}
                    alt={`Dish ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
                
                {/* Nombre del platillo en cuadro */}
                <div className="mt-3 bg-black/80 backdrop-blur-sm rounded-md px-3 py-2 border border-white/20 w-36 h-36 flex items-center justify-center">
                  <div className="text-white text-xs font-light tracking-widest uppercase text-center">
                    {index % 8 === 0 ? 'AGUACATE' : 
                     index % 8 === 1 ? 'ALCACHOFAS' :
                     index % 8 === 2 ? 'DEL PRAT' :
                     index % 8 === 3 ? 'ATÚN ROJO' :
                     index % 8 === 4 ? 'SUPREMA' :
                     index % 8 === 5 ? 'CALABAZAS' :
                     index % 8 === 6 ? 'VIEIRAS' : 'BOGAVANTE'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carrusel Lateral Derecho */}
      <div className="absolute right-6 top-0 bottom-0 w-40 overflow-hidden z-20 pointer-events-none hidden lg:block">
        <div className="relative h-full">
          {/* Gradiente superior */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none" />
          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex flex-col animate-scroll-up">
            {/* Duplicamos las imágenes para crear efecto infinito */}
            {[...rightCarouselImages, ...rightCarouselImages].map((image, index) => (
              <div key={index} className="mb-6">
                {/* Imagen cuadrada */}
                <div className="relative w-36 h-36 rounded-lg overflow-hidden shadow-xl opacity-70 hover:opacity-90 transition-opacity border border-white/30">
                  <img 
                    src={image}
                    alt={`Dish ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
                
                {/* Nombre del platillo en cuadro */}
                <div className="mt-3 bg-black/80 backdrop-blur-sm rounded-md px-3 py-2 border border-white/20 w-36 h-36 flex items-center justify-center">
                  <div className="text-white text-xs font-light tracking-widest uppercase text-center">
                    {index % 8 === 0 ? 'BOGAVANTE' : 
                     index % 8 === 1 ? 'SALMÓN' :
                     index % 8 === 2 ? 'TOMATE CHERRY' :
                     index % 8 === 3 ? 'VERDE HUERTO' :
                     index % 8 === 4 ? 'MASA PASTA' :
                     index % 8 === 5 ? 'QUEBRADA' :
                     index % 8 === 6 ? 'PULPO' : 'MARISCOS'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
                className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Barra de progreso encima de la imagen */}
              <div className="absolute top-0 left-2 right-2 md:left-4 md:right-4 z-20">
                <div className="w-full bg-white/20 rounded-full h-1 md:h-1.5 overflow-hidden backdrop-blur-sm border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 h-1 md:h-1.5 rounded-full transition-all duration-200 ease-out shadow-lg"
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
              UN VIAJE
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide leading-none mb-2 md:mb-4 text-amber-100 drop-shadow-lg">
              GASTRONÓMICO
            </h3>
            <h4 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide leading-none mb-4 md:mb-8 text-amber-100 drop-shadow-lg">
              ÚNICO
            </h4>
          </div>
        </div>

        {/* Instagram Icon */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Instagram className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
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

    {/* Presentation Section */}
    <section id="presentation-section" className="relative w-full py-16 md:py-24 lg:py-32 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Theme toggle for easy access within this section */}
        <div className="absolute right-6 md:right-12 top-6 md:top-10">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="bg-background border-border hover:bg-secondary transition-colors rounded-full w-10 h-10"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
          {/* Left side - Title */}
          <div className="text-left">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-wide text-primary dark:text-accent leading-tight transition-colors duration-300">
                PRESENTACIÓN
              </h2>
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-accent dark:bg-primary transform origin-left transition-transform duration-500"></div>
            </div>
          </div>
          
          {/* Right side - Description */}
          <div className="text-left">
            <p className="text-base md:text-lg lg:text-xl text-foreground dark:text-foreground/90 leading-relaxed font-light transition-colors duration-300">
              Bienvenidos a Tastavents, un destino culinario que deleitará sus sentidos.
              Somos un enclave gastronómico excepcional en la pintoresca costa del
              litoral barcelonés, donde la comida se convierte en una experiencia que
              va más allá del paladar. Cada aspecto, desde la estética hasta la textura y
              el aroma, ha sido meticulosamente atendido para sumergirlo en la
              esencia más pura de la gastronomía mediterránea.
            </p>
          </div>
        </div>

        {/* Decorative element - Subtle pattern or accent */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 transition-colors duration-300"></div>
      </div>
    </section>

    {/* Panoramic Experience Section - Always Dark */}
    <section id="panoramic-section" className="relative w-full py-16 md:py-32 lg:py-40 bg-slate-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,255,255,0.03),transparent_70%)]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <div>
            <div className="text-sm uppercase tracking-widest text-white/70 mb-2">ESPACIO SINGULAR</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide text-white leading-tight max-w-3xl">
              PANORÁMICAS QUE EXTASÍAN Y DELEITAN LOS SENTIDOS.
            </h2>
          </div>
        </div>

        {/* Image grid with parallax effect - Escalonado como antes pero solo 3 tarjetas en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* First column */}
          <div className="space-y-8">
            <div 
              className="relative aspect-[4/3] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.15"
            >
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop"
                alt="Vista panorámica del restaurante" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Costa Mediterránea</div>
                <div className="text-sm text-white/90">Vistas al mar</div>
              </div>
            </div>
            
            {/* Solo visible en tablets/desktop */}
            <div 
              className="hidden md:block relative aspect-[3/4] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.2"
            >
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop" 
                alt="Plato gourmet" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Atardecer Perfecto</div>
                <div className="text-sm text-white/90">Ambiente íntimo</div>
              </div>
            </div>
          </div>
          
          {/* Second column - Escalonado visualmente */}
          <div className="space-y-8 mt-0 md:mt-16">
            <div 
              className="relative aspect-[1/1] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.25"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior del restaurante" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Ambiente Exclusivo</div>
                <div className="text-sm text-white/90">Diseño contemporáneo</div>
              </div>
            </div>
            
            {/* Solo visible en tablets/desktop */}
            <div 
              className="hidden md:block relative aspect-[3/4] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.15"
            >
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop" 
                alt="Detalle culinario" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Cocina de Autor</div>
                <div className="text-sm text-white/90">Creatividad y tradición</div>
              </div>
            </div>
          </div>
          
          {/* Third column - Solo visible en pantallas grandes y con margen para escalonar */}
          <div className="hidden lg:block space-y-8 mt-24">
            <div 
              className="relative aspect-[4/5] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.18"
            >
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop" 
                alt="Chef en acción" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Experiencia Completa</div>
                <div className="text-sm text-white/90">Eventos especiales</div>
              </div>
            </div>
            <div 
              className="relative aspect-[3/4] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.2"
            >
              <img 
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop" 
                alt="Ingredientes selectos" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Productos del Mar</div>
                <div className="text-sm text-white/90">Frescura excepcional</div>
              </div>
            </div>
          </div>
          
          {/* Tercera card para móvil - Colocada al final para que aparezca debajo en dispositivos móviles */}
          <div className="block md:hidden mt-4 relative aspect-[4/5] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
            data-scroll-parallax="vertical"
            data-parallax-speed="0.18"
          >
            <img 
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop" 
              alt="Chef en acción" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
              <div className="font-serif text-xl text-white font-medium drop-shadow-sm">Experiencia Completa</div>
              <div className="text-sm text-white/90">Eventos especiales</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Menu Preview Section - Theme Aware */}
    <section id="menu-preview-section" className="relative w-full py-16 md:py-24 bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Decorative top wave - more subtle */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-900/40 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section header - cleaner design */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide text-primary dark:text-accent mb-4">
            NUESTRA CARTA
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección exquisita de platos que reflejan nuestra pasión por la cocina mediterránea y la innovación culinaria.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Bebidas */}
          <Link href="/menu?category=bebidas" className="block relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop" 
                alt="Bebidas Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white text-lg font-medium">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 drop-shadow-md">Bebidas</h3>
              <ul className="space-y-4 bg-black/30 dark:bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow">
                <li className="flex justify-between text-white">
                  <span className="font-medium">Espresso</span>
                  <span className="text-white/80">2.50€</span>
                </li>
                <li className="flex justify-between text-white">
                  <span className="font-medium">Vino de la Casa</span>
                  <span className="text-white/80">4.50€</span>
                </li>
                <li className="flex justify-between text-white">
                  <span className="font-medium">Cóctel Signature</span>
                  <span className="text-white/80">12€</span>
                </li>
              </ul>
              <div className="mt-4 text-white/90 text-sm flex items-center justify-center">
                <span>Ver todas las bebidas</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Repostería */}
          <Link href="/menu?category=reposteria" className="block relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1587314168485-3236d6710cb2?q=80&w=1000&auto=format&fit=crop" 
                alt="Repostería Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white text-lg font-medium">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 drop-shadow-md">Repostería</h3>
              <ul className="space-y-4 bg-black/30 dark:bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow">
                <li className="flex justify-between text-white">
                  <span className="font-medium">Tiramisú Casero</span>
                  <span className="text-white/80">9€</span>
                </li>
                <li className="flex justify-between text-white">
                  <span className="font-medium">Coulant de Chocolate</span>
                  <span className="text-white/80">10€</span>
                </li>
                <li className="flex justify-between text-white">
                  <span className="font-medium">Sorbete de Limón</span>
                  <span className="text-white/80">8€</span>
                </li>
              </ul>
              <div className="mt-4 text-white/90 text-sm flex items-center justify-center">
                <span>Ver toda la repostería</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Salados */}
          <Link href="/menu?category=salados" className="block relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop" 
                alt="Salados Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white text-lg font-medium">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 drop-shadow-md">Salados</h3>
              <ul className="space-y-4 bg-black/30 dark:bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow">
                <li className="flex justify-between text-white">
                  <span className="font-medium">Croquetas Caseras</span>
                  <span className="text-white/80">12€</span>
                </li>
                <li className="flex justify-between text-white">
                  <span className="font-medium">Pulpo a la Gallega</span>
                  <span className="text-white/80">24€</span>
                </li>
                <li className="flex justify-between text-white">
                  <span className="font-medium">Patatas Bravas</span>
                  <span className="text-white/80">9€</span>
                </li>
              </ul>
              <div className="mt-4 text-white/90 text-sm flex items-center justify-center">
                <span>Ver todos los salados</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Button to full menu */}
        <div className="mt-12 md:mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="font-serif text-base tracking-wide border-primary dark:border-accent text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 px-8 py-6 transition-all duration-300 hover:shadow-md"
          >
            <Link href="/menu">
              VER CARTA COMPLETA
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements - more subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/5 dark:bg-accent/5 rounded-full blur-2xl transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 dark:bg-accent/5 rounded-full blur-2xl transition-colors duration-300"></div>
      </div>
    </section>
    </>
  );
}
