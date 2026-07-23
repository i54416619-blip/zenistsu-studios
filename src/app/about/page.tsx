"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import MagneticButton from "@/components/MagneticButton";
import MarqueeText from "@/components/MarqueeText";
import { about, teamMembers, values } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-28 px-6 lg:px-8 text-white">
      {/* Background illumination */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c8a96e]/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tagline="About Zenistsu Studios"
          title="The Future of Cinematic Storytelling"
          description="We are a hybrid team of Hollywood film directors, AI researchers, and brand strategists redefining commercial video production."
        />

        {/* Mission Manifesto Hero Card */}
        <div className="mb-24">
          <GlassCard padding="lg" className="border-[#c8a96e]/20 bg-[#c8a96e]/5">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] text-[#c8a96e] uppercase">
                Our Mission
              </span>
              <h2 className="mb-6 text-2xl font-light leading-relaxed text-white md:text-3xl lg:text-4xl">
                &ldquo;{about.mission}&rdquo;
              </h2>
              <p className="text-sm font-light leading-relaxed text-white/60">
                {about.story}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Values Grid */}
        <div className="mb-28">
          <SectionHeading
            tagline="Guiding Principles"
            title="Our Core Values"
            description="The relentless standards behind every frame we produce."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlassCard className="h-full" padding="md">
                  <div className="mb-4 text-[#c8a96e] font-light text-2xl">0{i + 1}</div>
                  <h3 className="mb-2 text-lg font-light text-white">{v.title}</h3>
                  <p className="text-xs font-light leading-relaxed text-white/50">{v.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Showcase */}
        <div className="mb-28">
          <SectionHeading
            tagline="Leadership"
            title="Meet the Visionaries"
            description="Our team combines decades of film festival accolades with world-class AI engineering."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard padding="md" className="h-full">
                  <div className="mb-6 aspect-square w-full overflow-hidden rounded-xl bg-[#151515]">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="mb-3 text-xs font-light text-[#c8a96e]">{member.role}</p>
                  <p className="text-xs font-light leading-relaxed text-white/50">{member.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee & Cloud */}
        <div className="mb-24">
          <SectionHeading
            tagline="Technology"
            title="Our Proprietary AI Stack"
            description="We leverage the latest Generative AI, Neural Rendering, and VFX engines."
          />

          <MarqueeText text="Runway Gen-3 • Midjourney v6 • Stable Diffusion XL • ElevenLabs • DaVinci Resolve • Unreal Engine 5" speed={25} />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {about.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-light tracking-wider text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-xl">
          <h3 className="mb-4 text-3xl font-light text-white">Ready to elevate your brand story?</h3>
          <p className="mx-auto mb-8 max-w-xl text-sm font-light text-white/50">
            Let’s discuss your vision and build a custom AI production strategy.
          </p>
          <MagneticButton href="/contact" variant="primary" size="lg">
            Connect With Our Team →
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
