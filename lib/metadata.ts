import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export function pageMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Forces noindex,nofollow regardless of deployment environment (e.g. thank-you pages). */
  noIndex?: boolean;
}): Metadata {
  const ogImage = image ?? "/images/og-cover.jpg";
  // The root layout's title.template is not applied to a page.tsx at the same
  // route segment as the layout that defines it (verified against the built
  // output), so "/" would render without the brand suffix unless composed here.
  // openGraph/twitter titles never receive the template regardless of route,
  // so they always need the fully composed form too. Composing it once here
  // guarantees the <title> tag, og:title, and twitter:title never diverge and
  // the brand suffix is never duplicated.
  const fullTitle = `${title} | ${SITE.name}`;
  const isRootSegment = path === "/";

  return {
    title: isRootSegment ? fullTitle : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${SITE.url}${path}`,
      title: fullTitle,
      description,
      siteName: SITE.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
