import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Market360" },
      { name: "description", content: "Read how Market360 collects, uses, and protects your personal data." },
      { property: "og:title", content: "Market360 Privacy Policy" },
      { property: "og:description", content: "How we handle your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { t: "Information we collect", b: "We collect information you provide directly, such as account details, store information, transactions, and messages, as well as information generated automatically when you use Market360 like device data and usage analytics." },
  { t: "How we use information", b: "We use your information to operate the marketplace, process transactions, prevent fraud, personalize experiences, and improve our services." },
  { t: "Sharing information", b: "We share information only with service providers necessary to operate Market360, with other users as part of a transaction, or when required by law." },
  { t: "Data retention", b: "We retain personal data only as long as needed to fulfill the purposes outlined in this policy or as required by law." },
  { t: "Your rights", b: "You can access, correct, export, or delete your personal data at any time from your account settings or by contacting our team." },
  { t: "Security", b: "We use industry-standard encryption, monitoring, and access controls to protect your data." },
  { t: "Contact us", b: "Questions about this policy? Email privacy@market360.shop." },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated June 1, 2026"
      />
      <section className="section-pad">
        <div className="container-pro max-w-3xl prose prose-sm">
          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy explains how Market360 ("we", "our") collects, uses, and protects information about you when you use our platform.
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
