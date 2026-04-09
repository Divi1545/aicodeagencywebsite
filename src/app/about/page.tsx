import { ExternalLink, MapPin, Zap } from "lucide-react";

const PLATFORMS = [
  {
    name: "IslandLoaf",
    emoji: "🍞",
    description:
      "Sri Lanka's first AI-powered artisan food marketplace. Connecting local bakers, chefs, and food creators with customers island-wide.",
    url: "#",
    status: "Live",
  },
  {
    name: "Authority13",
    emoji: "🤖",
    description:
      "AI workforce SaaS. Deploy autonomous agent teams that run your business operations — outreach, reporting, follow-ups, and more.",
    url: "#",
    status: "Live",
  },
  {
    name: "AutoBid LK",
    emoji: "🔨",
    description:
      "Real-time online auction platform for Sri Lanka. Live bidding, countdown timers, and secure payments.",
    url: "#",
    status: "Live",
  },
  {
    name: "IslandLoaf Creator",
    emoji: "🎬",
    description:
      "Influencer & creator marketplace for Sri Lanka's food and lifestyle creators. Campaign management and analytics included.",
    url: "#",
    status: "Live",
  },
  {
    name: "Moments by IslandLoaf",
    emoji: "📸",
    description:
      "AI-powered event photography marketplace. Book photographers, receive AI-edited galleries, and share moments instantly.",
    url: "#",
    status: "Live",
  },
  {
    name: "IslandLoaf Stay",
    emoji: "🏠",
    description:
      "Boutique accommodation booking platform for Sri Lanka. Direct bookings, no commission layers, AI-powered recommendations.",
    url: "#",
    status: "Live",
  },
];

const TIMELINE = [
  {
    year: "2023",
    event: "Founded AI Code Agency",
    desc: "Started building AI-powered web applications as a solo founder in Negombo.",
  },
  {
    year: "2024",
    event: "First SaaS platforms launched",
    desc: "IslandLoaf, Authority13, and AutoBid LK went live. 3 production platforms in 12 months.",
  },
  {
    year: "2025",
    event: "AI Product Store launched",
    desc: "Productized the tech stack. Began selling ready-to-deploy AI tools to SMEs globally.",
  },
  {
    year: "2026",
    event: "Scaling globally",
    desc: "Community programme, certifications, and regional expansion across Southeast Asia.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            OUR STORY
          </span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-brand-white mt-3 mb-6">
            Built in Sri Lanka.
            <br />
            <span className="text-gradient-green">Built to ship.</span>
          </h1>
          <p className="font-instrument text-lg text-brand-white/60 leading-relaxed mb-4">
            AI Code Agency was founded by Divindu Edirisinghe in Negombo, Sri
            Lanka — a solo developer who got tired of waiting for the AI
            revolution to arrive and decided to build it instead.
          </p>
          <p className="font-instrument text-lg text-brand-white/60 leading-relaxed">
            We started by building production AI applications for local
            businesses. Then we productized our tools so anyone — anywhere — can
            buy, plug in their API key, and run their business autonomously.
          </p>
        </div>

        {/* Founder section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-24 border-b border-brand-border">
          <div>
            <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
              THE FOUNDER
            </span>
            <h2 className="font-syne font-black text-3xl sm:text-4xl text-brand-white mt-3 mb-4">
              Divindu Edirisinghe
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-brand-white/40" />
              <span className="font-dm-mono text-xs text-brand-white/40">
                Negombo, Sri Lanka 🇱🇰
              </span>
            </div>
            <p className="font-instrument text-brand-white/60 leading-relaxed mb-4">
              Full-stack developer and AI engineer. I build things that actually
              work — not demos, not MVPs-that-never-ship, not slide decks. Real
              platforms with real users.
            </p>
            <p className="font-instrument text-brand-white/60 leading-relaxed mb-6">
              I believe Sri Lanka is positioned to become Southeast Asia&apos;s AI
              development hub. We have the talent, the cost advantage, and the
              ambition. We just need to build.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "8+", label: "Platforms Built" },
                { value: "3+", label: "Years Building" },
                { value: "Solo", label: "Bootstrapped" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-brand-border bg-brand-surface/30 text-center"
                >
                  <div className="font-syne font-black text-xl text-brand-green">
                    {stat.value}
                  </div>
                  <div className="font-dm-mono text-[10px] text-brand-white/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Photo placeholder */}
          <div className="relative">
            <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl border border-brand-green/20 bg-brand-surface/30 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center mb-4">
                <Zap size={32} className="text-brand-green" />
              </div>
              <p className="font-dm-mono text-xs text-brand-white/30 text-center px-8">
                [Founder photo — add to /public/founder.jpg]
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            JOURNEY
          </span>
          <h2 className="font-syne font-black text-3xl sm:text-4xl text-brand-white mt-3 mb-10">
            How We Got Here
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-brand-border" />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-6 relative">
                  <div className="w-10 h-10 rounded-full border border-brand-green/40 bg-brand-green/10 flex items-center justify-center shrink-0 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-brand-green" />
                  </div>
                  <div className="pb-2">
                    <span className="font-dm-mono text-xs text-brand-green tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-syne font-bold text-base text-brand-white mt-0.5 mb-1">
                      {item.event}
                    </h3>
                    <p className="font-instrument text-sm text-brand-white/50">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Platforms */}
        <div className="mb-24">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            PORTFOLIO
          </span>
          <h2 className="font-syne font-black text-3xl sm:text-4xl text-brand-white mt-3 mb-4">
            Live Platforms
          </h2>
          <p className="font-instrument text-brand-white/50 mb-10">
            These are real products, live in production, built entirely by AI
            Code Agency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="group p-6 rounded-xl border border-brand-border bg-brand-surface/30 hover:border-brand-green/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{platform.emoji}</span>
                  <span className="font-dm-mono text-[10px] text-brand-green border border-brand-green/30 px-2 py-0.5 rounded-full">
                    {platform.status}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-base text-brand-white mb-2">
                  {platform.name}
                </h3>
                <p className="font-instrument text-sm text-brand-white/50 leading-relaxed mb-4">
                  {platform.description}
                </p>
                <a
                  href={platform.url}
                  className="inline-flex items-center gap-1.5 font-dm-mono text-xs text-brand-white/30 hover:text-brand-green transition-colors"
                >
                  Visit Platform <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Sri Lanka */}
        <div className="p-10 sm:p-12 rounded-2xl border border-brand-border bg-brand-surface/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
                WHY SRI LANKA
              </span>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-brand-white mt-3 mb-4">
                Southeast Asia&apos;s AI
                <br />
                Development Hub
              </h2>
              <p className="font-instrument text-brand-white/60 leading-relaxed">
                Sri Lanka is emerging as a world-class tech hub. Strong English
                literacy, world-class university graduates, and a cost structure
                that lets us deliver premium products at accessible prices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "95%", label: "English Literacy" },
                { value: "50%", label: "Lower Cost vs. US" },
                { value: "UTC+5:30", label: "Timezone" },
                { value: "Growing", label: "Tech Ecosystem" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl border border-brand-border bg-brand-bg/40 text-center"
                >
                  <div className="font-syne font-black text-xl text-brand-green mb-1">
                    {stat.value}
                  </div>
                  <div className="font-dm-mono text-[10px] text-brand-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
