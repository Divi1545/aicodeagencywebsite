import { CheckCircle, Clock, Rocket, Globe } from "lucide-react";

const PHASES = [
  { id: "q2-2026", quarter: "Q2 2026", label: "NOW", status: "active", icon: Clock,
    title: "Core Stabilisation + First Revenue",
    description: "Solid foundations: stable deployments, paying customers, and a productized AI store that anyone can buy from.",
    items: ["Launch AI Product Store (this site)", "8 production-ready AI products live", "First paying customers onboarded", "Stripe + Supabase infrastructure stable", "Authority13 v1.0 public launch", "Community waitlist opens", "First 5 free SME chatbot deployments"] },
  { id: "q3-2026", quarter: "Q3 2026", label: "NEXT", status: "upcoming", icon: Rocket,
    title: "AI Store Launch + Community",
    description: "Scale the store, grow the community, and launch the education programme. Begin building the certified partner network.",
    items: ["AI Learning Programme launches (free tier)", "Certified partner programme opens", "10+ products in the AI store", "White-label licensing programme", "CLAUDE.md workflow course launches", "First cohort of partner resellers", "IslandLoaf ecosystem expansion"] },
  { id: "q4-2026", quarter: "Q4 2026", label: "BUILDING", status: "planned", icon: Rocket,
    title: "Autonomous Operations",
    description: "Authority13 reaches full autonomy. The agency itself runs on AI agents. Expand to 3 regional markets.",
    items: ["Authority13 v2.0 — full autonomous operations", "AI Code Agency itself runs on AIOS", "Regional expansion: Malaysia + Singapore", "Advanced SaaS tier launches", "API marketplace for AI building blocks", "50+ certified partners across Sri Lanka", "Revenue milestone: $50k MRR target"] },
  { id: "2027", quarter: "2027", label: "VISION", status: "vision", icon: Globe,
    title: "Robotics + Regional Scale",
    description: "Phase 4 unlocked. Factory and IoT robotics for Sri Lankan manufacturing. Become the region's #1 AI development company.",
    items: ["Factory & IoT robotics — Phase 4 launch", "AI-powered manufacturing for Sri Lanka", "100+ certified partners regionally", "University partnership programme", "Government AI advisory role", "Series A funding consideration", "Southeast Asia's #1 AI agency"] },
];

export default function RoadmapPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="clay-tag">Where We&apos;re Going</span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-clay-deep mt-4 mb-4 tracking-tight">The Roadmap</h1>
          <p className="font-instrument text-clay-mid text-lg max-w-xl">
            Transparent. Ambitious. Built in public. Here&apos;s exactly where AI Code Agency is headed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-clay-border md:-translate-x-px" />
          <div className="space-y-10">
            {PHASES.map((phase, i) => (
              <div
                key={phase.id}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className={`absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-7 w-4 h-4 rounded-full border-2 z-10 ${phase.status === "active" ? "bg-clay-deep border-clay-deep" : "bg-clay-surface border-clay-border"}`} />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                  <div className={`clay-card p-8 ${phase.status === "active" ? "border-clay-deep" : ""}`}
                    style={phase.status === "active" ? { borderColor: "#1C1C1C" } : {}}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`clay-tag ${phase.status === "active" ? "bg-clay-deep text-white border-clay-deep" : ""}`}>{phase.label}</span>
                      <span className="font-syne font-black text-2xl text-clay-deep">{phase.quarter}</span>
                    </div>
                    <h2 className="font-syne font-black text-xl text-clay-deep mb-2">{phase.title}</h2>
                    <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-6">{phase.description}</p>
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 font-instrument text-sm text-clay-mid">
                          {phase.status === "active"
                            ? <CheckCircle size={14} className="text-clay-deep mt-0.5 shrink-0" />
                            : <span className="w-3.5 h-3.5 rounded-full border border-clay-border shrink-0 mt-0.5 inline-block" />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="font-instrument text-clay-mid mb-6">Want to be part of the journey? Join our community or commission a build.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/community" className="btn-clay-dark inline-flex px-6 py-3 text-sm">Join Community</a>
            <a href="/services" className="btn-clay-light inline-flex px-6 py-3 text-sm">View Services</a>
          </div>
        </div>
      </div>
    </div>
  );
}
