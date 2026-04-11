"use client";

import { useState } from "react";
import { Bot, Phone, LayoutDashboard, Database, BarChart3, Megaphone, Cpu, Wrench } from "lucide-react";
import { QuoteModal } from "@/components/sections/QuoteModal";

const SERVICES = [
  {
    icon: Bot, name: "AI Chatbots", tagline: "Claude & GPT-4 powered conversational agents",
    description: "Production-grade AI chatbots for customer service, bookings, lead qualification, and sales 24/7. Integrated with WhatsApp, web widgets, and your existing tools.",
    bullets: ["Custom knowledge base training", "Multi-language: English, Sinhala, and more", "WhatsApp Business API integration", "Booking & calendar management", "CRM integration (HubSpot, Salesforce)", "Analytics & conversation insights"],
    tags: ["Claude AI", "GPT-4", "WhatsApp", "BYOK", "White-label"],
    category: "AI Chatbot",
  },
  {
    icon: Phone, name: "AI Callbots", tagline: "Voice agents for calls, bookings, and FAQs",
    description: "AI voice agents that answer calls, book appointments, handle FAQs, and escalate to humans. Works in Sinhala and English. Reduces phone support costs by up to 80%.",
    bullets: ["Natural voice synthesis (ElevenLabs)", "Call transcripts & summaries", "Appointment booking & calendar sync", "Escalation to human agents", "Twilio & local telco integration", "Sinhala + English support"],
    tags: ["ElevenLabs", "Twilio", "Voice AI", "Sinhala", "Calendar"],
    category: "AI Callbot",
  },
  {
    icon: LayoutDashboard, name: "Custom SaaS Platforms", tagline: "Full-stack web applications built for scale",
    description: "Complete SaaS products from idea to production. Auth, billing, dashboards, APIs — all handled. We use Next.js, Supabase, and Stripe by default.",
    bullets: ["Next.js 14 App Router + TypeScript", "Supabase PostgreSQL database", "Stripe billing & subscriptions", "Multi-tenant architecture", "Mobile-responsive design", "Vercel deployment + CI/CD"],
    tags: ["Next.js 14", "Supabase", "Stripe", "TypeScript", "Vercel"],
    category: "Custom SaaS Platform",
  },
  {
    icon: Database, name: "Web Scrapers & Data Pipelines", tagline: "Automated data collection at any scale",
    description: "Bulletproof scrapers with scheduling, proxy rotation, and structured data export. Google Maps, LinkedIn, directories, e-commerce — any source.",
    bullets: ["Google Maps, LinkedIn, directories", "E-commerce product & pricing data", "Proxy rotation & anti-detection", "Scheduled runs (hourly, daily, weekly)", "CSV, JSON, database export", "BYOK support"],
    tags: ["Playwright", "Puppeteer", "Apify", "CSV", "Scheduler"],
    category: "Web Scraper / Data Pipeline",
  },
  {
    icon: BarChart3, name: "Analytics Dashboards", tagline: "Real-time business intelligence",
    description: "Transform raw data into actionable insights with beautiful, real-time dashboards. Connect any data source — SQL, APIs, spreadsheets — and visualize what matters.",
    bullets: ["Real-time data visualization", "KPI tracking & alerting", "Multi-source data connectors", "Custom chart types & layouts", "Role-based access control", "Export to PDF, CSV, Slack"],
    tags: ["Recharts", "Supabase", "PostgreSQL", "Real-time", "White-label"],
    category: "Analytics Dashboard",
  },
  {
    icon: Megaphone, name: "AI Marketing Tools", tagline: "Content generation at scale",
    description: "Generate 30 days of social media content, email sequences, SEO articles, and ad copy in minutes. Train the AI on your brand voice.",
    bullets: ["30-day content calendar generation", "Instagram, Facebook, LinkedIn posts", "Email sequences & newsletters", "SEO blog articles", "Ad copy & landing page copy", "Brand voice training"],
    tags: ["Claude AI", "GPT-4", "BYOK", "SEO", "Email"],
    category: "AI Marketing Tools",
  },
  {
    icon: Cpu, name: "Business Automation (AIOS)", tagline: "Authority13 — AI Workforce Operating System",
    description: "Deploy autonomous AI agent teams that run your business. Commander agent breaks down objectives and delegates to specialist sub-agents for marketing, ops, support, and analytics. Starter $49/mo, Pro $149/mo, Business $299/mo.",
    bullets: ["Commander + specialist sub-agents", "Marketing, ops, support & analytics coverage", "Same delegation model as production Authority13", "Tiered SaaS: Starter / Pro / Business", "CRM & workflow integrations", "Slack & email notifications"],
    tags: ["Authority13", "Agent AI", "Automation", "Claude", "Slack"],
    category: "Business Automation (AIOS)",
  },
  {
    icon: Wrench, name: "Factory & IoT Robotics", tagline: "Phase 4 — Industrial automation (Coming Soon)",
    description: "AI-powered factory automation, IoT sensor networks, and smart manufacturing systems for Sri Lankan industries.",
    bullets: ["IoT sensor integration & monitoring", "Predictive maintenance systems", "Quality control vision AI", "Production line optimization", "Energy usage analytics", "Remote monitoring dashboards"],
    tags: ["IoT", "Computer Vision", "Phase 4", "Coming Soon"],
    category: "Factory & IoT Robotics",
    comingSoon: true,
  },
];

export default function ServicesPage() {
  const [quoteOpen, setQuoteOpen]       = useState(false);
  const [defaultService, setDefault]    = useState("");
  function openQuote(s: string) { setDefault(s); setQuoteOpen(true); }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="clay-tag">What We Do</span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-clay-deep mt-4 mb-4 tracking-tight">Our Services</h1>
          <p className="font-instrument text-clay-mid text-lg max-w-xl">
            Full-stack AI development — from a single chatbot to a complete autonomous business stack.
          </p>
        </div>

        <div className="space-y-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className={`clay-card relative p-8 ${s.comingSoon ? "opacity-60" : "clay-card-hover"}`}
            >
              {s.comingSoon && <span className="clay-tag absolute top-6 right-6">Coming Soon</span>}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(145deg, #f0efe9, #e2e1d8)", boxShadow: "4px 4px 12px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.9)" }}
                    >
                      <s.icon size={22} className="text-clay-charcoal" />
                    </div>
                    <span className="font-dm-mono text-xs text-clay-light tracking-wider">0{i + 1}</span>
                  </div>
                  <h2 className="font-syne font-black text-xl text-clay-deep mb-1">{s.name}</h2>
                  <p className="font-dm-mono text-[11px] text-clay-mid mb-4">{s.tagline}</p>
                  <p className="font-instrument text-sm text-clay-mid leading-relaxed">{s.description}</p>
                </div>

                {/* Middle */}
                <div>
                  <h3 className="font-dm-mono text-[11px] text-clay-light tracking-widest uppercase mb-4">What&apos;s Included</h3>
                  <ul className="space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 font-instrument text-sm text-clay-mid">
                        <span className="w-4 h-4 rounded-full bg-clay-faint border border-clay-border flex items-center justify-center text-[9px] text-clay-deep shrink-0 mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-dm-mono text-[11px] text-clay-light tracking-widest uppercase mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => <span key={tag} className="clay-tag">{tag}</span>)}
                    </div>
                  </div>
                  {!s.comingSoon && (
                    <button
                      onClick={() => openQuote(s.category)}
                      className="btn-clay-dark mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm"
                    >
                      Get a Quote
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} defaultService={defaultService} />
    </div>
  );
}
