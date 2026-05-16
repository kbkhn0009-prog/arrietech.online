'use client'

import { motion } from 'framer-motion'

export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
