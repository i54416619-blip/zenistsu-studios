"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import MagneticButton from "@/components/MagneticButton";
import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import ProcessStepComponent from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import StatCounter from "@/components/StatCounter";
import MarqueeText from "@/components/MarqueeText";
import {
  hero,
  services,
  portfolioProjects,
  stats,
  processSteps,
  testimonials,
  faqItems,
  values,
} from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const featuredProjects = portfolioProjects.slice(0, 4);

  return (
    <div className="relative overflow-hidden bg-[#050505] text-white">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 lg:px-8">
        {/* Background ambient lighting and grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-pulse-glow absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#c8a96e]/15 via-[#8b5cf6]/10 to-transparent blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-[#c8a96e]/10 blur-[150px]" />
          {/* Subtle noise/grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8a96e] animate-ping" />
            <span className="text-xs font-light tracking-[0.2em] text-[#c8a96e] uppercase">
              {hero.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mb-8 text-5xl font-extralight leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            <AnimatedText text="We Create AI Films" delay={0.2} />
            <br />
            <span className="bg-gradient-to-r from-[#c8a96e] via-[#e8d5a8] to-[#ffffff] bg-clip-text text-transparent font-normal">
              <AnimatedText text="That Sell" delay={0.6} />
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-white/50 md:text-lg lg:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <MagneticButton href="/portfolio" variant="primary" size="lg">
              {hero.cta.primary} →
            </MagneticButton>
            <MagneticButton href="/contact" variant="secondary" size="lg">
              {hero.cta.secondary}
            </MagneticButton>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/30">
              <span className="text-[10px] font-light tracking-[0.3em] uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-4 rounded-full border border-white/20 p-1"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeText text="Cinematic AI Ads • Luxury Commercials • Real Estate Marketing • AI Avatars • Brand Films" speed={30} />

      {/* ─── 2. FEATURED WORK ───────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tagline="Selected Works"
            title="Award-Winning AI Productions"
            description="Explore our portfolio of high-converting AI advertisements and cinematic brand films."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project.title)}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <MagneticButton href="/portfolio" variant="secondary" size="lg">
              View All Projects ({portfolioProjects.length}) →
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES SECTION ────────────────────────────────────────── */}
      <section className="relative border-t border-white/5 bg-[#080808] py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tagline="What We Offer"
            title="World-Class AI Advertising Solutions"
            description="End-to-end commercial video production powered by proprietary AI workflows."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <MagneticButton href="/services" variant="primary" size="lg">
              Explore All Services & Pricing →
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE US & STATS ───────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Stats Bar */}
          <GlassCard className="mb-24" padding="lg">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <StatCounter
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </GlassCard>

          {/* Value Propositions */}
          <SectionHeading
            tagline="The Zenistsu Advantage"
            title="Why Leading Brands Trust Us"
            description="We bridge high-end filmmaking aesthetics with ground-breaking AI technology."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {values.map((val, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 text-sm font-light text-[#c8a96e]">
                    0{idx + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-light text-white">{val.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-white/40">
                    {val.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. OUR PROCESS ────────────────────────────────────────────── */}
      <section className="relative border-t border-white/5 bg-[#080808] py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            tagline="How It Works"
            title="From Concept to High-Converting Film"
            description="Our streamlined 5-step AI video production framework."
          />

          <div className="mt-12 space-y-4">
            {processSteps.map((step, index) => (
              <ProcessStepComponent
                key={step.number}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <MagneticButton href="/process" variant="secondary" size="lg">
              Detailed Production Breakdown →
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tagline="Client Stories"
            title="Trusted by Visionary Founders & Marketers"
            description="Read what luxury brands and growth leaders say about working with Zenistsu Studios."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={t.id} testimonial={t} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. FAQ SECTION ─────────────────────────────────────────────── */}
      <section className="relative border-t border-white/5 bg-[#080808] py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            tagline="Got Questions?"
            title="Frequently Asked Questions"
            description="Everything you need to know about our AI creative agency and production process."
          />

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ─── 8. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080808] via-[#050505] to-[#0a0805]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a96e]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-4xl font-extralight leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Ready to Build Your Next <br />
            <span className="bg-gradient-to-r from-[#c8a96e] via-[#e8d5a8] to-[#ffffff] bg-clip-text text-transparent font-normal">
              Blockbuster AI Commercial?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-10 max-w-xl text-base font-light text-white/50 md:text-lg"
          >
            Schedule a creative consultation to discuss your project requirements and receive a custom video concept proposal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <MagneticButton href="/contact" variant="primary" size="lg">
              Start Your Project Now →
            </MagneticButton>
            <MagneticButton href="/portfolio" variant="secondary" size="lg">
              Explore Portfolio
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-8 text-center"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-sm font-light text-white/60 hover:text-white"
              >
                ✕ Close
              </button>
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-4 text-4xl">🎬</div>
                <h3 className="mb-2 text-2xl font-light text-white">{selectedVideo}</h3>
                <p className="text-sm font-light text-[#c8a96e]">
                  Interactive AI Reel Preview Mode
                </p>
                <p className="mt-4 text-xs font-light text-white/40">
                  Full 4K ProRes master file available upon client request.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
