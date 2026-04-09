import Stripe from "stripe";

// Lazy initialization — never runs at module import time
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY environment variable not set");
    _stripe = new Stripe(key, {
      apiVersion: "2026-03-25.dahlia" as const,
    });
  }
  return _stripe;
}

export const STRIPE_PRICE_IDS: Record<string, string> = {
  "tourism-chatbot": process.env.STRIPE_PRICE_TOURISM_CHATBOT ?? "",
  "vendor-dashboard": process.env.STRIPE_PRICE_VENDOR_DASHBOARD ?? "",
  "lead-scraper": process.env.STRIPE_PRICE_LEAD_SCRAPER ?? "",
  "ai-content-generator": process.env.STRIPE_PRICE_AI_CONTENT ?? "",
  "authority13-starter": process.env.STRIPE_PRICE_AUTHORITY13 ?? "",
  "ai-receptionist": process.env.STRIPE_PRICE_AI_RECEPTIONIST ?? "",
  "creator-marketplace": process.env.STRIPE_PRICE_CREATOR_MARKETPLACE ?? "",
  "auction-platform": process.env.STRIPE_PRICE_AUCTION_PLATFORM ?? "",
  "starter-bundle": process.env.STRIPE_PRICE_STARTER_BUNDLE ?? "",
  "business-bundle": process.env.STRIPE_PRICE_BUSINESS_BUNDLE ?? "",
  "agency-bundle": process.env.STRIPE_PRICE_AGENCY_BUNDLE ?? "",
};
