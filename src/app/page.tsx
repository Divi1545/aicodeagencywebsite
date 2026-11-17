import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { VENTURES } from "@/lib/ventures";

const STATS = [
  { value: "24/7",    label: "Your customers get an answer" },
  { value: "2–3 wks", label: "From first call to live" },
  { value: "100%",    label: "Yours: code, data and keys" },
  { value: "1",       label: "Person to talk to, who builds it" },
];

/** The problems a client walks in with, and what we put in place for each. */
const PROBLEMS = [
  {
    num: "01",
    problem: "Customers message at night and nobody answers",
    fix: "An AI assistant on your website and WhatsApp answers questions, quotes, and books, then hands the serious enquiries to you. Nobody waits until morning.",
  },
  {
    num: "02",
    problem: "The phone rings while you're busy",
    fix: "A voice assistant picks up, answers the questions you hear every day, books the appointment and sends you a summary. No more missed calls turning into lost customers.",
  },
  {
    num: "03",
    problem: "Your week disappears into admin and follow-ups",
    fix: "AI agents handle the repeat work — follow-ups, reminders, posting, reports — on a schedule, and ask for your approval before anything goes out.",
  },
  {
    num: "04",
    problem: "A platform takes a cut and owns your customers",
    fix: "Your own booking or ordering system, on your own domain. The customer relationship and the money stay with you.",
  },
  {
    num: "05",
    problem: "You can't see what's working",
    fix: "One dashboard with the numbers that decide something — sales, bookings, enquiries — updated automatically, no spreadsheet exports.",
  },
  {
    num: "06",
    problem: "You need new customers but have no list",
    fix: "We build the list for you: businesses or prospects pulled from public directories and maps, cleaned and put into a database you own.",
  },
];

const SERVICES = [
  { num: "01", name: "AI Chatbots",              desc: "Claude-powered agents for booking, support and sales — in your product, not a widget bolted on.", tag: "Popular" },
  { num: "02", name: "AI Callbots",              desc: "Voice AI that answers the phone, books appointments and handles the questions you repeat all day.", tag: null },
  { num: "03", name: "Custom SaaS Platforms",    desc: "Full-stack products on Next.js and Postgres. Auth, payments, dashboards, the unglamorous parts included.", tag: null },
  { num: "04", name: "AI Operations",            desc: "Agents that run recurring marketing and ops work on a schedule, with your approval on anything that leaves the building.", tag: "Flagship" },
  { num: "05", name: "Scrapers & Data Pipelines",desc: "Automated collection and enrichment — directories, maps, registries — into a database you actually own.", tag: null },
  { num: "06", name: "Analytics Dashboards",     desc: "The numbers that decide something, on one screen, updated without anyone exporting a spreadsheet.", tag: null },
  { num: "07", name: "Mobile Apps",              desc: "iOS and Android builds shipped to the App Store and Play Store, not left in TestFlight.", tag: null },
  { num: "08", name: "AI Hardware",              desc: "On-device assistants and edge units for shops, homes and factory floors.", tag: "Soon" },
];

