'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'

type PremiumModalProps = {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
}

export function PremiumModal({ open, onClose, title, subtitle, children }: PremiumModalProps) {
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[400] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.08)] overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div
              className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: 'rgba(214, 161, 74, 0.08)' }}
            />

            <div className="relative p-6 md:p-8 border-b border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/15 bg-black/30 text-white/70 transition-all hover:text-white hover:bg-white/10"
                aria-label="Close modal"
              >
                ×
              </button>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white pr-12">{title}</h3>
              {subtitle ? <p className="mt-3 text-white/60 leading-relaxed">{subtitle}</p> : null}
            </div>

            <div className="relative p-6 md:p-8">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
