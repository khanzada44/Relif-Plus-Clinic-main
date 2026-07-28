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
  title: "Same-Day Appointments",
  description: "Same-day acupuncture, Hijama, and osteopathic therapy appointments in East Toronto at Relief Plus Wellness, subject to practitioner availability. Book now.",
  path: "/same-day-appointments",
});

const whyChoose = [
  "Quick access to care",
  "Online booking available",
  "Walk-ins welcome*",
  "Open 7 days a week",
  "Convenient East Toronto location",
  "Experienced practitioners",
];

const faqs = [
  {
    question: "Can I book an appointment today?",
    answer: "Same-day appointments may be available depending on practitioner schedules. We recommend calling ahead to confirm availability before visiting.",
  },
  {
    question: "Should I call before coming in?",
    answer: "We recommend calling ahead whenever possible so we can confirm a practitioner is available for your preferred service.",
  },
  {
    question: "Can I book online instead?",
    answer: "Yes. Online booking is available if you'd rather reserve your same-day slot in advance.",
  },
];

export default function SameDayAppointmentsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Same-Day Appointments", path: "/same-day-appointments" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Same-Day Care"
        title="Same-Day Appointments Available in East Toronto"
        description="We understand that sometimes you need care sooner rather than later. Depending on practitioner availability, same-day appointments may be available for Acupuncture, Hijama, Osteopathic Therapy, and selected wellness services."
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl text-stone">
          <p className="leading-relaxed">
            Conveniently located at {SITE.address.line1}, {SITE.address.line2}, we proudly serve Leslieville, The Beaches, East York, Riverdale, Danforth, and surrounding East Toronto communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Now <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE.phone}`}>Call {SITE.phone}</a>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Availability"
            title="Services Available for Same-Day Appointments"
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
          <SectionHeading eyebrow="Why Patients Choose Us" title="Why Same-Day Appointments" />
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
              Prefer to walk in without an appointment?{" "}
              <Link href="/walk-in-appointments" className="text-wine underline-offset-4 hover:underline">
                See our walk-in policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
