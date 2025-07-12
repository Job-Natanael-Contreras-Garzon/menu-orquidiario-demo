'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface SideCarouselProps {
  items: CarouselItem[];
  position: 'left' | 'right';
  title: string;
}

export function SideCarousel({ items, position, title }: SideCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      ref={carouselRef}
      className={`fixed ${position === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 z-40 
        transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (position === 'left' ? '-translate-x-full' : 'translate-x-full')
        }`}
    >
      <div className="bg-black/90 backdrop-blur-md text-white p-6 w-72 rounded-lg shadow-2xl border border-white/10">
        {/* Title */}
        <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-center text-amber-400">
          {title}
        </h3>

        {/* Main Content */}
        <div className="space-y-4">
          {/* Image */}
          <div className="relative h-32 overflow-hidden rounded-lg">
            <img
              src={items[currentIndex]?.image}
              alt={items[currentIndex]?.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-2 right-2">
              <span className="text-xs text-amber-400 bg-black/60 px-2 py-1 rounded uppercase tracking-wider">
                {items[currentIndex]?.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h4 className="text-lg font-light leading-tight">
              {items[currentIndex]?.title}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {items[currentIndex]?.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-amber-500 w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main carousel section component
export function CarouselSection() {
  const leftCarouselItems: CarouselItem[] = [
    {
      id: '1',
      title: 'Rossinyols',
      description: 'Exquisitos manjares imbuidos de una herencia única. Nuestra cocina fusiona los dones efímeros de nuestra finca.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
      category: 'Hongos'
    },
    {
      id: '2',
      title: 'Albahaca Fresca',
      description: 'Hierbas aromáticas cultivadas en nuestro huerto que despiertan los sentidos con su frescura mediterránea.',
      image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?q=80&w=2070&auto=format&fit=crop',
      category: 'Hierbas'
    },
    {
      id: '3',
      title: 'Especialidades de Temporada',
      description: 'Creaciones únicas que celebran la tradición culinaria local con ingredientes de estación.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop',
      category: 'Platos'
    }
  ];

  const rightCarouselItems: CarouselItem[] = [
    {
      id: '1',
      title: 'Gambas del Mediterráneo',
      description: 'Frescas del mediterráneo, preparadas con técnicas ancestrales que realzan su sabor natural.',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=2070&auto=format&fit=crop',
      category: 'Mariscos'
    },
    {
      id: '2',
      title: 'Pulpo a la Brasa',
      description: 'Tierno y sabroso, cocinado lentamente para alcanzar la perfección en cada bocado.',
      image: 'https://images.unsplash.com/photo-1559847844-d920229d4867?q=80&w=2070&auto=format&fit=crop',
      category: 'Mariscos'
    },
    {
      id: '3',
      title: 'Tesoros del Océano',
      description: 'Lo mejor del océano en cada plato, con ingredientes frescos seleccionados diariamente.',
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?q=80&w=2070&auto=format&fit=crop',
      category: 'Mariscos'
    }
  ];

  return (
    <section className="relative min-h-screen">
      <SideCarousel 
        items={leftCarouselItems} 
        position="left" 
        title="Rossinyols"
      />
      <SideCarousel 
        items={rightCarouselItems} 
        position="right" 
        title="Gambas"
      />
    </section>
  );
}
