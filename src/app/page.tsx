import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/** What the client gets — outcomes, not facts about the studio. */
const OUTCOMES = [
  { value: "24/7",    label: "Your customers always get an answer" },
  { value: "2–3 wks", label: "From first call to live" },
  { value: "100%",    label: "Yours — code, data and keys" },
  { value: "1",       label: "Person to talk to, who builds it" },
];

/** The problems a client walks in with, and what we put in place for each. */
const PROBLEMS = [
  {
    num: "01",
    tag: "Chat assistant",
    problem: "Customers message at night and nobody answers",
    fix: "An AI assistant on your website and WhatsApp answers questions, quotes and books, then hands the serious enquiries to you.",
  },
  {
    num: "02",
    tag: "Voice assistant",
    problem: "The phone rings while you’re busy",
    fix: "A voice assistant picks up, answers the everyday questions, books the appointment and sends you a summary.",
  },
  {
    num: "03",
    tag: "AI operations",
    problem: "Your week disappears into admin and follow-ups",
    fix: "AI agents run follow-ups, reminders, posting and reports on a schedule, and ask before anything goes out.",
  },
  {
    num: "04",
    tag: "Your own platform",
    problem: "A platform takes a cut and owns your customers",
    fix: "Your own booking or ordering system on your own domain. The customer and the money stay with you.",
  },
  {
    num: "05",
    tag: "Dashboards",
    problem: "You can’t see what’s working",
    fix: "One dashboard with the numbers that decide something — sales, bookings, enquiries — updated automatically.",
  },
  {
    num: "06",
    tag: "Lead lists",
    problem: "You need new customers but have no list",
    fix: "We build the list from public directories and maps, cleaned and put into a database you own.",
  },
];

const SERVICES = [
  "AI chatbots (web + WhatsApp)",
  "AI voice / call assistants",
  "AI operations agents",
  "Booking & ordering systems",
  "Dashboards",
  "Lead lists & data pipelines",
  "Custom web apps",
  "iOS & Android apps",
];

const PROOF = [
  {
    kicker: "Travel & local business",
    name: "IslandLoaf",
    body: "A Sri Lankan app that gets local stays, tours and restaurants online — the business keeps the customer and 95% of every booking.",
    href: "https://www.islandloafstay.com",
    label: "islandloafstay.com",
  },
  {
    kicker: "AI operations",
    name: "Authority13",
    body: "An AI chief of staff that runs a company’s recurring work — marketing, follow-ups, reporting — with approval on anything that goes out.",
    href: "https://authority13.com",
    label: "authority13.com",
  },
];

