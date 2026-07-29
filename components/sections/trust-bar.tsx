import type { LucideIcon } from "lucide-react";
import { Award, Star, CreditCard, Zap, DoorOpen, Smartphone, Clock, MapPin, HeartHandshake } from "lucide-react";

const ITEMS: { label: string; icon: LucideIcon }[] = [
  { label: "Experienced Practitioners", icon: Award },
  { label: "99+ Google Reviews ⭐⭐⭐⭐⭐", icon: Star },
  { label: "Direct Billing Available for Eligible Services", icon: CreditCard },
  { label: "Same-Day Appointments Available, Availability May Vary", icon: Zap },
  { label: "Walk-In Appointments Welcome, Availability May Vary", icon: DoorOpen },
  { label: "Online Booking Available", icon: Smartphone },
  { label: "Open 7 Days a Week", icon: Clock },
  { label: "East Toronto Location", icon: MapPin },
  { label: "Personalized Treatment Plans", icon: HeartHandshake },
];

export function TrustBar() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section className="group overflow-hidden bg-charcoal-soft py-10" aria-label="Why patients choose us">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <ul className="flex shrink-0 items-center" aria-hidden={false}>
          {loop.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                key={i}
                aria-hidden={i >= ITEMS.length || undefined}
                className="flex shrink-0 items-center gap-3 px-10"
              >
                <Icon className="h-5 w-5 shrink-0 text-wine-light" />
                <span className="whitespace-nowrap text-sm tracking-wide text-ivory/80">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
