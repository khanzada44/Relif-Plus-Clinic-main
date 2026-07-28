import type { Metadata } from "next";
import { beforeAfterItems, procedureFilters } from "@/data/before-after";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { BeforeAfterFilter } from "@/components/sections/before-after-filter";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Before & After",
  description: "See real patient results at Relief Plus Wellness, our East Toronto wellness clinic — shown honestly, treatment by treatment, with no exaggerated claims.",
  path: "/before-after",
});

export default function BeforeAfterPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Before & After", path: "/before-after" },
        ])}
      />
      <PageHero
        eyebrow="Before & After"
        title="Real results, shown honestly"
        description="Drag each slider to compare. Every case shown here reflects our standard protocol — no filters, no dramatic lighting changes."
      />
      <section className="py-20 md:py-28">
        <Container>
          <BeforeAfterFilter items={beforeAfterItems} procedures={[...procedureFilters]} />
        </Container>
      </section>
    </>
  );
}
