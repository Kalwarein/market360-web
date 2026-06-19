import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Heart, Compass, Target, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Market360 — Our Story & Mission" },
      { name: "description", content: "We're building the modern marketplace where buyers, sellers, and stores grow together with trust at the core." },
      { property: "og:title", content: "About Market360" },
      { property: "og:description", content: "Our mission: empower commerce for everyone." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={<>Commerce that's <span className="gradient-text">fair, fast, and trusted.</span></>}
        description="Market360 was built to give every entrepreneur, store, and shopper a marketplace they can rely on."
      />

      <section className="section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We started Market360 because online commerce was broken for too many people: slow checkouts, hidden fees, unsafe transactions, and tools designed for someone else.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We're rebuilding the marketplace from the ground up — with a beautiful app, an integrated wallet, real analytics, and trust at every step.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[{ v: "2024", l: "Founded" }, { v: "120K+", l: "Members" }, { v: "8.4K", l: "Stores" }, { v: "30+", l: "Countries" }].map((s) => (
              <div key={s.l} className="surface-card p-5 text-center">
                <p className="text-2xl font-bold">{s.v}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro">
          <h2 className="text-3xl font-bold sm:text-4xl">What we value</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, t: "People first", d: "Buyers and sellers are at the center of every decision." },
              { icon: Compass, t: "Transparency", d: "Clear rules, clear pricing, no surprises." },
              { icon: Target, t: "Quality", d: "We obsess over the details that make experiences feel premium." },
              { icon: Award, t: "Trust", d: "Hard to earn, easy to lose. We treat it like our most valuable asset." },
            ].map((v) => (
              <div key={v.t} className="surface-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><v.icon className="h-5 w-5" /></div>
                <p className="mt-5 font-semibold">{v.t}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro">
          <div className="surface-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Join us on the journey.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Build with us, sell with us, or just be part of the community.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/tester" className="btn-primary">Become a tester <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-ghost">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
