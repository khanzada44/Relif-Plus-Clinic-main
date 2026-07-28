import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/constants/site";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { GoogleMap } from "@/components/sections/google-map";
import { BookingForm } from "@/components/sections/booking-form";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Relief Plus Wellness in East Toronto. Visit our clinic, call our team, send a message, or book your acupuncture or wellness appointment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero eyebrow="Contact" title="We're here to help" description="Reach our team directly, or send a message below." />
      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Details</h2>
            <ul className="mt-6 space-y-5 text-sm text-stone">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <span>{SITE.address.line1}<br />{SITE.address.line2}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <a href={`tel:${SITE.phone}`} className="hover:text-charcoal">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <a href={`mailto:${SITE.email}`} className="hover:text-charcoal">{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <div>
                  {SITE.hours.map((h) => (
                    <p key={h.days}>{h.days}: {h.time}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal">Send a message</h2>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </Container>
      </section>
      <GoogleMap />
    </>
  );
}
