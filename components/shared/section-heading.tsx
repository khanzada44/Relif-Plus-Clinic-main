"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rule = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Eyebrow + display title pattern with the signature self-drawing wine rule.
 *  Uses a single scroll observer (staggered children) rather than one per element. */
export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <m.span variants={rule} style={{ transformOrigin: "left" }} className="h-px w-8 shrink-0 bg-wine-dark/60" />
        <m.span variants={fadeUp} className="text-eyebrow uppercase text-wine font-body font-semibold tracking-[0.28em]">
          {eyebrow}
        </m.span>
      </div>

      <m.h2 variants={fadeUp} className="mt-5 font-display text-display-md text-charcoal">
        {title}
      </m.h2>

      {description && (
        <m.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-stone">
          {description}
        </m.p>
      )}
    </m.div>
  );
}
