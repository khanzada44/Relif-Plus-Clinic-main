import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { faqs, faqCategories } from "@/data/faq";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Find answers to common questions about our services, appointments, direct billing, insurance coverage, and clinic policies at Relief Plus Wellness in Toronto.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        description="Here you'll find answers to common questions about our services, appointments, direct billing, insurance coverage, and clinic policies. If you have additional questions, please contact our clinic directly."
      />

      {faqCategories.map((category, i) => {
        const items = faqs.filter((item) => item.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className={i % 2 === 1 ? "bg-white py-20 md:py-28" : "py-20 md:py-28"}>
            <Container className="max-w-3xl">
              <SectionHeading eyebrow="FAQ" title={`${category} Questions`} />
              <Accordion type="single" collapsible className="mt-10 w-full">
                {items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </section>
        );
      })}

      <section className="bg-white py-20 md:py-28">
        <Container className="max-w-2xl text-center">
          <SectionHeading eyebrow="Get Started" title="Book Your Appointment" align="center" className="mx-auto" />
          <p className="mx-auto mt-4 max-w-md text-stone">
            {SITE.name} · {SITE.address.line1}, {SITE.address.line2}
            <br />
            {SITE.hours[0].days}, {SITE.hours[0].time}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}>Call {SITE.phone}</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
