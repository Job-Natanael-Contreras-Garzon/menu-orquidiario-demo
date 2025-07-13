import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image 
        src="/images/logo/LogoOrqui4K.webp"
        alt="El Orquideario Logo"
        width={32}
        height={32}
        className="object-cover md:w-8 md:h-8 lg:w-10 lg:h-10 opacity-90"
      />
      <span className="font-headline text-lg md:text-2xl lg:text-3xl font-bold tracking-tight">
        El Orquideario
      </span>
    </Link>
  );
}
