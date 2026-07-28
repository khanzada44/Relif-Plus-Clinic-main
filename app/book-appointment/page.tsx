import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { BookingForm } from "@/components/sections/booking-form";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Book Appointment",
  description: `Request an appointment at ${SITE.name}, our East Toronto clinic offering acupuncture, Hijama, and osteopathic therapy. We confirm every booking.`,
  path: "/book-appointment",
});

export default function BookAppointmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book Appointment", path: "/book-appointment" },
        ])}
      />
      <PageHero
        eyebrow="Book Appointment"
        title="Request your consultation"
        description={`Complete the form below and our team will confirm your appointment within one business day, or call us directly at ${SITE.phone}.`}
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <BookingForm />
        </Container>
      </section>
    </>
  );
}
