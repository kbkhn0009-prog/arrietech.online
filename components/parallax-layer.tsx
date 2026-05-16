'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxLayer({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 2000], [0, -200])

  return <motion.div style={{ y }}>{children}</motion.div>
}
