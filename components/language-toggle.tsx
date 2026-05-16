'use client'

import { trackEvent } from '@/lib/analytics/track-client'
import { useI18n } from '@/lib/i18n'

function RussiaFlag() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 rounded-sm overflow-hidden" aria-hidden="true">
      <rect width="24" height="8" y="0" fill="#ffffff" />
      <rect width="24" height="8" y="8" fill="#1f4db7" />
      <rect width="24" height="8" y="16" fill="#d52b1e" />
    </svg>
  )
}

function UkFlag() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 rounded-sm overflow-hidden" aria-hidden="true">
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="7" />
      <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="4" />
    </svg>
  )
}

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  const switchLocale = (next: 'ru' | 'en') => {
    if (next === locale) return
    setLocale(next)
    trackEvent('language_switch', { locale: next, meta: { from: locale, to: next } })
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur-md">
      <button
        onClick={() => switchLocale('ru')}
        aria-label="Русский язык"
        className={`h-8 w-8 rounded-full text-sm flex items-center justify-center transition-all duration-300 ${
          locale === 'ru'
            ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        <RussiaFlag />
      </button>
      <button
        onClick={() => switchLocale('en')}
        aria-label="English language"
        className={`h-8 w-8 rounded-full text-sm flex items-center justify-center transition-all duration-300 ${
          locale === 'en'
            ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        <UkFlag />
      </button>
    </div>
  )
}
