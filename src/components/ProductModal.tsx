import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import type { MenuItem, MenuItemVariant } from '@/lib/menu-data';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  onNext: () => void;
  onPrev: () => void;
}

export function ProductModal({ isOpen, onClose, item, onNext, onPrev }: ProductModalProps) {
  const { t } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Re-initialize carousel on item change to avoid stale state
  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.reInit();
    } 
  }, [isOpen, item, emblaApi]);

  if (!item) return null;

  const hasVariants = item.variants && item.variants.length > 0;
  const images = (item.images && item.images.length > 0) ? item.images : ['/placeholder.jpg'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 gap-0 overflow-visible border-none shadow-2xl rounded-lg bg-[#FDF9F4]">
        {/* Visually hidden header for accessibility */}
        <DialogHeader className="sr-only">
          <DialogTitle>{t(item.name)}</DialogTitle>
          <DialogDescription>{t(item.description)}</DialogDescription>
        </DialogHeader>

        {/* Sticky Back Button */}
        <Button variant="ghost" className="absolute top-4 left-4 h-auto bg-black/60 text-white rounded-full z-30 px-3 py-1.5 flex items-center gap-1.5 text-sm shadow-md transition-colors hover:bg-black/80" onClick={onClose}>
          <ArrowLeft size={16} />
          <span>{t('productModal.back')}</span>
        </Button>

        {/* Lateral Navigation Buttons */}
        <Button
          variant="ghost"
          aria-label={t('productModal.prev')}
          className="absolute top-1/2 -translate-y-1/2 -left-14 h-12 w-12 rounded-full bg-black/50 text-white z-30 hover:bg-black/70 transition-colors flex items-center justify-center"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft size={28} />
        </Button>
        <Button
          variant="ghost"
          aria-label={t('productModal.next')}
          className="absolute top-1/2 -translate-y-1/2 -right-14 h-12 w-12 rounded-full bg-black/50 text-white z-30 hover:bg-black/70 transition-colors flex items-center justify-center"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight size={28} />
        </Button>

        <ScrollArea className="max-h-[90vh] rounded-lg">
          <div className="relative">
            {/* Carousel Section */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((src, index) => (
                  <div key={index} className="relative flex-shrink-0 w-full">
                    <img src={src} alt={t(item.name)} className="w-full h-80 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 pt-4 space-y-4 text-[#4A372D]">
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-3xl font-serif tracking-tight text-stone-800 pt-8">{t(item.name)}</h2>
              <p className="text-2xl font-bold text-amber-800 whitespace-nowrap pt-8">Bs. {item.price.toFixed(2)}</p>
            </div>

            <p className="font-body text-stone-600 text-sm leading-relaxed">{t(item.description)}</p>

            {hasVariants && (
              <div>
                <h3 className="font-semibold mb-2 text-lg text-stone-800">{t('productModal.titleVariants')}</h3>
                <div className="">
                  {item.variants?.map((variant: MenuItemVariant, index: number) => (
                    <div key={index} className="flex justify-between items-center bg-stone-50 p-3 rounded-md">
                      <span className="text-sm font-semibold text-stone-700">{t(variant.name)}</span>
                      <span className="text-sm font-semibold text-amber-800">+{variant.price.toFixed(2)} Bs.</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-lg text-stone-800">{t('productModal.titleDescription')}</h3>
                <ul className="list-disc list-inside font-body text-stone-600  space-y-1.5">
                  {(t(item.ingredients[0]) as unknown as string[]).map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
