"use client";

import { useState } from "react";
import {
  Bot,
  Phone,
  LayoutDashboard,
  Database,
  BarChart3,
  Megaphone,
  Cpu,
  Wrench,
} from "lucide-react";
import { QuoteModal } from "@/components/sections/QuoteModal";

const SERVICES = [
  {
    icon: Bot,
    name: "AI Chatbots",
    tagline: "Claude & GPT-4 powered conversational agents",
    description:
      "We build production-grade AI chatbots that handle customer service, bookings, lead qualification, and sales 24/7. Integrated with WhatsApp, web widgets, Facebook Messenger, and your existing tools.",
    bullets: [
      "Custom knowledge base training on your data",
      "Multi-language: English, Sinhala, and more",
      "WhatsApp Business API integration",
      "Booking & calendar management",
      "CRM integration (HubSpot, Salesforce, Airtable)",
      "Analytics & conversation insights dashboard",
    ],
    tags: ["Claude AI", "GPT-4", "WhatsApp", "BYOK", "White-label"],
    category: "AI Chatbot",
  },
  {
    icon: Phone,
    name: "AI Callbots",
    tagline: "Voice agents for calls, bookings, and FAQs",
    description:
      "Deploy AI voice agents that answer calls, book appointments, answer FAQs, and transfer to humans when needed. Works in Sinhala and English. Reduces your phone support costs by up to 80%.",
    bullets: [
      "Natural voice synthesis (ElevenLabs / PlayHT)",
      "Call transcripts & summaries",
      "Appointment booking & calendar sync",
      "Escalation to human agents",
      "Twilio & local telco integration",
      "Sinhalese + English language support",
    ],
    tags: ["ElevenLabs", "Twilio", "Voice AI", "Sinhala", "Calendar"],
    category: "AI Callbot",
  },
  {
    icon: LayoutDashboard,
    name: "Custom SaaS Platforms",
    tagline: "Full-stack web applications built for scale",
    description:
      "We build complete SaaS products from idea to production. Authentication, billing, dashboards, APIs, and deployment — all handled. We use Next.js, Supabase, and Stripe by default.",
    bullets: [
      "Next.js 14 App Router + TypeScript",
      "Supabase PostgreSQL database",
      "Stripe billing & subscriptions",
      "Multi-tenant architecture",
      "Mobile-responsive design",
      "Vercel deployment + CI/CD",
    ],
    tags: ["Next.js 14", "Supabase", "Stripe", "TypeScript", "Vercel"],
    category: "Custom SaaS Platform",
  },
  {
    icon: Database,
    name: "Web Scrapers & Data Pipelines",
    tagline: "Automated data collection at any scale",
    description:
      "Need competitor pricing data, lead lists, product catalogues, or market research? We build bulletproof scrapers with scheduling, proxy rotation, and structured data export.",
    bullets: [
      "Google Maps, LinkedIn, directories",
      "E-commerce product & pricing data",
      "Proxy rotation & anti-detection",
      "Scheduled runs (hourly, daily, weekly)",
      "CSV, JSON, database export",
      "Bring Your Own API Key support",
    ],
    tags: ["Playwright", "Puppeteer", "Apify", "CSV", "Scheduler"],
    category: "Web Scraper / Data Pipeline",
  },
  {
    icon: BarChart3,
    name: "Analytics Dashboards",
    tagline: "Real-time business intelligence",
    description:
      "Transform your raw data into actionable insights with beautiful, real-time dashboards. Connect any data source — SQL databases, APIs, spreadsheets — and visualize what matters.",
    bullets: [
      "Real-time data visualization",
      "KPI tracking & alerting",
      "Multi-source data connectors",
      "Custom chart types & layouts",
      "Role-based access control",
      "Export to PDF, CSV, Slack",
    ],
    tags: ["Recharts", "Supabase", "PostgreSQL", "Real-time", "White-label"],
    category: "Analytics Dashboard",
  },
  {
    icon: Megaphone,
    name: "AI Marketing Tools",
    tagline: "Content generation at scale",
    description:
      "Generate 30 days of social media content, email sequences, SEO articles, and ad copy in minutes. Train the AI on your brand voice for consistent, on-brand content every time.",
    bullets: [
      "30-day content calendar generation",
      "Instagram, Facebook, LinkedIn posts",
      "Email sequences & newsletters",
      "SEO blog articles",
      "Ad copy & landing page copy",
      "Brand voice training",
    ],
    tags: ["Claude AI", "GPT-4", "BYOK", "SEO", "Email"],
    category: "AI Marketing Tools",
  },
  {
    icon: Cpu,
    name: "Business Automation (AIOS)",
    tagline: "Authority13-powered autonomous agent teams",
    description:
      "Our flagship product. Deploy a team of AI agents that run your business operations autonomously. Outreach, reporting, follow-ups, data entry, customer onboarding — all automated.",
    bullets: [
      "Commander agent orchestrates specialist agents",
      "Automated outreach & follow-up sequences",
      "Report generation & distribution",
      "Lead qualification & CRM updates",
      "Invoice & document processing",
      "Slack & email notifications",
    ],
    tags: ["Authority13", "Agent AI", "Automation", "Claude", "Slack"],
    category: "Business Automation (AIOS)",
  },
  {
    icon: Wrench,
    name: "Factory & IoT Robotics",
    tagline: "Phase 4 — Industrial automation (Coming Soon)",
    description:
      "Our next frontier. We&apos;re building AI-powered factory automation, IoT sensor networks, and smart manufacturing systems for Sri Lankan industries.",
    bullets: [
      "IoT sensor integration & monitoring",
      "Predictive maintenance systems",
      "Quality control vision AI",
      "Production line optimization",
      "Energy usage analytics",
      "Remote monitoring dashboards",
    ],
    tags: ["IoT", "Computer Vision", "Phase 4", "Coming Soon"],
    category: "Factory & IoT Robotics",
    comingSoon: true,
  },
];

