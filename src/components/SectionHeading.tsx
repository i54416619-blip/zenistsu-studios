"use client";

import { motion } from "framer-motion";
import { fadeUp, lineReveal } from "@/lib/animations";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  tagline,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {tagline && (
        <motion.span
          variants={fadeUp}
          className="mb-4 inline-block text-xs font-medium tracking-[0.3em] text-[#c8a96e] uppercase"
        >
          {tagline}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={lineReveal}
        className={`mt-6 h-px w-16 bg-gradient-to-r from-[#c8a96e] to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-6 text-base font-light leading-relaxed ${
            light ? "text-white/50" : "text-white/50"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
