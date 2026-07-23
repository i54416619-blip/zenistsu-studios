"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[#c8a96e] to-[#e8d5a8] text-[#050505] font-medium hover:shadow-[0_0_40px_rgba(200,169,110,0.3)]",
    secondary:
      "border border-[#c8a96e]/30 bg-transparent text-[#c8a96e] hover:bg-[#c8a96e]/10 hover:border-[#c8a96e]/60",
    ghost:
      "bg-transparent text-white/60 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs tracking-wider",
    md: "px-7 py-3 text-sm tracking-wider",
    lg: "px-10 py-4 text-sm tracking-[0.15em]",
  };

  // Glow intensity
  const glowOpacity = useTransform(springX, [-10, 0, 10], [0.8, 0.5, 0.8]);

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <Link
          href={href}
          className={cn(
            "inline-flex items-center justify-center rounded-full transition-all duration-300",
            variants[variant],
            sizes[size],
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <motion.button
          type={type}
          onClick={onClick}
          style={variant === "primary" ? { boxShadow: useTransform(glowOpacity, (v) => `0 0 ${v * 40}px rgba(200,169,110,${v * 0.3})`) } : undefined}
          className={cn(
            "inline-flex items-center justify-center rounded-full transition-all duration-300",
            variants[variant],
            sizes[size],
            className
          )}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );

  return content;
}
