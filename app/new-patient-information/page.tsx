import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "New Patient Information",
  description: "What to expect, what to bring, and how to prepare for your first appointment at Relief Plus Wellness, our East Toronto acupuncture and wellness clinic.",
  path: "/new-patient-information",
});

const beforeYourAppointment = [
  "Arriving 10–15 minutes early for your first appointment",
  "Completing any required intake forms",
  "Bringing a list of current medications, if applicable",
  "Bringing relevant health information",
  "Bringing your insurance information if you plan to use benefits",
  "Wearing comfortable clothing",
];

const whatToBring = [
  "Insurance information",
  "Policy number",
  "Member ID",
  "Group number",
];

const firstVisitSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Your practitioner reviews your health history, wellness goals, current concerns, and any questions you may have.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "An assessment is completed based on the service you have selected.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description: "Your practitioner discusses treatment options and recommendations based on your individual needs and goals.",
  },
  {
    number: "04",
    title: "Treatment",
    description: "Treatment is provided according to the selected service and your agreed treatment plan.",
  },
];

const faqs = [
  {
    question: "Do I need a referral?",
    answer: "Most services do not require a referral. Insurance requirements may vary depending on your provider and policy.",
  },
  {
    question: "How early should I arrive?",
    answer: "We recommend arriving 10–15 minutes early so there is time to complete any outstanding paperwork before your session begins.",
  },
  {
    question: "Can I complete forms in advance?",
    answer: "Yes. If intake forms are available online, we encourage completing them before your appointment to save time when you arrive.",
  },
  {
    question: "Do you offer direct billing?",
    answer: "Direct billing may be available for eligible services and participating insurance providers. Coverage and eligibility depend on your individual insurance plan and provider.",
  },
  {
    question: "Can I book online?",
    answer: "Yes. Online booking is available, or you're welcome to call our clinic directly to schedule your visit.",
  },
];

export default function NewPatientInformationPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "New Patient Information", path: "/new-patient-information" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="New Patients"
        title="New Patient Information"
        description="We are committed to making your first visit comfortable, professional, and informative. This page will help you prepare for your appointment and answer common questions before you arrive."
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-4 text-stone">
          <p className="leading-relaxed">
            Whether you are visiting for Acupuncture, Wet Cupping (Hijama), Osteopathic Therapy, Traditional Chinese Medicine services, or wellness treatments, our team is here to provide a welcoming and supportive experience.
          </p>
          <p className="leading-relaxed">
            Conveniently located at {SITE.address.line1}, {SITE.address.line2}, we proudly serve Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, and surrounding East Toronto communities.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-16 text-center lg:grid-cols-2">
          <Reveal className="flex flex-col items-center">
            <SectionHeading eyebrow="Before You Arrive" title="Before Your Appointment" align="center" />
            <ul className="mt-6 inline-block space-y-3 text-left">
              {beforeYourAppointment.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-center">
            <SectionHeading eyebrow="Checklist" title="What to Bring" align="center" />
            <ul className="mt-6 inline-block space-y-3 text-left">
              {whatToBring.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="What to Expect" title="Your First Visit" align="center" className="mx-auto" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {firstVisitSteps.map((step) => (
              <RevealItem key={step.number} className="bg-ivory p-8">
                <span className="font-display text-3xl text-wine/50">{step.number}</span>
                <h3 className="mt-4 font-display text-lg text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Good to Know" title="Cancellation Policy" />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-stone">
            <p className="leading-relaxed">
              We kindly ask that patients provide at least 24 hours' notice if they need to cancel or reschedule their appointment. This allows us to offer the appointment time to other patients who may be waiting.
            </p>
            <p className="leading-relaxed">
              To cancel or reschedule, please contact us by phone at {SITE.phone} or email at {SITE.email}. We understand that unexpected situations arise and appreciate your consideration.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
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
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="max-w-2xl text-center">
          <SectionHeading eyebrow="Get Started" title="Book Your First Appointment" align="center" className="mx-auto" />
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
