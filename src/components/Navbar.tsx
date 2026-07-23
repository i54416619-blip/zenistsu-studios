"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/content";
import { navbarVariants, mobileMenuVariants, fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-lg font-light tracking-[0.25em] text-white transition-colors group-hover:text-[#c8a96e]">
                ZENISTSU
              </span>
              <span className="text-[9px] font-light tracking-[0.45em] text-[#c8a96e]">
                STUDIOS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-light tracking-wider transition-colors duration-300",
                  pathname === link.href
                    ? "text-[#c8a96e]"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#c8a96e]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-6 py-2.5 text-sm font-light tracking-wider text-[#c8a96e] transition-all duration-300 hover:border-[#c8a96e]/60 hover:bg-[#c8a96e]/20 lg:block"
          >
            Start a Project
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-white transition-colors"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block h-px w-6 bg-white transition-colors"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-white transition-colors"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[105] flex flex-col items-center justify-center bg-[#050505]/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={fadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "text-3xl font-light tracking-wider transition-colors",
                      pathname === link.href
                        ? "text-[#c8a96e]"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-8 py-3 text-sm font-light tracking-wider text-[#c8a96e]"
                >
                  Start a Project
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
