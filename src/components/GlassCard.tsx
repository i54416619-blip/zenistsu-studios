"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl transition-all duration-500",
        hover && "hover:border-[#c8a96e]/20 hover:bg-white/[0.04]",
        paddings[padding],
        className
      )}
    >
      {/* Gradient glow on hover */}
      {hover && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c8a96e]/5 via-transparent to-[#8b5cf6]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
