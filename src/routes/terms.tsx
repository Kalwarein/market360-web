import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Scale, UserCheck, ShoppingBag, CreditCard, Ban, AlertTriangle, ShieldOff, Gavel,
  RefreshCw, Mail, FileText, CheckCircle2, Sparkles, Globe, Store, MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Market360 Marketplace Rules" },
      { name: "description", content: "The terms governing your use of the Market360 marketplace — account responsibilities, buying & selling rules, fees, prohibited conduct, and dispute resolution." },
      { property: "og:title", content: "Market360 Terms of Service" },
      { property: "og:description", content: "Clear rules of the road for buyers, sellers, and stores on Market360." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="container-pro relative py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow"><Scale className="h-3.5 w-3.5" /> Legal · Terms</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              The rules that keep <span className="gradient-text">Market360 fair for everyone.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              These Terms of Service describe your rights and responsibilities when you use Market360 — as a buyer,
              seller, store owner, or visitor. Please read them carefully.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5"><RefreshCw className="h-3.5 w-3.5 text-primary" /> Last updated: June 1, 2026</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5"><Globe className="h-3.5 w-3.5 text-primary" /> Worldwide</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5"><FileText className="h-3.5 w-3.5 text-primary" /> Version 3.2</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="max-w-2xl">
            <p className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> The short version</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">A 30-second summary.</h2>
            <p className="mt-3 text-muted-foreground">The full terms are below. The essentials in plain English:</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: UserCheck, t: "Be honest", d: "Use a real identity, accurate listings, and truthful messages." },
              { Icon: ShoppingBag, t: "Trade fairly", d: "Ship on time, describe items accurately, and resolve disputes in good faith." },
              { Icon: CreditCard, t: "Pay fees transparently", d: "Sellers pay a per-transaction fee disclosed before checkout." },
              { Icon: Ban, t: "Respect the rules", d: "No illegal goods, harassment, fraud, or attempts to game the platform." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAIN ============ */}
      <section className="pb-24">
        <div className="container-pro grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 surface-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Sections</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  ["acceptance", "1. Acceptance"],
                  ["accounts", "2. Your account"],
                  ["buying", "3. Buying on Market360"],
                  ["selling", "4. Selling on Market360"],
                  ["fees", "5. Fees & payouts"],
                  ["prohibited", "6. Prohibited conduct"],
                  ["content", "7. User content"],
                  ["disputes", "8. Disputes & refunds"],
                  ["termination", "9. Termination"],
                  ["disclaimer", "10. Disclaimers"],
                  ["liability", "11. Limitation of liability"],
                  ["law", "12. Governing law"],
                  ["contact", "13. Contact"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-muted-foreground hover:text-primary transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="max-w-3xl space-y-12">
            <p className="text-base text-muted-foreground leading-relaxed">
              Welcome to Market360. These Terms of Service (the <em>"Terms"</em>) form a binding agreement between you
              and <strong className="text-foreground">Market360 Ltd.</strong> ("Market360", "we", "our") and govern your access
              to and use of our marketplace, mobile apps, wallet, seller tools, and related services (collectively, the <em>"Services"</em>).
            </p>

            <section id="acceptance" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><CheckCircle2 className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">1. Acceptance of terms</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By creating an account, downloading the app, or otherwise accessing the Services, you confirm that you are
                at least 18 years old (or the age of majority where you live) and agree to be bound by these Terms, our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and any policies
                referenced within. If you don't agree, please don't use Market360.
              </p>
            </section>

            <section id="accounts" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><UserCheck className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">2. Your account</h2>
              </div>
              <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                <li>• Provide accurate, current information when registering and keep it up to date.</li>
                <li>• Safeguard your password and enable two-factor authentication.</li>
                <li>• You are responsible for all activity that occurs under your account.</li>
                <li>• Notify us immediately at <a href="mailto:security@market360.shop" className="text-primary hover:underline">security@market360.shop</a> if you suspect unauthorized access.</li>
              </ul>
            </section>

            <section id="buying" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><ShoppingBag className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">3. Buying on Market360</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                As a buyer you agree to:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Read listings carefully before purchasing.</li>
                <li>• Pay promptly using a supported payment method.</li>
                <li>• Communicate respectfully with sellers and our support team.</li>
                <li>• Confirm receipt and rate your experience honestly to help the community.</li>
              </ul>
            </section>

            <section id="selling" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Store className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">4. Selling on Market360</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Sellers and store owners must:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Only list goods you own or are legally authorized to sell.</li>
                <li>• Provide accurate titles, descriptions, photos, and pricing.</li>
                <li>• Ship within the timeframe advertised and supply valid tracking when applicable.</li>
                <li>• Honor advertised return and warranty policies.</li>
                <li>• Comply with all applicable tax, import, and consumer protection laws.</li>
              </ul>
            </section>

            <section id="fees" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><CreditCard className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">5. Fees & payouts</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Listing on Market360 is free. We charge a transparent transaction fee on successful sales, shown to the
                seller before each listing is published. Payouts to your linked wallet or bank account follow our standard
                schedule (typically T+2 business days). Currency conversion and withdrawal fees, if any, are disclosed in
                advance.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Plan</th>
                      <th className="px-4 py-3 text-left font-semibold">Transaction fee</th>
                      <th className="px-4 py-3 text-left font-semibold">Payout speed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {[
                      ["Starter", "4.9% + $0.30", "T+2 business days"],
                      ["Growth", "3.9% + $0.30", "T+1 business day"],
                      ["Enterprise", "Custom", "Same day"],
                    ].map((r) => (
                      <tr key={r[0]}>
                        {r.map((c, i) => <td key={i} className="px-4 py-3 text-muted-foreground">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="prohibited" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Ban className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">6. Prohibited conduct</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The following activities can lead to account suspension or permanent ban:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Listing illegal, counterfeit, or restricted goods.",
                  "Manipulating reviews, ratings, or rankings.",
                  "Harassment, hate speech, or threats against any user.",
                  "Phishing, malware, or any attempt to compromise accounts.",
                  "Circumventing Market360's fees by transacting off-platform.",
                  "Using bots, scrapers, or unauthorized API access.",
                ].map((line) => (
                  <div key={line} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="content" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><MessageSquare className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">7. User content</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You retain ownership of the listings, photos, and messages you create. By uploading content you grant
                Market360 a worldwide, royalty-free license to host, display, and promote that content as part of the
                Services. You are responsible for ensuring you have the rights to share what you upload.
              </p>
            </section>

            <section id="disputes" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Scale className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">8. Disputes & refunds</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We encourage buyers and sellers to resolve issues directly via in-app messaging. If you cannot reach a
                resolution within 7 days, either party may open a dispute. Market360's Trust & Safety team will review
                the evidence and decide impartially. Eligible refunds are processed back to the original payment method
                within 5–10 business days.
              </p>
            </section>

            <section id="termination" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><ShieldOff className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">9. Termination</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You may close your account at any time from settings. We may suspend or terminate accounts that violate
                these Terms, with notice when reasonably possible. Outstanding payouts and obligations survive termination.
              </p>
            </section>

            <section id="disclaimer" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><AlertTriangle className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">10. Disclaimers</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The Services are provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of
                any kind, express or implied. Market360 does not guarantee uninterrupted access, error-free operation,
                or the quality of items sold by independent sellers.
              </p>
            </section>

            <section id="liability" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><ShieldOff className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">11. Limitation of liability</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Market360's total liability for any claim arising out of these
                Terms or your use of the Services is limited to the greater of (a) the fees you paid us in the 12 months
                preceding the claim, or (b) USD 100.
              </p>
            </section>

            <section id="law" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Gavel className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">12. Governing law</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                These Terms are governed by the laws applicable in your country of residence, without regard to conflict
                of law principles. Mandatory consumer protections in your jurisdiction continue to apply.
              </p>
            </section>

            <section id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">13. Contact</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Questions about these Terms? Email{" "}
                <a className="text-primary font-medium hover:underline" href="mailto:legal@market360.shop">legal@market360.shop</a>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/privacy" className="btn-ghost"><FileText className="h-4 w-4" /> Read our Privacy Policy</Link>
                <Link to="/contact" className="btn-primary"><Mail className="h-4 w-4" /> Contact us</Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
