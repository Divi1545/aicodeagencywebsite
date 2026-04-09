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
    "Sri Lanka-based AI development company. Chatbots, Callbots, SaaS Platforms, Scrapers, Dashboards, Automations. Buy ready-made AI products or commission custom builds.",
  keywords: [
    "AI development",
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
      "Ready-to-deploy AI tools anyone can buy, plug in their API key, and run their business autonomously.",
    url: "https://aicodeagency.com",
    siteName: "AI Code Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Agency",
    description: "We Build AI That Actually Works.",
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
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${dmMono.variable} ${instrumentSans.variable} bg-brand-bg text-brand-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
