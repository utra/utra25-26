# Events setup

The public `/events` page and `/admin/events` editor share Supabase data. No server secret is used by the frontend. The route is discoverable; database and Storage policies enforce access independently of the UI.

## Configure a project

1. Create a Supabase project. Apply `supabase/migrations/202610040001_events.sql` using the SQL Editor or your migration workflow. This adds the events table, organizer allowlist, policies, and private image bucket.
2. Copy `.env.example` to `.env.local` and set the project URL and **publishable** key. Never put a secret or service-role key in a `VITE_` variable. For the existing GitHub Pages deployment, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in repository Settings > Secrets and variables > Actions > Variables. The workflow passes them into the build. Rebuild after changing them.
3. In Supabase Auth, disable new user signups. Enable email sign-in, configure production SMTP, and use exact redirect URLs: `https://YOUR_DOMAIN/admin/events` and (for development) `http://localhost:5173/admin/events`. Set the production Site URL. Keep the standard magic-link email template and enable appropriate Auth rate limits.
4. Invite each organizer using Supabase Authentication > Users. Then grant access through the SQL Editor, replacing the UUID with that user's Auth ID:

   ```sql
   insert into public.event_organizers (user_id) values ('USER_UUID');
   ```

5. Open `/admin/events`, request a sign-in link, and create a draft. Publish when ready. No public registration or in-app role management is provided.
6. Remove access immediately with:

   ```sql
   delete from public.event_organizers where user_id = 'USER_UUID';
   ```

   Subsequent protected database and storage requests are denied even with an existing session. Previously downloaded data cannot be recalled.

## Security model

- Anonymous visitors and ordinary authenticated users can read published events only.
- Approved organizers can read drafts and create, edit, publish, and delete events.
- Membership is a separate table with no client write grants or policies. Users cannot promote themselves, including by changing their Auth user metadata.
- Every write checks the current organizer table; frontend route checks only improve the user experience.
- The private image bucket allows public reads only for images referenced by published events. Image URLs are signed for one hour; existing URLs can remain valid until expiration after unpublishing. The page refreshes event data and URLs every minute.
- Uploads are restricted to organizers, 5 MB, and JPEG/PNG/WebP content types. SVG/HTML are not accepted. Use a dedicated bucket; do not store unrelated sensitive material there.
- Database constraints validate title lengths, end-after-start, and HTTPS registration links. React renders descriptions as text, never HTML.
- Images replaced or detached from events are retained privately. A failed database save attempts to remove its newly uploaded image. Periodically remove unreferenced objects through the trusted dashboard, after allowing in-progress uploads to finish.
- Invitation and role management stay in the trusted Supabase dashboard. Turn on MFA for project owners. Organizer MFA can be added later with an enrollment/challenge UI and an `aal2` policy requirement; it is not currently enforced.

## Dates and calendar

Dates are stored as UTC timestamps and displayed/entered in America/Toronto. Missing and repeated daylight-saving times are rejected with an explanation. Multi-day events appear on each occupied day; midnight end times are exclusive. Expired events leave the conveyor and remain in the calendar. No sample events are published. Without configuration the public page shows an empty calendar and the admin page explains setup is required.

## Verify before launch

Use Node.js 24 (matching CI), then run `npm run build` and `npm test`. In a disposable Supabase development project, run `supabase/tests/events_rls.sql` as postgres in the SQL Editor (it rolls back its fixtures). This verifies database access with anonymous, ordinary, organizer, and revoked identities, including attempted self-promotion.

Then test email delivery and exact callback URLs, create/edit/draft/publish/delete through the browser, and verify private draft images cannot be fetched with an anonymous client. Check upload rejection for unsupported types and files over 5 MB. Confirm the hosting platform serves the SPA for `/events` and `/admin/events` on direct navigation. Authentication delivery, deployed redirects, and Storage API behavior require a configured live project; a frontend build cannot prove these work.
