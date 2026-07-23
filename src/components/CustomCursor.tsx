"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  const animate = useCallback(() => {
    const { x, y } = mousePos.current;

    // Dot follows exactly
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    }

    // Ring follows with lerp
    ringPos.current.x += (x - ringPos.current.x) * 0.12;
    ringPos.current.y += (y - ringPos.current.y) * 0.12;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0)`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check if device has a pointer (not touch-only)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(raf.current);
    };
  }, [animate, isVisible]);

  // Only render on non-touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className={`rounded-full bg-[#c8a96e] transition-all duration-300 ${
            isHovering ? "h-3 w-3 opacity-80" : "h-2 w-2 opacity-100"
          }`}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? "h-14 w-14 -translate-x-[7px] -translate-y-[7px] border-[#c8a96e]/60 bg-[#c8a96e]/5"
              : "h-10 w-10 border-white/20"
          }`}
        />
      </motion.div>
    </>
  );
}
