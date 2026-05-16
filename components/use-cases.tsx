'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function UseCases() {
  const { locale } = useI18n()
  const content = locale === 'ru'
    ? {
        eyebrow: 'Сценарии',
        title: 'Типовые задачи, где menu intelligence сразу дает практическую пользу.',
        items: [
          'Какие позиции лучше продвигать для роста маржи',
          'Как перестроить визуальную структуру меню под спрос',
          'Какие блюда дают оборот, но съедают прибыль',
          'Как меняется выбор гостей после изменения цены',
          'Где теряется выручка из-за структуры категорий',
          'Как принимать решения по меню на цифрах, а не на ощущениях',
        ],
      }
    : {
        eyebrow: 'Use cases',
        title: 'Core tasks where menu intelligence creates immediate value.',
        items: [
          'Which items to promote for stronger margin',
          'How to redesign menu hierarchy around demand',
          'Which dishes drive volume but erode profitability',
          'How price changes affect guest choice',
          'Where revenue is lost due to category structure',
          'How to make menu decisions from data, not intuition',
        ],
      }

  return (
    <section id="use-cases" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">{content.eyebrow}</div>
          <h3 className="text-5xl md:text-6xl font-light leading-tight mb-8">{content.title}</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {content.items.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-10 min-h-[220px] flex items-end"
            >
              <div className="text-3xl font-light leading-snug">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}