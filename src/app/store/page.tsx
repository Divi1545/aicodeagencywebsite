"use client";

import { useState } from "react";
import { PRODUCTS, BUNDLES, type ProductType } from "@/lib/products";
import { ArrowRight, Loader2, Star } from "lucide-react";

type Tab = "all" | ProductType;

const TABS: { value: Tab; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "chatbot", label: "Chatbots" },
  { value: "tool", label: "Tools" },
  { value: "platform", label: "Platforms" },
  { value: "bundle", label: "Bundles" },
];

async function handleBuy(productId: string, isBundle = false) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, isBundle }),
  });
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Failed to start checkout. Please try again.");
  }
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const [loading, setLoading] = useState(false);

  async function onBuy() {
    setLoading(true);
    await handleBuy(product.id);
    setLoading(false);
  }

  return (
    <div className="group flex flex-col p-6 rounded-xl border border-brand-border bg-brand-surface/30 hover:border-brand-green/30 hover:bg-brand-surface/60 transition-all">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{product.emoji}</span>
        <span className="font-dm-mono text-[10px] border border-brand-border text-brand-white/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>
      <h3 className="font-syne font-bold text-base text-brand-white mb-2">
        {product.name}
      </h3>
      <p className="font-instrument text-sm text-brand-white/50 leading-relaxed flex-1 mb-4">
        {product.description}
      </p>
      <ul className="space-y-1 mb-6">
        {product.features.slice(0, 3).map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs font-instrument text-brand-white/40"
          >
            <span className="text-brand-green text-[10px]">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-syne font-black text-2xl text-brand-white">
          {product.priceLabel}
        </span>
        <button
          onClick={onBuy}
          disabled={loading}
          className="group/btn inline-flex items-center gap-2 font-syne font-bold text-xs px-4 py-2.5 bg-brand-green text-brand-bg rounded hover:bg-brand-green/90 transition-all disabled:opacity-50"
        >
          {loading ? (
            <Loader2 size={12} className="animate-spin" />
          ) : (
            <>
              BUY NOW
              <ArrowRight
                size={12}
                className="group-hover/btn:translate-x-0.5 transition-transform"
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function BundleCard({ bundle, highlight }: { bundle: (typeof BUNDLES)[0]; highlight?: string }) {
  const [loading, setLoading] = useState(false);

  async function onBuy() {
    setLoading(true);
    await handleBuy(bundle.id, true);
    setLoading(false);
  }

  return (
    <div
      className={`relative flex flex-col p-8 rounded-xl border transition-all ${
        highlight
          ? "border-brand-green bg-brand-green/5 glow-green"
          : "border-brand-border bg-brand-surface/30"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-brand-green text-brand-bg font-syne font-bold text-xs px-3 py-1 rounded-full">
          <Star size={10} fill="currentColor" /> {highlight}
        </div>
      )}
      <h3 className="font-syne font-black text-xl text-brand-white mb-2">
        {bundle.name}
      </h3>
      <p className="font-instrument text-sm text-brand-white/50 mb-6">
        {bundle.description}
      </p>
      <ul className="space-y-2 flex-1 mb-8">
        {bundle.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-instrument text-brand-white/70"
          >
            <span className="text-brand-green mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="font-syne font-black text-3xl text-brand-white">
          {bundle.priceLabel}
        </span>
        <button
          onClick={onBuy}
          disabled={loading}
          className={`inline-flex items-center gap-2 font-syne font-bold text-sm px-5 py-3 rounded transition-all disabled:opacity-50 ${
            highlight
              ? "bg-brand-green text-brand-bg hover:bg-brand-green/90"
              : "border border-brand-border text-brand-white hover:border-brand-green/40"
          }`}
        >
          {loading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <>
              BUY NOW <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filteredProducts =
    activeTab === "all" || activeTab === "bundle"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const showBundles = activeTab === "all" || activeTab === "bundle";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
            AI PRODUCT STORE
          </span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-brand-white mt-3 mb-4">
            Buy. Deploy.
            <br />
            <span className="text-gradient-green">Run Autonomously.</span>
          </h1>
          <p className="font-instrument text-brand-white/50 text-lg max-w-xl">
            Ready-to-deploy AI tools. Buy once, plug in your API key, and run
            your business on autopilot.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`font-dm-mono text-xs px-4 py-2 rounded-full border transition-all tracking-wider uppercase ${
                activeTab === tab.value
                  ? "bg-brand-green text-brand-bg border-brand-green"
                  : "border-brand-border text-brand-white/50 hover:border-brand-green/40 hover:text-brand-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {activeTab !== "bundle" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Bundles */}
        {showBundles && (
          <div>
            <div className="mb-8">
              <span className="font-dm-mono text-xs text-brand-green tracking-widest uppercase">
                SAVE MORE
              </span>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-brand-white mt-2">
                Bundle Pricing
              </h2>
              <p className="font-instrument text-brand-white/50 mt-2">
                Get more for less. Our bundles include everything you need to
                launch an AI-powered business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BUNDLES.map((bundle) => (
                <BundleCard
                  key={bundle.id}
                  bundle={bundle}
                  highlight={bundle.highlight}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-16 p-6 rounded-xl border border-brand-border bg-brand-surface/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-syne font-bold text-brand-white mb-1">
              Need a custom build?
            </h3>
            <p className="font-instrument text-sm text-brand-white/50">
              Don&apos;t see what you need? We build custom AI solutions. Commission
              anything from a single chatbot to a full SaaS platform.
            </p>
          </div>
          <a
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 font-syne font-bold text-sm px-5 py-2.5 border border-brand-green/40 text-brand-green rounded hover:bg-brand-green/10 transition-all"
          >
            VIEW SERVICES <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
