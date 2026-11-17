/**
 * The ventures AI Code Agency builds and operates in-house.
 * Single source of truth for the home page, /ventures and /about.
 */

export interface VentureSurface {
  label: string;
  href: string;
  what: string;
}

export interface Venture {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  /** Two or three short paragraphs. Plain, factual, no hype. */
  body: string[];
  /** Short capability lines shown as an indexed list. */
  capabilities: string[];
  /** Live surfaces people can actually open. */
  surfaces: VentureSurface[];
  /** Small fact pairs rendered as a spec table. */
  facts: { label: string; value: string }[];
  stage: string;
}

export const VENTURES: Venture[] = [
  {
    slug: "islandloaf",
    name: "IslandLoaf",
    kicker: "Venture 01 — Travel & local business",
    tagline: "A Sri Lankan app built to get local tourism businesses online.",
    body: [
      "Most small Sri Lankan guesthouses, drivers and tour operators are invisible online, or they rent their visibility from a foreign platform that takes a cut and owns the customer. IslandLoaf is our answer to that: a Sri Lankan app, built here, where the business keeps the relationship and keeps the money.",
      "There are two halves. Travellers get an AI trip planner that talks them through stays, tours, transport and experiences and books the whole thing conversationally. Business owners get a dashboard where they run listings, calendar, bookings, pricing and payouts themselves — no agent, no phone calls, no spreadsheet.",
      "Commission is 5%, about 3% of which is the card processing fee. The vendor keeps 95% of every booking, and payouts go straight to them.",
    ],
    capabilities: [
      "AI trip planner that books stays, tours, transport and wellness end to end",
      "Vendor dashboard — listings, calendar, availability, pricing, earnings",
      "Direct payouts to the business, 5% commission, vendor keeps 95%",
      "Creator marketplace so Sri Lankan creators can earn from tourism campaigns",
      "iOS and Android apps alongside the web",
    ],
    surfaces: [
      {
        label: "islandloafstay.com",
        href: "https://www.islandloafstay.com",
        what: "For travellers — plan and book a Sri Lanka trip by chat",
      },
      {
        label: "islandloafvendor.com",
        href: "https://www.islandloafvendor.com",
        what: "For businesses — run your listings, bookings and earnings",
      },
    ],
    facts: [
      { label: "Built for", value: "Sri Lanka" },
      { label: "Commission", value: "5%" },
      { label: "Platforms", value: "Web · iOS · Android" },
      { label: "Stack", value: "Next.js · Supabase · Claude" },
    ],
    stage: "Live",
  },
  {
    slug: "authority13",
    name: "Authority13",
    kicker: "Venture 02 — AI operations",
    tagline: "An AI chief of staff that runs the recurring work of a company.",
    body: [
      "Authority13 is what we built because we needed it ourselves. A founder running a company alone spends most of the week on work that repeats — marketing, follow-ups, reporting, admin — and none of it gets done well at 11pm.",
      "So Authority13 keeps a company brain: a knowledge graph of your business, your customers, your products and your decisions. AI employees read from that brain, do the actual work, and write what they learned back into it. The next cycle starts better informed than the last.",
      "Anything that matters — money, an email going out, a public post — waits for your approval. It is an operator you supervise, not a black box you hope about.",
    ],
    capabilities: [
      "A company brain — a knowledge graph every agent reads from and writes back to",
      "AI employees for marketing, operations, support and analytics",
      "Approval gates on anything outward-facing or financial",
      "Connects to the tools you already run your business on",
      "Runs on a schedule, not only when you open it",
    ],
    surfaces: [
      {
        label: "authority13.com",
        href: "https://authority13.com",
        what: "The platform — set up your brain, hire the agents, approve the work",
      },
    ],
    facts: [
      { label: "Category", value: "AI operations" },
      { label: "Built for", value: "Founders & small teams" },
      { label: "Control", value: "Human approval" },
      { label: "Stack", value: "Next.js · Postgres · Claude" },
    ],
    stage: "Live",
  },
];
