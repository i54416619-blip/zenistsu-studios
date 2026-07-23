"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.3,
  overlay = true,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] h-[140%] w-full"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-label={alt}
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      )}
    </div>
  );
}
