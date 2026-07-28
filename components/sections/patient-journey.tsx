import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";

const highlights = [
  {
    number: "01",
    title: "A Clinic Built With Purpose",
    description:
      "Founded in October 2025, Relief Plus Wellness was created with a simple goal: to make professional wellness services accessible while ensuring every patient feels respected, heard, and cared for.",
  },
  {
    number: "02",
    title: "Personalized, Not One-Size-Fits-All",
    description:
      "No two individuals are the same. Rather than following a one-size-fits-all model, our practitioners take the time to understand each patient's concerns and develop individualized treatment plans tailored to their needs.",
  },
  {
    number: "03",
    title: "Rooted in East Toronto",
    description:
      "Located on Gerrard Street East, we proudly serve patients from Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, Little India, Scarborough, Downtown Toronto, and surrounding communities.",
  },
  {
    number: "04",
    title: "Care Without Language Barriers",
    description:
      "We also offer translation support for patients who prefer to communicate in another language, so every patient can be fully understood.",
  },
  {
    number: "05",
    title: "Multiple Disciplines, One Roof",
    description:
      "Our clinic brings together experienced practitioners from a variety of disciplines, allowing patients to access multiple wellness services under one roof in a comfortable, professional setting.",
  },
];

export function PatientJourney() {
  return (
    <section id="patient-journey" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Us"
          title="About Relief Plus Wellness"
          description="Relief Plus Wellness is a professional wellness clinic located in the heart of East Toronto, dedicated to providing personalized care in a welcoming and supportive environment."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-charcoal/10 md:grid-cols-5">
          {highlights.map((item) => (
            <RevealItem key={item.number} className="bg-ivory p-8">
              <span className="font-display text-3xl text-wine/50">{item.number}</span>
              <h3 className="mt-4 font-display text-lg text-charcoal">{item.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-stone">{item.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}