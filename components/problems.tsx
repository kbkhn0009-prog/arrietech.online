'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function Problems() {
  const { t } = useI18n()
  const before = t('market.before.items')
  const after = t('market.after.items')
  const beforeItems = Array.isArray(before) ? before : []
  const afterItems = Array.isArray(after) ? after : []

  return (
    <section className="py-28 border-b border-white/10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="arrie-eyebrow text-sm mb-4">{t('industry.eyebrow') as string}</div>
          <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight">
            {t('industry.headline') as string}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            className="rounded-[28px] border border-white/10 p-8 sm:p-10"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="arrie-text-faint text-xs uppercase tracking-[0.2em] mb-6">
              {t('market.before.title') as string}
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm arrie-text-muted leading-relaxed">
                  <span className="text-white/25 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-[28px] arrie-panel glow-luminous p-8 sm:p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="arrie-eyebrow text-[0.65rem] mb-6">{t('market.after.title') as string}</div>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm arrie-heading font-light leading-relaxed">
                  <span className="shrink-0" style={{ color: 'var(--arrie-amber-glow)' }}>
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
