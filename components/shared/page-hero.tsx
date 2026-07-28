"use client";

import { m } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  descriptionClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <section className={cn("bg-charcoal pb-20 pt-16 md:pb-28 md:pt-24", className)}>
      <Container className="max-w-3xl">
        <Eyebrow className="text-champagne">{eyebrow}</Eyebrow>
        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-display-lg text-ivory"
        >
          {title}
        </m.h1>
        {description && (
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn("mt-5 max-w-xl text-base leading-relaxed text-ivory/70", descriptionClassName)}
          >
            {description}
          </m.p>
        )}
      </Container>
    </section>
  );
}
