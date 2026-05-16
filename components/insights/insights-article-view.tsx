'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InsightsAmbient } from '@/components/insights/insights-ambient'
import { ReadingProgress } from '@/components/insights/reading-progress'
import { ArticleBody } from '@/components/insights/article-body'
import { InsightCard } from '@/components/insights/insight-card'
import {
  categoryLabel,
  formatInsightDate,
  getArticleContent,
  getRelatedArticles,
} from '@/lib/insights'
import type { InsightArticle } from '@/lib/insights/types'
import { useI18n } from '@/lib/i18n'

export function InsightsArticleView({ article }: { article: InsightArticle }) {
  const { locale, t } = useI18n()
  const content = getArticleContent(article, locale)
  const related = getRelatedArticles(article.slug, 2)

  return (
    <>
      <Navbar />
      <ReadingProgress />
      <main className="relative min-h-screen bg-arrie-bg text-arrie-text overflow-x-hidden pt-16 sm:pt-[4.25rem]">
        <InsightsAmbient />

        <article className="relative z-10 px-4 sm:px-6 py-10 sm:py-16">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/insights"
              className="inline-flex text-xs arrie-text-faint hover:text-white/70 transition-colors mb-10 tracking-wide"
            >
              {'\u2190 '}
              {t('insights.backToIndex') as string}
            </Link>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-14"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs arrie-text-faint px-2.5 py-1 rounded-full border border-white/10">
                  {categoryLabel(article.category, locale)}
                </span>
                <span className="text-xs arrie-text-faint">
                  {article.readingMinutes} {t('insights.minRead') as string}
                </span>
                <time className="text-xs arrie-text-faint" dateTime={article.publishedAt}>
                  {formatInsightDate(article.publishedAt, locale)}
                </time>
              </div>
              <h1 className="arrie-heading text-3xl sm:text-4xl md:text-[2.75rem] font-light leading-[1.15] mb-5">
                {content.title}
              </h1>
              <p className="text-lg sm:text-xl arrie-text-muted leading-relaxed border-l-2 border-[var(--arrie-amber-glow)]/40 pl-5">
                {content.excerpt}
              </p>
            </motion.header>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <ArticleBody blocks={content.body} />
            </motion.div>
          </div>

          {related.length > 0 ? (
            <section className="max-w-6xl mx-auto mt-16 sm:mt-24 pt-12 border-t border-white/[0.06]">
              <h2 className="arrie-heading text-xl sm:text-2xl font-light mb-8 text-center sm:text-left">
                {t('insights.continueReading') as string}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
                {related.map((a, i) => (
                  <InsightCard key={a.slug} article={a} index={i} />
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <Footer />
      </main>
    </>
  )
}
