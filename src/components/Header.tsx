'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { MenuSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useI18n } from '@/lib/i18n';

export function Header() {
  const { t } = useI18n();
  
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/menu">
                    <MenuSquare className="mr-2 h-4 w-4" />
                    {t('header.menu')}
                </Link>
            </Button>
            <LanguageToggle />
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
