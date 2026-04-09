"use client";

import { useState } from "react";
import {
  GraduationCap,
  Users,
  FileCode,
  Gift,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PROGRAMMES = [
  {
    icon: GraduationCap,
    name: "AI Learning Programme",
    tagline: "Free + paid courses in Sinhala & English",
    description:
      "Learn to build AI-powered businesses from scratch. We teach prompt engineering, AI tool usage, chatbot building, and automation — in both Sinhala and English so no Sri Lankan gets left behind.",
    features: [
      "Beginner: Using AI tools for your business (Free)",
      "Intermediate: Building AI chatbots with no code (Free)",
      "Advanced: Full-stack AI development with Next.js (Paid)",
      "Live workshops every month",
      "Certificate of completion",
      "Sinhala and English content",
    ],
    cta: "Join Waitlist",
    color: "brand-green",
  },
  {
    icon: Users,
    name: "Create Jobs Programme",
    tagline: "Certified partners and reseller network",
    description:
      "Become a certified AI Code Agency partner. Resell our products under your brand, earn commissions, and build your own AI business. We handle the tech; you handle the customers.",
    features: [
      "White-label reseller licence",
      "20–40% commission per sale",
      "Certified partner badge",
      "Sales training & resources",
      "Dedicated partner dashboard",
      "Priority support",
    ],
    cta: "Apply to Partner",
    color: "brand-cyan",
  },
  {
    icon: FileCode,
    name: "CLAUDE.md Workflow Education",
    tagline: "Teaching AI project memory files",
    description:
      "Learn how to use CLAUDE.md and AGENTS.md files to give AI assistants persistent memory and context across sessions. The most underrated productivity hack for AI-powered development.",
    features: [
      "What is a CLAUDE.md file and why it matters",
      "Setting up project context for AI assistants",
      "Memory files for complex multi-session projects",
      "Template library (free download)",
      "Video walkthroughs",
      "Community Q&A",
    ],
    cta: "Get Free Templates",
    color: "brand-green",
  },
  {
    icon: Gift,
    name: "Free Tools for Sri Lankan SMEs",
    tagline: "5 free chatbot deployments per month",
    description:
      "Every month, we deploy 5 free AI chatbots for qualifying Sri Lankan small businesses. No catch — just our way of giving back to the local economy and showing what AI can do.",
    features: [
      "5 free deployments per month (limited slots)",
      "Tourism, food, retail, services businesses",
      "Basic chatbot on WhatsApp or web",
      "1 month of free hosting",
      "Setup walkthrough included",
      "Apply by submitting your business",
    ],
    cta: "Apply for Free Bot",
    color: "brand-cyan",
  },
];

export default function CommunityPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            COMMUNITY & GIVE BACK
          </span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-brand-white mt-3 mb-4">
            We&apos;re Building More
            <br />
            <span className="text-gradient-green">Than Software.</span>
          </h1>
          <p className="font-instrument text-lg text-brand-white/60 leading-relaxed">
            AI Code Agency is committed to democratizing AI education,
            creating jobs, and giving Sri Lankan businesses the tools they
            need to compete globally.
          </p>
        </div>

        {/* Programmes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {PROGRAMMES.map((programme) => (
            <div
              key={programme.name}
              className="p-8 rounded-xl border border-brand-border bg-brand-surface/30 hover:border-brand-green/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg border border-brand-green/30 bg-brand-green/10 flex items-center justify-center mb-5">
                <programme.icon size={20} className="text-brand-green" />
              </div>
              <h2 className="font-syne font-black text-xl text-brand-white mb-1">
                {programme.name}
              </h2>
              <p className="font-dm-mono text-xs text-brand-green/80 mb-4">
                {programme.tagline}
              </p>
              <p className="font-instrument text-sm text-brand-white/60 leading-relaxed mb-6">
                {programme.description}
              </p>
              <ul className="space-y-2 mb-6">
                {programme.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 font-instrument text-sm text-brand-white/60"
                  >
                    <span className="text-brand-green text-xs mt-1">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="font-syne font-bold text-xs px-4 py-2.5 border border-brand-green/40 text-brand-green rounded hover:bg-brand-green/10 transition-all">
                {programme.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Email signup */}
        <div className="relative rounded-2xl border border-brand-green/20 bg-brand-surface/50 p-10 sm:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-brand-green/5 blur-[80px] pointer-events-none" />
          <div className="relative max-w-xl mx-auto text-center">
            <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
              COMMUNITY WAITLIST
            </span>
            <h2 className="font-syne font-black text-3xl sm:text-4xl text-brand-white mt-3 mb-3">
              Join the Waitlist
            </h2>
            <p className="font-instrument text-brand-white/60 mb-8">
              Be first to access our AI courses, free tools, and partner
              programme. We&apos;ll notify you when spots open.
            </p>

            {success ? (
              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="w-12 h-12 text-brand-green" />
                <p className="font-syne font-bold text-brand-white">
                  You&apos;re on the list!
                </p>
                <p className="font-instrument text-sm text-brand-white/60">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="bg-brand-bg border-brand-border text-brand-white placeholder:text-brand-white/30 focus-visible:ring-brand-green"
                  />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com *"
                    className="bg-brand-bg border-brand-border text-brand-white placeholder:text-brand-white/30 focus-visible:ring-brand-green"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm font-instrument">
                    {error}
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-green text-brand-bg font-syne font-bold hover:bg-brand-green/90"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin mr-2" />
                  ) : null}
                  {loading ? "Joining..." : "JOIN THE WAITLIST"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
