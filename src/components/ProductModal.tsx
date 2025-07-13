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
      <DialogContent className="max-w-md p-0 gap-0 overflow-hidden border-none shadow-2xl rounded-lg">
        {/* Ocultamos el botón de cierre por defecto con `showCloseButton={false}` o una clase si es necesario */}
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            <Button 
              variant="ghost" 
              className="absolute top-4 left-4 h-auto bg-black/60 text-white rounded-full z-10 px-3 py-1.5 flex items-center gap-1.5 text-sm shadow-md transition-colors"
              onClick={onClose}
            >
              <ArrowLeft size={16} />
              <span>{t('productModal.back')}</span>
            </Button>
            <img src={imageUrl} alt={t(item.name)}  className="w-full h-64 object-cover" />
          </div>

          <div className="-mt-8 relative z-10">
            <div className="bg-background rounded-t-2xl p-6">
              <DialogHeader className="p-0 text-left mb-2">
                <DialogTitle className="text-3xl font-bold font-headline leading-tight">
                  {t(item.name)}
                </DialogTitle>
              </DialogHeader>

              {item.price > 0 && (
                <p className="text-2xl font-bold text-primary">
                  Bs. {item.price.toFixed(2)}
                </p>
              )}
            </div>

            <div className="p-6 pt-4 bg-background">
              {hasVariants && (
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground text-lg mb-3">{t('menuPage.labels.options')}</h3>
                  <div className="flex flex-col gap-2">
                    {item.variants?.map((variant, index) => (
                      <div key={index} className="flex justify-between w-full text-sm pb-2 border-b border-border/50">
                        <span>+ {t(variant.name)}</span>
                        <span className="font-bold text-primary/90">Bs. {variant.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.ingredients && item.ingredients.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{t('menuPage.labels.ingredients')}</h3>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1.5">
                    {(t(item.ingredients[0]) as unknown as string[]).map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
