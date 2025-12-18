import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Fproject1 from "../assets/projects/FProject2.png";
import Fproject2 from "../assets/projects/FProject1.png";
import Fproject3 from "../assets/projects/FProject3.png";

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Nova Corp (Pvt) Ltd",
    period: "Feb 2025 – Aug 2025",
    description:
      "As a Software Engineer Intern, I developed and debugged web applications using MERN and PHP, focusing on user interfaces and RESTful APIs. I performed unit testing, contributed to Agile sprints and code reviews, and assisted in debugging and deployment to ensure reliable delivery.",
  },
  {
    id: 2,
    role: "Contract - Full-Stack Web Developer",
    company: "illumin-labs",
    period: "Dec 2024 – Present",
    description:
      "As a Contract Web Developer, I design, develop, and maintain web applications, ensuring responsive and user-friendly interfaces. My work involves building and testing features, debugging issues, and optimizing performance for seamless functionality. I actively contribute to the full development cycle, from planning and design to deployment.",
  },
  {
    id: 3,
    role: "Contract Web Developer (WordPress & Next.js)",
    company: "CODEMAS Technologies",
    period: "Nov 2025 – Present",
    description:
      "As a Contract WordPress and Next.js Developer, I develop and maintain custom WordPress themes and plugins while building modern, responsive web interfaces using Next.js. My responsibilities include website optimization, implementing front end and back end features, troubleshooting technical issues, and ensuring timely delivery of tasks. I contribute throughout the full development lifecycle, from planning and development to testing and deployment."
  }
];

const Particle = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -100], 
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

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative px-4 sm:px-6 md:px-12 lg:px-28 pt-8 sm:pt-16 lg:pt-20 max-w-screen overflow-hidden mt-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8 mt-8 sm:mt-0"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          style={{ marginTop: "-40px" }}
          className="text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center"
        >
          My{" "}
          <span
            style={{
              background:
                "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Experience
          </span>
        </motion.h1>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 sm:space-y-8 mb-12 sm:mb-12 lg:mb-16 max-w-5xl mx-auto"
      >
        {experiences.map((exp, index) => (
          <motion.div key={exp.id} variants={itemVariant} className="relative">
            {/* Timeline connector */}
            {index !== 0 && (
              <div className="absolute left-5 sm:left-6 lg:left-8 -top-6 sm:-top-8 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
            )}

            {/* Experience Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg sm:rounded-xl opacity-30 group-hover:opacity-25 blur transition duration-300"></div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>

              <div className="relative bg-neutral-900 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-800 hover:border-cyan-400/50 transition duration-300 overflow-hidden">
                {/* Particles */}
                {[...Array(5)].map((_, i) => (
                  <Particle key={i} delay={i * 0.5} />
                ))}

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
                    <FaBriefcase className="text-neutral-900 text-base sm:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 break-words">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm sm:text-base lg:text-lg break-words">
                      {exp.company}
                    </p>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1 mb-2 sm:mb-3">
                      {exp.period}
                    </p>
                    <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
                {/* Bottom accent line */}
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-neutral-800">
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-400/50 to-teal-400/50 rounded-full group-hover:from-cyan-400 group-hover:to-teal-400 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
