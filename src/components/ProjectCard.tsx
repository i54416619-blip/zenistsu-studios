"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/data/content";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl"
      data-cursor-hover
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
        {/* Placeholder gradient for thumbnail */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.thumbnail})`,
              backgroundColor: "#151515",
            }}
          />
        </motion.div>

        {/* Play button overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full border border-[#c8a96e]/20 bg-[#c8a96e]/10 px-3 py-0.5 text-[10px] font-light tracking-wider text-[#c8a96e]">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-medium text-white">{project.title}</h3>
        <p className="text-sm font-light text-white/40">{project.client}</p>

        {/* Results - show on hover */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          <p className="text-xs font-light text-[#c8a96e]">{project.results}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
