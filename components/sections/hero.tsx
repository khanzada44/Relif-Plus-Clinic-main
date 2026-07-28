"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
// import { HERO_POSTER_IMAGE } from "@/lib/hero-media";
import { SITE } from "@/constants/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Video autoplay failed, will retry on interaction:", err);
        });
      }
    };

    // try immediately on mount
    tryPlay();

    // retry once metadata/data is ready
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    // fallback: force play on first user interaction (fixes first-load block)
    const forcePlayOnInteraction = () => {
      if (video.paused) {
        tryPlay();
      }
    };

    const events: (keyof WindowEventMap)[] = [
      "touchstart",
      "touchend",
      "click",
      "scroll",
    ];

    events.forEach((evt) =>
      window.addEventListener(evt, forcePlayOnInteraction, { once: true, passive: true })
    );

    // also retry when tab becomes visible again (some mobile browsers pause on bg)
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      events.forEach((evt) => window.removeEventListener(evt, forcePlayOnInteraction));
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal">
      <m.div
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0%)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 overflow-hidden"
      >
        <m.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Fallback background so section isn't blank while video loads on mobile */}
          <div
            className={`absolute inset-0 bg-charcoal transition-opacity duration-700 ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            // @ts-ignore - needed for older iOS Safari
            webkit-playsinline="true"
            disablePictureInPicture
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </m.div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/10" />
      </m.div>

      <Container className="relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center rounded-full border border-ivory/20 bg-charcoal/50 px-5 py-2.5 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wide text-champagne md:text-base">
              RELIEF PLUS WELLNESS · EAST TORONTO WELLNESS CLINIC.
            </span>
          </m.div>

          <h1 className="mt-6 font-display text-4xl italic text-ivory">
            Acupuncture, Brazilian Lymphatic Drainage & Osteopathic Therapy in East Toronto.
          </h1>
          <p className="mt-6 max-w-lg text-xl font-bold leading-relaxed text-white">
            Relief Plus Wellness is a professional wellness clinic located at 1403 Gerrard St E, Toronto, offering Acupuncture, Osteopathic Therapy, Wet Cupping (Hijama), Cupping Therapy, Cosmetic Acupuncture, Tuina Massage & Gua Sha, Thai Oil Massage, Brazilian Lymphatic Drainage, and Head Massage.
            We proudly serve Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, Little India, Scarborough, Downtown Toronto, and surrounding East Toronto communities.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="wine" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-ivory bg-ivory/10">
              <Link href="/about">
                <Play className="h-4 w-4" /> Watch Our Story
              </Link>
            </Button>
          </div>
        </m.div>
      </Container>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/50 md:flex"
      >
        <span className="text-eyebrow uppercase tracking-[0.28em]">Scroll</span>
        <span className="h-10 w-px bg-ivory/30" />
      </m.div>
    </section>
  );
}