"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix,
  label,
  duration = 2,
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (end - start) + start);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center">
        <span className="text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-6xl">
          {suffix === "M+" ? "$" : ""}
          {count}
        </span>
        <span className="ml-1 text-lg font-light text-[#c8a96e] md:text-xl">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-xs font-light tracking-[0.15em] text-white/40 uppercase">
        {label}
      </p>
    </motion.div>
  );
}
