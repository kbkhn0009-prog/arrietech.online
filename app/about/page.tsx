'use client'

import { useI18n } from '@/lib/i18n'

export default function AboutPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
            {locale === 'ru' ? 'О продукте ARRIE' : 'About ARRIE'}
          </div>
          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-10">
            {locale === 'ru'
              ? 'ARRIE помогает ресторанным сетям управлять выручкой через menu intelligence.'
              : 'ARRIE helps restaurant chains manage revenue through menu intelligence.'}
          </h1>
        </div>
        <div className="space-y-10 text-white/60 text-lg leading-relaxed">
          <p>
            {locale === 'ru'
              ? 'Мы создаем платформу, где видно влияние меню на спрос, выбор гостей и прибыльность позиций.'
              : 'We build a platform that makes menu impact on demand, guest choice, and item profitability clear.'}
          </p>
          <p>
            {locale === 'ru'
              ? 'ARRIE Interface объединяет ключевую аналитику в одном экране, чтобы решения по меню принимались быстрее.'
              : 'ARRIE Interface brings core analytics into one screen so menu decisions can be made faster.'}
          </p>
          <p>
            {locale === 'ru'
              ? 'Наша цель — помочь ресторанам системно управлять выручкой через menu engineering на данных.'
              : 'Our goal is to help restaurants manage revenue systematically with data-driven menu engineering.'}
          </p>
        </div>
      </div>
    </main>
  )
}