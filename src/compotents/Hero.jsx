import React, { useState, useEffect } from "react";
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

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/buddhiimz",
    Icon: FaLinkedin,
    className:
      "text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
  },
  {
    href: "https://github.com/Buddhiimz",
    Icon: FaGithub,
    className:
      "text-neutral-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
  },
  {
    href: "https://instagram.com/buddhimxx",
    Icon: FaInstagram,
    className:
      "text-teal-400 group-hover:text-teal-300 group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]",
  },
  {
    href: "https://fb.com/ag buddhima",
    Icon: FaFacebookSquare,
    className:
      "text-cyan-500 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
  },
  {
    href: "#",
    Icon: RiTwitterXFill,
    className:
      "text-neutral-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
  },
];

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
    <div className="relative flex h-16 w-full items-center justify-center lg:justify-start">
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

      <div className="relative flex w-full flex-col items-center lg:items-start">
        <div className="relative flex h-16 w-full items-center">
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
                      className="absolute inset-0 text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left"
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
                      className="absolute inset-0 text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left"
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
                <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
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
    { label: "Experience", value: 1, suffix: "+ Years" },
  ];

  return (
    <motion.div
      variants={container(0.4)}
      initial="hidden"
      animate="visible"
      className="mt-6 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-4"
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
    <section
      id="home"
      className="hero-fullscreen relative flex items-center overflow-hidden"
    >
      <style>
        {`
          /* Fill the viewport (minus the fixed navbar) on every resolution */
          .hero-fullscreen {
            min-height: calc(100vh - 80px);
          }
          @supports (min-height: 100svh) {
            .hero-fullscreen {
              min-height: calc(100svh - 80px);
            }
          }
          @keyframes electric-flow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:px-8 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Content Section */}
          <div
            className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <motion.h1
              variants={container2}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl"
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
              className="mt-3 w-full"
            >
              <SequentialRoleDisplay />
            </motion.div>

            {/* Animated Stats instead of content */}
            <AnimatedStats />

            {/* Social Links */}
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="relative mt-6 flex w-full max-w-xl items-center justify-center gap-5 rounded-lg p-4 sm:gap-6 lg:justify-start lg:px-6"
              style={{
                border: "2px solid rgba(6, 182, 212, 0.6)",
                boxShadow:
                  "0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)",
              }}
            >
              {/* Electric effect overlay */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.4), rgba(6, 182, 212, 0.4), rgba(20, 184, 166, 0.4), transparent)",
                    animation: "electric-flow 3s linear infinite",
                  }}
                />
              </div>

              {SOCIALS.map(({ href, Icon, className }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative z-10"
                >
                  <div className="relative">
                    <Icon
                      className={`text-2xl transition-all duration-300 ease-in-out transform group-hover:scale-110 sm:text-3xl lg:text-4xl ${className}`}
                    />
                    <div className="absolute -bottom-1 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0 }}
              src={ProfilePic2}
              alt="Buddhima"
              className="w-full max-w-[13rem] rounded-2xl object-contain sm:max-w-xs lg:max-h-[68vh] lg:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 lg:flex"
      >
        <span className="text-xs uppercase tracking-wider">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cyan-400/30 p-2"
        >
          <motion.div className="h-2 w-1 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
