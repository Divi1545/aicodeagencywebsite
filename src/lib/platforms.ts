/** Other production work, beyond the two ventures in @/lib/ventures. */
export interface LivePlatform {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  url: string;
  status: "Live" | "Internal";
}

export const LIVE_PLATFORMS: LivePlatform[] = [
  {
    name: "IslandLoaf Creator",
    emoji: "🎬",
    tagline: "Where Sri Lankan creators earn from tourism",
    description:
      "Tourism businesses post campaigns with a prize pool. Creators across the island submit TikTok, Instagram and YouTube content and compete on a live leaderboard. Winners are paid out through Stripe. Built into the IslandLoaf platform.",
    url: "https://www.islandloafstay.com",
    status: "Live",
  },
  {
    name: "Moments by IslandLoaf",
    emoji: "✨",
    tagline: "Spontaneous, time-limited meetups near you",
    description:
      "Moments show up on a live map within 5km, run for a set window and then expire. No permanent profiles, no follower counts, no DMs — the point is meeting people in person, not collecting them.",
    url: "https://www.islandloafstay.com",
    status: "Live",
  },
  {
    name: "AutoBid LK",
    emoji: "🔨",
    tagline: "Real-time vehicle auctions for Sri Lanka",
    description:
      "Dealers list vehicles, buyers bid live against a countdown. Three roles — buyer, dealer, admin — with dealer verification required before anything goes up for sale and realtime bid updates over Supabase.",
    url: "#",
    status: "Live",
  },
  {
    name: "Wedage Fleet",
    emoji: "🚛",
    tagline: "Fuel theft detection for refrigerated trucking",
    description:
      "Every 15 minutes a cron job pulls sensor data from the GPS trackers. When a truck parks and the engine goes off, it measures the fuel drop against that truck's own rolling baseline; anything more than two standard deviations out is flagged, explained in plain English by Claude, and sent to the manager on Telegram.",
    url: "#",
    status: "Internal",
  },
  {
    name: "Ninety Clothing",
    emoji: "👕",
    tagline: "Storefront for a Sri Lankan clothing label",
    description:
      "A client build — full storefront and catalogue, with the back office moving onto Authority13 so the shop is run by the same AI operations stack we use ourselves.",
    url: "#",
    status: "Live",
  },
];
