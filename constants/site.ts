export const SITE = {
  name: "Relief Plus Wellness",
  shortName: "Relief Plus Wellness",
  tagline: "Personalized wellness care in East Toronto",
  description:
    "Relief Plus Wellness is a professional wellness clinic in East Toronto offering Acupuncture, Osteopathic Therapy, Cupping, Tuina Massage & Gua Sha, Brazilian Lymphatic Drainage, and other wellness-focused services under one roof.",
  url: "https://www.reliefpluswellness.com",
  phone: "+1 (416) 461-1118",
  email: "info@reliefpluswellness.com",
  address: {
    line1: "1403 Gerrard St E",
    line2: "Toronto, ON, M4L 1Z5",
  },
  hours: [
    { days: "Open 7 Days a Week", time: "10:00 AM – 7:00 PM" },
  ],
  mapEmbedSrc: "https://www.google.com/maps?q=1403+Gerrard+St+E,+Toronto,+ON+M4L+1Z5,+Canada&output=embed",
  bookingUrl: "https://reliefpluswellness.janeapp.com/locations/relief-plus-wellness/book",
  googleReviewUrl:
    "https://www.google.com/maps/place/Relief+Plus+Wellness/@43.6718422,-79.3234461,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb0075e84ee7:0x68a71a7195456a51!8m2!3d43.6718422!4d-79.3234461!16s%2Fg%2F11yf5hg5yf",
  // Each platform is only rendered where a real URL is configured — never
  // fall back to a placeholder/guessed profile link. Set these in .env.local
  // (see .env.example) or your hosting provider's environment settings.
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Team", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Join Our Team", href: "/join-team" },
] as const;

export const FOOTER_LINKS = {
  clinic: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/doctors" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    // { label: "Current Offers", href: "/offers" },
    // { label: "Before & After", href: "/before-after" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    // { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "New Patient Information", href: "/new-patient-information" },
    { label: "Same-Day Appointments", href: "/same-day-appointments" },
    { label: "Walk-In Appointments", href: "/walk-in-appointments" },
    { label: "Direct Billing", href: "/direct-billing" },
    { label: "Insurance Coverage", href: "/insurance-coverage" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Accessibility Statement", href: "/accessibility-statement" },
    { label: "Sitemap", href: "/sitemap" },
  ],
} as const;