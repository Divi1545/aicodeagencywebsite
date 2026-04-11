/** Live production platforms — single source for About and any other surfaces. */
export interface LivePlatform {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  url: string;
  status: "Live";
}

export const LIVE_PLATFORMS: LivePlatform[] = [
  {
    name: "IslandLoaf",
    emoji: "🏝️",
    tagline: "Sri Lanka's AI-powered tourism & vendor marketplace",
    description:
      "A full-stack super app for Sri Lanka combining accommodation booking, ride-hailing, food delivery, social experiences, and creator tools. Vendors manage bookings, calendar, and earnings. Tourists discover and book stays, tours, transport, and wellness via an AI chatbot. 8% commission model.",
    url: "#",
    status: "Live",
  },
  {
    name: "Authority13",
    emoji: "🤖",
    tagline: "AI Workforce Operating System",
    description:
      "Deploy autonomous AI agent teams that run your business — vendor onboarding, marketing, reporting, scheduling, and follow-ups. Commander agent breaks down objectives and delegates to specialist sub-agents. Tiered pricing: Starter $49/mo, Pro $149/mo, Business $299/mo.",
    url: "#",
    status: "Live",
  },
  {
    name: "AutoBid LK",
    emoji: "🔨",
    tagline: "Real-time vehicle auction platform for Sri Lanka",
    description:
      "Dealers list vehicles, buyers bid in real-time with countdown timers. Three roles: buyer, dealer, admin. Supabase-powered real-time bid updates, dealer verification, and secure payments.",
    url: "#",
    status: "Live",
  },
  {
    name: "IslandLoaf Creator",
    emoji: "🎬",
    tagline: "Influencer & creator marketplace for Sri Lanka tourism",
    description:
      "Brands (tourism vendors) post campaigns with prize pools. Creators apply, submit TikTok/Instagram/YouTube content, and compete — winners selected by performance metrics. IslandLoaf's free marketing engine. Live leaderboard, wallet payouts, AI content scoring via Claude.",
    url: "#",
    status: "Live",
  },
  {
    name: "Moments by IslandLoaf",
    emoji: "✨",
    tagline: "Spontaneous social experiences layer for Sri Lanka",
    description:
      "Discover time-limited social gatherings nearby. Users see active Moments on a map within 5km, join, chat temporarily, then leave. Moments auto-expire. No profiles, no follows — privacy-first and built for spontaneous real-world connection.",
    url: "#",
    status: "Live",
  },
  {
    name: "IslandLoaf Stay",
    emoji: "🏡",
    tagline: "Boutique accommodation booking for Sri Lanka — AI at the core",
    description:
      "Tourists browse and book stays, tours, vehicles, and wellness experiences via a Claude-powered AI chatbot. No traditional search — the chatbot handles the full booking flow conversationally. Vendors notified instantly. USD and LKR pricing supported. 8% commission model, collected centrally by ISVV.",
    url: "#",
    status: "Live",
  },
];
