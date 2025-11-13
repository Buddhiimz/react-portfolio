import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";
import FProject1 from "../assets/projects/FProject1.png";
import FProject2 from "../assets/projects/FProject2.png";
import FProject3 from "../assets/projects/FProject3.png";

// Your projects data
const PROJECTS = [
  {
    id: 1,
    title: "Planet First Web Application",
    description:
      "Developed an eco-focused web platform to promote sustainable living and user engagement. Built and deployed a Carbon Footprint Calculator, enabling 200+ users to track sustainability. Integrated PHPMailer for contact form and FPDF for automated PDF report generation.",
    image: FProject1,
    technologies: [
      "HTML",
      "Bootstrap",
      "PHP",
      "JavaScript",
      "PHPMailer",
      "FPDF",
    ],
    link: "https://theplanetfirst.org/",
    category: "AI & Web Development",
  },
  {
    id: 2,
    title: "illumin-labs Portfolio Web Application",
    description:
      "Developed a responsive portfolio website with modern UI/UX using React and Tailwind CSS. Implemented project showcase, smooth animations, and integrated contact form with EmailJS. Improved Lighthouse performance score by 20% through image compression.",
    image: FProject2,
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "JavaScript",
      "EmailJS",
      "Framer Motion",
    ],
    link: "https://illuminlabs.net/",
    category: "Full Stack Development",
  },
  {
    id: 3,
    title: "GreenGleam Cleaning Platform",
    description:
      "Built a booking management platform with flexible scheduling, real-time validation, and checkout integration, enabling 100+ users to book services with a 99% success rate. Implemented service-type-based discount logic and integrated Google Review widget for customer feedback.",
    image: FProject3,
    technologies: [
      "HTML",
      "PHP",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "WordPress",
    ],
    link: "https://greengleam.com.au/",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Orchid Species Identification System",
    description:
      "Developed a deep learning–based web application capable of identifying 52 orchid species from uploaded images. Integrated CNN model (InceptionV3) using transfer learning for high accuracy and real-time predictions. Built an Angular frontend for interactive image uploads and result visualization.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
    technologies: [
      "Angular",
      "TensorFlow",
      "Keras",
      "Flask",
      "Python",
      "Deep Learning",
    ],
    link: "https://github.com/Buddhiimz/Orchid-Species-Identifier",
    category: "AI & Web Development",
  },
  {
    id: 5,
    title: "Restaurant Management Service – Food Delivery System",
    description:
      "Developed a microservice-based food delivery platform with restaurant registration, menu management, and role-based access. Implemented owner-level logic, admin approval workflows, and an API Gateway for service routing. Built the frontend using React & Tailwind CSS, and performed end-to-end testing with Cypress.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Cypress",
    ],
    link: "https://github.com/Y3-S2-project-group",
    category: "Full Stack Development",
  },
  {
    id: 6,
    title: "FieldExpert - Farm Management System",
    description:
      "Developed a web application to help farmers manage their agricultural data, such as crop records, pest and disease information. Implemented a Sales and Distribution function to streamline the sales process and enhance distribution efficiency.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    technologies: ["MERN Stack Technology", "Tailwind CSS", "ChartJs" , "EmailJS"],
    link: "https://github.com/Y3-S1-project-group",
    category: "Web Development",
  },
  {
    id: 7,
    title: "MediCare - Hospital Management Web Application",
    description:
      "Developed a full-stack web application using the MERN stack to manage medical tasks such as patient records, appointments, and prescriptions. Implemented an Appointment Management function that allows users to view available times for doctors upon selection, enhancing scheduling efficiency.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    technologies: ["MERN Stack Technology", "Tailwind CSS", "ChartJs" , "EmailJS"],
    link: "https://github.com/Y3-S1-project-group",
    category: "Web Development",
  },
  {
    id: 8,
    title: "OceanicCare - Mobile Application",
    description:
      "Developed a mobile application focused on marine conservation, featuring functionalities such as a Marine Life Encyclopedia, Beach Cleanup Events, Sustainable Seafood Guide, and Ocean Pollution.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    technologies: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/Buddhiimz/OceanicCare_App",
    category: "Mobile Development",
  },
  {
    id: 9,
    title: "Angular Login System",
    description:
      "Developed a full-stack web application with an Angular frontend featuring user registration, login, dashboard, and password recovery modules. Implemented a secure .NET backend using JWT authentication and password hashing. Designed and optimized an MSSQL database with stored procedures for efficient data management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    technologies: ["Angular", "TypeScript", ".NET", "MSSQL", "JWT"],
    link: "https://github.com/Buddhiimz/Auth-fe",
    category: "Web Development",
  },
];

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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

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
      className="px-4 sm:px-6 lg:px-8 relative overflow-hidden py-10"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                {/* Particle Effect - Shows only when this card is hovered */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                    {[...Array(8)].map((_, i) => (
                      <Particle key={i} delay={i * 0.2} />
                    ))}
                  </div>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden h-48 sm:h-56 bg-neutral-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent flex items-center justify-center gap-4"
                  >
                    {/* Show External Link for first 3 projects, only GitHub for the rest */}
                    {project.id <= 3 ? (
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

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-neutral-900/90 backdrop-blur-sm rounded-full border border-cyan-400/30">
                    <span className="text-cyan-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm mb-4 leading-6 flex-1 text-left">
                    {project.description}
                  </p>

                  {/* Technologies */}
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
                    <div className="flex items-center gap-2 text-neutral-500 text-xs">
                      <FaCode className="text-cyan-400" />
                      <span>Open Source</span>
                    </div>
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