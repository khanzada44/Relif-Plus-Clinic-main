import type { Testimonial } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RatingStars } from "@/components/shared/rating-stars";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-8">
        <RatingStars rating={testimonial.rating} />
        <p className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-charcoal">
          &ldquo;{testimonial.review}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-charcoal">{testimonial.name}</p>
            <p className="text-xs text-stone">
              {testimonial.procedure} · {testimonial.date}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
