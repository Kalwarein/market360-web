import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag, Wallet, BarChart3, Shield, Store, Smartphone, Search, Truck,
  CheckCircle2, ArrowRight, Star, Lock, Users, TrendingUp,
  PackageCheck, MessageCircle, Apple, PlayCircle, Bell, ChevronRight,
  Globe, CreditCard, Zap, RefreshCw, Award, MapPin, ChevronDown,
  FileText, Headphones, Clock, BarChart2, PieChart, Activity,
  ShieldCheck, Fingerprint, AlertTriangle, Eye, Package, LayoutGrid,
  UserCheck, DollarSign, Repeat, ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import imgBuyer from "@/assets/img-buyer.jpg.asset.json";
import imgSeller from "@/assets/img-seller.jpg.asset.json";
import imgWallet from "@/assets/img-wallet.jpg.asset.json";
import imgDelivery from "@/assets/img-delivery.jpg.asset.json";
import imgHero from "@/assets/img-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Market360 — Sierra Leone's Digital Commerce Platform" },
      {
        name: "description",
        content:
          "Market360 is Sierra Leone's leading marketplace platform. Buy, sell, and manage stores with an integrated digital wallet, real-time analytics, and built-in fraud protection.",
      },
      { property: "og:title", content: "Market360 — Sierra Leone's Digital Commerce Platform" },
      { property: "og:description", content: "Buy, sell, and grow on Market360 — the trusted marketplace for Sierra Leone." },
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
      <FlyerShowcase />
      <TrustBar />
      <PlatformOverview />
      <BuyerExperience />
      <SellerExperience />
      <WalletShowcase />
      <SellerDashboard />
      <Analytics />
      <Security />
      <HowItWorks />
      <RegionalImpact />
      <Integrations />
      <SupportAndCompliance />
      <TesterRecruit />
      <DownloadCta />
      <NewsPreview />
      <FAQ />
      <FinalCta />
    </SiteLayout>
  );
}

