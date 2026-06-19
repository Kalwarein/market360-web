import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, Sparkles, MessageCircle, Award, Users, Bug, Rocket, Download, ArrowRight } from "lucide-react";

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

function TesterPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Now recruiting"
        title={<>Help us build the <span className="gradient-text">future of commerce.</span></>}
        description="Join an exclusive community of testers shaping every release. Early access. Real impact. Real perks."
      >
        <a href="#join" className="btn-primary">Apply to join <ArrowRight className="h-4 w-4" /></a>
        <Link to="/download" className="btn-ghost"><Download className="h-4 w-4" /> Download app</Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-pro">
          <h2 className="text-3xl font-bold sm:text-4xl">Why become a tester?</h2>
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

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Installation guide</h2>
            <ol className="mt-6 space-y-4">
              {[
                "Download Market360 from the App Store or Google Play.",
                "Create your free account using your email or phone.",
                "Navigate to Settings → Tester Program and tap Join.",
                "Receive your tester invite and unlock beta features.",
              ].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-bold">{i + 1}</span>
                  <p className="pt-1.5 text-sm leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Feedback process</h2>
            <div className="mt-6 space-y-4">
              {[
                { t: "Report from the app", d: "Shake your phone or open Help → Send Feedback to report directly." },
                { t: "Track on the community board", d: "See what other testers are reporting and upvote priorities." },
                { t: "Get a response from the team", d: "Every report receives a real reply — no black box." },
              ].map((s) => (
                <div key={s.t} className="surface-card p-5">
                  <p className="font-semibold">{s.t}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="section-pad">
        <div className="container-pro max-w-2xl">
          <div className="surface-card p-8 md:p-10">
            <span className="eyebrow">Apply</span>
            <h2 className="mt-4 text-3xl font-bold">Join the program</h2>
            <p className="mt-3 text-muted-foreground">Tell us a bit about yourself and we'll be in touch within 48 hours.</p>
            <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">Full name
                  <input required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your name" />
                </label>
                <label className="text-sm font-medium">Email
                  <input type="email" required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="you@example.com" />
                </label>
              </div>
              <label className="text-sm font-medium">Device
                <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                  <option>iOS</option><option>Android</option><option>Both</option>
                </select>
              </label>
              <label className="text-sm font-medium">Why do you want to test Market360?
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us about your experience and motivation" />
              </label>
              <button type="submit" className="btn-primary mt-2">Submit application</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Tester community</h2>
            <p className="mt-3 text-muted-foreground">Connect with other testers, share insights, and influence the roadmap together.</p>
            <ul className="mt-6 space-y-3">
              {["Private Discord channel", "Monthly product Q&A", "Roadmap voting"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[..."ALMNORSTKJUV"].slice(0, 12).map((c, i) => (
              <div key={i} className="aspect-square grid place-items-center rounded-2xl border border-border bg-background font-bold text-primary text-lg">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro max-w-3xl">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: "Is being a tester free?", a: "Yes — it's free and even rewarded with perks." },
              { q: "How much time will it take?", a: "Whatever you can give. Most testers spend 30 min/week." },
              { q: "Can I opt out anytime?", a: "Of course. You can leave the program from settings at any moment." },
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
