'use client'

import { useI18n } from '@/lib/i18n'

export default function PartnerPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-40">
      <div className="max-w-6xl mx-auto text-center">
        <div className="uppercase tracking-[0.3em] text-white/40 text-sm mb-6">
          {locale === 'ru' ? 'Партнерская программа' : 'Partnership program'}
        </div>
        <h1 className="text-5xl md:text-8xl font-light leading-tight mb-10">
          {locale === 'ru'
            ? 'ARRIE открыт к партнерам, которые развивают menu intelligence в ресторанном бизнесе.'
            : 'ARRIE partners with teams advancing menu intelligence in restaurant business.'}
        </h1>
        <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-20">
          {locale === 'ru'
            ? 'Мы работаем с интеграторами и экспертами, которые помогают сетям внедрять data-driven menu engineering.'
            : 'We work with integrators and advisors helping chains implement data-driven menu engineering.'}
        </p>
        <button className="px-10 py-5 rounded-full bg-white text-black text-lg font-medium">
          {locale === 'ru' ? 'Стать партнером' : 'Become a partner'}
        </button>
      </div>
    </main>
  )
}
