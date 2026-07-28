import type { Metadata } from "next";
import { fontDisplay, fontBody } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/shared/motion-provider";
import { SITE } from "@/constants/site";
import { isProductionDeployment } from "@/lib/env";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: ["acupuncture East Toronto", "wellness clinic Toronto", "osteopathic therapy Toronto", "cupping therapy", "Hijama Toronto", "Traditional Chinese Medicine", "Tuina massage", "registered acupuncturist Toronto"],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.name,
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/images/og-cover.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: isProductionDeployment,
    follow: isProductionDeployment,
    googleBot: { index: isProductionDeployment, follow: isProductionDeployment },
  },
  // Set GOOGLE_SITE_VERIFICATION (and equivalents) in .env.local once you have
  // a real verification code from Search Console / Bing Webmaster Tools —
  // omitted here rather than left blank-but-hardcoded.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      ...(process.env.BING_SITE_VERIFICATION && { "msvalidate.01": [process.env.BING_SITE_VERIFICATION] }),
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
