'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { categoryLabel, formatInsightDate, getArticleContent } from '@/lib/insights'
import type { InsightArticle } from '@/lib/insights/types'
import { useI18n } from '@/lib/i18n'

type Props = {
  article: InsightArticle
  index?: number
  featured?: boolean
}

export function InsightCard({ article, index = 0, featured = false }: Props) {
  const { locale, t } = useI18n()
  const content = getArticleContent(article, locale)

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group"
      >
        <Link
          href={`/insights/${article.slug}`}
          className="block rounded-2xl sm:rounded-3xl arrie-panel glow-luminous p-6 sm:p-10 border border-white/[0.08] transition-all duration-500 hover:border-[var(--arrie-amber-glow)]/25 hover:shadow-[0_0_60px_rgba(244,210,140,0.08)]"
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="arrie-eyebrow text-xs text-[var(--arrie-amber-glow)]">
              {t('insights.featured') as string}
            </span>
            <span className="text-xs arrie-text-faint px-2.5 py-1 rounded-full border border-white/10">
              {categoryLabel(article.category, locale)}
            </span>
            <span className="text-xs arrie-text-faint">
              {article.readingMinutes} {t('insights.minRead') as string}
            </span>
          </div>
          <h2 className="arrie-heading text-2xl sm:text-4xl font-light leading-tight mb-4 group-hover:text-white transition-colors">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg arrie-text-muted leading-relaxed max-w-3xl mb-6">
            {content.excerpt}
          </p>
          <div className="flex items-center justify-between gap-4">
            <time className="text-sm arrie-text-faint" dateTime={article.publishedAt}>
              {formatInsightDate(article.publishedAt, locale)}
            </time>
            <span className="text-sm text-[var(--arrie-amber-glow)] group-hover:translate-x-1 transition-transform">
              {t('insights.read') as string} →
            </span>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link
        href={`/insights/${article.slug}`}
        className="flex flex-col h-full rounded-2xl arrie-panel p-5 sm:p-6 border border-white/[0.06] transition-all duration-400 hover:border-white/[0.14] hover:bg-white/[0.03]"
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[0.65rem] uppercase tracking-wider arrie-text-faint px-2 py-0.5 rounded border border-white/10">
            {categoryLabel(article.category, locale)}
          </span>
          <span className="text-xs arrie-text-faint">
            {article.readingMinutes} {t('insights.minRead') as string}
          </span>
        </div>
        <h3 className="arrie-heading text-lg sm:text-xl font-light leading-snug mb-3 group-hover:text-white/95 transition-colors flex-1">
          {content.title}
        </h3>
        <p className="text-sm arrie-text-muted leading-relaxed line-clamp-3 mb-4">{content.excerpt}</p>
        <time className="text-xs arrie-text-faint mt-auto" dateTime={article.publishedAt}>
          {formatInsightDate(article.publishedAt, locale)}
        </time>
      </Link>
    </motion.article>
  )
}
