import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/data/doctors";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description: "Meet the registered practitioners at Relief Plus Wellness — acupuncture, TCM, osteopathy, and holistic wellness specialists serving East Toronto patients.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Team", path: "/doctors" },
        ])}
      />
      <PageHero
        eyebrow="Our Team"
        title="Meet our practitioners"
        description="Every practitioner at Relief Plus Wellness is registered and trained in their discipline, bringing years of hands-on clinical experience to your care."
      />
      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
            {doctors.map((doctor) => (

              <RevealItem key={doctor.slug} className="flex flex-col text-center">
                <Link href={`/doctors/${doctor.slug}`} className="group block hover-lift">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-champagne/30">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <h2 className="mt-5 font-display text-lg text-charcoal">{doctor.name}</h2>
                  {/* <p className="mt-1 text-xs uppercase tracking-wide text-wine-dark">{doctor.specialty}</p> */}
                  <p className="mt-1 text-xs uppercase tracking-wide text-wine-dark">{doctor.credential}</p>
                </Link>

                {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {doctor.services.map((service) => (
                    <Badge key={service} variant="outline" className="font-normal normal-case tracking-normal text-stone">
                      {service}
                    </Badge>
                  ))}
                </div> */}

                <div className="mt-5 flex-1" />

                <Button asChild variant="outline" size="sm" className="self-center">
                  <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Book Appointment</a>
                </Button>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}