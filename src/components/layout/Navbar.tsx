"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/store",     label: "Store" },
  { href: "/hardware",  label: "Hardware" },
  { href: "/services",  label: "Services" },
  { href: "/about",     label: "About" },
  { href: "/community", label: "Community" },
  { href: "/roadmap",   label: "Roadmap" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-island fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <Link href="/" className="shrink-0 flex items-baseline gap-1">
          <span className="font-display font-semibold text-[19px] tracking-tight text-clay-deep">
            AI Code Agency
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block translate-y-[-1px]" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-lg font-instrument text-sm transition-colors",
                pathname === link.href
                  ? "text-clay-deep font-semibold"
                  : "text-clay-mid hover:text-clay-deep"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/store"
            className="btn-clay-dark hidden sm:inline-flex items-center gap-1.5 text-sm px-4 py-2"
          >
            Browse products <ArrowUpRight size={14} />
          </Link>
          <button
            className="md:hidden w-9 h-9 rounded-lg border border-clay-border flex items-center justify-center text-clay-mid hover:text-clay-deep transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-clay-border bg-clay-bg px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2.5 rounded-lg font-instrument text-sm transition-colors",
                pathname === link.href
                  ? "text-clay-deep font-semibold bg-clay-faint"
                  : "text-clay-mid hover:text-clay-deep"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/store"
            onClick={() => setOpen(false)}
            className="btn-clay-dark block mt-3 text-center px-4 py-3 text-sm"
          >
            Browse products
          </Link>
        </div>
      )}
    </header>
  );
}
