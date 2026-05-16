import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { InsightsArticleView } from '@/components/insights/insights-article-view'
import { getAllSlugs, getArticleBySlug, getArticleContent } from '@/lib/insights'
import { PRIMARY_SITE_URL } from '@/lib/site-config'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Insights' }

  const ru = getArticleContent(article, 'ru')
  const en = getArticleContent(article, 'en')

  return {
    title: ru.title,
    description: ru.excerpt,
    openGraph: {
      title: ru.title,
      description: ru.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      url: `${PRIMARY_SITE_URL}/insights/${article.slug}`,
    },
    alternates: {
      canonical: `${PRIMARY_SITE_URL}/insights/${article.slug}`,
    },
    other: {
      'article:en:title': en.title,
      'article:en:description': en.excerpt,
    },
  }
}

export default function InsightArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()
  return <InsightsArticleView article={article} />
}
