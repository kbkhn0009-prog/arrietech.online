import { NextResponse } from 'next/server'
import { isArrieEventName, type ArrieEventPayload } from '@/lib/analytics/events'
import { persistEvent, persistToSupabase } from '@/lib/analytics/event-store'

export async function POST(request: Request) {
  let body: ArrieEventPayload
  try {
    body = (await request.json()) as ArrieEventPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (!body?.event || !isArrieEventName(body.event)) {
    return NextResponse.json({ ok: false, error: 'invalid_event' }, { status: 400 })
  }

  const record = {
    event: body.event,
    locale: typeof body.locale === 'string' ? body.locale.slice(0, 8) : undefined,
    path: typeof body.path === 'string' ? body.path.slice(0, 256) : undefined,
    referrer: typeof body.referrer === 'string' ? body.referrer.slice(0, 512) : undefined,
    meta:
      body.meta && typeof body.meta === 'object'
        ? Object.fromEntries(
            Object.entries(body.meta)
              .slice(0, 8)
              .map(([k, v]) => [k.slice(0, 32), String(v).slice(0, 128)])
          )
        : undefined,
    ts: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim(),
    userAgent: request.headers.get('user-agent')?.slice(0, 256),
  }

  await persistEvent(record)
  await persistToSupabase(record)

  return NextResponse.json({ ok: true })
}
