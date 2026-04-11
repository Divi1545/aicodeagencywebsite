import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Store — Ready-to-Deploy Kits | AI Code Agency",
  description:
    "Deployable kits: conversational booking (IslandLoaf Stay), vendor ops (IslandLoaf super app), Authority13 AI workforce OS, creator marketplace (IslandLoaf Creator), vehicle auctions (AutoBid LK), and more.",
  openGraph: {
    title: "AI Store — Ready-to-Deploy Kits | AI Code Agency",
    description:
      "Kits mirror production — IslandLoaf Stay, super-app vendor tools, Authority13, Creator campaigns, AutoBid LK real-time auctions.",
  },
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
