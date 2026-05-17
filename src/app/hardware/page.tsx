import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TICKER_ITEMS = [
  "AI CONCIERGE",
  "40 LANGUAGES",
  "OFFLINE LLM",
  "FREE HARDWARE",
  "CLOUD LOCKED",
  "ESP32-S3",
  "ROCKCHIP RK3588",
  "SUBSCRIBE & DEPLOY",
];

const STATS = [
  { value: "40+",   label: "Languages" },
  { value: "$35",   label: "Hardware Cost" },
  { value: "100%",  label: "Offline Option" },
  { value: "9",     label: "Product Lines" },
];

const PRODUCTS = [
  {
    badge: "BESTSELLER",
    title: "AiDesk S1",
    subtitle: "Lobby Concierge",
    description:
      "ESP32-S3 robot face box. Hotel and office lobby AI assistant. 40 languages. Powered by Claude AI. Visitor chat, FAQ, booking integration.",
    price: "From $100/mo",
  },
  {
    badge: "OFFLINE",
    title: "AiCore Pro",
    subtitle: "Private LLM Box",
    description:
      "Rockchip RK3588. 16GB RAM. 6 TOPS NPU. Runs Qwen 3B fully offline. For banks, hospitals, law firms. Your data never leaves the building.",
    price: "From $300/mo or $1,200 one-time",
  },
  {
    badge: "NEW",
    title: "AiVoice Home",
    subtitle: "Offline Speaker",
    description:
      "Wake word activated. No Alexa. No Google. Fully local voice AI. Sinhala + English + 38 other languages. 5W power draw.",
    price: "$280 one-time",
  },
  {
    badge: "ENTERPRISE",
    title: "AiGuard",
    subtitle: "Vision AI",
    description:
      "Offline face recognition, perimeter alerts, visitor logging. RK3588 NPU handles everything on-device. No footage goes to the cloud.",
    price: "From $500/mo",
  },
  {
    badge: "NEW",
    title: "AiDoc Vault",
    subtitle: "Document AI",
    description:
      "Feed it your PDFs, contracts, and records. Query privately offline. Built for legal firms, clinics, and government offices.",
    price: "$800 one-time",
  },
  {
    badge: "SOON",
    title: "AiClassroom",
    subtitle: "Offline Tutor",
    description:
      "AI tutor for schools with unreliable internet. Local LLM, Sinhala curriculum support, runs on 15W.",
    price: "Coming soon",
  },
];

const REGIONS = [
  { region: "Sri Lanka",        price: "$100–150/mo",    badge: "LOCAL" },
  { region: "Southeast Asia",   price: "$250–350/mo",    badge: "APAC" },
  { region: "Middle East",      price: "$600–800/mo",    badge: "PREMIUM" },
  { region: "Europe / UK",      price: "$800–1,200/mo",  badge: "PREMIUM" },
  { region: "USA / Canada",     price: "$1,000–1,500/mo", badge: "ENTERPRISE" },
  { region: "Australia / NZ",   price: "$600–900/mo",    badge: "PREMIUM" },
];