const eyebrow = "font-dm-mono text-[12px] tracking-[0.1em] uppercase text-terracotta mb-4";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="top" className="pt-32 sm:pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap gap-14 items-center">
          <div className="flex-[999_1_560px] min-w-0">
            <p className="mb-7 inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-clay-border rounded-full font-dm-mono text-[12px] tracking-[0.08em] uppercase text-clay-mid">
              <span aria-hidden="true" className="w-[7px] h-[7px] rounded-full bg-terracotta" />
              AI for businesses · Negombo, Sri Lanka
            </p>
            <h1 className="font-display font-semibold text-[44px] sm:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.045em] text-clay-deep">
              Stop losing customers to <em className="text-terracotta">slow replies</em> and busywork.
            </h1>
            <p className="mt-7 max-w-[560px] font-instrument text-[19px] leading-relaxed text-clay-mid">
              We build AI that answers your customers, books your appointments and runs the
              repetitive work — so your business grows without hiring more people to keep up.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#start"
                className="inline-flex items-center gap-2 min-h-[52px] px-7 rounded-full bg-terracotta text-white font-instrument font-semibold text-base transition-colors hover:bg-terracotta-deep"
              >
                Tell us your problem <ArrowRight size={16} />
              </Link>
              <Link href="#problems" className="btn-clay-light inline-flex items-center min-h-[52px] px-7 text-base">
                See what we fix
              </Link>
            </div>
          </div>

          {/* Illustrative conversation */}
          <figure className="flex-[1_1_380px] min-w-0 m-0">
            <div className="rounded-3xl border border-clay-border bg-white p-5 shadow-[0_30px_60px_-30px_rgba(17,17,17,0.18)]">
              <div className="flex items-center justify-between pb-4 border-b border-clay-border">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="w-[34px] h-[34px] rounded-full bg-[#DCF2E6] text-[#126B3F] font-semibold text-[13px] inline-flex items-center justify-center">
                    SV
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-clay-deep">Sunset Villa · WhatsApp</div>
                    <div className="text-xs text-clay-light">AI assistant · replies 24/7</div>
                  </div>
                </div>
                <span className="font-dm-mono text-[11px] text-clay-light">23:14</span>
              </div>
              <div className="flex flex-col gap-2.5 pt-4 text-sm leading-snug font-instrument">
                <p className="self-start max-w-[82%] px-3.5 py-2.5 rounded-[16px_16px_16px_4px] bg-[#EFEDE6] text-[#1A1A1A]">
                  Hi! Do you have a room for 2 adults, 2–6 December?
                </p>
                <p className="self-end max-w-[82%] px-3.5 py-2.5 rounded-[16px_16px_4px_16px] bg-terracotta text-white">
                  Yes — the Garden Double is free those 4 nights. Breakfast is included. Shall I hold it for you?
                </p>
                <p className="self-start max-w-[82%] px-3.5 py-2.5 rounded-[16px_16px_16px_4px] bg-[#EFEDE6] text-[#1A1A1A]">
                  Yes please
                </p>
                <p className="self-end max-w-[82%] px-3.5 py-2.5 rounded-[16px_16px_4px_16px] bg-terracotta text-white">
                  Done. I’ve sent the details to the owner, who will confirm first thing tomorrow.
                </p>
              </div>
            </div>
            <figcaption className="mt-3 font-dm-mono text-xs text-clay-light">
              Illustrative example — the owner was asleep.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────────────── */}
      <section aria-label="What you get" className="border-y border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <div
              key={o.label}
              className={`py-8 pr-6 ${i % 2 === 1 ? "border-l border-clay-border pl-6" : ""} ${i === 2 ? "lg:border-l lg:border-clay-border lg:pl-6" : ""}`}
            >
              <div className="font-display font-semibold text-4xl tracking-[-0.03em] text-clay-deep">{o.value}</div>
              <div className="mt-1.5 font-instrument text-sm text-clay-mid">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEMS ─────────────────────────────────────── */}
      <section id="problems" className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-10">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <p className={eyebrow}>Problems we solve</p>
            <h2 className="font-display font-semibold text-4xl sm:text-6xl leading-[1.02] tracking-[-0.04em] text-clay-deep">
              Sound <em>familiar?</em>
            </h2>
          </div>
          <p className="max-w-sm font-instrument text-base leading-relaxed text-clay-mid">
            The problems business owners bring us most. Each one has a fix we already build and run in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p) => (
            <article key={p.num} className="clay-card clay-card-hover flex flex-col gap-5 p-7 min-h-[280px]">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="w-11 h-11 rounded-xl bg-[#F1EFE9] border border-clay-border inline-flex items-center justify-center font-dm-mono text-[13px] text-terracotta">
                  {p.num}
                </span>
                <span className="font-dm-mono text-[11px] tracking-[0.08em] uppercase text-clay-light">{p.tag}</span>
              </div>
              <h3 className="font-display font-semibold text-2xl leading-tight tracking-[-0.02em] text-clay-deep">
                {p.problem}
              </h3>
              <p className="mt-auto font-instrument text-[15px] leading-relaxed text-clay-mid">
                <span className="font-semibold text-clay-deep">What we do: </span>
                {p.fix}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <p className={eyebrow}>How it works</p>
        <h2 className="mb-12 font-display font-semibold text-4xl sm:text-6xl leading-[1.02] tracking-[-0.04em] text-clay-deep">
          Talk. Build. <em>Own it.</em>
        </h2>
        <ol className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="rounded-[22px] bg-clay-deep text-white p-8">
            <div className="font-dm-mono text-[13px] text-[#9A968E]">01</div>
            <h3 className="mt-10 mb-2.5 font-display font-semibold text-[26px] tracking-[-0.02em]">Tell us the problem</h3>
            <p className="font-instrument text-[15px] leading-relaxed text-[#C9C5BC]">
              A call, not a form. We work out what it actually has to do before anyone writes code.
            </p>
          </li>
          <li className="rounded-[22px] bg-white border border-clay-border p-8">
            <div className="font-dm-mono text-[13px] text-clay-light">02</div>
            <h3 className="mt-10 mb-2.5 font-display font-semibold text-[26px] tracking-[-0.02em] text-clay-deep">We build it</h3>
            <p className="font-instrument text-[15px] leading-relaxed text-clay-mid">
              Two to three weeks for most builds. You see it running, not a slide about it.
            </p>
          </li>
          <li className="rounded-[22px] bg-terracotta text-white p-8">
            <div className="font-dm-mono text-[13px] text-white/70">03</div>
            <h3 className="mt-10 mb-2.5 font-display font-semibold text-[26px] tracking-[-0.02em]">You own it</h3>
            <p className="font-instrument text-[15px] leading-relaxed text-white/90">
              Your repo, your keys, your data. Bring your own API key and the running cost stays yours.
            </p>
          </li>
        </ol>
      </section>

      {/* ── PROOF ────────────────────────────────────────── */}
      <section id="proof" className="border-t border-clay-border bg-[#EFEDE6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <p className={eyebrow}>Proof it works</p>
          <h2 className="mb-12 max-w-3xl font-display font-semibold text-4xl sm:text-[52px] leading-[1.05] tracking-[-0.04em] text-clay-deep">
            We run the same tools in our <em>own businesses.</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {PROOF.map((v) => (
              <article key={v.name} className="clay-card flex flex-col gap-4 p-9">
                <div className="flex items-center justify-between">
                  <span className="font-dm-mono text-xs tracking-[0.08em] uppercase text-clay-light">{v.kicker}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#DCF2E6] text-[#126B3F] text-xs font-medium">Live</span>
                </div>
                <h3 className="font-display font-semibold text-4xl tracking-[-0.03em] text-clay-deep">{v.name}</h3>
                <p className="font-instrument text-base leading-relaxed text-clay-mid">{v.body}</p>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 min-h-[44px] font-instrument text-[15px] font-semibold text-terracotta hover:text-terracotta-deep"
                >
                  {v.label} <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
          <Link href="/ventures" className="mt-8 inline-flex items-center gap-1.5 font-instrument text-sm text-clay-mid hover:text-clay-deep">
            Both ventures in full <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 flex flex-wrap gap-12">
        <div className="flex-[1_1_320px]">
          <p className={eyebrow}>Services</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.05] tracking-[-0.04em] text-clay-deep">
            Everything it takes to fix it.
          </h2>
          <Link href="/services" className="mt-6 inline-flex items-center gap-1.5 font-instrument text-sm text-clay-mid hover:text-clay-deep">
            All services <ArrowUpRight size={14} />
          </Link>
        </div>
        <ul className="flex-[2_1_560px] list-none m-0 p-0 flex flex-wrap gap-2.5 content-start">
          {SERVICES.map((s) => (
            <li key={s} className="px-[18px] py-3 border border-[#D9D5CC] rounded-full font-instrument text-[15px] text-clay-deep">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section id="start" className="px-5 sm:px-8 pb-24">
        <div className="max-w-6xl mx-auto rounded-[32px] bg-terracotta text-white p-10 sm:p-16 lg:p-24 flex flex-wrap gap-10 items-end justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display font-semibold text-[40px] sm:text-6xl lg:text-[80px] leading-[0.98] tracking-[-0.045em]">
              What’s slowing your business <em>down?</em>
            </h2>
            <p className="mt-6 font-instrument text-lg leading-relaxed text-white/90">
              Tell us the problem. You talk directly to the person who builds the fix — most go live in two to three weeks.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/94771686999"
              className="inline-flex items-center justify-center gap-2 min-h-[56px] px-7 rounded-full bg-white text-clay-deep font-instrument font-semibold text-base hover:bg-[#F1EFE9]"
            >
              Message us on WhatsApp
            </a>
            <a
              href="mailto:info@aicodeagency.org"
              className="inline-flex items-center justify-center min-h-[56px] px-7 rounded-full border-[1.5px] border-white text-white font-instrument font-semibold text-base hover:bg-white/10"
            >
              info@aicodeagency.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
