import type { Metadata } from "next";
import { preload } from "react-dom";
import { Hero } from "@/components/sections/hero";
import { HERO_POSTER_IMAGE } from "@/lib/hero-media";
import { WelcomeIntro } from "@/components/sections/welcome-intro";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TrustBar } from "@/components/sections/trust-bar";
import { FeaturedDoctors } from "@/components/sections/featured-doctors";
import { ServicesOverview } from "@/components/sections/services-overview";
import { AreasWeServe } from "@/components/sections/areas-we-serve";
import { BeforeAfterPreview } from "@/components/sections/before-after-preview";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { PatientJourney } from "@/components/sections/patient-journey";
import { Technology } from "@/components/sections/technology";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InstagramGallery } from "@/components/sections/instagram-gallery";
import { InsuranceCta } from "@/components/sections/insurance-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleMap } from "@/components/sections/google-map";
import { homeFaqs } from "@/data/faq";
import { FindUs } from "@/components/sections/find-us";
import { JsonLd } from "@/components/shared/json-ld";
import { medicalClinicSchema } from "@/lib/schema";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
// Deferred: ReviewPopup renders nothing for its first 4s (see its own
// internal timer) and isn't needed for initial paint or SEO content, so its
// JS is split into its own chunk and fetched after hydration instead of
// shipping in the homepage's initial bundle.
import { ReviewPopupLazy as ReviewPopup } from "@/components/shared/review-popup-lazy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Acupuncture & Wellness Clinic in East Toronto",
  description:
    "Relief Plus Wellness offers acupuncture, Hijama, osteopathic therapy & wellness services in East Toronto, serving Leslieville, East York & The Beaches.",
  path: "/",
});

export default function HomePage() {
  preload(HERO_POSTER_IMAGE, { as: "image", fetchPriority: "high" });

  return (
    <>
      {/* FAQPage schema lives on /faq only — the canonical FAQ hub — to avoid
          duplicate FAQPage structured data competing across two indexed pages. */}
      <JsonLd data={medicalClinicSchema()} />
      <WhatsAppButton />
      <ReviewPopup />
      <Hero />
      <WelcomeIntro />
      <WhyChooseUs />
      <TrustBar />
      <FeaturedDoctors />
      <ServicesOverview />
      <AreasWeServe />
      <GalleryPreview />
      <PatientJourney />
      <FindUs />
      <TestimonialsSection />
      <InsuranceCta />
      <FaqSection items={homeFaqs} />
      <GoogleMap />
    </>
  );
}