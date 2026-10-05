import { useEffect, useRef, useState } from "react";
import { dateKey, eventsOnDay, formatDate, formatTime, loadEvents, safeRegistrationURL } from "../lib/events";
import "./events.css";
import robotPhoto from "../assets/images/subteams/robosoccer/2018 robocup/DSC01734.JPG";

function EventCard({ event }) {
  const link = safeRegistrationURL(event.registration_url);
  return <article className="event-card">
    <div className="event-card-image">{event.image_url ? <img src={event.image_url} alt="" loading="lazy" /> : <span aria-hidden="true">UTRA<span>EVENTS</span></span>}</div>
    <div className="p-6">
      <p className="text-purple-300 text-sm mb-2">{formatDate(event.starts_at)} · {formatTime(event.starts_at)}</p>
      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
      <p className="text-white/60 text-sm mb-3">{event.location || "Location to be announced"}</p>
      <p className="text-white/75 whitespace-pre-wrap break-words">{event.description}</p>
      <p className="text-white/50 text-sm mt-4">Ends {formatDate(event.ends_at)} at {formatTime(event.ends_at)}</p>
      {link && <a className="event-button inline-block mt-5" href={link} target="_blank" rel="noopener noreferrer">Register ↗</a>}
    </div>
  </article>;
}

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");
  const [now, setNow] = useState(() => new Date());
  const today = dateKey(now);
  const [month, setMonth] = useState(() => dateKey(new Date()).slice(0, 7));
  const [selected, setSelected] = useState(() => dateKey(new Date()));
  const [paused, setPaused] = useState(false);
  const conveyor = useRef(null);

  useEffect(() => {
    let active = true;
    const refresh = () => loadEvents().then((data) => {
      if (active) { setEvents(data); setStatus("ready"); }
    }).catch(() => { if (active) setStatus("error"); });
    refresh();
    const timer = setInterval(() => { setNow(new Date()); refresh(); }, 60000);
    return () => { active = false; clearInterval(timer); };
  }, []);

  useEffect(() => {
    const element = conveyor.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame, previous, remainder = 0;
    function move(time) {
      if (previous && !paused && !reduced.matches && !element.matches(":hover, :focus-within") && element.scrollWidth > element.clientWidth) {
        // Keep fractional pixels: browsers can round scrollLeft and otherwise stall slow motion.
        remainder += Math.min(time - previous, 40) * 0.025;
        const pixels = Math.floor(remainder);
        element.scrollLeft += pixels;
        remainder -= pixels;
        if (element.scrollLeft >= element.scrollWidth - element.clientWidth - 1) element.scrollLeft = 0;
      }
      previous = time;
      frame = requestAnimationFrame(move);
    }
    if (element) frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [paused, events, status]);

  const upcoming = events.filter((event) => new Date(event.ends_at) > now);
  const [year, monthNumber] = month.split("-").map(Number);
  const offset = new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay();
  const days = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  const monthLabel = new Intl.DateTimeFormat("en-CA", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, monthNumber - 1, 1)));
  const selectedEvents = eventsOnDay(events, selected);
  function changeMonth(delta) {
    const value = new Date(Date.UTC(year, monthNumber - 1 + delta, 1)).toISOString().slice(0, 7);
    setMonth(value); setSelected(`${value}-01`);
  }

  return <main className="events-page events-public-page">
    <div className="events-hero-photo" aria-hidden="true" style={{ backgroundImage: `url(${robotPhoto})` }} />
    <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5">Events at UTRA</h1>
      <p className="text-white/65 text-xl max-w-xl">Find your next workshop, competition, or chance to meet the team.</p>
      <section className="mt-14" aria-labelledby="upcoming-heading">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h2 id="upcoming-heading" className="text-3xl font-bold">Coming up</h2>
          {upcoming.length > 0 && <div className="flex gap-2">
            <button className="event-button" aria-label="Previous event cards" onClick={() => { setPaused(true); conveyor.current?.scrollBy({ left: -374, behavior: "auto" }); }}>←</button>
            <button className="event-button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Resume scrolling" : "Pause scrolling"}</button>
            <button className="event-button" aria-label="Next event cards" onClick={() => { setPaused(true); conveyor.current?.scrollBy({ left: 374, behavior: "auto" }); }}>→</button>
          </div>}
        </div>
        {status === "loading" ? <p role="status">Loading events…</p> : status === "error" ? <p role="alert">Events couldn’t be loaded. Please try again shortly.</p> : upcoming.length ?
          <div className="events-conveyor" ref={conveyor} tabIndex={0} aria-label="Upcoming events. Scroll horizontally to browse." onTouchStart={() => setPaused(true)}>
            {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
          </div> : <div className="event-empty">More events are on the way. Check back soon.</div>}
      </section>
      <section className="mt-16" aria-labelledby="calendar-heading">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6"><h2 id="calendar-heading" className="text-3xl font-bold">The calendar</h2><p className="text-white/55">All times in Toronto · ET</p></div>
        <div className="event-calendar">
          <div className="calendar-toolbar flex flex-wrap justify-between items-center gap-4 p-5">
            <h3 className="text-2xl font-bold" aria-live="polite">{monthLabel}</h3>
            <div className="flex gap-2"><button className="event-button" onClick={() => changeMonth(-1)} aria-label="Previous month">←</button><button className="event-button" onClick={() => { setMonth(today.slice(0, 7)); setSelected(today); }}>Today</button><button className="event-button" onClick={() => changeMonth(1)} aria-label="Next month">→</button></div>
          </div>
          <div className="calendar-weekdays grid grid-cols-7">{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <div className="p-3 text-center text-white/85 font-semibold text-xs md:text-sm" key={day}>{day}</div>)}</div>
          <div className="grid grid-cols-7">
            {Array.from({ length: offset }, (_, i) => <div key={`blank-${i}`} className="calendar-blank" />)}
            {Array.from({ length: days }, (_, i) => {
              const key = `${month}-${String(i + 1).padStart(2, "0")}`;
              const dayEvents = eventsOnDay(events, key);
              return <button key={key} className={`calendar-day ${selected === key ? "selected" : ""}`} onClick={() => setSelected(key)} aria-pressed={selected === key} aria-current={today === key ? "date" : undefined} aria-label={`${key}, ${dayEvents.length} events`}>
                <span className={today === key ? "text-purple-300 font-extrabold" : ""}>{i + 1}</span>
                {dayEvents.length > 0 && <><span className="hidden md:block text-xs text-purple-200 mt-2 truncate">{dayEvents[0].title}</span><span className="block text-xs text-purple-300 mt-1">{dayEvents.length} <span className="hidden sm:inline">event{dayEvents.length !== 1 ? "s" : ""}</span><span className="sm:hidden">●</span></span></>}
              </button>;
            })}
            {Array.from({ length: (7 - (offset + days) % 7) % 7 }, (_, i) => <div key={`end-blank-${i}`} className="calendar-blank" />)}
          </div>
        </div>
        <div className="mt-7" aria-live="polite"><h3 className="text-xl font-bold mb-4">{formatDate(`${selected}T12:00:00Z`)}</h3>
          {status === "loading" ? <p>Loading events…</p> : status === "error" ? <p>Calendar unavailable while events could not be loaded.</p> : selectedEvents.length ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{selectedEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <p className="text-white/55">No events scheduled for this day.</p>}
        </div>
      </section>
    </div>
  </main>;
}
