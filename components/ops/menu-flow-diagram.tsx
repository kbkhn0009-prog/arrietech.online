'use client'

import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const NODES = [
  { id: 'category', labelKey: 'menu.flow.category', hintKey: 'menu.flow.category.hint', metricKey: 'menu.flow.category.metric' },
  { id: 'demand', labelKey: 'menu.flow.demand', hintKey: 'menu.flow.demand.hint', metricKey: 'menu.flow.demand.metric' },
  { id: 'choice', labelKey: 'menu.flow.choice', hintKey: 'menu.flow.choice.hint', metricKey: 'menu.flow.choice.metric' },
  { id: 'check', labelKey: 'menu.flow.check', hintKey: 'menu.flow.check.hint', metricKey: 'menu.flow.check.metric' },
  { id: 'margin', labelKey: 'menu.flow.margin', hintKey: 'menu.flow.margin.hint', metricKey: 'menu.flow.margin.metric' },
  { id: 'revenue', labelKey: 'menu.flow.revenue', hintKey: 'menu.flow.revenue.hint', metricKey: 'menu.flow.revenue.metric' },
] as const

/** Desktop horizontal connector paths (viewBox 0 0 1000 120). */
const DESKTOP_PATHS = [
  'M 95 60 C 140 40, 160 40, 205 60',
  'M 295 60 C 340 80, 360 80, 405 60',
  'M 495 60 C 540 40, 560 40, 605 60',
  'M 695 60 C 740 80, 760 80, 805 60',
  'M 895 60 C 940 40, 960 40, 1005 60',
]

function FlowBackdrop() {
  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden preserveAspectRatio="none">
        <defs>
          <linearGradient id="topoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(244,210,140,0)" />
            <stop offset="50%" stopColor="rgba(244,210,140,0.25)" />
            <stop offset="100%" stopColor="rgba(244,210,140,0)" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 Q200,20 400,60 T800,50 T1200,70"
          fill="none"
          stroke="url(#topoGrad)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,120 Q300,160 600,100 T1200,90"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[45%] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(244,210,140,0.08) 0%, transparent 70%)' }}
      />
    </>
  )
}

