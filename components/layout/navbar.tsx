"use client";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GoogleIcon } from "../shared/social-icons";

const INSURANCE_LINKS = [
  { label: "Direct Billing", href: "/direct-billing" },
  { label: "Insurance Coverage", href: "/insurance-coverage" },
];

const PATIENT_LINKS = [
  { label: "New Patient Information", href: "/new-patient-information" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [patientsOpen, setPatientsOpen] = useState(false);
  const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);
  const [mobilePatientsOpen, setMobilePatientsOpen] = useState(false);
  const pathname = usePathname();
  const insuranceRef = useRef<HTMLDivElement>(null);
  const patientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setInsuranceOpen(false);
    setPatientsOpen(false);
    setMobileInsuranceOpen(false);
    setMobilePatientsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        insuranceRef.current &&
        !insuranceRef.current.contains(e.target as Node)
      ) {
        setInsuranceOpen(false);
      }
      if (
        patientsRef.current &&
        !patientsRef.current.contains(e.target as Node)
      ) {
        setPatientsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isInsuranceActive =
    pathname === "/direct-billing" || pathname === "/insurance-coverage";
  const isPatientsActive =
    pathname === "/new-patient-information" || pathname === "/faq";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-silk",
        scrolled || open
          ? "bg-ivory/90 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between gap-6 px-5 md:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={SITE.name}
        >
          <Image
            src="/images/logo/logo.png"
            alt={SITE.name}
            width={160}
            height={160}
            priority
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <span key={link.href} className="contents">
              {link.href === "/doctors" && (
                <div className="relative" ref={patientsRef}>
                  <button
                    onClick={() => setPatientsOpen((v) => !v)}
                    aria-expanded={patientsOpen}
                    aria-haspopup="true"
                    className={cn(
                      "flex items-center gap-1 text-sm tracking-wide text-charcoal/80 transition-colors hover:text-wine",
                      (isPatientsActive || patientsOpen) && "text-wine",
                    )}
                  >
                    Patients
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        patientsOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {patientsOpen && (
                      <m.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-charcoal/10 bg-white p-2 shadow-lift"
                      >
                        {PATIENT_LINKS.map((patientLink) => (
                          <Link
                            key={patientLink.href}
                            href={patientLink.href}
                            onClick={() => setPatientsOpen(false)}
                            className={cn(
                              "block rounded-lg px-4 py-3 text-sm text-charcoal transition-colors hover:bg-champagne/40 hover:text-wine",
                              pathname === patientLink.href && "text-wine",
                            )}
                          >
                            {patientLink.label}
                          </Link>
                        ))}
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              <Link
                href={link.href}
                className={cn(
                  "group relative whitespace-nowrap text-sm tracking-wide text-charcoal/80 transition-colors hover:text-wine",
                  pathname === link.href && "text-wine",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-wine transition-transform duration-300 ease-silk group-hover:scale-x-100",
                    pathname === link.href && "scale-x-100",
                  )}
                />
              </Link>
            </span>
          ))}

          {/* Insurance dropdown */}
          <div className="relative" ref={insuranceRef}>
            <button
              onClick={() => setInsuranceOpen((v) => !v)}
              aria-expanded={insuranceOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-sm tracking-wide text-charcoal/80 transition-colors hover:text-wine",
                (isInsuranceActive || insuranceOpen) && "text-wine",
              )}
            >
              Insurance
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  insuranceOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {insuranceOpen && (
                <m.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-charcoal/10 bg-white p-2 shadow-lift"
                >
                  {INSURANCE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setInsuranceOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm text-charcoal transition-colors hover:bg-champagne/40 hover:text-wine",
                        pathname === link.href && "text-wine",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <Button asChild variant="wine" size="sm">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Appointment
            </a>
          </Button>
          <Link
            href="/#reviews"
            className="flex items-center gap-3 whitespace-nowrap rounded-2xl  px-3 py-2 transition-colors"
          >
            <GoogleIcon className="h-6 w-6 shrink-0" />
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1.5">
                <span
                  className="tracking-tight"
                  style={{ color: "#F4B400" }}
                  aria-hidden="true"
                >
                  ★★★★★
                </span>
                <span className="text-sm font-bold text-charcoal">5.0</span>
              </div>
              <span className="text-xs font-semibold text-charcoal">
                Top Rated Service 2026
              </span>
              <span className="text-[11px] text-charcoal/60">
                verified by Trustindex
                <span
                  className="ml-0.5 inline-block align-middle"
                  aria-hidden="true"
                >
                  ⓘ
                </span>
              </span>
            </div>
          </Link>
        </div>

        <button
          className="-m-2 p-2 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-charcoal/10 xl:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link) => (
                <span key={link.href} className="contents">
                  {link.href === "/doctors" && (
                    <>
                      <button
                        onClick={() => setMobilePatientsOpen((v) => !v)}
                        aria-expanded={mobilePatientsOpen}
                        className="flex items-center justify-between rounded-lg px-3 py-3 text-base text-charcoal hover:bg-champagne/40"
                      >
                        Patients
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            mobilePatientsOpen && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobilePatientsOpen && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden pl-3"
                          >
                            {PATIENT_LINKS.map((patientLink) => (
                              <Link
                                key={patientLink.href}
                                href={patientLink.href}
                                className="block rounded-lg px-3 py-3 text-sm text-stone hover:bg-champagne/40 hover:text-wine"
                              >
                                {patientLink.label}
                              </Link>
                            ))}
                          </m.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base text-charcoal hover:bg-champagne/40"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}

              <button
                onClick={() => setMobileInsuranceOpen((v) => !v)}
                aria-expanded={mobileInsuranceOpen}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base text-charcoal hover:bg-champagne/40"
              >
                Insurance
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    mobileInsuranceOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {mobileInsuranceOpen && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden pl-3"
                  >
                    {INSURANCE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-3 py-3 text-sm text-stone hover:bg-champagne/40 hover:text-wine"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </m.div>
                )}
              </AnimatePresence>

              <Button asChild variant="wine" className="mt-3 w-full">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </Button>

              <Link
                href="/#reviews"
                className="mt-2 flex items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-champagne/50 px-3 py-3 text-base text-charcoal transition-colors hover:bg-champagne"
              >
                Read Our Reviews
                <span className="text-gold-dark" aria-hidden="true">
                  ★★★★★
                </span>
              </Link>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
