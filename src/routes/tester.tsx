import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, Sparkles, MessageCircle, Award, Users, Bug, Rocket, Download, ArrowRight, Apple, PlayCircle, X } from "lucide-react";
import flyerEverything from "@/assets/flyer-everything.png.asset.json";
import flyerBuysell from "@/assets/flyer-buysell.png.asset.json";

export const Route = createFileRoute("/tester")({
  head: () => ({
    meta: [
      { title: "Become a Market360 Tester — Early Access Program" },
      { name: "description", content: "Join the Market360 tester program. Get early access, shape the product, and earn perks while helping build the future of commerce." },
      { property: "og:title", content: "Market360 Tester Program" },
      { property: "og:description", content: "Help us build the marketplace of the future." },
      { property: "og:url", content: "/tester" },
    ],
    links: [{ rel: "canonical", href: "/tester" }],
  }),
  component: TesterPage,
});

function SuccessOverlay({ name, onClose }: { name: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[110] grid place-items-center bg-background/80 backdrop-blur-md p-4 animate-fade-up">
      <div className="relative w-full max-w-md surface-card p-8 text-center">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
        <div className="mx-auto relative grid h-24 w-24 place-items-center">
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <span className="absolute inset-2 rounded-full bg-primary/30" />
          <div className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow">
            <CheckCircle2 className="h-10 w-10" />
          </div>
        </div>
        <h3 className="mt-6 text-2xl font-bold">You're in{name ? `, ${name.split(" ")[0]}` : ""}! 🎉</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Welcome to the Market360 Tester Program. Download the app now to unlock early access and start exploring.
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <a href="#" className="btn-primary justify-center"><Apple className="h-4 w-4" /> App Store</a>
          <a href="#" className="btn-ghost justify-center"><PlayCircle className="h-4 w-4" /> Google Play</a>
        </div>
        <Link to="/download" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
          Go to download page <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

function TesterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      {submitted && <SuccessOverlay name={name} onClose={() => setSubmitted(false)} />}

      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-emerald-50 via-background to-background">
        <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="container-pro relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Now recruiting · Limited spots</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.05]">
              Join the <span className="gradient-text">Market360 Tester Program.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Get early access to features. Shape the roadmap. Earn perks. Apply in 10 seconds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {["Early access", "Wallet credit", "Tester badge", "Private community"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {t}
                </span>
              ))}
            </div>
            <a href="#join" className="btn-primary mt-7">Apply to join <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative">
            <img
              src={flyerEverything.url}
              alt="Market360 — Everything you need. One powerful marketplace."
              className="w-full rounded-3xl border border-border shadow-elevated"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">Why become a tester?</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Rocket, t: "Early access", d: "Try features weeks before public release." },
              { icon: MessageCircle, t: "Direct influence", d: "Your feedback ships into the product." },
              { icon: Award, t: "Tester badge", d: "Stand out with an exclusive profile badge." },
              { icon: Users, t: "Community", d: "Join a private group of passionate testers." },
              { icon: Sparkles, t: "Perks", d: "Wallet credit, swag, and recognition." },
              { icon: Bug, t: "Real impact", d: "Catch bugs and improve millions of journeys." },
            ].map((it) => (
              <div key={it.t} className="surface-card surface-card-hover p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><it.icon className="h-5 w-5" /></div>
                <p className="mt-5 font-semibold">{it.t}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="section-pad bg-surface border-y border-border">
        <div className="container-pro grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <img src={flyerBuysell.url} alt="Market360 — Buy. Sell. Pay. Grow." className="w-full rounded-3xl border border-border shadow-soft" loading="lazy" decoding="async" />
          </div>
          <div className="surface-card p-8 md:p-10">
            <span className="eyebrow">Apply now</span>
            <h2 className="mt-3 text-3xl font-bold">It only takes 10 seconds</h2>
            <p className="mt-2 text-sm text-muted-foreground">Drop your name and email — we'll send you an invite link instantly.</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <label className="text-sm font-medium">Full name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium">Email address
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
              <button type="submit" className="btn-primary mt-2 justify-center">
                <Sparkles className="h-4 w-4" /> Join the program
              </button>
              <p className="text-[11px] text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro max-w-3xl">
          <h2 className="text-3xl font-bold text-center">FAQ</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: "Is being a tester free?", a: "Yes — it's free and even rewarded with perks." },
              { q: "How much time will it take?", a: "Whatever you can give. Most testers spend 30 min/week." },
              { q: "Can I opt out anytime?", a: "Of course. You can leave the program from settings at any moment." },
              { q: "What device do I need?", a: "Any modern iOS or Android phone running the Market360 app." },
            ].map((f) => (
              <details key={f.q} className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">{f.q}<span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-primary transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/download" className="btn-ghost"><Download className="h-4 w-4" /> Or just download the app</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
