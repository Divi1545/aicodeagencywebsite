"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";

const SERVICES = [
  "AI Chatbot", "AI Callbot", "Custom SaaS Platform",
  "Web Scraper / Data Pipeline", "Analytics Dashboard",
  "AI Marketing Tools", "Business Automation (AIOS)",
  "Factory & IoT Robotics", "Other / Not Sure",
];

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuoteModal({ open, onClose, defaultService }: QuoteModalProps) {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [service, setService] = useState(defaultService ?? "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) { setError("Please fill in all required fields."); return; }
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
    } catch { setError("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  }

  function handleClose() {
    setSuccess(false); setError("");
    setName(""); setEmail(""); setService(defaultService ?? ""); setMessage("");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-white border-clay-border text-clay-deep max-w-lg rounded-[1.5rem] shadow-clay-xl">
        <DialogHeader>
          <DialogTitle className="font-syne font-bold text-xl text-clay-deep">Get a Quote</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-clay-faint border border-clay-border flex items-center justify-center mx-auto mb-4" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <CheckCircle className="w-7 h-7 text-clay-deep" />
            </div>
            <h3 className="font-syne font-bold text-xl text-clay-deep mb-2">Request Sent!</h3>
            <p className="font-instrument text-sm text-clay-mid">Thanks {name}! We&apos;ll get back to you within 24 hours.</p>
            <button onClick={handleClose} className="btn-clay-dark mt-6 px-6 py-2.5 text-sm">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-dm-mono text-[11px] text-clay-light mb-1.5 tracking-wider uppercase">Name *</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                  className="bg-clay-faint border-clay-border text-clay-deep placeholder:text-clay-light focus-visible:ring-clay-deep rounded-xl" />
              </div>
              <div>
                <label className="block font-dm-mono text-[11px] text-clay-light mb-1.5 tracking-wider uppercase">Email *</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  className="bg-clay-faint border-clay-border text-clay-deep placeholder:text-clay-light focus-visible:ring-clay-deep rounded-xl" />
              </div>
            </div>
            <div>
              <label className="block font-dm-mono text-[11px] text-clay-light mb-1.5 tracking-wider uppercase">Service</label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="bg-clay-faint border-clay-border text-clay-deep focus:ring-clay-deep rounded-xl">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent className="bg-white border-clay-border rounded-2xl">
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s} className="text-clay-deep focus:bg-clay-faint">{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block font-dm-mono text-[11px] text-clay-light mb-1.5 tracking-wider uppercase">Message *</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project, timeline, and budget..."
                rows={4} className="bg-clay-faint border-clay-border text-clay-deep placeholder:text-clay-light focus-visible:ring-clay-deep rounded-xl resize-none" />
            </div>
            {error && <p className="text-red-500 text-sm font-instrument">{error}</p>}
            <button type="submit" disabled={loading} className="btn-clay-dark w-full py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50">
              {loading && <Loader2 size={14} className="animate-spin" />}
              {loading ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
