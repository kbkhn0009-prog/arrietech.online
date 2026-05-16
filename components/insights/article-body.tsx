'use client'

import type { InsightBlock } from '@/lib/insights/types'

export function ArticleBody({ blocks }: { blocks: InsightBlock[] }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-base sm:text-[1.05rem] arrie-text-muted leading-[1.75]">
                {block.text}
              </p>
            )
          case 'h2':
            return (
              <h2
                key={i}
                className="arrie-heading text-2xl sm:text-3xl font-light pt-4 sm:pt-6 text-white/95"
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="arrie-heading text-xl sm:text-2xl font-light pt-2 text-white/90">
                {block.text}
              </h3>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="relative rounded-2xl border border-white/[0.1] px-6 sm:px-8 py-6 sm:py-8 my-2"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(244,210,140,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                }}
              >
                <div
                  className="absolute left-4 top-5 text-3xl text-[var(--arrie-amber-glow)]/40 font-serif leading-none"
                  aria-hidden
                >
                  “
                </div>
                <p className="text-lg sm:text-xl arrie-heading font-light leading-relaxed text-white/90 pl-4">
                  {block.text}
                </p>
                {block.attribution && (
                  <footer className="mt-4 pl-4 text-sm arrie-text-faint">— {block.attribution}</footer>
                )}
              </blockquote>
            )
          case 'insight':
            return (
              <aside
                key={i}
                className="rounded-2xl arrie-panel glow-luminous p-5 sm:p-6 border border-[var(--arrie-amber-glow)]/20"
              >
                {block.title && (
                  <div className="arrie-eyebrow text-xs mb-3 text-[var(--arrie-amber-glow)]">{block.title}</div>
                )}
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">{block.text}</p>
              </aside>
            )
          case 'list':
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-base sm:text-[1.05rem] arrie-text-muted leading-relaxed"
                  >
                    <span
                      className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--arrie-amber-glow)' }}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
