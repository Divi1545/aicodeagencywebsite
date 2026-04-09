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
      "Claude-powered booking chatbot for hotels, tours, and travel vendors. WhatsApp + web ready. BYOK.",
    price: 299,
    priceLabel: "$299",
    isSubscription: false,
    features: [
      "Claude AI powered conversations",
      "WhatsApp & web widget",
      "Booking & availability management",
      "Multi-language (English + Sinhala)",
      "Bring Your Own API Key",
      "1-click deployment",
    ],
  },
  {
    id: "vendor-dashboard",
    slug: "vendor-dashboard",
    emoji: "📊",
    category: "platform",
    name: "Vendor Management Dashboard",
    description:
      "Full vendor portal with bookings, calendar, analytics, and pricing rules. White-label ready.",
    price: 499,
    priceLabel: "$499",
    isSubscription: false,
    features: [
      "Real-time booking management",
      "Revenue analytics dashboard",
      "Dynamic pricing rules",
      "Calendar integration",
      "White-label branding",
      "Multi-vendor support",
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
      "AI workforce SaaS. Commander agent + 2 specialists. Automates outreach, reports, follow-ups.",
    price: 49,
    priceLabel: "$49/mo",
    isSubscription: true,
    features: [
      "1 Commander AI agent",
      "2 Specialist agents",
      "Automated outreach",
      "Report generation",
      "Follow-up automation",
      "Dashboard & analytics",
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
      "Full influencer campaign platform. White-label ready. Any niche.",
    price: 799,
    priceLabel: "$799",
    isSubscription: false,
    features: [
      "Creator profile marketplace",
      "Campaign management",
      "Analytics & reporting",
      "Payment processing",
      "White-label branding",
      "API access",
    ],
  },
  {
    id: "auction-platform",
    slug: "auction-platform",
    emoji: "🔨",
    category: "platform",
    name: "Auction Platform Kit",
    description:
      "Real-time bidding system with live countdowns. Any niche. Production-ready.",
    price: 599,
    priceLabel: "$599",
    isSubscription: false,
    features: [
      "Real-time bidding engine",
      "Live countdown timers",
      "Secure payment integration",
      "Seller & buyer dashboards",
      "Bid history & analytics",
      "Mobile-responsive",
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
      "Authority13 — 3 months ($147 value)",
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
      "Authority13 — 6 months ($294 value)",
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
      "Authority13 Business — 12 months",
      "Priority support & onboarding",
      "Custom branding included",
    ],
  },
];
