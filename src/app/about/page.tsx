import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, MapPin } from "lucide-react";
import { LIVE_PLATFORMS } from "@/lib/platforms";
import { VENTURES } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "About — Who we are | AI Code Agency",
  description:
    "AI Code Agency (Pvt) Ltd is a one-founder AI studio in Negombo, Sri Lanka, run by Divindu Edirisinghe. We build and operate IslandLoaf and Authority13, and take on outside builds with the same stack.",
  openGraph: {
    title: "About — Who we are | AI Code Agency",
    description:
      "A one-founder AI studio in Negombo, Sri Lanka. Builder of IslandLoaf and Authority13.",
    url: "https://aicodeagency.org/about",
  },
};

const PRINCIPLES = [
  {
    num: "01",
    title: "Ship it or it doesn't count",
    desc: "A demo is not a product. Nothing on this site is a prototype, a pitch deck slide, or a thing that works on my laptop. It is deployed, it has users, and it breaks in public like real software does.",
  },
  {
    num: "02",
    title: "You own what we build",
    desc: "Your repository, your database, your API keys, your infrastructure. Bring your own key and the running cost stays yours with no markup in the middle. If you stop working with us, nothing stops working.",
  },
  {
    num: "03",
    title: "Talk to the builder",
    desc: "There is no account manager between you and the code. The person you brief is the person who writes it and the person who answers when something is wrong at 9pm.",
  },
  {
    num: "04",
    title: "Sri Lanka is the advantage, not the discount",
    desc: "Building here means a lower cost base — but the standard is set by the products we run ourselves, in production, for our own customers. You get the first, not a cheaper version of the second.",
  },
];

