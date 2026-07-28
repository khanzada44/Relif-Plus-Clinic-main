"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center bg-ivory py-24">
      <Container className="text-center">
        <span className="font-display text-display-xl italic text-champagne">Oops</span>
        <h1 className="mt-4 font-display text-display-md text-charcoal">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-stone">
          An unexpected error occurred. Please try again, or reach us directly if the problem continues.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="wine" size="lg" onClick={() => reset()}>
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              Return Home <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${SITE.phone}`}>Call {SITE.phone}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
