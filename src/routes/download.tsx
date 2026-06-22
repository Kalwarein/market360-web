import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import {
  QrCode, CheckCircle2, Smartphone, Zap, Shield, Bell, Star, Download as DownloadIcon,
  Wifi, BatteryCharging, Fingerprint, Globe, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download Market360 — iOS & Android" },
      { name: "description", content: "Download the Market360 marketplace app on iOS and Android. Buy, sell, manage stores, and use the integrated wallet from anywhere in Sierra Leone." },
      { property: "og:title", content: "Download Market360" },
      { property: "og:description", content: "Get the Market360 app on iOS and Android." },
      { property: "og:url", content: "/download" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
  }),
  component: DownloadPage,
});

/* ─── Brand store badges (inline SVG, dark pill style) ──────── */
function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a href="#" aria-label="Download on the App Store"
      className={`group inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white shadow-lg ring-1 ring-white/10 transition-transform hover:scale-[1.03] ${className}`}>
      {/* Apple glyph */}
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true" fill="currentColor">
        <path d="M16.365 1.43c0 1.14-.43 2.22-1.27 3.05-.88.88-2.31 1.55-3.5 1.45-.14-1.16.45-2.36 1.23-3.13.85-.84 2.32-1.47 3.54-1.37zM20.5 17.48c-.55 1.27-.81 1.83-1.52 2.95-.99 1.55-2.39 3.49-4.13 3.51-1.54.02-1.94-1-4.04-1-2.09 0-2.53 1.02-4.07 1-1.74-.02-3.05-1.78-4.04-3.33C.83 17.16.45 11.7 3.13 8.79c1.45-1.58 3.42-2.59 5.5-2.62 1.86-.03 3.62 1.25 4.04 1.25.42 0 2.56-1.55 4.81-1.32.94.04 3.58.38 5.28 2.84-4.65 2.55-3.88 8.99 1.74 8.54z" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
        <span className="mt-0.5 text-lg font-semibold">App Store</span>
      </div>
    </a>
  );
}

function GooglePlayBadge({ className = "" }: { className?: string }) {
  return (
    <a href="#" aria-label="Get it on Google Play"
      className={`group inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white shadow-lg ring-1 ring-white/10 transition-transform hover:scale-[1.03] ${className}`}>
      {/* Google Play triangle, 4-color */}
      <svg viewBox="0 0 512 512" className="h-8 w-8" aria-hidden="true">
        <defs>
          <linearGradient id="gpBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C3FF" />
            <stop offset="100%" stopColor="#1A73E8" />
          </linearGradient>
          <linearGradient id="gpRed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF3A44" />
            <stop offset="100%" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="gpYellow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE000" />
            <stop offset="100%" stopColor="#FFBD00" />
          </linearGradient>
          <linearGradient id="gpGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F076" />
            <stop offset="100%" stopColor="#00A05A" />
          </linearGradient>
        </defs>
        <path d="M48 32v448l240-224L48 32z" fill="url(#gpBlue)" />
        <path d="M48 32l240 224 64-60L96 18a32 32 0 0 0-48 14z" fill="url(#gpGreen)" />
        <path d="M48 480l304-164-64-60L48 480z" fill="url(#gpRed)" />
        <path d="M448 224l-96-52-64 60 64 60 96-52a32 32 0 0 0 0-16z" fill="url(#gpYellow)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
        <span className="mt-0.5 text-lg font-semibold">Google Play</span>
      </div>
    </a>
  );
}

function DownloadPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <PageHero
        eyebrow="Download · iOS & Android"
        title={<>Market360, in your <span className="gradient-text">pocket.</span></>}
        description="A premium marketplace experience designed for mobile. Fast, secure, and beautifully simple — built for everyday life in Sierra Leone."
      >
        <AppStoreBadge />
        <GooglePlayBadge />
      </PageHero>

      {/* QR + WHY */}
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
          <div className="surface-card p-8">
            <div className="flex items-center gap-5">
              <div className="grid h-32 w-32 place-items-center rounded-2xl bg-accent text-primary">
                <QrCode className="h-16 w-16" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Scan to install</p>
                <p className="text-2xl font-bold">Get the app</p>
                <div className="mt-3 flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  <span className="ml-1 font-medium">4.9</span>
                  <span className="ml-1 text-muted-foreground">· 2,400+ ratings</span>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <AppStoreBadge className="w-full justify-center" />
              <GooglePlayBadge className="w-full justify-center" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Free to install · No ads · Works on 3G &amp; Wi-Fi
            </p>
          </div>

          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Why people love the app</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A marketplace that just works.</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Market360 was rebuilt from the ground up for everyday Sierra Leonean life — fast on slow networks,
              gentle on battery, and packed with safety features.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Lightning-fast browsing — even on 2G/3G",
                "Secure escrow checkout with fraud protection",
                "Integrated wallet & instant withdrawals",
                "Real-time chat with sellers",
                "Personalized recommendations that learn what you love",
                "Offline-ready cart & saved listings",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">A peek inside</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Designed for delight.</h2>
            <p className="mt-3 text-muted-foreground">
              Every screen has been crafted for clarity, speed, and trust — from home feed to checkout.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Home feed", "Product page", "Wallet", "Seller dashboard"].map((label, i) => (
              <div key={label} className="surface-card surface-card-hover aspect-[9/16] overflow-hidden p-0">
                <div className="relative h-full w-full bg-gradient-to-br from-primary/15 via-background to-primary-glow/10">
                  <div className="absolute inset-x-4 top-4 h-6 rounded-full bg-background/80 backdrop-blur" />
                  <div className="absolute inset-x-6 top-16 h-32 rounded-2xl border border-border bg-background/80 backdrop-blur" />
                  <div className="absolute inset-x-6 top-52 grid grid-cols-2 gap-2">
                    <div className="h-20 rounded-xl border border-border bg-background/80" />
                    <div className="h-20 rounded-xl border border-border bg-background/80" />
                  </div>
                  <div className="absolute inset-x-0 bottom-4 text-center text-sm font-semibold">{label}</div>
                  <div className="absolute top-3 right-6 text-[10px] text-muted-foreground">0{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="eyebrow">Built for real life</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Engineered for Sierra Leone.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, t: "Instant performance", d: "Sub-100ms interactions, even on mid-range Androids." },
              { icon: Wifi, t: "Low-data mode", d: "Smart image compression saves up to 70% of mobile data." },
              { icon: BatteryCharging, t: "Battery friendly", d: "Optimized background sync so the app sips, not gulps." },
              { icon: Fingerprint, t: "Biometric login", d: "Sign in with your fingerprint or Face ID — no passwords." },
              { icon: Shield, t: "Bank-grade security", d: "End-to-end encryption and verified seller badges." },
              { icon: Bell, t: "Push alerts", d: "Order updates, chat messages, and payouts in real time." },
              { icon: Globe, t: "Works everywhere", d: "Freetown, Bo, Kenema, Makeni — and beyond." },
              { icon: Smartphone, t: "Universal", d: "iOS 14+ and Android 9 (Pie) or later." },
            ].map((f) => (
              <div key={f.t} className="surface-card surface-card-hover p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-semibold">{f.t}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICE REQUIREMENTS + FAQ */}
      <section className="section-pad bg-surface border-t border-border">
        <div className="container-pro max-w-3xl">
          <h2 className="text-3xl font-bold">Device requirements</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="surface-card p-5">
              <p className="font-semibold flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M16.365 1.43c0 1.14-.43 2.22-1.27 3.05-.88.88-2.31 1.55-3.5 1.45-.14-1.16.45-2.36 1.23-3.13.85-.84 2.32-1.47 3.54-1.37zM20.5 17.48c-.55 1.27-.81 1.83-1.52 2.95-.99 1.55-2.39 3.49-4.13 3.51-1.54.02-1.94-1-4.04-1-2.09 0-2.53 1.02-4.07 1-1.74-.02-3.05-1.78-4.04-3.33C.83 17.16.45 11.7 3.13 8.79c1.45-1.58 3.42-2.59 5.5-2.62 1.86-.03 3.62 1.25 4.04 1.25.42 0 2.56-1.55 4.81-1.32.94.04 3.58.38 5.28 2.84-4.65 2.55-3.88 8.99 1.74 8.54z" /></svg>
                iOS
              </p>
              <p className="mt-2 text-sm text-muted-foreground">iPhone running iOS 14 or later. ~80 MB storage.</p>
            </div>
            <div className="surface-card p-5">
              <p className="font-semibold flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor"><path d="M17.5 12.5a1 1 0 110-2 1 1 0 010 2zm-11 0a1 1 0 110-2 1 1 0 010 2zm10.7-5.6l1.4-2.4a.3.3 0 00-.5-.3l-1.4 2.4A8 8 0 0012 5.5a8 8 0 00-4.7 1.1L5.9 4.2a.3.3 0 00-.5.3l1.4 2.4A7.5 7.5 0 003 13.5h18a7.5 7.5 0 00-3.8-6.6zM3 14.5v3.7A1.8 1.8 0 004.8 20h.7v2.2c0 .4.3.7.7.7s.7-.3.7-.7V20h4.2v2.2c0 .4.3.7.7.7s.7-.3.7-.7V20h4.2v2.2c0 .4.3.7.7.7s.7-.3.7-.7V20h.7a1.8 1.8 0 001.8-1.8v-3.7H3z" /></svg>
                Android
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Android 9 (Pie) or later. ~95 MB storage.</p>
            </div>
          </div>

          <h2 className="mt-14 text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: "Is the app free?", a: "Yes — free to download and use. Sellers pay a small per-transaction fee only when a sale completes." },
              { q: "Do I need an account?", a: "Browsing is open. Creating an account unlocks buying, selling, and the wallet — it takes under a minute." },
              { q: "How much data does it use?", a: "With Low-Data Mode on, typical browsing uses ~5 MB per hour. Images load in compressed WebP." },
              { q: "Is it safe to pay through the app?", a: "Yes. All payments are escrowed and protected by end-to-end encryption and 24/7 fraud monitoring." },
              { q: "Can I become a tester?", a: <>Yes — visit our <Link to="/tester" className="text-primary font-medium hover:underline">Tester program</Link> page.</> },
              { q: "Will it work on my old phone?", a: "If your phone runs Android 9+ or iOS 14+, you're good. The app is optimized for entry-level devices." },
            ].map((f) => (
              <details key={f.q} className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-accent/60 to-background p-8 text-center">
            <DownloadIcon className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-3 text-2xl font-bold">Ready to join Market360?</h3>
            <p className="mt-2 text-muted-foreground">Install the app and start buying or selling in under a minute.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
