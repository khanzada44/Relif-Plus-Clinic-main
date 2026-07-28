import { testimonials } from "@/data/reviews";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/shared/social-icons";
import { SITE } from "@/constants/site";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <a
        href={SITE.googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-charcoal py-3 text-sm font-bold uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-charcoal-soft"
      >
        <span className="tracking-normal text-gold-dark" aria-hidden="true">★★★★★</span>
        Read Our Reviews
      </a>
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="Reviews"
          title="Reviews From Our Patients"
          description="We're grateful to the patients who share their experiences. Read our reviews on Google, or leave one after your visit."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <RevealItem key={t.id}>
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Button asChild variant="wine" size="lg">
            <a href={SITE.googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <GoogleIcon className="h-4 w-4" />
              Read Reviews on Google
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={SITE.googleReviewUrl} target="_blank" rel="noopener noreferrer">
              Leave a Review
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
