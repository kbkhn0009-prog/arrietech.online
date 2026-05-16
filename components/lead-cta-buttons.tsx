'use client'

import { useI18n } from '@/lib/i18n'
import { useLeadCapture } from './lead-capture-provider'
import { CinematicButton } from './ui/cinematic-button'

export function LeadCTAButtons({ tone = 'default' }: { tone?: 'default' | 'enterprise' }) {
  const { t } = useI18n()
  const { openLeadModal } = useLeadCapture()

  const primaryVariant = tone === 'enterprise' ? 'enterprise-primary' : 'primary'
  const outlineVariant = tone === 'enterprise' ? 'enterprise-outline' : 'outline'

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      <CinematicButton variant={primaryVariant} onClick={() => openLeadModal('access')}>
        {t('final.ctaEarly') as string}
      </CinematicButton>
      <CinematicButton variant={outlineVariant} onClick={() => openLeadModal('implementation')}>
        {t('final.ctaEnterprise') as string}
      </CinematicButton>
    </div>
  )
}
