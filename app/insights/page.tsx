import type { Metadata } from 'next'
import { InsightsIndexView } from '@/components/insights/insights-index-view'

export const metadata: Metadata = {
  title: 'Insights — операционная аналитика для ресторанов',
  description:
    'Стратегические материалы ARRIE о меню, выручке, поведении гостей и операционном интеллекте для современных ресторанов.',
  openGraph: {
    title: 'ARRIE Insights',
    description:
      'Журнал операционной аналитики: меню, маржа, гости и решения в реальном операционном дне.',
  },
}

export default function InsightsPage() {
  return <InsightsIndexView />
}
