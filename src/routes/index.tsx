import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag, Wallet, BarChart3, Shield, Store, Smartphone, Search, Truck,
  CheckCircle2, Sparkles, ArrowRight, Star, Zap, Lock, Users, TrendingUp,
  PackageCheck, MessageCircle, Apple, PlayCircle, Bell, ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Market360 — The Modern Marketplace for Buyers & Sellers" },
      { name: "description", content: "Buy, sell, and manage stores on Market360. Built-in wallet, analytics, fraud protection, and seller tools — the all-in-one marketplace." },
      { property: "og:title", content: "Market360 — The Modern Marketplace" },
      { property: "og:description", content: "Buy, sell, and grow on Market360 — the trusted marketplace platform." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <ValueProps />
      <BuySellShowcase />
      <WalletShowcase />
      <SellerDashboard />
      <Analytics />
      <Security />
      <TesterRecruit />
      <DownloadCta />
      <NewsPreview />
      <FAQ />
      <FinalCta />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-primary-glow/15 blur-3xl" aria-hidden />
      <div className="container-pro relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> New · Tester program is open</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
              The marketplace where <span className="gradient-text">commerce comes full circle.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Market360 lets you buy, sell, and manage stores from one app — with an integrated wallet, real-time analytics, and trust built into every order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/download" className="btn-primary"><Smartphone className="h-4 w-4" /> Download the App</Link>
              <Link to="/tester" className="btn-ghost">Become a Tester <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                <span className="ml-1 font-medium text-foreground">4.9</span>
                <span>from early testers</span>
              </div>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Bank-grade security</span>
            </div>
          </div>
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="surface-card surface-card-hover relative overflow-hidden rounded-3xl p-6 animate-fade-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Today's overview</p>
              <p className="text-xs text-muted-foreground">Live · last 24h</p>
            </div>
          </div>
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">+18%</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { label: "Revenue", value: "$12,480", icon: TrendingUp },
            { label: "Orders", value: "284", icon: PackageCheck },
            { label: "Visitors", value: "9.2K", icon: Users },
            { label: "Conv. rate", value: "3.6%", icon: Zap },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface p-4">
              <s.icon className="h-4 w-4 text-primary" />
              <p className="mt-3 text-lg font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-surface p-4">
          <div className="flex items-end justify-between gap-2 h-24">
            {[40, 65, 50, 80, 55, 90, 72, 95, 68, 88, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary-glow" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Sales · last 12 hours</p>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 hidden sm:block surface-card animate-float rounded-2xl p-4 w-56">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary"><Wallet className="h-4 w-4" /></div>
          <div>
            <p className="text-xs text-muted-foreground">Wallet balance</p>
            <p className="text-sm font-bold">$3,420.50</p>
          </div>
        </div>
      </div>
      <div className="absolute -top-6 -right-4 hidden sm:flex surface-card animate-float rounded-2xl p-3 items-center gap-2.5" style={{ animationDelay: "1.2s" }}>
        <CheckCircle2 className="h-5 w-5 text-primary" />
        <div>
          <p className="text-xs font-semibold">Order #4821 paid</p>
          <p className="text-[10px] text-muted-foreground">Escrow protected</p>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const stats = [
    { v: "120K+", l: "Active buyers" },
    { v: "8.4K", l: "Verified stores" },
    { v: "$24M", l: "Volume processed" },
    { v: "99.98%", l: "Uptime" },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-pro grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-2xl font-bold text-foreground md:text-3xl">{s.v}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    { icon: ShoppingBag, t: "Buy with confidence", d: "Discover trusted sellers, secure checkout, and buyer protection on every order." },
    { icon: Store, t: "Sell effortlessly", d: "Open your store in minutes. List, ship, and grow with our seller suite." },
    { icon: Wallet, t: "Built-in wallet", d: "Hold, send, and withdraw funds in one place — fast and frictionless." },
    { icon: BarChart3, t: "Real-time analytics", d: "See what's selling, who's buying, and where to grow next." },
    { icon: Shield, t: "Trust & safety", d: "Fraud detection, dispute resolution, and verified identities." },
    { icon: Smartphone, t: "Mobile-first", d: "A premium experience designed for the way people shop today." },
  ];
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Market360</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">A complete marketplace, end to end.</h2>
          <p className="mt-4 text-muted-foreground">Everything buyers and sellers need — beautifully integrated.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="surface-card surface-card-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuySellShowcase() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <span className="eyebrow">Buy & Sell</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">One app. Two sides of the marketplace.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Switch between buying and selling with a tap. Browse millions of listings, follow stores, and manage your own catalog — all in one place.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Smart search and personalized discovery",
              "Real-time order tracking",
              "Direct chat between buyer and seller",
              "Escrow-protected payments",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex gap-3">
            <Link to="/features" className="btn-primary">Explore features</Link>
            <Link to="/seller-solutions" className="btn-ghost">Sell on Market360</Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Search, t: "Discover", d: "Curated for you, every day." },
            { icon: Truck, t: "Track", d: "Live status, every step." },
            { icon: MessageCircle, t: "Chat", d: "Talk directly to sellers." },
            { icon: Star, t: "Review", d: "Build trust, together." },
          ].map((c, i) => (
            <div key={c.t} className={`surface-card surface-card-hover p-6 ${i % 2 ? "sm:translate-y-6" : ""}`}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{c.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WalletShowcase() {
  return (
    <section className="section-pad">
      <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-glow p-7 text-primary-foreground shadow-[var(--shadow-elevated)]">
              <div className="flex items-center justify-between">
                <p className="text-sm/none opacity-80">Market360 Wallet</p>
                <Wallet className="h-5 w-5 opacity-80" />
              </div>
              <p className="mt-10 text-xs uppercase opacity-70">Available balance</p>
              <p className="mt-1 text-4xl font-bold tracking-tight">$3,420.50</p>
              <div className="mt-8 flex items-center justify-between text-xs">
                <span className="opacity-80">•••• 4821</span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 font-medium">Verified</span>
              </div>
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[{ l: "Top up" }, { l: "Send" }, { l: "Withdraw" }].map((a) => (
                <div key={a.l} className="surface-card p-3 text-center text-sm font-medium">{a.l}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Integrated wallet</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Money that moves at the speed of your store.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Receive payments instantly, withdraw to your bank, and split funds across stores — no third-party headaches.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Instant settlements",
              "Multi-store balances",
              "Free internal transfers",
              "Detailed transaction history",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SellerDashboard() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Seller dashboard</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Run your store like a pro.</h2>
          <p className="mt-4 text-muted-foreground">A control center built for serious sellers.</p>
        </div>
        <div className="mt-12 surface-card overflow-hidden p-0">
          <div className="grid lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block border-r border-border bg-background/60 p-5 space-y-1">
              {["Overview", "Orders", "Products", "Customers", "Analytics", "Wallet", "Settings"].map((s, i) => (
                <div key={s} className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm ${i === 0 ? "bg-accent text-primary font-semibold" : "text-muted-foreground"}`}>
                  {s} <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                </div>
              ))}
            </aside>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Good morning, Layla</p>
                  <h3 className="text-xl font-bold">Store performance</h3>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">Live</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { l: "Today's sales", v: "$1,284", c: "+12%" },
                  { l: "Orders", v: "42", c: "+8%" },
                  { l: "Pending", v: "7", c: "—" },
                ].map((k) => (
                  <div key={k.l} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-xs text-muted-foreground">{k.l}</p>
                    <p className="mt-1 text-2xl font-bold">{k.v}</p>
                    <p className="text-xs font-medium text-primary">{k.c}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm font-semibold">Recent orders</p>
                <div className="mt-4 space-y-3">
                  {[
                    { id: "#4821", n: "Nora A.", a: "$48.00", s: "Paid" },
                    { id: "#4820", n: "Omar K.", a: "$129.00", s: "Shipped" },
                    { id: "#4819", n: "Sara M.", a: "$22.50", s: "Delivered" },
                  ].map((o) => (
                    <div key={o.id} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 text-sm">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary text-xs font-bold">{o.n[0]}</div>
                      <div className="min-w-0"><p className="truncate font-medium">{o.n}</p><p className="text-xs text-muted-foreground">{o.id}</p></div>
                      <p className="font-semibold">{o.a}</p>
                      <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">{o.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Analytics() {
  return (
    <section className="section-pad">
      <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Analytics</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Insights that turn into income.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            See what's working in real time. Track revenue, conversion, repeat buyers, and traffic — with clarity that drives action.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Revenue trends", "Top products", "Buyer behavior", "Traffic sources", "Conversion funnel", "Inventory alerts"].map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> {b}</li>
            ))}
          </ul>
        </div>
        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Revenue · 7 days</p>
            <span className="text-xs text-muted-foreground">+18.4% vs last week</span>
          </div>
          <div className="mt-6 h-44">
            <svg viewBox="0 0 400 160" className="h-full w-full">
              <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.19 145)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="oklch(0.72 0.19 145)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,120 C40,90 80,110 120,80 C160,50 200,90 240,60 C280,30 320,70 360,40 L400,30 L400,160 L0,160 Z" fill="url(#grad)" />
              <path d="M0,120 C40,90 80,110 120,80 C160,50 200,90 240,60 C280,30 320,70 360,40 L400,30" fill="none" stroke="oklch(0.66 0.19 145)" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[{ l: "Sessions", v: "12.4K" }, { l: "Conv.", v: "3.6%" }, { l: "AOV", v: "$58" }].map((k) => (
              <div key={k.l} className="rounded-xl border border-border bg-surface p-3 text-center">
                <p className="text-lg font-bold">{k.v}</p>
                <p className="text-[11px] uppercase text-muted-foreground tracking-wider">{k.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: Shield, t: "Fraud protection", d: "AI-powered detection on every transaction." },
    { icon: Lock, t: "Encrypted by default", d: "End-to-end protection of payments and chat." },
    { icon: Users, t: "Verified identities", d: "KYC for sellers, badges for trust." },
    { icon: Bell, t: "Real-time alerts", d: "Get notified the moment anything changes." },
  ];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trust & Safety</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Security built into every order.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="surface-card surface-card-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <i.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{i.t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/safety" className="btn-ghost">Read marketplace safety <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function TesterRecruit() {
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="surface-card relative overflow-hidden p-8 md:p-12">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center relative">
            <div>
              <span className="eyebrow">Now recruiting</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Become a Market360 tester.</h2>
              <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                Get early access, shape the product, and join a community of builders. Real perks, real impact.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/tester" className="btn-primary">Join the program <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/download" className="btn-ghost">Download app</Link>
              </div>
            </div>
            <ul className="grid gap-3">
              {["Early access to new features", "Direct line to the product team", "Exclusive tester badge", "Community of pro testers"].map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadCta() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Download</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Take Market360 with you.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Available on iOS and Android. Designed for speed, built for trust.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="btn-primary"><Apple className="h-5 w-5" /> App Store</a>
            <a href="#" className="btn-ghost"><PlayCircle className="h-5 w-5" /> Google Play</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
          {[
            { t: "Lightning fast", d: "Under 2s screens." },
            { t: "Offline ready", d: "Browse anytime." },
            { t: "Secure login", d: "Biometric & 2FA." },
            { t: "Push alerts", d: "Never miss a sale." },
          ].map((f) => (
            <div key={f.t} className="surface-card p-4">
              <p className="font-semibold text-sm">{f.t}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsPreview() {
  const posts = [
    { t: "Market360 opens public tester program", c: "Product", d: "Be the first to try new tools, with perks for early adopters." },
    { t: "Wallet 2.0: faster settlements, lower fees", c: "Update", d: "Get paid in minutes with our re-engineered wallet." },
    { t: "Roadmap: what's coming this quarter", c: "Roadmap", d: "Storefronts, bulk uploads, and smarter analytics." },
  ];
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="eyebrow">News & Updates</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Fresh from the Market360 team.</h2>
          </div>
          <Link to="/news" className="btn-ghost">All news <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="surface-card surface-card-hover p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.c}</span>
              <h3 className="mt-3 font-semibold text-lg leading-snug">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <Link to="/news" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Read more <ArrowRight className="h-3.5 w-3.5" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is Market360 free to use?", a: "Yes, browsing and buying is free. Sellers pay a small fee per successful transaction." },
    { q: "How does the wallet work?", a: "Funds are held securely in your Market360 wallet and can be withdrawn to your bank at any time." },
    { q: "How are disputes handled?", a: "Our trust team reviews every dispute with escrow protection until resolution." },
    { q: "Can I become a tester?", a: "Absolutely — head to the tester program page and sign up. We're actively recruiting." },
  ];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Questions, answered.</h2>
          <p className="mt-3 text-muted-foreground">Still curious? <Link to="/contact" className="text-primary font-medium">Talk to us →</Link></p>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-10 text-center text-primary-foreground md:p-16">
          <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">Ready to experience the modern marketplace?</h2>
          <p className="relative mx-auto mt-4 max-w-xl opacity-90">Join thousands of buyers and sellers building on Market360.</p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/download" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5">
              Download the app <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tester" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:bg-white/20">
              Become a tester
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
