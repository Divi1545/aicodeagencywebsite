/** Live production platforms — single source for About and any other surfaces. */
export interface LivePlatform {
  name: string;
  emoji: string;
  tagline: string;
  /** Primary copy for portfolio cards (long-form where provided). */
  description: string;
  url: string;
  status: "Live";
}

export const LIVE_PLATFORMS: LivePlatform[] = [
  {
    name: "IslandLoaf",
    emoji: "🏝️",
    tagline: "Sri Lanka's AI-powered super app for tourism & local services",
    description:
      "IslandLoaf is Sri Lanka's all-in-one tourism and local services super app. Vendors manage services, bookings, calendar, and earnings. Tourists discover and book stays, tours, transport, and wellness via a Claude AI chatbot. Drivers handle rides and food deliveries with real-time GPS tracking. Powered by Anthropic Claude, Mapbox, and Supabase. A full-stack marketplace combining accommodation booking, ride-hailing, food delivery, social experiences, and a creator marketplace — AI at the core. 8% commission model. Built for vendors, tourists, and drivers.",
    url: "#",
    status: "Live",
  },
  {
    name: "Authority13",
    emoji: "🤖",
    tagline: "AI Workforce Operating System",
    description:
      "Deploy autonomous AI agent teams that run your business. Commander agent breaks down objectives and delegates to specialist sub-agents for marketing, ops, support, and analytics. Starter $49/mo, Pro $149/mo, Business $299/mo.",
    url: "#",
    status: "Live",
  },
  {
    name: "AutoBid LK",
    emoji: "🔨",
    tagline: "Real-time vehicle auction platform for Sri Lanka",
    description:
      "Dealers list vehicles, buyers bid in real-time with countdown timers. Three roles: buyer, dealer, admin. Supabase Realtime bid updates, dealer verification required before listing, secure payments.",
    url: "#",
    status: "Live",
  },
  {
    name: "IslandLoaf Creator",
    emoji: "🎬",
    tagline: "The creator marketplace for Sri Lanka tourism",
    description:
      "IslandLoaf Creator is IslandLoaf's free marketing engine. Brands (tourism vendors) launch campaigns. Content creators across Sri Lanka apply, submit content links, and compete on a real-time leaderboard. Winners receive cash payouts via Stripe. AI scoring powered by Anthropic Claude. Built with Next.js 15, Supabase Realtime, and Stripe. Tourism vendors post campaigns with prize pools; creators submit TikTok/Instagram/YouTube content — winners selected by performance metrics.",
    url: "#",
    status: "Live",
  },
  {
    name: "Moments by IslandLoaf",
    emoji: "✨",
    tagline: "Spontaneous social experiences — discover what's happening near you",
    description:
      "Moments by IslandLoaf lets users discover spontaneous, real-world gatherings nearby. Moments appear on a live map within 5km, have a start and end time, and auto-expire. There are no permanent profiles, no follower system, and no DMs — just genuine, in-person connection. Discover time-limited social gatherings: join, chat temporarily, and leave when the moment ends. No permanent data; privacy-first. Built mobile-first for GoodBarber WebView with Supabase Realtime and Mapbox.",
    url: "#",
    status: "Live",
  },
  {
    name: "IslandLoaf Stay",
    emoji: "🏡",
    tagline: "Boutique accommodation & experiences booking for Sri Lanka",
    description:
      "IslandLoaf Stay is the traveler-facing booking platform for Sri Lanka. An AI chatbot powered by Anthropic Claude recommends experiences based on dates, interests, budget, and group size — then handles the entire booking flow conversationally. Stripe Checkout for payments. Vendors are notified instantly via the isvv backend. Tourists browse and book stays, tours, vehicles, and wellness via Claude; USD and LKR pricing supported. 8% commission model collected centrally.",
    url: "#",
    status: "Live",
  },
  {
    name: "Wedage Fleet",
    emoji: "🚛",
    tagline: "Real-time fuel theft detection for refrigerated trucking fleets",
    description:
      "Wedage Fleet is an internal admin tool for Wedage & Company, a refrigerated trucking business in Sri Lanka. Every 15 minutes a Vercel Cron job pulls sensor data from Wialon GPS trackers. When a driver parks and the engine goes off, the system measures the fuel drop across that window against each truck's own rolling baseline built with Welford's online algorithm. Drops more than 2 standard deviations above normal are flagged — LOW, MEDIUM, or HIGH severity — and Claude AI writes a plain-English explanation of what happened and what action to take. The manager receives an instant Telegram alert plus a daily fleet briefing every morning at 7 AM Colombo time. Built on Next.js 14 App Router, Supabase + Prisma, and Anthropic Claude.",
    url: "#",
    status: "Live",
  },
];
