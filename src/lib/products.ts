export type ProductType = "chatbot" | "tool" | "platform" | "bundle";

export interface Product {
  id: string;
  slug: string;
  emoji: string;
  category: ProductType;
  name: string;
  description: string;
  price: number;
  priceLabel: string;
  isSubscription: boolean;
  features: string[];
  stripePriceId?: string; // populated from env vars
}

export const PRODUCTS: Product[] = [
  {
    id: "tourism-chatbot",
    slug: "tourism-chatbot",
    emoji: "🏨",
    category: "chatbot",
    name: "Tourism AI Chatbot",
    description:
      "Same pattern as IslandLoaf Stay: Claude recommends stays, tours, vehicles, and wellness from dates, interests, budget, and group size — full booking flow conversationally. Stripe Checkout–style payments pattern; vendors notified via backend (isvv pattern in production). USD & LKR pricing fields. WhatsApp + web. BYOK.",
    price: 299,
    priceLabel: "$299",
    isSubscription: false,
    features: [
      "Claude recommendations + conversational booking",
      "Stays, tours, vehicles & wellness intents",
      "WhatsApp & web widget",
      "Instant vendor / backend notifications",
      "USD & LKR pricing support",
      "Multi-language (English + Sinhala), BYOK",
    ],
  },
  {
    id: "vendor-dashboard",
    slug: "vendor-dashboard",
    emoji: "📊",
    category: "platform",
    name: "Vendor Management Dashboard",
    description:
      "Vendor-side ops aligned with IslandLoaf super app: services, bookings, calendar, and earnings — how tourism vendors and operators run day-to-day alongside ride and delivery flows. White-label ready.",
    price: 499,
    priceLabel: "$499",
    isSubscription: false,
    features: [
      "Services, bookings, calendar & earnings",
      "Revenue & operations analytics",
      "Dynamic pricing & rules",
      "Multi-vendor / multi-property support",
      "White-label branding",
      "Pairs with AI-led demand (chatbot bookings)",
    ],
  },
  {
    id: "lead-scraper",
    slug: "lead-scraper",
    emoji: "🕷️",
    category: "tool",
    name: "Lead Scraper Pro",
    description:
      "Scrape Google Maps, LinkedIn, and directories. Export CSV. Scheduler included. BYOK.",
    price: 149,
    priceLabel: "$149",
    isSubscription: false,
    features: [
      "Google Maps & LinkedIn scraping",
      "Directory scraping",
      "CSV export",
      "Automated scheduler",
      "Proxy rotation",
      "Bring Your Own API Key",
    ],
  },
  {
    id: "ai-content-generator",
    slug: "ai-content-generator",
    emoji: "✍️",
    category: "tool",
    name: "AI Content Generator",
    description:
      "Instagram, Facebook, email, SEO. 30 days of content in 10 minutes. BYOK ready.",
    price: 99,
    priceLabel: "$99",
    isSubscription: false,
    features: [
      "30-day content calendar",
      "Instagram & Facebook posts",
      "Email sequences",
      "SEO blog articles",
      "Brand voice training",
      "Export to all formats",
    ],
  },
  {
    id: "authority13-starter",
    slug: "authority13",
    emoji: "🤖",
    category: "platform",
    name: "Authority13 Starter",
    description:
      "AI Workforce OS: commander breaks down objectives and delegates to specialists for marketing, ops, support, and analytics — same model as production Authority13. Starter $49/mo, Pro $149/mo, Business $299/mo; this kit reflects Starter-tier patterns.",
    price: 49,
    priceLabel: "$49/mo",
    isSubscription: true,
    features: [
      "Commander + specialist sub-agents",
      "Marketing, ops, support & analytics delegation",
      "Starter / Pro / Business tier alignment",
      "Dashboard & workflow patterns",
      "Claude-powered orchestration",
      "BYOK-friendly deployment",
    ],
  },
  {
    id: "ai-receptionist",
    slug: "ai-receptionist",
    emoji: "📞",
    category: "chatbot",
    name: "AI Receptionist Bot",
    description:
      "Answers calls, books appointments, handles FAQs. Sinhalese + English. Calendar integration.",
    price: 399,
    priceLabel: "$399",
    isSubscription: false,
    features: [
      "Voice AI call handling",
      "Appointment booking",
      "FAQ automation",
      "Sinhala + English",
      "Google/Outlook calendar sync",
      "Call transcripts & summaries",
    ],
  },
  {
    id: "creator-marketplace",
    slug: "creator-marketplace",
    emoji: "🎬",
    category: "platform",
    name: "Creator Marketplace Kit",
    description:
      "The creator marketplace for Sri Lanka tourism — IslandLoaf Creator pattern: tourism vendors post campaigns with prize pools; creators apply and submit TikTok/Instagram/YouTube links; real-time leaderboard; Stripe-style payouts; Anthropic Claude AI scoring. Next.js 15 + Supabase Realtime stack alignment.",
    price: 799,
    priceLabel: "$799",
    isSubscription: false,
    features: [
      "Campaign & prize pool flows for tourism brands",
      "Creator apply, submit links, performance winners",
      "Live leaderboard & wallet / payout flows",
      "AI content scoring (Claude)",
      "Next.js 15 + Supabase Realtime patterns",
      "White-label for tourism & experience brands",
    ],
  },
  {
    id: "auction-platform",
    slug: "auction-platform",
    emoji: "🔨",
    category: "platform",
    name: "Auction Platform Kit",
    description:
      "Real-time vehicle auctions for Sri Lanka — AutoBid LK pattern: dealer listings, live bids with countdowns, buyer / dealer / admin roles, Supabase Realtime updates, dealer verification required before listing, secure payments.",
    price: 599,
    priceLabel: "$599",
    isSubscription: false,
    features: [
      "Real-time bidding & countdown timers",
      "Buyer, dealer & admin roles",
      "Supabase Realtime bid updates",
      "Dealer verification before listing",
      "Secure payments",
      "Mobile-responsive dashboards",
    ],
  },
  {
    id: "fleet-fraud-dashboard",
    slug: "fleet-fraud-dashboard",
    emoji: "🚛",
    category: "platform",
    name: "Fleet Fraud Detection Dashboard",
    description:
      "Internal admin tool for refrigerated trucking fleets — Wedage Fleet pattern: detects fuel theft while engines are off using per-vehicle rolling baselines (Welford's algorithm), grades severity LOW/MEDIUM/HIGH, fires Claude AI explanations + Telegram alerts in real time, and delivers a daily fleet briefing every morning. Wialon GPS integration, Vercel Cron, Next.js 14 App Router + Supabase + Prisma.",
    price: 699,
    priceLabel: "$699",
    isSubscription: false,
    features: [
      "Engine-off fuel drop anomaly detection (2σ threshold)",
      "Per-vehicle self-learning baseline (Welford's algorithm)",
      "Claude AI fraud explanation + daily fleet briefing",
      "Real-time Telegram alerts with severity grading",
      "Wialon GPS tracker API integration",
      "Full dashboard: vehicles, alerts, analytics, sync logs, settings",
    ],
  },
];

