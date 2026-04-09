import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-border/30 border border-brand-border mb-6">
          <span className="text-3xl">👋</span>
        </div>

        {/* Title */}
        <h1 className="font-syne font-black text-4xl sm:text-5xl text-brand-white mb-3">
          No worries!
        </h1>
        <p className="font-instrument text-brand-white/60 text-lg mb-8">
          You can always come back when you&apos;re ready. Your cart hasn&apos;t been
          charged.
        </p>

        {/* Offer */}
        <div className="p-6 rounded-xl border border-brand-border bg-brand-surface/30 mb-8 text-left">
          <h2 className="font-syne font-bold text-base text-brand-white mb-3">
            Not sure which product is right for you?
          </h2>
          <p className="font-instrument text-sm text-brand-white/60 mb-4">
            We&apos;re happy to help. Send us a message and we&apos;ll recommend the best
            solution for your business — no pressure.
          </p>
          <a
            href="mailto:hello@aicodeagency.com"
            className="inline-flex items-center gap-2 font-syne font-bold text-sm text-brand-green hover:underline"
          >
            <MessageCircle size={14} />
            hello@aicodeagency.com
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/store"
            className="inline-flex items-center justify-center gap-2 font-syne font-bold text-sm px-6 py-3 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all"
          >
            BACK TO STORE <ArrowRight size={14} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-syne font-bold text-sm px-6 py-3 border border-brand-border text-brand-white/80 rounded hover:border-brand-green/40 hover:text-brand-white transition-all"
          >
            <ArrowLeft size={14} /> GO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
