'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { menuData } from '@/lib/menu-data';
import { ProductCard } from '@/components/ProductCard';
import { ComboSuggestion } from '@/components/ComboSuggestion';
import type { SuggestCombosInput } from '@/ai/flows/suggest-combos';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useI18n } from '@/lib/i18n';

const subCategoriesByCategory: { [key: string]: string[] } = {
    BEVERAGES: ['COFFEE', 'SIGNATURE_DRINKS', 'JUICES_WATERS_SODAS', 'INFUSIONS', 'DRINKS_COCKTAILS', 'EXTRAS'],
    PASTRIES: ['PASTRIES'],
    SALTY_SNACKS: ['SALTY_SNACKS'],
    SPECIAL_ORDERS: ['SPECIAL_ORDERS'],
    COMBOS: [],
};

export default function MenuPage() {
  const { t } = useI18n();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('BEVERAGES');

  const categories = useMemo(() => ['BEVERAGES', 'PASTRIES', 'SALTY_SNACKS', 'SPECIAL_ORDERS', 'COMBOS'], []);

  const translatedCategoryNames = useMemo(() => ({
    BEVERAGES: t('menuPage.categories.BEVERAGES'),
    PASTRIES: t('menuPage.categories.PASTRIES'),
    SALTY_SNACKS: t('menuPage.categories.SALTY_SNACKS'),
    SPECIAL_ORDERS: t('menuPage.categories.SPECIAL_ORDERS'),
    COMBOS: t('menuPage.categories.COMBOS'),
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
  
  const filteredData = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    if (!lowercasedSearchTerm) return menuData;
    return menuData.filter(
      (item) =>
        t(item.name).toLowerCase().includes(lowercasedSearchTerm) ||
        t(item.description).toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [searchTerm, t]);

  const aiMenuItems = useMemo(() => {
    return menuData
      .filter(item => item.category === 'BEVERAGES' || item.category === 'PASTRIES' || item.category === 'SALTY_SNACKS')
      .map(item => ({
        name: t(item.name),
        category: t(`menuPage.subCategories.${item.subCategory}`),
        description: t(item.description),
        price: item.price,
      })) as SuggestCombosInput['menuItems'];
  }, [t, translatedSubCategoryNames]);

  return (
    <div className="flex flex-col min-h-screen">
       <div className="relative w-full h-80">
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
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
              
              <div className="w-full md:w-auto md:max-w-xs">
                <Input
                  placeholder={t('menuPage.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
                {category === 'SPECIAL_ORDERS' && (
                    <Card className="mb-8 border-primary/50 bg-card/80">
                        <CardHeader>
                            <CardTitle className="font-headline text-primary">{t('menuPage.specialOrdersConditions.title')}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-2">
                            <p>{t('menuPage.specialOrdersConditions.line1')}</p>
                            <p>{t('menuPage.specialOrdersConditions.line2')}</p>
                            <p>{t('menuPage.specialOrdersConditions.line3')}</p>
                        </CardContent>
                    </Card>
                )}

                {category === 'COMBOS' ? (
                  <ComboSuggestion menuItems={aiMenuItems} />
                ) : (
                  subCategoriesByCategory[category]?.map(subCategory => {
                      const items = filteredData.filter(item => item.subCategory === subCategory);
                      if (items.length === 0) return null;
                      return (
                          <div key={subCategory} className="mb-12">
                              <h2 className="font-headline text-3xl md:text-4xl mb-6 text-center text-primary">{translatedSubCategoryNames[subCategory as keyof typeof translatedSubCategoryNames]}</h2>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                                  {items.map((item) => <ProductCard key={item.id} item={item} />)}
                              </div>
                          </div>
                      )
                  })
                )}
            </TabsContent>
          ))}

        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
