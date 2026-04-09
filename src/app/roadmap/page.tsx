import { CheckCircle, Clock, Rocket, Globe } from "lucide-react";

const PHASES = [
  {
    id: "q2-2026",
    quarter: "Q2 2026",
    label: "NOW",
    status: "active",
    icon: Clock,
    title: "Core Stabilisation + First Revenue",
    description:
      "Focus on building solid foundations: stable deployments, paying customers, and a productized AI store that anyone can buy from.",
    items: [
      "Launch AI Product Store (this site)",
      "8 production-ready AI products live",
      "First paying customers onboarded",
      "Stripe + Supabase infrastructure stable",
      "Authority13 v1.0 public launch",
      "Community waitlist opens",
      "First 5 free SME chatbot deployments",
    ],
  },
  {
    id: "q3-2026",
    quarter: "Q3 2026",
    label: "NEXT",
    status: "upcoming",
    icon: Rocket,
    title: "AI Store Launch + Community",
    description:
      "Scale the store, grow the community, and launch the education programme. Begin building the certified partner network.",
    items: [
      "AI Learning Programme launches (free tier)",
      "Certified partner programme opens",
      "10+ products in the AI store",
      "White-label licensing programme",
      "CLAUDE.md workflow course launches",
      "First cohort of partner resellers",
      "IslandLoaf ecosystem expansion",
    ],
  },
  {
    id: "q4-2026",
    quarter: "Q4 2026",
    label: "BUILDING",
    status: "planned",
    icon: Rocket,
    title: "Autonomous Operations",
    description:
      "Authority13 reaches full autonomy. The agency itself runs on AI agents. Expand to 3 regional markets across Southeast Asia.",
    items: [
      "Authority13 v2.0 — full autonomous operations",
      "AI Code Agency itself runs on AIOS",
      "Regional expansion: Malaysia + Singapore",
      "Advanced SaaS tier launches",
      "API marketplace for AI building blocks",
      "50+ certified partners across Sri Lanka",
      "Revenue milestone: $50k MRR target",
    ],
  },
  {
    id: "2027",
    quarter: "2027",
    label: "VISION",
    status: "vision",
    icon: Globe,
    title: "Robotics + Regional Scale",
    description:
      "Phase 4 unlocked. Factory and IoT robotics for Sri Lankan manufacturing. Become the region's #1 AI development company.",
    items: [
      "Factory & IoT robotics — Phase 4 launch",
      "AI-powered manufacturing for Sri Lanka",
      "100+ certified partners regionally",
      "University partnership programme",
      "Government AI advisory role",
      "Series A funding consideration",
      "Southeast Asia's #1 AI agency",
    ],
  },
];

const statusStyles = {
  active:
    "border-brand-green bg-brand-green/10 text-brand-green",
  upcoming:
    "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan",
  planned:
    "border-brand-white/20 bg-brand-white/5 text-brand-white/60",
  vision:
    "border-brand-white/10 bg-brand-white/3 text-brand-white/40",
};

export default function RoadmapPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            WHERE WE&apos;RE GOING
          </span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-brand-white mt-3 mb-4">
            The Roadmap
          </h1>
          <p className="font-instrument text-brand-white/50 text-lg max-w-xl">
            Transparent. Ambitious. Built in public. Here&apos;s exactly where AI
            Code Agency is headed and how we plan to get there.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-border md:-translate-x-px" />

          <div className="space-y-12">
            {PHASES.map((phase, i) => (
              <div
                key={phase.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-brand-green border-2 border-brand-bg z-10" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`p-8 rounded-xl border ${
                      statusStyles[phase.status as keyof typeof statusStyles]
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-dm-mono text-xs tracking-widest font-bold px-2.5 py-1 rounded-full border border-current">
                        {phase.label}
                      </span>
                      <span className="font-syne font-black text-2xl text-brand-white">
                        {phase.quarter}
                      </span>
                    </div>

                    <h2 className="font-syne font-black text-xl text-brand-white mb-3">
                      {phase.title}
                    </h2>
                    <p className="font-instrument text-sm text-brand-white/60 leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-instrument text-sm text-brand-white/60"
                        >
                          {phase.status === "active" ? (
                            <CheckCircle
                              size={14}
                              className="text-brand-green mt-0.5 shrink-0"
                            />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-brand-white/20 shrink-0 mt-0.5" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="font-instrument text-brand-white/50 mb-6">
            Want to be part of the journey? Join our community or commission a
            build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/community"
              className="font-syne font-bold text-sm px-6 py-3 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all"
            >
              JOIN COMMUNITY
            </a>
            <a
              href="/services"
              className="font-syne font-bold text-sm px-6 py-3 border border-brand-border text-brand-white/80 rounded hover:border-brand-green/40 hover:text-brand-white transition-all"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
