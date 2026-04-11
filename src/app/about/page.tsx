import type { Metadata } from "next";
import { ExternalLink, MapPin, Zap } from "lucide-react";
import { LIVE_PLATFORMS } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "About — Live Platforms | AI Code Agency",
  description:
    "Live Sri Lanka platforms: IslandLoaf super app (tourism & local services), Authority13 AI workforce OS, AutoBid LK, IslandLoaf Creator, Moments spontaneous social layer, IslandLoaf Stay — built by AI Code Agency.",
  openGraph: {
    title: "About — Live Platforms | AI Code Agency",
    description:
      "IslandLoaf, Authority13, AutoBid LK, IslandLoaf Creator, Moments, IslandLoaf Stay — production stack from Negombo, Sri Lanka.",
  },
};

const TIMELINE = [
  { year: "2023", event: "Founded AI Code Agency", desc: "Started building AI-powered web applications as a solo founder in Negombo." },
  { year: "2024", event: "First SaaS platforms launched", desc: "IslandLoaf super app (tourism & local services), Authority13, AutoBid LK, and companion IslandLoaf products (Stay, Creator, Moments) went live — multiple production surfaces in 12 months." },
  { year: "2025", event: "AI Product Store launched", desc: "Productized the tech stack. Began selling ready-to-deploy AI tools to SMEs globally." },
  { year: "2026", event: "Scaling globally", desc: "Community programme, certifications, and regional expansion across Southeast Asia." },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="clay-tag">Our Story</span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-clay-deep mt-4 mb-6 tracking-tight">
            Built in Sri Lanka.<br />
            <span className="text-gradient-dark">Built to ship.</span>
          </h1>
          <p className="font-instrument text-lg text-clay-mid leading-relaxed mb-4">
            AI Code Agency was founded by Divindu Edirisinghe in Negombo, Sri Lanka — a solo developer who got tired of waiting for the AI revolution to arrive and decided to build it instead.
          </p>
          <p className="font-instrument text-lg text-clay-mid leading-relaxed">
            We started by building production AI applications for local businesses. Then we productized our tools so anyone — anywhere — can buy, plug in their API key, and run their business autonomously.
          </p>
        </div>

        {/* Founder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-24 border-b border-clay-border">
          <div>
            <span className="clay-tag">The Founder</span>
            <h2 className="font-syne font-black text-3xl sm:text-4xl text-clay-deep mt-4 mb-3 tracking-tight">Divindu Edirisinghe</h2>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={13} className="text-clay-light" />
              <span className="font-dm-mono text-xs text-clay-light">Negombo, Sri Lanka 🇱🇰</span>
            </div>
            <p className="font-instrument text-clay-mid leading-relaxed mb-4">
              Full-stack developer and AI engineer. I build things that actually work — not demos, not MVPs-that-never-ship, not slide decks. Real platforms with real users.
            </p>
            <p className="font-instrument text-clay-mid leading-relaxed mb-7">
              I believe Sri Lanka is positioned to become Southeast Asia&apos;s AI development hub. We have the talent, the cost advantage, and the ambition. We just need to build.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[{ value: "8+", label: "Platforms Built" }, { value: "3+", label: "Years Building" }, { value: "Solo", label: "Bootstrapped" }].map((s) => (
                <div key={s.label} className="clay-card p-4 text-center">
                  <div className="font-syne font-black text-xl text-clay-deep">{s.value}</div>
                  <div className="font-dm-mono text-[10px] text-clay-light uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div
              className="w-full aspect-square max-w-sm rounded-[2rem] border border-clay-border bg-clay-faint flex flex-col items-center justify-center"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(145deg, #f0efe9, #e2e1d8)", boxShadow: "4px 4px 16px rgba(0,0,0,0.08), -2px -2px 8px rgba(255,255,255,0.9)" }}
              >
                <Zap size={28} className="text-clay-charcoal" />
              </div>
              <p className="font-dm-mono text-xs text-clay-light text-center px-8">[Founder photo — add to /public/founder.jpg]</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <span className="clay-tag">Journey</span>
          <h2 className="font-syne font-black text-3xl sm:text-4xl text-clay-deep mt-4 mb-10 tracking-tight">How We Got Here</h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-clay-border" />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-6 relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{ background: "linear-gradient(145deg, #f0efe9, #e0dfd6)", boxShadow: "3px 3px 10px rgba(0,0,0,0.08), -1px -1px 4px rgba(255,255,255,0.9)" }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-clay-deep" />
                  </div>
                  <div className="pb-2">
                    <span className="font-dm-mono text-xs text-clay-mid tracking-wider">{item.year}</span>
                    <h3 className="font-syne font-bold text-base text-clay-deep mt-0.5 mb-1">{item.event}</h3>
                    <p className="font-instrument text-sm text-clay-mid">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Platforms */}
        <div className="mb-24">
          <span className="clay-tag">Portfolio</span>
          <h2 className="font-syne font-black text-3xl sm:text-4xl text-clay-deep mt-4 mb-3 tracking-tight">Live Platforms</h2>
          <p className="font-instrument text-clay-mid mb-10">Real products, live in production, built entirely by AI Code Agency.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LIVE_PLATFORMS.map((p) => (
              <div key={p.name} className="clay-card clay-card-hover p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="clay-tag">{p.status}</span>
                </div>
                <h3 className="font-syne font-bold text-base text-clay-deep mb-1">{p.name}</h3>
                <p className="font-syne font-semibold text-xs text-clay-deep/90 leading-snug mb-2">{p.tagline}</p>
                <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-4">{p.description}</p>
                <a href={p.url} className="inline-flex items-center gap-1.5 font-dm-mono text-xs text-clay-light hover:text-clay-deep transition-colors">
                  Visit Platform <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Sri Lanka */}
        <div
          className="rounded-[2rem] p-10 sm:p-12"
          style={{ background: "linear-gradient(145deg, #1C1C1C 0%, #0D0D0D 100%)", boxShadow: "0 28px 80px rgba(0,0,0,0.16), 0 8px 28px rgba(0,0,0,0.10)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="clay-tag border-white/10 text-white/40">Why Sri Lanka</span>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-white mt-4 mb-4 tracking-tight">
                Southeast Asia&apos;s AI<br />Development Hub
              </h2>
              <p className="font-instrument text-white/50 leading-relaxed">
                Strong English literacy, world-class graduates, and a cost structure that lets us deliver premium products at accessible prices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "95%",       label: "English Literacy" },
                { value: "50%",       label: "Lower Cost vs. US" },
                { value: "UTC+5:30",  label: "Timezone" },
                { value: "Growing",   label: "Tech Ecosystem" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
                  <div className="font-syne font-black text-xl text-white mb-1">{s.value}</div>
                  <div className="font-dm-mono text-[10px] text-white/35 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
