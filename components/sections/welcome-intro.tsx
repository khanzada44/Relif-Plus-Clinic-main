import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function WelcomeIntro() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Welcome"
          title="Welcome to Relief Plus Wellness"
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.15} className="mt-8 space-y-5 text-center">
          <p className="text-lg leading-relaxed text-stone md:text-xl">
            At Relief Plus Wellness, we believe wellness care should be personalized, professional, and focused on each individual&apos;s unique needs.
          </p>
          <p className="text-lg leading-relaxed text-stone md:text-xl">
            Our clinic offers a variety of wellness services, including Acupuncture, Osteopathic Therapy, Cupping Therapy, Tuina Massage &amp; Gua Sha, Brazilian Lymphatic Drainage, and other wellness treatments designed to support overall well-being, mobility, recovery, relaxation, and balance.
          </p>
          <p className="text-lg leading-relaxed text-stone md:text-xl">
            Located in East Toronto, we provide care in a welcoming and professional environment where patients feel respected, supported, and heard. Our team takes the time to understand your concerns and wellness goals while providing individualized care tailored to your needs.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}