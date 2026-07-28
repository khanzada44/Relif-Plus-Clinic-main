import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Sparkles, Languages, ArrowRight } from "lucide-react";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { JsonLd } from "@/components/shared/json-ld";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return pageMetadata({
    title: doctor.name,
    description: doctor.bio[0] ?? doctor.name,
    path: `/doctors/${doctor.slug}`,
    image: doctor.image,
  });
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return (
    <article className="py-16 md:py-24">
      <JsonLd
        data={[
          personSchema(doctor),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Practitioners", path: "/doctors" },
            { name: doctor.name, path: `/doctors/${doctor.slug}` },
          ]),
        ]}
      />
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src={doctor.image} alt={doctor.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 380px" />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h1 className="font-display text-display-md text-charcoal">{doctor.name}</h1>
            {doctor.pronouns && <span className="text-sm text-stone">({doctor.pronouns})</span>}
          </div>
          <p className="mt-2 text-lg text-wine-dark">{doctor.credential}</p>
          <p className="mt-1 text-sm text-stone">{doctor.languages.join(" · ")}</p>

          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-stone">
            {doctor.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 font-display text-lg text-charcoal">
                <Sparkles className="h-4 w-4 text-wine" /> Services
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-stone">
                {doctor.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              {doctor.note && <p className="mt-4 text-xs italic text-stone">{doctor.note}</p>}
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display text-lg text-charcoal">
                <Languages className="h-4 w-4 text-wine" /> Languages
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-stone">
                {doctor.languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>

          <Button asChild variant="wine" size="lg" className="mt-10">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book with {doctor.name.split(" ")[0]} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </Container>
    </article>
  );
}