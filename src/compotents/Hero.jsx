import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants/index.js";
import ProfilePic2 from "../assets/Profile2.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const name = "Buddhima Vilochana";

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: { x: 1, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const roles = [
  "I'm a Mobile Application Developer",
  "I'm a Software Engineer",
  "I'm a Full Stack Developer",
  "I'm a UI/UX Developer",
];

// Sequential Glitchy Role Display
const SequentialRoleDisplay = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    // Typing phase
    if (isTyping && charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    // Finished typing - start glitch after 2 seconds
    else if (isTyping && charIndex === currentRole.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setIsGlitching(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    // Glitching phase - disappear after 1 second
    else if (isGlitching) {
      const timeout = setTimeout(() => {
        setIsGlitching(false);
        setDisplayText("");
        setCharIndex(0);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isTyping, isGlitching, currentRoleIndex]);

  return (
    <div
      className="relative h-20 flex items-center justify-center lg:justify-start"
      style={{ marginTop: "-10px" }}
    >
      {/* Background scan lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${25 + i * 25}%`, left: 0, right: 0 }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center lg:items-start">
        <div className="relative h-16 flex items-center min-w-[300px] lg:min-w-[400px]">
          <AnimatePresence mode="wait">
            {displayText && (
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full"
              >
                {/* Glitch effect layers - only show when glitching */}
                {isGlitching && (
                  <>
                    <motion.div
                      className="absolute inset-0 text-3xl lg:text-4xl font-bold"
                      style={{
                        color: "#22d3ee",
                        textShadow: "-3px 0 #0ea5e9",
                      }}
                      animate={{
                        x: [-2, 2, -2, 3, -1],
                        y: [1, -1, 2, -2, 1],
                      }}
                      transition={{
                        duration: 0.2,
                        repeat: Infinity,
                      }}
                    >
                      {displayText}
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 text-3xl lg:text-4xl font-bold"
                      style={{
                        color: "#14b8a6",
                        textShadow: "3px 0 #06b6d4",
                      }}
                      animate={{
                        x: [2, -2, 3, -3, 1],
                        y: [-1, 1, -2, 2, -1],
                      }}
                      transition={{
                        duration: 0.2,
                        repeat: Infinity,
                      }}
                    >
                      {displayText}
                    </motion.div>
                  </>
                )}

                {/* Main text with letter-by-letter animation */}
                <h2 className="relative text-3xl lg:text-4xl font-bold">
                  {displayText.split("").map((char, index) => (
                    <motion.span
                      key={`${currentRoleIndex}-${index}`}
                      initial={{ opacity: 0, y: -20, scale: 0 }}
                      animate={
                        isGlitching
                          ? {
                              opacity: [1, 0, 1, 0, 1, 0],
                              scale: [1, 1.2, 0.8, 1.3, 0.9, 0],
                              filter: [
                                "blur(0px)",
                                "blur(2px)",
                                "blur(0px)",
                                "blur(3px)",
                                "blur(1px)",
                                "blur(5px)",
                              ],
                            }
                          : {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }
                      }
                      transition={
                        isGlitching
                          ? { duration: 0.8, ease: "easeInOut" }
                          : { duration: 0.3, delay: index * 0.05 }
                      }
                      style={{
                        background:
                          "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h2>

                {/* Scanline effect during glitch */}
                {isGlitching && (
                  <motion.div
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.3) 50%, transparent 100%)",
                    }}
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: 2,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
// Animated Stats Component
const AnimatedStats = () => {
  const stats = [
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
    { label: "Experience", value: 2, suffix: " Years" },
  ];

  return (
    <motion.div
      variants={container(0.4)}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-2 sm:gap-4 my-2 max-w-2xl w-full px-2 sm:px-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
          className="relative group"
        >
          <div className="text-center p-2 sm:p-4 rounded-lg border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r text-white from-cyan-400 to-teal-400 bg-clip-text text-transparent"
            >
              {stat.value}
              {stat.suffix}
            </motion.div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 sm:mt-2">
              {stat.label}
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div
      id="home"
      className="relative px-4 lg:px-0 max-w-screen overflow-hidden"
    >
      <div
        className="flex flex-col-reverse lg:flex-row flex-wrap"
        style={{ marginTop: "150px" }}
      >
        {/* Content Section */}
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <div
            className="flex flex-col items-center lg:items-start lg:ml-28 "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <motion.h1
              variants={container2}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl lg:text-6xl font-bold tracking-wide text-white text-center lg:text-left "
            >
              {name.split("").map((char, index) => (
                <motion.span key={index} variants={letter} className="mr-0.5">
                  {char === " " ? (
                    <>
                      <span className="hidden lg:inline">&nbsp;</span>
                      <br className="lg:hidden" />
                    </>
                  ) : (
                    char
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sequential Glitchy Role Display */}
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="w-full "
            >
              <SequentialRoleDisplay />
            </motion.div>

            {/* Animated Stats instead of content */}
            <AnimatedStats />

            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="relative flex w-full lg:w-3/5 items-center justify-center gap-4 mt-6 lg:mt-8 lg:ml-10 rounded-lg p-4"
              style={{
                border: "2px solid rgba(6, 182, 212, 0.6)",
                boxShadow:
                  "0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)",
              }}
            >
              {/* Electric effect overlays */}
              <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none ">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.4), rgba(6, 182, 212, 0.4), rgba(20, 184, 166, 0.4), transparent)",
                    animation: "electric-flow 3s linear infinite",
                  }}
                />
              </div>
              <style>
                {`
                  @keyframes electric-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                  }
                `}
              </style>

              {/* Social Links */}
              <a
                href="https://www.linkedin.com/in/buddhiimz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10"
              >
                <div className="relative">
                  <FaLinkedin className="text-3xl lg:text-4xl text-cyan-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </a>

              <a
                href="https://github.com/Buddhiimz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10"
              >
                <div className="relative">
                  <FaGithub className="text-3xl lg:text-4xl text-neutral-300 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </a>

              <a
                href="https://instagram.com/buddhimxx"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10"
              >
                <div className="relative">
                  <FaInstagram className="text-3xl lg:text-4xl text-teal-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-teal-300 group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </a>

              <a
                href="https://fb.com/ag buddhima"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10"
              >
                <div className="relative">
                  <FaFacebookSquare className="text-3xl lg:text-4xl text-cyan-500 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10"
              >
                <div className="relative">
                  <RiTwitterXFill className="text-3xl lg:text-4xl text-neutral-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:p-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={ProfilePic2}
            alt="Buddhima"
            className="w-full max-w-sm lg:max-w-full rounded-lg"
            style={{
              marginRight: "0px",
              marginTop: "-100px",
              borderRadius: "15px",
              maxWidth: "110%",
            }}
          />
        </div>
        <style>
          {`
            @media (min-width: 1024px) {
              img[alt="Buddhima"] {
                margin-right: 110px !important;
              }
            }
          `}
        </style>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-wider">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-cyan-400/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
