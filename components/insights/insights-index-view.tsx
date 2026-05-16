'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InsightsAmbient } from '@/components/insights/insights-ambient'
import { InsightCard } from '@/components/insights/insight-card'
import {
  getAllArticles,
  getFeaturedArticle,
  INSIGHT_CATEGORIES,
  categoryLabel,
} from '@/lib/insights'
import type { InsightCategoryId } from '@/lib/insights/types'
import { useI18n } from '@/lib/i18n'

export function InsightsIndexView() {
  const { locale, t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<InsightCategoryId | 'all'>('all')

  const featured = getFeaturedArticle()
  const allArticles = getAllArticles()
  const gridArticles = useMemo(() => {
    const withoutFeatured = featured
      ? allArticles.filter((a) => a.slug !== featured.slug)
      : allArticles
    if (activeCategory === 'all') return withoutFeatured
    return withoutFeatured.filter((a) => a.category === activeCategory)
  }, [allArticles, featured, activeCategory])

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-arrie-bg text-arrie-text overflow-x-hidden pt-16 sm:pt-[4.25rem]">
        <InsightsAmbient />

        <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex text-xs arrie-text-faint hover:text-white/70 transition-colors mb-10 tracking-wide"
            >
              ← {t('insights.backHome') as string}
            </Link>

            <motion.header
              className="mb-12 sm:mb-16 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="arrie-eyebrow text-sm mb-4">{t('insights.eyebrow') as string}</div>
              <h1 className="arrie-heading text-3xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-5">
                {t('insights.headline') as string}
              </h1>
              <p className="text-base sm:text-lg arrie-text-muted leading-relaxed">
                {t('insights.subheadline') as string}
              </p>
            </motion.header>

            {featured && (
              <section className="mb-14 sm:mb-20" aria-labelledby="featured-insight">
                <h2 id="featured-insight" className="sr-only">
                  {t('insights.featured') as string}
                </h2>
                <InsightCard article={featured} featured />
              </section>
            )}

            <div className="mb-8 sm:mb-10 flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label={t('insights.categories') as string}>
              <CategoryChip
                active={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                label={t('insights.allCategories') as string}
              />
              {INSIGHT_CATEGORIES.map((id) => (
                <CategoryChip
                  key={id}
                  active={activeCategory === id}
                  onClick={() => setActiveCategory(id)}
                  label={categoryLabel(id, locale)}
                />
              ))}
            </div>

            <section aria-labelledby="insights-grid-heading">
              <h2 id="insights-grid-heading" className="sr-only">
                {t('insights.gridTitle') as string}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {gridArticles.map((article, i) => (
                  <InsightCard key={article.slug} article={article} index={i} />
                ))}
              </div>
              {gridArticles.length === 0 && (
                <p className="text-sm arrie-text-faint py-12 text-center">{t('insights.empty') as string}</p>
              )}
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

function CategoryChip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`text-xs sm:text-[0.8rem] px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 ${
        active
          ? 'border-[var(--arrie-amber-glow)]/40 text-white/90 bg-white/[0.06]'
          : 'border-white/10 arrie-text-faint hover:border-white/20 hover:text-white/70'
      }`}
    >
      {label}
    </button>
  )
}
