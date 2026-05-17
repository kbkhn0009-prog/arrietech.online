import type { ArrieEventPayload } from './events'

export type StoredEvent = ArrieEventPayload & {
  ts: string
  ip?: string
  userAgent?: string
}

export async function persistEvent(record: StoredEvent) {
  if (process.env.NODE_ENV === 'development') {
    try {
      const { appendFile, mkdir } = await import('fs/promises')
      const { join, dirname } = await import('path')
      const devLog = join(process.cwd(), 'data', 'analytics-events.jsonl')
      await mkdir(dirname(devLog), { recursive: true })
      await appendFile(devLog, `${JSON.stringify(record)}\n`, 'utf8')
    } catch {
      /* non-fatal; fs unavailable on Edge */
    }
  }

  console.info('[arrie-event]', JSON.stringify(record))
}

export async function persistToSupabase(record: StoredEvent) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
  if (!url || !key) return

  try {
    await fetch(`${url.replace(/\/$/, '')}/rest/v1/arrie_events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        event: record.event,
        locale: record.locale,
        path: record.path,
        referrer: record.referrer,
        meta: record.meta ?? {},
        created_at: record.ts,
        user_agent: record.userAgent,
      }),
    })
  } catch {
    /* optional sink */
  }
}
