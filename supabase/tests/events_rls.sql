-- Run as postgres in a disposable Supabase project after the migration.
-- Fixtures and assertions are rolled back. Any unexpected access raises an error.
begin;
insert into auth.users (id) values ('e0000000-0000-4000-8000-000000000001'), ('e0000000-0000-4000-8000-000000000002');
insert into public.event_organizers values ('e0000000-0000-4000-8000-000000000001');
insert into public.events (id, title, starts_at, ends_at, published) values
('e1000000-0000-4000-8000-000000000001', 'Policy test published', now(), now() + interval '1 hour', true),
('e1000000-0000-4000-8000-000000000002', 'Policy test draft', now(), now() + interval '1 hour', false);

set local role anon;
do $$ begin
  if (select count(*) from public.events where id in ('e1000000-0000-4000-8000-000000000001','e1000000-0000-4000-8000-000000000002')) <> 1 then raise exception 'Anonymous read boundary failed'; end if;
  begin
    insert into public.events (title, starts_at, ends_at) values ('Unauthorized', now(), now()+interval '1 hour');
    raise exception 'Anonymous insert succeeded';
  exception when insufficient_privilege then null; end;
end $$;
reset role;

set local role authenticated;
select set_config('request.jwt.claim.sub','e0000000-0000-4000-8000-000000000002',true);
do $$ declare affected integer; begin
  if public.is_event_organizer() then raise exception 'Ordinary user became organizer'; end if;
  if (select count(*) from public.events where id in ('e1000000-0000-4000-8000-000000000001','e1000000-0000-4000-8000-000000000002')) <> 1 then raise exception 'Ordinary user read draft'; end if;
  begin
    insert into public.event_organizers values ('e0000000-0000-4000-8000-000000000002');
    raise exception 'Self-promotion succeeded';
  exception when insufficient_privilege then null; end;
  begin
    insert into public.events (title, starts_at, ends_at) values ('Unauthorized', now(), now()+interval '1 hour');
    raise exception 'Ordinary insert succeeded';
  exception when insufficient_privilege then null; end;
  update public.events set title='Unauthorized' where id='e1000000-0000-4000-8000-000000000001';
  get diagnostics affected = row_count;
  if affected <> 0 then raise exception 'Ordinary update succeeded'; end if;
  delete from public.events where id='e1000000-0000-4000-8000-000000000001';
  get diagnostics affected = row_count;
  if affected <> 0 then raise exception 'Ordinary delete succeeded'; end if;
end $$;

select set_config('request.jwt.claim.sub','e0000000-0000-4000-8000-000000000001',true);
do $$ declare affected integer; begin
  if not public.is_event_organizer() then raise exception 'Organizer denied'; end if;
  if (select count(*) from public.events where id in ('e1000000-0000-4000-8000-000000000001','e1000000-0000-4000-8000-000000000002')) <> 2 then raise exception 'Organizer cannot read draft'; end if;
  insert into public.events (id,title,starts_at,ends_at) values ('e1000000-0000-4000-8000-000000000003','Organizer created', now(),now()+interval '1 hour');
  update public.events set published=true where id='e1000000-0000-4000-8000-000000000003';
  get diagnostics affected = row_count;
  if affected <> 1 then raise exception 'Organizer update denied'; end if;
  delete from public.events where id='e1000000-0000-4000-8000-000000000003';
  get diagnostics affected = row_count;
  if affected <> 1 then raise exception 'Organizer delete denied'; end if;
  begin
    insert into public.events (title,starts_at,ends_at) values ('Invalid dates', now(),now()-interval '1 hour');
    raise exception 'Invalid dates accepted';
  exception when check_violation then null; end;
  begin
    insert into public.events (title,starts_at,ends_at,registration_url) values ('Unsafe link',now(),now()+interval '1 hour','javascript:alert(1)');
    raise exception 'Unsafe link accepted';
  exception when check_violation then null; end;
end $$;
reset role;
delete from public.event_organizers where user_id='e0000000-0000-4000-8000-000000000001';
set local role authenticated;
do $$ declare affected integer; begin
  if public.is_event_organizer() then raise exception 'Revocation failed'; end if;
  update public.events set title='Revoked update' where id='e1000000-0000-4000-8000-000000000001';
  get diagnostics affected = row_count;
  if affected <> 0 then raise exception 'Revoked user can update'; end if;
end $$;
reset role;
rollback;
