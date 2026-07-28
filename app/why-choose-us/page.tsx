import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Why Choose Relief Plus Wellness",
  description:
    "Discover why patients choose Relief Plus Wellness for acupuncture, Hijama, and osteopathic therapy in East Toronto — experienced practitioners, direct billing.",
  path: "/why-choose-us",
});

const whatSetsUsApart = [
  {
    title: "Personalized Treatment Plans",
    body: "Every patient receives an individualized approach. We take the time to understand your concerns, goals, and wellness needs before recommending or beginning any treatment.",
  },
  {
    title: "Experienced Practitioners",
    body: "Our team includes Registered Acupuncturists (R.Ac.), a Registered Traditional Chinese Medicine Practitioner (R.TCMP), an Osteopathic Manual Practitioner, and Holistic Wellness Practitioners — each dedicated to patient-centred care.",
  },
  {
    title: "One of East Toronto's Few Integrated Wellness Clinics",
    body: "Relief Plus Wellness is one of East Toronto's few clinics offering Acupuncture, Wet Cupping (Hijama), Osteopathic Therapy, Traditional Chinese Medicine services, and wellness treatments under one roof.",
  },
  {
    title: "Professional Clinical Environment",
    body: "Our clinic is designed to provide a clean, comfortable, and welcoming experience from the moment you arrive.",
  },
  {
    title: "Direct Billing Available",
    body: "Direct billing may be available for eligible services and participating insurance providers, making care more convenient for patients with extended health coverage.",
  },
  {
    title: "Open 7 Days a Week",
    body: "We are open Monday through Sunday, 10:00 AM to 7:00 PM, making it easy to find an appointment time that works for your schedule.",
  },
  {
    title: "Online Booking Available",
    body: "Book your appointment quickly and conveniently online at any time.",
  },
  {
    title: "Multilingual Team",
    body: "Services are available in English, Arabic, and Chinese. Translation assistance may be available for Russian, Ukrainian, and Spanish.",
  },
  {
    title: "Convenient East Toronto Location",
    body: `Located at ${SITE.address.line1}, easily accessible from Leslieville, The Beaches, East York, Riverdale, Danforth, and surrounding neighbourhoods. Street parking is available nearby and the clinic is conveniently accessible by TTC.`,
  },
];

const servingAreas = [
  "Leslieville", "The Beaches", "East York", "Riverdale", "Danforth",
  "Greenwood-Coxwell", "Upper Beaches", "East End Toronto",
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why Choose Relief Plus Wellness", path: "/why-choose-us" },
        ])}
      />

      <PageHero
        eyebrow="Why Choose Us"
        title="Why Choose Relief Plus Wellness"
        description="At Relief Plus Wellness, we are committed to providing professional, personalized, and patient-centred wellness care in a welcoming East Toronto environment."
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="What Sets Us Apart" title="A Clinic Built Around Your Wellness Goals" align="center" className="mx-auto" />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whatSetsUsApart.map((item) => (
              <RevealItem key={item.title} className="rounded-2xl border border-charcoal/10 bg-white p-6">
                <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our Team" title="Our Practitioners" align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                className="rounded-xl border border-charcoal/10 bg-ivory px-6 py-6 transition-colors hover:border-wine/40"
              >
                <p className="font-display text-lg text-charcoal">{doctor.name}</p>
                <p className="mt-1 text-sm text-wine-dark">{doctor.credential}</p>
                <p className="mt-1 text-xs text-stone">{doctor.languages.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Areas We Serve" title="Serving East Toronto" />
          <div className="mt-6 flex flex-wrap gap-2">
            {servingAreas.map((area) => (
              <span key={area} className="rounded-full border border-charcoal/10 bg-white px-4 py-1.5 text-sm text-stone">
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="max-w-2xl text-center">
          <SectionHeading eyebrow="Book Now" title="Book Your Appointment" align="center" className="mx-auto" />
          <p className="mx-auto mt-4 max-w-md text-stone">
            {SITE.address.line1}, {SITE.address.line2} · {SITE.hours[0].time}, {SITE.hours[0].days}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE.phone}`}>Call {SITE.phone}</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
