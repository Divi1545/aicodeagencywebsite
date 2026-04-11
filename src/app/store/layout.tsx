import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Store — Ready-to-Deploy Kits | AI Code Agency",
  description:
    "Buy deployable kits aligned with our live stack: tourism chatbots (IslandLoaf Stay pattern), vendor dashboards, Authority13-style AI workforce OS, creator campaigns (IslandLoaf Creator), vehicle auctions (AutoBid LK), and more.",
  openGraph: {
    title: "AI Store — Ready-to-Deploy Kits | AI Code Agency",
    description:
      "Tourism chatbots, vendor ops, Authority13 OS, creator marketplaces, AutoBid-style auctions — same patterns as our production Sri Lanka platforms.",
  },
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
