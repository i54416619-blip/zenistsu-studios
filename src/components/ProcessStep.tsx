"use client";

import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "@/data/content";

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isLast: boolean;
}

export default function ProcessStepComponent({ step, index, isLast }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 text-sm font-light text-[#c8a96e]">
          {step.number}
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            className="mt-2 h-full w-px origin-top bg-gradient-to-b from-[#c8a96e]/30 to-transparent"
          />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? "" : ""}`}>
        <div className="mb-1 flex items-center gap-3">
          <h3 className="text-xl font-light text-white/90">{step.title}</h3>
          <span className="rounded-full border border-white/10 px-3 py-0.5 text-[10px] font-light tracking-wider text-white/30">
            {step.duration}
          </span>
        </div>
        <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-white/40">
          {step.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {step.deliverables.map((d, i) => (
            <span
              key={i}
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[11px] font-light text-white/30"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
