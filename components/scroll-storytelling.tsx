'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function ScrollStorytelling() {
  const { locale } = useI18n()
  const chapters = locale === 'ru'
    ? [
        {
          title: 'Старт работы с меню',
          text: 'Команда получает прозрачную картину: какие категории растут, какие позиции тянут вниз маржу, где есть потенциал для роста.',
        },
        {
          title: 'Аналитика спроса',
          text: 'ARRIE показывает, как меняется выбор гостей и какие изменения в структуре меню дают заметный сдвиг в продажах.',
        },
        {
          title: 'Решения по прибыльности',
          text: 'Вы видите, какие позиции стоит усиливать, какие корректировать по цене и где меню нужно переработать.',
        },
        {
          title: 'Управляемый рост выручки',
          text: 'Menu engineering превращается из ручной рутины в системный процесс с понятным финансовым результатом.',
        },
      ]
    : [
        {
          title: 'Menu strategy baseline',
          text: 'Teams get a clear baseline: which categories grow, which items dilute margin, and where growth potential is hidden.',
        },
        {
          title: 'Demand analytics',
          text: 'ARRIE shows how guest choice shifts and which menu structure updates produce measurable sales impact.',
        },
        {
          title: 'Profitability decisions',
          text: 'You see which items to amplify, where pricing needs adjustment, and which sections require redesign.',
        },
        {
          title: 'Controlled revenue growth',
          text: 'Menu engineering moves from manual routine to a repeatable process with clear financial outcomes.',
        },
      ]

  return (
    <section className="relative py-40 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-40">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.title as string}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">0{index + 1}</div>
              <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">{chapter.title as string}</h2>
            </div>
            <div>
              <p className="text-xl text-white/60 leading-relaxed">{chapter.text as string}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}