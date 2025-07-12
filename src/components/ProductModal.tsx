import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { useI18n } from '@/lib/i18n';
import type { MenuItem } from '@/lib/menu-data';
import { ArrowLeft } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

export function ProductModal({ isOpen, onClose, item }: ProductModalProps) {
  const { t } = useI18n();

  if (!item) return null;

  const hasVariants = item.variants && item.variants.length > 0;
  const imageUrl = item.image || '/placeholder.jpg';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 gap-0 overflow-hidden">
        {/* Ocultamos el botón de cierre por defecto con `showCloseButton={false}` o una clase si es necesario */}
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            <Button 
              variant="ghost" 
              className="absolute top-3 left-3 h-auto bg-black/50 hover:bg-black/70 text-white rounded-full z-10 px-3 py-1.5 flex items-center gap-1.5 text-sm"
              onClick={onClose}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>&lt; back</span>
            </Button>
            <img src={imageUrl} alt={t(item.name)} className="w-full h-56 object-cover" />
          </div>

          <div className="p-6">
            <DialogHeader className="p-0 text-left">
              <DialogTitle className="text-3xl font-bold font-headline">
                {t(item.name)}
              </DialogTitle>
            </DialogHeader>

            {!hasVariants && item.price > 0 && (
              <p className="text-2xl font-bold text-primary mt-1">
                Bs. {item.price.toFixed(2)}
              </p>
            )}

            <Separator className="my-4" />

            {hasVariants && (
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="font-semibold text-foreground">{t('menuPage.labels.options')}</h3>
                {item.variants?.map((variant, index) => (
                  <div key={index} className="flex justify-between w-full text-sm">
                    <span>+ {t(variant.name)}</span>
                    <span className="font-bold text-primary/90">Bs. {variant.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}

            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('menuPage.labels.ingredients')}</h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {item.ingredients?.map((ingredient, index) => (
                    <li key={index}>{t(ingredient)}</li>
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
