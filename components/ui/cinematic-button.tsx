'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type CinematicButtonVariant = 'primary' | 'outline' | 'enterprise-primary' | 'enterprise-outline'

export function CinematicButton({
  children,
  variant = 'primary',
  onClick,
}: {
  children: ReactNode
  variant?: CinematicButtonVariant
  onClick?: () => void
}) {
  const baseClasses =
    variant.startsWith('enterprise')
      ? 'px-6 sm:px-7 py-2.5 sm:py-3 rounded-md text-sm font-normal tracking-wide transition-all duration-500'
      : 'px-8 py-4 rounded-full text-lg font-medium transition-all duration-300'
  const variants: Record<CinematicButtonVariant, string> = {
    primary: 'bg-white text-black hover:scale-[1.03]',
    outline: 'border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]',
    'enterprise-primary':
      'border border-white/[0.14] bg-white/[0.05] text-white/85 hover:bg-white/[0.09] hover:border-white/20',
    'enterprise-outline':
      'border border-white/[0.08] bg-transparent text-white/55 hover:text-white/75 hover:border-white/[0.14] hover:bg-white/[0.03]',
  }

  const isEnterprise = variant.startsWith('enterprise')

  return (
    <motion.button
      whileHover={isEnterprise ? undefined : { scale: 1.03 }}
      whileTap={isEnterprise ? undefined : { scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  )
}
