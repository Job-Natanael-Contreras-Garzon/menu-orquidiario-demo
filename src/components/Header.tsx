import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { MenuSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
          <Link href="/menu">
            <MenuSquare className="mr-2 h-4 w-4" />
            Menú
          </Link>
        </Button>
      </div>
    </header>
  );
}