const STEPS = [
  { num: "01", title: "Tell us the problem",  desc: "A call, not a form. We work out what the thing actually has to do before anyone writes a line of code." },
  { num: "02", title: "We build it",          desc: "Two to three weeks for most builds. You see it running, not a slide about it." },
  { num: "03", title: "You own it",           desc: "Your repo, your keys, your data, your infrastructure. Bring your own API key and the running cost stays yours." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-0">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-terracotta inline-block" />
            AI for businesses — Negombo, Sri Lanka
          </p>
          <h1 className="font-display font-semibold text-[13vw] sm:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] text-clay-deep max-w-4xl">
            Stop losing customers to{" "}
            <em className="text-terracotta">slow replies and busywork</em>.
          </h1>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <p className="font-instrument text-lg text-clay-mid leading-relaxed max-w-md">
              We build AI that answers your customers, books your appointments and
              runs the repetitive work, so your business grows without hiring more
              people to keep up.
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link href="#problems" className="btn-clay-dark inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm">
                See what we fix <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-clay-light inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm">
                Tell us your problem
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 border-t border-clay-border grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-8 pr-6 ${i > 0 ? "lg:border-l lg:border-clay-border lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-clay-border pl-6 lg:pl-8" : ""}`}
              >
                <div className="font-display font-semibold text-3xl sm:text-4xl text-clay-deep">{s.value}</div>
                <div className="mt-1 font-dm-mono text-[11px] text-clay-light tracking-[0.16em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS WE SOLVE ──────────────────────────── */}
      <section id="problems" className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-12 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">Problems we solve</p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep leading-[1.05] mb-6">
                Sound <em className="text-terracotta">familiar</em>?
              </h2>
              <p className="font-instrument text-clay-mid leading-relaxed mb-8">
                These are the problems business owners bring us most. Each one has
                a fix we have already built and run in production.
              </p>
              <Link href="/services" className="font-instrument text-sm text-clay-deep inline-flex items-center gap-1.5 hover:text-terracotta transition-colors">
                Tell us yours <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="border-t border-clay-border">
              {PROBLEMS.map((item) => (
                <div key={item.num} className="py-8 border-b border-clay-border grid grid-cols-[3rem_1fr] gap-x-4">
                  <span className="font-dm-mono text-xs text-clay-light pt-1.5">{item.num}</span>
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-clay-deep mb-2.5">{item.problem}</h3>
                    <p className="font-instrument text-clay-mid leading-relaxed max-w-xl">
                      <span className="text-terracotta font-semibold">What we do: </span>
                      {item.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VENTURES ───────────────────────────────── */}
      <section id="ventures" className="border-t border-clay-border bg-clay-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">Proof it works</p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep">
                We run the same tools in <em className="text-terracotta">our own businesses</em>.
              </h2>
            </div>
            <Link href="/ventures" className="font-instrument text-sm text-clay-mid hover:text-clay-deep inline-flex items-center gap-1.5 transition-colors shrink-0">
              Both ventures in full <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {VENTURES.map((v) => (
              <article key={v.slug} className="clay-card clay-card-hover p-8 sm:p-10 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-dm-mono text-[11px] tracking-[0.18em] uppercase text-clay-light">
                    {v.kicker}
                  </span>
                  <span className="clay-tag">{v.stage}</span>
                </div>

                <h3 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-clay-deep mb-3">
                  {v.name}
                </h3>
                <p className="font-instrument text-lg text-clay-ink leading-snug mb-4">
                  {v.tagline}
                </p>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-7">
                  {v.body[0]}
                </p>

                <ul className="mt-auto border-t border-clay-border mb-7">
                  {v.capabilities.slice(0, 3).map((c) => (
                    <li key={c} className="flex gap-3 py-3 border-b border-clay-border font-instrument text-sm text-clay-ink">
                      <span className="text-terracotta font-dm-mono text-xs pt-0.5">→</span>
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Link
                    href={`/ventures#${v.slug}`}
                    className="font-instrument text-sm font-semibold text-clay-deep inline-flex items-center gap-1.5 hover:text-terracotta transition-colors"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                  {v.surfaces.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-dm-mono text-xs text-clay-light hover:text-clay-deep transition-colors inline-flex items-center gap-1"
                    >
                      {s.label} <ArrowUpRight size={11} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────── */}
      <section id="what-we-do" className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">What we do</p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep">
                Services, <em className="text-terracotta">indexed</em>.
              </h2>
            </div>
            <Link href="/services" className="font-instrument text-sm text-clay-mid hover:text-clay-deep inline-flex items-center gap-1.5 transition-colors shrink-0">
              All services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="border-t border-clay-border">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_16rem_1fr_auto] gap-x-4 gap-y-1 items-baseline py-6 border-b border-clay-border transition-colors hover:bg-clay-surface"
              >
                <span className="font-dm-mono text-xs text-clay-light">{s.num}</span>
                <h3 className="font-display font-semibold text-xl text-clay-deep group-hover:text-terracotta transition-colors">
                  {s.name}
                </h3>
                <p className="col-start-2 sm:col-start-3 font-instrument text-sm text-clay-mid leading-relaxed max-w-xl">
                  {s.desc}
                </p>
                <span className="hidden sm:block justify-self-end">
                  {s.tag ? <span className="clay-tag">{s.tag}</span> : <ArrowUpRight size={16} className="text-clay-light opacity-0 group-hover:opacity-100 transition-opacity" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-clay-border bg-clay-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">How working with us goes</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep mb-14">
            Talk. Build. <em className="text-terracotta">Own it.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-clay-border border border-clay-border">
            {STEPS.map((step) => (
              <div key={step.num} className="bg-clay-surface p-8">
                <span className="font-dm-mono text-xs text-terracotta">{step.num}</span>
                <h3 className="font-display font-semibold text-2xl text-clay-deep mt-3 mb-3">{step.title}</h3>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-clay-border bg-clay-deep">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-28 text-center">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-6">Start a project</p>
          <h2 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-clay-bg mb-5">
            What&apos;s slowing your<br />business down<em className="text-terracotta">?</em>
          </h2>
          <p className="font-instrument text-white/50 text-lg mb-10 max-w-md mx-auto">
            Tell us the problem. You talk directly to the person who builds the fix, and most go live in two to three weeks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-terracotta text-white font-instrument font-semibold text-sm transition-colors hover:bg-terracotta-deep"
            >
              Tell us your problem <ArrowRight size={15} />
            </Link>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-instrument font-semibold text-sm hover:border-white/50 hover:text-white transition-colors"
            >
              Browse ready-made products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
