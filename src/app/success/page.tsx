import Link from "next/link";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 border border-brand-green/30 mb-6 animate-glow-pulse">
          <CheckCircle className="w-10 h-10 text-brand-green" />
        </div>

        {/* Title */}
        <h1 className="font-syne font-black text-4xl sm:text-5xl text-brand-white mb-3">
          Payment Successful! 🎉
        </h1>
        <p className="font-instrument text-brand-white/60 text-lg mb-8">
          Thank you for your purchase. You&apos;re one step closer to running your
          business on autopilot.
        </p>

        {/* Steps */}
        <div className="text-left space-y-4 mb-10 p-6 rounded-xl border border-brand-border bg-brand-surface/30">
          <h2 className="font-syne font-bold text-base text-brand-white mb-4">
            What happens next
          </h2>
          {[
            {
              icon: Mail,
              step: "Confirmation email",
              desc: "You&apos;ll receive a confirmation email with your order details shortly.",
            },
            {
              icon: CheckCircle,
              step: "Onboarding",
              desc: "Our team will reach out within 24 hours to start your onboarding.",
            },
            {
              icon: ArrowRight,
              step: "Deployment",
              desc: "We&apos;ll help you deploy and configure your new AI product.",
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0">
                <item.icon size={14} className="text-brand-green" />
              </div>
              <div>
                <p className="font-syne font-bold text-sm text-brand-white">
                  {item.step}
                </p>
                <p className="font-instrument text-xs text-brand-white/50">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/store"
            className="inline-flex items-center justify-center gap-2 font-syne font-bold text-sm px-6 py-3 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all"
          >
            BROWSE MORE PRODUCTS <ArrowRight size={14} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-syne font-bold text-sm px-6 py-3 border border-brand-border text-brand-white/80 rounded hover:border-brand-green/40 hover:text-brand-white transition-all"
          >
            GO HOME
          </Link>
        </div>

        <p className="mt-8 font-dm-mono text-xs text-brand-white/30">
          Questions? Email us at{" "}
          <a
            href="mailto:hello@aicodeagency.com"
            className="text-brand-green hover:underline"
          >
            hello@aicodeagency.com
          </a>
        </p>
      </div>
    </div>
  );
}
