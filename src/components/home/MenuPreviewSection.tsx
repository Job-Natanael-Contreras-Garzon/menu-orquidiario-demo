import Link from 'next/link';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n';
import { menuData } from '../../lib/menu-data';

export function MenuPreviewSection() {
  const { t } = useI18n();
  
  // Seleccionar algunos productos representativos de cada categoría
  const beverages = menuData.filter(item => item.category === 'BEVERAGES').slice(0, 3);
  const pastries = menuData.filter(item => item.category === 'PASTRIES').slice(0, 3);
  const saltySnacks = menuData.filter(item => item.category === 'SALTY_SNACKS').slice(0, 3);
  
  return (
    <section id="menu-preview-section" className="relative w-full py-16 md:py-24 bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Decorative top wave - more subtle */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-900/40 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section header - cleaner design */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-light tracking-wide text-primary dark:text-accent mb-4">
            {t('home.menuPreview.title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('home.menuPreview.description')}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Bebidas */}
          <Link href="/menu?category=BEVERAGES" className="block relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/menu/drinks.jpg" 
                alt="Bebidas Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white text-lg font-medium">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-headline text-white mb-4 drop-shadow-md">{t('home.menuPreview.categories.drinks.title')}</h3>
              <ul className="space-y-4 bg-black/30 dark:bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow">
                {beverages.map((item, index) => (
                  <li key={item.id} className="flex justify-between text-white">
                    <span className="font-medium">{t(item.name)}</span>
                    <span className="text-white/80">Bs. {item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-white/90 text-sm flex items-center justify-center">
                <span>{t('home.menuPreview.categories.drinks.viewAll')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Repostería */}
          <Link href="/menu?category=PASTRIES" className="block relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/menu/desserts.jpg" 
                alt="Repostería Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white text-lg font-medium">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-headline text-white mb-4 drop-shadow-md">{t('home.menuPreview.categories.desserts.title')}</h3>
              <ul className="space-y-4 bg-black/30 dark:bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow">
                {pastries.map((item, index) => (
                  <li key={item.id} className="flex justify-between text-white">
                    <span className="font-medium">{t(item.name)}</span>
                    <span className="text-white/80">Bs. {item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-white/90 text-sm flex items-center justify-center">
                <span>{t('home.menuPreview.categories.desserts.viewAll')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Salados */}
          <Link href="/menu?category=SALTY_SNACKS" className="block relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/menu/savory.jpg" 
                alt="Salados Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center text-white text-lg font-medium">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-headline text-white mb-4 drop-shadow-md">{t('home.menuPreview.categories.savory.title')}</h3>
              <ul className="space-y-4 bg-black/30 dark:bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow">
                {saltySnacks.map((item, index) => (
                  <li key={item.id} className="flex justify-between text-white">
                    <span className="font-medium">{t(item.name)}</span>
                    <span className="text-white/80">Bs. {item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-white/90 text-sm flex items-center justify-center">
                <span>{t('home.menuPreview.categories.savory.viewAll')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Button to full menu */}
        <div className="mt-12 md:mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="font-headline text-base tracking-wide border-primary dark:border-accent text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 px-8 py-6 transition-all duration-300 hover:shadow-md"
          >
            <Link href="/menu">
              {t('home.menuPreview.viewFullMenu')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements - more subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/5 dark:bg-accent/5 rounded-full blur-2xl transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 dark:bg-accent/5 rounded-full blur-2xl transition-colors duration-300"></div>
      </div>
    </section>
  );
}
