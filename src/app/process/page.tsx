"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import MagneticButton from "@/components/MagneticButton";
import ProcessStepComponent from "@/components/ProcessStep";
import FAQAccordion from "@/components/FAQAccordion";
import { processSteps } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ProcessPage() {
  const processFaqs = [
    {
      question: "How do you ensure brand consistency with AI generation?",
      answer:
        "We create custom AI style adapters (LoRAs) trained on your existing visual assets, color palette, and product CAD models. This ensures every frame output matches your brand identity exactly.",
    },
    {
      question: "What inputs do you need from our team to start?",
      answer:
        "All we need is your creative brief, brand guidelines, and high-res product photos or 3D assets. Our strategy team handles scriptwriting, storyboarding, and prompt architecture from there.",
    },
    {
      question: "Can we request revisions during production?",
      answer:
        "Yes! We include 2 rounds of creative revisions at the storyboard phase and 2 rounds of post-production edits. Because our pipeline is powered by AI, revisions take hours instead of weeks.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-28 px-6 lg:px-8 text-white">
      {/* Background illumination */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#c8a96e]/10 blur-[170px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tagline="Our Production Pipeline"
          title="Engineered for Precision & Speed"
          description="We combined traditional Hollywood cinematic discipline with state-of-the-art AI workflows to deliver commercial films in days, not months."
        />

        {/* Pipeline Overview Diagram / Grid */}
        <div className="mb-24">
          <GlassCard padding="lg" className="border-white/10">
            <div className="grid gap-8 md:grid-cols-5">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a96e]/40 bg-[#c8a96e]/10 text-sm font-light text-[#c8a96e]">
                    {step.number}
                  </div>
                  <h4 className="mb-1 text-sm font-light text-white">{step.title}</h4>
                  <p className="text-[11px] font-light text-white/40">{step.duration}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Detailed Timeline Steps */}
        <div className="mx-auto max-w-4xl space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard padding="lg">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-[#c8a96e]/30 bg-[#c8a96e]/10 text-2xl font-light text-[#c8a96e]">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-2xl font-light text-white">{step.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-light text-[#c8a96e]">
                        Timeline: {step.duration}
                      </span>
                    </div>
                    <p className="mb-6 text-sm font-light leading-relaxed text-white/60">
                      {step.description}
                    </p>

                    <div>
                      <h5 className="mb-3 text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase">
                        Key Deliverables & Milestones
                      </h5>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {step.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-light text-white/70">
                            <span className="text-[#c8a96e]">✦</span> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Process FAQ */}
        <div className="mt-28 mx-auto max-w-4xl">
          <SectionHeading
            tagline="Workflow Clarity"
            title="Process FAQ"
            description="Common questions about timeline management, feedback loops, and assets."
          />
          <FAQAccordion items={processFaqs} />
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <MagneticButton href="/contact" variant="primary" size="lg">
            Start Your Project Pipeline →
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
