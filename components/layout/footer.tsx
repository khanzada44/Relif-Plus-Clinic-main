import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/constants/site";
import { services } from "@/data/services";
import { localSeoPages } from "@/data/local-seo";
import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { InstagramIcon, FacebookIcon, TikTokIcon, LinkedInIcon, YoutubeIcon } from "@/components/shared/social-icons";

const AREAS_SERVED = [
  "Leslieville", "The Beaches", "East York", "Riverdale", "Danforth",
  "Greenwood-Coxwell", "Upper Beaches", "Little India", "Scarborough", "Downtown Toronto",
];

// Each entry only renders if its URL is configured (see .env.example) — no
// platform is ever linked with a placeholder or guessed profile URL.
const SOCIAL_PLATFORMS = [
  { key: "instagram", label: "Instagram", url: 'https://www.instagram.com/relief.plus.wellness/?hl=en', Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", url: 'https://www.facebook.com/p/Relief-Plus-Wellness-61577874874222/', Icon: FacebookIcon },
  { key: "tiktok", label: "TikTok", url: 'https://www.tiktok.com/@relief.plus.wellness', Icon: TikTokIcon },
  // { key: "linkedin", label: "LinkedIn", url: SITE.social.linkedin, Icon: LinkedInIcon },
  // { key: "youtube", label: "YouTube", url: SITE.social.youtube, Icon: YoutubeIcon },
] as const;

// Previously omitted FOOTER_LINKS.services entirely, which meant /offers and
// /before-after had zero inbound internal links anywhere on the site.
const quickLinks = [...FOOTER_LINKS.clinic, ...FOOTER_LINKS.services, ...FOOTER_LINKS.support];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/90">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl text-ivory">
              {SITE.shortName}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">{SITE.description}</p>
            <div className="mt-6 flex gap-6">
              {SOCIAL_PLATFORMS.map(({ key, label, url, Icon }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="-m-2 p-2 text-ivory transition-colors hover:text-wine-light"
                >
                  <Icon className="h-9 w-9" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="eyebrow text-wine-light">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    prefetch={false}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-wine-light">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-wine-light">Areas We Serve</h2>
            <ul className="mt-5 space-y-3">
              {AREAS_SERVED.map((area) => (
                <li key={area} className="text-sm text-ivory/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-wine-light">Clinic Information</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-wine" />
                <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-wine" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-wine" />
                <span>
                  {SITE.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-ivory/10" />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-ivory/60">
          <span className="font-medium text-ivory/50">Local Service Areas:</span>
          {localSeoPages.map((page) => (
            <span key={page.slug}>
              <Link href={`/${page.slug}`} prefetch={false} className="hover:text-ivory">
                {page.h1}
              </Link>
              <span className="ml-2 text-ivory/20" aria-hidden="true">·</span>
            </span>
          ))}
          {/* No dedicated page exists for these two combos yet — plain text, not a link. */}
          {/* <span>Brazilian Lymphatic Drainage Near East York - Tuina Massage & Gua Sha in Toronto</span> */}
        </div>

        <Separator className="my-6 bg-ivory/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} prefetch={false} className="hover:text-ivory">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}