'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { I18nProvider } from '@/lib/i18n';

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <I18nProvider>
          {children}
      </I18nProvider>
    </NextThemesProvider>
  );
}
