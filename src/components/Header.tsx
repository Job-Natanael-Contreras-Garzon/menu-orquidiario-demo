'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Menu, MenuSquare, Home } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from './Logo';
import { useI18n } from '@/lib/i18n';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  // Determinar si estamos en la página home
  const isHomePage = pathname === '/';
  const isMenuPage = pathname === '/menu';

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-navbar-bg min-h-[60px]">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 min-h-[60px]">
        <div className="flex items-center justify-between text-white h-full">
          
          {/* Logo y botón de menú a la izquierda */}
          <div className="flex items-center gap-4 text-white">
            <Logo />
            {isHomePage && (
              <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white hidden md:flex">
                <Link href="/menu">
                  <MenuSquare className="mr-2 h-4 w-4" />
                  {t('header.menu')}
                </Link>
              </Button>
            )}
          </div>

          {/* Espacio central vacío */}
          <div className="flex-1"></div>

          {/* Desktop Nav - Derecha */}
          <div className="hidden md:flex items-center gap-2 md:gap-4">
            
            <div className="[&>div]:border-white/20 [&_button]:text-white [&_button[data-active=true]]:bg-white/20 [&_button:not([data-active=true])]:hover:bg-white/10">
              <LanguageToggle />
            </div>
            <ThemeToggle className="text-white hover:bg-white/10 hover:text-white" />
          </div>

          {/* Mobile Nav - Derecha */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Toggle Buttons - Visible on mobile */}
            <div className="[&>div]:border-white/20 [&_button]:text-white [&_button[data-active=true]]:bg-white/20 [&_button:not([data-active=true])]:hover:bg-white/10">
              <LanguageToggle />
            </div>
            
            {/* Menu Button */}
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
                    <Logo />
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
                <div className="mt-auto flex items-center justify-end">
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
