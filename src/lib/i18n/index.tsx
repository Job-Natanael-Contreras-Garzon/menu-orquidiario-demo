'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import en from './locales/en.json';
import es from './locales/es.json';

const translations = { en, es };

type Locale = keyof typeof translations;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Helper to access nested properties using a dot-separated string
const getTranslation = (data: any, key: string): string | undefined => {
    const keys = key.split('.');
    let result = data;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return undefined;
      }
    }
    return result;
}


export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale);
    }
    setIsMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
  };

  const t = useCallback((key: string): string => {
    let translated = getTranslation(translations[locale], key);
    
    if (translated === undefined) {
        // Fallback to English if key not found in current locale
        translated = getTranslation(translations.en, key);
    }

    if (translated === undefined) {
        console.warn(`Translation key not found in locale '${locale}' or fallback 'en': ${key}`);
        return key;
    }

    return translated;
  }, [locale]);

  // Render children only after the initial locale has been determined
  if (!isMounted) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
