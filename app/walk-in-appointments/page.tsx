import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Walk-In Appointments",
  description: "Walk-in appointments may be available for acupuncture, Hijama, osteopathic therapy, and wellness services at Relief Plus Wellness, our East Toronto clinic.",
  path: "/walk-in-appointments",
});

const whyChoose = [
  "Walk-in availability*",
  "Same-day appointments*",
  "Online booking available",
  "Open 7 days a week",
  "East Toronto location",
  "Direct billing available for eligible services",
];

const faqs = [
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, depending on practitioner availability. We recommend calling ahead whenever possible to check current wait times.",
  },
  {
    question: "Can I call ahead instead of walking in?",
    answer: "Yes, calling ahead is recommended so we can let you know which practitioners are available and roughly how long the wait might be.",
  },
  {
    question: "Is online booking available if I'd rather reserve a time?",
    answer: "Yes. Online booking is available if you would prefer to schedule your visit in advance rather than walking in.",
  },
];

export default function WalkInAppointmentsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Walk-In Appointments", path: "/walk-in-appointments" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Flexible Appointments"
        title="Walk-In Appointments Welcome"
        description="Relief Plus Wellness welcomes walk-in patients when practitioner availability permits. For the best experience, we recommend booking online or calling ahead, but walk-in appointments may be accommodated based on availability."
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl text-stone">
          <p className="leading-relaxed">
            Conveniently located at {SITE.address.line1}, {SITE.address.line2}, we proudly serve Leslieville, The Beaches, East York, Riverdale, Danforth, and surrounding East Toronto communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={`tel:${SITE.phone}`}>Call Before You Visit</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Online Instead <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Availability"
            title="Services Available for Walk-Ins"
            description="Availability varies by practitioner and schedule."
            align="center"
            className="mx-auto"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.slug} className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-ivory px-5 py-4 text-charcoal">
                <Check className="h-4 w-4 shrink-0 text-wine" />
                <span>{s.title}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Why Choose Us" title="Why Choose Relief Plus Wellness" />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-stone">*Subject to availability.</p>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-sm text-stone">
              Want to guarantee a time?{" "}
              <Link href="/same-day-appointments" className="text-wine underline-offset-4 hover:underline">
                See our same-day appointment options
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
