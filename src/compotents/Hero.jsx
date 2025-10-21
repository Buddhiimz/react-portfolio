import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants/index.js";
import ProfilePic2 from "../assets/Profile2.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const name = "Buddhima Vilochana";

// Variants for container to stagger children
const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // delay between letters
    },
  },
};

// Variants for each letter
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: { x: 1, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Mobile Application Developer",
  "UI/UX Developer",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setSpeed(100);
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setSpeed(150);
        if (text === currentRole) {
          setIsDeleting(true);
          setSpeed(1000);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, roleIndex]);

  const containerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "'Poppins', sans-serif",
    color: "transparent",
    background: "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    display: "inline-block",
  };

  const cursorStyle = {
    display: "inline-block",
    width: "1ch",
    backgroundColor: "currentColor",
    animation: "blink 1s steps(2, start) infinite",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
      <motion.div variants={container(0.2)} initial="hidden" animate="visible">
        <span style={containerStyle}>I'm a {text}</span>
        <span style={cursorStyle}>|</span>
      </motion.div>
    </div>
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
            className="flex flex-col items-center lg:items-start lg:ml-28"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
                <motion.h1
                  variants={container2}
                  initial="hidden"
                  animate="visible"
                  className="pb-4 text-5xl lg:text-6xl font-bold tracking-wide text-white text-center lg:text-left"
                >
                  {name.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letter}
                      className="mr-0.5" // adds space between letters
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>

            <Typewriter />

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 text-base lg:text-lg text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="relative flex w-full lg:w-3/5 items-center justify-center gap-4 mt-8 lg:mt-5 lg:ml-10 rounded-lg p-4"
              style={{
                border: '2px solid rgba(221, 132, 72, 0.6)',
                boxShadow: '0 0 20px rgba(221, 132, 72, 0.3), inset 0 0 20px rgba(221, 132, 72, 0.1)',
              }}
            >
              {/* Electric effect overlays */}
              <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(221, 132, 72, 0.4), transparent)',
                    animation: 'electric-flow 3s linear infinite',
                  }}
                />
              </div>
              <style>
                {`
                  @keyframes electric-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                  }
                  @keyframes pulse-glow {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
                  }
                `}
              </style>
              <a
                href="https://www.linkedin.com/in/buddhima-vilochana-47251328a"
                className="group relative z-10"
              >
                <FaLinkedin className="text-3xl lg:text-4xl text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500" />
              </a>
              <a href="https://github.com/Buddhiimz" className="group relative z-10">
                <FaGithub className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-purple-500" />
              </a>
              <a href="https://instagram.com/buddhimxx" className="group relative z-10">
                <FaInstagram className="text-3xl lg:text-4xl text-pink-500 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-500" />
              </a>
              <a href="https://fb.com/ag buddhima" className="group relative z-10">
                <FaFacebookSquare className="text-3xl lg:text-4xl text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500" />
              </a>
              <a href="#" className="group relative z-10">
                <RiTwitterXFill className="text-3xl lg:text-4xl text-white-500 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-gray-500" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image Section - Now first on mobile */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:p-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={ProfilePic2}
            alt="Buddhima"
            className="w-full max-w-sm lg:max-w-full rounded-lg"
            style={{
              marginRight: "110px",
              marginTop: "-100px",
              borderRadius: "15px",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;