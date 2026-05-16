'use client'

import { useI18n } from '@/lib/i18n'

export default function EnterprisePage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-40">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-light leading-tight mb-10">
          {locale === 'ru' ? 'ARRIE для ресторанных сетей' : 'ARRIE for restaurant chains'}
        </h1>
        <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
          {locale === 'ru'
            ? 'Для команд, которым важны системные решения по меню, спросу и прибыльности в нескольких локациях.'
            : 'For teams that need consistent menu, demand, and profitability decisions across multiple locations.'}
        </p>
      </div>
    </main>
  )
}
