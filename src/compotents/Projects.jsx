import React, { useRef, useEffect, useState } from 'react';
import { PROJECTS } from '../constants/index.js';
import { FaGithub } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const firstProjectRef = useRef(null);
  const lastProjectRef = useRef(null);
  const [lineStart, setLineStart] = useState(0);
  const [lineEnd, setLineEnd] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Function to calculate and update line positions
  const updateLinePositions = () => {
    if (firstProjectRef.current && lastProjectRef.current && ref.current) {
      const containerRect = ref.current.getBoundingClientRect();
      const firstProjectRect = firstProjectRef.current.getBoundingClientRect();
      const lastProjectRect = lastProjectRef.current.getBoundingClientRect();

      // Calculate relative positions
      const start = firstProjectRect.top - containerRect.top + 110;
      const end = lastProjectRect.bottom - firstProjectRect.top - 445;

      setLineStart(start);
      setLineEnd(Math.max(end, 100)); // Ensure minimum height
    }
  };

  useEffect(() => {
    // Initial calculation with delay
    const timeoutId = setTimeout(updateLinePositions, 500);

    // Add resize listener
    window.addEventListener('resize', updateLinePositions);

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateLinePositions();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateLinePositions);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Handle image loading
  useEffect(() => {
    const images = ref.current?.getElementsByTagName('img') || [];
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        updateLinePositions();
      }
    };

    Array.from(images).forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      Array.from(images).forEach(img => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  return (
    <div id="project"
    className="pb-4 mt-6 px-4 sm:px-6 md:px-8" ref={ref}>
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl text-center mb-8 font-bold"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <span
          className="text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text",
          }}
        >
          Projects
        </span>
      </motion.h1>

      {/* Projects Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 to-teal-400"
          style={{
            top: `${lineStart}px`,
            height: `${lineEnd}px`,
            scaleY: scrollYProgress,
            transformOrigin: "top",
            opacity: lineEnd > 0 ? 1 : 0,
          }}
        />

        {/* Projects */}
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === PROJECTS.length - 1;
          
          return (
            <motion.div
              key={index}
              className="mb-[35px] px-4 sm:px-0"
              ref={index === 0 ? firstProjectRef : isLast ? lastProjectRef : null}
            >
              <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6`}
              >
                {/* Project Card Container with Dot */}
                <div
                  className={`w-full lg:w-5/12 relative ${isEven ? "lg:pr-8" : "lg:pl-8"}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden lg:block absolute top-1/2 ${isEven ? "-right-4" : "-left-4"} -translate-y-1/2`}
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 relative z-10">
                      <div className="absolute inset-0.5 rounded-full bg-neutral-900" />
                    </div>
                  </div>

                  {/* Project Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      transform: "scale(0.95)",
                    }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "scale(1)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 30px rgba(14, 165, 233, 0.5)",
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="bg-neutral-900/50 p-4 sm:p-6 rounded-lg backdrop-blur-sm border border-neutral-800 relative overflow-hidden"
                  >
                    {/* Highlight overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400"
                    />

                    {/* Project Image */}
                    <motion.img
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      src={project.image}
                      alt={project.title || "Project Image"}
                      className="w-full h-45 object-cover rounded-lg mb-4 relative z-10"
                    />

                    {/* Project Details */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative z-10"
                    >
                      {/* Project Title */}
                      <h6
                        className="text-lg font-semibold mb-2 text-white"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {project.title}
                      </h6>

                      {/* Project Description */}
                      <p
                        className="text-neutral-400 mb-3 text-sm"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.3 + techIndex * 0.1,
                            }}
                            className="px-2 py-0.5 rounded-full text-white border border-gray-600 rounded-lg p-4"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span className="ml-2 text-sm">View Code</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;