'use client'

import { useI18n } from '@/lib/i18n'

export default function NotFound() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">404</div>
        <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8">{locale === 'ru' ? 'Страница не найдена.' : 'Page not found.'}</h1>
        <p className="text-xl text-white/60 leading-relaxed mb-10">
          {locale === 'ru' ? 'Такой страницы нет или она была перемещена.' : 'This page does not exist or has been moved.'}
        </p>
        <a href="/" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black">
          {locale === 'ru' ? 'На главную ARRIE' : 'Back to ARRIE'}
        </a>
      </div>
    </main>
  )
}