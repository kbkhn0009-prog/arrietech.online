'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function ExecutiveBanner() {
  const { locale } = useI18n()
  return (
    <section className="py-24 px-6 border-t border-b border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-5">
            {locale === 'ru' ? 'Для владельцев и управляющих' : 'For owners and managers'}
          </div>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            {locale === 'ru'
              ? 'ARRIE помогает принимать решения по меню и выручке на основе фактов.'
              : 'ARRIE helps teams make menu and revenue decisions based on facts.'}
          </h2>
        </motion.div>
        <button className="px-10 py-5 rounded-full bg-white text-black text-lg font-medium whitespace-nowrap hover:scale-[1.02] transition-all duration-300">
          {locale === 'ru' ? 'Запросить демонстрацию' : 'Request demo'}
        </button>
      </div>
    </section>
  )
}