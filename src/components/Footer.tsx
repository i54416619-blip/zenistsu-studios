"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, contactInfo } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505]">
      {/* Gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link href="/" className="group inline-flex flex-col">
              <span className="text-xl font-light tracking-[0.25em] text-white transition-colors group-hover:text-[#c8a96e]">
                ZENISTSU
              </span>
              <span className="text-[9px] font-light tracking-[0.45em] text-[#c8a96e]">
                STUDIOS
              </span>
            </Link>
            <p className="mt-6 text-sm font-light leading-relaxed text-white/40">
              Cinematic AI productions that captivate audiences and drive
              revenue. Los Angeles, California.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/40 transition-colors hover:text-[#c8a96e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Cinematic AI Ads",
                "Luxury Commercials",
                "Real Estate Films",
                "AI Avatars",
                "UGC Ads",
                "Brand Storytelling",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm font-light text-white/40 transition-colors hover:text-[#c8a96e]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-light text-white/40 transition-colors hover:text-[#c8a96e]"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className="text-sm font-light text-white/40">
                  {contactInfo.phone}
                </span>
              </li>
              <li>
                <span className="text-sm font-light text-white/40">
                  {contactInfo.location}
                </span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6 flex gap-4">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-light tracking-wider text-white/30 transition-colors hover:text-[#c8a96e]"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs font-light text-white/20">
            © {new Date().getFullYear()} Zenistsu Studios. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs font-light text-white/20 transition-colors hover:text-white/40"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-light text-white/20 transition-colors hover:text-white/40"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
