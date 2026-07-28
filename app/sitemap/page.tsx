import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { localSeoPages } from "@/data/local-seo";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description: "Browse the complete sitemap for Relief Plus Wellness in East Toronto, including our services, practitioners, blog articles, and patient resource pages.",
  path: "/sitemap",
});

const corePages = [
  { label: "Homepage", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Direct Billing", href: "/direct-billing" },
  { label: "Insurance Coverage", href: "/insurance-coverage" },
  { label: "New Patient Information", href: "/new-patient-information" },
  { label: "Our Practitioners", href: "/doctors" },
  { label: "Why Choose Relief Plus Wellness", href: "/why-choose-us" },
  { label: "Same-Day Appointments", href: "/same-day-appointments" },
  { label: "Walk-In Appointments", href: "/walk-in-appointments" },
  { label: "Pricing", href: "/pricing" },
];

const legalPages = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
];

function SitemapColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-lg text-charcoal">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-stone underline-offset-4 hover:text-wine-dark hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap" },
        ])}
      />
      <PageHero eyebrow="Sitemap" title="Sitemap" description="Browse every page on the Relief Plus Wellness website." />
      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <SitemapColumn title="Core Pages" links={corePages} />
          <SitemapColumn title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
          <SitemapColumn title="Practitioners" links={doctors.map((d) => ({ label: d.name, href: `/doctors/${d.slug}` }))} />
          <SitemapColumn
            title="Local SEO Pages"
            links={localSeoPages.map((p) => ({ label: p.h1, href: `/${p.slug}` }))}
          />
          <SitemapColumn title="Legal" links={legalPages} />
          <SitemapColumn title="Blog" links={[{ label: "Health & Wellness Blog", href: "/blog" }]} />
        </Container>
      </section>
    </>
  );
}
