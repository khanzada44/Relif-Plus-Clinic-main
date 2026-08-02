import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { services, serviceCategories } from "@/data/services";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GROUP_META: Record<string, { image: string; description: string }> = {
  "Traditional Chinese Medicine": {
    image: "/images/gallary/image6.jpg",
    description: "Traditional therapies rooted in Chinese medicine, Acupuncture, cupping, and bodywork.",
  },
  "Osteopathic Therapy": {
    image: "/images/gallary/Osteopathic-Therapy.jpg",
    description: "Hands-on osteopathic care focused on movement, mobility, and posture.",
  },
  "Wellness & Body Care": {
    image: "/images/gallary/WellnessBodyCare.jpg",
    description: "Relaxation and wellness-focused treatments for the body and mind.",
  },
};

export function ServicesOverview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Acupuncture, Traditional Chinese Medicine & Wellness Services"
          description="A range of traditional and modern wellness services designed to support overall well-being, mobility, recovery, relaxation, and balance."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const meta = GROUP_META[category];
            const items = services.filter((s) => s.category === category);
            if (!meta) return null;

            return (
              <RevealItem key={category}>
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={meta.image}
                      alt={`${category} services`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-xl text-wine-dark">{category}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{meta.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="group flex items-center gap-1.5 text-sm text-charcoal transition-colors hover:text-wine"
                          >
                            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-wine transition-transform duration-300 group-hover:translate-x-0.5" />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-12 text-center">
          <Button asChild variant="wine" size="lg">
            <Link href="/services">See All Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}