'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function LiveSignals() {
  const { locale } = useI18n()
  const signals = locale === 'ru'
    ? [
        'Рост интереса к прибыльным позициям',
        'Спрос перераспределился в нужные категории',
        'Снижение доли низкомаржинальных блюд',
        'Выбор гостей сместился к целевым позициям',
        'Изменение структуры меню дало прирост выручки',
        'Решения по меню подтверждены аналитикой',
      ]
    : [
        'Higher demand for profitable items',
        'Demand shifted to priority categories',
        'Lower share of low-margin dishes',
        'Guest choice moved to target items',
        'Menu structure update improved revenue',
        'Menu decisions validated by analytics',
      ]

  return (
    <div className="space-y-4">
      {signals.map((signal, index) => (
        <motion.div
          key={signal}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 flex items-center justify-between"
        >
          <div className="text-white/70">{signal}</div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-white"
          />
        </motion.div>
      ))}
    </div>
  )
}