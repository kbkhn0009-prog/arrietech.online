-- Optional Supabase table for ARRIE custom events (run once in SQL editor)
create table if not exists arrie_events (
  id bigint generated always as identity primary key,
  event text not null,
  locale text,
  path text,
  referrer text,
  meta jsonb default '{}'::jsonb,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists arrie_events_created_at_idx on arrie_events (created_at desc);
create index if not exists arrie_events_event_idx on arrie_events (event);
