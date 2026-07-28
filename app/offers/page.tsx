import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offers } from "@/data/offers";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Current Offers",
  description: "Explore seasonal packages and standing offers available at Relief Plus Wellness, our East Toronto wellness clinic offering acupuncture and osteopathic therapy.",
  path: "/offers",
});

export default function OffersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Current Offers", path: "/offers" },
        ])}
      />
      <PageHero eyebrow="Offers" title="Current packages" description="A short list, by design — we'd rather offer fewer promotions and mean each one." />
      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {offers.map((offer) => (
              <RevealItem key={offer.id}>
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={offer.image} alt={offer.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <Badge variant="wine" className="absolute left-4 top-4 bg-ivory/90">{offer.discount}</Badge>
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl text-charcoal">{offer.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-stone">{offer.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-wide text-stone">Valid: {offer.validUntil}</p>
                    <Button asChild variant="wine" size="sm" className="mt-5">
                      <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                        Claim Offer <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
