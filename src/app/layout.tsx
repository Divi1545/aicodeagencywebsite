import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
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
  title: "AI Code Agency — Stop losing customers to slow replies and busywork",
  description:
    "AI that answers your customers on WhatsApp and the phone, books appointments, follows up and runs the repetitive work, so your business grows without hiring more people. Built in Negombo, Sri Lanka; live in two to three weeks; you own it.",
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
    title: "AI Code Agency — Stop losing customers to slow replies and busywork",
    description:
      "AI that answers your customers, books your appointments and runs the repetitive work. Built in Sri Lanka, live in two to three weeks, and yours to own.",
    url: "https://aicodeagency.org",
    siteName: "AI Code Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Agency",
    description:
      "Builders of IslandLoaf and Authority13 — an AI studio from Negombo, Sri Lanka.",
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
        className={`${interTight.variable} ${instrumentSerif.variable} ${dmMono.variable} ${instrumentSans.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
