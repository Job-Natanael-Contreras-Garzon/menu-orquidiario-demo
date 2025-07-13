// Lazy loader para datos del menú - carga solo cuando se necesita
import { MenuItem } from './menu-data';

// Cache para evitar cargar múltiples veces
let menuDataCache: MenuItem[] | null = null;

export async function loadMenuData(): Promise<MenuItem[]> {
  if (menuDataCache) {
    return menuDataCache;
  }
  
  // Importación dinámica - solo se carga cuando se necesita
  const { menuData } = await import('./menu-data');
  menuDataCache = menuData;
  return menuData;
}

// Función para limpiar cache si es necesario
export function clearMenuDataCache() {
  menuDataCache = null;
}