/* ─── FLYER SHOWCASE ────────────────────────────────────────── */
function FlyerShowcase() {
  const flyers = [
  { src: flyerBuysell.url, alt: "Market360 — Buy. Sell. Pay. Grow." },
  ];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Market360 experience</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            One app. <span className="gradient-text">Endless opportunities.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how Market360 brings shopping, selling, payments, and delivery into one beautifully simple experience.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {flyers.map((f) => (
            <div key={f.alt} className="surface-card surface-card-hover overflow-hidden p-0">
              <img src={f.src} alt={f.alt} className="w-full h-auto block" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HERO ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-primary-glow/15 blur-3xl" aria-hidden />
      <div className="container-pro relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" /> Sierra Leone's #1 Online Marketplace
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
              Commerce, payments, and growth —{" "}
              <span className="gradient-text">built for Sierra Leone.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Market360 is an all-in-one commerce platform where businesses and individuals buy, sell, and transact securely — with a built-in digital wallet, real-time analytics, and fraud protection on every order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/download" className="btn-primary">
                <Smartphone className="h-4 w-4" /> Download the App
              </Link>
              <Link to="/seller-solutions" className="btn-ghost">
                Start selling <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="ml-1 font-medium text-foreground">4.9</span>
                <span>from early testers</span>
              </div>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" /> Bank-grade encryption
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Built in Sierra Leone
              </span>
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
              <p className="text-sm font-semibold">Store overview</p>
              <p className="text-xs text-muted-foreground">Live · last 24h</p>
            </div>
          </div>
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
            +18%
          </span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { label: "Revenue", value: "Le 98.4M", icon: TrendingUp },
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
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary-glow"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Sales · last 12 hours</p>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 hidden sm:block surface-card animate-float rounded-2xl p-4 w-56">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary">
            <Wallet className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Wallet balance</p>
            <p className="text-sm font-bold">Le 27,364,000</p>
          </div>
        </div>
      </div>
      <div
        className="absolute -top-6 -right-4 hidden sm:flex surface-card animate-float rounded-2xl p-3 items-center gap-2.5"
        style={{ animationDelay: "1.2s" }}
      >
        <CheckCircle2 className="h-5 w-5 text-primary" />
        <div>
          <p className="text-xs font-semibold">Order #4821 paid</p>
          <p className="text-[10px] text-muted-foreground">Escrow protected</p>
        </div>
      </div>
    </div>
  );
}

/* ─── TRUST BAR ─────────────────────────────────────────────── */
function TrustBar() {
  const stats = [
    { v: "120K+", l: "Registered Users" },
    { v: "8,400+", l: "Verified Stores" },
    { v: "Le 190B+", l: "Volume Processed" },
    { v: "99.98%", l: "Platform Uptime" },
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

/* ─── PLATFORM OVERVIEW ─────────────────────────────────────── */
function PlatformOverview() {
  const pillars = [
    {
      icon: ShoppingBag,
      t: "Marketplace",
      d: "A structured, searchable marketplace where buyers discover verified sellers, browse product listings, and complete purchases with confidence.",
    },
    {
      icon: Wallet,
      t: "Digital Wallet",
      d: "A fully integrated financial layer for sending, receiving, and withdrawing funds — removing the friction between commerce and payment.",
    },
    {
      icon: Store,
      t: "Seller Tools",
      d: "Professional-grade tools for inventory management, order fulfillment, customer engagement, and store performance — all in one dashboard.",
    },
    {
      icon: BarChart3,
      t: "Analytics",
      d: "Real-time data on revenue, traffic, and conversion. Sellers gain the insight needed to make decisions that drive measurable growth.",
    },
    {
      icon: Shield,
      t: "Trust & Safety",
      d: "Fraud detection, escrow payments, identity verification, and a dedicated dispute resolution team protecting every transaction.",
    },
    {
      icon: Smartphone,
      t: "Mobile-First",
      d: "Designed from the ground up for mobile. Fast, accessible, and optimized for the way people in Sierra Leone use technology today.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Platform Overview</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            One platform. Every layer of commerce.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Market360 is not a single tool — it is a complete operating system for digital commerce in Sierra Leone.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((it) => (
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

/* ─── BUYER EXPERIENCE ──────────────────────────────────────── */
function BuyerExperience() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <div>
          <span className="eyebrow">For Buyers</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Shop with confidence — every time.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Market360 connects you to thousands of verified sellers across Sierra Leone. Every purchase is backed by buyer protection, secure checkout, and real-time order tracking.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Search,
                t: "Smart product discovery",
                d: "Search, filter, and browse by category, price range, or seller rating.",
              },
              {
                icon: ShieldCheck,
                t: "Buyer protection on every order",
                d: "Escrow-protected payments ensure your money is only released when you receive your order.",
              },
              {
                icon: Truck,
                t: "Real-time order tracking",
                d: "Follow your delivery from dispatch to doorstep with live status updates.",
              },
              {
                icon: MessageCircle,
                t: "Direct seller communication",
                d: "Ask questions, negotiate, and resolve issues directly through secure in-app messaging.",
              },
              {
                icon: Star,
                t: "Verified reviews and ratings",
                d: "Make informed purchase decisions based on authenticated buyer feedback.",
              },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-4">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <b.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{b.t}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/features" className="btn-primary">
              Explore buyer features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: LayoutGrid,
              t: "Curated categories",
              d: "Fashion, electronics, food, services, and more — organized for fast discovery.",
            },
            {
              icon: Award,
              t: "Seller badges",
              d: "Verified, Top Seller, and Featured badges identify trustworthy stores at a glance.",
            },
            {
              icon: CreditCard,
              t: "Flexible payment",
              d: "Pay from your Market360 wallet, mobile money, or card with one tap.",
            },
            {
              icon: RefreshCw,
              t: "Easy returns",
              d: "Structured return process with mediation if a dispute cannot be resolved directly.",
            },
          ].map((c, i) => (
            <div
              key={c.t}
              className={`surface-card surface-card-hover p-6 ${i % 2 ? "sm:translate-y-6" : ""}`}
            >
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

/* ─── SELLER EXPERIENCE ─────────────────────────────────────── */
function SellerExperience() {
  return (
    <section className="section-pad">
      <div className="container-pro grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="surface-card p-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Store setup checklist
            </p>
            {[
              { s: "Create your seller account", done: true },
              { s: "Complete identity verification (KYC)", done: true },
              { s: "Set up your store profile and branding", done: true },
              { s: "Add your first product listings", done: false },
              { s: "Configure wallet and payout method", done: false },
              { s: "Publish store to marketplace", done: false },
            ].map((item) => (
              <div key={item.s} className="flex items-center gap-3">
                <div
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                    item.done
                      ? "bg-primary text-primary-foreground"
                      : "border-2 border-border bg-surface"
                  }`}
                >
                  {item.done && <CheckCircle2 className="h-3 w-3" />}
                </div>
                <p
                  className={`text-sm ${
                    item.done ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.s}
                </p>
              </div>
            ))}
            <div className="mt-4 rounded-xl border border-border bg-surface p-4">
              <p className="text-xs text-muted-foreground">Setup completion</p>
              <div className="mt-2 h-2 w-full rounded-full bg-border">
                <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
              </div>
              <p className="mt-1.5 text-xs font-semibold text-primary">3 of 6 steps complete</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">For Sellers</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Open your store. Reach more customers.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Market360 gives individual sellers, SMEs, and established businesses the tools they need to operate professionally — without technical complexity or high setup costs.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: UserCheck,
                t: "Verified seller status",
                d: "Build buyer trust with KYC-verified identity and store badges.",
              },
              {
                icon: Package,
                t: "Product and inventory management",
                d: "List products with images, descriptions, pricing, and stock levels. Manage variants with ease.",
              },
              {
                icon: DollarSign,
                t: "Instant earnings",
                d: "Funds settle directly into your Market360 wallet when an order is confirmed.",
              },
              {
                icon: Repeat,
                t: "Order fulfillment tools",
                d: "Update order status, communicate with buyers, and issue receipts — all from your seller dashboard.",
              },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-4">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <b.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{b.t}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/seller-solutions" className="btn-primary">
              Start selling
            </Link>
            <Link to="/pricing" className="btn-ghost">
              View seller fees <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WALLET SHOWCASE ───────────────────────────────────────── */
function WalletShowcase() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-glow p-7 text-primary-foreground shadow-[var(--shadow-elevated)]">
              <div className="flex items-center justify-between">
                <p className="text-sm/none opacity-80">Market360 Wallet</p>
                <Wallet className="h-5 w-5 opacity-80" />
              </div>
              <p className="mt-10 text-xs uppercase opacity-70">Available Balance</p>
              <p className="mt-1 text-4xl font-bold tracking-tight">Le 27,364,000</p>
              <div className="mt-8 flex items-center justify-between text-xs">
                <span className="opacity-80">Account •••• 4821</span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 font-medium">
                  Verified
                </span>
              </div>
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[{ l: "Top Up" }, { l: "Send" }, { l: "Withdraw" }].map((a) => (
                <div key={a.l} className="surface-card p-3 text-center text-sm font-medium">
                  {a.l}
                </div>
              ))}
            </div>
            <div className="mt-4 surface-card p-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Recent transactions
              </p>
              {[
                { l: "Order #4821 received", a: "+ Le 384,000", t: "2 min ago" },
                { l: "Withdrawal to Orange Money", a: "− Le 1,200,000", t: "1h ago" },
                { l: "Order #4819 received", a: "+ Le 180,000", t: "3h ago" },
              ].map((tx) => (
                <div key={tx.l} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-foreground text-xs">{tx.l}</p>
                    <p className="text-[11px] text-muted-foreground">{tx.t}</p>
                  </div>
                  <p
                    className={`font-semibold text-xs ${
                      tx.a.startsWith("+") ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {tx.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Integrated Wallet</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Your entire financial flow — inside one app.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The Market360 wallet eliminates the gap between selling and getting paid. Funds settle instantly, transfers are free within the platform, and withdrawals to mobile money or bank are simple.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Zap, t: "Instant settlement", d: "Earnings land in your wallet the moment an order is confirmed — no waiting periods." },
              { icon: Globe, t: "Multiple payout methods", d: "Withdraw to Orange Money, Africell Money, or your bank account." },
              { icon: RefreshCw, t: "Free internal transfers", d: "Move funds between your stores or send money to other Market360 users at no cost." },
              { icon: FileText, t: "Full transaction history", d: "Every credit, debit, and withdrawal logged and exportable for record-keeping." },
            ].map((f) => (
              <div key={f.t} className="surface-card p-4">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary">
                  <f.icon className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm font-semibold">{f.t}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SELLER DASHBOARD ──────────────────────────────────────── */
function SellerDashboard() {
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Seller Dashboard</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            A control center built for serious sellers.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every metric, order, and customer interaction — organized so you can focus on growing your business.
          </p>
        </div>
        <div className="mt-12 surface-card overflow-hidden p-0">
          <div className="grid lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block border-r border-border bg-background/60 p-5 space-y-1">
              {[
                "Overview",
                "Orders",
                "Products",
                "Customers",
                "Analytics",
                "Wallet",
                "Promotions",
                "Settings",
              ].map((s, i) => (
                <div
                  key={s}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm ${
                    i === 0
                      ? "bg-accent text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
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
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  Live
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {[
                  { l: "Today's Revenue", v: "Le 10.3M", c: "+12%" },
                  { l: "Orders", v: "42", c: "+8%" },
                  { l: "Pending", v: "7", c: "—" },
                  { l: "Avg. Order Value", v: "Le 245K", c: "+3%" },
                ].map((k) => (
                  <div key={k.l} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-xs text-muted-foreground">{k.l}</p>
                    <p className="mt-1 text-xl font-bold">{k.v}</p>
                    <p className="text-xs font-medium text-primary">{k.c}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm font-semibold">Recent orders</p>
                <div className="mt-4 space-y-3">
                  {[
                    { id: "#4821", n: "Nora A.", a: "Le 384,000", s: "Paid" },
                    { id: "#4820", n: "Omar K.", a: "Le 1,032,000", s: "Shipped" },
                    { id: "#4819", n: "Sara M.", a: "Le 180,000", s: "Delivered" },
                    { id: "#4818", n: "Mohamed B.", a: "Le 720,000", s: "Processing" },
                  ].map((o) => (
                    <div
                      key={o.id}
                      className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 text-sm"
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary text-xs font-bold">
                        {o.n[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-medium">{o.n}</p>
                        <p className="text-xs text-muted-foreground">{o.id}</p>
                      </div>
                      <p className="font-semibold">{o.a}</p>
                      <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
                        {o.s}
                      </span>
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

/* ─── ANALYTICS ─────────────────────────────────────────────── */
function Analytics() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Analytics</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Data that drives decisions.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Market360 gives sellers and platform administrators access to the metrics that matter — presented clearly, updated in real time, and actionable at a glance.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Revenue trends and projections",
              "Top-performing products",
              "Buyer behavior and retention",
              "Traffic sources and referrals",
              "Conversion funnel analysis",
              "Inventory depletion alerts",
              "Return and dispute rates",
              "Wallet flow summaries",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="surface-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Revenue · 7 days</p>
              <span className="text-xs text-primary font-medium flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" /> +18.4% vs last week
              </span>
            </div>
            <div className="mt-6 h-40">
              <svg viewBox="0 0 400 160" className="h-full w-full">
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.72 0.19 145)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="oklch(0.72 0.19 145)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,120 C40,90 80,110 120,80 C160,50 200,90 240,60 C280,30 320,70 360,40 L400,30 L400,160 L0,160 Z"
                  fill="url(#grad)"
                />
                <path
                  d="M0,120 C40,90 80,110 120,80 C160,50 200,90 240,60 C280,30 320,70 360,40 L400,30"
                  fill="none"
                  stroke="oklch(0.66 0.19 145)"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[
                { l: "Sessions", v: "12.4K" },
                { l: "Conv.", v: "3.6%" },
                { l: "AOV", v: "Le 245K" },
                { l: "Returns", v: "1.2%" },
              ].map((k) => (
                <div key={k.l} className="rounded-xl border border-border bg-surface p-3 text-center">
                  <p className="text-base font-bold">{k.v}</p>
                  <p className="text-[11px] uppercase text-muted-foreground tracking-wider">{k.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: BarChart2, t: "Revenue analytics" },
              { icon: PieChart, t: "Category breakdown" },
              { icon: Activity, t: "Live traffic feed" },
            ].map((c) => (
              <div key={c.t} className="surface-card p-4 text-center">
                <div className="mx-auto grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary">
                  <c.icon className="h-4 w-4" />
                </div>
                <p className="mt-2 text-xs font-medium leading-tight">{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECURITY ──────────────────────────────────────────────── */
function Security() {
  const items = [
    {
      icon: Shield,
      t: "AI-powered fraud detection",
      d: "Every transaction is analyzed in real time against behavioral patterns, flagging and blocking suspicious activity before it affects buyers or sellers.",
    },
    {
      icon: Lock,
      t: "End-to-end encryption",
      d: "All payment data, personal information, and chat messages are encrypted in transit and at rest — inaccessible to unauthorized parties.",
    },
    {
      icon: Fingerprint,
      t: "Identity verification (KYC)",
      d: "Sellers undergo a Know Your Customer verification process before going live. Verified status is visible to buyers on every store page.",
    },
    {
      icon: Eye,
      t: "Escrow payment protection",
      d: "Payments are held securely in escrow and only released to the seller after the buyer confirms receipt — minimizing risk on both sides.",
    },
    {
      icon: AlertTriangle,
      t: "Dispute resolution",
      d: "A dedicated trust and safety team reviews every reported dispute. Decisions are made transparently, with clear timelines and resolution policies.",
    },
    {
      icon: Bell,
      t: "Real-time security alerts",
      d: "Instant push notifications for logins, withdrawals, and any account activity that falls outside your normal usage patterns.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trust & Safety</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Security built into every transaction.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Market360 operates a multi-layer security infrastructure that protects buyers, sellers, and the platform itself.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="surface-card surface-card-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <i.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{i.t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/safety" className="btn-ghost">
            Read our safety policy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ──────────────────────────────────────────── */
function HowItWorks() {
  const buyerSteps = [
    { n: "01", t: "Create an account", d: "Sign up in under two minutes with your phone number or email." },
    { n: "02", t: "Browse the marketplace", d: "Search by category, keyword, or location to find what you need." },
    { n: "03", t: "Checkout securely", d: "Pay from your wallet or linked mobile money. Funds are held in escrow." },
    { n: "04", t: "Receive and confirm", d: "Get your order, confirm receipt, and leave a verified review." },
  ];
  const sellerSteps = [
    { n: "01", t: "Register as a seller", d: "Complete your profile and pass identity verification." },
    { n: "02", t: "List your products", d: "Add products with images, pricing, and inventory levels." },
    { n: "03", t: "Manage orders", d: "Accept orders, update statuses, and communicate with buyers." },
    { n: "04", t: "Get paid", d: "Funds settle to your wallet instantly. Withdraw when you choose." },
  ];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Simple to start. Powerful at scale.
          </h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              For buyers
            </p>
            <div className="space-y-4">
              {buyerSteps.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary font-bold text-sm">
                      {step.n}
                    </div>
                    <div className="mt-1 w-px flex-1 bg-border last:hidden" />
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold">{step.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              For sellers
            </p>
            <div className="space-y-4">
              {sellerSteps.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold text-sm">
                      {step.n}
                    </div>
                    <div className="mt-1 w-px flex-1 bg-border last:hidden" />
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold">{step.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── REGIONAL IMPACT ───────────────────────────────────────── */
function RegionalImpact() {
  return (
    <section className="section-pad">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Mission</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Expanding digital commerce across Sierra Leone.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Market360 was built in Sierra Leone, for Sierra Leone. Our platform is designed around the realities of local commerce — mobile-first access, local currency, and integration with the payment methods people already use.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MapPin,
              t: "Local currency",
              d: "All transactions are denominated in Leones (Le). No foreign exchange friction.",
            },
            {
              icon: Smartphone,
              t: "Mobile money integration",
              d: "Compatible with Orange Money and Africell Money — the payment methods most Sierra Leoneans already use.",
            },
            {
              icon: Globe,
              t: "National coverage",
              d: "Sellers and buyers from Freetown, Bo, Kenema, Makeni, and across all regions participate on the platform.",
            },
            {
              icon: Users,
              t: "SME empowerment",
              d: "Market360 gives small and medium enterprises the same digital infrastructure previously available only to large retailers.",
            },
          ].map((c) => (
            <div key={c.t} className="surface-card surface-card-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{c.t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INTEGRATIONS ──────────────────────────────────────────── */
function Integrations() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Integrations</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Connected to the tools you already use.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Market360 integrates with the payment, logistics, and communication infrastructure that Sierra Leone's businesses rely on.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              category: "Payments",
              items: ["Orange Money", "Africell Money", "Bank transfer", "Card payments"],
            },
            {
              category: "Logistics",
              items: ["In-app delivery tracking", "Seller-managed fulfillment", "Pickup confirmation", "Delivery partner API"],
            },
            {
              category: "Communications",
              items: ["In-app buyer–seller messaging", "SMS order notifications", "Push notification system", "Email receipts"],
            },
          ].map((group) => (
            <div key={group.category} className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SUPPORT & COMPLIANCE ──────────────────────────────────── */
function SupportAndCompliance() {
  return (
    <section className="section-pad">
      <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Support & Compliance</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Help when you need it. Standards you can rely on.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Market360 maintains a dedicated support infrastructure and operates in accordance with Sierra Leone's regulatory framework for digital commerce and financial services.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Headphones,
                t: "Customer support",
                d: "Available via in-app chat, email, and phone. Response times are tracked and published.",
              },
              {
                icon: Clock,
                t: "Dispute resolution SLA",
                d: "All disputes are acknowledged within 24 hours and resolved within 7 business days.",
              },
              {
                icon: FileText,
                t: "Transparent seller terms",
                d: "Clear, plain-language agreements covering fees, policies, and seller obligations.",
              },
              {
                icon: ShieldCheck,
                t: "Regulatory compliance",
                d: "Market360 operates in compliance with applicable Sierra Leone laws governing e-commerce and digital payments.",
              },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-4">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <b.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{b.t}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          {[
            { label: "Average support response time", value: "< 2 hours" },
            { label: "Dispute resolution rate", value: "98.4%" },
            { label: "Seller satisfaction score", value: "4.8 / 5.0" },
            { label: "Platform uptime SLA", value: "99.98%" },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
          <div className="surface-card p-5">
            <p className="text-sm font-semibold">Compliance overview</p>
            <div className="mt-3 space-y-2">
              {[
                "Data Protection & Privacy Policy",
                "Anti-Money Laundering (AML) procedures",
                "Know Your Customer (KYC) verification",
                "Consumer rights and return policy",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTER RECRUIT ────────────────────────────────────────── */
function TesterRecruit() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="surface-card relative overflow-hidden p-8 md:p-12">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center relative">
            <div>
              <span className="eyebrow">Now Recruiting</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Join the Market360 tester program.
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                We are actively recruiting testers ahead of our public launch. As a tester, you get early access to the full platform, a direct line to the product team, and the opportunity to shape how Market360 works for Sierra Leoneans.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/tester" className="btn-primary">
                  Apply to the program <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/download" className="btn-ghost">
                  Download app
                </Link>
              </div>
            </div>
            <ul className="grid gap-3">
              {[
                "Early access before public launch",
                "Direct feedback channel to the product team",
                "Exclusive tester badge on your profile",
                "Priority seller onboarding when we launch",
                "Community of verified early adopters",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── DOWNLOAD CTA ──────────────────────────────────────────── */
function DownloadCta() {
  return (
    <section className="section-pad">
      <div className="container-pro grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Download</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Take Market360 with you.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Available on iOS and Android. Designed for mobile-first users in Sierra Leone — fast, secure, and optimized for lower-bandwidth environments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="btn-primary">
              <Apple className="h-5 w-5" /> App Store
            </a>
            <a href="#" className="btn-ghost">
              <PlayCircle className="h-5 w-5" /> Google Play
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
          {[
            { t: "Fast load times", d: "Under 2 seconds on standard mobile connections." },
            { t: "Offline browsing", d: "View saved stores and listings without active data." },
            { t: "Biometric login", d: "Secure access via fingerprint or face recognition." },
            { t: "Push notifications", d: "Instant alerts for orders, payments, and messages." },
            { t: "Low data usage", d: "Optimized to reduce data consumption without compromising experience." },
            { t: "Dark mode", d: "Full dark mode support for comfortable use at any time of day." },
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

/* ─── NEWS PREVIEW ──────────────────────────────────────────── */
function NewsPreview() {
  const posts = [
    {
      t: "Market360 opens public tester program",
      c: "Platform",
      d: "We are inviting Sierra Leoneans to participate in our pre-launch tester program ahead of our official public release.",
      date: "June 2025",
    },
    {
      t: "Wallet 2.0: faster settlements, lower fees",
      c: "Product Update",
      d: "Our re-engineered wallet infrastructure now supports instant fund settlements and reduced withdrawal fees across all payout methods.",
      date: "May 2025",
    },
    {
      t: "Q3 product roadmap: what we're building next",
      c: "Roadmap",
      d: "Branded storefronts, bulk product uploads, advanced analytics exports, and smarter buyer recommendations are all on the horizon.",
      date: "April 2025",
    },
  ];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-pro">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="eyebrow">News & Updates</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Latest from Market360.
            </h2>
          </div>
          <Link to="/news" className="btn-ghost">
            All news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="surface-card surface-card-hover p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {p.c}
                </span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-semibold text-lg leading-snug">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.d}</p>
              <Link
                to="/news"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "Is Market360 available across Sierra Leone?",
      a: "Yes. Market360 is accessible from anywhere in Sierra Leone via the mobile app. Sellers can list from any region, and buyers can purchase from any verified store on the platform.",
    },
    {
      q: "What fees do sellers pay?",
      a: "Browsing and buying is completely free. Sellers pay a small percentage fee on each successful transaction. There are no monthly subscription costs, setup fees, or hidden charges. Full fee details are available on the pricing page.",
    },
    {
      q: "How does the wallet work?",
      a: "Your Market360 wallet holds your balance securely within the platform. As a seller, earnings arrive in your wallet instantly when an order is confirmed. You can withdraw to Orange Money, Africell Money, or a bank account at any time.",
    },
    {
      q: "How are buyer–seller disputes handled?",
      a: "Market360 holds payment in escrow until the buyer confirms receipt. If a dispute is raised, our trust team reviews the case within 24 hours and works toward resolution within 7 business days.",
    },
    {
      q: "What is required to become a verified seller?",
      a: "Sellers complete a Know Your Customer (KYC) verification process, which includes identity document submission and contact verification. Verified sellers receive a badge visible to all buyers.",
    },
    {
      q: "Is my payment and personal data secure?",
      a: "Market360 uses end-to-end encryption for all transactions and personal data. We do not share user information with third parties without explicit consent, and we operate in accordance with applicable data protection standards.",
    },
    {
      q: "How do I join the tester program?",
      a: "Visit the tester program page and submit your application. We are actively reviewing and onboarding testers ahead of our public launch. Accepted testers receive early access to the full platform.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-pro grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Frequently asked questions.</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Answers to the questions we hear most often from buyers, sellers, and prospective partners.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Have a question not listed here?{" "}
            <Link to="/contact" className="text-primary font-medium">
              Contact our team →
            </Link>
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-sm">
                {f.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────── */
function FinalCta() {
  return (
    <section className="section-pad bg-surface border-t border-border">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-10 text-center text-primary-foreground md:p-16">
          <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
          <span className="relative inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6">
            Now available — join the tester program
          </span>
          <h2 className="relative mx-auto max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
            Sierra Leone's digital marketplace is open.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl opacity-90 leading-relaxed">
            Whether you are buying, selling, or building a business — Market360 gives you the platform, the tools, and the infrastructure to do it right.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Smartphone className="h-4 w-4" /> Download the app
            </Link>
            <Link
              to="/seller-solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Start selling <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tester"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Become a tester
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
