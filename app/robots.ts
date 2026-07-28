import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { isProductionDeployment } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProductionDeployment
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
