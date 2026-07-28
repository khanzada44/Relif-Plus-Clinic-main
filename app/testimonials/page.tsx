import type { Metadata } from "next";
import { testimonials } from "@/data/reviews";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Testimonials",
  description: "Read what patients say about their experience at Relief Plus Wellness, our East Toronto wellness clinic offering acupuncture, Hijama, and osteopathic therapy.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <PageHero
        eyebrow="Testimonials"
        title="In our patients' own words"
        description="We ask every patient for honest feedback, published here unedited."
      />
      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
