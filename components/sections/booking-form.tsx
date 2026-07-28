"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
  // Honeypot — always empty for real visitors, hidden from sighted and
  // screen-reader users alike. See the `companyWebsite` check in the API route.
  companyWebsite: z.string().max(0).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({ resolver: zodResolver(bookingSchema) });

  async function onSubmit(values: BookingFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      router.push("/thank-you");
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again, or call us directly."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* Honeypot: real visitors never see or reach this field. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input id="companyWebsite" type="text" tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
      </div>

      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          placeholder="Jane Doe"
          autoComplete="name"
          required
          {...register("fullName")}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (416) 555-0100"
          autoComplete="tel"
          required
          {...register("phone")}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@example.com"
          autoComplete="email"
          required
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          placeholder="Anything you'd like your practitioner to know beforehand."
          autoComplete="off"
          {...register("message")}
        />
      </div>

      {submitError && (
        <div role="alert" className="sm:col-span-2 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          <p>{submitError}</p>
          <p className="mt-2">
            Please call us at{" "}
            <a href={`tel:${SITE.phone}`} className="font-medium underline underline-offset-4">
              {SITE.phone}
            </a>{" "}
            or{" "}
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
              book online directly
            </a>
            .
          </p>
        </div>
      )}

      <Button type="submit" variant="wine" size="lg" disabled={isSubmitting} className="sm:col-span-2">
        {isSubmitting ? "Sending Request…" : "Request Appointment"}
      </Button>
    </form>
  );
}
