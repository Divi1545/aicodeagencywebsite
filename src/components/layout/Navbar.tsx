"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { VercelTriangle } from "@/components/icons/VercelTriangle";

const navLinks = [
  { href: "/store",     label: "AI Store" },
  { href: "/services",  label: "Services" },
  { href: "/about",     label: "About" },
  { href: "/community", label: "Community" },
  { href: "/roadmap",   label: "Roadmap" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating island navbar ─────────────────────── */}
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-5xl",
          scrolled ? "top-3" : "top-5"
        )}
      >
        <div className="nav-island px-5 py-2.5 flex items-center justify-between">
          {/* Logo: Vercel mark (links to Vercel) + wordmark (home) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay-deep hover:opacity-75 transition-opacity p-0.5 -m-0.5"
              aria-label="Vercel — visit vercel.com"
            >
              <VercelTriangle className="h-[18px] w-[17px]" />
            </a>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-syne font-black text-lg text-clay-deep tracking-tight">
                AI<span className="text-clay-mid">CODE</span>
              </span>
              <span className="hidden sm:inline font-dm-mono text-[10px] text-clay-light border border-clay-border px-2 py-0.5 rounded-full">
                AGENCY
              </span>
            </Link>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-full font-instrument text-sm transition-all",
                  pathname === link.href
                    ? "bg-clay-deep text-white"
                    : "text-clay-mid hover:text-clay-deep hover:bg-clay-faint"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/store"
              className="btn-clay-dark hidden sm:inline-flex items-center text-sm px-5 py-2.5"
            >
              Buy Now
            </Link>
            <button
              className="md:hidden w-9 h-9 rounded-full bg-clay-faint border border-clay-border flex items-center justify-center text-clay-mid hover:text-clay-deep transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-2 clay-card mx-1 p-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-2xl font-instrument text-sm transition-all",
                  pathname === link.href
                    ? "bg-clay-deep text-white"
                    : "text-clay-mid hover:text-clay-deep hover:bg-clay-faint"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/store"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center btn-clay-dark px-4 py-3 text-sm"
            >
              Buy Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
