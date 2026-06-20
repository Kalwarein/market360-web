import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Shield, Lock, Eye, Database, Share2, Trash2, UserCheck, Globe, Mail, FileText,
  CheckCircle2, AlertCircle, Sparkles, Server, Cookie, Baby, RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — How Market360 Protects Your Data" },
      { name: "description", content: "Learn how Market360 collects, uses, stores, and protects your personal data — including your rights, retention periods, cookies, and security measures." },
      { property: "og:title", content: "Market360 Privacy Policy" },
      { property: "og:description", content: "Transparent data practices, GDPR-aligned rights, and bank-grade security." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="container-pro relative py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow"><Shield className="h-3.5 w-3.5" /> Legal · Privacy</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Your privacy, <span className="gradient-text">treated with care.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              At Market360 we collect only what we need to run a safe marketplace — and we tell you exactly what,
              why, and how you stay in control. This policy explains everything in plain language.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5"><RefreshCw className="h-3.5 w-3.5 text-primary" /> Last updated: June 1, 2026</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5"><Globe className="h-3.5 w-3.5 text-primary" /> Applies globally</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> GDPR & CCPA aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="max-w-2xl">
            <p className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Our principles</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Four promises we keep every day.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Eye, t: "Total transparency", d: "We explain every data point we collect — no buried clauses, no surprises." },
              { Icon: Lock, t: "Security by default", d: "AES-256 encryption at rest, TLS 1.3 in transit, hardware-backed key storage." },
              { Icon: UserCheck, t: "You stay in control", d: "Export, correct, or delete your data anytime — directly from your account." },
              { Icon: Shield, t: "We never sell data", d: "Market360 makes money from marketplace fees, never from selling your information." },
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

      {/* ============ MAIN CONTENT (with sidebar TOC) ============ */}
      <section className="pb-24">
        <div className="container-pro grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 surface-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">On this page</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  ["collect", "1. Information we collect"],
                  ["use", "2. How we use it"],
                  ["sharing", "3. Sharing & disclosure"],
                  ["cookies", "4. Cookies & tracking"],
                  ["retention", "5. Data retention"],
                  ["rights", "6. Your rights"],
                  ["security", "7. Security measures"],
                  ["international", "8. International transfers"],
                  ["children", "9. Children's privacy"],
                  ["changes", "10. Policy changes"],
                  ["contact", "11. Contact us"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-muted-foreground hover:text-primary transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Article */}
          <article className="max-w-3xl space-y-12">
            <p className="text-base text-muted-foreground leading-relaxed">
              This Privacy Policy explains how <strong className="text-foreground">Market360 ("we", "our", "us")</strong>{" "}
              collects, uses, and protects information when you use our marketplace platform, mobile applications, and
              related services (collectively, the <em>"Services"</em>). By using Market360 you consent to the practices described here.
            </p>

            {/* 1 */}
            <section id="collect" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Database className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">1. Information we collect</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We collect three categories of information to operate, secure, and improve Market360:
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Account information", d: "Name, email, phone number, profile photo, store details, and verification documents you provide when registering as a buyer, seller, or store owner." },
                  { t: "Transaction data", d: "Orders, payments, wallet balances, payouts, refunds, shipping addresses, and communications between buyers and sellers." },
                  { t: "Device & usage", d: "Device model, OS version, IP address, app version, crash reports, browsing patterns, and feature interactions inside the app." },
                  { t: "Location (optional)", d: "Approximate or precise location when you enable it — used to surface nearby stores, delivery options, and currency defaults." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-border bg-card p-5">
                    <p className="font-semibold text-foreground">{x.t}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2 */}
            <section id="use" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">2. How we use information</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  "Operate the marketplace — list products, process orders, route payments, and manage refunds.",
                  "Prevent fraud, detect abuse, and keep the platform safe for buyers and sellers.",
                  "Personalize your home feed, search results, and product recommendations.",
                  "Send transactional updates (orders, payouts, security alerts) and — only with consent — promotional messages.",
                  "Improve product quality through anonymized analytics and A/B testing.",
                  "Comply with legal, tax, and regulatory obligations.",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3 */}
            <section id="sharing" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Share2 className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">3. Sharing & disclosure</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We share information only in these limited circumstances:
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { t: "With other users", d: "When you transact, we share the minimum needed (e.g. a buyer's shipping address with the seller fulfilling the order)." },
                  { t: "With service providers", d: "Vetted partners that help us process payments, send emails, host infrastructure, or moderate content — all bound by strict data agreements." },
                  { t: "For legal reasons", d: "When required by valid legal process, or to protect the rights, safety, or property of Market360, our users, or the public." },
                  { t: "Business transfers", d: "If Market360 is involved in a merger, acquisition, or asset sale, we will notify you before your data is transferred." },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold">{x.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-3 rounded-2xl border border-primary/30 bg-accent/40 p-5">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>We never sell your personal information</strong> to advertisers, data brokers, or any third party.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section id="cookies" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Cookie className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">4. Cookies & tracking</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We use a small set of cookies and similar technologies to keep you signed in, remember preferences, and
                measure how our site performs. You can disable non-essential cookies at any time from the consent banner
                or your browser settings.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {[
                      ["Essential", "Authentication, security, basic functionality", "Session"],
                      ["Preferences", "Language, theme, saved searches", "1 year"],
                      ["Analytics", "Aggregated usage to improve the product", "13 months"],
                    ].map((row) => (
                      <tr key={row[0]}>
                        {row.map((c, i) => <td key={i} className="px-4 py-3 text-muted-foreground">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5 */}
            <section id="retention" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Server className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">5. Data retention</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We retain personal data only as long as needed to deliver the Services and meet legal obligations. Typical retention windows:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• <strong className="text-foreground">Account data</strong> — kept while your account is active and for 90 days after deletion.</li>
                <li>• <strong className="text-foreground">Transaction records</strong> — retained for up to 7 years for tax and accounting compliance.</li>
                <li>• <strong className="text-foreground">Support messages</strong> — retained for 2 years from last contact.</li>
                <li>• <strong className="text-foreground">Marketing data</strong> — deleted immediately upon unsubscribe.</li>
              </ul>
            </section>

            {/* 6 */}
            <section id="rights" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><UserCheck className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">6. Your rights</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Regardless of where you live, Market360 honors the following data rights:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Access", "Request a copy of the data we hold about you."],
                  ["Correction", "Update inaccurate or incomplete information."],
                  ["Deletion", "Ask us to erase your personal data."],
                  ["Portability", "Receive your data in a machine-readable format."],
                  ["Objection", "Opt out of certain processing, including marketing."],
                  ["Withdraw consent", "Revoke consent at any time for consent-based processing."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-semibold flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7 */}
            <section id="security" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Lock className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">7. Security measures</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Market360 follows industry-leading practices: encrypted databases, isolated VPCs, principle-of-least-privilege
                access, mandatory 2FA for staff, continuous monitoring, regular third-party penetration testing, and a published
                vulnerability disclosure program.
              </p>
            </section>

            {/* 8 */}
            <section id="international" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Globe className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">8. International transfers</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Market360 operates globally. When data is transferred across borders we rely on Standard Contractual Clauses
                and equivalent safeguards approved by your local regulator.
              </p>
            </section>

            {/* 9 */}
            <section id="children" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Baby className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">9. Children's privacy</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Market360 is not directed to children under 16. We do not knowingly collect personal data from minors.
                If we discover such data, we delete it promptly.
              </p>
            </section>

            {/* 10 */}
            <section id="changes" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><RefreshCw className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">10. Policy changes</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We may revise this policy as Market360 evolves. We will notify you of material changes via email or an
                in-app banner at least 14 days before they take effect.
              </p>
            </section>

            {/* 11 */}
            <section id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                <h2 className="text-2xl font-bold">11. Contact us</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Questions, requests, or complaints? Reach our Data Protection team at{" "}
                <a className="text-primary font-medium hover:underline" href="mailto:privacy@market360.shop">privacy@market360.shop</a>{" "}
                — we respond within 5 business days.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/terms" className="btn-ghost"><FileText className="h-4 w-4" /> Read our Terms</Link>
                <Link to="/contact" className="btn-primary"><Mail className="h-4 w-4" /> Contact Support</Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
