"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/store", label: "AI Store" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/roadmap", label: "Roadmap" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-syne font-bold text-xl text-brand-white">
              AI<span className="text-brand-green">CODE</span>
            </span>
            <span className="hidden sm:block font-dm-mono text-xs text-brand-white/50 border border-brand-border px-2 py-0.5 rounded">
              AGENCY
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded font-instrument text-sm transition-colors",
                  pathname === link.href
                    ? "text-brand-green"
                    : "text-brand-white/60 hover:text-brand-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/store"
              className="font-syne font-bold text-sm px-4 py-2 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all glow-green"
            >
              BUY NOW
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-white/70 hover:text-brand-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2.5 rounded font-instrument text-sm transition-colors",
                pathname === link.href
                  ? "text-brand-green bg-brand-green/10"
                  : "text-brand-white/70 hover:text-brand-white hover:bg-brand-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/store"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center font-syne font-bold text-sm px-4 py-2.5 bg-brand-green text-brand-bg rounded"
          >
            BUY NOW
          </Link>
        </div>
      )}
    </header>
  );
}
