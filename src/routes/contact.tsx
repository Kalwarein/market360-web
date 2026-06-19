import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Market360 — Get in Touch" },
      { name: "description", content: "Reach the Market360 team for support, partnerships, press, or feedback. We're here to help." },
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
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">talk.</span></>}
        description="Questions, ideas, partnerships — we'd love to hear from you."
      />
      <section className="section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, t: "Email", d: "hello@market360.shop" },
              { icon: MessageCircle, t: "Support chat", d: "In-app · 24/7" },
              { icon: Phone, t: "Sales & partnerships", d: "partners@market360.shop" },
              { icon: MapPin, t: "On the web", d: "market360.shop" },
            ].map((c) => (
              <div key={c.t} className="surface-card p-5 flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary"><c.icon className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold">{c.t}</p>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="surface-card p-6 md:p-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">Name
                <input required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your name" />
              </label>
              <label className="text-sm font-medium">Email
                <input type="email" required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="you@example.com" />
              </label>
            </div>
            <label className="text-sm font-medium">Subject
              <input className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="How can we help?" />
            </label>
            <label className="text-sm font-medium">Message
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us a bit more…" />
            </label>
            <button type="submit" className="btn-primary mt-2"><Send className="h-4 w-4" /> Send message</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
