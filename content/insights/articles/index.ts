import type { InsightArticle } from '@/lib/insights/types'
import menuStructureDrivesRevenue from './menu-structure-drives-revenue'
import guestChoiceBecomesVisible from './guest-choice-becomes-visible'
import operationalIntelligenceLayer from './operational-intelligence-layer'
import marginUnderPressure from './margin-under-pressure'
import hospitalityDecisionArchitecture from './hospitality-decision-architecture'

/** Register all published articles here (newest first for listing). */
export const INSIGHT_ARTICLES: InsightArticle[] = [
  menuStructureDrivesRevenue,
  guestChoiceBecomesVisible,
  operationalIntelligenceLayer,
  marginUnderPressure,
  hospitalityDecisionArchitecture,
]
