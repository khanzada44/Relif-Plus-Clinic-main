import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedDoctors() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our Team" title="Meet our practitioners" />
          <Button asChild variant="outline">
            <Link href="/doctors">
              Meet the Team <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {doctors.map((doctor) => (
            <RevealItem key={doctor.slug} className="text-center">
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
                <h3 className="mt-5 font-display text-lg text-charcoal">{doctor.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-wine-dark">{doctor.credential}</p>
              </Link>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {doctor.services.map((service) => (
                    <Badge key={service} variant="outline" className="font-normal normal-case tracking-normal text-stone">
                      {service}
                    </Badge>
                  ))}
                </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}