export const ARRIE_EVENTS = [
  'request_access_click',
  'discuss_integration_click',
  'early_access_submit',
  'demo_request_submit',
  'language_switch',
] as const

export type ArrieEventName = (typeof ARRIE_EVENTS)[number]

export type ArrieEventPayload = {
  event: ArrieEventName
  locale?: string
  path?: string
  referrer?: string
  meta?: Record<string, string>
}

export function isArrieEventName(value: string): value is ArrieEventName {
  return (ARRIE_EVENTS as readonly string[]).includes(value)
}
