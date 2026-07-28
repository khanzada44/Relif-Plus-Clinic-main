import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import type { LocalSeoPage } from "@/data/local-seo";
import { localSeoPages } from "@/data/local-seo";
import { getDoctorBySlug } from "@/data/doctors";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/constants/site";

export function LocalSeoPageContent({ data }: { data: LocalSeoPage }) {
  const practitioners = data.practitionerSlugs.map((slug) => getDoctorBySlug(slug)).filter(Boolean);
  // Cross-links this page to its sibling location pages for the same service
  // (e.g. the 5 Acupuncture location pages), so each otherwise-orphaned page
  // receives internal links instead of being reachable only via the sitemap.
  const siblingLocations = localSeoPages.filter(
    (p) => p.serviceLabel === data.serviceLabel && p.slug !== data.slug
  );

  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: data.h1, path: `/${data.slug}` },
          ]),
        ]}
      />

      <PageHero eyebrow={data.serviceLabel} title={data.h1} description={data.subheading} />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE.phone}`}>Call {SITE.phone}</a>
            </Button>
          </div>
        </Container>
      </section>

      {data.whatIs && (
        <section className="bg-white py-16 md:py-20">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Overview" title={data.whatIs.title} />
            <p className="mt-6 leading-relaxed text-stone">{data.whatIs.body}</p>
          </Container>
        </section>
      )}

      <section className={data.whatIs ? "py-16 md:py-20" : "bg-white py-16 md:py-20"}>
        <Container>
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title={`Why ${data.area} Residents Choose Relief Plus Wellness`}
            align="center"
            className="mx-auto"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {data.whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {data.whyChoose.some((i) => i.includes("*")) && (
            <p className="mx-auto mt-4 max-w-3xl text-xs text-stone">*Subject to availability.</p>
          )}
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Services" title={`${data.serviceLabel} Services Available`} align="center" className="mx-auto" />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.servicesAvailable.map((s) => (
              <RevealItem key={s.title} className="rounded-xl border border-charcoal/10 bg-ivory px-5 py-4">
                <p className="font-display text-charcoal">{s.title}</p>
                {s.description && <p className="mt-1 text-sm text-stone">{s.description}</p>}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {practitioners.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <SectionHeading eyebrow="Our Team" title={`Meet Your ${data.serviceLabel} Practitioner${practitioners.length > 1 ? "s" : ""}`} align="center" className="mx-auto" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {practitioners.map((doctor) => (
                <Link
                  key={doctor!.slug}
                  href={`/doctors/${doctor!.slug}`}
                  className="rounded-xl border border-charcoal/10 bg-white px-6 py-6 transition-colors hover:border-wine/40"
                >
                  <p className="font-display text-lg text-charcoal">{doctor!.name}</p>
                  <p className="mt-1 text-sm text-wine-dark">{doctor!.credential}</p>
                  <p className="mt-1 text-xs text-stone">{doctor!.languages.join(" · ")}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.commonReasons && (
        <section className="bg-white py-16 md:py-20">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Wellness Goals" title="Common Reasons People Seek This Care" />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.commonReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-stone">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-stone">Individual experiences and outcomes vary.</p>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="mt-10 w-full">
            {data.faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Areas We Serve" title={`Serving ${data.area} & Surrounding Communities`} />
          <div className="mt-6 flex flex-wrap gap-2">
            {data.serving.map((area) => (
              <span key={area} className="rounded-full border border-charcoal/10 bg-ivory px-4 py-1.5 text-sm text-stone">
                {area}
              </span>
            ))}
          </div>

          {data.relatedServices.length > 0 && (
            <>
              <p className="mt-10 font-display text-lg text-charcoal">Related Services</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {data.relatedServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-full border border-charcoal/10 px-4 py-1.5 text-sm text-wine-dark underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </>
          )}

          {siblingLocations.length > 0 && (
            <>
              <p className="mt-10 font-display text-lg text-charcoal">
                {data.serviceLabel} in Other East Toronto Neighbourhoods
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siblingLocations.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="rounded-full border border-charcoal/10 px-4 py-1.5 text-sm text-wine-dark underline-offset-4 hover:underline"
                  >
                    {p.area}
                  </Link>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-2xl text-center">
          <SectionHeading eyebrow="Book Now" title={data.bookingHeading} align="center" className="mx-auto" />
          <p className="mx-auto mt-4 max-w-md text-stone">
            {SITE.address.line1}, {SITE.address.line2} · {SITE.hours[0].time}, {SITE.hours[0].days}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE.phone}`}>Call {SITE.phone}</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
