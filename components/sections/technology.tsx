import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const equipment = [
  { name: "Fractional CO2 Laser", detail: "Precision collagen remodeling with adjustable depth control." },
  { name: "3D Skin Imaging", detail: "Sub-surface diagnostic mapping for hydration and pigmentation." },
  { name: "Cryolipolysis System", detail: "FDA-cleared controlled cooling for non-invasive contouring." },
  { name: "RF Microneedling", detail: "Combined radiofrequency and needling for firmness and texture." },
];

export function Technology() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1516549655669-df64a4ed08c3?auto=format&fit=crop&w=1200&q=80"
              alt="Diagnostic and laser equipment inside our clinic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Technology"
            title="Clinical-grade instruments, used with restraint"
            description="We invest in diagnostic and treatment technology used at leading academic dermatology centers — then apply it with a deliberately conservative hand."
          />
          <dl className="mt-10 space-y-6">
            {equipment.map((item) => (
              <div key={item.name} className="border-l-2 border-wine/40 pl-5">
                <dt className="font-display text-lg text-charcoal">{item.name}</dt>
                <dd className="mt-1 text-sm text-stone">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
