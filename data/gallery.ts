import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Clinic", image: "/images/gallary/gallery-1.jpg", caption: "Relief Plus Wellness" },
  { id: "g2", category: "Clinic", image: "/images/gallary/gallery-2.jpg", caption: "Relief Plus Wellness" },
  { id: "g3", category: "Clinic", image: "/images/gallary/gallery-3.jpg", caption: "Relief Plus Wellness" },
  { id: "g4", category: "Clinic", image: "/images/gallary/gallery-4.jpg", caption: "Relief Plus Wellness" },
  { id: "g5", category: "Clinic", image: "/images/gallary/gallery-5.jpg", caption: "Relief Plus Wellness" },
  { id: "g6", category: "Clinic", image: "/images/gallary/gallery-6.jpg", caption: "Relief Plus Wellness" },
  { id: "g7", category: "Clinic", image: "/images/gallary/gallery-7.jpg", caption: "Relief Plus Wellness" },
  { id: "g8", category: "Clinic", image: "/images/gallary/gallery-8.jpg", caption: "Relief Plus Wellness" },
  { id: "g9", category: "Clinic", image: "/images/gallary/gallery-9.jpg", caption: "Relief Plus Wellness" },
];

export const galleryCategories = ["All", "Clinic"] as const;