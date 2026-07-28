"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import type { Service } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { SITE } from "@/constants/site";

export function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative aspect-[4/5] overflow-hidden text-left"
        aria-label={`Enlarge ${service.title} image`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <Badge variant="wine" className="absolute left-4 top-4 bg-ivory/90">
          {service.category}
        </Badge>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 focus:outline-none">
            <div className="relative mx-auto max-h-[80vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={1500}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
                sizes="90vw"
              />
            </div>
            <Dialog.Title className="mt-4 text-center font-display text-lg text-ivory">
              {service.title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label="Close image" className="absolute -top-12 right-0 -m-2 p-2 text-ivory hover:text-wine">
                <X className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-xl text-charcoal">{service.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">{service.shortDescription}</p>
        {service.priceTiers ? (
          <div className="mt-5 space-y-1.5 text-sm text-stone">
            {service.priceTiers.map((tier) => (
              <div key={tier.label} className="flex items-center justify-between">
                <span>{tier.label}</span>
                <span className="font-medium text-charcoal">{formatPrice(tier.price)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 flex items-center justify-between text-sm text-stone">
            <span>{service.duration}</span>
            <span className="font-medium text-charcoal">From {formatPrice(service.priceFrom)}</span>
          </div>
        )}
        <div className="mt-6 flex gap-3">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
              Learn More
            </Link>
          </Button>
          <Button asChild variant="wine" size="sm" className="flex-1">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>
      </div>
    </Card>
  );
}