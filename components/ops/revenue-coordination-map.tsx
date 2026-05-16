'use client'

import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

type NodeId =
  | 'menu'
  | 'categories'
  | 'guest'
  | 'guestChoice'
  | 'demand'
  | 'avgCheck'
  | 'margin'
  | 'profitable'
  | 'service'
  | 'delivery'
  | 'revenue'

type NodeDef = {
  id: NodeId
  labelKey: string
  metricKey?: string
  hub?: boolean
}

const PRIMARY_FLOW: NodeDef[] = [
  { id: 'menu', labelKey: 'network.node.menu' },
  { id: 'categories', labelKey: 'network.node.categories', metricKey: 'categories' },
  { id: 'guest', labelKey: 'network.node.guest', hub: true },
  { id: 'guestChoice', labelKey: 'network.node.guestChoice', metricKey: 'guestChoice' },
  { id: 'avgCheck', labelKey: 'network.node.avgCheck', metricKey: 'avgCheck' },
  { id: 'margin', labelKey: 'network.node.margin', metricKey: 'margin' },
  { id: 'revenue', labelKey: 'network.node.revenue', metricKey: 'revenue' },
]

const SECONDARY_SIGNALS: NodeDef[] = [
  { id: 'demand', labelKey: 'network.node.demand', metricKey: 'demand' },
  { id: 'delivery', labelKey: 'network.node.delivery', metricKey: 'delivery' },
  { id: 'service', labelKey: 'network.node.service', metricKey: 'service' },
  { id: 'profitable', labelKey: 'network.node.profitable', metricKey: 'profitable' },
]

const HOVER_IMPACT: Partial<Record<NodeId, NodeId[]>> = {
  categories: ['demand', 'guestChoice', 'avgCheck', 'margin'],
  guest: ['guestChoice', 'avgCheck', 'service'],
  guestChoice: ['demand', 'avgCheck', 'profitable'],
  demand: ['categories', 'guestChoice'],
  margin: ['revenue', 'profitable', 'delivery'],
  avgCheck: ['service', 'profitable', 'margin'],
}

function MapBackdrop() {
  return (
    <motion.div
      className="absolute inset-0 opacity-[0.22] pointer-events-none rounded-[inherit]"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    />
  )
}

function FlowCard({
  node,
  lit,
  onEnter,
  onLeave,
  compact,
}: {
  node: NodeDef
  lit: boolean
  onEnter: () => void
  onLeave: () => void
  compact?: boolean
}) {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      role="button"
      tabIndex={0}
      className={`w-full rounded-xl border backdrop-blur-xl text-left transition-colors ${
        compact ? 'px-3 py-2.5' : 'px-4 py-3 sm:py-3.5'
      }`}
      style={{
        borderColor: lit ? 'rgba(244,210,140,0.38)' : 'rgba(255,255,255,0.1)',
        background: lit
          ? 'linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(244,210,140,0.06) 100%)'
          : 'linear-gradient(165deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        boxShadow: lit ? '0 0 20px rgba(244,210,140,0.08)' : undefined,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      animate={reduceMotion || !lit || compact ? undefined : { scale: [1, 1.008, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className={`arrie-heading font-light leading-tight ${
          node.hub ? 'text-sm sm:text-base' : compact ? 'text-[0.7rem]' : 'text-xs sm:text-sm'
        }`}
      >
        {t(node.labelKey) as string}
      </div>
      {node.metricKey && (
        <div className={compact ? 'mt-1' : 'mt-1.5'}>
          <div
            className={`tabular-nums ${compact ? 'text-[0.6rem]' : 'text-[0.65rem] sm:text-xs'}`}
            style={{ color: 'var(--arrie-amber-glow)' }}
          >
            {t(`network.metric.${node.metricKey}.value`) as string}
          </div>
          <div className={`arrie-text-faint leading-snug ${compact ? 'text-[0.55rem] mt-0.5' : 'text-[0.6rem] mt-0.5'}`}>
            {t(`network.metric.${node.metricKey}.delta`) as string}
          </div>
        </div>
      )}
    </motion.div>
  )
}

function FlowConnector() {
  return (
    <div className="flex justify-center py-1 sm:py-1.5" aria-hidden>
      <div className="w-px h-5 sm:h-6 bg-gradient-to-b from-white/10 via-[rgba(244,210,140,0.45)] to-white/10" />
    </div>
  )
}

function InsightPanel() {
  const { t } = useI18n()

  return (
    <motion.div
      className="rounded-xl border p-4 sm:p-5 w-full"
      style={{
        borderColor: 'rgba(244,210,140,0.25)',
        background: 'linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(11,11,12,0.75) 100%)',
      }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="arrie-eyebrow text-[0.6rem] mb-2">{t('network.insight.title') as string}</div>
      <p className="text-xs arrie-text-muted leading-relaxed mb-2">{t('network.insight.body') as string}</p>
      <p className="text-xs arrie-heading font-light leading-relaxed mb-2">
        {t('network.insight.recommendation') as string}
      </p>
      <p className="text-[0.7rem] sm:text-xs" style={{ color: 'var(--arrie-amber-glow)' }}>
        {t('network.insight.forecast') as string}
      </p>
    </motion.div>
  )
}

export function RevenueCoordinationMap() {
  const { t } = useI18n()
  const [hovered, setHovered] = useState<NodeId | null>(null)

  const impactSet = useMemo(() => {
    if (!hovered) return new Set<NodeId>()
    return new Set([hovered, ...(HOVER_IMPACT[hovered] ?? [])])
  }, [hovered])

  const isLit = (id: NodeId) => !hovered || hovered === id || impactSet.has(id)

  return (
    <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] gap-5 lg:gap-8 items-start">
      <div className="relative rounded-2xl border border-white/[0.08] p-4 sm:p-5 lg:p-6 overflow-hidden">
        <MapBackdrop />
        <div className="relative z-10">
          <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.18em] mb-4">
            {t('network.flow.primary') as string}
          </div>
          <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none">
            {PRIMARY_FLOW.map((node, i) => (
              <div key={node.id}>
                <FlowCard
                  node={node}
                  lit={isLit(node.id)}
                  onEnter={() => setHovered(node.id)}
                  onLeave={() => setHovered(null)}
                />
                {i < PRIMARY_FLOW.length - 1 && <FlowConnector />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="rounded-2xl border border-white/[0.08] p-4 sm:p-5">
          <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.18em] mb-3">
            {t('network.flow.signals') as string}
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {SECONDARY_SIGNALS.map((node) => (
              <FlowCard
                key={node.id}
                node={node}
                lit={isLit(node.id)}
                compact
                onEnter={() => setHovered(node.id)}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </div>
        <InsightPanel />
      </div>
    </div>
  )
}
