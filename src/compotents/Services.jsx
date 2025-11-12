import React, { useState } from "react";
import { motion } from "framer-motion";

// Icon components as inline SVGs
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const LaptopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const SmartphoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const TerminalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

// Floating Particle Component
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

const ServiceCard = ({ title, description, icon: Icon, index, tags }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-500 "></div>

      {/* Card Content */}
      <div className="relative h-full bg-neutral-900 rounded-xl p-4 border border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col overflow-hidden">
        {/* Floating particles - only show on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <Particle key={i} delay={i * 0.2} />
            ))}
          </div>
        )}

        {/* Icon Container */}
        <div className="mb-4 relative z-10">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.8 }}
            className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/50"
          >
            {/* Icon with drop shadow */}
            <motion.div
              animate={{
                filter: isHovered
                  ? "drop-shadow(0 0 12px rgba(6, 182, 212, 0.8))"
                  : "drop-shadow(0 0 0px rgba(6, 182, 212, 0))",
              }}
              transition={{ duration: 0.3 }}
              className="text-cyan-400 relative z-10"
            >
              <Icon />
            </motion.div>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300 relative z-10">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow relative z-10">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="px-2.5 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-b-xl origin-left"
        />
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Full Stack Developer",
      icon: CodeIcon,
      description:
        "Building end-to-end web applications with modern technologies. Expertise in both frontend and backend development, from database design to user interfaces.",
      tags: ["MERN", "MEAN", "Next.js", "WordPress"],
    },
    {
      title: "UI/UX Developer",
      icon: LaptopIcon,
      description:
        "Creating intuitive and responsive user interfaces with a focus on user experience. Implementing modern design principles and ensuring accessibility.",
      tags: ["Design", "Responsive", "A11y"],
    },
    {
      title: "Mobile App Developer",
      icon: SmartphoneIcon,
      description:
        "Developing cross-platform mobile applications using React Native and Flutter. Creating seamless mobile experiences for iOS and Android platforms.",
      tags: ["iOS", "Android", "Cross-platform"],
    },
    {
      title: "Software Developer",
      icon: TerminalIcon,
      description:
        "Building robust and scalable software solutions. Expertise in system architecture, clean code practices, and software design patterns.",
      tags: ["Architecture", "Patterns", "Scalable"],
    },
    {
      title: "Database Engineer",
      icon: DatabaseIcon,
      description:
        "Designing and implementing efficient databases using SQL Server, MySQL, and Oracle DB. Specializing in database optimization, query performance, and ensuring data integrity.",
      tags: ["SQL", "Optimization", "Data"],
    },
    {
      title: "Quality Assurance Engineer",
      icon: ShieldIcon,
      description:
        "Ensuring software quality through comprehensive testing strategies, including manual, automated, and performance testing across different platforms.",
      tags: ["Testing", "Automation", "QA"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      id="services"
      className="relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base mt-6"
          >
            Comprehensive software development solutions tailored to bring your
            ideas to life
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesGrid;
