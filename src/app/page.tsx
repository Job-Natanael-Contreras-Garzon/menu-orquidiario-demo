import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Coffee, MenuSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://videos.pexels.com/video-files/8065365/8065365-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Header />

      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            el Orquídeario
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light tracking-widest uppercase text-gray-300">
            ESPACIO MEMORABLE
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://wa.me/59178012345" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Reservas por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/menu">
                <MenuSquare className="mr-2 h-5 w-5" />
                Ver Menú
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
