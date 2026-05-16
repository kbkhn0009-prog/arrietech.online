'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function IndustrySection() {
  const { locale } = useI18n()
  const content = locale === 'ru'
    ? {
        eyebrow: 'Реальность рынка',
        title: 'Чаще всего рестораны теряют выручку не из-за трафика, а из-за слабого управления меню.',
        text: 'Когда нет понятной аналитики по спросу и прибыльности позиций, решения по меню принимаются на ощущениях.',
        items: [
          'Неясно, какие позиции реально формируют прибыль',
          'Спрос по категориям меняется, но это поздно замечают',
          'Визуальная структура меню не управляется системно',
          'Команда тратит время на ручные таблицы',
        ],
      }
    : {
        eyebrow: 'Market reality',
        title: 'Restaurants often lose revenue not from traffic, but from weak menu decisions.',
        text: 'Without clear visibility into demand and item profitability, menu updates are driven by intuition.',
        items: [
          'Unclear which items truly drive profit',
          'Category demand shifts are noticed too late',
          'Menu visual hierarchy is not managed systematically',
          'Teams spend too much time in spreadsheets',
        ],
      }

  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">{content.eyebrow}</div>
          <h3 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            {content.title}
          </h3>
          <p className="text-xl text-white/60 leading-relaxed">
            {content.text}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="text-2xl font-light leading-snug">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}