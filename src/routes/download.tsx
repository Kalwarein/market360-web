import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Apple, PlayCircle, QrCode, CheckCircle2, Smartphone, Zap, Shield, Bell, Star } from "lucide-react";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download Market360 — iOS & Android" },
      { name: "description", content: "Download the Market360 marketplace app on iOS and Android. Buy, sell, manage stores, and use the integrated wallet from anywhere." },
      { property: "og:title", content: "Download Market360" },
      { property: "og:description", content: "Get the Market360 app on iOS and Android." },
      { property: "og:url", content: "/download" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Download"
        title={<>Market360, in your <span className="gradient-text">pocket.</span></>}
        description="A premium marketplace experience designed for mobile. Fast, secure, and beautifully simple."
      >
        <a href="#" className="btn-primary"><Apple className="h-5 w-5" /> App Store</a>
        <a href="#" className="btn-ghost"><PlayCircle className="h-5 w-5" /> Google Play</a>
      </PageHero>

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-2 items-center">
          <div className="surface-card p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-32 w-32 place-items-center rounded-2xl bg-accent text-primary">
                <QrCode className="h-16 w-16" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Scan to install</p>
                <p className="text-2xl font-bold">Get the app</p>
                <div className="mt-3 flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  <span className="ml-1 font-medium">4.9</span>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="#" className="btn-primary"><Apple className="h-5 w-5" /> iOS</a>
              <a href="#" className="btn-ghost"><PlayCircle className="h-5 w-5" /> Android</a>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Why people love the app</h2>
            <ul className="mt-6 space-y-3">
              {["Lightning-fast browsing", "Secure escrow checkout", "Integrated wallet & withdrawals", "Real-time chat with sellers", "Personalized recommendations"].map((b) => (
                <li key={b} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">Screenshots</h2>
          <p className="mt-3 text-center text-muted-foreground">A preview of the Market360 experience.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="section-pad">
        <div className="container-pro grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, t: "Performance", d: "Optimized for instant interaction." },
            { icon: Shield, t: "Security", d: "Biometric login, 2FA, encryption." },
            { icon: Bell, t: "Push alerts", d: "Order updates as they happen." },
            { icon: Smartphone, t: "Universal", d: "iOS 14+ and Android 9+." },
          ].map((f) => (
            <div key={f.t} className="surface-card p-6">
              <f.icon className="h-6 w-6 text-primary" />
              <p className="mt-4 font-semibold">{f.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface border-t border-border">
        <div className="container-pro max-w-3xl">
          <h2 className="text-3xl font-bold">Device requirements</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="surface-card p-5">
              <p className="font-semibold">iOS</p>
              <p className="mt-2 text-sm text-muted-foreground">iPhone running iOS 14 or later. ~80 MB storage.</p>
            </div>
            <div className="surface-card p-5">
              <p className="font-semibold">Android</p>
              <p className="mt-2 text-sm text-muted-foreground">Android 9 (Pie) or later. ~95 MB storage.</p>
            </div>
          </div>
          <h2 className="mt-12 text-3xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: "Is the app free?", a: "Yes — free to download and use. Sellers pay a small per-transaction fee." },
              { q: "Do I need an account?", a: "Browsing is open. Creating an account unlocks buying, selling, and the wallet." },
              { q: "Can I become a tester?", a: <>Yes — visit our <Link to="/tester" className="text-primary font-medium">Tester program</Link> page.</> },
            ].map((f) => (
              <details key={f.q} className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">{f.q}<span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-primary transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
