'use client'

import { motion } from 'framer-motion'

export function PulseLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-[1px] bg-white/10 overflow-hidden rounded-full ${className}`}>
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="h-full w-1/2 bg-white/40"
      />
    </div>
  )
}
