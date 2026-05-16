'use client'

import { useI18n } from '@/lib/i18n'

export default function FuturePage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-40">
      <div className="max-w-5xl mx-auto text-center">
        <div className="uppercase tracking-[0.3em] text-white/40 text-sm mb-8">
          {locale === 'ru' ? 'Подход ARRIE' : 'ARRIE approach'}
        </div>
        <h1 className="text-5xl md:text-8xl font-light leading-tight mb-12">
          {locale === 'ru'
            ? 'Будущее ресторанного рынка - это точные решения по меню на основе данных.'
            : 'The future of restaurant growth is data-driven menu decision making.'}
        </h1>
        <p className="text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto">
          {locale === 'ru'
            ? 'ARRIE помогает быстрее понимать menu dynamics, видеть прибыльность позиций и управлять спросом через структуру меню.'
            : 'ARRIE helps teams understand menu dynamics, see item profitability, and shape demand through menu structure.'}
        </p>
      </div>
    </main>
  )
}
