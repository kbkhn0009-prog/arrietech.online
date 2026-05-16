import type { Metadata } from 'next'
import { PrivacyPageClient } from './privacy-client'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика обработки персональных данных ARRIE в соответствии с 152-ФЗ.',
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
