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
    role: "Contract - Web Developer",
    company: "illumin-labs",
    period: "Dec 2024 – Present",
    description:
      "As a Contract Web Developer, I design, develop, and maintain web applications, ensuring responsive and user-friendly interfaces. My work involves building and testing features, debugging issues, and optimizing performance for seamless functionality. I actively contribute to the full development cycle, from planning and design to deployment.",
  },
];

const projects = [
  {
    id: 1,
    name: "Planet First Web Application",
    image: Fproject2,
    link: "https://theplanetfirst.org/",
    description:
      "Developed an eco-focused web platform to promote sustainable living and user engagement. Built and deployed a Carbon Footprint Calculator, enabling 200+ users to track sustainability. Integrated PHPMailer for contact form and FPDF for automated PDF report generation.",
    technologies: [
      "HTML",
      "Bootstrap",
      "PHP",
      "JavaScript",
      "PHPMailer",
      "FPDF",
    ],
  },
  {
    id: 2,
    name: "illumin-labs Portfolio Web Application",
    image: Fproject1,
    link: "https://illuminlabs.net/",
    description:
      "Developed a responsive portfolio website with modern UI/UX using React and Tailwind CSS. Implemented project showcase, smooth animations, and integrated contact form with EmailJS. Improved Lighthouse performance score by 20% through image compression.",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "JavaScript",
      "EmailJS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    name: "GreenGleam Cleaning Platform",
    image: Fproject3,
    link: "https://greengleam.com.au/",
    description:
      "Built a booking management platform with flexible scheduling, real-time validation, and checkout integration, enabling 100+ users to book services with a 99% success rate. Implemented service-type-based discount logic and integrated Google Review widget for customer feedback.",
    technologies: [
      "HTML",
      "PHP",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "WordPress",
    ],
  },
];

const Particle = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -100], // Moves upward from bottom to top
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
      bottom: 0, // Starts at bottom
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

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-2 sm:px-4 ">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-full px-1 sm:px-2">
              {/* Project Card */}
              <div className="group rounded-lg sm:rounded-xl border border-neutral-800 overflow-hidden max-w-3xl mx-auto shadow-lg relative">
                {/* Glow Effect */}

                <div className="relative flex flex-col overflow-hidden">
                  {/* Particles */}
                  {[...Array(5)].map((_, i) => (
                    <Particle key={i} delay={i * 0.5} />
                  ))}

                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 h-40 sm:h-48 lg:h-56">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center mb-3">
                            <span className="text-xl sm:text-2xl">🚀</span>
                          </div>
                          <p className="text-neutral-400 font-medium text-xs sm:text-sm">
                            Project Screenshot
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Description */}
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 text-justify">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium bg-gradient-to-r from-cyan-400/10 to-teal-400/10 text-cyan-300 rounded-full border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 border-t border-neutral-800 gap-2 sm:gap-0">
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base mb-1">
                          {project.name}
                        </h4>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-xs font-medium flex items-center gap-1.5 sm:gap-2 transition-colors"
                        >
                          View Project{" "}
                          <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Hidden on very small screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 border border-neutral-700 rounded-full shadow-lg items-center justify-center text-neutral-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:text-neutral-900 hover:border-transparent transition-all duration-300 z-10"
      >
        <FaChevronLeft className="text-sm sm:text-base" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 border border-neutral-700 rounded-full shadow-lg items-center justify-center text-neutral-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:text-neutral-900 hover:border-transparent transition-all duration-300 z-10"
      >
        <FaChevronRight className="text-sm sm:text-base" />
      </button>

      {/* Mobile Navigation Buttons */}
      <div className="flex sm:hidden justify-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-full shadow-lg flex items-center justify-center text-neutral-300 active:bg-gradient-to-r active:from-cyan-400 active:to-teal-400 active:text-neutral-900 transition-all duration-300"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-full shadow-lg flex items-center justify-center text-neutral-300 active:bg-gradient-to-r active:from-cyan-400 active:to-teal-400 active:text-neutral-900 transition-all duration-300"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-cyan-500 w-6 sm:w-8"
                : "bg-neutral-300 hover:bg-neutral-400 w-2 sm:w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative px-4 sm:px-6 md:px-12 lg:px-28 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 max-w-screen overflow-hidden"
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
        className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto"
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

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginTop: "-40px" }}
        className="text-center mb-6 sm:mb-8 mt-8 sm:mt-12"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent ">
            Projects
          </span>
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
      </motion.div>

      <ProjectCarousel />
    </div>
  );
};

export default Experience;
