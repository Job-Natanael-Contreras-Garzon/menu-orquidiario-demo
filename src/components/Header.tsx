'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { Menu, MenuSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useI18n } from '@/lib/i18n';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export function Header() {
  const { t } = useI18n();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 md:gap-4">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/menu">
                    <MenuSquare className="mr-2 h-4 w-4" />
                    {t('header.menu')}
                </Link>
            </Button>
            <div className="[&>div]:border-white/20 [&_button]:text-white [&_button[data-active=true]]:bg-white/20 [&_button:not([data-active=true])]:hover:bg-white/10">
              <LanguageToggle />
            </div>
            <ThemeToggle className="text-white hover:bg-white/10 hover:text-white" />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
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
                    <Link href="/menu">
                        <MenuSquare className="mr-2 h-5 w-5" />
                        {t('header.menu')}
                    </Link>
                </Button>
              </nav>
              <div className="mt-auto flex items-center justify-between">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
