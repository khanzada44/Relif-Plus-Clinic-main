import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Learn how ${SITE.name} collects, uses, and protects your personal and health information when you visit our website or East Toronto clinic today.`,
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly, such as your name, contact details, and appointment preferences, as well as health information you share during consultations, in accordance with applicable medical privacy regulations.`,
  },
  {
    title: "How We Use Your Information",
    body: `Your information is used to schedule and deliver treatments, communicate appointment details, and — with your consent — share relevant offers. We do not sell personal information to third parties.`,
  },
  {
    title: "Health Information",
    body: `Health records generated during your care are stored securely and treated as confidential, accessible only to your treating practitioner and authorized clinical staff.`,
  },
  {
    title: "Cookies & Analytics",
    body: `Our website uses cookies to understand aggregate usage patterns and improve the browsing experience. You can disable cookies in your browser settings at any time.`,
  },
  {
    title: "Your Rights",
    body: `You may request access to, correction of, or deletion of your personal information by contacting us at the details below, subject to applicable record-retention requirements for medical practices.`,
  },
  {
    title: "Contact",
    body: `Questions about this policy can be directed to ${SITE.email} or ${SITE.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated June 1, 2026." />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl text-charcoal">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-stone">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
