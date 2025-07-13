import { useI18n } from '../../lib/i18n';

export function PanoramicSection() {
  const { t } = useI18n();
  
  return (
    <section id="panoramic-section" className="relative w-full py-16 md:py-32 lg:py-40 overflow-hidden">
      {/* Background image with blur effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/panoramic/background.jpg"
          alt="Fondo Orquideario" 
          className="w-full h-full object-cover scale-105"
          style={{filter: 'blur(8px) brightness(0.4)'}}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-filter"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(200,255,255,0.03),transparent_70%)]"></div>
      
      {/* Large title with carousel animation */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <h1 className="font-headline text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] text-white font-light tracking-[0.2em] opacity-20 select-none inline-block mr-20 drop-shadow-lg">
            {t('home.panoramic.marqueeTitle')}
          </h1>
          <h1 className="font-headline text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] text-white font-light tracking-[0.2em] opacity-20 select-none inline-block mr-20 drop-shadow-lg">
            {t('home.panoramic.marqueeTitle')}
          </h1>
          <h1 className="font-headline text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] text-white font-light tracking-[0.2em] opacity-20 select-none inline-block mr-20 drop-shadow-lg">
            {t('home.panoramic.marqueeTitle')}
          </h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <div>
            <div className="text-sm uppercase tracking-widest text-white/70 mb-2">{t('home.panoramic.subtitle')}</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-light tracking-wide text-white leading-tight max-w-3xl">
              {t('home.panoramic.title')}
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
                src="/images/panoramic/card1.jpg"
                alt="Vista panorámica de la cafetería" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card1.title')}</div>
                <div className="text-sm text-white/90">{t('home.panoramic.cards.card1.subtitle')}</div>
              </div>
            </div>
            
            {/* Solo visible en tablets/desktop */}
            <div 
              className="hidden md:block relative aspect-[3/4] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.2"
            >
              <img 
                src="/images/panoramic/card2.jpg" 
                alt="Café gourmet" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card2.title')}</div>
                <div className="text-sm text-white/90">{t('home.panoramic.cards.card2.subtitle')}</div>
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
                src="/images/panoramic/card3.jpg" 
                alt="Interior de la cafetería" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card3.title')}</div>
                <div className="text-sm text-white/90">{t('home.panoramic.cards.card3.subtitle')}</div>
              </div>
            </div>
            
            {/* Solo visible en tablets/desktop */}
            <div 
              className="hidden md:block relative aspect-[3/4] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.15"
            >
              <img 
                src="/images/panoramic/card4.jpg" 
                alt="Detalle culinario" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">              
                <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card4.title')}</div>
                <div className="text-sm text-white/90">{t('home.panoramic.cards.card4.subtitle')}</div>
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
                src="/images/panoramic/card5.jpg" 
                alt="Chef en acción" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card5.title')}</div>
                <div className="text-sm text-white/90">{t('home.panoramic.cards.card5.subtitle')}</div>
              </div>
            </div>
            <div 
              className="relative aspect-[3/4] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
              data-scroll-parallax="vertical"
              data-parallax-speed="0.2"
            >
              <img 
                src="/images/panoramic/card6.jpg" 
                alt="Ingredientes selectos" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card6.title')}</div>
                <div className="text-sm text-white/90">{t('home.panoramic.cards.card6.subtitle')}</div>
              </div>
            </div>
          </div>
          
          {/* Tercera card para móvil - Colocada al final para que aparezca debajo en dispositivos móviles */}
          <div className="block md:hidden mt-4 relative aspect-[4/5] bg-accent/10 rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transform-gpu transition-all duration-500"
            data-scroll-parallax="vertical"
            data-parallax-speed="0.18"
          >
            <img 
              src="/images/panoramic/card5.jpg" 
              alt="Chef en acción" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0">
              <div className="font-headline text-xl text-white font-medium drop-shadow-sm">{t('home.panoramic.cards.card5.title')}</div>
              <div className="text-sm text-white/90">{t('home.panoramic.cards.card5.subtitle')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
