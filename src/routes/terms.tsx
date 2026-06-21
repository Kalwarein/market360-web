import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Scale, UserCheck, ShoppingBag, CreditCard, Ban, AlertTriangle, ShieldOff, Gavel,
  RefreshCw, Mail, FileText, CheckCircle2, Sparkles, Globe, Store, MessageSquare,
  Lock, Eye, Wallet, Package, Truck, BarChart3, Shield, Bell, Users, Clock,
  Building2, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Market360" },
      { name: "description", content: "The terms governing your use of the Market360 marketplace — account responsibilities, buying & selling rules, fees, prohibited conduct, and dispute resolution." },
      { property: "og:title", content: "Market360 Terms of Service" },
      { property: "og:description", content: "Clear, comprehensive terms of service for buyers, sellers, and stores on Market360." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

/* ─── NAV SECTIONS ─────────────────────────────────────────── */
const TOC = [
  ["acceptance",        "1. Acceptance of Terms"],
  ["definitions",       "2. Definitions"],
  ["eligibility",       "3. Eligibility"],
  ["accounts",          "4. Account Registration & Security"],
  ["buying",            "5. Buying on Market360"],
  ["selling",           "6. Selling on Market360"],
  ["stores",            "7. Stores & Storefronts"],
  ["wallet",            "8. Market360 Wallet & Payments"],
  ["fees",              "9. Fees, Charges & Payouts"],
  ["prohibited",        "10. Prohibited Conduct"],
  ["content",           "11. User-Generated Content"],
  ["ip",                "12. Intellectual Property"],
  ["privacy",           "13. Privacy & Data"],
  ["disputes",          "14. Disputes, Returns & Refunds"],
  ["moderation",        "15. Platform Moderation"],
  ["termination",       "16. Suspension & Termination"],
  ["disclaimer",        "17. Disclaimers"],
  ["liability",         "18. Limitation of Liability"],
  ["indemnification",   "19. Indemnification"],
  ["changes",           "20. Changes to These Terms"],
  ["law",               "21. Governing Law & Jurisdiction"],
  ["contact",           "22. Contact & Legal Notices"],
];

/* ─── PAGE ──────────────────────────────────────────────────── */
function TermsPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background w-full">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8 mx-auto xl:max-w-7xl relative py-20 md:py-28">
          <div className="w-full max-w-3xl">
            <span className="eyebrow"><Scale className="h-3.5 w-3.5" /> Legal · Terms of Service</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              These Terms of Service govern your use of the Market360 platform — including our marketplace, mobile applications, digital wallet, seller tools, and all related services. Please read them in full before using Market360.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <RefreshCw className="h-3.5 w-3.5 text-primary" /> Last updated: June 1, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <Globe className="h-3.5 w-3.5 text-primary" /> Applies in Sierra Leone
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5">
                <FileText className="h-3.5 w-3.5 text-primary" /> Version 3.2
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="border-b border-border bg-surface py-12 w-full overflow-x-hidden">
        <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8 mx-auto xl:max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            <Sparkles className="inline h-3.5 w-3.5 mr-1 text-primary" /> Key principles — plain language summary
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { Icon: UserCheck, t: "Be honest", d: "Use a real identity. Provide accurate listings, prices, and descriptions." },
              { Icon: ShoppingBag, t: "Trade fairly", d: "Fulfill orders on time, communicate in good faith, and honour your commitments." },
              { Icon: CreditCard, t: "Transparent fees", d: "All fees are disclosed before you list. No hidden charges. Leones only." },
              { Icon: Ban, t: "Respect the rules", d: "No illegal goods, fraud, harassment, or attempts to bypass the platform." },
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
            The summary above is for convenience only. The binding agreement is the full text below.
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
                <Link to="/privacy" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <FileText className="h-3.5 w-3.5" /> Privacy Policy
                </Link>
                <a href="mailto:legal@market360.shop" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5" /> legal@market360.shop
                </a>
              </div>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="min-w-0 w-full space-y-16 text-sm leading-7 text-muted-foreground">

            <p className="text-base leading-relaxed">
              Welcome to Market360. These Terms of Service (the <strong className="text-foreground">"Terms"</strong>) constitute a
              legally binding agreement between you and <strong className="text-foreground">Market360 Ltd.</strong> ("<strong className="text-foreground">Market360</strong>",
              "<strong className="text-foreground">we</strong>", "<strong className="text-foreground">us</strong>", or "<strong className="text-foreground">our</strong>"),
              a company incorporated under the laws of Sierra Leone. These Terms govern your access to and use of the Market360 website,
              mobile applications, digital wallet, seller dashboard, and all related features, tools, and services (collectively,
              the <strong className="text-foreground">"Services"</strong>).
            </p>

            <p className="text-base leading-relaxed -mt-8">
              By registering an account, downloading the Market360 application, accessing any part of our platform, or otherwise
              using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.
              If you do not agree to these Terms, you may not access or use the Services.
            </p>

            {/* ── 1. ACCEPTANCE ─────────────────────────────────── */}
            <Section id="acceptance" icon={<CheckCircle2 />} title="1. Acceptance of Terms">
              <p>
                Your access to and use of Market360 is conditioned upon your acceptance of and compliance with these Terms. These
                Terms apply to all visitors, users, buyers, sellers, store operators, and any other persons who access or use the Services.
              </p>
              <p className="mt-4">
                By using the Services, you represent and warrant that you have the full legal authority to enter into these Terms,
                either on your own behalf or on behalf of the organisation you represent. If you are accepting these Terms on behalf
                of a company, business, or other legal entity, you represent that you have the authority to bind that entity to
                these Terms and that "you" in these Terms refers to that entity.
              </p>
              <p className="mt-4">
                Your continued use of the Services following any updates or amendments to these Terms constitutes your acceptance of
                the revised Terms. We will notify you of material changes via email, in-app notification, or a prominent notice on our
                website before the changes take effect.
              </p>
              <p className="mt-4">
                These Terms incorporate by reference Market360's <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>,{" "}
                <Link to="/seller-policy" className="text-primary hover:underline">Seller Policy</Link>,{" "}
                <Link to="/buyer-protection" className="text-primary hover:underline">Buyer Protection Policy</Link>, and any
                additional guidelines, policies, and rules published by Market360 from time to time, all of which form part of
                the agreement between you and Market360.
              </p>
            </Section>

            {/* ── 2. DEFINITIONS ────────────────────────────────── */}
            <Section id="definitions" icon={<FileText />} title="2. Definitions">
              <p>
                The following terms, when capitalised in these Terms, have the meanings set out below:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { t: "\"Account\"", d: "A registered user profile that gives access to the Services, including buyer and seller functionality." },
                  { t: "\"Buyer\"", d: "Any registered user who uses the Services to browse, discover, or purchase Products from Sellers." },
                  { t: "\"Seller\"", d: "Any registered user or entity who uses the Services to list, offer for sale, or sell Products to Buyers." },
                  { t: "\"Store\"", d: "A branded storefront on Market360 operated by a Seller, featuring that Seller's product catalogue, branding, and customer profile." },
                  { t: "\"Product\"", d: "Any physical item, digital good, or service listed for sale on the platform by a Seller." },
                  { t: "\"Order\"", d: "A confirmed transaction in which a Buyer has agreed to purchase a Product from a Seller at a stated price, and payment has been initiated." },
                  { t: "\"Wallet\"", d: "The Market360 digital wallet feature that allows users to hold, receive, send, and withdraw funds in Sierra Leonean Leones (Le)." },
                  { t: "\"Escrow\"", d: "The mechanism by which Market360 holds a Buyer's payment on behalf of both parties until the Order is confirmed as delivered or a dispute is resolved." },
                  { t: "\"Listing\"", d: "A product page created by a Seller on the platform describing a Product available for purchase." },
                  { t: "\"Transaction Fee\"", d: "The percentage-based charge deducted by Market360 from each successful sale, as set out in Section 9." },
                  { t: "\"Content\"", d: "Any text, photographs, images, videos, descriptions, reviews, or other material submitted to the platform by a user." },
                  { t: "\"Prohibited Item\"", d: "Any item or service that is illegal, restricted, or otherwise prohibited under these Terms or applicable law." },
                  { t: "\"Trust & Safety Team\"", d: "The Market360 team responsible for dispute resolution, fraud investigation, content moderation, and enforcement of these Terms." },
                  { t: "\"KYC\"", d: "Know Your Customer — the identity verification process required of all Sellers before they may receive payouts or access full platform features." },
                ].map((def) => (
                  <div key={def.t} className="border-l-2 border-primary/30 pl-4">
                    <p className="font-semibold text-foreground">{def.t}</p>
                    <p className="mt-0.5 text-muted-foreground">{def.d}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── 3. ELIGIBILITY ────────────────────────────────── */}
            <Section id="eligibility" icon={<Users />} title="3. Eligibility">
              <p>
                To use the Services, you must meet all of the following eligibility requirements at the time of registration
                and on a continuing basis throughout your use of the platform:
              </p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  "You must be at least 18 years of age, or the age of legal majority in your jurisdiction if that age is higher than 18.",
                  "You must have the legal capacity to enter into binding contracts under the laws of Sierra Leone or your country of residence.",
                  "You must not have been previously suspended or permanently banned from Market360 for violations of these Terms or any other Market360 policy.",
                  "You must not be located in, incorporated in, or a citizen or resident of any jurisdiction in which use of the Services is prohibited under applicable laws or regulations.",
                  "If registering on behalf of a business, partnership, or other legal entity, that entity must be duly incorporated or otherwise legally established and in good standing.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Market360 reserves the right to request documentation at any time to verify your eligibility. Failure to provide
                satisfactory documentation within a reasonable period may result in suspension or restriction of your Account.
              </p>
              <p className="mt-4">
                Users between the ages of 13 and 17 may access limited portions of the platform in browse-only mode with verifiable
                parental or guardian consent, but may not create an Account, make purchases, or sell on the platform.
              </p>
            </Section>

            {/* ── 4. ACCOUNTS ───────────────────────────────────── */}
            <Section id="accounts" icon={<UserCheck />} title="4. Account Registration & Security">
              <h3 className="text-foreground font-semibold mb-2">4.1 Registration</h3>
              <p>
                To access most features of the Services, you must create an Account. When registering, you agree to provide
                accurate, current, and complete information and to update that information promptly if it changes. You may not
                register using a false identity, impersonate another person or entity, or provide misleading information.
              </p>
              <p className="mt-3">
                Market360 may verify the information you provide at registration and at any subsequent time. We reserve the right
                to refuse registration, suspend, or terminate Accounts that are found to contain false, inaccurate, or misleading
                information.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">4.2 Account Security</h3>
              <p>
                You are solely responsible for maintaining the confidentiality of your Account credentials, including your
                password, PIN, and any two-factor authentication codes. You must not share your login credentials with any
                third party or allow any other person to access or use your Account on your behalf.
              </p>
              <p className="mt-3">
                You agree to notify Market360 immediately at{" "}
                <a href="mailto:security@market360.shop" className="text-primary hover:underline">security@market360.shop</a>{" "}
                if you become aware of any unauthorised access to your Account, any suspected compromise of your credentials,
                or any security incident affecting your use of the Services.
              </p>
              <p className="mt-3">
                Market360 will never ask you for your password by email, SMS, in-app message, or phone call. Any request
                purporting to come from Market360 asking for your password should be treated as fraudulent and reported
                immediately. Market360 is not liable for any loss or damage arising from your failure to protect your Account
                credentials.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">4.3 One Account Per Person</h3>
              <p>
                Each individual or entity may only register and maintain one Account on Market360 unless we have expressly
                permitted otherwise in writing. Operating multiple Accounts, using dummy accounts to circumvent restrictions,
                or creating Accounts after a previous Account has been suspended or banned is a violation of these Terms and
                will result in immediate termination of all associated Accounts.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">4.4 Account Types</h3>
              <p>
                Market360 offers the following Account types, each with its own associated terms and capabilities:
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { type: "Buyer", cap: "Browse, purchase, review, use wallet", kyc: "Basic identity only" },
                  { type: "Seller (Individual)", cap: "All buyer features + list products, manage orders, receive payouts", kyc: "Full KYC" },
                  { type: "Seller (Business)", cap: "All individual features + multi-user access, business branding, bulk tools", kyc: "Business KYC + registration documents" },
                ].map((r) => (
                  <div key={r.type} className="rounded-xl border border-border bg-surface p-4 space-y-2">
                    <p className="font-semibold text-foreground text-sm">{r.type}</p>
                    <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Capabilities:</span> {r.cap}</p>
                    <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">KYC:</span> {r.kyc}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── 5. BUYING ─────────────────────────────────────── */}
            <Section id="buying" icon={<ShoppingBag />} title="5. Buying on Market360">
              <h3 className="text-foreground font-semibold mb-2">5.1 Nature of Transactions</h3>
              <p>
                Market360 operates as a marketplace platform. When you purchase a Product through Market360, you are entering
                into a contract with the individual Seller of that Product — not with Market360. Market360 is not a party to
                any transaction between Buyers and Sellers and does not take title to any Product at any point. Market360's
                role is to facilitate the connection between Buyers and Sellers and to provide the infrastructure for secure
                payment processing.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">5.2 Buyer Obligations</h3>
              <p>As a Buyer, you agree to:</p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  "Read all Listing information carefully, including product descriptions, condition, pricing, delivery timelines, and return policies, before completing a purchase.",
                  "Pay for all Orders you place promptly and in full using a supported payment method. Initiating a payment and then abandoning an Order without cause is a violation of these Terms.",
                  "Provide accurate delivery information, including your correct name, address, and contact number, to ensure timely fulfillment.",
                  "Communicate respectfully and in good faith with Sellers and Market360 support staff at all times.",
                  "Confirm receipt of your Order within the timeframe specified by Market360 after delivery is marked complete. Failure to confirm receipt within 7 calendar days of confirmed delivery will result in automatic release of escrow funds to the Seller.",
                  "Leave honest, factual, and constructive reviews based solely on your genuine experience with the transaction.",
                  "Not make false, misleading, or malicious claims about a Seller or Product, including filing disputes in bad faith.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-foreground font-semibold mt-6 mb-2">5.3 Order Confirmation & Contract Formation</h3>
              <p>
                An Order is considered confirmed and a legally binding contract is formed between Buyer and Seller at the point
                when Market360 sends you an order confirmation notification and payment is successfully processed. You will
                receive a transaction reference number and, where applicable, a payment receipt.
              </p>
              <p className="mt-3">
                Market360 reserves the right to cancel or void an Order at any time before delivery if (a) the Seller is
                unable to fulfil the Order, (b) the transaction is flagged by our fraud detection systems, (c) an error in
                pricing or product information is identified, or (d) we are required to do so by law or court order. In such
                cases, a full refund will be issued to the original payment method.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">5.4 Buyer Protection</h3>
              <p>
                All eligible purchases on Market360 are covered by our Buyer Protection Policy. Under this policy, you may be
                entitled to a full or partial refund if: the Product does not arrive within the confirmed delivery window; the
                Product received materially differs from the Listing description; the Product is significantly damaged or
                defective on arrival; or the Seller fails to respond to a legitimate complaint within 48 hours of it being raised.
              </p>
              <p className="mt-3">
                Buyer Protection claims must be raised through the in-app dispute system within 7 calendar days of the confirmed
                delivery date. Claims raised after this period may not be eligible. Market360's determination on Buyer Protection
                claims is final, subject to any mandatory rights under applicable law.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">5.5 Pricing & Currency</h3>
              <p>
                All prices on Market360 are displayed in Sierra Leonean Leones (Le) unless explicitly stated otherwise.
                Market360 does not offer currency conversion. The price displayed on a Listing at the time of purchase is
                the price you will be charged. Sellers are solely responsible for the accuracy of their pricing.
              </p>
            </Section>

            {/* ── 6. SELLING ────────────────────────────────────── */}
            <Section id="selling" icon={<Store />} title="6. Selling on Market360">
              <h3 className="text-foreground font-semibold mb-2">6.1 Seller Status & Verification</h3>
              <p>
                To sell on Market360, you must complete the Seller registration process and pass our identity verification
                (KYC) procedure. KYC requires submission of a valid government-issued photo ID and, for business accounts,
                proof of business registration. Market360 may request additional documentation at any time. Sellers who have
                not completed KYC verification are restricted to a provisional listing limit and may not receive payouts.
              </p>
              <p className="mt-3">
                Upon successful KYC completion, your Store will display a "Verified Seller" badge. This badge indicates that
                Market360 has verified your identity and is not an endorsement of the quality of your Products or guarantee
                of any specific performance.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">6.2 Listing Requirements</h3>
              <p>All Listings on Market360 must comply with the following requirements:</p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  "Titles must accurately reflect the Product being sold and must not be stuffed with unrelated keywords.",
                  "Descriptions must be truthful, complete, and written in a language accessible to buyers in Sierra Leone (English or Krio are recommended).",
                  "All photographs must be original or lawfully licensed images of the actual Product being sold. Stock photos that misrepresent the item are prohibited.",
                  "Prices must include all mandatory costs. Hidden fees added at checkout are not permitted.",
                  "Condition must be accurately stated — new, like new, good condition, fair condition, or for parts only.",
                  "Delivery timelines stated in the Listing must be realistic and must be honoured.",
                  "You may only list Products that you own or have legal authority to sell, including appropriate licences or permissions where required.",
                  "Listings must comply with all applicable Sierra Leone laws including consumer protection regulations, import/export rules, and intellectual property law.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-foreground font-semibold mt-6 mb-2">6.3 Order Fulfillment Obligations</h3>
              <p>
                When a Buyer places an Order on your Listing, you are entering into a binding obligation to fulfil that Order
                under the terms described in your Listing. You must:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  "Accept or reject each Order within 24 hours of placement. Orders not responded to within this window may be automatically cancelled and refunded.",
                  "Ship or arrange delivery of the Product within the timeframe stated on your Listing.",
                  "Update the Order status in your Seller Dashboard promptly as it progresses — including confirming dispatch and providing any tracking information.",
                  "Package Products securely to prevent damage during transit.",
                  "Communicate proactively with Buyers in the event of any delay, complication, or inability to fulfil.",
                  "Honour any return or refund policy stated on your Listing, consistent with these Terms and Market360's Buyer Protection Policy.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-foreground font-semibold mt-6 mb-2">6.4 Seller Taxes & Legal Compliance</h3>
              <p>
                You are solely responsible for determining and fulfilling any applicable tax obligations arising from your
                sales on Market360, including income tax, goods and services tax, or any other taxes applicable under
                Sierra Leonean law or the laws of any other jurisdiction relevant to your business. Market360 may be required
                by law to collect and report certain information about your sales to relevant tax authorities. By selling on
                Market360, you authorise us to do so where legally required.
              </p>
              <p className="mt-3">
                Market360 does not provide tax advice. We recommend consulting a qualified tax professional regarding your
                obligations as a seller.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">6.5 Seller Performance Standards</h3>
              <p>
                Market360 monitors Seller performance across several key metrics to maintain marketplace quality. Sellers
                are expected to maintain:
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { metric: "Order fulfillment rate", standard: "≥ 95%", action: "Warning, then listing restriction" },
                  { metric: "On-time dispatch rate", standard: "≥ 90%", action: "Warning, then reduced visibility" },
                  { metric: "Dispute rate", standard: "≤ 3%", action: "Account review, then suspension" },
                  { metric: "Average seller rating", standard: "≥ 3.5 / 5.0", action: "Performance improvement plan" },
                  { metric: "Response time to buyers", standard: "< 24 hours", action: "Warning after repeated failures" },
                ].map((r) => (
                  <div key={r.metric} className="rounded-xl border border-border bg-surface p-4">
                    <p className="font-semibold text-foreground text-sm">{r.metric}</p>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Minimum:</span> {r.standard}</p>
                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">If missed:</span> {r.action}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Sellers falling consistently below these standards will receive written notice and a performance improvement
                period before enforcement action is taken. In cases of severe or repeated violations, Market360 may bypass
                the warning process and proceed directly to suspension or termination.
              </p>
            </Section>

            {/* ── 7. STORES ─────────────────────────────────────── */}
            <Section id="stores" icon={<Building2 />} title="7. Stores & Storefronts">
              <h3 className="text-foreground font-semibold mb-2">7.1 Store Creation</h3>
              <p>
                Verified Sellers may create a branded Store on Market360, featuring a custom store name, logo, banner image,
                and description. Your Store name must be original and must not infringe upon the trademarks, trade names, or
                branding of any third party. Market360 reserves the right to require you to change a Store name that is
                misleading, infringing, or otherwise objectionable.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">7.2 Store Content Standards</h3>
              <p>
                All content displayed on your Store, including your store description, banners, profile image, and any
                announcements, must comply with these Terms and must not be misleading, deceptive, sexually explicit,
                violent, hateful, or otherwise in violation of applicable law. Market360 may remove or request modification
                of Store content that does not meet these standards.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">7.3 Store Suspension</h3>
              <p>
                A Store may be suspended separately from the Seller's personal Account in cases where Store-specific policy
                violations are identified. During a Store suspension, all active Listings associated with that Store will be
                temporarily hidden from the marketplace. Active Orders must still be fulfilled during a Store suspension unless
                Market360 instructs otherwise.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">7.4 Multiple Stores</h3>
              <p>
                An individual or business may operate more than one Store on Market360 only with our prior written approval.
                Operating multiple Stores without permission, or operating additional Stores to circumvent performance restrictions
                on an existing Store, is a violation of these Terms.
              </p>
            </Section>

            {/* ── 8. WALLET ─────────────────────────────────────── */}
            <Section id="wallet" icon={<Wallet />} title="8. Market360 Wallet & Payments">
              <h3 className="text-foreground font-semibold mb-2">8.1 Nature of the Wallet</h3>
              <p>
                The Market360 Wallet is an in-platform electronic money facility that allows registered users to hold, receive,
                send, and withdraw funds in Sierra Leonean Leones (Le). The Wallet is not a bank account and Market360 is not
                a bank or licensed deposit-taking institution. Funds held in your Wallet are not protected by the Sierra Leone
                Deposit Protection Fund or any equivalent scheme.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">8.2 Funding the Wallet</h3>
              <p>
                You may add funds to your Wallet using the following supported methods: Orange Money, Africell Money, and
                other mobile money operators as we make available from time to time. All deposits are processed in Sierra
                Leonean Leones. Market360 does not accept or hold foreign currency in Wallet accounts.
              </p>
              <p className="mt-3">
                Deposits are subject to minimum and maximum limits, which are published in the app and may be updated at any
                time. Market360 may decline any deposit transaction if it is flagged by our fraud prevention systems or if it
                would cause a regulatory limit to be exceeded.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">8.3 Payments & Escrow</h3>
              <p>
                When a Buyer initiates a purchase, the transaction amount is deducted from the Buyer's Wallet (or collected
                via the chosen payment method) and held in escrow by Market360. Escrow funds are released to the Seller upon
                the earliest of: (a) the Buyer confirming receipt of the Order; (b) expiry of the 7-day confirmation window
                without a dispute being raised; or (c) resolution of any dispute in the Seller's favour.
              </p>
              <p className="mt-3">
                Market360 does not earn interest on escrow funds. Funds held in escrow are not accessible to Market360 for
                its own use and are held in a segregated account for the benefit of users.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">8.4 Withdrawals</h3>
              <p>
                Sellers may withdraw their Wallet balance to a verified Orange Money or Africell Money account, or to a
                registered Sierra Leonean bank account. Withdrawals are subject to KYC verification, minimum withdrawal
                thresholds, and applicable processing fees as disclosed in the app at the time of withdrawal.
              </p>
              <p className="mt-3">
                Market360 processes withdrawal requests within 1–2 business days under standard conditions. Withdrawals may
                be delayed if additional verification is required, if a dispute affecting the relevant funds is pending, or
                if the withdrawal is flagged by our compliance or anti-money laundering controls.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">8.5 Wallet Security</h3>
              <p>
                You are responsible for the security of your Wallet. Market360 will never ask you to share your Wallet PIN
                or password. Any transaction initiated using your correct Account credentials will be treated as authorised
                by you. If you believe your Wallet has been compromised, contact us immediately at{" "}
                <a href="mailto:security@market360.shop" className="text-primary hover:underline">security@market360.shop</a>.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">8.6 Dormant Wallets</h3>
              <p>
                A Wallet that has not been accessed for a continuous period of 24 months will be classified as dormant.
                Market360 will notify you by email and in-app notification before a Wallet is classified as dormant. Dormant
                Wallets may be subject to a monthly maintenance fee. Funds in dormant Wallets are never forfeited to Market360
                and will be returned to you upon request and successful identity verification.
              </p>
            </Section>

            {/* ── 9. FEES ───────────────────────────────────────── */}
            <Section id="fees" icon={<CreditCard />} title="9. Fees, Charges & Payouts">
              <h3 className="text-foreground font-semibold mb-2">9.1 Listing Fees</h3>
              <p>
                Creating an Account and listing Products on Market360 is free of charge. Market360 does not charge a monthly
                subscription fee to individual Sellers on the standard plan. Business account plans with additional features
                may carry a subscription fee, which will be clearly disclosed at the time of plan selection.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">9.2 Transaction Fees</h3>
              <p>
                Market360 charges a Transaction Fee on each completed sale. The Transaction Fee is calculated as a percentage
                of the total Order value (excluding any separately stated delivery charge) and is deducted automatically from
                the Seller's payout before it is credited to the Wallet.
              </p>
              <p className="mt-3">
                The applicable Transaction Fee for your account will be displayed in your Seller Dashboard before you publish
                a Listing. Market360 reserves the right to modify its fee structure with 30 days' written notice. Changes to
                Transaction Fees will not apply retroactively to Orders placed before the effective date of the change.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { plan: "Starter (default)", fee: "4.9% per transaction", payout: "T+2 business days", limit: "Le 50,000,000 / month" },
                  { plan: "Growth", fee: "3.5% per transaction", payout: "T+1 business day", limit: "Le 250,000,000 / month" },
                  { plan: "Enterprise", fee: "Custom (negotiated)", payout: "Same-day settlement", limit: "Unlimited" },
                ].map((r) => (
                  <div key={r.plan} className="rounded-xl border border-border bg-surface p-4 space-y-2">
                    <p className="font-semibold text-foreground text-sm">{r.plan}</p>
                    <div className="grid grid-cols-1 gap-1">
                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Fee:</span> {r.fee}</p>
                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Payout:</span> {r.payout}</p>
                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Volume limit:</span> {r.limit}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-foreground font-semibold mt-6 mb-2">9.3 Withdrawal Fees</h3>
              <p>
                Internal transfers between Market360 Wallets are free of charge. Withdrawals to external mobile money accounts
                or bank accounts may be subject to a flat processing fee or percentage fee, which is disclosed at the time
                of initiating the withdrawal. Market360 does not charge hidden withdrawal fees.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">9.4 Refunds & Reversal of Fees</h3>
              <p>
                If an Order is fully refunded as a result of a Buyer Protection claim upheld in the Buyer's favour, the
                Transaction Fee charged on that Order will be reversed and credited back to the Seller's Wallet, less any
                applicable administrative charge. If a refund is the result of the Seller's own failure to fulfil the
                Order, the Transaction Fee will not be refunded.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">9.5 Disputed Payouts</h3>
              <p>
                If you believe a Transaction Fee has been incorrectly calculated or a payout has not been correctly credited,
                you must raise the matter with Market360 within 60 days of the transaction date. Claims raised after this
                period may not be honoured. Market360 will investigate and respond to payout disputes within 10 business days.
              </p>
            </Section>

            {/* ── 10. PROHIBITED ────────────────────────────────── */}
            <Section id="prohibited" icon={<Ban />} title="10. Prohibited Conduct">
              <h3 className="text-foreground font-semibold mb-2">10.1 Prohibited Items</h3>
              <p>
                The following categories of Products may not be listed, offered for sale, or sold on Market360 under any
                circumstances. This list is illustrative and not exhaustive. Market360 may remove any Listing and take
                enforcement action against any Seller that offers items it determines to be prohibited, at its sole discretion.
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Illegal drugs, narcotics, or controlled substances of any kind.",
                  "Firearms, ammunition, explosives, or weapons of any description, including replica or deactivated weapons.",
                  "Counterfeit, pirated, or knock-off goods infringing third-party intellectual property rights.",
                  "Stolen goods, goods obtained through fraud, or goods of unknown or suspicious provenance.",
                  "Human organs, body parts, blood, or human remains.",
                  "Wildlife, endangered species, or products derived from protected animals.",
                  "Child sexual abuse material or any content that exploits or endangers minors.",
                  "Prescription-only medications sold without a valid prescription or appropriate medical authorisation.",
                  "Products designed to facilitate harmful, illegal, or discriminatory acts against any person or group.",
                  "Fraudulent financial instruments, counterfeit currency, or identity documents.",
                ].map((line) => (
                  <div key={line} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-foreground font-semibold mt-8 mb-2">10.2 Prohibited Activities</h3>
              <p>
                In addition to prohibited items, the following activities are strictly prohibited on Market360:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  "Manipulating product reviews, ratings, or store rankings through fake reviews, incentivised reviews, or self-review.",
                  "Circumventing Market360's Transaction Fees by conducting transactions off-platform after initial contact was made through Market360.",
                  "Harassing, threatening, or intimidating other users, Market360 staff, or delivery personnel.",
                  "Using hate speech, discriminatory language, or content targeting individuals based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic.",
                  "Operating bots, automated scripts, scrapers, or crawlers on the platform without prior written authorisation.",
                  "Attempting to access the accounts, data, or systems of other users without authorisation.",
                  "Interfering with or disrupting the operation of the Services, including through the use of viruses, malware, or denial-of-service attacks.",
                  "Creating multiple Accounts to circumvent restrictions, bans, or performance limits applied to a previous Account.",
                  "Impersonating Market360, a Market360 employee, or another user.",
                  "Filing false dispute claims, chargebacks, or buyer protection claims in bad faith.",
                  "Engaging in any form of money laundering, fraud, or financial crime through the platform.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ── 11. USER CONTENT ──────────────────────────────── */}
            <Section id="content" icon={<MessageSquare />} title="11. User-Generated Content">
              <h3 className="text-foreground font-semibold mb-2">11.1 Ownership & Licence</h3>
              <p>
                You retain full ownership of all Content you submit, upload, or otherwise make available through the Services,
                including product listings, photographs, descriptions, reviews, and messages. By submitting Content to Market360,
                you grant Market360 a non-exclusive, worldwide, royalty-free, sublicensable licence to host, store, reproduce,
                display, adapt, and distribute that Content solely for the purposes of operating, providing, maintaining, and
                promoting the Services.
              </p>
              <p className="mt-3">
                This licence continues for so long as your Content remains on the platform and terminates when you permanently
                delete the Content from your Account, subject to any residual copies that may exist in our backup systems for a
                limited period.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">11.2 Content Standards</h3>
              <p>You represent and warrant that all Content you submit:</p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  "Is accurate, truthful, and not misleading in any respect.",
                  "Does not infringe any third-party intellectual property right, including copyright, trademark, patent, or trade secret.",
                  "Does not contain any material that is defamatory, obscene, indecent, sexually explicit, violent, or otherwise unlawful.",
                  "Does not contain any personal data of third parties without those individuals' explicit consent.",
                  "Does not include malicious code, links to phishing sites, or any content designed to compromise another user's device or data.",
                  "You have the full right, power, and authority to grant the licence set out above in respect of that Content.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-foreground font-semibold mt-6 mb-2">11.3 Reviews</h3>
              <p>
                Market360 provides a review and rating system to support transparency and informed decision-making. Reviews must
                be based on the reviewer's genuine, first-hand experience of a specific transaction. Reviews must not be
                submitted in exchange for payment, discounts, or any other form of compensation from the Seller. Market360
                investigates reports of review manipulation and will remove fraudulent reviews and take enforcement action
                against accounts involved in manipulating the review system.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">11.4 Content Removal</h3>
              <p>
                Market360 reserves the right, at its sole discretion, to remove or restrict access to any Content that we
                determine violates these Terms, is reported by another user, or that we are required to remove by law or court
                order. We will make reasonable efforts to notify you when Content is removed, except where prohibited from doing
                so by law or where notifying you would defeat the purpose of removal.
              </p>
            </Section>

            {/* ── 12. IP ────────────────────────────────────────── */}
            <Section id="ip" icon={<Shield />} title="12. Intellectual Property">
              <h3 className="text-foreground font-semibold mb-2">12.1 Market360 Intellectual Property</h3>
              <p>
                The Market360 name, logo, brand identity, application design, interface elements, software code, technology
                infrastructure, and all other intellectual property forming part of the Services are owned by or licensed to
                Market360 Ltd. and are protected by applicable intellectual property laws. You may not use, reproduce, distribute,
                or create derivative works from any Market360 intellectual property without our prior written consent.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">12.2 Trademark Policy</h3>
              <p>
                The use of Market360's name, logo, or branding in any manner that implies endorsement, partnership, or official
                association with Market360 — including in product listings, advertising, social media, or press releases — without
                prior written authorisation is strictly prohibited. Any such unauthorised use may result in enforcement action
                including account termination and legal proceedings.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">12.3 Copyright Complaints</h3>
              <p>
                If you believe that Content on Market360 infringes your copyright or other intellectual property rights, you may
                submit a written notice to{" "}
                <a href="mailto:ip@market360.shop" className="text-primary hover:underline">ip@market360.shop</a>{" "}
                containing: your full name and contact information; identification of the copyrighted work you claim has been
                infringed; identification of the allegedly infringing Content; a statement of good faith belief that the use is
                not authorised; and a statement under penalty of perjury that the information provided is accurate.
              </p>
              <p className="mt-3">
                Market360 will investigate notices received in the correct format and will remove or disable access to Content
                that is found to infringe intellectual property rights. Repeat infringers will have their Accounts terminated.
              </p>
            </Section>

            {/* ── 13. PRIVACY ───────────────────────────────────── */}
            <Section id="privacy" icon={<Eye />} title="13. Privacy & Data">
              <p>
                The collection, use, storage, and disclosure of your personal data by Market360 is governed by our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which forms an integral
                part of these Terms and is incorporated by reference. By using the Services, you acknowledge that you have
                read and understood our Privacy Policy.
              </p>
              <p className="mt-4">
                In summary, Market360 collects personal data that you provide when registering and using the Services,
                as well as data generated through your use of the platform (such as transaction records, browsing behaviour,
                and device information). We use this data to operate the Services, process payments, verify identities,
                personalise your experience, ensure platform security, and comply with legal obligations.
              </p>
              <p className="mt-4">
                Market360 does not sell your personal data to third parties. We share data only with service providers,
                payment partners, and regulatory authorities as required by law or as necessary to provide the Services.
              </p>
              <p className="mt-4">
                You have the right to access, correct, and in certain circumstances request deletion of your personal data.
                To exercise these rights, contact{" "}
                <a href="mailto:privacy@market360.shop" className="text-primary hover:underline">privacy@market360.shop</a>.
              </p>
            </Section>

            {/* ── 14. DISPUTES ──────────────────────────────────── */}
            <Section id="disputes" icon={<Scale />} title="14. Disputes, Returns & Refunds">
              <h3 className="text-foreground font-semibold mb-2">14.1 Buyer–Seller Resolution First</h3>
              <p>
                In the event of any disagreement arising from a transaction, we strongly encourage Buyers and Sellers to
                attempt to resolve the matter directly and in good faith through in-app messaging before escalating to
                Market360. Many disputes can be resolved quickly through direct communication. Market360 will not accept
                a formal dispute submission unless the parties have genuinely attempted direct resolution, except in cases
                involving alleged fraud or serious misconduct.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">14.2 Raising a Formal Dispute</h3>
              <p>
                If direct resolution is not achieved within 48 hours of a dispute being raised with the Seller, either party
                may escalate the matter to Market360 through the in-app dispute system. The escalation must be made within
                7 calendar days of the confirmed delivery date or of the event giving rise to the dispute. Disputes submitted
                outside this window may not be eligible for Market360 intervention.
              </p>
              <p className="mt-3">
                When raising a formal dispute, you will be asked to provide: a description of the issue; the Order reference
                number; evidence supporting your position (photographs, screenshots, communications); and the resolution you
                are seeking.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">14.3 Dispute Resolution Process</h3>
              <p>
                Market360's Trust & Safety Team will review all submitted evidence impartially and without bias. The team
                will acknowledge receipt of a dispute within 24 hours and aims to issue a final determination within 7
                business days. Both parties will be given an opportunity to submit evidence and respond to the other party's
                submissions before a decision is made. Market360's determination is final, subject to any mandatory rights
                you may have under applicable consumer protection laws.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">14.4 Refund Processing</h3>
              <p>
                Where a refund is determined to be payable to a Buyer, the refund will be credited to the Buyer's Market360
                Wallet within 3–5 business days of the determination. Refunds are issued in Sierra Leonean Leones (Le).
                Market360 is not responsible for any losses resulting from currency exchange fluctuations between the time
                of purchase and the time of refund.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">14.5 Chargebacks</h3>
              <p>
                If you initiate a chargeback through your mobile money provider or bank rather than using Market360's dispute
                system, your Account may be suspended pending investigation. Unjustified or fraudulent chargebacks are a
                violation of these Terms and may result in permanent Account termination and recovery of any amounts
                wrongfully charged back.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">14.6 Return Policy</h3>
              <p>
                Each Seller is responsible for setting and communicating their own return policy, which must be clearly stated
                in their Listing. Sellers may not enforce return policies that are more restrictive than Market360's minimum
                standards, which provide that Buyers may return a Product if: it does not match the Listing description; it
                arrives damaged or defective; or the wrong item is delivered. Market360's Buyer Protection Policy overrides
                any Seller return policy that is more restrictive than these minimum standards.
              </p>
            </Section>

            {/* ── 15. MODERATION ────────────────────────────────── */}
            <Section id="moderation" icon={<BarChart3 />} title="15. Platform Moderation">
              <h3 className="text-foreground font-semibold mb-2">15.1 Market360's Right to Moderate</h3>
              <p>
                Market360 reserves the right, but is not obligated, to monitor, review, edit, refuse, or remove any Content,
                Listing, or Account at any time and for any reason, including for violations of these Terms or where we
                determine that action is necessary to protect the integrity of the marketplace, the safety of users, or
                compliance with applicable law.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">15.2 Reporting Violations</h3>
              <p>
                All users are encouraged to report suspected violations of these Terms, including prohibited Listings, fraudulent
                behaviour, and abusive conduct, using the in-app reporting tools available on each Listing, Store, and user
                profile page. Market360 investigates all reports in good faith and takes appropriate action where violations
                are confirmed.
              </p>
              <p className="mt-3">
                Reports may also be submitted directly to the Trust & Safety Team at{" "}
                <a href="mailto:trust@market360.shop" className="text-primary hover:underline">trust@market360.shop</a>.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">15.3 Appeals</h3>
              <p>
                If you believe that a moderation decision — including the removal of a Listing, a dispute determination, or
                an Account restriction — has been made incorrectly, you may submit an appeal within 14 calendar days of the
                decision. Appeals must include a clear explanation of why you believe the decision was incorrect, together
                with any additional evidence. Market360 will review appeals and provide a final determination within
                10 business days.
              </p>
            </Section>

            {/* ── 16. TERMINATION ───────────────────────────────── */}
            <Section id="termination" icon={<ShieldOff />} title="16. Suspension & Termination">
              <h3 className="text-foreground font-semibold mb-2">16.1 Termination by You</h3>
              <p>
                You may close your Account at any time by navigating to Account Settings and selecting "Close Account."
                Before your Account is closed, you must: complete or cancel all pending Orders; ensure your Wallet balance
                has been withdrawn in full; and confirm that there are no open disputes associated with your Account.
                Market360 will process your closure request and send a confirmation email within 5 business days.
              </p>
              <p className="mt-3">
                Account closure does not automatically delete your personal data. Please refer to our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for information on data
                retention following account closure and how to request deletion of your data.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">16.2 Suspension & Termination by Market360</h3>
              <p>
                Market360 may suspend or permanently terminate your Account, Store, or access to any part of the Services
                if we determine, at our sole discretion, that: you have materially violated these Terms; you have engaged
                in fraudulent, abusive, or criminal conduct; you have failed to meet Seller performance standards after a
                warning period; your Account poses a risk to other users, the platform, or Market360's legal compliance;
                or we are required to do so by law, court order, or regulatory directive.
              </p>
              <p className="mt-3">
                We will provide you with notice before taking enforcement action wherever reasonably possible. In cases
                involving suspected fraud, criminal activity, or imminent harm to users, we may act immediately without
                prior notice.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">16.3 Effect of Termination</h3>
              <p>
                Upon termination of your Account: all active Listings will be removed from the marketplace; access to your
                Seller Dashboard and Wallet will be suspended; pending Orders must still be fulfilled by Sellers unless
                Market360 instructs otherwise; and any escrowed funds relating to active disputes will be held pending
                resolution.
              </p>
              <p className="mt-3">
                Following termination for cause, Market360 will retain any amounts owed to us arising from fees, chargebacks,
                or damages and will release any remaining Wallet balance to you after all outstanding obligations are settled,
                subject to legal and regulatory requirements.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">16.4 Survival</h3>
              <p>
                The following sections of these Terms will survive termination of your Account and continue to apply in full:
                Section 11 (User-Generated Content — licence), Section 12 (Intellectual Property), Section 17 (Disclaimers),
                Section 18 (Limitation of Liability), Section 19 (Indemnification), and Section 21 (Governing Law).
              </p>
            </Section>

            {/* ── 17. DISCLAIMERS ───────────────────────────────── */}
            <Section id="disclaimer" icon={<AlertTriangle />} title="17. Disclaimers">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED ON AN
                <strong className="text-foreground"> "AS IS"</strong> AND <strong className="text-foreground">"AS AVAILABLE"</strong>{" "}
                BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
              </p>
              <p className="mt-4">
                Market360 expressly disclaims all warranties, including but not limited to: (a) implied warranties of
                merchantability, fitness for a particular purpose, title, and non-infringement; (b) warranties that the Services
                will be uninterrupted, error-free, secure, or free from viruses or other harmful components; (c) warranties
                that any defects in the Services will be corrected; and (d) warranties regarding the quality, accuracy,
                suitability, or completeness of any Products, Listings, or Content provided by Sellers.
              </p>
              <p className="mt-4">
                Market360 does not represent or warrant that: any Product listed on the platform will be available, delivered
                on time, or conform to its description; any review, rating, or seller badge is a guarantee of quality or
                performance; or the platform will be accessible at all times or from all locations.
              </p>
              <p className="mt-4">
                Some jurisdictions do not permit the exclusion of certain implied warranties. To the extent that such exclusions
                are not permitted in your jurisdiction, Market360's liability in respect of such warranties is limited to the
                maximum extent permitted by law.
              </p>
            </Section>

            {/* ── 18. LIABILITY ─────────────────────────────────── */}
            <Section id="liability" icon={<ShieldOff />} title="18. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MARKET360, ITS DIRECTORS, OFFICERS, EMPLOYEES,
                AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, GOODWILL, DATA,
                BUSINESS OPPORTUNITY, OR ANTICIPATED SAVINGS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY
                TO USE THE SERVICES.
              </p>
              <p className="mt-4">
                To the maximum extent permitted by law, Market360's total aggregate liability to you for all claims arising
                out of or relating to these Terms or the Services shall not exceed the greater of: (a) the total Transaction
                Fees paid by you to Market360 in the 12-month period immediately preceding the event giving rise to the
                claim; or (b) Le 500,000 (five hundred thousand Sierra Leonean Leones).
              </p>
              <p className="mt-4">
                The limitations and exclusions in this section apply regardless of the form of action — whether in contract,
                tort (including negligence), strict liability, or any other theory — and regardless of whether Market360
                has been advised of the possibility of such damages.
              </p>
              <p className="mt-4">
                Nothing in these Terms excludes or limits Market360's liability for: death or personal injury caused by our
                negligence; fraud or fraudulent misrepresentation; or any other liability that cannot be excluded or limited
                under applicable law.
              </p>
            </Section>

            {/* ── 19. INDEMNIFICATION ───────────────────────────── */}
            <Section id="indemnification" icon={<Gavel />} title="19. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Market360, its parent company, subsidiaries, affiliates,
                directors, officers, employees, agents, licensors, and service providers from and against any and all claims,
                demands, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of
                or relating to:
              </p>
              <ul className="mt-4 space-y-2 list-none">
                {[
                  "Your use of or access to the Services.",
                  "Your violation of any provision of these Terms or any incorporated policy.",
                  "Your violation of any applicable law, regulation, or third-party right, including intellectual property rights.",
                  "Any Content you submit, upload, or make available through the Services.",
                  "Any transaction you enter into as a Seller or Buyer on the platform.",
                  "Any dispute between you and another user of the Services.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Market360 reserves the right, at your expense, to assume exclusive control and defence of any matter for
                which you are required to indemnify us, and you agree to cooperate fully with our defence of such claims.
                You must not settle any claim that imposes any obligation, restriction, or liability on Market360 without
                our prior written consent.
              </p>
            </Section>

            {/* ── 20. CHANGES ───────────────────────────────────── */}
            <Section id="changes" icon={<RefreshCw />} title="20. Changes to These Terms">
              <p>
                Market360 reserves the right to modify these Terms at any time. We will notify you of material changes
                to these Terms by email, in-app notification, or a prominent notice on our website at least 30 days before
                the changes take effect, unless a shorter notice period is required by law or to address an urgent safety
                or legal compliance issue.
              </p>
              <p className="mt-4">
                For non-material changes — such as corrections of typographical errors, clarifications of existing provisions,
                or changes required by law — we may update these Terms without providing 30 days' advance notice, though
                we will always indicate the date of the most recent update at the top of this page.
              </p>
              <p className="mt-4">
                Your continued use of the Services after the effective date of any revised Terms constitutes your acceptance
                of those revised Terms. If you do not agree to any change, you must stop using the Services before the
                revised Terms take effect and may close your Account in accordance with Section 16.
              </p>
              <p className="mt-4">
                Previous versions of these Terms are archived and available on request by contacting{" "}
                <a href="mailto:legal@market360.shop" className="text-primary hover:underline">legal@market360.shop</a>.
              </p>
            </Section>

            {/* ── 21. GOVERNING LAW ─────────────────────────────── */}
            <Section id="law" icon={<Gavel />} title="21. Governing Law & Jurisdiction">
              <h3 className="text-foreground font-semibold mb-2">21.1 Governing Law</h3>
              <p>
                These Terms and any dispute or claim arising out of or in connection with them, their subject matter,
                or their formation (including non-contractual disputes and claims) shall be governed by and construed in
                accordance with the laws of the Republic of Sierra Leone, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">21.2 Jurisdiction</h3>
              <p>
                You and Market360 agree that the courts of Sierra Leone shall have exclusive jurisdiction to settle any
                dispute or claim arising out of or in connection with these Terms or their subject matter. Each party
                irrevocably submits to the personal jurisdiction of such courts for these purposes.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">21.3 Consumer Rights</h3>
              <p>
                Nothing in these Terms affects any mandatory rights you may have as a consumer under the laws of your
                country of residence, including any right to bring proceedings in the courts of your country of residence
                or to benefit from mandatory consumer protection laws applicable in your jurisdiction. Where applicable law
                prevents any provision of these Terms from being enforced against you, that provision shall not apply to
                you, but all remaining provisions shall continue in full force and effect.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">21.4 Language</h3>
              <p>
                These Terms are drafted in English. In the event of any conflict or inconsistency between the English
                version and any translation, the English version shall prevail.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">21.5 Severability</h3>
              <p>
                If any provision of these Terms is held to be invalid, unlawful, or unenforceable by a court of competent
                jurisdiction, that provision shall be modified to the minimum extent necessary to make it valid and
                enforceable, or severed if modification is not possible, and the remaining provisions of these Terms shall
                continue in full force and effect.
              </p>

              <h3 className="text-foreground font-semibold mt-6 mb-2">21.6 Entire Agreement</h3>
              <p>
                These Terms, together with the Privacy Policy and all other policies and documents incorporated by reference,
                constitute the entire agreement between you and Market360 with respect to the Services and supersede all
                prior agreements, representations, and understandings, whether written or oral, relating to the same
                subject matter.
              </p>
            </Section>

            {/* ── 22. CONTACT ───────────────────────────────────── */}
            <Section id="contact" icon={<Mail />} title="22. Contact & Legal Notices">
              <p>
                If you have any questions, concerns, or requests relating to these Terms, or if you need to send a formal
                legal notice to Market360, please contact us using the details below. We will acknowledge receipt of all
                written communications within 5 business days.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: <Mail className="h-4 w-4" />, t: "Legal enquiries", v: "legal@market360.shop" },
                  { icon: <Shield className="h-4 w-4" />, t: "Trust & safety reports", v: "trust@market360.shop" },
                  { icon: <Lock className="h-4 w-4" />, t: "Security incidents", v: "security@market360.shop" },
                  { icon: <Eye className="h-4 w-4" />, t: "Privacy & data requests", v: "privacy@market360.shop" },
                  { icon: <FileText className="h-4 w-4" />, t: "IP & copyright notices", v: "ip@market360.shop" },
                  { icon: <Building2 className="h-4 w-4" />, t: "Business address", v: "Market360 Ltd., Freetown, Sierra Leone" },
                ].map((c) => (
                  <div key={c.t} className="surface-card p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      {c.icon}
                      <p className="text-xs font-semibold text-foreground">{c.t}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/privacy" className="btn-ghost">
                  <FileText className="h-4 w-4" /> Privacy Policy
                </Link>
                <Link to="/contact" className="btn-primary">
                  <Mail className="h-4 w-4" /> Contact support
                </Link>
              </div>
              <p className="mt-8 text-xs text-muted-foreground border-t border-border pt-6">
                Market360 Ltd. — Terms of Service, Version 3.2 — Last updated June 1, 2026.<br />
                These Terms were last reviewed by our legal team on June 1, 2026 and are effective immediately for new users
                and from June 15, 2026 for existing users who received notice of this update.
              </p>
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
