import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="max-w-lg w-full text-center">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-clay-faint border border-clay-border"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)" }}
        >
          <span className="text-3xl">👋</span>
        </div>
        <h1 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mb-3">No worries!</h1>
        <p className="font-instrument text-clay-mid text-lg mb-8">
          You can always come back when you&apos;re ready. Your cart hasn&apos;t been charged.
        </p>
        <div className="clay-card p-7 mb-8 text-left">
          <h2 className="font-syne font-bold text-base text-clay-deep mb-2">Not sure which product is right for you?</h2>
          <p className="font-instrument text-sm text-clay-mid mb-4">
            We&apos;re happy to help. Send us a message and we&apos;ll recommend the best solution — no pressure.
          </p>
          <a href="mailto:info@aicodeagency.org" className="inline-flex items-center gap-2 font-syne font-bold text-sm text-clay-deep hover:underline">
            <MessageCircle size={14} /> info@aicodeagency.org
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/store" className="btn-clay-dark inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
            Back to Store <ArrowRight size={14} />
          </Link>
          <Link href="/" className="btn-clay-light inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
            <ArrowLeft size={14} /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
