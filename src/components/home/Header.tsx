import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Menu, MenuSquare, Home, Sun, Moon } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const { t, locale, setLocale } = useI18n();
  const { setTheme, theme } = useTheme();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const closeSheet = () => setIsSheetOpen(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Background fill animation */}
      <div 
        className={`absolute inset-0 bg-navbar-bg backdrop-blur-md shadow-lg transition-all duration-700 ease-out ${
          scrolled ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      />
      <div className="relative container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-center text-white relative">
          
          {/* Logo Centrado */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-lg md:text-2xl lg:text-3xl font-bold tracking-tight">
              El orquideario
            </span>
          </Link>

          {/* Desktop Nav - Derecha */}
          <div className="hidden md:flex items-center gap-2 md:gap-4 absolute right-0">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                {t('header.home')}
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/menu">
                <MenuSquare className="mr-2 h-4 w-4" />
                {t('header.menu')}
              </Link>
            </Button>
            <div className="[&>div]:border-white/20 [&_button]:text-white [&_button[data-active=true]]:bg-white/20 [&_button:not([data-active=true])]:hover:bg-white/10">
              <div className="flex items-center rounded-md border border-white/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLocale('es')}
                  className="px-3 py-1 h-8 rounded-r-none border-r border-white/20 text-white hover:bg-white/10"
                  data-active={locale === 'es'}
                >
                  ES
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLocale('en')}
                  className="px-3 py-1 h-8 rounded-l-none text-white hover:bg-white/10"
                  data-active={locale === 'en'}
                >
                  EN
                </Button>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden absolute right-0">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-4">
                <SheetHeader className="text-left mb-4">
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <span className="font-headline text-2xl font-bold tracking-tight">
                        El orquideario
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="grid gap-2">
                  <Button variant="ghost" asChild className="justify-start text-base" onClick={closeSheet}>
                    <Link href="/">
                      <Home className="mr-2 h-5 w-5" />
                      {t('header.home')}
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="justify-start text-base" onClick={closeSheet}>
                    <Link href="/menu">
                      <MenuSquare className="mr-2 h-5 w-5" />
                      {t('header.menu')}
                    </Link>
                  </Button>
                </nav>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-md border">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLocale('es')}
                      className="px-3 py-1 h-8 rounded-r-none border-r"
                      data-active={locale === 'es'}
                    >
                      ES
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLocale('en')}
                      className="px-3 py-1 h-8 rounded-l-none"
                      data-active={locale === 'en'}
                    >
                      EN
                    </Button>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
