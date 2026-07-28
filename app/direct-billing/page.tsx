import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { InsuranceLogoStrip } from "@/components/sections/insurance-logo-strip";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Direct Billing",
  description: "Learn about direct billing for eligible acupuncture and osteopathic therapy services with participating insurance providers at Relief Plus Wellness in Toronto.",
  path: "/direct-billing",
});

const steps = [
  {
    number: "01",
    title: "Provide Your Insurance Information",
    description: "Share your insurance details before or during your appointment.",
  },
  {
    number: "02",
    title: "Verification",
    description: "Our team will verify whether direct billing is available for your insurance provider.",
  },
  {
    number: "03",
    title: "Claim Submission",
    description: "Eligible claims may be submitted directly to your insurance company.",
  },
  {
    number: "04",
    title: "Remaining Balance",
    description: "If your plan does not cover the full amount, you may be responsible for any remaining balance.",
  },
];

const eligibleServices = ["Acupuncture", "Traditional Chinese Medicine Services", "Osteopathic Therapy"];

export default function DirectBillingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Direct Billing", path: "/direct-billing" },
        ])}
      />
      <PageHero
        eyebrow="Insurance & Direct Billing"
        title="Direct Billing for Eligible Services"
        description={`At Relief Plus Wellness, we strive to make your healthcare experience as convenient as possible. Direct billing may be available for eligible services and participating insurance providers. Located at ${SITE.address.line1}, ${SITE.address.line2.split(",")[0]}, we proudly serve Leslieville, The Beaches, East York, Riverdale, Danforth, and surrounding communities.`}
        descriptionClassName="text-xl"
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Good to Know" title="What Is Direct Billing?" />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-xl text-stone">
            <p className="leading-relaxed">
              Direct billing is a service that allows participating healthcare providers to submit eligible claims directly to your insurance company on your behalf.
            </p>
            <p className="leading-relaxed">
              Depending on your insurance coverage and plan details, some or all of the treatment cost may be processed through your insurer. Coverage, reimbursement, and eligibility vary by provider and policy.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Direct Billing Process"
            align="center"
            className="mx-auto"
          />

          <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <RevealItem key={step.number} className="bg-ivory p-8">
                <span className="font-display text-3xl text-wine/50">{step.number}</span>
                <h3 className="mt-4 font-display text-lg text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Coverage"
            title="Services That May Be Eligible for Coverage"
            description="Coverage varies by insurer and policy. Please verify your benefits directly with your insurance provider."
          />
          <Reveal delay={0.1} className="mt-8 space-y-3">
            {eligibleServices.map((service) => (
              <div key={service} className="flex items-center gap-3 text-charcoal">
                <Check className="h-4 w-4 shrink-0 text-wine" />
                {service}
              </div>
            ))}
          </Reveal>

          <div className="mt-12">
            <p className="text-center text-eyebrow uppercase tracking-wide text-stone">Some Providers We Work With</p>
            <InsuranceLogoStrip />
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="wine" size="lg">
              <Link href="/insurance-coverage">
                See Insurance Coverage <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}