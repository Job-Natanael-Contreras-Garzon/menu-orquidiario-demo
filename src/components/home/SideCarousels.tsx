import { useI18n } from '../../lib/i18n';

interface SideCarouselsProps {
  leftCarouselImages: string[];
  rightCarouselImages: string[];
}

export function SideCarousels({ leftCarouselImages, rightCarouselImages }: SideCarouselsProps) {
  const { t } = useI18n();
  
  return (
    <>
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
                    alt={`Drink ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
                
                {/* Nombre del platillo en cuadro */}
                <div className="mt-3 bg-black/80 backdrop-blur-sm rounded-md px-3 py-2 border border-white/20 w-36 h-36 flex items-center justify-center">
                  <div className="text-white text-xs font-light tracking-widest uppercase text-center">
                    {index % 8 === 0 ? t('home.hero.leftCarousel.item1') : 
                     index % 8 === 1 ? t('home.hero.leftCarousel.item2') :
                     index % 8 === 2 ? t('home.hero.leftCarousel.item3') :
                     index % 8 === 3 ? t('home.hero.leftCarousel.item4') :
                     index % 8 === 4 ? t('home.hero.leftCarousel.item5') :
                     index % 8 === 5 ? t('home.hero.leftCarousel.item6') :
                     index % 8 === 6 ? t('home.hero.leftCarousel.item7') : t('home.hero.leftCarousel.item8')}
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
                    alt={`Food ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
                
                {/* Nombre del platillo en cuadro */}
                <div className="mt-3 bg-black/80 backdrop-blur-sm rounded-md px-3 py-2 border border-white/20 w-36 h-36 flex items-center justify-center">
                  <div className="text-white text-xs font-light tracking-widest uppercase text-center">
                    {index % 8 === 0 ? t('home.hero.rightCarousel.item1') : 
                     index % 8 === 1 ? t('home.hero.rightCarousel.item2') :
                     index % 8 === 2 ? t('home.hero.rightCarousel.item3') :
                     index % 8 === 3 ? t('home.hero.rightCarousel.item4') :
                     index % 8 === 4 ? t('home.hero.rightCarousel.item5') :
                     index % 8 === 5 ? t('home.hero.rightCarousel.item6') :
                     index % 8 === 6 ? t('home.hero.rightCarousel.item7') : t('home.hero.rightCarousel.item8')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
