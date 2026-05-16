'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function CommandCenter() {
  const { t, locale } = useI18n()

  return (
    <section id="command" className="py-28 border-b border-white/10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="arrie-eyebrow text-sm mb-6">{t('cmd.eyebrow') as string}</div>
          <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-6">
            {t('cmd.headline') as string}
          </h2>
          <p className="text-xl arrie-text-muted leading-relaxed max-w-4xl">
            {t('cmd.body') as string}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { label: t('metric.ops'), value: '24/7' },
            { label: t('metric.coord'), value: locale === 'ru' ? 'Все категории' : 'All categories' },
            { label: t('metric.incidents'), value: locale === 'ru' ? 'Онлайн' : 'Live' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label as string}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl p-6 arrie-panel glow-luminous"
            >
              <div className="arrie-text-faint text-sm mb-4">{metric.label as string}</div>
              <div className="text-6xl font-light arrie-heading">{metric.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
