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
      "Claude-powered conversational booking for stays, tours, vehicles, and wellness — same pattern as IslandLoaf Stay: no traditional search, full flow in chat, vendors notified instantly. WhatsApp + web. BYOK.",
    price: 299,
    priceLabel: "$299",
    isSubscription: false,
    features: [
      "Claude-powered full booking conversation",
      "Stays, tours, transport & wellness intents",
      "WhatsApp & web widget",
      "Vendor notifications & handoff",
      "Multi-language (English + Sinhala)",
      "Bring Your Own API Key",
    ],
  },
  {
    id: "vendor-dashboard",
    slug: "vendor-dashboard",
    emoji: "📊",
    category: "platform",
    name: "Vendor Management Dashboard",
    description:
      "Vendor operations portal aligned with IslandLoaf: bookings, calendar, earnings, and pricing — how tourism vendors run day-to-day on the super app. White-label ready.",
    price: 499,
    priceLabel: "$499",
    isSubscription: false,
    features: [
      "Bookings, calendar & earnings in one place",
      "Revenue & operations analytics",
      "Dynamic pricing & rules",
      "Multi-vendor / multi-property support",
      "White-label branding",
      "Integrates with chatbot-led demand",
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
      "AI Workforce Operating System: Commander agent delegates to specialists for vendor onboarding, marketing, reporting, scheduling, and follow-ups. This kit reflects the Starter tier ($49/mo); Pro $149/mo and Business $299/mo tiers scale capacity.",
    price: 49,
    priceLabel: "$49/mo",
    isSubscription: true,
    features: [
      "Commander + specialist agent pattern",
      "Vendor onboarding & marketing automation",
      "Reporting, scheduling & follow-ups",
      "Starter-tier blueprint (Pro/Business tiers in live product)",
      "Dashboard & analytics patterns",
      "Claude-powered delegation workflows",
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
      "Influencer & creator marketplace for tourism brands: campaigns with prize pools, TikTok/Instagram/YouTube submissions, performance-based winners — IslandLoaf Creator pattern. Leaderboards, wallets, Claude AI content scoring.",
    price: 799,
    priceLabel: "$799",
    isSubscription: false,
    features: [
      "Brand campaign & prize pool flows",
      "Creator apply & submit content",
      "Live leaderboard & performance metrics",
      "Wallet payouts",
      "AI content scoring (Claude)",
      "White-label for any tourism niche",
    ],
  },
  {
    id: "auction-platform",
    slug: "auction-platform",
    emoji: "🔨",
    category: "platform",
    name: "Auction Platform Kit",
    description:
      "Real-time vehicle auction stack for Sri Lanka — AutoBid LK pattern: dealer listings, live bids with countdowns, buyer / dealer / admin roles, Supabase real-time updates, dealer verification, secure payments.",
    price: 599,
    priceLabel: "$599",
    isSubscription: false,
    features: [
      "Real-time bidding & countdown timers",
      "Buyer, dealer & admin roles",
      "Supabase-powered live bid updates",
      "Dealer verification flows",
      "Secure payments",
      "Mobile-responsive dashboards",
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
      "All 8 products — white-label licensed",
      "Authority13 Business tier — 12 months ($299/mo live product)",
      "Priority support & onboarding",
      "Custom branding included",
    ],
  },
];
