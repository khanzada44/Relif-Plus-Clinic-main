import { SITE } from "@/constants/site";

/** Renders as: <script type="application/ld+json">...</script> via the <JsonLd /> component. */
export type JsonLdObject = Record<string, unknown>;

export function faqPageSchema(faqs: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function personSchema(doctor: { name: string; credential: string; image: string; slug: string }): JsonLdObject {
  return {
    "@context": "https://schema.org",
    // Multi-typed rather than a separate script: this individual practitioner
    // is both a Person and a Physician (schema.org's Physician type describes
    // an individual medical practitioner's profile), not two competing entities.
    "@type": ["Person", "Physician"],
    name: doctor.name,
    jobTitle: doctor.credential,
    image: `${SITE.url}${doctor.image}`,
    url: `${SITE.url}/doctors/${doctor.slug}`,
    worksFor: {
      "@type": "MedicalBusiness",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function serviceSchema(service: { title: string; description: string; slug: string; image: string }): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE.url}/services/${service.slug}`,
    image: `${SITE.url}${service.image}`,
    areaServed: "East Toronto",
    provider: {
      "@type": "MedicalBusiness",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.line1,
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
  };
}

/**
 * The single canonical representation of the business, rendered once on the
 * homepage only. Multi-typed as MedicalClinic + LocalBusiness (MedicalClinic
 * is itself a subtype of LocalBusiness in schema.org's hierarchy) so both
 * requirements are satisfied by one entity instead of two competing scripts.
 */
export function medicalClinicSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/images/og-cover.jpg`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M4L 1Z5",
      addressCountry: "CA",
    },
    areaServed: [
      "Leslieville", "The Beaches", "East York", "Riverdale", "Danforth",
      "Greenwood-Coxwell", "Upper Beaches", "Little India", "Scarborough", "Downtown Toronto",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.tiktok],
  };
}
