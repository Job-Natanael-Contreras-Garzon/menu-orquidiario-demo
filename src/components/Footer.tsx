'use client';

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 md:px-8 md:py-0 bg-background/50 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t('footer.copyright').replace('{year}', year.toString())}
        </p>
      </div>
    </footer>
  );
}
