"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "word" | "char";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  type = "word",
}: AnimatedTextProps) {
  const items = type === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "word" ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: 40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap ${className}`}
      style={{ perspective: "600px" }}
    >
      {items.map((segment, i) => (
        <motion.span
          key={i}
          variants={item}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {segment}
          {type === "word" && i < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
