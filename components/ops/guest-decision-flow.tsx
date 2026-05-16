'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const STEP_KEYS = [
  'guest.flow.browse',
  'guest.flow.compare',
  'guest.flow.select',
  'guest.flow.add',
  'guest.flow.order',
] as const

export function GuestDecisionFlow() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {STEP_KEYS.map((key, i) => (
        <motion.div key={key} className="flex items-center gap-2 sm:gap-4">
          <motion.div
            className="rounded-xl arrie-panel-inner px-4 py-3 border border-white/10"
            animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          >
            <span className="text-sm arrie-heading font-light">{t(key) as string}</span>
          </motion.div>
          {i < STEP_KEYS.length - 1 && (
            <motion.div
              className="w-6 sm:w-10 h-px bg-gradient-to-r from-white/10 to-[rgba(244,210,140,0.4)]"
              animate={reduceMotion ? undefined : { scaleX: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
