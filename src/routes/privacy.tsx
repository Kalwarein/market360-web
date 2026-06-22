import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Shield, Lock, Eye, Database, Share2, UserCheck, Globe, Mail, FileText,
  CheckCircle2, Sparkles, Server, Cookie, Baby, RefreshCw, ChevronRight,
  Bell, AlertTriangle, Scale, Wallet, BarChart3, Smartphone, Trash2,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — How Market360 Protects Your Data" },
      { name: "description", content: "How Market360 collects, uses, stores, and protects your personal data — including your rights, retention periods, cookies, security, international transfers, and contact details." },
      { property: "og:title", content: "Market360 Privacy Policy" },
      { property: "og:description", content: "Transparent data practices, GDPR-aligned rights, and bank-grade security." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

/* ─── NAV SECTIONS ─────────────────────────────────────────── */
const TOC = [
  ["introduction",   "1. Introduction"],
  ["controller",     "2. Data Controller"],
  ["collect",        "3. Information We Collect"],
  ["sources",        "4. How We Collect It"],
  ["use",            "5. How We Use Information"],
  ["legal-basis",    "6. Legal Bases for Processing"],
  ["sharing",        "7. Sharing & Disclosure"],
  ["wallet",         "8. Wallet & Payment Data"],
  ["cookies",        "9. Cookies & Tracking"],
  ["analytics",      "10. Analytics & Personalization"],
  ["marketing",      "11. Marketing Communications"],
  ["retention",      "12. Data Retention"],
  ["rights",         "13. Your Rights"],
  ["security",       "14. Security Measures"],
  ["international",  "15. International Transfers"],
  ["children",       "16. Children's Privacy"],
  ["thirdparty",     "17. Third-Party Services"],
  ["breach",         "18. Data Breach Notification"],
  ["automated",      "19. Automated Decisions"],
  ["changes",        "20. Changes to This Policy"],
  ["contact",        "21. Contact Us"],
];

function PrivacyPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background w-full">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8 mx-auto xl:max-w-7xl relative py-20 md:py-28">
          <div className="w-full max-w-3xl">
            <span className="eyebrow"><Shield className="h-3.5 w-3.5" /> Legal · Privacy Policy</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              This Privacy Policy explains how Market360 collects, uses, stores, and protects your personal information when
              you use our marketplace, mobile apps, digital wallet, and related services. We believe privacy is a right —
              not a feature — and this document explains everything in plain language.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <RefreshCw className="h-3.5 w-3.5 text-primary" /> Last updated: June 1, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <Globe className="h-3.5 w-3.5 text-primary" /> Applies globally
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <FileText className="h-3.5 w-3.5 text-primary" /> Version 3.2
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> GDPR &amp; CCPA aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="border-b border-border bg-surface py-12 w-full overflow-x-hidden">
        <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8 mx-auto xl:max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            <Sparkles className="inline h-3.5 w-3.5 mr-1 text-primary" /> Our four promises — plain language summary
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Eye, t: "Total transparency", d: "We explain every data point we collect — no buried clauses, no surprises." },
              { Icon: Lock, t: "Security by default", d: "AES-256 encryption at rest, TLS 1.3 in transit, hardware-backed key storage." },
              { Icon: UserCheck, t: "You stay in control", d: "Export, correct, or delete your data anytime — directly from your account." },
              { Icon: Shield, t: "We never sell data", d: "Market360 makes money from marketplace fees, never from selling your information." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="surface-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            The summary above is for convenience only. The binding policy is the full text below.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-28 pt-12 w-full overflow-x-hidden">
        <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8 mx-auto grid gap-12 lg:grid-cols-[260px_1fr] xl:max-w-7xl">

          {/* SIDEBAR TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 surface-card p-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">Contents</p>
              <ul className="space-y-1 text-sm">
                {TOC.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="flex items-center gap-1.5 py-1 text-muted-foreground hover:text-primary transition-colors leading-snug"
                    >
                      <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border space-y-2">
                <Link to="/terms" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <FileText className="h-3.5 w-3.5" /> Terms of Service
                </Link>
                <a href="mailto:privacy@market360.shop" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5" /> privacy@market360.shop
                </a>
              </div>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="min-w-0 w-full space-y-16 text-sm leading-7 text-muted-foreground">

            <p className="text-base leading-relaxed">
              This Privacy Policy (the <strong className="text-foreground">"Policy"</strong>) explains how{" "}
              <strong className="text-foreground">Market360 Ltd.</strong> ("<strong className="text-foreground">Market360</strong>",
              "<strong className="text-foreground">we</strong>", "<strong className="text-foreground">us</strong>", or
              "<strong className="text-foreground">our</strong>"), a company incorporated under the laws of Sierra Leone,
              collects, uses, stores, shares, and protects your personal information when you access or use our website,
              mobile applications, digital wallet, seller dashboard, and all related features and services
              (collectively, the <strong className="text-foreground">"Services"</strong>).
            </p>
            <p className="text-base leading-relaxed -mt-8">
              By using the Services you acknowledge that you have read, understood, and consent to the practices described
              in this Policy. If you do not agree with any part of this Policy, you must not access or use the Services.
            </p>

            {/* 1 */}
            <Section id="introduction" icon={<Sparkles />} title="1. Introduction">
              <p>
                At Market360 we believe that privacy is a fundamental right, not a premium feature. We have engineered
                the entire platform around the principles of <em>data minimisation</em>, <em>purpose limitation</em>, and
                <em> transparency</em>. We collect the smallest amount of data necessary to operate a safe and useful
                marketplace, we use it only for the purposes you would reasonably expect, and we tell you exactly what
                happens to it.
              </p>
              <p className="mt-4">
                This Policy is written for both buyers and sellers. Wherever a section applies only to one group (for example,
                payout data only applies to sellers), we say so clearly. Throughout this Policy, capitalised terms have the
                meaning given to them in our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
              </p>
              <p className="mt-4">
                This Policy should be read alongside our Terms of Service, Cookie Notice, and any product-specific
                disclosures presented to you in the app or on this website.
              </p>
            </Section>

            {/* 2 */}
            <Section id="controller" icon={<Scale />} title="2. Data Controller">
              <p>
                For the purposes of applicable data protection law (including the EU GDPR, the UK GDPR, the California
                Consumer Privacy Act, and the Sierra Leone Data Protection Bill), the data controller of your personal
                information is:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-4 text-foreground">
                <p className="font-semibold">Market360 Ltd.</p>
                <p className="mt-1 text-sm text-muted-foreground">Freetown, Sierra Leone</p>
                <p className="mt-1 text-sm text-muted-foreground">Email: <a className="text-primary hover:underline" href="mailto:privacy@market360.shop">privacy@market360.shop</a></p>
              </div>
              <p className="mt-4">
                If your local law requires a designated representative in your region, please contact our Data Protection
                Officer at the email address above and we will appoint one.
              </p>
            </Section>

            {/* 3 */}
            <Section id="collect" icon={<Database />} title="3. Information We Collect">
              <p>We collect the following categories of personal information:</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Account information", d: "Full name, email address, phone number, profile photo, store details, business registration documents, and identity verification data when you register as a buyer, seller, or store owner." },
                  { t: "Transaction data", d: "Orders, payments, wallet balances, payouts, refunds, shipping addresses, invoices, and all messages between buyers and sellers related to a transaction." },
                  { t: "Device & usage", d: "Device model, operating system version, mobile carrier, IP address, app version, crash reports, page views, click patterns, and how you interact with features inside the app." },
                  { t: "Location data", d: "Approximate location based on your IP address, and (only with your explicit consent) precise GPS location to surface nearby stores, delivery options, and currency defaults." },
                  { t: "Communications", d: "Support tickets, chat transcripts, voice notes, email correspondence, and feedback you submit through the app or via our help centre." },
                  { t: "Identity verification", d: "Government-issued ID images, selfies for liveness checks, tax identification numbers, and beneficial-ownership documents required for sellers and high-value transactions." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-border bg-card p-5">
                    <p className="font-semibold text-foreground">{x.t}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                We do <strong className="text-foreground">not</strong> intentionally collect special categories of data
                (such as racial origin, religion, political opinions, health, biometric or genetic data) unless you provide
                it to us voluntarily, for example via a support message.
              </p>
            </Section>

            {/* 4 */}
            <Section id="sources" icon={<Globe />} title="4. How We Collect It">
              <p>We collect personal information through the following sources:</p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-foreground">Directly from you</strong> when you register an account, list a product, place an order, complete identity verification, or contact our support team.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-foreground">Automatically</strong> when you use our Services — through cookies, mobile SDKs, server logs, and similar technologies.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-foreground">From third parties</strong> such as payment processors, identity verification partners, fraud-prevention networks, and public business registries.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-foreground">From other users</strong> — for example, when a buyer leaves you a review or a seller flags a transaction for investigation.</span></li>
              </ul>
            </Section>

            {/* 5 */}
            <Section id="use" icon={<Sparkles />} title="5. How We Use Information">
              <p>We use your personal information for the following purposes:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Operate the marketplace — list products, process orders, route payments, and manage refunds and disputes.",
                  "Verify your identity and prevent fraud, money laundering, and other abuse of the platform.",
                  "Personalise your home feed, search results, and product recommendations.",
                  "Send transactional updates such as order confirmations, payout notifications, and security alerts.",
                  "Send marketing messages — only with your explicit, revocable consent.",
                  "Improve product quality through anonymised analytics, A/B testing, and crash diagnostics.",
                  "Provide customer support and respond to enquiries you send us.",
                  "Comply with legal, tax, accounting, and regulatory obligations in Sierra Leone and other jurisdictions where we operate.",
                  "Enforce our Terms of Service and other policies, including investigating suspected violations.",
                ].map((line) => (
                  <li key={line} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span>{line}</span></li>
                ))}
              </ul>
            </Section>

            {/* 6 */}
            <Section id="legal-basis" icon={<Scale />} title="6. Legal Bases for Processing">
              <p>
                Where data protection law requires a legal basis, we rely on one or more of the following:
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Legal basis</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">When we rely on it</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {[
                      ["Contract", "To deliver the Services you have asked us to provide — for example, processing your order."],
                      ["Legal obligation", "To comply with tax, anti-money-laundering, accounting, or law-enforcement requirements."],
                      ["Legitimate interests", "To prevent fraud, improve the product, and keep our platform secure — balanced against your rights."],
                      ["Consent", "For marketing communications, optional analytics cookies, and precise location data."],
                    ].map(([a, b]) => (
                      <tr key={a}>
                        <td className="px-4 py-3 font-medium text-foreground">{a}</td>
                        <td className="px-4 py-3 text-muted-foreground">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 7 */}
            <Section id="sharing" icon={<Share2 />} title="7. Sharing & Disclosure">
              <p>We share personal information only in these limited circumstances:</p>
              <div className="mt-5 space-y-3">
                {[
                  { t: "With other users", d: "When you transact, we share only the minimum needed — for example, a buyer's shipping address with the seller fulfilling that order." },
                  { t: "With service providers", d: "Vetted partners that help us process payments, host infrastructure, send emails, verify identity, or moderate content — all bound by strict written data-processing agreements." },
                  { t: "With regulators & law enforcement", d: "When required by valid legal process or to protect the rights, safety, or property of Market360, our users, or the public." },
                  { t: "With professional advisors", d: "Lawyers, auditors, and accountants who require access to fulfil their professional duties, under strict confidentiality." },
                  { t: "Business transfers", d: "If Market360 is involved in a merger, acquisition, restructuring, or asset sale, we will notify you before your data is transferred and give you a meaningful choice where required by law." },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold text-foreground">{x.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-3 rounded-2xl border border-primary/30 bg-accent/40 p-5">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>We never sell your personal information</strong> to advertisers, data brokers, or any third party.
                  We have not sold personal information in the past and have no plans to do so in the future.
                </p>
              </div>
            </Section>

            {/* 8 */}
            <Section id="wallet" icon={<Wallet />} title="8. Wallet & Payment Data">
              <p>
                When you use the Market360 Wallet, we process additional financial information including wallet balances,
                top-ups, payouts, and transaction history. This data is required to operate the wallet, calculate fees,
                and comply with anti-money-laundering and counter-terrorism financing laws.
              </p>
              <p className="mt-4">
                Card numbers, mobile-money PINs, and other sensitive payment credentials are tokenised by our payment
                partners and are <strong className="text-foreground">never</strong> stored on Market360 servers in
                readable form.
              </p>
              <p className="mt-4">
                For high-value transactions and seller payouts above regulatory thresholds, we may request additional
                verification documents (such as proof of address, business registration, or source of funds). This
                information is retained for the periods required by Sierra Leone financial regulations.
              </p>
            </Section>

            {/* 9 */}
            <Section id="cookies" icon={<Cookie />} title="9. Cookies & Tracking">
              <p>
                We use a small set of cookies and similar technologies (such as mobile SDK identifiers and local storage)
                to keep you signed in, remember preferences, and measure how our Services perform. You can disable
                non-essential cookies at any time from the consent banner or your browser settings.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {[
                      ["Essential", "Authentication, security, basic functionality", "Session"],
                      ["Preferences", "Language, theme, saved searches", "1 year"],
                      ["Analytics", "Aggregated usage to improve the product", "13 months"],
                      ["Fraud prevention", "Detecting suspicious devices and sessions", "12 months"],
                    ].map((row) => (
                      <tr key={row[0]}>
                        {row.map((c, i) => <td key={i} className="px-4 py-3 text-muted-foreground">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 10 */}
            <Section id="analytics" icon={<BarChart3 />} title="10. Analytics & Personalization">
              <p>
                We use first-party analytics to understand how Market360 is used, which features are popular, where users
                get stuck, and how to improve. Whenever possible, analytics events are aggregated and stripped of
                identifying details before storage.
              </p>
              <p className="mt-4">
                Personalised recommendations (such as your home feed and product suggestions) are generated from your
                browsing and purchase history within Market360. You can reset your personalisation profile at any time
                from <em>Settings → Privacy → Personalisation</em>.
              </p>
            </Section>

            {/* 11 */}
            <Section id="marketing" icon={<Bell />} title="11. Marketing Communications">
              <p>
                We send marketing messages — including emails, SMS, and push notifications — only with your explicit consent.
                Every marketing message includes a one-click unsubscribe link, and you can manage your communication
                preferences at any time from <em>Settings → Notifications</em>.
              </p>
              <p className="mt-4">
                Transactional messages (such as order confirmations, payout notifications, security alerts, and policy
                updates) are not marketing and cannot be turned off while you maintain an active account.
              </p>
            </Section>

            {/* 12 */}
            <Section id="retention" icon={<Server />} title="12. Data Retention">
              <p>
                We retain personal information only for as long as necessary to deliver the Services and meet our legal
                obligations. Typical retention windows are:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• <strong className="text-foreground">Account data</strong> — kept while your account is active and for 90 days after deletion.</li>
                <li>• <strong className="text-foreground">Transaction records</strong> — retained for up to 7 years for tax and accounting compliance.</li>
                <li>• <strong className="text-foreground">KYC / identity verification</strong> — retained for 5 years after the end of the customer relationship, as required by anti-money-laundering law.</li>
                <li>• <strong className="text-foreground">Support messages</strong> — retained for 2 years from the date of last contact.</li>
                <li>• <strong className="text-foreground">Marketing data</strong> — deleted immediately upon unsubscribe.</li>
                <li>• <strong className="text-foreground">Server logs &amp; security events</strong> — retained for 12 months.</li>
              </ul>
              <p className="mt-4">
                After the applicable retention period expires, your data is securely deleted or anonymised so it can no
                longer be linked back to you.
              </p>
            </Section>

            {/* 13 */}
            <Section id="rights" icon={<UserCheck />} title="13. Your Rights">
              <p>Regardless of where you live, Market360 honours the following data rights:</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Access", "Request a copy of the personal data we hold about you."],
                  ["Correction", "Update inaccurate or incomplete information."],
                  ["Deletion", "Ask us to erase your personal data, subject to legal retention obligations."],
                  ["Portability", "Receive your data in a structured, machine-readable format."],
                  ["Restriction", "Ask us to limit the processing of your data in certain circumstances."],
                  ["Objection", "Opt out of certain processing, including direct marketing and profiling."],
                  ["Withdraw consent", "Revoke consent at any time for consent-based processing."],
                  ["Lodge a complaint", "Contact your local data protection authority if you believe your rights have been infringed."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-semibold flex items-center gap-2 text-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> {t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                To exercise any of these rights, email{" "}
                <a className="text-primary hover:underline font-medium" href="mailto:privacy@market360.shop">privacy@market360.shop</a>{" "}
                or use the controls in <em>Settings → Privacy</em>. We will respond within 30 days, and never charge a
                fee for reasonable requests.
              </p>
            </Section>

            {/* 14 */}
            <Section id="security" icon={<Lock />} title="14. Security Measures">
              <p>
                Market360 follows industry-leading security practices to protect your data from unauthorised access,
                disclosure, alteration, or destruction:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• <strong className="text-foreground">Encryption</strong> — AES-256 at rest, TLS 1.3 in transit, hardware-backed key storage.</li>
                <li>• <strong className="text-foreground">Network isolation</strong> — production data lives in private VPCs with no public IP addresses.</li>
                <li>• <strong className="text-foreground">Access control</strong> — principle of least privilege, mandatory two-factor authentication for all staff.</li>
                <li>• <strong className="text-foreground">Monitoring</strong> — continuous intrusion detection, anomaly alerting, and 24/7 on-call security response.</li>
                <li>• <strong className="text-foreground">Testing</strong> — regular third-party penetration testing and a public vulnerability disclosure programme.</li>
                <li>• <strong className="text-foreground">Backups</strong> — encrypted, geographically distributed backups with quarterly restore drills.</li>
              </ul>
              <p className="mt-4">
                No system is perfectly secure, but we are committed to using reasonable and appropriate safeguards and
                to continuously improving our security posture.
              </p>
            </Section>

            {/* 15 */}
            <Section id="international" icon={<Globe />} title="15. International Transfers">
              <p>
                Market360 operates globally and uses cloud infrastructure that may store and process your data outside
                Sierra Leone, including in the European Union, the United Kingdom, and the United States. When data is
                transferred across borders, we rely on appropriate safeguards such as Standard Contractual Clauses,
                adequacy decisions, and equivalent mechanisms approved by your local regulator.
              </p>
              <p className="mt-4">
                You can request a copy of the safeguards we use by contacting{" "}
                <a className="text-primary hover:underline" href="mailto:privacy@market360.shop">privacy@market360.shop</a>.
              </p>
            </Section>

            {/* 16 */}
            <Section id="children" icon={<Baby />} title="16. Children's Privacy">
              <p>
                Market360 is not directed to children under the age of 16, and we do not knowingly collect personal
                information from minors. If you are under 16, please do not register an account or send us any personal
                information.
              </p>
              <p className="mt-4">
                If we discover that we have inadvertently collected personal data from a child without verified parental
                consent, we will delete that information promptly. Parents and guardians who believe their child has
                provided personal data to Market360 should contact us at{" "}
                <a className="text-primary hover:underline" href="mailto:privacy@market360.shop">privacy@market360.shop</a>.
              </p>
            </Section>

            {/* 17 */}
            <Section id="thirdparty" icon={<Smartphone />} title="17. Third-Party Services">
              <p>
                The Services may contain links to third-party websites, apps, or content that are not operated or
                controlled by Market360. This Policy does not apply to those third parties, and we are not responsible
                for their privacy practices.
              </p>
              <p className="mt-4">
                We encourage you to review the privacy policies of any third-party service you interact with through
                Market360 — including payment processors, delivery providers, and external login providers — before
                providing them with your personal information.
              </p>
            </Section>

            {/* 18 */}
            <Section id="breach" icon={<AlertTriangle />} title="18. Data Breach Notification">
              <p>
                In the unlikely event of a personal data breach that is likely to result in a risk to your rights and
                freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the
                breach, where required by law.
              </p>
              <p className="mt-4">
                Where the breach is likely to result in a high risk to your rights and freedoms, we will also notify you
                directly without undue delay, providing clear information about the nature of the breach, the data
                involved, the likely consequences, and the steps you can take to protect yourself.
              </p>
            </Section>

            {/* 19 */}
            <Section id="automated" icon={<BarChart3 />} title="19. Automated Decisions">
              <p>
                We use automated systems to detect fraud, score risk on transactions, rank search results, and personalise
                your home feed. These systems do not produce legal effects or similarly significant consequences without
                meaningful human review.
              </p>
              <p className="mt-4">
                Where an automated decision (such as blocking a payment for suspected fraud) materially affects you, you
                have the right to request human review, to express your point of view, and to contest the decision by
                emailing <a className="text-primary hover:underline" href="mailto:privacy@market360.shop">privacy@market360.shop</a>.
              </p>
            </Section>

            {/* 20 */}
            <Section id="changes" icon={<RefreshCw />} title="20. Changes to This Policy">
              <p>
                We may revise this Privacy Policy from time to time as Market360 evolves, as our data practices change,
                or as required by law. The latest version will always be available at this URL, and the
                "Last updated" date at the top of the page will reflect the most recent revision.
              </p>
              <p className="mt-4">
                We will notify you of material changes by email and/or via an in-app banner at least 14 days before they
                take effect. Continued use of the Services after the effective date of the revised Policy constitutes
                your acceptance of the updated terms.
              </p>
            </Section>

            {/* 21 */}
            <Section id="contact" icon={<Mail />} title="21. Contact Us">
              <p>
                Questions, requests, or complaints? Please contact our Data Protection team — we respond within 5 business
                days to ordinary enquiries and within 30 days to formal rights requests.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5">
                <p className="font-semibold text-foreground">Market360 — Data Protection</p>
                <p className="mt-2 text-sm">Email: <a className="text-primary hover:underline" href="mailto:privacy@market360.shop">privacy@market360.shop</a></p>
                <p className="mt-1 text-sm">General support: <a className="text-primary hover:underline" href="mailto:hello@market360.shop">hello@market360.shop</a></p>
                <p className="mt-1 text-sm">Postal: Market360 Ltd., Freetown, Sierra Leone</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/terms" className="btn-ghost"><FileText className="h-4 w-4" /> Read our Terms</Link>
                <Link to="/contact" className="btn-primary"><Mail className="h-4 w-4" /> Contact Support</Link>
                <a href="mailto:privacy@market360.shop" className="btn-ghost"><Trash2 className="h-4 w-4" /> Request data deletion</a>
              </div>
            </Section>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ─── REUSABLE SECTION WRAPPER ──────────────────────────────── */
function Section({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 w-full min-w-0">
      <div className="flex items-start gap-3 mb-5 pb-4 border-b border-border">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary mt-0.5">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-foreground leading-snug">{title}</h2>
      </div>
      <div className="w-full min-w-0 space-y-0 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
