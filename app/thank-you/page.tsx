import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Thank You",
  description: "Your appointment request at Relief Plus Wellness has been received. Our East Toronto clinic team will confirm your booking shortly.",
  path: "/thank-you",
  noIndex: true,
});

const whatHappensNext = [
  "You will receive a confirmation by email or through our booking system",
  "Please arrive a few minutes before your scheduled appointment",
  "Bring any relevant health information or insurance details",
  "Wear comfortable clothing to your appointment",
];

export default function ThankYouPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ])}
      />
      <PageHero
        eyebrow="Appointment Requested"
        title="Thank You — Your Appointment Request Has Been Received"
        description="Thank you for booking with Relief Plus Wellness. We look forward to seeing you."
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-wine" />

          <div className="mt-10 text-left">
            <SectionHeading eyebrow="What Happens Next" title="Before Your Visit" />
            <ul className="mt-6 space-y-3 text-stone">
              {whatHappensNext.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-6 text-left">
            <p className="font-display text-lg text-charcoal">Questions?</p>
            <p className="mt-2 text-sm text-stone">
              {SITE.name}
              <br />
              {SITE.address.line1}, {SITE.address.line2}
              <br />
              Phone: <a href={`tel:${SITE.phone}`} className="text-wine-dark underline-offset-4 hover:underline">{SITE.phone}</a>
              <br />
              Email: <a href={`mailto:${SITE.email}`} className="text-wine-dark underline-offset-4 hover:underline">{SITE.email}</a>
              <br />
              Hours: {SITE.hours[0].time}, {SITE.hours[0].days}
            </p>
          </div>

          <div className="mt-10">
            <p className="font-display text-lg text-charcoal">Share Your Experience</p>
            <p className="mt-2 text-sm text-stone">
              We hope your visit is excellent. If you have a moment, an honest Google review makes a big difference for our small East Toronto clinic.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-5">
              {/* TODO: replace with the clinic's real Google Business review link once available */}
              <a href={`https://www.google.com/search?q=${encodeURIComponent(SITE.name + " " + SITE.address.line2)}`} target="_blank" rel="noopener noreferrer">
                Leave Us a Google Review
              </a>
            </Button>
          </div>

          <div className="mt-12">
            <Button asChild variant="wine" size="lg">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
