"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/data/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#c8a96e]/15 hover:bg-white/[0.04]"
    >
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Stars */}
        <div className="mb-6 flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c8a96e" className="opacity-80">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="mb-8 text-sm font-light leading-relaxed text-white/60 italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-[#c8a96e]/20 to-[#8b5cf6]/20">
            <div className="flex h-full w-full items-center justify-center text-sm font-light text-[#c8a96e]">
              {testimonial.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">{testimonial.name}</p>
            <p className="text-xs font-light text-white/30">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
