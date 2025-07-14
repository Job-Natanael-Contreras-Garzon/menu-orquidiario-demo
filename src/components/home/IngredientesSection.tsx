import { useI18n } from '../../lib/i18n';

export function IngredientesSection() {
  const { t } = useI18n();
  
  return (
    <section id="ingredientes-section" className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Imagen de fondo llamativa */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/gallery/combo3.jpg"
          alt="Ingredientes frescos y platos gourmet"
          className="w-full h-full object-cover"
        />
        {/* Overlay adaptivo al tema con gradiente - transiciones suaves */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 dark:from-black/65 dark:via-black/75 dark:to-black/85 transition-all duration-700 ease-in-out"></div>
      </div>
      
      {/* Elementos decorativos flotantes - transiciones suaves */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {/* Círculos dorados flotantes con transiciones suaves */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent/25 dark:bg-accent/35 rounded-full animate-float transition-all duration-700 ease-in-out"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/15 dark:bg-accent/25 rounded-full animate-float transition-all duration-700 ease-in-out" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent/30 dark:bg-accent/45 rounded-full animate-float transition-all duration-700 ease-in-out" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-accent/20 dark:bg-accent/30 rounded-full animate-float transition-all duration-700 ease-in-out" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          {/* Título principal - separado en líneas */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-normal tracking-wide text-white/95 dark:text-white mb-2 drop-shadow-lg transition-all duration-700 ease-in-out">
              {t('home.ingredientes.title')}
            </h2>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-headline font-normal tracking-wide text-white/95 dark:text-white drop-shadow-lg transition-all duration-700 ease-in-out">
              {t('home.ingredientes.subtitle')}
            </h3>
          </div>
          
          {/* Descripción centrada con el formato exacto como en la imagen */}
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-sm md:text-base text-white/85 dark:text-white/95 leading-relaxed text-center transition-all duration-700 ease-in-out">
              {t('home.ingredientes.description')}
            </p>
          </div>
          
          {/* Imagen de plato elegante de comida desde los archivos locales */}
          <div className="w-full max-w-md mx-auto relative">
            <div className="aspect-square overflow-hidden rounded-xl shadow-2xl border-4 border-white/15 dark:border-accent/35 transform hover:scale-105 transition-all duration-700 ease-in-out relative">
              <img 
                src="/images/menu/savory.jpg"
                alt={t('home.ingredientes.imageAlt')}
                className="w-full h-full object-cover filter brightness-110 contrast-110"
              />
              {/* Brillo sutil en hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

