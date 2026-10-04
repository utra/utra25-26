import { supabase } from "./supabase.js";

export const TIME_ZONE = "America/Toronto";
export const dateKey = (value) => new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit",
}).format(new Date(value));
export const formatDate = (value) => new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE, month: "short", day: "numeric", year: "numeric",
}).format(new Date(value));
export const formatTime = (value) => new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE, hour: "numeric", minute: "2-digit",
}).format(new Date(value));

export function torontoInput(value) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(new Date(value));
  const p = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`;
}

// Reject missing spring-forward times and ambiguous fall-back times instead of silently shifting events.
export function torontoToISO(value) {
  const base = Date.parse(`${value}Z`);
  if (!Number.isFinite(base)) throw new Error("Enter a valid date and time.");
  const candidates = [4, 5].map((offset) => new Date(base + offset * 3600000))
    .filter((date) => torontoInput(date) === value);
  if (candidates.length !== 1) throw new Error("This Toronto time is skipped or repeated by daylight saving time. Choose an unambiguous time.");
  return candidates[0].toISOString();
}

export function eventsOnDay(events, day) {
  return events.filter((event) => dateKey(event.starts_at) <= day && dateKey(new Date(new Date(event.ends_at).getTime() - 1)) >= day);
}

export function safeRegistrationURL(value) {
  if (!value) return null;
  try { const url = new URL(value); return url.protocol === "https:" ? url.href : null; }
  catch { return null; }
}

export async function loadEvents(admin = false) {
  if (!supabase) return [];
  let query = supabase.from("events").select("*").order("starts_at");
  if (!admin) query = query.eq("published", true);
  const { data, error } = await query;
  if (error) throw error;
  const paths = [...new Set(data.map((event) => event.image_path).filter(Boolean))];
  let urls = {};
  if (paths.length) {
    const { data: images } = await supabase.storage.from("event-images").createSignedUrls(paths, 3600);
    urls = Object.fromEntries((images || []).map((image) => [image.path, image.signedUrl]));
  }
  return data.map((event) => ({ ...event, image_url: urls[event.image_path] || null }));
}
