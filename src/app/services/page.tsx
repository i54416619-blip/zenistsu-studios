"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import MagneticButton from "@/components/MagneticButton";
import { services, pricingTiers } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-28 px-6 lg:px-8 text-white">
      {/* Background illumination */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-[#c8a96e]/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tagline="Our Services"
          title="Premium AI Advertising Solutions"
          description="We combine Hollywood-grade artistic direction with state-of-the-art generative AI to craft commercial videos that drive massive revenue."
        />

        {/* Detailed Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <GlassCard padding="lg" className="border-white/10">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left info */}
                  <div className="lg:col-span-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-4xl">{service.icon}</span>
                      <span className="rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-3 py-1 text-xs font-light tracking-wider text-[#c8a96e]">
                        {service.priceRange}
                      </span>
                    </div>

                    <h2 className="mb-4 text-3xl font-light text-white">{service.title}</h2>
                    <p className="mb-6 text-sm font-light leading-relaxed text-white/60">
                      {service.longDescription}
                    </p>

                    <div className="mb-8 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c8a96e]/20 text-[10px] text-[#c8a96e]">
                            ✓
                          </div>
                          <span className="text-xs font-light text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right deliverables box */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:col-span-5">
                    <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase">
                      Package Deliverables
                    </h4>
                    <ul className="mb-8 space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-xs font-light border-b border-white/5 pb-2">
                          <span className="text-white/70">{item}</span>
                          <span className="text-[#c8a96e]">Included</span>
                        </li>
                      ))}
                    </ul>

                    <MagneticButton href="/contact" variant="primary" className="w-full text-center">
                      Book Service →
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Pricing Tiers / Comparison */}
        <div className="mt-28">
          <SectionHeading
            tagline="Transparent Packages"
            title="Flexible Production Tiers"
            description="Choose the right engagement model for your brand's growth goals."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {pricingTiers.map((tier, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <GlassCard
                  className={`h-full relative ${
                    tier.highlight ? "border-[#c8a96e]/40 bg-[#c8a96e]/5 shadow-[0_0_40px_rgba(200,169,110,0.1)]" : ""
                  }`}
                  padding="lg"
                >
                  {tier.highlight && (
                    <span className="absolute top-4 right-4 rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/20 px-3 py-1 text-[10px] font-light text-[#c8a96e]">
                      RECOMMENDED
                    </span>
                  )}
                  <h3 className="mb-2 text-2xl font-light text-white">{tier.name}</h3>
                  <p className="mb-6 text-xs font-light text-white/40">{tier.desc}</p>
                  <div className="mb-6 flex items-baseline">
                    <span className="text-4xl font-extralight text-white">{tier.price}</span>
                    <span className="ml-2 text-xs font-light text-white/40">{tier.period}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-light text-white/70">
                        <span className="text-[#c8a96e]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton
                    href="/contact"
                    variant={tier.highlight ? "primary" : "secondary"}
                    className="w-full text-center"
                  >
                    Select Plan →
                  </MagneticButton>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
