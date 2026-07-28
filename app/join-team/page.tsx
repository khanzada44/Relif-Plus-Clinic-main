"use client";
import { useState } from "react";

export default function JoinTeam() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Application submitted successfully! We'll be in touch soon.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to submit application. Please check your connection and try again.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <section className="bg-[#F8F4EF]">
        {/* Hero */}
        <div className="bg-[#231C1B] py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[5px] text-[#C49A6C] text-sm font-semibold">
              Careers
            </p>

            <h1 className="text-6xl font-serif text-white mt-4">
              Join Our Team
            </h1>

            <p className="text-gray-300 mt-5 text-lg">
              We're always looking for talented and passionate professionals to
              join our growing team. Submit your application below.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-serif text-[#231C1B] mb-8">Careers</h2>

            <div className="space-y-6 text-[#6B5A55]">
              <div>
                <p className="font-semibold text-[#231C1B]">Email</p>
                <p>info@reliefpluswellness.com</p>
              </div>

              <div>
                <p className="font-semibold text-[#231C1B]">Working Hours</p>
                <p>Monday - Sunday</p>
                <p>10:00 AM - 7:00 PM</p>
              </div>

              <div>
                <p className="font-semibold text-[#231C1B]">Hiring</p>
                <p>
                  Physiotherapists, Massage Therapists, Chiropractors,
                  Receptionists and Administrative Staff.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-4xl font-serif text-[#231C1B] mb-8">
              Apply Now
            </h2>

            {/* Success / Error Message */}
            {status.type && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-start gap-3 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <span className="mt-0.5">
                  {status.type === "success" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span>{status.message}</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full border rounded-xl p-4 mt-2"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border rounded-xl p-4 mt-2"
                    placeholder="+1 (416) 555-0100"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border rounded-xl p-4 mt-2"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm">Position Applying For</label>
                <input
                  type="text"
                  name="position"
                  className="w-full border rounded-xl p-4 mt-2"
                  placeholder="Physiotherapist"
                />
              </div>

              <div>
                <label className="text-sm">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  className="w-full border rounded-xl p-4 mt-2"
                  placeholder="3 Years"
                />
              </div>

              <div>
                <label className="text-sm">Cover Letter</label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full border rounded-xl p-4 mt-2"
                  placeholder="Tell us why you'd like to join Relief Plus Wellness..."
                />
              </div>

              <div>
                <label className="text-sm">Upload Resume / CV</label>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full border rounded-xl p-4 mt-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#7D2230] hover:bg-[#651A26] text-white py-4 rounded-full transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}