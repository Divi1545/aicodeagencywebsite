"use client";

import { useState } from "react";
import { GraduationCap, Users, FileCode, Gift, Loader2, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const PROGRAMMES = [
  { icon: GraduationCap, name: "AI Learning Programme", tagline: "Free + paid courses in Sinhala & English",
    description: "Learn to build AI-powered businesses from scratch. Prompt engineering, AI tools, chatbot building, and automation — in both Sinhala and English so no Sri Lankan gets left behind.",
    features: ["Beginner: Using AI tools for your business (Free)", "Intermediate: Building AI chatbots with no code (Free)", "Advanced: Full-stack AI development with Next.js (Paid)", "Live workshops every month", "Certificate of completion", "Sinhala and English content"],
    cta: "Join Waitlist" },
  { icon: Users, name: "Create Jobs Programme", tagline: "Certified partners and reseller network",
    description: "Become a certified AI Code Agency partner. Resell our products under your brand, earn commissions, and build your own AI business. We handle the tech; you handle the customers.",
    features: ["White-label reseller licence", "20–40% commission per sale", "Certified partner badge", "Sales training & resources", "Dedicated partner dashboard", "Priority support"],
    cta: "Apply to Partner" },
  { icon: FileCode, name: "CLAUDE.md Workflow Education", tagline: "Teaching AI project memory files",
    description: "Learn how to use CLAUDE.md and AGENTS.md files to give AI assistants persistent memory and context. The most underrated productivity hack for AI-powered development.",
    features: ["What is a CLAUDE.md file and why it matters", "Setting up project context for AI assistants", "Memory files for complex multi-session projects", "Template library (free download)", "Video walkthroughs", "Community Q&A"],
    cta: "Get Free Templates" },
  { icon: Gift, name: "Free Tools for Sri Lankan SMEs", tagline: "5 free chatbot deployments per month",
    description: "Every month we deploy 5 free AI chatbots for qualifying Sri Lankan small businesses. No catch — just our way of giving back to the local economy.",
    features: ["5 free deployments per month (limited slots)", "Tourism, hospitality, retail, services businesses", "Basic chatbot on WhatsApp or web", "1 month of free hosting", "Setup walkthrough included", "Apply by submitting your business"],
    cta: "Apply for Free Bot" },
];

export default function CommunityPage() {
  const [email, setEmail]   = useState("");
  const [name, setName]     = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]   = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { setError("Email is required."); return; }
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/community", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, name }) });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch { setError("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="clay-tag">Community & Give Back</span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-clay-deep mt-4 mb-4 tracking-tight">
            We&apos;re Building More<br />
            <span className="text-gradient-dark">Than Software.</span>
          </h1>
          <p className="font-instrument text-lg text-clay-mid leading-relaxed">
            AI Code Agency is committed to democratizing AI education, creating jobs, and giving Sri Lankan businesses the tools to compete globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
          {PROGRAMMES.map((p) => (
            <div key={p.name} className="clay-card clay-card-hover p-8">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(145deg, #f0efe9, #e2e1d8)", boxShadow: "4px 4px 12px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.9)" }}
              >
                <p.icon size={22} className="text-clay-charcoal" />
              </div>
              <h2 className="font-syne font-black text-xl text-clay-deep mb-1">{p.name}</h2>
              <p className="font-dm-mono text-[11px] text-clay-mid mb-4">{p.tagline}</p>
              <p className="font-instrument text-sm text-clay-mid leading-relaxed mb-6">{p.description}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-instrument text-sm text-clay-mid">
                    <span className="w-4 h-4 rounded-full bg-clay-faint border border-clay-border flex items-center justify-center text-[9px] text-clay-deep shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="btn-clay-light px-5 py-2.5 text-sm">{p.cta} →</button>
            </div>
          ))}
        </div>

        {/* Waitlist */}
        <div
          className="rounded-[2rem] overflow-hidden text-center px-8 py-16 sm:py-20"
          style={{ background: "linear-gradient(145deg, #1C1C1C 0%, #0D0D0D 100%)", boxShadow: "0 32px 80px rgba(0,0,0,0.16), 0 8px 32px rgba(0,0,0,0.10)" }}
        >
          <div className="max-w-xl mx-auto">
            <span className="clay-tag mb-5 inline-block border-white/10 text-white/40">COMMUNITY WAITLIST</span>
            <h2 className="font-syne font-black text-3xl sm:text-4xl text-white mt-4 mb-3 tracking-tight">Join the Waitlist</h2>
            <p className="font-instrument text-white/50 mb-8">Be first to access our AI courses, free tools, and partner programme.</p>

            {success ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <p className="font-syne font-bold text-white">You&apos;re on the list!</p>
                <p className="font-instrument text-sm text-white/50">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)"
                    className="bg-white/8 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-white/50 rounded-xl" />
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com *"
                    className="bg-white/8 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-white/50 rounded-xl" />
                </div>
                {error && <p className="text-red-400 text-sm font-instrument">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-clay-deep font-syne font-bold text-sm disabled:opacity-50 hover:-translate-y-0.5 transition-all"
                >
                  {loading && <Loader2 size={14} className="animate-spin" />}
                  {loading ? "Joining..." : "Join the Waitlist"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
