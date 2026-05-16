'use client'

import { motion } from 'framer-motion'

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-55">
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-16 w-[380px] h-[380px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(244, 210, 140, 0.14) 0%, transparent 72%)' }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 45, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 right-8 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(94, 107, 136, 0.08) 0%, transparent 72%)' }}
      />
    </div>
  )
}
