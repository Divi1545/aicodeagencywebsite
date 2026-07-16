import Link from "next/link";
import { VercelTriangle } from "@/components/icons/VercelTriangle";

const links = {
  Products: [
    { label: "AI Store",    href: "/store" },
    { label: "Chatbot Kit", href: "/store" },
    { label: "Callbot Kit", href: "/store" },
    { label: "Hardware",    href: "/hardware" },
  ],
  Company: [
    { label: "About",     href: "/about" },
    { label: "Services",  href: "/services" },
    { label: "Roadmap",   href: "/roadmap" },
    { label: "Community", href: "/community" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use",   href: "#" },
    { label: "Refund Policy",  href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-clay-deep text-clay-bg border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        {/* Oversized wordmark */}
        <div className="pb-14 border-b border-white/10">
          <Link href="/" className="inline-block">
            <span className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-clay-bg">
              AI Code Agency<span className="text-terracotta">.</span>
            </span>
          </Link>
          <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-sm font-instrument">
            Sri Lanka&apos;s AI development studio. Chatbots, callbots, SaaS
            platforms, scrapers, and automation systems that run your business
            autonomously.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 py-14">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-dm-mono text-[11px] text-white/35 mb-4 uppercase tracking-[0.18em]">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white text-sm font-instrument transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-dm-mono text-[11px] text-white/35 mb-4 uppercase tracking-[0.18em]">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm font-instrument text-white/60">
              <li>Negombo, Sri Lanka</li>
              <li>Direct founder support</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-dm-mono">
            © {new Date().getFullYear()} AI Code Agency Pvt Ltd
          </p>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs font-dm-mono transition-colors"
            aria-label="Deployed on Vercel"
          >
            <VercelTriangle className="h-3 w-3" /> Deployed on Vercel
          </a>
          <p className="text-white/30 text-xs font-dm-mono">
            Built by Divindu Edirisinghe
          </p>
        </div>
      </div>
    </footer>
  );
}
