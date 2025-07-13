'use client';

import Image from 'next/image';
import type { MenuItem } from '@/lib/menu-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { useI18n } from '@/lib/i18n';
import { useState } from 'react';
import { ProductModal } from './ProductModal';

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasVariants = item.variants && item.variants.length > 0;

  // Fallback para imágenes si no se proporciona una
  const imageUrl = item.image || '/placeholder.jpg';

  return (
    <>
      <Card 
        className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer group" 
        onClick={() => setIsModalOpen(true)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
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

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        item={item} 
      />
    </>
  );
}
