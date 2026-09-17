import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { VENTURES } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Ventures — IslandLoaf & Authority13 | AI Code Agency",
  description:
    "The two products AI Code Agency builds and operates in-house: IslandLoaf, a Sri Lankan app that gets local tourism businesses online, and Authority13, an AI chief of staff that runs the recurring work of a company.",
  openGraph: {
    title: "Ventures — IslandLoaf & Authority13 | AI Code Agency",
    description:
      "IslandLoaf and Authority13 — built, launched and operated in-house from Negombo, Sri Lanka.",
    url: "https://aicodeagency.org/ventures",
  },
};

export default function VenturesPage() {
  return (
    <div className="pt-36 pb-0">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-terracotta inline-block" />
          Our ventures
        </p>
        <h1 className="font-display font-semibold text-[12vw] sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.02em] text-clay-deep max-w-3xl">
          We build for clients. We also <em className="text-terracotta">build for ourselves</em>.
        </h1>
        <p className="mt-8 font-instrument text-lg text-clay-mid leading-relaxed max-w-xl">
          Two products, both live, both run day to day by this studio. They are
          the honest version of our portfolio — not case studies about work that
          ended, but software we are still responsible for.
        </p>

        {/* Jump links */}
        <div className="mt-10 flex flex-wrap gap-3">
          {VENTURES.map((v) => (
            <Link
              key={v.slug}
              href={`#${v.slug}`}
              className="btn-clay-light inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              {v.name} <ArrowRight size={14} />
            </Link>
          ))}
        </div>
      </section>

      {/* One long-form block per venture */}
      {VENTURES.map((v, i) => (
        <section
          key={v.slug}
          id={v.slug}
          className={`border-t border-clay-border scroll-mt-20 ${i % 2 === 1 ? "bg-clay-surface" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-12 lg:gap-16">
              {/* Narrative column */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-7">
                  <span className="font-dm-mono text-[11px] tracking-[0.18em] uppercase text-clay-light">
                    {v.kicker}
                  </span>
                  <span className="clay-tag">{v.stage}</span>
                </div>

                <h2 className="font-display font-semibold text-5xl sm:text-6xl tracking-[-0.02em] text-clay-deep mb-5">
                  {v.name}
                </h2>
                <p className="font-instrument text-xl sm:text-2xl text-clay-ink leading-snug max-w-2xl mb-9">
                  {v.tagline}
                </p>

                <div className="space-y-5 max-w-2xl">
                  {v.body.map((para, idx) => (
                    <p key={idx} className="font-instrument text-clay-mid leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Capabilities */}
                <div className="mt-12">
                  <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-mid mb-5">
                    What it does
                  </p>
                  <ul className="border-t border-clay-border max-w-2xl">
                    {v.capabilities.map((c, idx) => (
                      <li
                        key={c}
                        className="grid grid-cols-[3rem_1fr] gap-x-4 py-4 border-b border-clay-border font-instrument text-clay-ink"
                      >
                        <span className="font-dm-mono text-xs text-clay-light pt-1">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spec column */}
              <aside className="lg:sticky lg:top-28 lg:self-start space-y-5">
                <div className="clay-card p-7">
                  <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-light mb-5">
                    At a glance
                  </p>
                  <dl className="border-t border-clay-border">
                    {v.facts.map((f) => (
                      <div key={f.label} className="flex items-baseline justify-between gap-4 py-3 border-b border-clay-border">
                        <dt className="font-dm-mono text-[11px] uppercase tracking-[0.14em] text-clay-light">
                          {f.label}
                        </dt>
                        <dd className="font-instrument text-sm font-semibold text-clay-deep text-right">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="clay-card p-7">
                  <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-clay-light mb-5">
                    Open it
                  </p>
                  <ul className="space-y-5">
                    {v.surfaces.map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display font-semibold text-lg text-clay-deep hover:text-terracotta transition-colors inline-flex items-center gap-1.5"
                        >
                          {s.label} <ArrowUpRight size={15} />
                        </a>
                        <p className="font-instrument text-sm text-clay-mid leading-relaxed mt-1">
                          {s.what}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t border-clay-border bg-clay-deep">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-28 text-center">
          <p className="font-dm-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-6">
            Want one of your own
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-clay-bg mb-5">
            We build these<br />for other people too<em className="text-terracotta">.</em>
          </h2>
          <p className="font-instrument text-white/50 text-lg mb-10 max-w-md mx-auto">
            Same stack, same studio, same two-to-three week delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-terracotta text-white font-instrument font-semibold text-sm transition-colors hover:bg-terracotta-deep"
            >
              Commission a build <ArrowRight size={15} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-instrument font-semibold text-sm hover:border-white/50 hover:text-white transition-colors"
            >
              About the founder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
