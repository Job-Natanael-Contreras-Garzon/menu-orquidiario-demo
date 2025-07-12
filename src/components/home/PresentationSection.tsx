import { Button } from '../ui/button';
import { Sun, Moon } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { useTheme } from 'next-themes';

export function PresentationSection() {
  const { t } = useI18n();
  const { setTheme, theme } = useTheme();
  
  return (
    <section id="presentation-section" className="relative w-full py-16 md:py-24 lg:py-32 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Theme toggle for easy access within this section */}
        <div className="absolute right-6 md:right-12 top-6 md:top-10">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in">
          {/* Left side - Title */}
          <div className="text-left">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-wide text-primary dark:text-accent leading-tight transition-colors duration-300">
                {t('home.presentation.title')}
              </h2>
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-accent dark:bg-primary transform origin-left transition-transform duration-500"></div>
            </div>
          </div>
          
          {/* Right side - Description */}
          <div className="text-left">
            <p className="text-base md:text-lg lg:text-xl text-foreground dark:text-foreground/90 leading-relaxed font-light transition-colors duration-300">
              {t('home.presentation.description')}
            </p>
          </div>
        </div>

        {/* Decorative element - Subtle pattern or accent */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 transition-colors duration-300"></div>
      </div>
    </section>
  );
}
