'use client'

import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-10 px-6 border-t border-white/[0.06] bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm arrie-text-faint">{t('footer.copyright') as string}</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm arrie-text-faint">
          <a href="/insights" className="hover:text-white/60 transition-colors">
            {t('footer.insights') as string}
          </a>
          <a href="/privacy" className="hover:text-white/60 transition-colors">
            {t('footer.privacy') as string}
          </a>
          <a href="/terms" className="hover:text-white/60 transition-colors">
            {t('footer.terms') as string}
          </a>
          <a href="mailto:arrietech.ru@gmail.com" className="hover:text-white/60 transition-colors">
            {t('footer.contact') as string}
          </a>
        </div>
      </div>
    </footer>
  )
}
