// Índice de imágenes del menú de El Orquideario
// Imágenes descargadas automáticamente y organizadas por categoría

export const menuItemImages = {
  // REPOSTERÍA
  pastries: {
    'PAS-01': '/images/menu/pastries/apple-crumble.jpg',    // Torta Apple Crumble
    'PAS-02': '/images/menu/pastries/red-velvet.jpg',       // Torta Red Velvet
    'PAS-03': '/images/menu/pastries/carrot-cake.jpg',      // Torta de Zanahoria
    'PAS-04': '/images/menu/pastries/chocolate-cake.jpg',   // Torta de Chocolate
    'PAS-05': '/images/menu/pastries/cheesecake.jpg',       // Cheesecake
    'PAS-06': '/images/menu/pastries/brownie.jpg',          // Brownie
    'PAS-07': '/images/menu/pastries/tiramisu.jpg',         // Postre Tiramisú
    'PAS-08': '/images/menu/pastries/creme-brulee.jpg',     // Crème Brûlée
    'PAS-09': '/images/menu/pastries/yogurt-bowl.jpg',      // Yogurt Bowl
    'PAS-10': '/images/menu/pastries/orange-cake.jpg',      // Queque de Naranja
  },
  
  // SALADOS
  salty: {
    'SAL-01': '/images/menu/salty/bruschetta-capri.jpg',      // Bruschetta Capri
    'SAL-02': '/images/menu/salty/croissant-blt.jpg',         // Croissant BLT
    'SAL-03': '/images/menu/salty/croissant-hawaiano.jpg',    // Croissant Hawaiano
    'SAL-04': '/images/menu/salty/croissant-jamon-huevo.jpg', // Croissant Jamón & Huevo
    'SAL-05': '/images/menu/salty/bruschetta-caprese.jpg',    // Bruschetta Caprese
    'SAL-06': '/images/menu/salty/bruschetta-atun.jpg',       // Bruschetta de Atún
    'SAL-07': '/images/menu/salty/french-toast.jpg',          // French Toast
    'SAL-08': '/images/menu/salty/sandwich-lomito.jpg',       // Sandwich de Lomito
    'SAL-09': '/images/menu/salty/croque-madame.jpg',         // Croque Madame
    'SAL-10': '/images/menu/salty/crostini-pernil.jpg',       // Crostini de Pernil
    'SAL-11': '/images/menu/salty/berry-tostada.jpg',         // Berry Tostada
    'SAL-12': '/images/menu/salty/classic-pancakes.jpg',      // Classic Pancakes
    'SAL-13': '/images/menu/salty/desayuno-americano.jpg',    // Desayuno Americano
    'SAL-14': '/images/menu/salty/omelette-confit.jpg',       // Omelette Confit
    'SAL-15': '/images/menu/salty/la-portobello.jpg',         // La Portobello
    'SAL-16': '/images/menu/salty/holy-guac.jpg',             // Holy Guac
  }
};

// Helper para obtener imagen por ID
export const getMenuItemImage = (itemId: string): string => {
  if (itemId.startsWith('PAS-')) {
    return menuItemImages.pastries[itemId as keyof typeof menuItemImages.pastries] || '';
  }
  if (itemId.startsWith('SAL-')) {
    return menuItemImages.salty[itemId as keyof typeof menuItemImages.salty] || '';
  }
  return '';
};

// Obtener todas las imágenes de una categoría
export const getCategoryImages = (category: 'pastries' | 'salty') => {
  return Object.values(menuItemImages[category]);
};

// Lista de todos los IDs con imágenes disponibles
export const availableImageIds = [
  ...Object.keys(menuItemImages.pastries),
  ...Object.keys(menuItemImages.salty)
];
