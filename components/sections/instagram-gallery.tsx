import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { InstagramIcon } from "@/components/shared/social-icons";
import { SITE } from "@/constants/site";

export function InstagramGallery() {
  const shots = galleryImages.slice(0, 6);
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow align="center">@reliefpluswellness</Eyebrow>
          <h2 className="mt-5 font-display text-display-md text-charcoal">Follow the everyday of the clinic</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {shots.map((shot) => (
            <a
              key={shot.id}
              href={SITE.social.instagram}
              className="group relative aspect-square overflow-hidden"
              aria-label={`View ${shot.caption} on Instagram`}
            >
              <Image
                src={shot.image}
                alt={shot.caption}
                fill
                className="object-cover transition-transform duration-500 ease-silk group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors group-hover:bg-charcoal/40">
                <InstagramIcon className="h-5 w-5 text-ivory opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
