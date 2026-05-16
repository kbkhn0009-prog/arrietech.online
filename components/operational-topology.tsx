'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function OperationalTopology() {
  const { locale } = useI18n()
  const content = locale === 'ru'
    ? {
        eyebrow: 'Карта меню и выручки',
        title: 'ARRIE связывает категории меню, выбор гостей и прибыльность позиций в единую картину.',
        nodes: ['Категории меню', 'Позиции', 'Визуальная иерархия', 'Выбор гостей', 'Спрос', 'Маржа'],
      }
    : {
        eyebrow: 'Menu and revenue map',
        title: 'ARRIE connects menu categories, guest choices, and item profitability in one picture.',
        nodes: ['Menu categories', 'Items', 'Visual hierarchy', 'Guest choice', 'Demand', 'Margin'],
      }

  return (
    <section className="py-40 px-6 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-24">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">{content.eyebrow}</div>
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            {content.title}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {content.nodes.map((node) => (
            <div key={node} className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] text-white/70 text-lg backdrop-blur-sm">
              {node}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}