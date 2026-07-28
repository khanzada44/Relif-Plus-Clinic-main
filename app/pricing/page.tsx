import type { Metadata } from "next";
import { pricingTiers } from "@/data/pricing";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description: "View starting prices for acupuncture, Hijama, osteopathic therapy, and wellness treatments at Relief Plus Wellness, our East Toronto clinic. Book online.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow="Pricing"
        title="Transparent, starting prices"
        description="Every quote is confirmed by your practitioner during a complimentary consultation, based on your specific plan."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-14">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.category} delay={i * 0.08}>
                <h2 className="font-display text-2xl text-charcoal">{tier.category}</h2>
                <div className="mt-5 divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10">
                  {tier.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between px-6 py-4">
                      <span className="text-charcoal">{item.name}</span>
                      <span className="font-display text-lg text-wine-dark">
                        {formatPrice(item.price)}
                        {item.unit && <span className="ml-1 text-xs text-stone">/ {item.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Book a Complimentary Consultation</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
