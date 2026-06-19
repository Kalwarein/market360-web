import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Store, PackageCheck, BarChart3, Megaphone, Wallet, Users, TrendingUp, CheckCircle2, ArrowRight, Truck, MessageCircle, Tag } from "lucide-react";

export const Route = createFileRoute("/seller-solutions")({
  head: () => ({
    meta: [
      { title: "Seller Solutions — Market360" },
      { name: "description", content: "Open a store on Market360. Manage products, orders, analytics, and grow your business with built-in tools." },
      { property: "og:title", content: "Market360 Seller Solutions" },
      { property: "og:description", content: "Run your store. Reach more buyers. Grow on Market360." },
      { property: "og:url", content: "/seller-solutions" },
    ],
    links: [{ rel: "canonical", href: "/seller-solutions" }],
  }),
  component: SellerPage,
});

function SellerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Seller Solutions"
        title={<>Grow your store on <span className="gradient-text">Market360.</span></>}
        description="From your first listing to your thousandth order — all the tools you need to run a successful marketplace business."
      >
        <Link to="/download" className="btn-primary">Start selling <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/features" className="btn-ghost">See features</Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-pro">
          <h2 className="text-3xl font-bold sm:text-4xl">How to sell on Market360</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Create your store", d: "Sign up, verify your identity, and customize your storefront." },
              { n: "02", t: "List your products", d: "Add photos, set prices, and publish in minutes." },
              { n: "03", t: "Receive orders", d: "Buyers find you. Get paid securely through escrow." },
              { n: "04", t: "Ship & grow", d: "Use analytics to learn what sells and scale up." },
            ].map((s) => (
              <div key={s.n} className="surface-card surface-card-hover p-6">
                <p className="text-3xl font-bold text-primary">{s.n}</p>
                <p className="mt-4 font-semibold">{s.t}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Store, t: "Store management", d: "Customize your storefront, brand, and product collections." },
            { icon: PackageCheck, t: "Order management", d: "Track every order, communicate with buyers, and handle returns easily." },
            { icon: BarChart3, t: "Analytics tools", d: "Real-time insights into sales, traffic, conversion, and customer behavior." },
            { icon: Wallet, t: "Built-in wallet", d: "Receive payments instantly and withdraw to your bank in a tap." },
            { icon: Megaphone, t: "Promotions", d: "Run discounts, coupon codes, and featured listings." },
            { icon: Truck, t: "Shipping & fulfillment", d: "Print labels, sync trackings, and offer multiple delivery options." },
            { icon: MessageCircle, t: "Customer chat", d: "Build relationships with buyers through direct messaging." },
            { icon: Tag, t: "Inventory tracking", d: "Stay on top of stock with automatic alerts and low-stock warnings." },
            { icon: Users, t: "Multi-seller teams", d: "Add team members with role-based permissions." },
          ].map((it) => (
            <div key={it.t} className="surface-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><it.icon className="h-5 w-5" /></div>
              <p className="mt-5 font-semibold">{it.t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="eyebrow"><TrendingUp className="h-3.5 w-3.5" /> Business growth</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Built for sellers who want to scale.</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From your first sale to your hundredth thousand, Market360 grows with you. Smart recommendations, audience insights, and tools that compound your effort.
            </p>
            <ul className="mt-6 space-y-3">
              {["Audience analytics", "Repeat-buyer insights", "Promotional credits", "Priority support"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { v: "+62%", l: "Average seller revenue growth" },
              { v: "<2min", l: "To list a product" },
              { v: "0%", l: "Withdrawal fees on transfers" },
              { v: "24/7", l: "Seller support" },
            ].map((s) => (
              <div key={s.l} className="surface-card p-6 text-center">
                <p className="text-3xl font-bold text-primary">{s.v}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-10 text-center text-primary-foreground md:p-16">
            <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
            <h2 className="relative text-3xl font-bold sm:text-4xl">Open your store today.</h2>
            <p className="relative mt-3 opacity-90">Free to start. Pay only when you sell.</p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/download" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-primary shadow-lg">Get started <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm">Talk to sales</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
