import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Market360" },
      { name: "description", content: "Latest product updates, announcements, and roadmap news from the Market360 team." },
      { property: "og:title", content: "Market360 News & Updates" },
      { property: "og:description", content: "Stay in the loop with the latest from Market360." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const featured = {
  category: "Announcement",
  title: "Market360 opens its public tester program",
  excerpt: "We're inviting the community to help shape the next era of Market360 — with early access, perks, and direct influence on the roadmap.",
  date: "Jun 12, 2026",
};

const posts = [
  { category: "Product", title: "Wallet 2.0 ships: faster settlements, lower fees", excerpt: "Get paid in minutes with our re-engineered wallet.", date: "Jun 04, 2026" },
  { category: "Update", title: "Smarter search rolls out to all users", excerpt: "A redesigned discovery engine helps buyers find exactly what they want.", date: "May 22, 2026" },
  { category: "Roadmap", title: "What's coming this quarter", excerpt: "Storefronts, bulk uploads, smarter analytics, and more.", date: "May 10, 2026" },
  { category: "Trust", title: "New fraud protection layer goes live", excerpt: "Our updated AI model flags risky activity in real-time.", date: "Apr 28, 2026" },
  { category: "Community", title: "Tester spotlights: meet 5 of our top contributors", excerpt: "The people helping us ship better, faster.", date: "Apr 15, 2026" },
  { category: "Product", title: "Seller dashboard gets a refresh", excerpt: "Cleaner layout, faster insights, smoother workflows.", date: "Apr 02, 2026" },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="News & Updates"
        title={<>Fresh from <span className="gradient-text">Market360.</span></>}
        description="Announcements, product updates, and what's next."
      />

      <section className="section-pad">
        <div className="container-pro">
          <article className="surface-card surface-card-hover overflow-hidden p-0">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="relative aspect-[16/10] md:aspect-auto bg-gradient-to-br from-primary via-primary-glow to-accent">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 grid place-items-center text-primary-foreground">
                  <span className="text-7xl font-bold opacity-30">M360</span>
                </div>
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Featured · {featured.category}</span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">{featured.title}</h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{featured.date}</p>
                  <Link to="/tester" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">All updates</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article key={p.title} className="surface-card surface-card-hover p-6 flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                  <h3 className="mt-3 font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{p.date}</p>
                    <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary">Read <ArrowRight className="h-3.5 w-3.5" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
