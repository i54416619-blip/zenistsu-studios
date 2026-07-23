"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadingVariants, loadingLogoVariants, loadingBarVariants } from "@/lib/animations";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          variants={loadingVariants}
          initial="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Logo reveal */}
          <motion.div
            variants={loadingLogoVariants}
            initial="hidden"
            animate="visible"
            className="mb-12 flex flex-col items-center"
          >
            <div className="mb-4 text-4xl font-light tracking-[0.3em] text-white md:text-5xl">
              ZENISTSU
            </div>
            <div className="text-xs font-light tracking-[0.5em] text-[#c8a96e]">
              STUDIOS
            </div>
          </motion.div>

          {/* Loading bar */}
          <div className="h-[1px] w-48 overflow-hidden bg-white/10">
            <motion.div
              variants={loadingBarVariants}
              initial="hidden"
              animate="visible"
              className="h-full w-full origin-left bg-gradient-to-r from-[#c8a96e] to-[#e8d5a8]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
