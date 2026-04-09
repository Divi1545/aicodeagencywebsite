import Link from "next/link";
import {
  Bot, Phone, LayoutDashboard, Database,
  BarChart3, Megaphone, Cpu, Wrench, ArrowRight,
} from "lucide-react";

const TICKER_ITEMS = [
  "AI CHATBOTS", "CALLBOTS", "SAAS PLATFORMS",
  "WEB SCRAPERS", "ANALYTICS DASHBOARDS",
  "MARKETING AUTOMATION", "AIOS SYSTEMS",
  "BYOK READY", "DEPLOY IN MINUTES",
];

const STATS = [
  { value: "8+",      label: "Live Platforms" },
  { value: "Solo",    label: "Bootstrapped Founder" },
  { value: "2–3 wks", label: "Avg Delivery" },
  { value: "∞",       label: "Ambition" },
];

const SERVICES = [
  { icon: Bot,             name: "AI Chatbots",              desc: "Claude & GPT-4 powered agents for booking, support, and sales.", tag: "Popular" },
  { icon: Phone,           name: "AI Callbots",              desc: "Voice AI that answers calls, books appointments, and handles FAQs.", tag: "New" },
  { icon: LayoutDashboard, name: "Custom SaaS Platforms",    desc: "Full-stack web applications built for scale.", tag: null },
  { icon: Database,        name: "Web Scrapers & Pipelines", desc: "Automated data collection. Google Maps, LinkedIn, directories.", tag: null },
  { icon: BarChart3,       name: "Analytics Dashboards",     desc: "Real-time business intelligence with actionable insights.", tag: null },
  { icon: Megaphone,       name: "AI Marketing Tools",       desc: "30 days of content in 10 minutes. Instagram, Facebook, SEO.", tag: null },
  { icon: Cpu,             name: "Business Automation",      desc: "Authority13-powered agent teams that run your ops autonomously.", tag: "Flagship" },
  { icon: Wrench,          name: "Factory & IoT Robotics",   desc: "Phase 4 — industrial automation and smart manufacturing.", tag: "Soon" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-stone-200/60 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full bg-stone-300/40 blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-7 clay-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-clay-deep inline-block" />
                Sri Lanka&apos;s AI Development Company
              </div>
              <h1 className="font-syne font-black text-5xl sm:text-6xl md:text-7xl leading-[0.93] tracking-[-0.03em] text-clay-deep mb-6">
                We Build AI<br />
                <span className="text-gradient-dark">That Actually</span><br />
                Works.
              </h1>
              <p className="font-instrument text-lg text-clay-mid leading-relaxed mb-8 max-w-lg">
                Chatbots. Callbots. Dashboards. Automations. Ready-to-deploy AI tools anyone can buy, plug in their API key, and run their business autonomously.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/store" className="btn-clay-dark inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm">
                  Browse AI Products <ArrowRight size={14} />
                </Link>
                <a href="#services" className="btn-clay-light inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm">
                  View Services
                </a>
              </div>
              <p className="mt-6 font-dm-mono text-xs text-clay-light tracking-wider">
                8+ production platforms · Bootstrapped · Negombo, Sri Lanka 🇱🇰
              </p>
            </div>

            {/* 3D CSS Orb */}
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float-slow">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(ellipse at 35% 30%, #ffffff 0%, #d0cfc6 40%, #a8a79e 70%, #5c5c5c 100%)",
                    boxShadow: "0 40px 100px rgba(0,0,0,0.20), 0 12px 40px rgba(0,0,0,0.12), inset -20px -20px 60px rgba(0,0,0,0.15), inset 10px 10px 40px rgba(255,255,255,0.6)",
                  }}
                />
                <div
                  className="orb-ring animate-spin-slow"
                  style={{ width: "120%", height: "120%", transform: "translate(-50%,-50%) rotateX(70deg)" }}
                />
                <div
                  className="orb-ring animate-spin-reverse"
                  style={{ width: "140%", height: "140%", transform: "translate(-50%,-50%) rotateX(70deg) rotateZ(45deg)", borderColor: "rgba(28,28,28,0.05)" }}
                />
                <div className="absolute -top-4 -right-4 glass-panel rounded-2xl px-3.5 py-2 shadow-clay-md">
                  <span className="font-dm-mono text-[11px] text-clay-deep tracking-wider">BYOK READY</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl px-3.5 py-2 shadow-clay-md">
                  <span className="font-dm-mono text-[11px] text-clay-deep tracking-wider">DEPLOY IN DAYS</span>
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 glass-panel rounded-2xl px-3.5 py-2 shadow-clay-md">
                  <span className="font-dm-mono text-[11px] text-clay-deep tracking-wider">8+ LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-clay-border bg-clay-surface/60 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-5 font-dm-mono text-[11px] tracking-[0.2em] text-clay-light px-8">
                {item} <span className="text-clay-border">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-clay-surface border-y border-clay-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-syne font-black text-3xl sm:text-4xl text-clay-deep mb-1">{s.value}</div>
                <div className="font-dm-mono text-[11px] text-clay-light tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-14">
          <span className="clay-tag">What We Build</span>
          <h2 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mt-4 mb-3 tracking-tight">Our Services</h2>
          <p className="font-instrument text-clay-mid max-w-lg">Commission a custom build or buy a ready-made product and deploy today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <div key={s.name} className="clay-card clay-card-hover relative p-6">
              {s.tag && <span className="clay-tag absolute top-4 right-4">{s.tag}</span>}
              <div
                className="w-11 h-11 rounded-2xl mb-5 flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #f8f8f5, #e8e7e0)",
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.9)",
                }}
              >
                <s.icon size={20} className="text-clay-charcoal" />
              </div>
              <h3 className="font-syne font-bold text-[15px] text-clay-deep mb-2">{s.name}</h3>
              <p className="font-instrument text-sm text-clay-mid leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-clay-light inline-flex items-center gap-2 px-6 py-3 text-sm">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Marquee band */}
      <section className="bg-clay-deep py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 font-syne font-black text-white/80 text-sm tracking-widest uppercase px-10">
              BUY · DEPLOY · RUN AUTONOMOUSLY <span className="text-white/20">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="clay-tag">Why Choose Us</span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mt-4 mb-5 tracking-tight leading-[1.0]">
              Built by a founder<br /><span className="text-gradient-warm">who ships.</span>
            </h2>
            <p className="font-instrument text-clay-mid text-lg leading-relaxed mb-7">
              No agency bloat. No layers of management. We move fast, ship production-ready products, and charge honest prices.
            </p>
            <ul className="space-y-3.5">
              {[
                "BYOK — bring your own API key, keep costs low",
                "White-label ready — resell as your own product",
                "Production code, not demos or prototypes",
                "Sri Lanka pricing — premium quality, accessible rates",
                "8+ live platforms already in production",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 font-instrument text-clay-mid text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] text-white" style={{ background: "#1C1C1C", boxShadow: "0 2px 6px rgba(0,0,0,0.18)" }}>✓</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Avg Delivery", value: "2–3 wks" },
              { label: "Tech Stack",   value: "Next.js + AI" },
              { label: "Support",      value: "Direct Founder" },
              { label: "Deployment",   value: "Vercel / AWS" },
            ].map((item) => (
              <div key={item.label} className="clay-card p-7 text-center clay-card-hover">
                <div className="font-syne font-black text-2xl text-clay-deep mb-1">{item.value}</div>
                <div className="font-dm-mono text-[11px] text-clay-light tracking-widest uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div
          className="relative rounded-[2rem] overflow-hidden text-center px-8 py-20 sm:py-24"
          style={{
            background: "linear-gradient(145deg, #1C1C1C 0%, #0D0D0D 100%)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.22), 0 12px 40px rgba(0,0,0,0.12)",
          }}
        >
          <div className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full bg-white/[0.03]" />
          <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 rounded-full bg-white/[0.02]" />
          <div className="relative">
            <span className="clay-tag mb-6 inline-block border-white/10 text-white/40">GET STARTED TODAY</span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white mb-4 tracking-tight">
              Ready to automate<br />your business?
            </h2>
            <p className="font-instrument text-white/50 text-lg mb-10 max-w-md mx-auto">
              Browse our AI product store. No code required — plug in your API key and go live.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-clay-deep font-syne font-bold text-sm transition-all hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }}
              >
                Browse AI Products <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 font-syne font-bold text-sm hover:border-white/30 hover:text-white transition-all"
              >
                Commission a Build
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
