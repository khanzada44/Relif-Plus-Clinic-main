import type { Metadata } from "next";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "Take a look inside Relief Plus Wellness — our East Toronto clinic, treatment rooms, equipment, and practitioners offering acupuncture and wellness care.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="Inside the clinic"
        description="A glimpse of the spaces, instruments, and people behind every visit."
      />
      <section className="py-20 md:py-28">
        <Container>
          <GalleryGrid images={galleryImages} categories={galleryCategories} />
        </Container>
      </section>
    </>
  );
}
