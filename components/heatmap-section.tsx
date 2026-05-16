'use client'

import { useI18n } from '@/lib/i18n'

export function HeatmapSection() {
  const { locale } = useI18n()

  return (
    <section className="py-32 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-light leading-tight max-w-5xl">
          {locale === 'ru'
            ? 'Поведение гостей становится видимым.'
            : 'Guest behavior becomes visible.'}
        </h2>

        <div className="mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] relative overflow-hidden min-h-[560px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,120,80,0.35),transparent_20%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_25%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(255,80,80,0.25),transparent_20%)]" />

          <div className="relative z-10 p-10 max-w-3xl text-3xl md:text-4xl leading-tight">
            {locale === 'ru'
              ? 'ARRIE помогает понять, какие элементы меню действительно влияют на выбор гостя.'
              : 'ARRIE helps identify which menu elements truly influence guest choice.'}
          </div>
        </div>
      </div>
    </section>
  )
}
