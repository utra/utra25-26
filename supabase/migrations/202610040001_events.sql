begin;

create table public.event_organizers (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.event_organizers enable row level security;
revoke all on public.event_organizers from anon, authenticated;
grant select on public.event_organizers to authenticated;
create policy "Organizers can check their own membership"
  on public.event_organizers for select to authenticated
  using (user_id = (select auth.uid()));
-- No API write policies or grants: membership is managed only by trusted project owners.

create function public.is_event_organizer() returns boolean
language sql stable security invoker set search_path = ''
as $$ select exists (
  select 1 from public.event_organizers where user_id = (select auth.uid())
); $$;
revoke all on function public.is_event_organizer() from public, anon;
grant execute on function public.is_event_organizer() to authenticated;

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null check (length(trim(title)) between 1 and 160),
  description text not null default '' check (length(description) <= 10000),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  location text not null default '' check (length(location) <= 300),
  registration_url text check (registration_url is null or registration_url ~ '^https://[^[:space:]]+$'),
  image_path text check (image_path is null or image_path ~ '^[0-9a-f-]+/[0-9a-f-]+\.(jpg|png|webp)$'),
  published boolean not null default false,
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);
create index events_published_dates on public.events (starts_at, ends_at) where published;
alter table public.events enable row level security;
revoke all on public.events from anon, authenticated;
grant select on public.events to anon, authenticated;
grant insert, update, delete on public.events to authenticated;
create policy "Visitors read published events" on public.events
  for select to anon, authenticated using (published);
create policy "Organizers read all events" on public.events
  for select to authenticated using ((select public.is_event_organizer()));
create policy "Organizers create events" on public.events
  for insert to authenticated with check ((select public.is_event_organizer()));
create policy "Organizers update events" on public.events
  for update to authenticated using ((select public.is_event_organizer()))
  with check ((select public.is_event_organizer()));
create policy "Organizers delete events" on public.events
  for delete to authenticated using ((select public.is_event_organizer()));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('event-images', 'event-images', false, 5242880, array['image/jpeg', 'image/png', 'image/webp']);
create policy "Visitors read published event images" on storage.objects
  for select to anon, authenticated using (
    bucket_id = 'event-images' and exists (
      select 1 from public.events e where e.published and e.image_path = name
    )
  );
create policy "Organizers read event images" on storage.objects
  for select to authenticated using (bucket_id = 'event-images' and (select public.is_event_organizer()));
create policy "Organizers upload event images" on storage.objects
  for insert to authenticated with check (bucket_id = 'event-images' and (select public.is_event_organizer()));
create policy "Organizers delete event images" on storage.objects
  for delete to authenticated using (bucket_id = 'event-images' and (select public.is_event_organizer()));
commit;
