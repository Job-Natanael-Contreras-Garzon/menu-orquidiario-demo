'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { menuData } from '@/lib/menu-data';
import { ProductCard } from '@/components/ProductCard';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
// Se eliminan las importaciones de ComboSuggestion y SuggestCombosInput que ya no se utilizan.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/lib/i18n';
import { useDebounce } from '@/hooks/use-debounce';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import enTranslations from '@/lib/i18n/locales/en.json';
import esTranslations from '@/lib/i18n/locales/es.json';

// La constante subCategoriesByCategory ya no es necesaria y se ha eliminado.

// Helper to access nested properties using a dot-separated string
const getTranslation = (data: any, key: string): string => {
    if (!key) return '';
    const keys = key.split('.');
    let result = data;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return '';
      }
    }
    return String(result);
}

export default function MenuPage() {
  const { t } = useI18n();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  // Se establece 'ALL' como la categoría activa por defecto.
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Se define la lista de categorías de productos.
  // Se añade 'ALL' para mostrar todos los productos y se elimina 'COMBOS'.
  const categories = useMemo(() => ['ALL', 'BEVERAGES', 'PASTRIES', 'SALTY_SNACKS', 'SPECIAL_ORDERS'], []);

  const translatedCategoryNames = useMemo(() => ({
    BEVERAGES: t('menuPage.categories.BEVERAGES'),
    ALL: t('menuPage.categories.ALL'), // Añade la traducción para 'ALL'
    PASTRIES: t('menuPage.categories.PASTRIES'),
    SALTY_SNACKS: t('menuPage.categories.SALTY_SNACKS'),
    SPECIAL_ORDERS: t('menuPage.categories.SPECIAL_ORDERS'),
  }), [t]);

  const translatedSubCategoryNames = useMemo(() => ({
    COFFEE: t('menuPage.subCategories.COFFEE'),
    SIGNATURE_DRINKS: t('menuPage.subCategories.SIGNATURE_DRINKS'),
    JUICES_WATERS_SODAS: t('menuPage.subCategories.JUICES_WATERS_SODAS'),
    INFUSIONS: t('menuPage.subCategories.INFUSIONS'),
    DRINKS_COCKTAILS: t('menuPage.subCategories.DRINKS_COCKTAILS'),
    EXTRAS: t('menuPage.subCategories.EXTRAS'),
    PASTRIES: t('menuPage.subCategories.PASTRIES'),
    SALTY_SNACKS: t('menuPage.subCategories.SALTY_SNACKS'),
    SPECIAL_ORDERS: t('menuPage.subCategories.SPECIAL_ORDERS'),
  }), [t]);
  
  const filteredProducts = useMemo(() => {
    const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase().trim();
    // menuData es una lista plana de productos, por lo que la asignamos directamente.
    let products = menuData;

    if (lowercasedSearchTerm) {
      products = products.filter(product => {
        const nameEn = getTranslation(enTranslations, product.name).toLowerCase();
        const descriptionEn = getTranslation(enTranslations, product.description).toLowerCase();
        const nameEs = getTranslation(esTranslations, product.name).toLowerCase();
        const descriptionEs = getTranslation(esTranslations, product.description).toLowerCase();
        return nameEn.includes(lowercasedSearchTerm) ||
               descriptionEn.includes(lowercasedSearchTerm) ||
               nameEs.includes(lowercasedSearchTerm) ||
               descriptionEs.includes(lowercasedSearchTerm);
      });
    }

    if (activeCategory !== 'ALL') {
      return products.filter(p => p.category === activeCategory);
    }

    return products;
  }, [activeCategory, debouncedSearchTerm, t]);

  const groupedProducts = useMemo(() => {
    if (!filteredProducts) return {};
    return filteredProducts.reduce((acc, product) => {
      const subCategoryName = translatedSubCategoryNames[product.subCategory as keyof typeof translatedSubCategoryNames] || product.subCategory;
      if (!acc[subCategoryName]) {
        acc[subCategoryName] = [];
      }
      acc[subCategoryName].push(product);
      return acc;
    }, {} as Record<string, typeof filteredProducts>);
  }, [filteredProducts, translatedSubCategoryNames]);



  return (
    <div className="flex flex-col min-h-screen">
       <div className="relative w-full h-96 md:h-[28rem]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1200x400.png"
            data-ai-hint="elegant cafe"
            alt="El Orquideario Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
         <Header/>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-5 pt-28 md:pt-24">
           <h1 className="font-headline text-7xl font-bold">{t('menuPage.title')}</h1>
           <p className="mt-2 text-xl max-w-2xl">{t('menuPage.subtitle')}</p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 mb-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="w-full md:w-auto md:flex-grow">
                <div className="md:hidden w-full">
                  <Select value={activeCategory} onValueChange={setActiveCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t('menuPage.selectCategory')} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{translatedCategoryNames[cat as keyof typeof translatedCategoryNames]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <TabsList className="hidden md:grid w-full grid-cols-5">
                  {categories.map((cat) => (
                    <TabsTrigger key={cat} value={cat}>{translatedCategoryNames[cat as keyof typeof translatedCategoryNames]}</TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <div className="relative w-full md:w-auto md:max-w-xs">
                <Input
                  placeholder={t('menuPage.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10"
                />
                 {searchTerm && (
                    <Button
                        aria-label={t('menuPage.clearSearch')}
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full text-muted-foreground hover:text-foreground"
                        onClick={() => setSearchTerm('')}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                )}
              </div>
            </div>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              {Object.entries(groupedProducts)
                .filter(([subCategory, items]) => {
                  // Si la pestaña es 'ALL', muestra todos los grupos.
                  if (category === 'ALL') return true;
                  // Si no, muestra solo los grupos de esa categoría.
                  return Array.isArray(items) && items.length > 0 && items[0].category === category;
                })
                .map(([subCategory, items]) => (
                  <div key={subCategory} className="mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl mb-6 text-center text-primary">{subCategory}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {Array.isArray(items) && items.map((item: any) => <ProductCard key={item.id} item={item} />)}
                    </div>
                  </div>
              ))}
            </TabsContent>
          ))}
          {filteredProducts.length === 0 && debouncedSearchTerm && (
            <div className="text-center py-12 text-muted-foreground">
              <p>{t('menuPage.noResults')}</p>
            </div>
          )}

        </Tabs>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
