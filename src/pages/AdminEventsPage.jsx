import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { formatDate, loadEvents, safeRegistrationURL, torontoInput, torontoToISO } from "../lib/events";
import "./events.css";

const emptyEvent = () => ({ title: "", description: "", starts_at: "", ends_at: "", location: "", registration_url: "", published: false, image_path: null });

export default function AdminEventsPage() {
  const [session, setSession] = useState(null);
  const [access, setAccess] = useState("loading");
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(emptyEvent);
  const [file, setFile] = useState(null);
  const [fileVersion, setFileVersion] = useState(0);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (!supabase) { setAccess("unconfigured"); return; }
    // Subscription receives INITIAL_SESSION too. Keep database calls outside this callback.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase) return;
    let active = true;
    setEvents([]); setForm(emptyEvent()); setFile(null); setFileVersion((value) => value + 1);
    if (!session) { setAccess("signed-out"); return; }
    setAccess("loading");
    (async () => {
      const { data, error: checkError } = await supabase.rpc("is_event_organizer");
      if (!active) return;
      if (checkError) { setAccess("denied"); setError("Could not verify organizer access. Try signing in again."); return; }
      if (!data) { setAccess("denied"); return; }
      try {
        const rows = await loadEvents(true);
        if (active) { setEvents(rows); setAccess("allowed"); }
      } catch { if (active) { setError("Could not load events. Try signing in again."); setAccess("denied"); } }
    })();
    return () => { active = false; };
  }, [session]);

  function reset() {
    setForm(emptyEvent()); setFile(null); setFileVersion((value) => value + 1); setDeleteId(null);
  }
  function field(event) {
    const { name, value, type, checked } = event.target;
    setForm((old) => ({ ...old, [name]: type === "checkbox" ? checked : value }));
  }
  async function login(event) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    try {
      const { error: loginError } = await supabase.auth.signInWithOtp({ email: email.trim(), options: {
        shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/admin/events`,
      } });
      if (loginError) throw loginError;
      setMessage("If this email has an invited account, a sign-in link is on its way. Check your inbox.");
    } catch { setError("Unable to send a sign-in link. Check your email or contact the site administrator."); }
    finally { setBusy(false); }
  }
  async function signOut() {
    setBusy(true); setError("");
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) setError("Sign-out failed. Please try again.");
    else { setEvents([]); reset(); setMessage(""); }
    setBusy(false);
  }
  async function save(event) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    let uploadedPath = null;
    let saved = false;
    try {
      const starts_at = torontoToISO(form.starts_at);
      const ends_at = torontoToISO(form.ends_at);
      if (ends_at <= starts_at) throw new Error("The end time must be after the start time.");
      const registration_url = safeRegistrationURL(form.registration_url.trim());
      if (form.registration_url.trim() && !registration_url) throw new Error("Registration links must start with https://.");
      if (!form.title.trim()) throw new Error("Enter an event title.");
      const id = form.id || crypto.randomUUID();
      let image_path = form.image_path;
      if (file) {
        const extensions = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
        if (!extensions[file.type] || file.size > 5242880) throw new Error("Choose a JPG, PNG, or WebP image no larger than 5 MB.");
        const path = `${id}/${crypto.randomUUID()}.${extensions[file.type]}`;
        const { error: uploadError } = await supabase.storage.from("event-images").upload(path, file, { contentType: file.type, upsert: false });
        if (uploadError) throw new Error("Image upload failed. Check your connection and organizer access.");
        uploadedPath = path; image_path = path;
      }
      const payload = { title: form.title.trim(), description: form.description, location: form.location.trim(), starts_at, ends_at, registration_url, image_path, published: form.published };
      const query = form.id ? supabase.from("events").update(payload).eq("id", id) : supabase.from("events").insert({ id, ...payload });
      const { error: saveError } = await query.select("id").single();
      if (saveError) throw new Error("Event could not be saved. Check your connection and organizer access.");
      saved = true;
      reset();
      setMessage(payload.published ? "Event published." : "Draft saved.");
      setEvents(await loadEvents(true));
    } catch (saveError) {
      if (uploadedPath && !saved) await supabase.storage.from("event-images").remove([uploadedPath]);
      setError(saved ? "Event saved, but the list could not refresh. Reload this page." : saveError.message);
    } finally { setBusy(false); }
  }
  async function remove(id) {
    setBusy(true); setError(""); setMessage("");
    try {
      const { error: deleteError } = await supabase.from("events").delete().eq("id", id).select("id").single();
      if (deleteError) throw deleteError;
      setEvents((rows) => rows.filter((row) => row.id !== id));
      if (form.id === id) reset();
      setDeleteId(null); setMessage("Event deleted.");
    } catch { setError("Event could not be deleted. Check your connection and organizer access."); }
    finally { setBusy(false); }
  }

  return <main className="events-page"><div className="max-w-6xl mx-auto px-5 py-16">
    <div className="flex flex-wrap justify-between items-center gap-4 mb-6"><div><p className="text-purple-300 mb-2">UTRA organizers</p><h1 className="text-4xl font-extrabold gradient-purple-blue">Manage events</h1></div>{session && <button className="event-button" onClick={signOut} disabled={busy}>Sign out</button>}</div>
    {message && <p role="status" className="p-4 mb-5 rounded-lg bg-purple-400/10">{message}</p>}
    {error && <p role="alert" className="p-4 mb-5 rounded-lg bg-red-400/10 text-red-200">{error}</p>}
    {access === "unconfigured" && <p className="event-empty">Event management is not configured yet. Contact the website administrator.</p>}
    {access === "loading" && <p role="status">Checking organizer access…</p>}
    {access === "denied" && <p className="event-empty">This account could not access event management. Ask the website administrator to grant organizer access.</p>}
    {access === "signed-out" && <form className="max-w-md event-card p-7" onSubmit={login}><h2 className="text-2xl font-bold mb-3">Organizer sign-in</h2><p className="text-white/60 mb-6">Use your invited email address to receive a secure sign-in link.</p><label>Email<input className="event-field" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><button className="event-button mt-5" disabled={busy}>{busy ? "Sending…" : "Send sign-in link"}</button></form>}
    {access === "allowed" && <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
      <form onSubmit={save} className="event-card p-6"><div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold">{form.id ? "Edit event" : "New event"}</h2><button type="button" className="event-button" onClick={reset} disabled={busy}>New / clear</button></div>
        <fieldset disabled={busy} className="space-y-5">
          <label className="block">Title<input className="event-field" name="title" value={form.title} onChange={field} required maxLength={160} /></label>
          <label className="block">Description<textarea className="event-field" name="description" value={form.description} onChange={field} rows={5} maxLength={10000} /></label>
          <p className="text-white/55 text-sm">Enter all dates and times in Toronto time.</p>
          <div className="grid sm:grid-cols-2 gap-4">{[["starts_at", "Starts"], ["ends_at", "Ends"]].map(([name, label]) => <label key={name}>{label}<input className="event-field" type="datetime-local" name={name} value={form[name]} onChange={field} required /></label>)}</div>
          <label className="block">Location<input className="event-field" name="location" value={form.location} onChange={field} maxLength={300} /></label>
          <label className="block">Registration link (optional)<input className="event-field" name="registration_url" type="url" placeholder="https://…" value={form.registration_url} onChange={field} /></label>
          <label className="block">Event image (optional)<input key={fileVersion} className="event-field" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setFile(event.target.files[0] || null)} /><span className="text-sm text-white/50">JPG, PNG, or WebP. Maximum 5 MB.</span></label>
          {form.image_path && <div><p className="text-sm text-white/60">An image is attached. Upload a new one to replace it.</p><button type="button" className="event-button mt-2" onClick={() => setForm((old) => ({ ...old, image_path: null }))}>Remove image</button></div>}
          <label className="flex gap-3 items-center"><input type="checkbox" name="published" checked={form.published} onChange={field} />Published — visible on the events page</label>
          <button className="event-button w-full" disabled={busy}>{busy ? "Saving…" : form.published ? "Save and publish" : "Save draft"}</button>
        </fieldset>
      </form>
      <section aria-labelledby="saved-events"><h2 id="saved-events" className="text-2xl font-bold mb-5">All events</h2>{!events.length && <p className="text-white/60">Your first event starts here.</p>}<div className="space-y-4">{events.map((event) => <article className="event-card p-5" key={event.id}><p className="text-purple-300 text-sm">{event.published ? "Published" : "Draft"} · {formatDate(event.starts_at)}</p><h3 className="text-xl font-bold my-2">{event.title}</h3><div className="flex flex-wrap gap-2"><button className="event-button" disabled={busy} onClick={() => { setForm({ ...event, registration_url: event.registration_url || "", starts_at: torontoInput(event.starts_at), ends_at: torontoInput(event.ends_at) }); setFile(null); setFileVersion((value) => value + 1); setDeleteId(null); setError(""); setMessage(""); }}>Edit</button><button className="event-button" disabled={busy} onClick={() => setDeleteId(event.id)}>Delete</button></div>{deleteId === event.id && <div className="mt-4" role="group" aria-label="Confirm event deletion"><p className="mb-2">Delete this event permanently?</p><button className="event-button mr-2" disabled={busy} onClick={() => remove(event.id)}>Confirm delete</button><button className="event-button" disabled={busy} onClick={() => setDeleteId(null)}>Cancel</button></div>}</article>)}</div></section>
    </div>}
  </div></main>;
}
