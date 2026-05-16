'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function DashboardMockup() {
  const { locale } = useI18n()

  return (
    <section className="py-28 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
          {locale === 'ru' ? 'ARRIE Interface' : 'ARRIE Interface'}
        </div>
        <h3 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mb-12">
          {locale === 'ru'
            ? 'Наглядный рабочий интерфейс для решений по меню и выручке.'
            : 'A visual working interface for menu and revenue decisions.'}
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="rounded-[36px] border border-white/10 bg-white/[0.03] p-6 md:p-8 overflow-hidden"
        >
          <div className="grid grid-cols-12 gap-4 min-h-[420px]">
            <div className="col-span-3 bg-white/5 rounded-2xl p-4">
              <div className="text-zinc-400 text-sm mb-4">
                {locale === 'ru' ? 'Сигналы выручки' : 'Revenue signals'}
              </div>
              <div className="space-y-3">
                <div className="h-20 bg-white/5 rounded-xl" />
                <div className="h-20 bg-white/5 rounded-xl" />
                <div className="h-20 bg-white/5 rounded-xl" />
              </div>
            </div>

            <div className="col-span-6 bg-white/5 rounded-2xl p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="h-full flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-[60%] h-[60%] rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-[40%] h-[40%] rounded-full bg-white/10 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-white/5 rounded-2xl p-4">
              <div className="space-y-4">
                <div className="h-32 rounded-2xl bg-white/5" />
                <div className="h-48 rounded-2xl bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
