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
    image: string ;
    dataAiHint: string;
    tags?: string[];
    variants?: MenuItemVariant[];
    ingredients?: string[];
  };

  export const menuData: MenuItem[] = [
    // BEVERAGES - COFFEE
    { id: 'COF-01', name: 'menuData.COF-01.name', description: 'menuData.COF-01.description', price: 15, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/double-ristretto-coffee.webp", dataAiHint: 'espresso shot', ingredients:['menuData.COF-01.ingredients'] },
    { id: 'COF-02', name: 'menuData.COF-02.name', description: 'menuData.COF-02.description', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/double-espresso-coffe.webp", dataAiHint: 'espresso shot', ingredients:['menuData.COF-02.ingredients'] },
    { id: 'COF-03', name: 'menuData.COF-03.name', description: 'menuData.COF-03.description', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/americano-coffee.webp", dataAiHint: 'black coffee', ingredients:['menuData.COF-03.ingredients'] },
    { id: 'COF-04', name: 'menuData.COF-04.name', description: 'menuData.COF-04.description', price: 15, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/cortado-coffee.webp", dataAiHint: 'milk coffee', ingredients:['menuData.COF-04.ingredients'] },
    { id: 'COF-05', name: 'menuData.COF-05.name', description: 'menuData.COF-05.description', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/expresso-macchiato-coffee.webp", dataAiHint: 'milk coffee', ingredients:['menuData.COF-05.ingredients'] },
    { id: 'COF-06', name: 'menuData.COF-06.name', description: 'menuData.COF-06.description', price: 20, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/flat-white.webp", dataAiHint: 'milk coffee', ingredients:['menuData.COF-06.ingredients'] },
    { id: 'COF-07', name: 'menuData.COF-07.name', description: 'menuData.COF-07.description', price: 22, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/capuchino-coffee.webp", dataAiHint: 'cappuccino foam', ingredients:['menuData.COF-07.ingredients'] },
    { id: 'COF-08', name: 'menuData.COF-08.name', description: 'menuData.COF-08.description', price: 23, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/latte-coffee.webp", dataAiHint: 'latte art', ingredients:['menuData.COF-08.ingredients'] },
    { id: 'COF-09', name: 'menuData.COF-09.name', description: 'menuData.COF-09.description', price: 25, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/mocha-latte-coffee.webp", dataAiHint: 'chocolate coffee', ingredients:['menuData.COF-09.ingredients'] },
    { id: 'COF-10', name: 'menuData.COF-10.name', description: 'menuData.COF-10.description', price: 25, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/sultan-coffee.webp", dataAiHint: 'specialty coffee', ingredients:['menuData.COF-10.ingredients'] },
    { id: 'COF-11', name: 'menuData.COF-11.name', description: 'menuData.COF-11.description', price: 30, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/frape.webp", dataAiHint: 'iced coffee', ingredients:['menuData.COF-11.ingredients'] },
    { id: 'COF-12', name: 'menuData.COF-12.name', description: 'menuData.COF-12.description', price: 28, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/berry-cold-brew.webp", dataAiHint: 'cold brew', ingredients:['menuData.COF-12.ingredients'] },
    { id: 'COF-13', name: 'menuData.COF-13.name', description: 'menuData.COF-13.description', price: 35, category: 'BEVERAGES', subCategory: 'COFFEE', image: "/assets/coffee/espresso-tonic-coffee.webp", dataAiHint: 'coffee cocktail', ingredients:['menuData.COF-13.ingredients'] },

  // BEVERAGES - SIGNATURE DRINKS
  { id: 'SIG-01', name: 'menuData.SIG-01.name', description: 'menuData.SIG-01.description', price: 20, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: '/assets/bebidas-de-autor/golden-milk.webp', dataAiHint: 'turmeric latte', ingredients:['menuData.SIG-01.ingredients'] },
  { id: 'SIG-02', name: 'menuData.SIG-02.name', description: 'menuData.SIG-02.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: '/assets/bebidas-de-autor/iced-tea-autor.webp', dataAiHint: 'iced tea', ingredients:['menuData.SIG-02.ingredients'] },
  { id: 'SIG-03', name: 'menuData.SIG-03.name', description: 'menuData.SIG-03.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: '/assets/bebidas-de-autor/blue-crush-autor.webp', dataAiHint: 'blue lagoon', ingredients:['menuData.SIG-03.ingredients'] },
  { id: 'SIG-04', name: 'menuData.SIG-04.name', description: 'menuData.SIG-04.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: '/assets/bebidas-de-autor/hibiscus-lemonade-autor.webp', dataAiHint: 'pink lemonade', ingredients:['menuData.SIG-04.ingredients'] },
  { id: 'SIG-05', name: 'menuData.SIG-05.name', description: 'menuData.SIG-05.description', price: 28, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: '/assets/bebidas-de-autor/matcha-banana-autor.webp', dataAiHint: 'matcha smoothie', ingredients:['menuData.SIG-05.ingredients'] },
  { id: 'SIG-06', name: 'menuData.SIG-06.name', description: 'menuData.SIG-06.description', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE_DRINKS', image: '/assets/bebidas-de-autor/red-berry-soda-autor.webp', dataAiHint: 'berry soda', ingredients:['menuData.SIG-06.ingredients'] },
  
  // BEVERAGES - JUICES, WATERS & SODAS
  { id: 'JUI-01', name: 'menuData.JUI-01.name', description: 'menuData.JUI-01.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-pina.webp', dataAiHint: 'pineapple juice', ingredients:['menuData.JUI-01.ingredients'] },
  { id: 'JUI-02', name: 'menuData.JUI-02.name', description: 'menuData.JUI-02.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-coco.webp', dataAiHint: 'coconut water', ingredients:['menuData.JUI-02.ingredients'] },
  { id: 'JUI-03', name: 'menuData.JUI-03.name', description: 'menuData.JUI-03.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-mango.webp', dataAiHint: 'mango juice', ingredients:['menuData.JUI-03.ingredients'] },
  { id: 'JUI-04', name: 'menuData.JUI-04.name', description: 'menuData.JUI-04.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-guineo.webp', dataAiHint: 'banana smoothie', ingredients:['menuData.JUI-04.ingredients'] },
  { id: 'JUI-05', name: 'menuData.JUI-05.name', description: 'menuData.JUI-05.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-frutilla.webp', dataAiHint: 'strawberry juice', ingredients:['menuData.JUI-05.ingredients'] },
  { id: 'JUI-06', name: 'menuData.JUI-06.name', description: 'menuData.JUI-06.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-durazno.webp', dataAiHint: 'peach juice', ingredients:['menuData.JUI-06.ingredients'] },
  { id: 'JUI-07', name: 'menuData.JUI-07.name', description: 'menuData.JUI-07.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-maracuya.webp', dataAiHint: 'passionfruit juice', ingredients:['menuData.JUI-07.ingredients'] },
  { id: 'JUI-08', name: 'menuData.JUI-08.name', description: 'menuData.JUI-08.description', price: 20, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/jugo-de-achachairu.webp', dataAiHint: 'exotic fruit', ingredients:['menuData.JUI-08.ingredients'] },
  { id: 'WAT-01', name: 'menuData.WAT-01.name', description: 'menuData.WAT-01.description', price: 10, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/agua-sin-gas.webp', dataAiHint: 'water bottle', ingredients:['menuData.WAT-01.ingredients'] },
  { id: 'WAT-02', name: 'menuData.WAT-02.name', description: 'menuData.WAT-02.description', price: 15, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/agua-con-gas.webp', dataAiHint: 'sparkling water', ingredients:['menuData.WAT-02.ingredients'] },
  { id: 'SOD-01', name: 'menuData.SOD-01.name', description: 'menuData.SOD-01.description', price: 15, category: 'BEVERAGES', subCategory: 'JUICES_WATERS_SODAS', image: '/assets/jugos-aguas-gaseosas/gaseosas.webp', dataAiHint: 'soda can', ingredients:['menuData.SOD-01.ingredients'] },

  // BEVERAGES - INFUSIONS
  { id: 'INF-01', name: 'menuData.INF-01.name', description: 'menuData.INF-01.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'herbal tea', ingredients:['menuData.INF-01.ingredients'] },
  { id: 'INF-02', name: 'menuData.INF-02.name', description: 'menuData.INF-02.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'chai tea', ingredients:['menuData.INF-02.ingredients'] },
  { id: 'INF-03', name: 'menuData.INF-03.name', description: 'menuData.INF-03.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'fruit tea', ingredients:['menuData.INF-03.ingredients'] },
  { id: 'INF-04', name: 'menuData.INF-04.name', description: 'menuData.INF-04.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mint tea', ingredients:['menuData.INF-04.ingredients'] },
  { id: 'INF-05', name: 'menuData.INF-05.name', description: 'menuData.INF-05.description', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'jasmine tea', ingredients:['menuData.INF-05.ingredients'] },

  // BEVERAGES - DRINKS & COCKTAILS
  { id: 'DRK-01', name: 'menuData.DRK-01.name', description: 'menuData.DRK-01.description', price: 30, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mimosa cocktail', ingredients:['menuData.DRK-01.ingredients'] },
  { id: 'DRK-02', name: 'menuData.DRK-02.name', description: 'menuData.DRK-02.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'red cocktail', ingredients:['menuData.DRK-02.ingredients'] },
  { id: 'DRK-03', name: 'menuData.DRK-03.name', description: 'menuData.DRK-03.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pina colada', ingredients:['menuData.DRK-03.ingredients'] },
  { id: 'DRK-04', name: 'menuData.DRK-04.name', description: 'menuData.DRK-04.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mango margarita', ingredients:['menuData.DRK-04.ingredients'] },
  { id: 'DRK-05', name: 'menuData.DRK-05.name', description: 'menuData.DRK-05.description', price: 40, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'gin tonic', ingredients:['menuData.DRK-05.ingredients'] },
  { id: 'DRK-06', name: 'menuData.DRK-06.name', description: 'menuData.DRK-06.description', price: 40, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'frozen sangria', ingredients:['menuData.DRK-06.ingredients'] },
  { id: 'DRK-07', name: 'menuData.DRK-07.name', description: 'menuData.DRK-07.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'aperol spritz', ingredients:['menuData.DRK-07.ingredients'] },
  { id: 'DRK-08', name: 'menuData.DRK-08.name', description: 'menuData.DRK-08.description', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whiskey sour', ingredients:['menuData.DRK-08.ingredients'] },
  { id: 'DRK-09', name: 'menuData.DRK-09.name', description: 'menuData.DRK-09.description', price: 25, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'craft beer', ingredients:['menuData.DRK-09.ingredients'] },
  { id: 'DRK-10', name: 'menuData.DRK-10.name', description: 'menuData.DRK-10.description', price: 25, category: 'BEVERAGES', subCategory: 'DRINKS_COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'craft beer', ingredients:['menuData.DRK-10.ingredients'] },

  // BEVERAGES - EXTRAS
  { id: 'EXT-01', name: 'menuData.EXT-01.name', description: 'menuData.EXT-01.description', price: 3, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk pour', ingredients:['menuData.EXT-01.ingredients'] },
  { id: 'EXT-02', name: 'menuData.EXT-02.name', description: 'menuData.EXT-02.description', price: 5, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whipped cream', ingredients:['menuData.EXT-02.ingredients'] },
  { id: 'EXT-03', name: 'menuData.EXT-03.name', description: 'menuData.EXT-03.description', price: 7, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'almond milk', ingredients:['menuData.EXT-03.ingredients'] },
  { id: 'EXT-04', name: 'menuData.EXT-04.name', description: 'menuData.EXT-04.description', price: 3, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'syrup bottle', ingredients:['menuData.EXT-04.ingredients'] },

  // PASTRIES
  { id: 'PAS-01', name: 'menuData.PAS-01.name', description: 'menuData.PAS-01.description', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'apple crumble', variants: [{ name: 'productCard.withIceCream', price: 25 }], ingredients:['menuData.PAS-01.ingredients'] },
  { id: 'PAS-02', name: 'menuData.PAS-02.name', description: 'menuData.PAS-02.description', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'red velvet', ingredients:['menuData.PAS-02.ingredients'] },
  { id: 'PAS-03', name: 'menuData.PAS-03.name', description: 'menuData.PAS-03.description', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'carrot cake', ingredients:['menuData.PAS-03.ingredients'] },
  { id: 'PAS-04', name: 'menuData.PAS-04.name', description: 'menuData.PAS-04.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'chocolate cake', ingredients:['menuData.PAS-04.ingredients'] },
  { id: 'PAS-05', name: 'menuData.PAS-05.name', description: 'menuData.PAS-05.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'cheesecake slice', ingredients:['menuData.PAS-05.ingredients'] },
  { id: 'PAS-06', name: 'menuData.PAS-06.name', description: 'menuData.PAS-06.description', price: 10, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'brownie stack', variants: [{ name: 'productCard.withIceCream', price: 20 }], ingredients:['menuData.PAS-06.ingredients'] },
  { id: 'PAS-07', name: 'menuData.PAS-07.name', description: 'menuData.PAS-07.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'tiramisu dessert', ingredients:['menuData.PAS-07.ingredients'] },
  { id: 'PAS-08', name: 'menuData.PAS-08.name', description: 'menuData.PAS-08.description', price: 20, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'creme brulee', ingredients:['menuData.PAS-08.ingredients'] },
  { id: 'PAS-09', name: 'menuData.PAS-09.name', description: 'menuData.PAS-09.description', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'yogurt bowl', ingredients:['menuData.PAS-09.ingredients'] },
  { id: 'PAS-10', name: 'menuData.PAS-10.name', description: 'menuData.PAS-10.description', price: 12, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'orange cake', ingredients:['menuData.PAS-10.ingredients'] },

  // SALTY SNACKS
  { id: 'SAL-01', name: 'menuData.SAL-01.name', description: 'menuData.SAL-01.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'bruschetta caprese', ingredients:['menuData.SAL-01.ingredients'] },
  { id: 'SAL-02', name: 'menuData.SAL-02.name', description: 'menuData.SAL-02.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'croissant sandwich', ingredients:['menuData.SAL-02.ingredients'] },
  { id: 'SAL-03', name: 'menuData.SAL-03.name', description: 'menuData.SAL-03.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'ham croissant', ingredients:['menuData.SAL-03.ingredients'] },
  { id: 'SAL-04', name: 'menuData.SAL-04.name', description: 'menuData.SAL-04.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'egg croissant', ingredients:['menuData.SAL-04.ingredients'] },
  { id: 'SAL-05', name: 'menuData.SAL-05.name', description: 'menuData.SAL-05.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'caprese toast', ingredients:['menuData.SAL-05.ingredients'] },
  { id: 'SAL-06', name: 'menuData.SAL-06.name', description: 'menuData.SAL-06.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'tuna toast', ingredients:['menuData.SAL-06.ingredients'] },
  { id: 'SAL-07', name: 'menuData.SAL-07.name', description: 'menuData.SAL-07.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'french toast', ingredients:['menuData.SAL-07.ingredients'] },
  { id: 'SAL-08', name: 'menuData.SAL-08.name', description: 'menuData.SAL-08.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'beef sandwich', ingredients:['menuData.SAL-08.ingredients'] },
  { id: 'SAL-09', name: 'menuData.SAL-09.name', description: 'menuData.SAL-09.description', price: 40, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'croque madame', ingredients:['menuData.SAL-09.ingredients'] },
  { id: 'SAL-10', name: 'menuData.SAL-10.name', description: 'menuData.SAL-10.description', price: 50, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'avocado toast', ingredients:['menuData.SAL-10.ingredients'] },
  { id: 'SAL-11', name: 'menuData.SAL-11.name', description: 'menuData.SAL-11.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'berry toast', ingredients:['menuData.SAL-11.ingredients'] },
  { id: 'SAL-12', name: 'menuData.SAL-12.name', description: 'menuData.SAL-12.description', price: 35, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pancakes stack', ingredients:['menuData.SAL-12.ingredients'] },
  { id: 'SAL-13', name: 'menuData.SAL-13.name', description: 'menuData.SAL-13.description', price: 55, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'american breakfast', ingredients:['menuData.SAL-13.ingredients'] },
  { id: 'SAL-14', name: 'menuData.SAL-14.name', description: 'menuData.SAL-14.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'omelette plate', ingredients:['menuData.SAL-14.ingredients'] },
  { id: 'SAL-15', name: 'menuData.SAL-15.name', description: 'menuData.SAL-15.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mushroom toast', ingredients:['menuData.SAL-15.ingredients'] },
  { id: 'SAL-16', name: 'menuData.SAL-16.name', description: 'menuData.SAL-16.description', price: 45, category: 'SALTY_SNACKS', subCategory: 'SALTY_SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'guacamole toast', ingredients:['menuData.SAL-16.ingredients'] },

  // SPECIAL ORDERS
  { id: 'SPO-01', name: 'menuData.SPO-01.name', description: 'menuData.SPO-01.description', price: 70, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'bundt cake', ingredients:['menuData.SPO-01.ingredients'] },
  { id: 'SPO-02', name: 'menuData.SPO-02.name', description: 'menuData.SPO-02.description', price: 0, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole red velvet', variants: [{ name: '10p', price: 150 }, { name: '16p', price: 240 }], ingredients:['menuData.SPO-02.ingredients'] },
  { id: 'SPO-03', name: 'menuData.SPO-03.name', description: 'menuData.SPO-03.description', price: 0, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole carrot cake', variants: [{ name: '10p', price: 150 }, { name: '16p', price: 240 }], ingredients:['menuData.SPO-03.ingredients'] },
  { id: 'SPO-04', name: 'menuData.SPO-04.name', description: 'menuData.SPO-04.description', price: 250, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'frozen cheesecake', ingredients:['menuData.SPO-04.ingredients'] },
  { id: 'SPO-05', name: 'menuData.SPO-05.name', description: 'menuData.SPO-05.description', price: 280, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole cheesecake', ingredients:['menuData.SPO-05.ingredients'] },
  { id: 'SPO-06', name: 'menuData.SPO-06.name', description: 'menuData.SPO-06.description', price: 200, category: 'SPECIAL_ORDERS', subCategory: 'SPECIAL_ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole chocolate cake', ingredients:['menuData.SPO-06.ingredients'] },
];
