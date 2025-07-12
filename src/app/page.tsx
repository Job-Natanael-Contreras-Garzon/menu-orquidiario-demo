'use client';

import { HeroSection } from '@/components/HeroSection';
import { MainContentSection } from '@/components/MainContentSection';
import { CarouselSection } from '@/components/SideCarousel';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <MainContentSection />
      <CarouselSection />
    </div>
  );
}
