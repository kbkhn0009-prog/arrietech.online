import type { Metadata } from 'next'
import { TermsPageClient } from './terms-client'

export const metadata: Metadata = {
  title: 'Условия использования',
  description: 'Условия использования сайта и платформы ARRIE.',
}

export default function TermsPage() {
  return <TermsPageClient />
}
