import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Market360" },
      { name: "description", content: "The terms governing your use of the Market360 marketplace platform." },
      { property: "og:title", content: "Market360 Terms of Service" },
      { property: "og:description", content: "Rules of the road for Market360." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  { t: "Acceptance of terms", b: "By accessing or using Market360, you agree to be bound by these terms." },
  { t: "Account", b: "You are responsible for safeguarding your account credentials and for all activity under your account." },
  { t: "Buying & selling", b: "Buyers and sellers agree to comply with our marketplace rules, including listing accuracy, lawful goods, and fair conduct." },
  { t: "Fees", b: "Sellers pay a per-transaction fee disclosed at the time of sale. Currency conversions and withdrawals may incur additional fees." },
  { t: "Prohibited conduct", b: "You may not use Market360 to engage in fraud, harassment, illegal activity, or any activity that violates these terms." },
  { t: "Termination", b: "We may suspend or terminate accounts that violate our policies. You can close your account at any time." },
  { t: "Disclaimer", b: "Market360 is provided 'as is' without warranties of any kind. Our liability is limited to the maximum extent permitted by law." },
  { t: "Governing law", b: "These terms are governed by the laws applicable in your jurisdiction." },
];

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated June 1, 2026"
      />
      <section className="section-pad">
        <div className="container-pro max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to Market360. These Terms of Service ("Terms") govern your access to and use of the Market360 marketplace, mobile app, and related services.
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((s, i) => (
              <div key={s.t}>
                <h2 className="text-xl font-bold">{i + 1}. {s.t}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
