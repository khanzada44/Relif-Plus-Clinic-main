import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/constants/site";

const details = [
  {
    label: "Address",
    value: `${SITE.address.line1}\n${SITE.address.line2}`,
  },
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    label: "Hours",
    value: `${SITE.hours[0].days}\n${SITE.hours[0].time}`,
  },
  {
    label: "Parking & Transit",
    value:
      "Easily accessible by TTC — the Gerrard streetcar (506) stops directly outside our clinic.\nPaid parking is available in the area.",
  },
  {
    label: "Serving East Toronto",
    value: `${SITE.name} proudly serves Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, Little India, Scarborough, Downtown Toronto, and surrounding East Toronto communities.`,
  },
];

export function FindUs() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-2xl lg:sticky lg:top-28">
            <iframe
              src={SITE.mapEmbedSrc}
              title={`${SITE.name} location map`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>Find Us</Eyebrow>
          <h2 className="mt-5 font-display text-display-md text-charcoal">Contact &amp; Location</h2>

          <dl className="mt-10 space-y-6">
            {details.map((item) => (
              <div key={item.label} className="border-l-2 border-wine/40 pl-5">
                <dt className="font-display text-lg text-wine-dark">{item.label}</dt>
                <dd className="mt-1 whitespace-pre-line text-sm leading-relaxed text-stone">
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-wine">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}