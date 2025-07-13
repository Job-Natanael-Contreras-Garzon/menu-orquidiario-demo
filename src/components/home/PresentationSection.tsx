import { Button } from '../ui/button';
import { Sun, Moon } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { useTheme } from 'next-themes';

export function PresentationSection() {
  const { t } = useI18n();
  const { setTheme, theme } = useTheme();
  
  return (
    <section id="presentation-section" className="relative min-h-screen w-full flex items-center justify-center text-foreground transition-colors duration-300">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/background/bg2.jpg"
          alt="Fondo de presentación" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/95"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 py-20">
        {/* Theme toggle for easy access within this section */}
        {/* <div className="absolute right-6 md:right-12 top-6 md:top-10">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="bg-background border-border hover:bg-secondary transition-colors rounded-full w-10 h-10"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-fade-in min-h-[60vh] lg:min-h-[70vh]">
          {/* Left side - Title */}
          <div className="text-left flex flex-col justify-center">
            <div className="inline-block relative">
              <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-wide text-primary dark:text-accent leading-tight transition-colors duration-300">
                {t('home.presentation.title')}
              </h2>
              <div className="absolute -bottom-4 left-0 right-0 h-1.5 bg-accent dark:bg-primary transform origin-left transition-transform duration-500"></div>
            </div>
          </div>
          
          {/* Right side - Description */}
          <div className="text-left flex flex-col justify-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-foreground dark:text-foreground/90 leading-relaxed font-light transition-colors duration-300">
              {t('home.presentation.description')}
            </p>
          </div>
        </div>

        {/* Decorative element - Subtle pattern or accent */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 transition-colors duration-300"></div> */}
      </div>
    </section>
  );
}
