import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { faqs } from "@/data/faq";
import { localSeoPages } from "@/data/local-seo";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { JsonLd } from "@/components/shared/json-ld";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";

const SERVICE_FAQ_CATEGORY: Record<string, string> = {
  acupuncture: "Acupuncture", //cosmetic-acupuncture
  "cosmetic-acupuncture": "Cosmetic Acupuncture",
  "wet-cupping-hijama": "Hijama (Wet Cupping)",
  "facial-cupping": "Hijama (Wet Cupping)",
  "osteopathic-therapy": "Osteopathic Therapy",
   "aromatherapy-massage": "Aromatherapy Massage",
   "shiatsu-massage": "Shiatsu massage ( Japanese Acupressure )",
   "tuina-massage-gua-sha": "Tuina Massage & Gua Sha",
   "cupping-therapy": "Cupping Therapy",
};

// Maps a service to the local-SEO location pages that cover the same
// treatment, so this page can link into that otherwise-orphaned cluster.
const SERVICE_TO_LOCAL_SEO_LABEL: Record<string, string> = {
  acupuncture: "Acupuncture",
  "wet-cupping-hijama": "Hijama (Wet Cupping)",
  "osteopathic-therapy": "Osteopathic Therapy",
};

function getServiceFaqs(slug: string) {
  const category = SERVICE_FAQ_CATEGORY[slug] ?? "General";
  return faqs.filter((item) => item.category === category);
}

function getLocationPagesForService(slug: string) {
  const label = SERVICE_TO_LOCAL_SEO_LABEL[slug];
  if (!label) return [];
  return localSeoPages.filter((p) => p.serviceLabel === label);
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const serviceFaqs = getServiceFaqs(service.slug);
  const locationPages = getLocationPagesForService(service.slug);

  return (
    <article className="py-16 md:py-24">
      {/* No FAQPage schema here: serviceFaqs is a subset of the same
          data/faq.ts questions already canonically marked up as FAQPage
          on /faq. Duplicating that structured data on every service page
          would compete for the same FAQ rich-result slot. The accordion
          below stays for on-page UX; it's just not schema'd twice. */}
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-28">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>

        <div>
          <Badge variant="wine">{service.category}</Badge>
          <h1 className="mt-5 font-display text-display-md text-charcoal">{service.title}</h1>
          <p className="mt-5 leading-relaxed text-stone">{service.description}</p>

          {service.priceTiers ? (
            <div className="mt-8 space-y-3 border-y border-charcoal/10 py-6">
              {service.priceTiers.map((tier) => (
                <div key={tier.label} className="flex items-center justify-between">
                  <p className="text-charcoal">{tier.label}</p>
                  <p className="font-display text-lg text-wine-dark">{formatPrice(tier.price)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 flex flex-wrap gap-8 border-y border-charcoal/10 py-6">
              <div>
                <p className="text-eyebrow uppercase tracking-wide text-stone">Duration</p>
                <p className="mt-1 font-display text-lg text-charcoal">{service.duration}</p>
              </div>
              <div>
                <p className="text-eyebrow uppercase tracking-wide text-stone">Starting At</p>
                <p className="mt-1 font-display text-lg text-charcoal">{formatPrice(service.priceFrom)}</p>
              </div>
            </div>
          )}

          <ul className="mt-8 space-y-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm text-charcoal">
                <Check className="h-4 w-4 shrink-0 text-wine" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book This Treatment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Back to Services</Link>
            </Button>
          </div>
        </div>
      </Container>

      {serviceFaqs.length > 0 && (
        <Container className="mt-16 max-w-3xl md:mt-24">
          <SectionHeading eyebrow="FAQ" title={`${service.title} Questions`} />
          <Accordion type="single" collapsible className="mt-10 w-full">
            {serviceFaqs.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
                <AccordionContent>
                  {item.bulletPoints && (
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      {item.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      )}

      {locationPages.length > 0 && (
        <Container className="mt-16 max-w-3xl md:mt-24">
          <SectionHeading eyebrow="Service Areas" title={`${service.title} Near You`} />
          <div className="mt-6 flex flex-wrap gap-3">
            {locationPages.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="rounded-full border border-charcoal/10 px-4 py-1.5 text-sm text-wine-dark underline-offset-4 hover:underline"
              >
                {p.area}
              </Link>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}