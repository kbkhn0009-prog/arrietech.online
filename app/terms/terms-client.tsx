'use client'

import { LegalPageShell } from '@/components/legal/legal-page-shell'
import { termsContent } from '@/lib/legal-content'
import { useI18n } from '@/lib/i18n'

export function TermsPageClient() {
  const { locale } = useI18n()
  return <LegalPageShell content={termsContent[locale]} />
}
