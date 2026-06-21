import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, MessageCircle, MapPin, Phone, Send, Clock, Headphones, Building2, Sparkles } from "lucide-react";
import flyerEndless from "@/assets/flyer-endless.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Market360 — Get in Touch" },
      { name: "description", content: "Reach the Market360 team for support, partnerships, press, or feedback. We're here to help 24/7." },
      { property: "og:title", content: "Contact Market360" },
      { property: "og:description", content: "Talk to us anytime." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-emerald-50 via-background to-background">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="container-pro relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> We reply in under 2 hours</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.05]">
              Let's <span className="gradient-text">talk.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Whether you're a buyer, a seller, a partner, or the press — our team is ready to help. Pick a channel below or send us a message.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              {[
                { Icon: Clock, t: "24/7 support" },
                { Icon: Headphones, t: "Live chat in-app" },
                { Icon: MapPin, t: "Built in Sierra Leone" },
              ].map(({ Icon, t }) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                  <Icon className="h-3.5 w-3.5" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={flyerEndless.url} alt="Market360 — One App. Endless Opportunities." className="w-full rounded-3xl border border-border shadow-elevated" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      {/* CHANNELS + FORM */}
      <section className="section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Reach us directly</h2>
            <p className="text-sm text-muted-foreground">Choose the channel that fits your need.</p>
            {[
              { icon: Mail, t: "General email", d: "hello@market360.shop", sub: "Replies within a few hours" },
              { icon: MessageCircle, t: "In-app support chat", d: "Open the app → Help", sub: "Real humans · 24/7" },
              { icon: Building2, t: "Sales & partnerships", d: "partners@market360.shop", sub: "Stores, integrations, deals" },
              { icon: Phone, t: "Press & media", d: "press@market360.shop", sub: "We respond within 1 business day" },
              { icon: MapPin, t: "On the web", d: "market360.shop", sub: "Sierra Leone" },
            ].map((c) => (
              <div key={c.t} className="surface-card surface-card-hover p-5 flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary"><c.icon className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold">{c.t}</p>
                  <p className="text-sm text-foreground">{c.d}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="surface-card p-6 md:p-8 grid gap-4 h-fit" onSubmit={(e) => e.preventDefault()}>
            <div>
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">Name
                <input required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your full name" />
              </label>
              <label className="text-sm font-medium">Email
                <input type="email" required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="you@example.com" />
              </label>
            </div>
            <label className="text-sm font-medium">I'm reaching out as
              <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                <option>A buyer</option>
                <option>A seller</option>
                <option>A potential partner</option>
                <option>Press / media</option>
                <option>Other</option>
              </select>
            </label>
            <label className="text-sm font-medium">Subject
              <input className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="How can we help?" />
            </label>
            <label className="text-sm font-medium">Message
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us a bit more…" />
            </label>
            <button type="submit" className="btn-primary mt-2 justify-center"><Send className="h-4 w-4" /> Send message</button>
            <p className="text-[11px] text-muted-foreground text-center">By submitting, you agree to our Privacy Policy.</p>
          </form>
        </div>
      </section>

      {/* OFFICE HOURS */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro grid gap-8 lg:grid-cols-3">
          {[
            { t: "Support hours", d: "Mon – Sun · 24 hours", sub: "Always-on chat for urgent issues" },
            { t: "Sales hours", d: "Mon – Fri · 9:00 – 18:00 GMT", sub: "Schedule a call with our partnerships team" },
            { t: "Office", d: "Freetown, Sierra Leone", sub: "By appointment only" },
          ].map((b) => (
            <div key={b.t} className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{b.t}</p>
              <p className="mt-2 text-lg font-bold">{b.d}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-pro max-w-3xl">
          <h2 className="text-3xl font-bold text-center">Quick answers</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: "How long does it take to get a response?", a: "Our average response time is under 2 hours during business hours, and under 12 hours overnight." },
              { q: "Can I get help with an order through this form?", a: "Yes — but the fastest way is to open the Market360 app and use Help → Chat. Our team has full order context there." },
              { q: "I want to integrate with Market360. Who do I email?", a: "Reach out to partners@market360.shop with a quick summary and we'll route you to the right person." },
              { q: "Do you have a phone number?", a: "For urgent buyer/seller issues, the in-app chat is staffed 24/7. We don't run a public phone line yet." },
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
