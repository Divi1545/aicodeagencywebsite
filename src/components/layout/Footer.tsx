import Link from "next/link";
import { VercelTriangle } from "@/components/icons/VercelTriangle";

const links = {
  Products: [
    { label: "AI Store",    href: "/store" },
    { label: "Chatbot Kit", href: "/store" },
    { label: "Callbot Kit", href: "/store" },
    { label: "Bundles",     href: "/store" },
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
    <footer className="mt-24 bg-clay-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity shrink-0"
                aria-label="Vercel — visit vercel.com"
              >
                <VercelTriangle className="h-6 w-[22px]" />
              </a>
              <Link href="/" className="flex items-center gap-2">
                <span className="font-syne font-black text-2xl text-white">
                  AI<span className="text-white/50">CODE</span>
                </span>
                <span className="font-dm-mono text-[10px] text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                  AGENCY
                </span>
              </Link>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-instrument">
              Sri Lanka&apos;s premier AI development company. We build chatbots,
              callbots, SaaS platforms, scrapers, and automation systems that
              run your business autonomously.
            </p>
            <p className="mt-5 font-dm-mono text-xs text-white/25">
              Negombo, Sri Lanka 🇱🇰
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-syne font-bold text-xs text-white/40 mb-4 uppercase tracking-widest">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm font-instrument transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-dm-mono">
            © {new Date().getFullYear()} AI Code Agency Pvt Ltd. All rights reserved.
          </p>
          <p className="text-white/25 text-xs font-dm-mono">
            Built by{" "}
            <span className="text-white/50">Divindu Edirisinghe</span>
            {" "}· Negombo, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
