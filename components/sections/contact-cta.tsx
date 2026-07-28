import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="bg-champagne/40 py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-xl font-display text-display-md text-charcoal">
          Begin with a conversation, not a commitment.
        </h2>
        <p className="max-w-md text-stone">
          Your first consultation is complimentary and entirely without obligation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="wine" size="lg">
            <Link href="/book-appointment">
              Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
