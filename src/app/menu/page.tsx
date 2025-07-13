'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { menuData, type MenuItem } from '@/lib/menu-data';
import { ProductCard } from '@/components/ProductCard';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/lib/i18n';
import { useDebounce } from '@/hooks/use-debounce';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import enTranslations from '@/lib/i18n/locales/en.json';
import esTranslations from '@/lib/i18n/locales/es.json';
import { ProductModal } from '@/components/ProductModal';

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
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Se define la lista de categorías de productos.
  // Se añade 'ALL' para mostrar todos los productos y se elimina 'COMBOS'.
  const categories = useMemo(() => ['ALL', 'BEVERAGES', 'PASTRIES', 'SALTY_SNACKS', 'SPECIAL_ORDERS'], []);

  // Efecto para leer el parámetro de categoría de la URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams, categories]);

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
    MILKSHAKES: t('menuPage.subCategories.MILKSHAKES'),
    COFFEE_SPECIAL: t('menuPage.subCategories.COFFEE_SPECIAL'),
    FILTERED_COFFEE: t('menuPage.subCategories.FILTERED_COFFEE'),
    TRADITIONAL: t('menuPage.subCategories.TRADITIONAL'),
    INTEGRAL: t('menuPage.subCategories.INTEGRAL'),
    SEASONAL: t('menuPage.subCategories.SEASONAL'),
  }), [t]);

  const filteredAndSortedItems = useMemo(() => {
    const items = menuData.filter(item => {
      const categoryMatch = activeCategory === 'ALL' || item.category === activeCategory;
      const searchMatch = debouncedSearchTerm ? t(item.name).toLowerCase().includes(debouncedSearchTerm.toLowerCase()) : true;
      return categoryMatch && searchMatch;
    });

    // Ordena los items por subcategoría
    const subCategoryOrder = Object.keys(translatedSubCategoryNames);
    items.sort((a, b) => {
      const subCategoryAIndex = subCategoryOrder.indexOf(a.subCategory);
      const subCategoryBIndex = subCategoryOrder.indexOf(b.subCategory);
      return subCategoryAIndex - subCategoryBIndex;
    });

    return items;
  }, [activeCategory, debouncedSearchTerm, t, translatedSubCategoryNames]);

  const handleProductClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredAndSortedItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredAndSortedItems.length;
    setSelectedItem(filteredAndSortedItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredAndSortedItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredAndSortedItems.length) % filteredAndSortedItems.length;
    setSelectedItem(filteredAndSortedItems[prevIndex]);
  };

  // Agrupa los items por subcategoría para la renderización
  const groupedItems = useMemo(() => {
    return filteredAndSortedItems.reduce((acc, item) => {
      const subCategoryName = translatedSubCategoryNames[item.subCategory as keyof typeof translatedSubCategoryNames] || item.subCategory;
      if (!acc[subCategoryName]) {
        acc[subCategoryName] = [];
      }
      acc[subCategoryName].push(item);
      return acc;
    }, {} as Record<string, typeof filteredAndSortedItems>);
  }, [filteredAndSortedItems, translatedSubCategoryNames]);

  return (
    <div className="flex flex-col min-h-screen">
       <div className="relative w-full h-96 md:h-[28rem]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background/bg3.jpg"
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
      
      <main className="flex-grow container mx-auto p-4 md:p-8 relative">
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `url('/images/background/bg1.jpg')`,
            backgroundSize: '100px 100px',
            backgroundRepeat: 'repeat',
            filter: 'blur(1px)'
          }} />
        </div>
        
        <div className="relative z-10">
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
              {Object.entries(groupedItems)
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
                      {Array.isArray(items) && items.map((item: any) => <ProductCard key={item.id} item={item} onProductClick={handleProductClick} />)}
                    </div>
                  </div>
              ))}
            </TabsContent>
          ))}
          {filteredAndSortedItems.length === 0 && debouncedSearchTerm && (
            <div className="text-center py-12 text-muted-foreground">
              <p>{t('menuPage.noResults')}</p>
            </div>
          )}

        </Tabs>
      </div>
      </main>
      <Footer />
      <ScrollToTopButton />
      
      <ProductModal 
        key={selectedItem?.id}
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        item={selectedItem}
        onNext={handleNext}
        onPrev={handlePrev}
      />

    </div>
  );
}
