'use client'

import { useI18n } from '@/lib/i18n'

export default function PlatformPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-10">
            {locale === 'ru' ? 'Платформа ARRIE' : 'ARRIE platform'}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            {locale === 'ru'
              ? 'ARRIE объединяет menu analytics, guest behavior insights и revenue visibility, чтобы решения по меню приносили измеримый финансовый результат.'
              : 'ARRIE combines menu analytics, guest behavior insights, and revenue visibility so menu decisions deliver measurable financial impact.'}
          </p>
        </div>
      </div>
    </main>
  )
}