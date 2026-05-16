'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { LegalPageContent } from '@/lib/legal-content'

function LegalSectionCard({ section, index }: { section: LegalPageContent['sections'][0]; index: number }) {
  return (
    <motion.section
      className="rounded-2xl arrie-panel glow-luminous p-5 sm:p-7"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
    >
      <h2 className="arrie-heading text-lg sm:text-xl font-light mb-4">{section.title}</h2>
      <div className="space-y-3">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-[0.95rem] arrie-text-muted leading-relaxed">
            {p.startsWith('Email:') ? (
              <>
                Email:{' '}
                <a href="mailto:arrietech.ru@gmail.com" className="text-[var(--arrie-amber-glow)] hover:underline">
                  arrietech.ru@gmail.com
                </a>
              </>
            ) : (
              p
            )}
          </p>
        ))}
        {section.bullets && (
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[0.95rem] arrie-text-muted leading-relaxed">
            {section.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  )
}

export function LegalPageShell({ content }: { content: LegalPageContent }) {
  const { locale, t } = useI18n()

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-arrie-bg text-arrie-text overflow-x-hidden pt-16 sm:pt-[4.25rem]">
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 55% 45% at 50% 0%, rgba(244, 210, 140, 0.09), transparent 55%),
              radial-gradient(ellipse 40% 30% at 80% 60%, rgba(214, 161, 74, 0.06), transparent 50%),
              linear-gradient(180deg, #0b0b0c 0%, #0e0e10 50%, #0b0b0c 100%)
            `,
          }}
        />

        <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex text-xs arrie-text-faint hover:text-white/70 transition-colors mb-8 tracking-wide"
            >
              ← {locale === 'ru' ? 'На главную' : 'Back to home'}
            </Link>

            <motion.header
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="arrie-eyebrow text-sm mb-4">ARRIE</div>
              <h1 className="arrie-heading text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
                {content.title}
              </h1>
              <p className="text-sm arrie-text-faint mb-4">
                {locale === 'ru' ? 'Обновлено:' : 'Updated:'} {content.updated}
              </p>
              <p className="text-base sm:text-lg arrie-text-muted leading-relaxed">{content.intro}</p>
            </motion.header>

            <div className="space-y-4 sm:space-y-5">
              {content.sections.map((section, i) => (
                <LegalSectionCard key={section.title} section={section} index={i} />
              ))}
            </div>

            <motion.div
              className="mt-10 rounded-xl border border-white/[0.1] p-4 sm:p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.04)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm arrie-text-muted">
                {t('legal.contact') as string}{' '}
                <a href="mailto:arrietech.ru@gmail.com" className="text-[var(--arrie-amber-glow)] hover:underline">
                  arrietech.ru@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
