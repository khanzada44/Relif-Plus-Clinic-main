import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/constants/site";

// href links to this neighbourhood's dedicated location page where one exists,
// so this section also serves as an internal-linking entry point into pages
// that otherwise have no inbound links from elsewhere on the site.
const servingAreas: { name: string; href?: string }[] = [
  { name: "Leslieville", href: "/acupuncture-leslieville" },
  { name: "The Beaches", href: "/acupuncture-the-beaches" },
  { name: "East York", href: "/acupuncture-east-york" },
  { name: "Riverdale", href: "/acupuncture-riverdale" },
  { name: "Danforth" },
  { name: "Greenwood-Coxwell" },
  { name: "Upper Beaches" },
  { name: "East End Toronto" },
];

export function AreasWeServe() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl text-center">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Serving East Toronto"
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1} className="mt-6 space-y-4 text-stone">
          <p className="leading-relaxed">
            {SITE.name} proudly serves patients throughout East Toronto. Conveniently located on Gerrard Street
            East, our clinic welcomes patients from Leslieville, The Beaches, East York, Riverdale, Danforth,
            Greenwood-Coxwell, Upper Beaches, and surrounding communities.
          </p>
          <p className="leading-relaxed">
            Patients choose {SITE.name} for Acupuncture, osteopathic therapy, Wet Cupping (Hijama),
            Cupping Therapy, Brazilian Lymphatic Drainage, Thai Oil Massage, Tuina Massage, Gua Sha, and
            personalized wellness care. We are proud to serve individuals and families from across the Greater
            Toronto Area (GTA).
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {servingAreas.map((area) =>
            area.href ? (
              <Link
                key={area.name}
                href={area.href}
                className="rounded-full border border-charcoal/10 bg-white px-5 py-2 text-sm text-charcoal/80 transition-colors hover:border-wine/40 hover:text-wine-dark"
              >
                {area.name}
              </Link>
            ) : (
              <span
                key={area.name}
                className="rounded-full border border-charcoal/10 bg-white px-5 py-2 text-sm text-charcoal/80"
              >
                {area.name}
              </span>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
