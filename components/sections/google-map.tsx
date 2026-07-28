import { SITE } from "@/constants/site";

export function GoogleMap() {
  return (
    <section aria-label="Clinic location map" className="h-[420px] w-full grayscale-[15%]">
      <iframe
        src={SITE.mapEmbedSrc}
        title={`Map showing the location of ${SITE.name}`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
