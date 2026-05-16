'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function RevenuePulse() {
  const { t, locale } = useI18n()
  const signals = locale === 'ru'
    ? [
        'Рост доли прибыльных позиций в заказах',
        'Усиление спроса в ключевых категориях',
        'Понятный вклад меню в общий результат',
      ]
    : [
        'Higher share of profitable items in orders',
        'Stronger demand in priority categories',
        'Clear menu contribution to total revenue',
      ]

  return (
    <section className="py-40 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">{locale === 'ru' ? 'Контроль выручки' : 'Revenue visibility'}</div>
          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            {locale === 'ru'
              ? 'Стабильная выручка начинается с точных решений по меню.'
              : 'Stable revenue starts with better menu decisions.'}
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            {locale === 'ru'
              ? 'ARRIE показывает, как изменения в составе, подаче и ценообразовании меню влияют на спрос и прибыльность.'
              : 'ARRIE shows how menu composition, visual structure, and pricing changes affect demand and profitability.'}
          </p>
        </div>
        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.03] p-10 overflow-hidden min-h-[500px]">
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"
          />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="text-white/40 uppercase tracking-[0.2em] text-sm mb-4">{t('hero.pulse') as string}</div>
              <div className="text-7xl font-light">{locale === 'ru' ? 'Онлайн' : 'Live'}</div>
            </div>
            <div className="space-y-4">
              {signals.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white/70">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}