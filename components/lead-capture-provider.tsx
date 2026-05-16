'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { trackEvent } from '@/lib/analytics/track-client'
import { useI18n } from '@/lib/i18n'
import { LeadRequestForm } from './lead-request-form'
import { PremiumModal } from './ui/premium-modal'

type RequestType = 'access' | 'implementation'

type LeadCaptureContextValue = {
  openLeadModal: (requestType: RequestType) => void
}

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null)

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext)
  if (!context) {
    throw new Error('useLeadCapture must be used inside LeadCaptureProvider')
  }
  return context
}

export function LeadCaptureProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useI18n()
  const [open, setOpen] = useState(false)
  const [requestType, setRequestType] = useState<RequestType>('access')

  const value = useMemo<LeadCaptureContextValue>(
    () => ({
      openLeadModal: (type) => {
        trackEvent(type === 'access' ? 'request_access_click' : 'discuss_integration_click', {
          locale,
          meta: { source: 'modal' },
        })
        setRequestType(type)
        setOpen(true)
      },
    }),
    [locale]
  )

  const content =
    locale === 'ru'
      ? requestType === 'access'
        ? {
            title: 'Запросить доступ',
            subtitle: 'Оставьте контактные данные, и команда ARRIE свяжется с вами по раннему подключению.',
          }
        : {
            title: 'Обсудить внедрение',
            subtitle: 'Оставьте заявку, чтобы обсудить внедрение ARRIE для вашей сети или ресторана.',
          }
      : requestType === 'access'
      ? {
          title: 'Request access',
          subtitle: 'Leave your details and ARRIE team will contact you about early onboarding.',
        }
      : {
          title: 'Discuss implementation',
          subtitle: 'Leave a request to discuss ARRIE implementation for your restaurant or chain.',
        }

  return (
    <LeadCaptureContext.Provider value={value}>
      {children}
      <PremiumModal open={open} onClose={() => setOpen(false)} title={content.title} subtitle={content.subtitle}>
        <LeadRequestForm requestType={requestType} />
      </PremiumModal>
    </LeadCaptureContext.Provider>
  )
}
