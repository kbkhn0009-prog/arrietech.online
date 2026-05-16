'use client'

import { useI18n } from '@/lib/i18n'

export default function TechnologyPage() {
  const { locale } = useI18n()

  const cards = locale === 'ru'
    ? ['Адаптация меню в реальном времени', 'Аналитика поведения гостей', 'Видимость влияния меню на выручку']
    : ['Real-time menu adaptation', 'Guest behavior analytics', 'Menu-to-revenue visibility']

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light leading-tight mb-16">
          {locale === 'ru' ? 'Технологическая среда ARRIE' : 'ARRIE technology landscape'}
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 min-h-[220px] flex items-end">
              <div className="text-3xl font-light leading-tight">{card}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