export interface Bundle {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  includes: string[];
  highlight?: string;
}

export const BUNDLES: Bundle[] = [
  {
    id: "starter-bundle",
    name: "Starter Bundle",
    price: 399,
    priceLabel: "$399",
    description: "Perfect for solo entrepreneurs and small businesses.",
    includes: [
      "AI Content Generator ($99)",
      "Lead Scraper Pro ($149)",
      "Authority13 Starter — 3 months ($147 value)",
    ],
  },
  {
    id: "business-bundle",
    name: "Business Bundle",
    price: 899,
    priceLabel: "$899",
    description: "Full stack for growing businesses needing AI-first ops.",
    includes: [
      "Tourism AI Chatbot ($299)",
      "Vendor Management Dashboard ($499)",
      "AI Receptionist Bot ($399)",
      "Authority13 Starter — 6 months ($294 value)",
    ],
    highlight: "Most Popular",
  },
  {
    id: "agency-bundle",
    name: "Agency Bundle",
    price: 1999,
    priceLabel: "$1,999",
    description: "White-label everything. Resell. Run your own AI agency.",
    includes: [
      "All 9 products — white-label licensed",
      "Authority13 Business tier — 12 months ($299/mo live product)",
      "Priority support & onboarding",
      "Custom branding included",
    ],
  },
];
