import Link from "next/link";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="max-w-lg w-full text-center">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-clay-faint border border-clay-border"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)" }}
        >
          <CheckCircle className="w-9 h-9 text-clay-deep" />
        </div>
        <h1 className="font-syne font-black text-4xl sm:text-5xl text-clay-deep mb-3">Payment Successful! 🎉</h1>
        <p className="font-instrument text-clay-mid text-lg mb-8">
          Thank you for your purchase. You&apos;re one step closer to running your business on autopilot.
        </p>
        <div className="clay-card p-7 text-left mb-8">
          <h2 className="font-syne font-bold text-base text-clay-deep mb-5">What happens next</h2>
          {[
            { icon: Mail,         step: "Confirmation email", desc: "You&apos;ll receive a confirmation email with your order details shortly." },
            { icon: CheckCircle,  step: "Onboarding",         desc: "Our team will reach out within 24 hours to start your onboarding." },
            { icon: ArrowRight,   step: "Deployment",         desc: "We&apos;ll help you deploy and configure your new AI product." },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4 mb-4 last:mb-0">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(145deg, #f0efe9, #e2e1d8)", boxShadow: "3px 3px 8px rgba(0,0,0,0.07), -1px -1px 4px rgba(255,255,255,0.9)" }}
              >
                <item.icon size={14} className="text-clay-charcoal" />
              </div>
              <div>
                <p className="font-syne font-bold text-sm text-clay-deep">{item.step}</p>
                <p className="font-instrument text-xs text-clay-mid">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/store" className="btn-clay-dark inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
            Browse More Products <ArrowRight size={14} />
          </Link>
          <Link href="/" className="btn-clay-light inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">Go Home</Link>
        </div>
        <p className="mt-8 font-dm-mono text-xs text-clay-light">
          Questions?{" "}
          <a href="mailto:info@aicodeagency.org" className="text-clay-deep hover:underline">info@aicodeagency.org</a>
        </p>
      </div>
    </div>
  );
}
