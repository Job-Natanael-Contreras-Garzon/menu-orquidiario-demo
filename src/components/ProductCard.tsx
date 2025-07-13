'use client';

import Image from 'next/image';
import type { MenuItem } from '@/lib/menu-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { useI18n } from '@/lib/i18n';

interface ProductCardProps {
  item: MenuItem;
  onProductClick: (item: MenuItem) => void;
}

export function ProductCard({ item, onProductClick }: ProductCardProps) {
  const { t } = useI18n();

  const hasVariants = item.variants && item.variants.length > 0;

  // Fallback para imágenes si no se proporciona una
  const imageUrl = (item.images && item.images.length > 0) ? item.images[0] : '/placeholder.jpg';

  return (
    <>
      <Card 
        className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer group" 
        onClick={() => onProductClick(item)}
      >
        <Image
          src={imageUrl}
          fill
          alt={t(item.name)}
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all" />
        
        <div className="relative h-full flex flex-col justify-between p-4">
          <CardHeader className="p-0 " >
            <CardTitle className="text-white text-lg font-bold drop-shadow-md bg-black bg-opacity-50 px-3 py-1 rounded-md self-start">
              {t(item.name)}
            </CardTitle>
          </CardHeader>

          {!hasVariants && item.price > 0 && (
            <div className="text-white text-xl font-bold drop-shadow-md bg-black bg-opacity-50 px-3 py-1 rounded-md self-start">
              Bs. {item.price.toFixed(2)}
            </div>
          )}

          {hasVariants && (
             <div className="text-white text-sm font-semibold drop-shadow-md bg-black bg-opacity-50 px-2 py-1 rounded-md self-start">
              {t('menuPage.labels.seeOptions')}
            </div>
          )}
        </div>
      </Card>
    </>
  );
}
