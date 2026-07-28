
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Eyebrow } from "@/components/shared/eyebrow";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "About the Clinic",
  description:
    "Relief Plus Wellness is a professional wellness clinic in East Toronto, dedicated to personalized, multidisciplinary care in a welcoming, supportive space.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About the Clinic", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About Us"
        title="About Relief Plus Wellness"
        description="Relief Plus Wellness is a professional wellness clinic located in the heart of East Toronto, dedicated to providing personalized care in a welcoming and supportive environment."
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-5 text-stone">
          <p className="leading-relaxed">
            Founded in October 2025, our clinic was created with a simple goal: to make professional wellness services accessible while ensuring every patient feels respected, heard, and cared for.
          </p>
          <p className="leading-relaxed">
            We believe that no two individuals are the same. Every patient has unique goals, experiences, and wellness needs, which is why we take a personalized approach to care. Rather than following a one-size-fits-all model, our practitioners take the time to understand each patient's concerns and develop individualized treatment plans tailored to their needs.
          </p>
          <p className="leading-relaxed">
            Located on Gerrard Street East, Relief Plus Wellness proudly serves patients from Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, Little India, Scarborough, Downtown Toronto, and surrounding communities. We also offer translation support for patients who prefer to communicate in another language.
          </p>
          <p className="leading-relaxed">
            Our clinic brings together experienced practitioners from a variety of disciplines, allowing patients to access multiple wellness services under one roof in a comfortable and professional setting.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80"
                alt="A consultation room at Relief Plus Wellness"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 font-display text-display-md text-charcoal">
              Founded on one simple goal
            </h2>
            <p className="mt-5 leading-relaxed text-stone">
              Relief Plus Wellness was founded in October 2025 with a simple goal: to provide professional, personalized, and accessible wellness services in a welcoming environment where patients feel respected, supported, and heard.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              We believe that healthcare and wellness should never follow a one-size-fits-all approach. Every individual has unique goals, experiences, and needs, which is why we take the time to understand each patient and develop personalized care plans tailored to their circumstances.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Located on Gerrard Street East in the heart of East Toronto, our clinic proudly serves one of Toronto's most diverse and vibrant communities. Since opening in October 2025, Relief Plus Wellness has grown into a multidisciplinary clinic offering a variety of wellness-focused services under one roof.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Today, patients visit Relief Plus Wellness from Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, Little India, Scarborough, Downtown Toronto, and surrounding communities seeking professional care in a welcoming and supportive environment.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
    // src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80"