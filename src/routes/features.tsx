import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ShoppingBag, Store, Wallet, BarChart3, Shield, Smartphone, Search, Truck, MessageCircle, Star, Bell, Lock, Users, PackageCheck, Globe, Zap, CreditCard, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Market360" },
      { name: "description", content: "Discover everything Market360 offers: buying, selling, wallet, analytics, store management, and trust tools — built into one marketplace." },
      { property: "og:title", content: "Market360 Features" },
      { property: "og:description", content: "Every tool buyers and sellers need, in one app." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    title: "For Buyers",
    items: [
      { icon: Search, t: "Smart discovery", d: "Personalized recommendations across millions of listings." },
      { icon: Truck, t: "Live order tracking", d: "Real-time updates from purchase to doorstep." },
      { icon: MessageCircle, t: "Direct chat", d: "Talk to sellers, ask questions, and negotiate." },
      { icon: Star, t: "Verified reviews", d: "Trustworthy ratings from real buyers." },
    ],
  },
  {
    title: "For Sellers",
    items: [
      { icon: Store, t: "Storefront builder", d: "Launch a beautiful store in minutes." },
      { icon: PackageCheck, t: "Order workflow", d: "From pending to delivered, all in one screen." },
      { icon: BarChart3, t: "Analytics", d: "Track revenue, conversion, and growth." },
      { icon: Bell, t: "Smart notifications", d: "Stay on top of every sale and message." },
    ],
  },
  {
    title: "Platform",
    items: [
      { icon: Wallet, t: "Integrated wallet", d: "Hold, send, and withdraw without friction." },
      { icon: Shield, t: "Trust & safety", d: "Escrow, KYC, and dispute resolution." },
      { icon: Lock, t: "Bank-grade security", d: "Encryption, 2FA, and biometric login." },
      { icon: Globe, t: "Multi-region", d: "Sell locally or expand globally." },
      { icon: CreditCard, t: "Multiple payment methods", d: "Cards, wallets, bank transfers." },
      { icon: FileText, t: "Reports & exports", d: "Detailed history at your fingertips." },
      { icon: Zap, t: "Fast checkout", d: "One-tap purchase for returning buyers." },
      { icon: Users, t: "Community", d: "Reviews, follows, and shared shops." },
    ],
  },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Features"
        title={<>Everything you need to <span className="gradient-text">trade with trust.</span></>}
        description="A complete marketplace toolkit — beautifully integrated so buyers and sellers can focus on what matters."
      >
        <Link to="/download" className="btn-primary"><Smartphone className="h-4 w-4" /> Get the app</Link>
        <Link to="/seller-solutions" className="btn-ghost">Sell on Market360</Link>
      </PageHero>

      {groups.map((g) => (
        <section key={g.title} className="section-pad even:bg-surface even:border-y even:border-border">
          <div className="container-pro">
            <h2 className="text-3xl font-bold sm:text-4xl">{g.title}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((it) => (
                <div key={it.t} className="surface-card surface-card-hover p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-semibold">{it.t}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad">
        <div className="container-pro">
          <div className="surface-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">See it in action.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Download Market360 to explore every feature, free.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/download" className="btn-primary">Download <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/tester" className="btn-ghost">Become a tester</Link>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {["Free to use", "No credit card", "Cancel anytime"].map((b) => (
                <li key={b} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