const TIMELINE = [
  {
    year: "2023",
    event: "Started AI Code Agency",
    desc: "Began building AI-powered web applications as a solo developer in Negombo, mostly for local businesses who had been quoted six figures elsewhere.",
  },
  {
    year: "2024",
    event: "First platforms went live",
    desc: "IslandLoaf, AutoBid LK and a run of smaller production builds shipped inside twelve months — the point at which this stopped being freelancing and started being a studio.",
  },
  {
    year: "2025",
    event: "Productised the stack",
    desc: "Turned the tooling we kept rebuilding for every client into ready-to-deploy products, and opened the store so a business could buy one outright instead of commissioning it.",
  },
  {
    year: "2026",
    event: "Two ventures, operated in-house",
    desc: "IslandLoaf went mobile on iOS and Android, and Authority13 turned from the internal system that runs this company into a product other founders can use.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-0">
      {/* ── WHO WE ARE ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-terracotta inline-block" />
          Who we are
        </p>
        <h1 className="font-display font-semibold text-[12vw] sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.02em] text-clay-deep max-w-3xl">
          Built in Sri Lanka.<br />
          <em className="text-terracotta">Built to ship.</em>
        </h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl">
          <p className="font-instrument text-lg text-clay-mid leading-relaxed">
            AI Code Agency (Pvt) Ltd is a one-founder AI studio in Negombo, Sri
            Lanka. We design, build, launch and then actually operate software —
            our own products first, and client work with the same stack.
          </p>
          <p className="font-instrument text-lg text-clay-mid leading-relaxed">
            That order matters. Everything we sell has already had to survive our
            own production: real users, real payments, real 3am incidents. It is
            a short list of things on purpose.
          </p>
        </div>
      </section>

      {/* ── HOW WE WORK ────────────────────────────────── */}
      <section className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">
            How we work
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep mb-12">
            Four things we <em className="text-terracotta">don&apos;t bend on</em>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-clay-border border border-clay-border">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="bg-clay-bg p-8 sm:p-10">
                <span className="font-dm-mono text-xs text-terracotta">{p.num}</span>
                <h3 className="font-display font-semibold text-2xl text-clay-deep mt-3 mb-3">
                  {p.title}
                </h3>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ───────────────────────────────────── */}
      <section id="founder" className="border-t border-clay-border bg-clay-surface scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-12 lg:gap-16">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">
                About me
              </p>
              <h2 className="font-display font-semibold text-5xl sm:text-6xl tracking-[-0.02em] text-clay-deep mb-4">
                Divindu Edirisinghe
              </h2>
              <div className="flex items-center gap-2 mb-8">
                <MapPin size={13} className="text-clay-light" />
                <span className="font-dm-mono text-xs text-clay-light">
                  Founder · Negombo, Sri Lanka
                </span>
              </div>

              <div className="space-y-5 max-w-2xl font-instrument text-clay-mid leading-relaxed">
                <p className="text-lg text-clay-ink">
                  I&apos;m a full-stack developer and AI engineer, and I run this
                  company on my own.
                </p>
                <p>
                  I got tired of waiting for the AI shift to reach Sri Lanka and
                  decided to build it here instead. Not chatbot wrappers and
                  screenshots — actual platforms, with payments, accounts,
                  dashboards, mobile apps, and everything that breaks the moment
                  a real person uses it.
                </p>
                <p>
                  Most of what I build starts as something I needed.{" "}
                  <Link href="/ventures#islandloaf" className="text-clay-deep underline decoration-clay-border underline-offset-4 hover:decoration-terracotta">IslandLoaf</Link>{" "}
                  exists because small Sri Lankan tourism businesses deserve a
                  Sri Lankan platform instead of renting their own customers back
                  from a foreign one.{" "}
                  <Link href="/ventures#authority13" className="text-clay-deep underline decoration-clay-border underline-offset-4 hover:decoration-terracotta">Authority13</Link>{" "}
                  exists because one founder cannot do marketing, ops, support and
                  engineering in the same week — so I built the AI operator that
                  now runs a good part of this company, and then made it a product.
                </p>
                <p>
                  I believe Sri Lanka can be a serious software country. We have
                  the engineers, the English, and the cost structure. What&apos;s
                  been missing is people shipping things people can see. That&apos;s
                  what I&apos;m trying to add.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/ventures" className="btn-clay-dark inline-flex items-center gap-2 px-6 py-3 text-sm">
                  What I&apos;m building <ArrowRight size={14} />
                </Link>
                <Link href="/services" className="btn-clay-light inline-flex items-center gap-2 px-6 py-3 text-sm">
                  Work with me
                </Link>
              </div>
            </div>

            {/* Photo + quick facts */}
            <aside className="lg:sticky lg:top-28 lg:self-start space-y-5">
              <div className="rounded-2xl overflow-hidden border border-clay-border bg-clay-card">
                <Image
                  src="/founder.jpg"
                  alt="Divindu Edirisinghe — founder of AI Code Agency"
                  width={480}
                  height={560}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="clay-card p-7">
                <dl className="border-t border-clay-border">
                  {[
                    { label: "Role", value: "Founder & engineer" },
                    { label: "Based in", value: "Negombo, LK" },
                    { label: "Ventures", value: "IslandLoaf · Authority13" },
                    { label: "Stack", value: "Next.js · Postgres · Claude" },
                    { label: "Company", value: "AI Code Agency (Pvt) Ltd" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-4 py-3 border-b border-clay-border">
                      <dt className="font-dm-mono text-[11px] uppercase tracking-[0.14em] text-clay-light">
                        {f.label}
                      </dt>
                      <dd className="font-instrument text-sm font-semibold text-clay-deep text-right">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── THE TWO VENTURES ───────────────────────────── */}
      <section className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">
                What we run
              </p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep">
                The two <em className="text-terracotta">ventures</em>.
              </h2>
            </div>
            <Link href="/ventures" className="font-instrument text-sm text-clay-mid hover:text-clay-deep inline-flex items-center gap-1.5 transition-colors shrink-0">
              Read both in full <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {VENTURES.map((v) => (
              <Link
                key={v.slug}
                href={`/ventures#${v.slug}`}
                className="clay-card clay-card-hover p-8 block group"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="font-dm-mono text-[11px] tracking-[0.18em] uppercase text-clay-light">
                    {v.kicker}
                  </span>
                  <span className="clay-tag">{v.stage}</span>
                </div>
                <h3 className="font-display font-semibold text-3xl text-clay-deep group-hover:text-terracotta transition-colors mb-3">
                  {v.name}
                </h3>
                <p className="font-instrument text-clay-ink leading-snug mb-4">{v.tagline}</p>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed">{v.body[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────── */}
      <section className="border-t border-clay-border bg-clay-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">
            Journey
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep mb-12">
            How we got <em className="text-terracotta">here</em>.
          </h2>
          <div className="border-t border-clay-border">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[4rem_1fr] sm:grid-cols-[6rem_18rem_1fr] gap-x-5 gap-y-1 items-baseline py-7 border-b border-clay-border"
              >
                <span className="font-dm-mono text-xs text-terracotta tracking-[0.14em]">{item.year}</span>
                <h3 className="font-display font-semibold text-xl text-clay-deep">{item.event}</h3>
                <p className="col-start-2 sm:col-start-3 font-instrument text-sm text-clay-mid leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER WORK ─────────────────────────────────── */}
      <section className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">
            Also built here
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep mb-3">
            The rest of the <em className="text-terracotta">shelf</em>.
          </h2>
          <p className="font-instrument text-clay-mid mb-12 max-w-xl">
            Products around the two ventures, plus client systems running quietly
            inside other people&apos;s businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LIVE_PLATFORMS.map((p) => (
              <div key={p.name} className="clay-card clay-card-hover p-7 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="clay-tag">{p.status}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-clay-deep mb-1.5">{p.name}</h3>
                <p className="font-instrument text-sm font-semibold text-clay-ink leading-snug mb-3">
                  {p.tagline}
                </p>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-5">
                  {p.description}
                </p>
                {p.url !== "#" && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 font-dm-mono text-xs text-clay-light hover:text-clay-deep transition-colors"
                  >
                    Visit <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SRI LANKA ──────────────────────────────── */}
      <section className="border-t border-clay-border bg-clay-deep">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-4">
                Why Sri Lanka
              </p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-bg mb-5 leading-[1.06]">
                A serious software country<em className="text-terracotta">.</em>
              </h2>
              <p className="font-instrument text-white/50 leading-relaxed max-w-md">
                Strong English, good engineers, and a cost base that lets a small
                team charge honestly for premium work. The talent was never the
                missing piece — visible, shipped products were.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center">
              {[
                { value: "UTC+5:30", label: "Timezone" },
                { value: "English",  label: "Working language" },
                { value: "Negombo",  label: "Where we are" },
                { value: "Remote",   label: "Clients worldwide" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="font-display font-semibold text-2xl text-white mb-1">{s.value}</div>
                  <div className="font-dm-mono text-[10px] text-white/35 uppercase tracking-[0.16em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
