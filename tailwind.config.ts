import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        "dm-mono": ["var(--font-dm-mono)", "monospace"],
        instrument: ["var(--font-instrument-sans)", "sans-serif"],
      },
      colors: {
        // Clay / 3D white system
        "clay-bg": "#F0EFE9",
        "clay-surface": "#FFFFFF",
        "clay-card": "#FAFAF7",
        "clay-border": "#E2E1D8",
        "clay-faint": "#ECEAE3",
        "clay-deep": "#0D0D0D",
        "clay-charcoal": "#1C1C1C",
        "clay-mid": "#5C5C5C",
        "clay-light": "#9A9A96",
        "clay-ink": "#2D2D2A",
        // Legacy brand tokens
        "brand-bg": "#060608",
        "brand-surface": "#0E0E10",
        "brand-border": "#1A1A1E",
        "brand-green": "#C8FF00",
        "brand-cyan": "#00F5FF",
        "brand-white": "#F4F2EE",
        // shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        "clay-xs":  "0 1px 3px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.03)",
        "clay-sm":  "0 2px 10px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        "clay-md":  "0 6px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)",
        "clay-lg":  "0 16px 56px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
        "clay-xl":  "0 28px 80px rgba(0,0,0,0.13), 0 8px 28px rgba(0,0,0,0.07)",
        "clay-float":"0 40px 100px rgba(0,0,0,0.16), 0 12px 40px rgba(0,0,0,0.09)",
        "clay-btn": "0 4px 16px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.12)",
        "clay-btn-hover":"0 8px 28px rgba(0,0,0,0.24), 0 2px 8px rgba(0,0,0,0.12)",
        "glass":    "0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
        "inset-soft":"inset 0 2px 6px rgba(0,0,0,0.05), inset 0 1px 2px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":       { transform: "translateY(-14px) rotate(1.5deg)" },
          "66%":       { transform: "translateY(-7px) rotate(-0.8deg)" },
        },
        "spin-slow":    { "0%": { transform: "rotate(0deg)" },   "100%": { transform: "rotate(360deg)" } },
        "spin-reverse": { "0%": { transform: "rotate(360deg)" }, "100%": { transform: "rotate(0deg)" } },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%":       { opacity: "0.8", transform: "scale(1.04)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:         "marquee 30s linear infinite",
        "float-slow":    "float-slow 7s ease-in-out infinite",
        "spin-slow":     "spin-slow 14s linear infinite",
        "spin-reverse":  "spin-reverse 20s linear infinite",
        "pulse-soft":    "pulse-soft 4s ease-in-out infinite",
        "accordion-down":"accordion-down 0.2s ease-out",
        "accordion-up":  "accordion-up 0.2s ease-out",
        "fade-up":       "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
