import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: `${SITE.name} is committed to providing an accessible website and clinic experience for all patients and visitors at our East Toronto location.`,
  path: "/accessibility-statement",
});

const sections = [
  {
    title: "Our Commitment",
    body: `${SITE.name} is committed to providing an accessible and inclusive experience for all patients and website visitors. We strive to ensure that our website meets recognized accessibility standards and that our clinic environment is welcoming to individuals of all abilities.`,
  },
  {
    title: "Website Accessibility",
    body: `We aim to build our website in line with WCAG 2.1 Level AA guidelines, including descriptive alt text on images, a keyboard-navigable interface, sufficient colour contrast, accessible forms and booking tools, and compatibility with common screen readers.`,
  },
  {
    title: "Clinic Accessibility",
    body: `Our clinic is located at ${SITE.address.line1}, ${SITE.address.line2}, with street parking available nearby and convenient access by TTC public transit. If you have questions about accessibility at our physical location before your visit, please contact us in advance and we will do our best to assist.`,
  },
  {
    title: "Ongoing Improvements",
    body: `Accessibility is an ongoing effort. As our website and services evolve, we continue working to identify and address barriers that may affect patients and visitors.`,
  },
  {
    title: "Feedback & Contact",
    body: `If you experience any accessibility barriers on our website or at our clinic, please let us know. Your feedback helps us improve. Contact us at ${SITE.email} or ${SITE.phone}.`,
  },
];

export default function AccessibilityStatementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Accessibility Statement", path: "/accessibility-statement" },
        ])}
      />
      <PageHero eyebrow="Legal" title="Accessibility Statement" description="Last updated June 1, 2026." />
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