const INCLUDED = [
  "Physical AI box — hardware delivered free on subscription",
  "Full dashboard access — manage your device from anywhere",
  "40+ language voice support — Claude AI backend",
  "LED status lighting — glows green when active, red when lapsed",
  "Firmware OTA updates — always on the latest build",
  "Conversation history & analytics",
  "Cloud-lock — box goes dark if subscription lapses",
  "IslandLoaf & booking system integration (optional)",
  "On-site installation available in Sri Lanka",
];

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16" style={{ overflow: "clip" }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-stone-200/60 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full bg-stone-300/40 blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-7 clay-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-deep inline-block" />
              Physical AI. Built for Buildings.
            </div>
            <h1 className="font-syne font-black text-5xl sm:text-6xl md:text-7xl leading-[0.93] tracking-[-0.03em] text-clay-deep mb-6">
              AI Hardware.<br />
              <span className="text-gradient-dark">Deployed in</span><br />
              Your Building.
            </h1>
            <p className="font-instrument text-lg text-clay-mid leading-relaxed mb-8 max-w-xl">
              Pre-configured AI concierge boxes built on Chinese silicon. 40+ languages. Cloud-locked subscription. Free hardware on every plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-clay-dark inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm">
                Get a Quote <ArrowRight size={14} />
              </Link>
              <a href="#products" className="btn-clay-light inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm">
                See All Products
              </a>
            </div>
            <p className="mt-6 font-dm-mono text-xs text-clay-light tracking-wider">
              Ships from Galle, Sri Lanka 🇱🇰 · Free hardware on subscription plans
            </p>
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

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-14">
          <span className="clay-tag">Product Range</span>
          <h2 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mt-4 mb-3 tracking-tight leading-[1.05]">
            Three systems.<br />One mission.
          </h2>
          <p className="font-instrument text-clay-mid max-w-lg">
            Every box is pre-flashed, pre-tested, and ready to deploy. Subscribe and ship — or buy outright.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.title} className="clay-card clay-card-hover relative p-6 flex flex-col">
              <span className="clay-tag absolute top-4 right-4">{p.badge}</span>
              <div
                className="w-11 h-11 rounded-2xl mb-5 flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(145deg, #f8f8f5, #e8e7e0)",
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.9)",
                }}
              >
                <span className="font-syne font-black text-[11px] text-clay-charcoal">AI</span>
              </div>
              <h3 className="font-syne font-bold text-[15px] text-clay-deep mb-0.5">{p.title}</h3>
              <p className="font-dm-mono text-[10px] text-clay-light tracking-widest uppercase mb-3">{p.subtitle}</p>
              <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-5 flex-1">{p.description}</p>
              <div className="pt-4 border-t border-clay-border">
                <span className="font-syne font-bold text-sm text-clay-deep">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee band */}
      <section className="bg-clay-deep py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 font-syne font-black text-white/80 text-sm tracking-widest uppercase px-10">
              SUBSCRIBE · DEPLOY · OWN YOUR AI <span className="text-white/20">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Regional Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-14">
          <span className="clay-tag">Global Pricing</span>
          <h2 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mt-4 mb-3 tracking-tight leading-[1.05]">
            One box.<br />Priced for<br />your market.
          </h2>
          <p className="font-instrument text-clay-mid max-w-lg">
            Same hardware. Same dashboard. Priced by region so every market gets fair access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {REGIONS.map((r) => (
            <div key={r.region} className="clay-card clay-card-hover relative p-6">
              <span className="clay-tag absolute top-4 right-4">{r.badge}</span>
              <div className="font-syne font-bold text-[15px] text-clay-deep mb-1 pr-16">{r.region}</div>
              <div className="font-syne font-black text-2xl text-clay-deep">{r.price}</div>
            </div>
          ))}
        </div>

        <div className="clay-card p-6 border border-clay-border">
          <p className="font-instrument text-sm text-clay-mid leading-relaxed">
            All plans include: physical hardware (free), dashboard access, 40-language Claude AI backend, firmware updates, conversation analytics, and cloud-lock subscription management.
          </p>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="clay-tag">What You Get</span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mt-4 mb-5 tracking-tight leading-[1.0]">
              Everything included.<br /><span className="text-gradient-warm">Nothing to configure.</span>
            </h2>
            <p className="font-instrument text-clay-mid text-lg leading-relaxed mb-7">
              Every box ships pre-flashed and cloud-paired. Plug it in, connect to Wi-Fi, and your AI concierge goes live in minutes.
            </p>
            <ul className="space-y-3.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 font-instrument text-clay-mid text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] text-white" style={{ background: "#1C1C1C", boxShadow: "0 2px 6px rgba(0,0,0,0.18)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Setup Time",    value: "< 1 hr" },
              { label: "Power Draw",    value: "5–15W" },
              { label: "Languages",     value: "40+" },
              { label: "Data Location", value: "On-Device" },
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
            <span className="clay-tag mb-6 inline-block border-white/10 text-white/40">DEPLOY YOUR FIRST BOX</span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white mb-4 tracking-tight">
              Ready to deploy<br />AI in your<br />building?
            </h2>
            <p className="font-instrument text-white/50 text-lg mb-10 max-w-md mx-auto">
              Order your first box. Free hardware on all subscription plans. Ships from Galle, Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-clay-deep font-syne font-bold text-sm transition-all hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }}
              >
                Get a Quote <ArrowRight size={14} />
              </Link>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 font-syne font-bold text-sm hover:border-white/30 hover:text-white transition-all"
              >
                See All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
