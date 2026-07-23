"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import type { Service } from "@/data/content";

interface ServiceCardProps {
  service: Service;
  index: number;
  compact?: boolean;
}

export default function ServiceCard({ service, index, compact = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <GlassCard padding={compact ? "md" : "lg"}>
        <div className="mb-4 text-3xl">{service.icon}</div>
        <h3 className="mb-3 text-lg font-medium text-white/90">
          {service.title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-white/40">
          {compact ? service.shortDescription : service.longDescription}
        </p>
        {!compact && (
          <>
            <div className="mt-6 space-y-2">
              {service.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#c8a96e]" />
                  <span className="text-xs font-light text-white/50">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
              <span className="text-xs font-light tracking-wider text-[#c8a96e]">
                {service.priceRange}
              </span>
              <span className="text-xs font-light text-white/30 transition-colors group-hover:text-[#c8a96e]">
                Learn more →
              </span>
            </div>
          </>
        )}
      </GlassCard>
    </motion.div>
  );
}
