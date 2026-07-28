import { HeartHandshake, Award, CreditCard, Building2, CalendarCheck, Clock, Leaf, Smartphone, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Personalized Wellness Care",
    description: "Every treatment plan is built around your own goals, history, and circumstances, never one-size-fits-all.",
  },
  {
    icon: Award,
    title: "Experienced Practitioners",
    description: "Our acupuncture and osteopathy practitioners bring years of hands-on clinical experience to every visit.",
  },
  {
    icon: CreditCard,
    title: "Direct Billing Available",
    description: "We bill many insurance providers directly, so you can focus on your care instead of paperwork.",
  },
  {
    icon: Building2,
    title: "Multiple Services, One Roof",
    description: "Acupuncture, Osteopathy, Brazilian Lymphatic Drainage, and Cupping, all available together in a single, convenient location.",
  },
  {
    icon: CalendarCheck,
    title: "Open 7 Days a Week",
    description: "Wellness doesn't keep a 9-to-5 schedule, so neither do we, we're open every day of the week.",
  },
  {
    icon: Clock,
    title: "Same-Day Appointments",
    description: "Same-day appointments are often available when you need care quickly. Availability may vary.",
  },
  {
    icon: Leaf,
    title: "A Relaxing, Professional Environment",
    description: "A calm, welcoming space designed to put you at ease from the moment you walk in.",
  },
  {
    icon: Smartphone,
    title: "Easy Online Booking",
    description: "Book the appointment that fits your schedule in a few taps, no phone calls required.",
  },
  {
    icon: MapPin,
    title: "Proudly Serving East Toronto",
    description: "Serving Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, Little India, Scarborough & Downtown Toronto.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          title="Why East Toronto Chooses Relief Plus Wellness"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <RevealItem key={pillar.title}>
              <div className="group h-full rounded-2xl border border-charcoal/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <pillar.icon className="h-5 w-5 text-wine-dark" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-xl text-charcoal">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{pillar.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}