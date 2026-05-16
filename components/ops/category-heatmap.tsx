'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  DEMAND_PRESSURE_GRID,
  MENU_DISH_IMAGES,
  menuDishImagePath,
} from '@/lib/menu-dish-images'

export function CategoryHeatmap({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  const cells = DEMAND_PRESSURE_GRID.flatMap((row, ri) =>
    row.map((intensity, ci) => {
      const index = ri * row.length + ci
      return {
        key: `${ri}-${ci}`,
        intensity,
        image: MENU_DISH_IMAGES[index % MENU_DISH_IMAGES.length],
      }
    })
  )

  return (
    <motion.div
      className={`grid grid-cols-6 gap-1.5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {cells.map(({ key, intensity, image }) => (
        <motion.div
          key={key}
          className="relative aspect-square overflow-hidden rounded-md border border-white/[0.08]"
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.88 + intensity * 0.08, 1, 0.88 + intensity * 0.08] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 4 + intensity * 3, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <Image
            src={menuDishImagePath(image)}
            alt=""
            fill
            sizes="(max-width: 768px) 14vw, 72px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                180deg,
                rgba(11, 11, 12, ${0.35 - intensity * 0.15}) 0%,
                rgba(11, 11, 12, ${0.55 - intensity * 0.2}) 100%
              )`,
            }}
          />
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              background: `rgba(244, 210, 140, ${0.04 + intensity * 0.28})`,
              boxShadow:
                intensity > 0.7
                  ? `inset 0 0 0 1px rgba(244, 210, 140, ${0.25 + intensity * 0.2})`
                  : undefined,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
