'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

/** Second row of the fixed header (2xl+). Height must match hero offset calc. */
export const STATUS_BAR_HEIGHT = '2.5rem'

export function SystemStatusBar() {
  const { t } = useI18n()
  return (
    <div
      className="hidden 2xl:block border-t border-white/[0.06] w-full"
      style={{ background: 'rgba(14, 14, 16, 0.92)' }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em] text-white/40"
        style={{ height: STATUS_BAR_HEIGHT }}
      >
        <div className="flex items-center gap-6">
          <div>{t('status.signals') as string}</div>
          <div>{t('status.infra') as string}</div>
        </div>
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-white shrink-0"
          />
          <div>{t('status.live') as string}</div>
        </div>
      </div>
    </div>
  )
}
