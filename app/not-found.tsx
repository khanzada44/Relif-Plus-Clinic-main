import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ivory py-24">
      <Container className="text-center">
        <span className="font-display text-display-xl italic text-champagne">404</span>
        <h1 className="mt-4 font-display text-display-md text-charcoal">This page has stepped out</h1>
        <p className="mx-auto mt-4 max-w-md text-stone">
          The page you're looking for doesn't exist, or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="wine" size="lg">
            <Link href="/">
              Return Home <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Browse Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Book an Appointment</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
