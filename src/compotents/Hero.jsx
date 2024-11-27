import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import ProfilePic2 from '../assets/Profile2.png';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from 'react-icons/ri';


const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: { x: 1, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const roles = ["Software Engineer", "Full Stack Developer", "Mobile Application Developer", "UI/UX Developer"];

const Typewriter = () => {
  // ... Typewriter component code remains the same ...
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
      <motion.div
      variants={container(0.2)}
      initial="hidden"
      animate="visible"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        //transition={{ duration: 0.3 }}
        >
        <span style={containerStyle}>
          I'm a {text}
        </span>
        <span style={cursorStyle}>|</span>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-3/5" style={{ marginTop: "-40px" }}>

          <div className="flex flex-col items-center lg:items-start lg:ml-28" 
               style={{ marginTop: "20px",fontFamily: "'Poppins', sans-serif"}}>

            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-6xl lg:text-6xl font-bold tracking-tight lg:mt-8 text-white">
              Buddhima Vilochana
            </motion.h1>

            <Typewriter />

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 text-base lg:text-lg">
              {HERO_CONTENT}
            </motion.p>

          <motion.div
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
          className="flex lg:w-3/5 items-center justify-center gap-4 mt-8 lg:mt-5 lg:ml-10 border border-gray-600 rounded-lg p-4">
            
            <a href="https://www.linkedin.com/in/buddhima-vilochana-47251328a" className="group">
              <FaLinkedin className="text-3xl lg:text-4xl text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500" />
            </a>
            <a href="https://github.com/Buddhiimz" className="group">
              <FaGithub className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-purple-500" />
            </a>
            <a href="https://instagram.com/buddhimxx" className="group">
              <FaInstagram className="text-3xl lg:text-4xl text-pink-500 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-500" />
            </a>
            <a href="https://fb.com/ag buddhima" className="group">
              <FaFacebookSquare className="text-3xl lg:text-4xl text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500" />
            </a>
            <a href="#" className="group">
              <RiTwitterXFill className="text-3xl lg:text-4xl text-white-500 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-gray-500" />
            </a>
          </motion.div>
          </div>
          
        </div>

       
        <div className="w-full lg:w-2/5 lg:p-8 flex justify-center" 
             style={{ 
               marginTop: "-100px",  
               marginLeft: "-40px"  
             }}>
          <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0 }}
            src={ProfilePic2}
            alt="Buddhima"
            className="max-w-xs lg:max-w-full rounded-lg transform"
            style={{
              borderRadius: "15px",
              maxWidth: "95%"  
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;