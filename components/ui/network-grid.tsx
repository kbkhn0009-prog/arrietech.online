'use client'

import { motion } from 'framer-motion'

export function NetworkGrid() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.065] z-0">
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(214, 161, 74, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94, 107, 136, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
