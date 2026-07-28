import Link from "next/link";
import type { FaqItem } from "@/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FaqSection({
  items,
  showHeading = true,
}: {
  items: FaqItem[];
  showHeading?: boolean;
}) {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-3xl">
        {showHeading && (
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" align="center" className="mx-auto" />
        )}
        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/faq">View All</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}