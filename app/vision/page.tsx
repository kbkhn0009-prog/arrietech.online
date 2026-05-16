'use client'

import { useI18n } from '@/lib/i18n'

export default function VisionPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-40">
      <div className="max-w-5xl mx-auto">
        <div className="text-sm uppercase tracking-[0.35em] text-white/40 mb-8">{locale === 'ru' ? 'Подход ARRIE' : 'ARRIE approach'}</div>
        <h1 className="text-6xl md:text-8xl font-light leading-tight mb-12">
          {locale === 'ru'
            ? 'Будущее ресторанного роста - в умной работе с меню и спросом.'
            : 'The future of restaurant growth is smarter menu and demand strategy.'}
        </h1>
        <div className="space-y-10 text-white/60 text-xl leading-relaxed">
          <p>{locale === 'ru' ? 'Рестораны переходят от интуитивных решений к аналитике menu intelligence.' : 'Restaurants are moving from intuition to menu intelligence analytics.'}</p>
          <p>{locale === 'ru' ? 'ARRIE связывает выбор гостей, структуру меню и финансовый результат в единой системе.' : 'ARRIE connects guest choice, menu structure, and financial outcomes in one system.'}</p>
          <p>{locale === 'ru' ? 'Это помогает быстрее принимать решения, которые реально влияют на выручку и маржу.' : 'This helps teams make faster decisions that directly improve revenue and margin.'}</p>
          <p>{locale === 'ru' ? 'Новая норма рынка - behavioral restaurant intelligence как часть ежедневного управления.' : 'The new standard is behavioral restaurant intelligence as part of daily management.'}</p>
        </div>
      </div>
    </main>
  )
}