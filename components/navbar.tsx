'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { scrollToTop } from '@/lib/scroll'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'
import { useLeadCapture } from './lead-capture-provider'
import { SystemStatusBar } from './system-status-bar'

const NAV_LINKS = [
  { href: '/#demand', labelKey: 'nav.demand' },
  { href: '/#menu', labelKey: 'nav.menu' },
  { href: '/#revenue', labelKey: 'nav.revenue' },
  { href: '/#guest', labelKey: 'nav.guest' },
  { href: '/#network', labelKey: 'nav.network' },
  { href: '/#enterprise', labelKey: 'nav.enterprise' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const { openLeadModal } = useLeadCapture()

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      setOpen(false)
      scrollToTop()
    },
    []
  )

  const handleNavClick = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[300] backdrop-blur-xl border-b border-white/[0.08] supports-[backdrop-filter]:bg-[rgba(11,11,12,0.88)]"
        style={{
          background: 'linear-gradient(180deg, rgba(14,14,15,0.96) 0%, rgba(11,11,12,0.92) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[4.25rem] flex items-center justify-between gap-4">
          <a
            href="/"
            onClick={handleLogoClick}
            className="arrie-eyebrow text-sm shrink-0 tracking-[0.2em] hover:text-white/90 transition-colors"
            aria-label="ARRIE — наверх"
          >
            ARRIE
          </a>

          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-white/55 text-[0.8rem]" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white/90 transition-colors whitespace-nowrap"
              >
                {t(link.labelKey) as string}
              </a>
            ))}
            <Link href="/insights" className="hover:text-white/90 transition-colors whitespace-nowrap">
              {t('nav.insights') as string}
            </Link>
          </nav>

          <nav
            className="hidden lg:flex xl:hidden items-center gap-4 text-white/55 text-[0.75rem]"
            aria-label="Main compact"
          >
            {NAV_LINKS.slice(0, 3).map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white/90 transition-colors whitespace-nowrap">
                {t(link.labelKey) as string}
              </a>
            ))}
            <Link href="/insights" className="hover:text-white/90 transition-colors whitespace-nowrap">
              {t('nav.insights') as string}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => openLeadModal('access')}
              className="px-4 sm:px-5 py-2 rounded-md border text-[0.8rem] font-normal tracking-wide text-white/85 transition-all duration-300 hover:bg-white/[0.08]"
              style={{
                borderColor: 'rgba(255,255,255,0.14)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              {t('nav.earlyAccess') as string}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center text-lg text-white/70"
            style={{ background: 'rgba(22, 21, 24, 0.75)' }}
            aria-label="Menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </div>
        <SystemStatusBar />
      </header>

      {open && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 z-[310] bg-black/50 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            className="md:hidden fixed top-16 left-3 right-3 z-[320] rounded-2xl border border-white/10 backdrop-blur-2xl p-5 space-y-1 max-h-[min(80vh,520px)] overflow-y-auto"
            style={{ background: 'rgba(14, 14, 16, 0.98)' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2.5 text-white/75 text-sm border-b border-white/[0.06] last:border-0"
                onClick={handleNavClick}
              >
                {t(link.labelKey) as string}
              </a>
            ))}
            <Link
              href="/insights"
              className="block py-2.5 text-white/75 text-sm border-b border-white/[0.06]"
              onClick={handleNavClick}
            >
              {t('nav.insights') as string}
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openLeadModal('access')
              }}
              className="w-full mt-4 rounded-md border px-5 py-3 text-sm text-white/85"
              style={{ borderColor: 'rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)' }}
            >
              {t('nav.earlyAccess') as string}
            </button>
            <div className="pt-4 border-t border-white/10 flex gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </>
      )}
    </>
  )
}
