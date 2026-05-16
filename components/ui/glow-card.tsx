'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function GlowCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.006 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`arrie-panel rounded-[32px] p-8 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  )
}
