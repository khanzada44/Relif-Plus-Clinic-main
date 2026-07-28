import type { Metadata } from "next";
import { services, serviceCategories } from "@/data/services";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesFilter } from "@/components/sections/services-filter";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "Explore acupuncture, Traditional Chinese Medicine, Osteopathic Therapy, and wellness treatments at Relief Plus Wellness, our East Toronto clinic. Book online today.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="A range of traditional and modern wellness services"
        description="Every treatment is delivered by a registered practitioner, tailored to support your well-being, mobility, recovery, relaxation, and balance."
      />
      <section className="py-20 md:py-28">
        <Container>
          <ServicesFilter services={services} categories={serviceCategories} />
        </Container>
      </section>
    </>
  );
}