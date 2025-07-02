// This file contains the hardcoded menu data for "El Orquídeario".
// All user-facing strings are now translation keys.

export type MenuItemVariant = {
  name: string; // This will be a translation key, e.g., "productCard.withIceCream"
  price: number;
};

export type MenuItem = {
  id: string;
  name: string; // translation key e.g. "menuData.COF-01.name"
  description: string; // translation key e.g. "menuData.COF-01.description"
  price: number;
  category: 'BEVERAGES' | 'PASTRIES' | 'SALTY_SNACKS' | 'SPECIAL_ORDERS';
  subCategory: string; // e.g. "COFFEE"
  image: string;
  dataAiHint: string;
  tags?: string[];
  variants?: MenuItemVariant[];
};

export const menuData: MenuItem[] = [
  // BEVERAGES - COFFEE
  { id: 'COF-01', name: 'menuData.COF-01.name', description: 'menuData.COF-01.description', price: 15, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'espresso shot' },
  { id: 'COF-02', name: 'menuData.COF-02.name', description: 'menuData.COF-02.description', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'espresso shot' },
  { id: 'COF-03', name: 'menuData.COF-03.name', description: 'menuData.COF-03.description', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'black coffee' },
  { id: 'COF-04', name: 'menuData.COF-04.name', description: 'menuData.COF-04.description', price: 15, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk coffee' },
  { id: 'COF-05', name: 'menuData.COF-05.name', description: 'menuData.COF-05.description', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk coffee' },
  { id: 'COF-06', name: 'menuData.COF-06.name', description: 'menuData.COF-06.description', price: 20, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk coffee' },
  { id: 'COF-07', name: 'menuData.COF-07.name', description: 'menuData.COF-07.description', price: 22, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'cappuccino foam' },
  { id: 'COF-08', name: 'menuData.COF-08.name', description: 'menuData.COF-08.description', price: 23, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'latte art' },
  { id: 'COF-09', name: 'menuData.COF-09.name', description: 'menuData.COF-09.description', price: 25, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'chocolate coffee' },
  { id: 'COF-10', name: 'menuData.COF-10.name', description: 'menuData.COF-10.description', price: 25, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'specialty coffee' },
  { id: 'COF-11', name: 'menuData.COF-11.name', description: 'menuData.COF-11.description', price: 30, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'iced coffee' },
  { id: 'COF-12', name: 'menuData.COF-12.name', description: 'menuData.COF-12.description', price: 28, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'cold brew' },
  { id: 'COF-13', name: 'menuData.COF-13.name', description: 'menuData.COF-13.description', price: 35, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'coffee cocktail' },

  // BEVERAGES - SIGNATURE DRINKS
  { id: 'SIG-01', name: 'menuData.SIG-01.name', description: 'menuData.SIG-01.description', price: 20, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'turmeric latte' },
  { id: 'SIG-02', name: 'menuData.SIG-02.name', description: 'menuData.SIG-02.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'iced tea' },
  { id: 'SIG-03', name: 'menuData.SIG-03.name', description: 'menuData.SIG-03.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'blue lagoon' },
  { id: 'SIG-04', name: 'menuData.SIG-04.name', description: 'menuData.SIG-04.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pink lemonade' },
  { id: 'SIG-05', name: 'menuData.SIG-05.name', description: 'menuData.SIG-05.description', price: 28, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'matcha smoothie' },
  { id: 'SIG-06', name: 'menuData.SIG-06.name', description: 'menuData.SIG-06.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'berry soda' },
  
  // BEVERAGES - JUICES, WATERS & SODAS
  { id: 'JUI-01', name: 'menuData.JUI-01.name', description: 'menuData.JUI-01.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pineapple juice' },
  { id: 'JUI-02', name: 'menuData.JUI-02.name', description: 'menuData.JUI-02.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'coconut water' },
  { id: 'JUI-03', name: 'menuData.JUI-03.name', description: 'menuData.JUI-03.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mango juice' },
  { id: 'JUI-04', name: 'menuData.JUI-04.name', description: 'menuData.JUI-04.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'banana smoothie' },
  { id: 'JUI-05', name: 'menuData.JUI-05.name', description: 'menuData.JUI-05.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'strawberry juice' },
  { id: 'JUI-06', name: 'menuData.JUI-06.name', description: 'menuData.JUI-06.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'peach juice' },
  { id: 'JUI-07', name: 'menuData.JUI-07.name', description: 'menuData.JUI-07.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'passionfruit juice' },
  { id: 'JUI-08', name: 'menuData.JUI-08.name', description: 'menuData.JUI-08.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'exotic fruit' },
  { id: 'WAT-01', name: 'menuData.WAT-01.name', description: 'menuData.WAT-01.description', price: 10, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'water bottle' },
  { id: 'WAT-02', name: 'menuData.WAT-02.name', description: 'menuData.WAT-02.description', price: 15, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'sparkling water' },
  { id: 'SOD-01', name: 'menuData.SOD-01.name', description: 'menuData.SOD-01.description', price: 15, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'soda can' },

  // BEVERAGES - INFUSIONS
  { id: 'INF-01', name: 'menuData.INF-01.name', description: 'menuData.INF-01.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'herbal tea' },
  { id: 'INF-02', name: 'menuData.INF-02.name', description: 'menuData.INF-02.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'chai tea' },
  { id: 'INF-03', name: 'menuData.INF-03.name', description: 'menuData.INF-03.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'fruit tea' },
  { id: 'INF-04', name: 'menuData.INF-04.name', description: 'menuData.INF-04.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mint tea' },
  { id: 'INF-05', name: 'menuData.INF-05.name', description: 'menuData.INF-05.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'jasmine tea' },

  // BEVERAGES - DRINKS & COCKTAILS
  { id: 'DRK-01', name: 'menuData.DRK-01.name', description: 'menuData.DRK-01.description', price: 30, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mimosa cocktail' },
  { id: 'DRK-02', name: 'menuData.DRK-02.name', description: 'menuData.DRK-02.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'red cocktail' },
  { id: 'DRK-03', name: 'menuData.DRK-03.name', description: 'menuData.DRK-03.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pina colada' },
  { id: 'DRK-04', name: 'menuData.DRK-04.name', description: 'menuData.DRK-04.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mango margarita' },
  { id: 'DRK-05', name: 'menuData.DRK-05.name', description: 'menuData.DRK-05.description', price: 40, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'gin tonic' },
  { id: 'DRK-06', name: 'menuData.DRK-06.name', description: 'menuData.DRK-06.description', price: 40, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'frozen sangria' },
  { id: 'DRK-07', name: 'menuData.DRK-07.name', description: 'menuData.DRK-07.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'aperol spritz' },
  { id: 'DRK-08', name: 'menuData.DRK-08.name', description: 'menuData.DRK-08.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whiskey sour' },
  { id: 'DRK-09', name: 'menuData.DRK-09.name', description: 'menuData.DRK-09.description', price: 25, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'craft beer' },
  { id: 'DRK-10', name: 'menuData.DRK-10.name', description: 'menuData.DRK-10.description', price: 25, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'craft beer' },

  // BEVERAGES - EXTRAS
  { id: 'EXT-01', name: 'menuData.EXT-01.name', description: 'menuData.EXT-01.description', price: 3, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk pour' },
  { id: 'EXT-02', name: 'menuData.EXT-02.name', description: 'menuData.EXT-02.description', price: 5, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whipped cream' },
  { id: 'EXT-03', name: 'menuData.EXT-03.name', description: 'menuData.EXT-03.description', price: 7, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'almond milk' },
  { id: 'EXT-04', name: 'menuData.EXT-04.name', description: 'menuData.EXT-04.description', price: 3, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'syrup bottle' },

  // PASTRIES
  { id: 'PAS-01', name: 'menuData.PAS-01.name', description: 'menuData.PAS-01.description', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'apple crumble', variants: [{ name: 'productCard.withIceCream', price: 25 }] },
  { id: 'PAS-02', name: 'menuData.PAS-02.name', description: 'menuData.PAS-02.description', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'red velvet' },
  { id: 'PAS-03', name: 'menuData.PAS-03.name', description: 'menuData.PAS-03.description', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'carrot cake' },
  { id: 'PAS-04', name: 'menuData.PAS-04.name', description: 'menuData.PAS-04.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'chocolate cake' },
  { id: 'PAS-05', name: 'menuData.PAS-05.name', description: 'menuData.PAS-05.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'cheesecake slice' },
  { id: 'PAS-06', name: 'menuData.PAS-06.name', description: 'menuData.PAS-06.description', price: 10, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'brownie stack', variants: [{ name: 'productCard.withIceCream', price: 20 }] },
  { id: 'PAS-07', name: 'menuData.PAS-07.name', description: 'menuData.PAS-07.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'tiramisu dessert' },
  { id: 'PAS-08', name: 'menuData.PAS-08.name', description: 'menuData.PAS-08.description', price: 20, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'creme brulee' },
  { id: 'PAS-09', name: 'menuData.PAS-09.name', description: 'menuData.PAS-09.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'yogurt bowl' },
  { id: 'PAS-10', name: 'menuData.PAS-10.name', description: 'menuData.PAS-10.description', price: 12, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'orange cake' },

  // SALTY SNACKS
  { id: 'SAL-01', name: 'menuData.SAL-01.name', description: 'menuData.SAL-01.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'bruschetta caprese' },
  { id: 'SAL-02', name: 'menuData.SAL-02.name', description: 'menuData.SAL-02.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'croissant sandwich' },
  { id: 'SAL-03', name: 'menuData.SAL-03.name', description: 'menuData.SAL-03.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'ham croissant' },
  { id: 'SAL-04', name: 'menuData.SAL-04.name', description: 'menuData.SAL-04.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'egg croissant' },
  { id: 'SAL-05', name: 'menuData.SAL-05.name', description: 'menuData.SAL-05.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'caprese toast' },
  { id: 'SAL-06', name: 'menuData.SAL-06.name', description: 'menuData.SAL-06.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'tuna toast' },
  { id: 'SAL-07', name: 'menuData.SAL-07.name', description: 'menuData.SAL-07.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'french toast' },
  { id: 'SAL-08', name: 'menuData.SAL-08.name', description: 'menuData.SAL-08.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'beef sandwich' },
  { id: 'SAL-09', name: 'menuData.SAL-09.name', description: 'menuData.SAL-09.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'croque madame' },
  { id: 'SAL-10', name: 'menuData.SAL-10.name', description: 'menuData.SAL-10.description', price: 50, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'avocado toast' },
  { id: 'SAL-11', name: 'menuData.SAL-11.name', description: 'menuData.SAL-11.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'berry toast' },
  { id: 'SAL-12', name: 'menuData.SAL-12.name', description: 'menuData.SAL-12.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pancakes stack' },
  { id: 'SAL-13', name: 'menuData.SAL-13.name', description: 'menuData.SAL-13.description', price: 55, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'american breakfast' },
  { id: 'SAL-14', name: 'menuData.SAL-14.name', description: 'menuData.SAL-14.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'omelette plate' },
  { id: 'SAL-15', name: 'menuData.SAL-15.name', description: 'menuData.SAL-15.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mushroom toast' },
  { id: 'SAL-16', name: 'menuData.SAL-16.name', description: 'menuData.SAL-16.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'guacamole toast' },

  // SPECIAL ORDERS
  { id: 'SPO-01', name: 'menuData.SPO-01.name', description: 'menuData.SPO-01.description', price: 70, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'bundt cake' },
  { id: 'SPO-02', name: 'menuData.SPO-02.name', description: 'menuData.SPO-02.description', price: 0, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole red velvet', variants: [{ name: '10p', price: 150 }, { name: '16p', price: 240 }] },
  { id: 'SPO-03', name: 'menuData.SPO-03.name', description: 'menuData.SPO-03.description', price: 0, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole carrot cake', variants: [{ name: '10p', price: 150 }, { name: '16p', price: 240 }] },
  { id: 'SPO-04', name: 'menuData.SPO-04.name', description: 'menuData.SPO-04.description', price: 250, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'frozen cheesecake' },
  { id: 'SPO-05', name: 'menuData.SPO-05.name', description: 'menuData.SPO-05.description', price: 280, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole cheesecake' },
  { id: 'SPO-06', name: 'menuData.SPO-06.name', description: 'menuData.SPO-06.description', price: 200, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole chocolate cake' },
];
