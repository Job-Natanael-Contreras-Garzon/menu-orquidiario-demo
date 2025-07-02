// This file contains the hardcoded menu data for "El Orquídeario".
// For future i18n, this could be split into multiple JSON files per language.

export type MenuItemVariant = {
  name: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'BEVERAGES' | 'PASTRIES' | 'SALTY SNACKS' | 'SPECIAL ORDERS';
  subCategory: string;
  image: string;
  dataAiHint: string;
  tags?: string[];
  variants?: MenuItemVariant[];
};

export const menuData: MenuItem[] = [
  // BEVERAGES - COFFEE
  { id: 'COF-01', name: 'Ristretto Doble', description: '', price: 15, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'espresso shot' },
  { id: 'COF-02', name: 'Espresso Doble', description: '', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'espresso shot' },
  { id: 'COF-03', name: 'Americano', description: '', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'black coffee' },
  { id: 'COF-04', name: 'Cortado', description: '', price: 15, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk coffee' },
  { id: 'COF-05', name: 'Macchiato', description: '', price: 18, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk coffee' },
  { id: 'COF-06', name: 'Flat White', description: '', price: 20, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk coffee' },
  { id: 'COF-07', name: 'Cappuccino', description: '', price: 22, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'cappuccino foam' },
  { id: 'COF-08', name: 'Latte', description: '', price: 23, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'latte art' },
  { id: 'COF-09', name: 'Mocca Latte', description: '', price: 25, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'chocolate coffee' },
  { id: 'COF-10', name: 'Sultan', description: '', price: 25, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'specialty coffee' },
  { id: 'COF-11', name: 'Frappe', description: '', price: 30, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'iced coffee' },
  { id: 'COF-12', name: 'Berry Cold Brew', description: '', price: 28, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'cold brew' },
  { id: 'COF-13', name: 'Espresso Tonic', description: '', price: 35, category: 'BEVERAGES', subCategory: 'COFFEE', image: 'https://placehold.co/100x100.png', dataAiHint: 'coffee cocktail' },

  // BEVERAGES - SIGNATURE DRINKS
  { id: 'SIG-01', name: 'Golden Milk', description: '', price: 20, category: 'BEVERAGES', subCategory: 'SIGNATURE DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'turmeric latte' },
  { id: 'SIG-02', name: 'Iced Tea', description: '', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'iced tea' },
  { id: 'SIG-03', name: 'Blue Crush', description: '', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'blue lagoon' },
  { id: 'SIG-04', name: 'Hibiscus Lemonade', description: '', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pink lemonade' },
  { id: 'SIG-05', name: 'Matcha Banana', description: '', price: 28, category: 'BEVERAGES', subCategory: 'SIGNATURE DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'matcha smoothie' },
  { id: 'SIG-06', name: 'Red Berry Soda', description: '', price: 25, category: 'BEVERAGES', subCategory: 'SIGNATURE DRINKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'berry soda' },
  
  // BEVERAGES - JUICES, WATERS & SODAS
  { id: 'JUI-01', name: 'Jugo de Piña', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pineapple juice' },
  { id: 'JUI-02', name: 'Jugo de Coco', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'coconut water' },
  { id: 'JUI-03', name: 'Jugo de Mango', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mango juice' },
  { id: 'JUI-04', name: 'Jugo de Guineo', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'banana smoothie' },
  { id: 'JUI-05', name: 'Jugo de Frutilla', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'strawberry juice' },
  { id: 'JUI-06', name: 'Jugo de Durazno', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'peach juice' },
  { id: 'JUI-07', name: 'Jugo de Maracuyá', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'passionfruit juice' },
  { id: 'JUI-08', name: 'Jugo de Achachairu', description: 'Jugo natural', price: 20, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'exotic fruit' },
  { id: 'WAT-01', name: 'Agua sin gas', description: '', price: 10, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'water bottle' },
  { id: 'WAT-02', name: 'Agua con gas', description: '', price: 15, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'sparkling water' },
  { id: 'SOD-01', name: 'Gaseosas', description: 'Sprite, Sprite Zero, Coca-Cola, Coca-Cola Zero', price: 15, category: 'BEVERAGES', subCategory: 'JUICES, WATERS & SODAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'soda can' },

  // BEVERAGES - INFUSIONS
  { id: 'INF-01', name: 'Chocolate Sunshine', description: 'Infusión con notas a naranja y sensación achocolatada con un toque de canela.', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'herbal tea' },
  { id: 'INF-02', name: 'Cha Cha Chai', description: 'Hojas de té negro de Sri Lanka, con rooibos y un toque de canela tostada.', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'chai tea' },
  { id: 'INF-03', name: 'Pineapple Blues', description: 'Flores del sur de Asia infusionadas con té negro, canela tostada y piña.', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'fruit tea' },
  { id: 'INF-04', name: 'Dolce Vita', description: 'Té de hierbas ligero y refrescante de menta con regaliz y anís.', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mint tea' },
  { id: 'INF-05', name: 'Jazmin', description: 'Mezcla de té verde de corte imperial japonés con delicados pétalos de jazmín.', price: 23, category: 'BEVERAGES', subCategory: 'INFUSIONS', image: 'https://placehold.co/100x100.png', dataAiHint: 'jasmine tea' },

  // BEVERAGES - DRINKS & COCKTAILS
  { id: 'DRK-01', name: 'Mimosa', description: '', price: 30, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mimosa cocktail' },
  { id: 'DRK-02', name: 'Sangrani', description: '', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'red cocktail' },
  { id: 'DRK-03', name: 'Piña Colada', description: '', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pina colada' },
  { id: 'DRK-04', name: 'Mango Margarita', description: '', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mango margarita' },
  { id: 'DRK-05', name: 'Gin Tonic', description: '', price: 40, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'gin tonic' },
  { id: 'DRK-06', name: 'Frozen Sangria', description: '', price: 40, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'frozen sangria' },
  { id: 'DRK-07', name: 'Aperol Spritz', description: '', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'aperol spritz' },
  { id: 'DRK-08', name: 'Whiskey Sour de Achachairu', description: '', price: 35, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whiskey sour' },
  { id: 'DRK-09', name: 'Uyuni Lager', description: 'Cerveza', price: 25, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'craft beer' },
  { id: 'DRK-10', name: 'Uyuni Salt', description: 'Cerveza', price: 25, category: 'BEVERAGES', subCategory: 'DRINKS & COCKTAILS', image: 'https://placehold.co/100x100.png', dataAiHint: 'craft beer' },

  // BEVERAGES - EXTRAS
  { id: 'EXT-01', name: 'Extra Leche', description: '', price: 3, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'milk pour' },
  { id: 'EXT-02', name: 'Extra Crema', description: '', price: 5, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whipped cream' },
  { id: 'EXT-03', name: 'Leche Vegetal', description: '', price: 7, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'almond milk' },
  { id: 'EXT-04', name: 'Saborizantes', description: 'Caramelo, Vainilla', price: 3, category: 'BEVERAGES', subCategory: 'EXTRAS', image: 'https://placehold.co/100x100.png', dataAiHint: 'syrup bottle' },

  // PASTRIES
  { id: 'PAS-01', name: 'Torta Apple Crumble', description: 'Bizcocho especiado con manzanas tiernas cubiertas de canela, envuelto en una colorida corteza dorada y crujiente con caramelo salado.', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'apple crumble', variants: [{ name: 'Con helado', price: 25 }] },
  { id: 'PAS-02', name: 'Torta Red Velvet', description: 'Mini bizcocho de terciopelo rojo, relleno de dulce frosting de queso crema y bayas rojas frescas.', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'red velvet' },
  { id: 'PAS-03', name: 'Torta de Zanahoria', description: 'Bizcocho especiado de zanahoria con canela y nuez moscada, capas de dulce frosting de queso crema, queso caramelizado y nueces caramelizadas.', price: 15, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'carrot cake' },
  { id: 'PAS-04', name: 'Torta de Chocolate', description: 'Bizcocho de chocolate suave y esponjoso, relleno de mermelada de fresa casera, cubierto con crema de chocolate suave y aterciopelada y ganache de chocolate. Una fiesta para el paladar.', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'chocolate cake' },
  { id: 'PAS-05', name: 'Cheesecake', description: 'Cheesecake tradicional americano, base de galleta graham y cremoso relleno de queso crema horneado, servido con una reducción de bayas rojas (opcional).', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'cheesecake slice' },
  { id: 'PAS-06', name: 'Brownie', description: 'Amor a primera mordida, una textura clásica ultra húmeda perfecta para todos los amantes del chocolate.', price: 10, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'brownie stack', variants: [{ name: 'Con helado', price: 20 }] },
  { id: 'PAS-07', name: 'Postre Tiramisú', description: 'Relleno de tiramisú con dos capas de bizcochos de soletilla empapados en sirope de café con vino tinto y cacao en polvo.', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'tiramisu dessert' },
  { id: 'PAS-08', name: 'Crème Brûlée', description: 'Crema pastelera consistente con frutos rojos, aromatizada con licor y vainilla; cubierta con un caramelo crujiente.', price: 20, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'creme brulee' },
  { id: 'PAS-09', name: 'Yogurt Bowl', description: 'Yogur griego y frutas de temporada servidos con miel silvestre y una guarnición casera.', price: 25, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'yogurt bowl' },
  { id: 'PAS-10', name: 'Queque de Naranja', description: 'Bizcocho dulce con sabor a naranja y vainilla, cubierto con una capa de buttercream de naranja.', price: 12, category: 'PASTRIES', subCategory: 'PASTRIES', image: 'https://placehold.co/100x100.png', dataAiHint: 'orange cake' },

  // SALTY SNACKS
  { id: 'SAL-01', name: 'Bruschetta Capri', description: 'Pan de masa madre a la parrilla en aceite de oliva sobre una cama de pesto casero, tomate deshidratado, queso mozzarella fresco y jamón serrano con un toque de glaseado balsámico.', price: 45, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'bruschetta caprese' },
  { id: 'SAL-02', name: 'Croissant BLT', description: 'Croissant con salsa alioli, tocino crujiente sobre una cama de lechuga y rodajas de tomate.', price: 35, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'croissant sandwich' },
  { id: 'SAL-03', name: 'Croissant Hawaiano', description: 'Pasta de queso crema y ricotta, piña caramelizada y lonchas de lomo.', price: 35, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'ham croissant' },
  { id: 'SAL-04', name: 'Croissant Jamón & Huevo', description: 'Omelette sobre una cama de lechuga romana acompañado de lonchas de lomo ahumado, tomates cherry y una reducción balsámica.', price: 35, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'egg croissant' },
  { id: 'SAL-05', name: 'Bruschetta Caprese', description: 'Pan de masa madre crujiente, queso mozzarella fresco, pesto de albahaca y tomates deshidratados.', price: 40, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'caprese toast' },
  { id: 'SAL-06', name: 'Bruschetta de Atún', description: 'Pan de masa madre con aceite de oliva, queso crema aromatizado con cilantro, acompañado de atún, aguacate, rodajas de pepino fresco y tomates cherry confitados.', price: 40, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'tuna toast' },
  { id: 'SAL-07', name: 'French Toast', description: 'Tostadas de pan brioche, acompañadas de mantequilla de maní casera y servidas con yogur griego y reducción de frutos rojos.', price: 40, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'french toast' },
  { id: 'SAL-08', name: 'Sandwich de Lomito', description: 'Pan ciabatta tostado con lomo de res marinado, cebolla caramelizada al whisky, champiñones salteados y queso provolone ahumado, servido con salsa de jalapeño.', price: 40, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'beef sandwich' },
  { id: 'SAL-09', name: 'Croque Madame', description: 'Sándwich de pernil y queso mozzarella gratinado en pan brioche, acompañado de rúcula fresca, salsa provolone y huevo poché.', price: 40, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'croque madame' },
  { id: 'SAL-10', name: 'Crostini de Pernil', description: 'Tostada de pan de masa madre. Guacamole, pernil ahumado y huevos poché, acompañado de mix de verdes, albahaca morada, verdes ricos, tomates cherry con cebolla encurtida.', price: 50, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'avocado toast' },
  { id: 'SAL-11', name: 'Berry Tostada', description: 'Tostada de pan de masa madre. Queso burrata y lascas de tocino sobre una cama de rúcula, acompañado de fresas, tomates cherry y buenas hierbas.', price: 45, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'berry toast' },
  { id: 'SAL-12', name: 'Classic Pancakes', description: 'Panqueques clásicos decadentes y esponjosos con crema batida, frutas de temporada y miel silvestre (contiene coco).', price: 35, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'pancakes stack' },
  { id: 'SAL-13', name: 'Desayuno Americano', description: 'Desayuno completo con huevos al gusto, tocino, panqueques y tostadas, acompañado de un café americano o capuchino y un jugo (a elección: Piña, Coco, Mango).', price: 55, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'american breakfast' },
  { id: 'SAL-14', name: 'Omelette Confit', description: 'Omelette con mantequilla ácida aromatizada con vino blanco, tostada de masa madre, queso mozzarella, mix de verdes del día y un confit de tomates cherry en finas especias, acompañado de un café americano o capuchino.', price: 45, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'omelette plate' },
  { id: 'SAL-15', name: 'La Portobello', description: 'Tostada de pan de masa madre. Deliciosa opción veggie con queso ricotta fresco y aguacate, espinacas y champiñones salteados acompañados de tomates cherry.', price: 45, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'mushroom toast' },
  { id: 'SAL-16', name: 'Holy Guac', description: 'Tostada de pan de masa madre. Huevos revueltos con crema agria, sobre una cama de guacamole, tocino crujiente y tomates cherry con perejil.', price: 45, category: 'SALTY SNACKS', subCategory: 'SALTY SNACKS', image: 'https://placehold.co/100x100.png', dataAiHint: 'guacamole toast' },

  // SPECIAL ORDERS
  { id: 'SPO-01', name: 'Queque Entero 8p', description: 'Bizcocho esponjoso con sabor a naranja o limón, con un ligero glaseado de azúcar. También disponible en vainilla y chocolate en un colorido remolino.', price: 70, category: 'SPECIAL ORDERS', subCategory: 'SPECIAL ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'bundt cake' },
  { id: 'SPO-02', name: 'Torta Red Velvet (Entera)', description: 'Nuestro clásico de la cocina americana. Bizcocho de terciopelo rojo desnudo, tres capas de dulce frosting de queso crema y bayas rojas frescas.', price: 0, category: 'SPECIAL ORDERS', subCategory: 'SPECIAL ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole red velvet', variants: [{ name: '10p', price: 150 }, { name: '16p', price: 240 }] },
  { id: 'SPO-03', name: 'Torta de Zanahoria (Entera)', description: 'Bizcocho de zanahoria húmedo, suave y esponjoso; aromatizado con canela y un toque de nuez moscada. Dos capas de dulce frosting de queso crema, nueces confitadas, caramelo salado y zanahorias deshidratadas.', price: 0, category: 'SPECIAL ORDERS', subCategory: 'SPECIAL ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole carrot cake', variants: [{ name: '10p', price: 150 }, { name: '16p', price: 240 }] },
  { id: 'SPO-04', name: 'Cheesecake Helado 10p', description: '', price: 250, category: 'SPECIAL ORDERS', subCategory: 'SPECIAL ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'frozen cheesecake' },
  { id: 'SPO-05', name: 'NY Cheesecake 10p', description: 'Cheesecake tradicional americano, base de galleta graham y cremoso relleno de queso crema horneado, acompañado de una reducción de bayas rojas (opcional).', price: 280, category: 'SPECIAL ORDERS', subCategory: 'SPECIAL ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole cheesecake' },
  { id: 'SPO-06', name: 'Torta de Chocolate 10p', description: 'Bizcocho de chocolate húmedo y suave, relleno de mermelada de fresa casera. Cubierto con crema de chocolate suave y aterciopelada y ganache de chocolate. Una fiesta para el paladar.', price: 200, category: 'SPECIAL ORDERS', subCategory: 'SPECIAL ORDERS', image: 'https://placehold.co/100x100.png', dataAiHint: 'whole chocolate cake' },
];
