import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { beforeAfterItems } from "@/data/before-after";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";

export function BeforeAfterPreview() {
  const featured = beforeAfterItems.slice(0, 2);

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Proof, Not Promises" title="Real results, shown honestly" />
          <Button asChild variant="outline">
            <Link href="/before-after">
              View Full Gallery <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {featured.map((item) => (
            <RevealItem key={item.id}>
              <BeforeAfterSlider before={item.before} after={item.after} procedure={item.procedure} />
              <p className="mt-4 font-display text-lg text-charcoal">{item.procedure}</p>
              <p className="text-sm text-stone">Recovery: {item.recoveryTime}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
