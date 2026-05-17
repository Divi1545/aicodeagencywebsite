import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TICKER_ITEMS = [
  "AI CONCIERGE",
  "40 LANGUAGES",
  "OFFLINE INTELLIGENCE",
  "FREE HARDWARE",
  "CLOUD LOCKED",
  "ENTERPRISE GRADE",
  "EDGE AI",
  "SUBSCRIBE & DEPLOY",
];

const STATS = [
  { value: "40+",  label: "Languages" },
  { value: "Zero", label: "Cloud Exposure" },
  { value: "100%", label: "Offline Capable" },
  { value: "9",    label: "Product Lines" },
];

const PRODUCTS = [
  {
    badge: "BESTSELLER",
    title: "AiDesk S1",
    subtitle: "Lobby Concierge",
    description:
      "Compact AI concierge designed for hotel and office lobbies. Handles visitor check-in, FAQ, booking integrations, and live chat across 40 languages — powered by Claude AI.",
    price: "From $399/mo",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3D4qFT2UAJY0w5nC1lP9i4k8xxe/hf_20260517_060903_56108a47-13f3-4e0e-8f1a-6a010321635b.png",
    hasImage: true,
  },
  {
    badge: "OFFLINE",
    title: "AiCore Pro",
    subtitle: "Private LLM Box",
    description:
      "On-device large language model with 16GB RAM and a dedicated neural processing unit. Runs a full AI assistant entirely air-gapped. For banks, hospitals, and law firms. Your data never leaves the building.",
    price: "From $799/mo or $3,500 one-time",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3D4qFT2UAJY0w5nC1lP9i4k8xxe/hf_20260517_060755_36d70964-1d75-4b69-a125-c1dafdfd5aec.png",
    hasImage: true,
  },
  {
    badge: "NEW",
    title: "AiVoice Home",
    subtitle: "Offline Speaker",
    description:
      "Wake-word activated. No Alexa. No Google. Fully local voice AI running on-device. Sinhala, English, and 38 other languages. 5W power draw.",
    price: "$590 one-time",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3D4qFT2UAJY0w5nC1lP9i4k8xxe/hf_20260517_060757_45421c66-f19b-42ea-b000-e79beb51720e.png",
    hasImage: true,
  },
  {
    badge: "ENTERPRISE",
    title: "AiGuard",
    subtitle: "Vision AI",
    description:
      "Offline face recognition, perimeter alerts, and visitor logging — all processed on-device by a dedicated vision NPU. No footage is ever sent to the cloud.",
    price: "From $999/mo",
    image: null,
    hasImage: false,
  },
  {
    badge: "NEW",
    title: "AiDoc Vault",
    subtitle: "Document AI",
    description:
      "Feed it your PDFs, contracts, and records. Query your entire document library privately, offline. Built for legal firms, clinics, and government offices.",
    price: "$1,800 one-time",
    image: null,
    hasImage: false,
  },
  {
    badge: "SOON",
    title: "AiClassroom",
    subtitle: "Offline Tutor",
    description:
      "AI tutor for schools with unreliable internet. On-device language model, Sinhala curriculum support, 15W power draw. Designed to work anywhere.",
    price: "Coming soon",
    image: null,
    hasImage: false,
  },
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
              Enterprise-grade AI concierge devices. 40+ languages. Air-gapped offline option. Free hardware on every subscription plan.
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
              Ships from Galle, Sri Lanka 🇱🇰 · Free hardware on all subscription plans
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
            Six devices.<br />One mission.
          </h2>
          <p className="font-instrument text-clay-mid max-w-lg">
            Every box is pre-configured and ready to deploy. Subscribe and receive the hardware free — or purchase outright.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.title} className="clay-card clay-card-hover relative flex flex-col overflow-hidden">
              {/* Product image */}
              {p.hasImage && p.image ? (
                <div className="relative w-full h-52 bg-clay-faint overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-52 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, #f8f8f5, #e8e7e0)",
                  }}
                >
                  <span className="font-syne font-black text-2xl text-clay-border">{p.title}</span>
                </div>
              )}

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <span className="clay-tag absolute top-4 right-4">{p.badge}</span>
                <h3 className="font-syne font-bold text-[15px] text-clay-deep mb-0.5 pr-16">{p.title}</h3>
                <p className="font-dm-mono text-[10px] text-clay-light tracking-widest uppercase mb-3">{p.subtitle}</p>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-5 flex-1">{p.description}</p>
                <div className="pt-4 border-t border-clay-border flex items-center justify-between">
                  <span className="font-syne font-bold text-sm text-clay-deep">{p.price}</span>
                  {p.price !== "Coming soon" && (
                    <Link href="/contact" className="font-dm-mono text-[10px] tracking-widest text-clay-mid hover:text-clay-deep transition-colors uppercase">
                      Enquire →
                    </Link>
                  )}
                </div>
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

      {/* Included note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
