'use client'

import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center rounded-md border">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale('es')}
        className="px-3 py-1 h-8 rounded-r-none border-r"
        data-active={locale === 'es'}
      >
        ES
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale('en')}
        className="px-3 py-1 h-8 rounded-l-none"
        data-active={locale === 'en'}
      >
        EN
      </Button>
    </div>
  )
}
