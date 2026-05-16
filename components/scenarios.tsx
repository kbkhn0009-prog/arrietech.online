'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const CASE_KEYS = ['1', '2', '3', '4'] as const

export function Scenarios() {
  const { t } = useI18n()

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
          <div className="arrie-eyebrow text-sm mb-4">{t('cases.eyebrow') as string}</div>
          <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight">
            {t('cases.title') as string}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CASE_KEYS.map((n, index) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[28px] arrie-panel p-6 sm:p-8 flex flex-col gap-5"
            >
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] arrie-text-faint mb-2">
                  {t('cases.beforeLabel') as string}
                </div>
                <p className="text-sm arrie-text-muted leading-relaxed">{t(`cases.${n}.before`) as string}</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] arrie-eyebrow mb-2 !text-[0.65rem]">
                  {t('cases.afterLabel') as string}
                </div>
                <p className="text-sm arrie-heading font-light leading-relaxed">{t(`cases.${n}.after`) as string}</p>
              </div>
              <div className="mt-auto h-1 rounded-full overflow-hidden bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, rgba(244,210,140,0.3), rgba(214,161,74,0.6))' }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${55 + index * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
