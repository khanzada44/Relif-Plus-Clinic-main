import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/service-card";

export function FeaturedServices() {
  const featured = services.filter((s) => s.featured).slice(0, 3);

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Signature Treatments" title="Curated for visible, believable results" />
          <Button asChild variant="outline">
            <Link href="/services">
              View All Services <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
