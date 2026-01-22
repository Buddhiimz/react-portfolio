import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

// Particle Component
const Particle = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -200],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
    }}
    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      bottom: 0,
    }}
  />
);

const Projects = ({ limit = null, showViewMore = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      id="project"
      className="px-4 sm:px-6 lg:px-8 relative overflow-hidden py-4 sm:py-8"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 relative z-10"
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>

        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Explore my collection of academic and personal projects showcasing
          various technologies and skills
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>

              <div className="relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                    {[...Array(8)].map((_, i) => (
                      <Particle key={i} delay={i * 0.2} />
                    ))}
                  </div>
                )}

                <div className="relative overflow-hidden h-48 sm:h-56 bg-neutral-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent flex items-center justify-center gap-4"
                  >
                    {project.id <= 5 ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-neutral-900 hover:bg-teal-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    ) : (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-neutral-900 hover:bg-cyan-300 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                    )}
                  </motion.div>

                  <div className="absolute top-3 right-3 px-3 py-1 bg-neutral-900/90 backdrop-blur-sm rounded-full border border-cyan-400/30">
                    <span className="text-cyan-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm mb-4 leading-6 flex-1 text-left">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-2.5 py-1 text-[10px] sm:text-xs font-medium bg-gradient-to-r from-cyan-400/10 to-teal-400/10 text-cyan-300 rounded-md border border-cyan-400/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
                    {project.id <= 5 ? (
                      <div className="flex items-center gap-2 px-3 py-1.5  rounded-full border border-white/30">
                        <FaCode className="text-white text-sm" />
                        <span className="text-white text-xs font-semibold">
                          Client Project
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-neutral-500 text-xs">
                        <FaCode className="text-neutral-600" />
                        <span>Open Source</span>
                      </div>
                    )}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-cyan-400 text-xs font-medium flex items-center gap-1 cursor-pointer hover:text-teal-400 transition-colors"
                    >
                      View Details
                      <FaExternalLinkAlt className="text-[10px]" />
                    </motion.a>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0 group-hover:via-teal-400 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View More Button */}
      {showViewMore && (
        <div className="text-center mt-10 relative z-10">
          <button
            onClick={() => navigate("/portfolio")}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-neutral-900 font-semibold"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 relative z-10"
        >
          <FaLayerGroup className="text-6xl text-neutral-700 mx-auto mb-4" />
          <p className="text-neutral-400 text-lg">
            No projects found in this category
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
