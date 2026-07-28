import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { InsuranceLogoStrip } from "@/components/sections/insurance-logo-strip";
import { SITE } from "@/constants/site";

export function InsuranceCta() {
  return (
    <section className="bg-champagne/30 py-24 md:py-32">
      <Container className="max-w-2xl text-center">
        <SectionHeading
          eyebrow="Insurance & Direct Billing"
          title="Direct Billing for Eligible Services"
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.15} className="mt-6">
          <p className="leading-relaxed text-stone">
            Relief Plus Wellness offers direct billing for eligible services and participating insurance providers whenever available. Coverage, eligibility, and reimbursement depend on your individual insurance policy and provider.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="wine" size="lg">
              <Link href="/direct-billing">
                Direct Billing <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/insurance-coverage">Insurance Coverage</Link>
            </Button>
          </div>
          <InsuranceLogoStrip />

          <p className="mx-auto mt-10 max-w-2xl text-lg text-stone">
            Don&apos;t see your insurance provider listed? Give us a call at:{" "}
            <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="whitespace-nowrap font-medium text-wine hover:underline">
              {SITE.phone}
            </a>{" "}
            or send us an email at{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-wine hover:underline">
              {SITE.email}
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}