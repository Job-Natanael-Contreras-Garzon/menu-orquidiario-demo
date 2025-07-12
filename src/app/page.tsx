'use client';

import { HeroSection } from '@/components/HeroSection';
import { CarouselSection } from '@/components/SideCarousel';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <CarouselSection />
    </div>
  );
}
