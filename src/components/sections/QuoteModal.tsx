"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";

const SERVICES = [
  "AI Chatbot",
  "AI Callbot",
  "Custom SaaS Platform",
  "Web Scraper / Data Pipeline",
  "Analytics Dashboard",
  "AI Marketing Tools",
  "Business Automation (AIOS)",
  "Factory & IoT Robotics",
  "Other / Not Sure",
];

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuoteModal({ open, onClose, defaultService }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService ?? "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSuccess(false);
    setError("");
    setName("");
    setEmail("");
    setService(defaultService ?? "");
    setMessage("");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-brand-surface border-brand-border text-brand-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-syne font-bold text-xl text-brand-white">
            Get a Quote
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle className="w-12 h-12 text-brand-green mx-auto mb-4" />
            <h3 className="font-syne font-bold text-xl text-brand-white mb-2">
              Request Sent!
            </h3>
            <p className="text-brand-white/60 font-instrument text-sm">
              Thanks {name}! We&apos;ll get back to you within 24 hours.
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-brand-green text-brand-bg font-syne font-bold hover:bg-brand-green/90"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-dm-mono text-xs text-brand-white/50 mb-1.5 tracking-wider uppercase">
                  Name *
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-brand-bg border-brand-border text-brand-white placeholder:text-brand-white/30 focus-visible:ring-brand-green"
                />
              </div>
              <div>
                <label className="block font-dm-mono text-xs text-brand-white/50 mb-1.5 tracking-wider uppercase">
                  Email *
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-brand-bg border-brand-border text-brand-white placeholder:text-brand-white/30 focus-visible:ring-brand-green"
                />
              </div>
            </div>
            <div>
              <label className="block font-dm-mono text-xs text-brand-white/50 mb-1.5 tracking-wider uppercase">
                Service
              </label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="bg-brand-bg border-brand-border text-brand-white focus:ring-brand-green">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent className="bg-brand-surface border-brand-border">
                  {SERVICES.map((s) => (
                    <SelectItem
                      key={s}
                      value={s}
                      className="text-brand-white focus:bg-brand-green/10 focus:text-brand-green"
                    >
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block font-dm-mono text-xs text-brand-white/50 mb-1.5 tracking-wider uppercase">
                Message *
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project, timeline, and budget..."
                rows={4}
                className="bg-brand-bg border-brand-border text-brand-white placeholder:text-brand-white/30 focus-visible:ring-brand-green resize-none"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm font-instrument">{error}</p>
            )}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green text-brand-bg font-syne font-bold hover:bg-brand-green/90 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin mr-2" />
              ) : null}
              {loading ? "Sending..." : "SEND REQUEST"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
