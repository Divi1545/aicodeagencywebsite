import type { Metadata } from "next";
import { Fraunces, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["opsz"],
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
    "A one-founder AI studio in Negombo, Sri Lanka. We build and operate IslandLoaf — a Sri Lankan app that gets local tourism businesses online — and Authority13, an AI chief of staff that runs the recurring work of a company. Custom builds and ready-to-deploy AI products.",
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
      "Builders of IslandLoaf and Authority13. A one-founder AI studio in Negombo, Sri Lanka — custom AI platforms and ready-to-deploy products.",
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
        className={`${fraunces.variable} ${dmMono.variable} ${instrumentSans.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
