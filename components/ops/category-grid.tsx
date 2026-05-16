'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n, type Locale } from '@/lib/i18n'
import {
  HIGH_DEMAND_THRESHOLD,
  MENU_CATEGORIES,
  type MenuCategory,
  isHighDemandCategory,
  menuCategoryImagePath,
} from '@/lib/menu-categories'

function categoryName(cat: MenuCategory, locale: Locale) {
  return locale === 'ru' ? cat.nameRu : cat.nameEn
}

function CategoryTile({
  category,
  locale,
  mode,
}: {
  category: MenuCategory
  locale: Locale
  mode: 'breakdown' | 'demand'
}) {
  const reduceMotion = useReducedMotion()
  const highDemand = isHighDemandCategory(category.demand)
  const showHighlight = mode === 'demand' && highDemand
  const { t } = useI18n()

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border ${
        showHighlight
          ? 'border-[rgba(244,210,140,0.45)] shadow-[0_0_24px_rgba(244,210,140,0.12)]'
          : 'border-white/[0.08]'
      }`}
      animate={
        reduceMotion || !showHighlight
          ? undefined
          : {
              boxShadow: [
                '0 0 20px rgba(244, 210, 140, 0.08)',
                '0 0 32px rgba(244, 210, 140, 0.22)',
                '0 0 20px rgba(244, 210, 140, 0.08)',
              ],
            }
      }
      transition={reduceMotion ? undefined : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div className="relative aspect-[4/3] sm:aspect-[5/4]">
        <Image
          src={menuCategoryImagePath(category.image)}
          alt={categoryName(category, locale)}
          fill
          sizes="(max-width: 640px) 45vw, 200px"
          className={`object-cover transition-opacity duration-500 ${
            mode === 'demand' && !highDemand ? 'opacity-55' : 'opacity-90'
          }`}
        />
        <div
          className="absolute inset-0"
          style={{
            background: showHighlight
              ? 'linear-gradient(180deg, rgba(11,11,12,0.05) 0%, rgba(11,11,12,0.72) 100%)'
              : 'linear-gradient(180deg, rgba(11,11,12,0.15) 0%, rgba(11,11,12,0.78) 100%)',
          }}
        />
        {showHighlight && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(244, 210, 140, 0.12)' }}
            animate={reduceMotion ? undefined : { opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        {mode === 'demand' && showHighlight && (
          <div
            className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.14em] font-medium"
            style={{
              color: 'var(--arrie-amber-glow)',
              background: 'rgba(244, 210, 140, 0.15)',
              border: '1px solid rgba(244, 210, 140, 0.35)',
            }}
          >
            {t('heatmap.demandHigh') as string}
          </div>
        )}
        {mode === 'demand' && (
          <motion.div
            className="absolute left-0 right-0 bottom-0 h-1 origin-left"
            style={{ background: 'rgba(244, 210, 140, 0.85)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: category.demand }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </motion.div>
      <div className="px-2.5 py-2 sm:px-3 sm:py-2.5 bg-black/40 backdrop-blur-sm">
        <div
          className={`text-[0.7rem] sm:text-xs leading-tight font-light ${
            showHighlight ? 'arrie-heading' : 'arrie-text-muted'
          }`}
        >
          {categoryName(category, locale)}
        </div>
        {mode === 'demand' && (
          <div className="mt-1 flex items-center justify-between gap-2">
            <span className="text-[0.6rem] arrie-text-faint tabular-nums">
              {Math.round(category.demand * 100)}%
            </span>
            {!highDemand && category.demand >= HIGH_DEMAND_THRESHOLD - 0.2 && (
              <span className="text-[0.55rem] arrie-text-faint">{t('heatmap.demandModerate') as string}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function CategoryBreakdown({ className = '' }: { className?: string }) {
  const { locale } = useI18n()

  return (
    <motion.div
      className={`grid grid-cols-2 sm:grid-cols-3 gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {MENU_CATEGORIES.map((cat) => (
        <CategoryTile key={cat.id} category={cat} locale={locale} mode="breakdown" />
      ))}
    </motion.div>
  )
}

export function CategoryDemandMap({ className = '' }: { className?: string }) {
  const { locale } = useI18n()

  return (
    <motion.div
      className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {MENU_CATEGORIES.map((cat, i) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          <CategoryTile category={cat} locale={locale} mode="demand" />
        </motion.div>
      ))}
    </motion.div>
  )
}
