import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "8+",      label: "Live platforms" },
  { value: "2–3 wks", label: "Average delivery" },
  { value: "Solo",    label: "Bootstrapped founder" },
  { value: "BYOK",    label: "Bring your own key" },
];

const SERVICES = [
  { num: "01", name: "AI Chatbots",              desc: "Claude & GPT-4 powered agents for booking, support, and sales.", tag: "Popular" },
  { num: "02", name: "AI Callbots",              desc: "Voice AI that answers calls, books appointments, and handles FAQs.", tag: "New" },
  { num: "03", name: "Custom SaaS Platforms",    desc: "Full-stack web applications built for scale.", tag: null },
  { num: "04", name: "Web Scrapers & Pipelines", desc: "Automated data collection. Google Maps, LinkedIn, directories.", tag: null },
  { num: "05", name: "Analytics Dashboards",     desc: "Real-time business intelligence with actionable insights.", tag: null },
  { num: "06", name: "AI Marketing Tools",       desc: "30 days of content in 10 minutes. Instagram, Facebook, SEO.", tag: null },
  { num: "07", name: "Business Automation",      desc: "Authority13 — a commander that delegates to specialist agents for marketing, ops, support, and analytics.", tag: "Flagship" },
  { num: "08", name: "Factory & IoT Robotics",   desc: "Phase 4 — industrial automation and smart manufacturing.", tag: "Soon" },
];

const STEPS = [
  { num: "01", title: "Buy the product",     desc: "Pick a ready-made AI tool from the store — chatbot, callbot, dashboard, or a full bundle." },
  { num: "02", title: "Plug in your key",    desc: "Bring your own API key. Your costs stay yours, your data stays yours. No middleman markup." },
  { num: "03", title: "Run autonomously",    desc: "Deploy in days, not months. The system works around the clock while you run the business." },
];

const WHY_POINTS = [
  "BYOK — bring your own API key, keep costs low",
  "White-label ready — resell as your own product",
  "Production code, not demos or prototypes",
  "Sri Lanka pricing — premium quality, accessible rates",
  "8+ live platforms already in production",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-0">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-terracotta inline-block" />
            AI development studio — Negombo, Sri Lanka
          </p>
          <h1 className="font-display font-semibold text-[13vw] sm:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] text-clay-deep max-w-4xl">
            We build AI that{" "}
            <em className="text-terracotta">actually works</em>.
          </h1>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <p className="font-instrument text-lg text-clay-mid leading-relaxed max-w-md">
              Chatbots, callbots, dashboards, automations — ready-to-deploy AI
              tools anyone can buy, plug in their API key, and run their
              business autonomously.
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link href="/store" className="btn-clay-dark inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm">
                Browse AI products <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-clay-light inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm">
                Commission a build
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

      {/* Services — numbered index */}
      <section id="services" className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">What we build</p>
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
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">How it works</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep mb-14">
            Buy. Plug in. <em className="text-terracotta">Run.</em>
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

      {/* Why us */}
      <section className="border-t border-clay-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-4">Why choose us</p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-clay-deep mb-6 leading-[1.05]">
                Built by a founder who <em className="text-terracotta">ships</em>.
              </h2>
              <p className="font-instrument text-clay-mid text-lg leading-relaxed mb-8 max-w-md">
                No agency bloat. No layers of management. We move fast, ship
                production-ready products, and charge honest prices.
              </p>
              <ul className="space-y-0 border-t border-clay-border">
                {WHY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 font-instrument text-clay-ink text-sm py-3.5 border-b border-clay-border">
                    <span className="text-terracotta font-dm-mono text-xs">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:mt-16">
              {[
                { label: "Avg delivery", value: "2–3 wks" },
                { label: "Tech stack",   value: "Next.js + AI" },
                { label: "Support",      value: "Direct founder" },
                { label: "Deployment",   value: "Vercel / AWS" },
              ].map((item) => (
                <div key={item.label} className="clay-card clay-card-hover p-7">
                  <div className="font-display font-semibold text-2xl text-clay-deep mb-1">{item.value}</div>
                  <div className="font-dm-mono text-[11px] text-clay-light tracking-[0.16em] uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-clay-border bg-clay-deep">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-28 text-center">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-6">Get started today</p>
          <h2 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-clay-bg mb-5">
            Ready to automate<br />your business<em className="text-terracotta">?</em>
          </h2>
          <p className="font-instrument text-white/50 text-lg mb-10 max-w-md mx-auto">
            Browse the AI product store. No code required — plug in your API
            key and go live.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-terracotta text-white font-instrument font-semibold text-sm transition-colors hover:bg-terracotta-deep"
            >
              Browse AI products <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-instrument font-semibold text-sm hover:border-white/50 hover:text-white transition-colors"
            >
              Commission a build
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
