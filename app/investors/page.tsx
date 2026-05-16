'use client'

import { useI18n } from '@/lib/i18n'

export default function InvestorsPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
            {locale === 'ru' ? 'Инвестиционный контекст' : 'Investor narrative'}
          </div>
          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-10">
            {locale === 'ru'
              ? 'ARRIE строит category language вокруг menu intelligence и restaurant revenue management.'
              : 'ARRIE is defining category language around menu intelligence and restaurant revenue management.'}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            {locale === 'ru'
              ? 'Фокус продукта - выручка через меню, guest behavior analytics и прозрачность прибыльности позиций.'
              : 'The product focus is menu-led revenue, guest behavior analytics, and item-level profitability visibility.'}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {(locale === 'ru'
            ? ['Menu intelligence platform', 'Behavioral restaurant intelligence', 'Revenue visibility by menu positions']
            : ['Menu intelligence platform', 'Behavioral restaurant intelligence', 'Revenue visibility by menu positions']).map((item) => (
            <div key={item} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 min-h-[280px] flex items-end">
              <div className="text-3xl font-light leading-tight">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}