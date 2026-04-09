import Link from "next/link";

const links = {
  Products: [
    { label: "AI Store", href: "/store" },
    { label: "Chatbot", href: "/store" },
    { label: "Callbot", href: "/store" },
    { label: "Bundles", href: "/store" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Community", href: "/community" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-syne font-bold text-2xl text-brand-white">
                AI<span className="text-brand-green">CODE</span>
              </span>
              <span className="font-dm-mono text-xs text-brand-white/50 border border-brand-border px-2 py-0.5 rounded">
                AGENCY
              </span>
            </Link>
            <p className="text-brand-white/50 text-sm leading-relaxed max-w-xs font-instrument">
              Sri Lanka&apos;s premier AI development company. We build chatbots,
              callbots, SaaS platforms, scrapers, and automation systems that
              run your business autonomously.
            </p>
            <p className="mt-4 text-brand-white/30 text-xs font-dm-mono">
              Negombo, Sri Lanka 🇱🇰
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-syne font-bold text-sm text-brand-white/70 mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-brand-white/50 hover:text-brand-green text-sm font-instrument transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/30 text-xs font-dm-mono">
            © {new Date().getFullYear()} AI Code Agency Pvt Ltd. All rights reserved.
          </p>
          <p className="text-brand-white/30 text-xs font-dm-mono">
            Built by{" "}
            <span className="text-brand-green">Divindu Edirisinghe</span> ·
            Negombo, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
