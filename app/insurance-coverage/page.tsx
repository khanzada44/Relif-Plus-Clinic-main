import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { InsuranceLogos } from "@/components/sections/insurance-logos";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Insurance Coverage",
  description: "Learn how extended health insurance may cover acupuncture, Traditional Chinese Medicine, and osteopathic therapy at Relief Plus Wellness in East Toronto.",
  path: "/insurance-coverage",
});

export default function InsuranceCoveragePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insurance Coverage", path: "/insurance-coverage" },
        ])}
      />
      <PageHero
        eyebrow="Insurance"
        title="Insurance Coverage for Wellness Services"
        description="Many extended health insurance plans provide coverage for acupuncture, Traditional Chinese Medicine, and osteopathic therapy services. At Relief Plus Wellness, we offer direct billing for eligible services and participating insurance providers whenever available."
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Good to Know" title="Does Insurance Cover Wellness Services?" />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-stone">
            <p className="leading-relaxed">
              Many extended health insurance plans in Ontario include coverage for acupuncture (performed by a Registered Acupuncturist), Traditional Chinese Medicine services, and osteopathic therapy (performed by a qualified Osteopathic Manual Practitioner).
            </p>
            <p className="leading-relaxed">
              Coverage varies significantly by provider, policy, and plan. Patients are encouraged to contact their insurance provider directly to verify their individual benefits before booking.
            </p>
          </Reveal>

          <div className="mt-10">
            <Button asChild variant="wine" size="lg">
              <Link href="/direct-billing">
                Learn About Direct Billing <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <InsuranceLogos />
    </>
  );
}