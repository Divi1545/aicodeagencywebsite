"use client";

import { useState } from "react";
import { PRODUCTS, BUNDLES, type ProductType } from "@/lib/products";
import { ArrowRight, Loader2, Star } from "lucide-react";

type Tab = "all" | ProductType;

const TABS: { value: Tab; label: string }[] = [
  { value: "all",      label: "All Products" },
  { value: "chatbot",  label: "Chatbots" },
  { value: "tool",     label: "Tools" },
  { value: "platform", label: "Platforms" },
  { value: "bundle",   label: "Bundles" },
];

async function handleBuy(productId: string, isBundle = false) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, isBundle }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else alert("Failed to start checkout. Please try again.");
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const [loading, setLoading] = useState(false);
  async function onBuy() { setLoading(true); await handleBuy(product.id); setLoading(false); }

  return (
    <div className="clay-card clay-card-hover flex flex-col p-6">
      <div className="flex items-start justify-between mb-5">
        <span className="text-3xl">{product.emoji}</span>
        <span className="clay-tag">{product.category}</span>
      </div>
      <h3 className="font-syne font-bold text-base text-clay-deep mb-2">{product.name}</h3>
      <p className="font-instrument text-sm text-clay-mid leading-relaxed flex-1 mb-4">{product.description}</p>
      <ul className="space-y-1.5 mb-6">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs font-instrument text-clay-mid">
            <span className="w-4 h-4 rounded-full bg-clay-faint border border-clay-border flex items-center justify-center text-[9px] text-clay-deep shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-clay-border">
        <span className="font-syne font-black text-2xl text-clay-deep">{product.priceLabel}</span>
        <button
          onClick={onBuy}
          disabled={loading}
          className="btn-clay-dark inline-flex items-center gap-2 px-5 py-2.5 text-xs disabled:opacity-50"
        >
          {loading ? <Loader2 size={12} className="animate-spin" /> : <><span>Buy Now</span><ArrowRight size={12} /></>}
        </button>
      </div>
    </div>
  );
}

function BundleCard({ bundle }: { bundle: (typeof BUNDLES)[0] }) {
  const [loading, setLoading] = useState(false);
  const isPopular = !!bundle.highlight;
  async function onBuy() { setLoading(true); await handleBuy(bundle.id, true); setLoading(false); }

  return (
    <div
      className={`relative flex flex-col p-8 rounded-[1.5rem] border transition-all ${
        isPopular
          ? "border-clay-deep bg-clay-deep text-white"
          : "clay-card"
      }`}
      style={isPopular ? { boxShadow: "0 28px 80px rgba(0,0,0,0.18), 0 8px 28px rgba(0,0,0,0.10)" } : {}}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-white text-clay-deep font-syne font-bold text-xs px-4 py-1.5 rounded-full shadow-clay-sm">
          <Star size={10} fill="currentColor" /> {bundle.highlight}
        </div>
      )}
      <h3 className={`font-syne font-black text-xl mb-2 ${isPopular ? "text-white" : "text-clay-deep"}`}>{bundle.name}</h3>
      <p className={`font-instrument text-sm mb-6 ${isPopular ? "text-white/60" : "text-clay-mid"}`}>{bundle.description}</p>
      <ul className="space-y-2.5 flex-1 mb-8">
        {bundle.includes.map((item) => (
          <li key={item} className={`flex items-start gap-2.5 text-sm font-instrument ${isPopular ? "text-white/80" : "text-clay-mid"}`}>
            <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[9px] ${isPopular ? "bg-white/10 text-white" : "bg-clay-faint text-clay-deep border border-clay-border"}`}>✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className={`font-syne font-black text-3xl ${isPopular ? "text-white" : "text-clay-deep"}`}>{bundle.priceLabel}</span>
        <button
          onClick={onBuy}
          disabled={loading}
          className={`inline-flex items-center gap-2 font-syne font-bold text-sm px-5 py-3 rounded-full transition-all disabled:opacity-50 ${
            isPopular
              ? "bg-white text-clay-deep hover:-translate-y-0.5"
              : "btn-clay-dark"
          }`}
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <>Buy Now <ArrowRight size={14} /></>}
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="clay-tag">AI Product Store</span>
          <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-clay-deep mt-4 mb-4 tracking-tight">
            Buy. Deploy.<br />
            <span className="text-gradient-dark">Run Autonomously.</span>
          </h1>
          <p className="font-instrument text-clay-mid text-lg max-w-xl">
            Ready-to-deploy AI tools. Buy once, plug in your API key, and run your business on autopilot.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`font-dm-mono text-xs px-5 py-2 rounded-full border transition-all tracking-wider uppercase ${
                activeTab === tab.value
                  ? "bg-clay-deep text-white border-clay-deep shadow-clay-btn"
                  : "border-clay-border text-clay-mid hover:border-clay-deep hover:text-clay-deep bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {activeTab !== "bundle" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-24">
            {filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {/* Bundles */}
        {showBundles && (
          <div>
            <div className="mb-10">
              <span className="clay-tag">Save More</span>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-clay-deep mt-4 mb-2 tracking-tight">Bundle Pricing</h2>
              <p className="font-instrument text-clay-mid">Everything you need to launch an AI-powered business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BUNDLES.map((b) => <BundleCard key={b.id} bundle={b} />)}
            </div>
          </div>
        )}

        {/* Custom build CTA */}
        <div className="mt-16 clay-card p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <h3 className="font-syne font-bold text-clay-deep mb-1">Need a custom build?</h3>
            <p className="font-instrument text-sm text-clay-mid">
              Don&apos;t see what you need? We build custom AI solutions — from single chatbots to full SaaS platforms.
            </p>
          </div>
          <a href="/services" className="btn-clay-light shrink-0 inline-flex items-center gap-2 px-5 py-3 text-sm">
            View Services <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
