"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          className={cn(
            "group overflow-hidden rounded-xl border transition-all duration-300",
            openIndex === index
              ? "border-[#c8a96e]/20 bg-white/[0.03]"
              : "border-white/[0.06] bg-transparent hover:border-white/10"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="pr-8 text-sm font-light leading-relaxed text-white/80 md:text-base">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#c8a96e]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0V14" stroke="currentColor" strokeWidth="1" />
                <path d="M0 7H14" stroke="currentColor" strokeWidth="1" />
              </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="border-t border-white/5 px-6 py-5">
                  <p className="text-sm font-light leading-relaxed text-white/40">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
