import type { Metadata } from "next";
import { getLocalSeoPageBySlug } from "@/data/local-seo";
import { LocalSeoPageContent } from "@/components/sections/local-seo-page";
import { pageMetadata } from "@/lib/metadata";

const data = getLocalSeoPageBySlug("acupuncture-east-york")!;

export const metadata: Metadata = pageMetadata({
  title: `${data.serviceLabel} ${data.area}`,
  description: data.metaDescription,
  path: `/${data.slug}`,
});

export default function AcupunctureEastYorkPage() {
  return <LocalSeoPageContent data={data} />;
}
