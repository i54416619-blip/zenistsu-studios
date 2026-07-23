"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import MagneticButton from "@/components/MagneticButton";
import { portfolioProjects, portfolioCategories, type PortfolioProject } from "@/data/content";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-28 px-6 lg:px-8 text-white">
      {/* Background illumination */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c8a96e]/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tagline="Our Work"
          title="Portfolio & Case Studies"
          description="Explore our high-impact AI advertisements, real estate films, avatars, and commercial campaigns."
        />

        {/* Filter Tabs */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-xs font-light tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "border border-[#c8a96e]/60 bg-[#c8a96e]/15 text-[#c8a96e] shadow-[0_0_20px_rgba(200,169,110,0.2)]"
                  : "border border-white/10 bg-transparent text-white/50 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-xl">
          <h3 className="mb-4 text-3xl font-light text-white">Have a specific vision in mind?</h3>
          <p className="mx-auto mb-8 max-w-xl text-sm font-light text-white/50">
            We build custom AI video pipelines for any product, property, or service. Talk to our creative team today.
          </p>
          <MagneticButton href="/contact" variant="primary" size="lg">
            Request Custom Concept →
          </MagneticButton>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 md:p-10 text-left"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-sm font-light text-white/60 hover:text-white"
              >
                ✕ Close
              </button>

              <div className="mb-4">
                <span className="rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-3 py-1 text-xs font-light text-[#c8a96e]">
                  {selectedProject.category}
                </span>
              </div>

              <h2 className="mb-2 text-3xl font-light text-white">{selectedProject.title}</h2>
              <p className="mb-6 text-sm font-light text-white/40">Client: {selectedProject.client}</p>

              {/* Video preview simulation container */}
              <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#151515] flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a96e]/20 text-[#c8a96e]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm font-light text-white/80">Cinematic Master Video Stream</p>
                <p className="text-xs font-light text-white/40 mt-1">
                  AI Generated • 4K HDR • Color Graded
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="mb-2 text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase">
                  Project Overview
                </h4>
                <p className="text-sm font-light leading-relaxed text-white/70">
                  {selectedProject.description}
                </p>
              </div>

              {/* Results */}
              <div className="mb-6 rounded-xl border border-[#c8a96e]/20 bg-[#c8a96e]/5 p-6">
                <h4 className="mb-1 text-xs font-medium tracking-[0.2em] text-[#c8a96e] uppercase">
                  Measured Performance & Impact
                </h4>
                <p className="text-lg font-light text-white">{selectedProject.results}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-light text-white/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
