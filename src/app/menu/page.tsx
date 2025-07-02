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

const categories = ['BEVERAGES', 'PASTRIES', 'SALTY SNACKS', 'SPECIAL ORDERS', 'COMBOS'];

const categoryNames: { [key: string]: string } = {
  BEVERAGES: 'Bebidas',
  PASTRIES: 'Repostería',
  SALTY_SNACKS: 'Salados',
  SPECIAL_ORDERS: 'Pedidos Especiales',
  COMBOS: 'Combos IA',
};

const subCategoriesByCategory: { [key: string]: string[] } = {
    BEVERAGES: ['COFFEE', 'SIGNATURE DRINKS', 'JUICES, WATERS & SODAS', 'INFUSIONS', 'DRINKS & COCKTAILS', 'EXTRAS'],
    PASTRIES: ['PASTRIES'],
    SALTY_SNACKS: ['SALTY SNACKS'],
    SPECIAL_ORDERS: ['SPECIAL ORDERS'],
};

const subCategoryNames: { [key: string]: string } = {
    COFFEE: 'Café de Especialidad',
    'SIGNATURE DRINKS': 'Bebidas de Autor',
    'JUICES, WATERS & SODAS': 'Jugos, Aguas & Gaseosas',
    INFUSIONS: 'Infusiones',
    'DRINKS & COCKTAILS': 'Tragos & Cócteles',
    EXTRAS: 'Extras',
    PASTRIES: 'Nuestra Repostería',
    'SALTY SNACKS': 'Nuestros Salados',
    'SPECIAL ORDERS': 'Nuestros Pedidos Especiales',
};


export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) return menuData;
    return menuData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const aiMenuItems = useMemo(() => {
    return menuData
      .filter(item => item.category === 'BEVERAGES' || item.category === 'PASTRIES' || item.category === 'SALTY SNACKS')
      .map(item => ({
        name: item.name,
        category: item.subCategory,
        description: item.description,
        price: item.price,
      })) as SuggestCombosInput['menuItems'];
  }, []);

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
           <h1 className="font-headline text-7xl font-bold">Nuestro Menú</h1>
           <p className="mt-2 text-xl max-w-2xl">Una selección curada de sabores para acompañar tus momentos.</p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Tabs defaultValue="BEVERAGES" className="w-full">
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 mb-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 w-full max-w-2xl">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat}>{categoryNames[cat]}</TabsTrigger>
                ))}
              </TabsList>
              <div className="w-full md:w-auto md:flex-1 md:max-w-xs">
                <Input
                  placeholder="Buscar en el menú..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {categories.slice(0, 4).map((category) => (
            <TabsContent key={category} value={category}>
                {category === 'SPECIAL_ORDERS' && (
                    <Card className="mb-8 border-primary/50 bg-card/80">
                        <CardHeader>
                            <CardTitle className="font-headline text-primary">Condiciones para Pedidos Especiales</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-2">
                            <p>• Los pedidos se toman de martes a domingo de 9 AM a 9 PM.</p>
                            <p>• Los pedidos requieren 48 horas de anticipación con un prepago del 50%.</p>
                            <p>• Sabores o decoraciones no listados deben ser consultados con producción para verificar disponibilidad y tiempo de entrega.</p>
                        </CardContent>
                    </Card>
                )}
                {subCategoriesByCategory[category].map(subCategory => {
                    const items = filteredData.filter(item => item.subCategory === subCategory);
                    if (items.length === 0) return null;
                    return (
                        <div key={subCategory} className="mb-12">
                            <h2 className="font-headline text-3xl md:text-4xl mb-6 text-center text-primary">{subCategoryNames[subCategory]}</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                                {items.map((item) => <ProductCard key={item.id} item={item} />)}
                            </div>
                        </div>
                    )
                })}
            </TabsContent>
          ))}

          <TabsContent value="COMBOS">
            <ComboSuggestion menuItems={aiMenuItems} />
          </TabsContent>

        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
