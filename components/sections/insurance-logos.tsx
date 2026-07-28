import Image from "next/image";
import { insuranceProviders } from "@/data/insurance-providers";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { SITE } from "@/constants/site";

export function InsuranceLogos() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Participating Providers"
          title="Insurance Providers We Work With"
          description="Coverage varies by insurer and policy. Please verify your benefits directly with your insurance provider."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {insuranceProviders.map((provider) => (
            <RevealItem key={provider.name}>
              <div
                className={`flex h-24 items-center justify-center rounded-xl border border-charcoal/10 p-4 ${
                  provider.name === "UV Insurance" ? "bg-charcoal" : "bg-ivory"
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 33vw, 15vw"
                  />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-stone">
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
      </Container>
    </section>
  );
}