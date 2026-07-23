"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function MarqueeText({
  text,
  speed = 25,
  className = "",
}: MarqueeTextProps) {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`mx-4 text-6xl font-extralight tracking-wider text-white/[0.04] uppercase md:text-7xl lg:text-8xl ${className}`}
          >
            {text}
            <span className="mx-8 inline-block text-[#c8a96e]/20">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