export default function ServicesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("");

  function openQuote(service: string) {
    setDefaultService(service);
    setQuoteOpen(true);
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            WHAT WE DO
          </span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-brand-white mt-3 mb-4">
            Our Services
          </h1>
          <p className="font-instrument text-brand-white/50 text-lg max-w-xl">
            Full-stack AI development. From a single chatbot to a complete
            autonomous business stack. Commission a custom build today.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.name}
              className={`group relative p-8 rounded-xl border transition-all ${
                service.comingSoon
                  ? "border-brand-border bg-brand-surface/20 opacity-70"
                  : "border-brand-border bg-brand-surface/30 hover:border-brand-green/20 hover:bg-brand-surface/50"
              }`}
            >
              {service.comingSoon && (
                <span className="absolute top-6 right-6 font-dm-mono text-xs border border-brand-white/20 text-brand-white/40 px-3 py-1 rounded-full">
                  COMING SOON
                </span>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg border border-brand-green/30 bg-brand-green/10 flex items-center justify-center">
                      <service.icon size={20} className="text-brand-green" />
                    </div>
                    <span className="font-dm-mono text-xs text-brand-white/30 tracking-wider">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="font-syne font-black text-xl text-brand-white mb-1">
                    {service.name}
                  </h2>
                  <p className="font-dm-mono text-xs text-brand-green/80 mb-4">
                    {service.tagline}
                  </p>
                  <p className="font-instrument text-sm text-brand-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Middle */}
                <div className="lg:col-span-1">
                  <h3 className="font-dm-mono text-xs text-brand-white/40 tracking-widest uppercase mb-3">
                    WHAT&apos;S INCLUDED
                  </h3>
                  <ul className="space-y-2">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 font-instrument text-sm text-brand-white/60"
                      >
                        <span className="text-brand-green text-xs mt-1">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-dm-mono text-xs text-brand-white/40 tracking-widest uppercase mb-3">
                      TECH STACK
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-dm-mono text-[10px] border border-brand-border text-brand-white/40 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {!service.comingSoon && (
                    <button
                      onClick={() => openQuote(service.category)}
                      className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 font-syne font-bold text-sm px-6 py-3 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all"
                    >
                      GET A QUOTE
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultService={defaultService}
      />
    </div>
  );
}
