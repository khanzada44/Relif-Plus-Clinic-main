"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

export function GalleryGrid({ images, categories }: { images: GalleryImage[]; categories: readonly string[] }) {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? images : images.filter((img) => img.category === active)),
    [active, images]
  );

  return (
    <>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter gallery by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-pill border px-5 py-2 text-sm transition-all duration-300 hover:scale-105 active:scale-95",
              active === cat ? "border-wine bg-wine text-ivory" : "border-charcoal/15 text-charcoal hover:border-wine/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style columns so each photo keeps its own natural aspect ratio — nothing gets cropped */}
      <div className="mt-12 columns-2 gap-3 sm:columns-3 lg:columns-4">
        {filtered.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelected(img)}
            className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl"
            aria-label={`Open ${img.caption} image`}
          >
            <Image
              src={img.image}
              alt={img.caption}
              width={900}
              height={1200}
              className="h-auto w-full rounded-xl transition-transform duration-500 ease-silk group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      <Dialog.Root open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 focus:outline-none">
            {selected && (
              <div className="relative mx-auto max-h-[80vh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={selected.image}
                  alt={selected.caption}
                  width={1600}
                  height={1200}
                  className="max-h-[80vh] w-full rounded-2xl object-contain"
                  sizes="90vw"
                />
              </div>
            )}
            <Dialog.Title className="mt-4 text-center font-display text-lg text-ivory">
              {selected?.caption}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close image"
                className="absolute -top-12 right-0 -m-2 p-2 text-ivory hover:text-wine"
              >
                <X className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}