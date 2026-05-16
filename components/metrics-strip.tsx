'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function MetricsStrip() {
  const { locale } = useI18n()
  const metrics = locale === 'ru'
    ? [
        { label: 'Видимость выручки', value: '24/7' },
        { label: 'Категории под контролем', value: 'Единый экран' },
        { label: 'Решения по меню', value: 'На данных' },
        { label: 'Поведение гостей', value: 'В динамике' },
      ]
    : [
        { label: 'Revenue visibility', value: '24/7' },
        { label: 'Category control', value: 'One interface' },
        { label: 'Menu decisions', value: 'Data-based' },
        { label: 'Guest behavior', value: 'Dynamic view' },
      ]

  return (
    <section className="py-20 border-t border-b border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4">{metric.label}</div>
            <div className="text-4xl font-light">{metric.value}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}