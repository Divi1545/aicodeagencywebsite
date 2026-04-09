import Link from "next/link";
import {
  Bot,
  Phone,
  LayoutDashboard,
  Database,
  BarChart3,
  Megaphone,
  Cpu,
  Wrench,
  ArrowRight,
  Zap,
} from "lucide-react";

const TICKER_ITEMS = [
  "AI CHATBOTS",
  "CALLBOTS",
  "SAAS PLATFORMS",
  "WEB SCRAPERS",
  "ANALYTICS DASHBOARDS",
  "MARKETING AUTOMATION",
  "AIOS SYSTEMS",
  "IOT ROBOTICS",
  "BYOK READY",
  "DEPLOY IN MINUTES",
];

const STATS = [
  { value: "8+", label: "Live Platforms" },
  { value: "Bootstrapped", label: "Zero VC Funding" },
  { value: "1", label: "Solo Founder" },
  { value: "∞", label: "Ambition" },
];

const SERVICES = [
  {
    icon: Bot,
    name: "AI Chatbots",
    desc: "Claude & GPT-4 powered conversational agents for booking, support, and sales.",
    tag: "Popular",
    tagColor: "text-brand-green border-brand-green",
  },
  {
    icon: Phone,
    name: "AI Callbots",
    desc: "Voice agents that answer calls, handle bookings, and respond to FAQs 24/7.",
    tag: "New",
    tagColor: "text-brand-cyan border-brand-cyan",
  },
  {
    icon: LayoutDashboard,
    name: "Custom SaaS Platforms",
    desc: "Full-stack web applications built for scale with modern architecture.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Database,
    name: "Web Scrapers & Pipelines",
    desc: "Automated data collection at scale. Google Maps, LinkedIn, directories.",
    tag: null,
    tagColor: "",
  },
  {
    icon: BarChart3,
    name: "Analytics Dashboards",
    desc: "Real-time business intelligence with beautiful, actionable insights.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Megaphone,
    name: "AI Marketing Tools",
    desc: "30 days of content in 10 minutes. Instagram, Facebook, email, SEO.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Cpu,
    name: "Business Automation (AIOS)",
    desc: "Authority13-powered agent teams that run your ops autonomously.",
    tag: "Flagship",
    tagColor: "text-brand-green border-brand-green",
  },
  {
    icon: Wrench,
    name: "Factory & IoT Robotics",
    desc: "Phase 4 — industrial automation and smart manufacturing systems.",
    tag: "Coming Soon",
    tagColor: "text-brand-white/40 border-brand-white/20",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/5">
            <Zap size={12} className="text-brand-green" />
            <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
              Sri Lanka&apos;s AI Development Company
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-syne font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 max-w-5xl">
            <span className="block text-brand-white">We Build AI</span>
            <span className="block text-gradient-green">That Actually</span>
            <span className="block text-brand-white">Works.</span>
          </h1>

          {/* Sub */}
          <p className="font-instrument text-lg sm:text-xl text-brand-white/60 max-w-2xl mb-10 leading-relaxed">
            Chatbots. Callbots. Dashboards. Automations. Ready-to-deploy AI
            tools anyone can buy, plug in their API key, and run their business
            autonomously.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/store"
              className="group inline-flex items-center gap-2 font-syne font-bold text-sm sm:text-base px-6 py-3.5 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all glow-green"
            >
              BROWSE AI PRODUCTS
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-syne font-bold text-sm sm:text-base px-6 py-3.5 border border-brand-border text-brand-white/80 rounded hover:border-brand-green/40 hover:text-brand-white transition-all"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative mt-auto border-t border-b border-brand-border bg-brand-surface/50 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-0">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 font-dm-mono text-xs tracking-[0.25em] text-brand-white/40 px-8"
              >
                {item}
                <span className="text-brand-green">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-brand-border bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-syne font-black text-3xl sm:text-4xl text-brand-green mb-1">
                  {stat.value}
                </div>
                <div className="font-dm-mono text-xs text-brand-white/40 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="mb-12">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            WHAT WE BUILD
          </span>
          <h2 className="font-syne font-black text-4xl sm:text-5xl text-brand-white mt-3">
            Our Services
          </h2>
          <p className="font-instrument text-brand-white/50 mt-3 max-w-xl">
            Everything you need to run an AI-first business. Commission a custom
            build or buy a ready-made product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group relative p-6 rounded-xl border border-brand-border bg-brand-surface/30 hover:border-brand-green/30 hover:bg-brand-surface/60 transition-all"
            >
              {service.tag && (
                <span
                  className={`absolute top-4 right-4 font-dm-mono text-[10px] border px-2 py-0.5 rounded-full ${service.tagColor}`}
                >
                  {service.tag}
                </span>
              )}
              <service.icon
                size={24}
                className="text-brand-green mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-syne font-bold text-base text-brand-white mb-2">
                {service.name}
              </h3>
              <p className="font-instrument text-sm text-brand-white/50 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-syne font-bold text-sm text-brand-green hover:gap-3 transition-all"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Marquee highlight band */}
      <section className="bg-brand-green py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 font-syne font-black text-brand-bg text-sm tracking-widest uppercase px-8"
            >
              BUY · DEPLOY · RUN AUTONOMOUSLY
              <span className="text-brand-bg/40">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
              WHY CHOOSE US
            </span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-brand-white mt-3 mb-6">
              Built by a founder
              <br />
              <span className="text-gradient-green">who ships.</span>
            </h2>
            <p className="font-instrument text-brand-white/60 text-lg leading-relaxed mb-6">
              We&apos;re not a big agency with layers of management. We&apos;re a solo
              founder-led studio that moves fast, ships working products, and
              charges fair prices.
            </p>
            <ul className="space-y-3">
              {[
                "BYOK — bring your own API key, keep your costs low",
                "White-label ready — resell as your own product",
                "Production-deployed code, not demos or prototypes",
                "Sri Lanka pricing — premium quality, accessible rates",
                "8+ live platforms already running in production",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 font-instrument text-brand-white/70 text-sm"
                >
                  <span className="text-brand-green mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Avg Delivery", value: "2–3 weeks" },
              { label: "Tech Stack", value: "Next.js + AI" },
              { label: "Support", value: "Direct Founder" },
              { label: "Deployment", value: "Vercel / AWS" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl border border-brand-border bg-brand-surface/30"
              >
                <div className="font-syne font-black text-2xl text-brand-white mb-1">
                  {item.value}
                </div>
                <div className="font-dm-mono text-xs text-brand-white/40 tracking-wider uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-2xl border border-brand-green/20 bg-brand-surface/50 p-12 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-green/5 blur-[80px] pointer-events-none" />
          <div className="relative">
            <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
              GET STARTED TODAY
            </span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-brand-white mt-4 mb-4">
              Ready to automate
              <br />
              your business?
            </h2>
            <p className="font-instrument text-brand-white/60 text-lg mb-8 max-w-xl mx-auto">
              Browse our AI product store and deploy your first tool today. No
              code required — just plug in your API key and go.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/store"
                className="group inline-flex items-center gap-2 font-syne font-bold text-base px-8 py-4 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all glow-green"
              >
                BROWSE AI PRODUCTS
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-syne font-bold text-base px-8 py-4 border border-brand-border text-brand-white/80 rounded hover:border-brand-green/40 hover:text-brand-white transition-all"
              >
                COMMISSION A BUILD
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
