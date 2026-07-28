import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Read the terms of service governing your use of the ${SITE.name} website and clinic services in East Toronto, including bookings and policies.`,
  path: "/terms",
});

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing this website or booking a service with ${SITE.name}, you agree to these Terms of Service and our Privacy Policy.`,
  },
  {
    title: "Appointments & Cancellations",
    body: `We kindly ask that patients provide at least 24 hours' notice to reschedule or cancel an appointment. This allows us to offer the appointment time to other patients who may be waiting. Late cancellations or no-shows may be charged a fee at our discretion.`,
  },
  {
    title: "Treatment Disclaimer",
    body: `All treatments are performed by our registered and qualified practitioners, including Registered Acupuncturists (R.Ac.), a Registered Traditional Chinese Medicine Practitioner (R.TCMP), an Osteopathic Manual Practitioner, and Holistic Wellness Practitioners. Individual results vary, and no specific outcome is guaranteed. A consultation is required before any treatment to assess suitability.`,
  },
  {
    title: "Payment",
    body: `Payment is due at the time of service unless a financing plan has been arranged in advance. Prices listed on this website are starting rates and may be adjusted based on your individualized plan.`,
  },
  {
    title: "Limitation of Liability",
    body: `${SITE.name} is not liable for indirect or consequential damages arising from use of this website, to the fullest extent permitted by law.`,
  },
  {
    title: "Changes to These Terms",
    body: `We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated June 1, 2026." />
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
