import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Search, Book, ShoppingBag, Store, Wallet, Shield, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — Market360" },
      { name: "description", content: "Find answers about buying, selling, the wallet, security, and your account on Market360." },
      { property: "og:title", content: "Market360 Help Center" },
      { property: "og:description", content: "Guides, FAQs, and support for Market360." },
      { property: "og:url", content: "/help" },
    ],
    links: [{ rel: "canonical", href: "/help" }],
  }),
  component: HelpPage,
});

function HelpPage() {
  const cats = [
    { icon: ShoppingBag, t: "Buying", n: 18 },
    { icon: Store, t: "Selling", n: 24 },
    { icon: Wallet, t: "Wallet & payments", n: 14 },
    { icon: Shield, t: "Trust & safety", n: 11 },
    { icon: Book, t: "Account", n: 9 },
    { icon: MessageCircle, t: "Disputes", n: 7 },
  ];
  const popular = [
    "How do I create my first store?",
    "How does the Market360 wallet work?",
    "What happens if my order is delayed?",
    "How do I report a suspicious listing?",
    "How are seller fees calculated?",
    "How can I become a tester?",
  ];
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help Center"
        title={<>How can we <span className="gradient-text">help?</span></>}
        description="Browse guides and FAQs, or reach out anytime."
      >
        <div className="w-full max-w-xl">
          <div className="surface-card flex items-center gap-3 px-4 py-2.5">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input placeholder="Search articles, e.g. 'wallet withdrawal'" className="flex-1 bg-transparent text-sm outline-none" />
          </div>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-pro">
          <h2 className="text-2xl font-bold">Browse by category</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cats.map((c) => (
              <a href="#" key={c.t} className="surface-card surface-card-hover p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><c.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold">{c.t}</p>
                    <p className="text-xs text-muted-foreground">{c.n} articles</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro">
          <h2 className="text-2xl font-bold">Popular questions</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {popular.map((q) => (
              <a key={q} href="#" className="surface-card p-5 flex items-center justify-between text-sm font-medium hover:border-primary/40 transition-colors">
                {q}
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro">
          <div className="surface-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold">Still need help?</h2>
            <p className="mt-3 text-muted-foreground">Our team responds within hours.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">Contact support</Link>
              <Link to="/safety" className="btn-ghost">Marketplace safety</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
