import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Code Agency — We Build AI That Actually Works",
  description:
    "Sri Lanka AI studio behind IslandLoaf (super app for tourism & local services), Authority13 (AI workforce OS), AutoBid LK, IslandLoaf Creator, Moments, and IslandLoaf Stay. Deployable kits and custom builds.",
  keywords: [
    "AI development",
    "IslandLoaf",
    "Authority13",
    "AutoBid LK",
    "Sri Lanka tourism",
    "chatbot",
    "callbot",
    "SaaS",
    "automation",
    "Sri Lanka",
    "AI agency",
    "Next.js",
  ],
  openGraph: {
    title: "AI Code Agency — We Build AI That Actually Works",
    description:
      "IslandLoaf super app stack, Authority13, AutoBid LK, Moments, IslandLoaf Stay & Creator — plus ready-to-deploy AI kits from Sri Lanka.",
    url: "https://aicodeagency.com",
    siteName: "AI Code Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Agency",
    description:
      "IslandLoaf, Authority13, AutoBid LK, Moments, Stay, Creator — AI platforms and kits from Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmMono.variable} ${instrumentSans.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
