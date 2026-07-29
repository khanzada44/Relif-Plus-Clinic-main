import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  const shots = galleryImages.slice(0, 6);

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="Take a look inside the clinic"
          />
          <Button asChild variant="outline">
            <Link href="/gallery">
              View Full Gallery{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {shots.map((shot, index) => (
            <RevealItem key={shot.id}>
              <Link
                href="/gallery"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={shot.image}
                  alt={shot.caption}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
