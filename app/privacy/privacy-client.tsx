'use client'

import { LegalPageShell } from '@/components/legal/legal-page-shell'
import { privacyContent } from '@/lib/legal-content'
import { useI18n } from '@/lib/i18n'

export function PrivacyPageClient() {
  const { locale } = useI18n()
  return <LegalPageShell content={privacyContent[locale]} />
}
