import type { Service } from "@/types";

const TCM_IMAGE = "/images/services/traditional-chinese-medicine.png";

export const services: Service[] = [
  // Traditional Chinese Medicine
  {
    slug: "acupuncture",
    category: "Traditional Chinese Medicine",
    title: "Acupuncture",
    shortDescription: "Fine-needle therapy rooted in Traditional Chinese Medicine to support pain relief and balance.",
    description:
      "Acupuncture uses fine, sterile needles placed at specific points on the body to help relieve pain, ease tension, and support the body's natural healing process. Our registered practitioners tailor each session to your individual concerns, whether that's chronic pain, stress, or general wellness.",
    duration: "Initial 80 min · Follow-Up 60 min",
    priceFrom: 120,
    priceTiers: [
      { label: "Initial 80 min", price: 148 },
      { label: "Follow-Up 60 min", price: 120 },
    ],
    image: "/images/gallary/image6.jpg",
    benefits: ["Registered practitioners", "Personalized point selection", "Supports pain relief & relaxation"],
    featured: true,
  },
  {
    slug: "cosmetic-acupuncture",
    category: "Traditional Chinese Medicine",
    title: "Cosmetic Acupuncture",
    shortDescription: "A natural, needle-based approach to supporting skin vitality and a refreshed appearance.",
    description:
      "Cosmetic acupuncture uses fine needling techniques on the face and body to support circulation and skin vitality, offered as part of a holistic treatment plan rather than a standalone quick fix.",
    duration: "Initial 60 min · Follow-Up 45 min",
    priceFrom: 135,
    priceTiers: [
      { label: "Initial 60 min", price: 160 },
      { label: "Follow-Up 45 min", price: 135 },
    ],
    image: "/images/gallary/image5.jpg",
    benefits: ["Gentle, needle-based technique", "Complements a wellness routine", "Performed by registered practitioners"],
  },
  {
    slug: "wet-cupping-hijama",
    category: "Traditional Chinese Medicine",
    title: "Wet Cupping (Hijama)",
    shortDescription: "Traditional wet cupping therapy performed with strict hygiene and safety standards.",
    description:
      "Wet cupping, or Hijama, is a traditional therapy that combines cupping with a minor controlled release to support circulation and recovery. Every session follows strict hygiene and single-use protocols under the care of a trained practitioner.",
    duration: "45 min",
    priceFrom: 135,
    image: "/images/gallary/image8.jpg",
    benefits: ["Single-use, sterile equipment", "Traditional technique", "Performed by trained practitioners"],
  },
  {
    slug: "cupping-therapy",
    category: "Traditional Chinese Medicine",
    title: "Cupping Therapy",
    shortDescription: "Dry cupping to help ease muscle tension and support circulation.",
    description:
      "Cupping therapy uses suction cups placed on the skin to help release muscle tension, encourage circulation, and support recovery after physical activity or periods of stress.",
    duration: "60 min",
    priceFrom: 130,
    image: "/images/gallary/image7.png",
    benefits: ["Eases muscle tension", "Encourages circulation", "Often paired with acupuncture"],
  },
  {
    slug: "tuina-massage-gua-sha",
    category: "Traditional Chinese Medicine",
    title: "Tuina Massage & Gua Sha",
    shortDescription: "Traditional Chinese bodywork combining massage and gentle scraping technique.",
    description:
      "Tuina is a traditional form of Chinese therapeutic massage that uses rhythmic pressure and manipulation to ease tension, often paired with Gua Sha — a gentle scraping technique that supports circulation and muscle relief.",
    duration: "60 min – 90 min",
    priceFrom: 135,
    priceTiers: [
      { label: "60 min", price: 135 },
      { label: "90 min", price: 220 },
    ],
    image: "/images/gallary/image13.jpg",
    benefits: ["Traditional bodywork technique", "Eases muscular tension", "Can be combined with cupping"],
  },
  {
    slug: "facial-cupping",
    category: "Traditional Chinese Medicine",
    title: "Facial Cupping",
    shortDescription: "Gentle facial cupping designed to support circulation and a refreshed look.",
    description:
      "Facial cupping uses small, gentle suction cups on the face to support circulation and ease tension in the facial muscles, often included as part of a broader TCM wellness session.",
    duration: "60 min",
    priceFrom: 148,
    image: "/images/gallary/image10.jpeg",
    benefits: ["Gentle, non-invasive technique", "Supports facial circulation", "Relaxing add-on treatment"],
  },

  // Manual Therapy
  {
    slug: "osteopathic-therapy",
    category: "Osteopathic Therapy",
    title: "Osteopathic Therapy",
    shortDescription: "Hands-on osteopathic care focused on movement, mobility, and posture.",
    description:
      "Osteopathic therapy takes a whole-body approach, using hands-on techniques to assess and address restrictions in movement, mobility, and posture. Sessions are tailored to concerns ranging from chronic pain to sports injuries and everyday tension.",
    duration: "30–45 min",
    priceFrom: 90,
    image: "/images/gallary/Osteopathic-Therapy.jpg",
    benefits: ["Whole-body, hands-on approach", "Supports mobility & posture", "Tailored to your concerns"],
    featured: true,
  },

  // Wellness & Body Care
  {
    slug: "brazilian-lymphatic-drainage",
    category: "Wellness & Body Care",
    title: "Brazilian Lymphatic Drainage",
    shortDescription: "A rhythmic massage technique designed to support the body's natural lymphatic flow.",
    description:
      "Brazilian lymphatic drainage is a specialized massage technique using rhythmic, gentle strokes to support the body's natural lymphatic flow, often chosen for post-activity recovery or general relaxation.",
    duration: "60–90 min",
    priceFrom: 148,
    image: "/images/gallary/image11.png",
    benefits: ["Rhythmic, gentle technique", "Supports natural lymphatic flow", "Popular for recovery & relaxation"],
    featured: true,
  },
  {
    slug: "thai-oil-massage",
    category: "Wellness & Body Care",
    title: "Thai Oil Massage",
    shortDescription: "A warm oil massage blending gentle stretching with therapeutic pressure.",
    description:
      "Thai oil massage combines warm oils with gentle stretching and therapeutic pressure to ease tension throughout the body, offering a deeply relaxing, full-body experience.",
    duration: "60–90 min",
    priceFrom: 100,
    image: "/images/gallary/image4.jpg",
    benefits: ["Full-body relaxation", "Combines oils & stretching", "Eases everyday tension"],
  },
  {
    slug: "head-massage",
    category: "Wellness & Body Care",
    title: "Head Massage",
    shortDescription: "A focused massage to ease tension in the scalp, neck, and shoulders.",
    description:
      "Our head massage focuses on the scalp, neck, and shoulders to help release built-up tension and promote a deep sense of calm — a favorite for stress relief in a short session.",
    duration: "30–45 min",
    priceFrom: 45,
    image: "/images/gallary/image9.jpeg",
    benefits: ["Targets scalp, neck & shoulders", "Quick, focused session", "Supports stress relief"],
  },
  {
    slug: "foot-massage",
    category: "Wellness & Body Care",
    title: "Foot Massage",
    shortDescription: "A relaxing, focused massage to ease tension through the feet.",
    description:
      "A dedicated foot massage using targeted pressure to help ease tension and promote relaxation — a simple, effective way to unwind after time spent on your feet.",
    duration: "45–60 min",
    priceFrom: 80,
    image: "/images/gallary/image12.jpg",
    benefits: ["Targeted pressure technique", "Quick relaxation session", "Great as an add-on treatment"],
  },
  {
    slug: "hot-stone-therapy",
    category: "Wellness & Body Care",
    title: "Hot Stone",
    shortDescription: "Warmed stones used to ease muscle tension and deepen relaxation.",
    description:
      "Smooth, heated stones are placed and gently glided over the body to help ease muscle tension and encourage a deeper state of relaxation throughout the session.",
    duration: "60–90 min",
    priceFrom: 120,
    image: "/images/gallary/image2.jpg",
    benefits: ["Warmed stones ease tension", "Deeply relaxing", "Often paired with massage"],
  },
  // {
  //   slug: "herbal-compress-ball-therapy",
  //   category: "Wellness & Body Care",
  //   title: "Herbal Compress Ball",
  //   shortDescription: "Warm herbal compresses used to soothe muscles and support relaxation.",
  //   description:
  //     "Heated herbal compress balls are pressed and rolled over the body, releasing natural herbal warmth to soothe tired muscles and support a calming, therapeutic experience.",
  //   duration: "60–90 min",
  //   priceFrom: 110,
  //   image: "/images/gallary/image3.jpg",
  //   benefits: ["Natural herbal warmth", "Soothes tired muscles", "Deeply calming experience"],
  // },
{
  slug: "shiatsu-massage",
  category: "Traditional Japanese Bodywork",
  title: "Shiatsu Massage\n(Japanese Acupressure)",
  shortDescription: "Traditional Japanese hands-on therapy using pressure-point techniques to promote relaxation and relieve muscle tension.",
  description:
    "Shiatsu Massage\n(Japanese Acupressure) is a traditional Japanese hands-on therapy that uses comfortable finger pressure, palm techniques, stretching, and rhythmic movements to promote relaxation, relieve muscle tension, and support overall well-being. Every session is personalized to your comfort and wellness goals.",
  duration: "60 min – 90 min",
  priceFrom: 100,
  priceTiers: [
    { label: "60 min", price: 100 },
    { label: "90 min", price: 148 },
  ],
  image: "/images/services/ShiatsuMassage.png",
  benefits: [
    "Traditional Japanese pressure-point techniques",
    "Helps relieve muscle tension and everyday stress",
    "Promotes relaxation and overall well-being",
    "Personalized treatment based on your needs",
  ],
},
{
  slug: "aromatherapy-massage",

  category: "Traditional Wellness Therapy",

  title: "Aromatherapy Massage",

  shortDescription:
    "Aromatherapy Massage combines therapeutic massage techniques with carefully selected essential oils to promote relaxation, ease muscle tension, and create a calming sensory experience.",

  description:
    "Aromatherapy Massage combines therapeutic massage techniques with carefully selected essential oils to promote relaxation, ease muscle tension, and create a calming sensory experience. Each treatment is customized using professional-grade essential oils chosen to complement your wellness goals and preferences.",

  duration: "60 min – 90 min",

  priceFrom: 110,

  priceTiers: [
    {
      label: "60 min",
      price: 110,
    },
    {
      label: "90 min",
      price: 145,
    },
  ],

  image: "/images/services/AromatherapyMassage.png",

  benefits: [
    "Premium essential oils selected for your session",
    "Helps promote relaxation and reduce everyday stress",
    "Relieves muscle tension and encourages deep relaxation",
    "Personalized aromatherapy blend based on your preferences",
  ],
},
  
{
  slug: "signature-lymphatic-package",
  category: "Brazilian Lymphatic Drainage",
  title: "Signature Lymphatic Package",
  shortDescription:
    "3 lymphatic drainage sessions with a complimentary 30-minute relaxation massage.",
  description:
    "Includes three 60-minute Brazilian Lymphatic Drainage sessions to support circulation, reduce fluid retention, and promote tissue health. Also includes one complimentary 30-minute relaxation massage. Appointments are subject to availability. Services are within scope of practice. Results may vary.",
  duration: "3 × 60 min",
  priceFrom: 444,
  image: "/images/services/Packages.png",
  benefits: [
    "3 Brazilian Lymphatic Drainage sessions",
    "Complimentary 30-minute relaxation massage",
    "Supports circulation",
  ],
},
{
  slug: "advanced-lymphatic-package",
  category: "Brazilian Lymphatic Drainage",
  title: "Advanced Lymphatic Package",
  shortDescription:
    "4 lymphatic drainage sessions with a complimentary 45-minute relaxation massage.",
  description:
    "Includes four 60-minute Brazilian Lymphatic Drainage sessions to support circulation, reduce fluid retention, and promote tissue health. Also includes one complimentary 45-minute relaxation massage. Appointments are subject to availability. Services are within scope of practice. Results may vary.",
  duration: "4 × 60 min",
  priceFrom: 555,
  image: "/images/services/Packages.png",
  benefits: [
    "4 Brazilian Lymphatic Drainage sessions",
    "Complimentary 45-minute relaxation massage",
    "Supports circulation",
  ],
},
{
  slug: "ultimate-lymphatic-package",
  category: "Brazilian Lymphatic Drainage",
  title: "Ultimate Lymphatic Package",
  shortDescription:
    "5 lymphatic drainage sessions with a complimentary 60-minute relaxation massage.",
  description:
    "Includes five 60-minute Brazilian Lymphatic Drainage sessions to support circulation, reduce fluid retention, and promote overall tissue health. Also includes one complimentary 60-minute relaxation massage. Appointments are subject to availability. Services are within scope of practice. Results may vary.",
  duration: "5 × 60 min",
  priceFrom: 699,
  image: "/images/services/Packages.png",
  benefits: [
    "5 Brazilian Lymphatic Drainage sessions",
    "Complimentary 60-minute relaxation massage",
    "Promotes overall tissue health",
  ],
},
];

export const serviceCategories = Array.from(new Set(services.map((s) => s.category)));

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string) {
  return services.filter((s) => s.category === category);
}