function SignalPath({
  d,
  active,
  delay,
  reduceMotion,
  strokeId,
}: {
  d: string
  active: boolean
  delay: number
  reduceMotion: boolean | null
  strokeId: string
}) {
  return (
    <g>
      <path d={d} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <motion.path
        d={d}
        fill="none"
        stroke={`url(#${strokeId})`}
        strokeWidth={active ? 2 : 1.2}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0.3 }}
        whileInView={{ pathLength: 1, opacity: active ? 0.9 : 0.45 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay * 0.1 }}
        style={{ pathLength: reduceMotion ? 1 : undefined }}
      />
      {!reduceMotion && (
        <motion.circle
          r="2.5"
          fill="rgba(244,210,140,0.9)"
          style={{ filter: 'blur(0.5px)' }}
          animate={{ opacity: active ? [0.4, 1, 0.4] : [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.2 + delay * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <animateMotion dur={`${3.5 + delay * 0.4}s`} repeatCount="indefinite" path={d} />
        </motion.circle>
      )}
    </g>
  )
}

function FlowNode({
  node,
  index,
  isActive,
  isAdjacent,
  onHover,
  onLeave,
  layout,
}: {
  node: (typeof NODES)[number]
  index: number
  isActive: boolean
  isAdjacent: boolean
  onHover: () => void
  onLeave: () => void
  layout: 'horizontal' | 'vertical'
}) {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const lit = isActive || isAdjacent

  const slotClass =
    layout === 'horizontal'
      ? 'flex-1 min-w-0 max-w-[9.5rem] mx-auto h-[4.875rem] flex items-center justify-center px-0.5'
      : 'w-full max-w-sm mx-auto min-h-[4.625rem] flex items-stretch'

  return (
    <motion.div
      className={`relative z-10 ${slotClass}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      initial={{ opacity: 0, y: layout === 'vertical' ? 16 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
    >
      <motion.div
        className="relative w-full rounded-xl border backdrop-blur-xl overflow-hidden cursor-default will-change-transform"
        style={{
          borderColor: lit ? 'rgba(244, 210, 140, 0.35)' : 'rgba(255, 255, 255, 0.1)',
          background: lit
            ? 'linear-gradient(165deg, rgba(255,255,255,0.14) 0%, rgba(255,248,240,0.08) 50%, rgba(255,255,255,0.05) 100%)'
            : 'linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
          boxShadow: lit
            ? '0 0 32px rgba(244, 210, 140, 0.12), inset 0 1px 0 rgba(255,255,255,0.15)'
            : 'inset 0 1px 0 rgba(255,255,255,0.08)',
          transformOrigin: 'center center',
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
      >
        {!reduceMotion && (
          <motion.div
            className="absolute -inset-px rounded-xl pointer-events-none"
            style={{ border: '1px solid rgba(244, 210, 140, 0.2)' }}
            animate={{ opacity: lit ? [0.2, 0.5, 0.2] : [0, 0.15, 0] }}
            transition={{ duration: 2.5 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <motion.div
          className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full"
          style={{ background: 'var(--arrie-amber-glow)' }}
          animate={reduceMotion ? undefined : { scale: lit ? [1, 1.35, 1] : [1, 1.1, 1], opacity: lit ? [0.6, 1, 0.6] : [0.25, 0.45, 0.25] }}
          transition={{ duration: 2 + index * 0.15, repeat: Infinity }}
        />
        <div className="px-2.5 py-2 sm:px-3 sm:py-2 min-h-[3.625rem] flex flex-col">
          <div className="flex items-start justify-between gap-1 mb-0.5">
            <span className="arrie-heading text-[0.7rem] sm:text-xs font-light leading-tight">
              {t(node.labelKey) as string}
            </span>
            <span
              className="shrink-0 text-[0.5rem] tabular-nums tracking-wide rounded px-1 py-px"
              style={{
                color: 'var(--arrie-amber-glow)',
                background: 'rgba(244, 210, 140, 0.08)',
                border: '1px solid rgba(244, 210, 140, 0.15)',
              }}
            >
              {t(node.metricKey) as string}
            </span>
          </div>
          <p className="text-[0.55rem] sm:text-[0.6rem] leading-tight arrie-text-faint flex-1 line-clamp-2">
            {t(node.hintKey) as string}
          </p>
          <div className="mt-1 h-px w-full shrink-0 overflow-hidden" aria-hidden>
            <motion.div
              className="h-full w-full origin-left"
              style={{ background: 'linear-gradient(90deg, rgba(244,210,140,0.5), transparent)' }}
              animate={{ scaleX: lit && !reduceMotion ? 1 : 0, opacity: lit ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
      {index === NODES.length - 1 && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full opacity-60"
          style={{ background: 'var(--arrie-amber-glow)' }}
          animate={reduceMotion ? undefined : { opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}

function DesktopFlow({ activeId, setActiveId }: { activeId: string | null; setActiveId: (id: string | null) => void }) {
  const reduceMotion = useReducedMotion()
  const gradId = useId().replace(/:/g, '')
  const activeIndex = activeId ? NODES.findIndex((n) => n.id === activeId) : -1

  return (
    <div className="relative hidden lg:block h-[170px] px-2 overflow-hidden">
      <FlowBackdrop />
      <svg
        className="absolute left-0 right-0 top-[42%] -translate-y-1/2 w-full h-[70px] pointer-events-none z-0"
        viewBox="0 0 1100 120"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="50%" stopColor="rgba(244,210,140,0.55)" />
            <stop offset="100%" stopColor="rgba(244,210,140,0.25)" />
          </linearGradient>
        </defs>
        {DESKTOP_PATHS.map((d, i) => (
          <SignalPath
            key={d}
            d={d}
            delay={i}
            strokeId={gradId}
            active={activeIndex === -1 || activeIndex === i || activeIndex === i + 1}
            reduceMotion={reduceMotion}
          />
        ))}
      </svg>
      <div className="relative z-10 flex justify-between items-start gap-1 pt-5 pb-3 max-w-[1100px] mx-auto">
        {NODES.map((node, i) => (
          <FlowNode
            key={node.id}
            node={node}
            index={i}
            layout="horizontal"
            isActive={activeId === node.id}
            isAdjacent={activeIndex !== -1 && Math.abs(activeIndex - i) <= 1}
            onHover={() => setActiveId(node.id)}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </div>
  )
}

function MobileFlow({ activeId, setActiveId }: { activeId: string | null; setActiveId: (id: string | null) => void }) {
  const reduceMotion = useReducedMotion()
  const activeIndex = activeId ? NODES.findIndex((n) => n.id === activeId) : -1

  return (
    <div className="relative lg:hidden py-4">
      <FlowBackdrop />
      <svg className="absolute left-6 top-8 bottom-8 w-8 opacity-40" aria-hidden>
        {NODES.slice(0, -1).map((_, i) => {
          const y1 = 24 + i * 54
          const y2 = 24 + (i + 1) * 54
          const d = `M 16 ${y1} C 4 ${(y1 + y2) / 2}, 28 ${(y1 + y2) / 2}, 16 ${y2}`
          const active = activeIndex === -1 || activeIndex === i || activeIndex === i + 1
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(244,210,140,0.45)"
                strokeWidth={active ? 1.5 : 1}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              />
              {!reduceMotion && (
                <circle r="2" fill="rgba(244,210,140,0.85)">
                  <animateMotion dur={`${3 + i * 0.35}s`} repeatCount="indefinite" path={d} />
                </circle>
              )}
            </g>
          )
        })}
      </svg>
      <div className="relative z-10 flex flex-col gap-3 pl-14 pr-2">
        {NODES.map((node, i) => (
          <FlowNode
            key={node.id}
            node={node}
            index={i}
            layout="vertical"
            isActive={activeId === node.id}
            isAdjacent={activeIndex !== -1 && Math.abs(activeIndex - i) <= 1}
            onHover={() => setActiveId(node.id)}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </div>
  )
}

export function MenuFlowDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <motion.div
      className="relative rounded-[36px] border border-white/10 overflow-hidden glow-luminous isolate"
      style={{
        background:
          'linear-gradient(168deg, rgba(255,255,255,0.06) 0%, rgba(14,14,16,0.95) 40%, rgba(11,11,12,0.98) 100%)',
        minHeight: '170px',
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <DesktopFlow activeId={activeId} setActiveId={setActiveId} />
      <MobileFlow activeId={activeId} setActiveId={setActiveId} />
    </motion.div>
  )
}
