import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Shield, Lock, Eye, AlertTriangle, BadgeCheck, Scale, CheckCircle2, ArrowRight, FileWarning } from "lucide-react";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Marketplace Safety — Market360" },
      { name: "description", content: "Learn how Market360 protects buyers and sellers with escrow, KYC, fraud detection, and dispute resolution." },
      { property: "og:title", content: "Market360 Marketplace Safety" },
      { property: "og:description", content: "Trust at every step of every transaction." },
      { property: "og:url", content: "/safety" },
    ],
    links: [{ rel: "canonical", href: "/safety" }],
  }),
  component: SafetyPage,
});

function SafetyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trust & Safety"
        title={<>A safer way to <span className="gradient-text">buy and sell.</span></>}
        description="Real protection, real people, and real systems guarding every order."
      />

      <section className="section-pad">
        <div className="container-pro grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, t: "Fraud prevention", d: "AI models flag suspicious behavior in real time and block risky transactions before they happen." },
            { icon: Lock, t: "Buyer protection", d: "Funds are held in escrow until you confirm delivery. Get a full refund on undelivered or misrepresented items." },
            { icon: BadgeCheck, t: "Seller protection", d: "We protect sellers against fraudulent chargebacks and dishonest disputes." },
            { icon: Eye, t: "Verified identities", d: "KYC verification for sellers, badges for trusted accounts, and reputation that travels with the user." },
            { icon: Scale, t: "Dispute resolution", d: "If something goes wrong, our trust team reviews fairly and quickly — usually within 48 hours." },
            { icon: FileWarning, t: "Reporting tools", d: "Report listings, accounts, or messages with one tap. We investigate every report." },
          ].map((it) => (
            <div key={it.t} className="surface-card surface-card-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><it.icon className="h-5 w-5" /></div>
              <p className="mt-5 font-semibold">{it.t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-border">
        <div className="container-pro grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Security practices</h2>
            <ul className="mt-6 space-y-3">
              {[
                "End-to-end encrypted payments and chat",
                "Two-factor authentication and biometric login",
                "PCI-DSS compliant payment infrastructure",
                "24/7 monitoring and anomaly detection",
                "Regular third-party security audits",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Report fraud or abuse</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Spotted something off? Let us know and we'll take it from there.</p>
            <form className="mt-5 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Listing, account, or order ID" />
              <textarea rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Describe what happened" />
              <button type="submit" className="btn-primary">Submit report</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro text-center">
          <h2 className="text-3xl font-bold">Have a safety question?</h2>
          <p className="mt-3 text-muted-foreground">Our team is here 24/7.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Contact us <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/help" className="btn-ghost">Help center</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
