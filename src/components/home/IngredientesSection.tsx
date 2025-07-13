import { useI18n } from '../../lib/i18n';

export function IngredientesSection() {
  const { t } = useI18n();
  
  return (
    <section id="ingredientes-section" className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden bg-black">
      {/* Fondo completamente negro */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          {/* Título principal - separado en líneas */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-normal tracking-wide text-white mb-2">
              {t('home.ingredientes.title')}
            </h2>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-headline font-normal tracking-wide text-white">
              {t('home.ingredientes.subtitle')}
            </h3>
          </div>
          
          {/* Descripción centrada con el formato exacto como en la imagen */}
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-sm md:text-base text-white/90 leading-relaxed text-center">
              {t('home.ingredientes.description')}
            </p>
          </div>
          
          {/* Imagen de plato elegante de comida desde los archivos locales */}
          <div className="w-full max-w-md mx-auto">
            <div className="aspect-square overflow-hidden rounded-md">
              <img 
                src="/images/menu/savory.jpg"
                alt={t('home.ingredientes.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

