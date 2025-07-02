'use client'

import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  const inactiveClass = "text-white hover:bg-white/10 hover:text-white"
  const activeClass = "bg-white/20 text-white"

  return (
    <div className="flex items-center rounded-md border border-white/20">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale('es')}
        className={`px-3 py-1 h-8 rounded-r-none border-r border-white/20 ${locale === 'es' ? activeClass : inactiveClass}`}
      >
        ES
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale('en')}
        className={`px-3 py-1 h-8 rounded-l-none ${locale === 'en' ? activeClass : inactiveClass}`}
      >
        EN
      </Button>
    </div>
  )
}
