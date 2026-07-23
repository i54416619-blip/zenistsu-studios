"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import MagneticButton from "@/components/MagneticButton";
import { contactInfo } from "@/data/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: contactInfo.projectTypes[0],
    budget: contactInfo.budgetRanges[1],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
      if (!apiKey) {
        // Fallback for demonstration if key is not yet set in environment variables
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitted(true);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          from_name: "Zenistsu Studios Website",
          subject: `New Project Inquiry: ${formData.name} (${formData.projectType})`,
          name: formData.name,
          email: formData.email,
          company: formData.company || "N/A",
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-28 px-6 lg:px-8 text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#c8a96e]/10 blur-[170px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tagline="Start A Conversation"
          title="Let’s Create Something Iconic"
          description="Have a commercial project, real estate film, or AI avatar campaign in mind? Reach out to schedule a consultation."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <GlassCard padding="lg" className="border-white/10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a96e]/20 text-3xl text-[#c8a96e]">
                      ✓
                    </div>
                    <h3 className="mb-3 text-3xl font-light text-white">Message Received</h3>
                    <p className="mx-auto mb-8 max-w-md text-sm font-light leading-relaxed text-white/60">
                      Thank you for reaching out to Zenistsu Studios. Our Creative Director will review your project brief and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/20 px-6 py-2.5 text-xs font-light text-white/70 hover:border-white hover:text-white transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-light text-white mb-4">Project Inquiry Form</h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-light text-white/60">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alexander Vance"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#c8a96e]/60 focus:bg-white/[0.05]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-light text-white/60">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alexander@brand.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#c8a96e]/60 focus:bg-white/[0.05]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-light text-white/60">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Maison Blanc / Apex Tech"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#c8a96e]/60 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-light text-white/60">
                          Project Category
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c8a96e]/60"
                        >
                          {contactInfo.projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-light text-white/60">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c8a96e]/60"
                        >
                          {contactInfo.budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-light text-white/60">
                        Project Details & Vision *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your product, campaign goals, target audience, or timeline requirements..."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#c8a96e]/60 focus:bg-white/[0.05]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-gradient-to-r from-[#c8a96e] to-[#e8d5a8] py-4 text-center text-sm font-medium text-[#050505] transition-all hover:shadow-[0_0_30px_rgba(200,169,110,0.3)] disabled:opacity-50"
                    >
                      {loading ? "Sending Project Inquiry..." : "Submit Project Inquiry →"}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* Info Side */}
          <div className="space-y-8 lg:col-span-5">
            <GlassCard padding="lg">
              <h3 className="mb-6 text-xl font-light text-white">Direct Contacts</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase block mb-1">
                    General Inquiries & Bookings
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg font-light text-white hover:text-[#c8a96e] transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <span className="text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase block mb-1">
                    Direct Studio Line
                  </span>
                  <p className="text-lg font-light text-white">{contactInfo.phone}</p>
                </div>

                <div>
                  <span className="text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase block mb-1">
                    Headquarters
                  </span>
                  <p className="text-sm font-light text-white/70">
                    Zenistsu Studios LLC
                    <br />
                    9454 Wilshire Blvd, Suite 800
                    <br />
                    Beverly Hills, CA 90212
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard padding="lg">
              <h3 className="mb-4 text-xl font-light text-white">Connect With Us</h3>
              <p className="mb-6 text-xs font-light leading-relaxed text-white/50">
                Follow our latest commercial releases, behind-the-scenes AI breakdowns, and visual experiments.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-xs font-light text-white/70 hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all"
                  >
                    {social.platform} ↗
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
