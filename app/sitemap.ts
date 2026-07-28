import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { blogPosts } from "@/data/blog";
import { localSeoPages } from "@/data/local-seo";

const staticRoutes = [
  "", "about", "doctors", "services", "before-after", "gallery",
  "testimonials", "pricing", "offers", "blog", "faq", "contact", "book-appointment",
  "privacy-policy", "terms", "direct-billing", "insurance-coverage",
  "new-patient-information", "same-day-appointments", "walk-in-appointments", "accessibility-statement",
  "why-choose-us", "sitemap",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = staticRoutes.map((route) => ({
    url: `${SITE.url}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${SITE.url}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const localSeoRoutes = localSeoPages.map((p) => ({
    url: `${SITE.url}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...base, ...serviceRoutes, ...doctorRoutes, ...blogRoutes, ...localSeoRoutes];
}
