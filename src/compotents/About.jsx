import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from 'react-icons/fa';
import Profile from "../assets/Profile.jpg";

const About = () => {

  return (
    <div id="about-me" className="w-full px-4 sm:px-6 md:px-8 mt-24">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ marginTop: "-50px" }}
        >
          About{" "}
          <span
            style={{
              background: "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Me
          </span>
        </motion.h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start max-w-7xl mx-auto">
        {/* Image Section - Left Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-auto flex-shrink-0"
        >
          <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] mx-auto group">
            {/* Animated gradient glow background */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(45deg, #0ea5e9, #06b6d4, #14b8a6, #0ea5e9)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 4s ease infinite",
                filter: "blur(25px)",
                transform: "scale(1.05)",
                zIndex: 0,
              }}
            />
            
            {/* Outer border container with gradient */}
            <div
              className="absolute inset-0 rounded-2xl p-[3px] animate-border-glow"
              style={{
                background: "linear-gradient(45deg, #0ea5e9, #06b6d4, #14b8a6, #0ea5e9)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 4s ease infinite",
              }}
            >
              <div className="w-full h-full bg-neutral-950 rounded-2xl"></div>
            </div>

            {/* Image container */}
            <div className="relative w-full h-full p-3 z-10 lg:mt-16">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full rounded-xl object-cover transition-all duration-500 ease-in-out transform group-hover:scale-[1.02] group-hover:brightness-110"
                style={{
                  boxShadow: "0 8px 32px rgba(6, 182, 212, 0.2)",
                }}
              />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400 rounded-tl-xl opacity-80"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-teal-400 rounded-tr-xl opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-teal-400 rounded-bl-xl opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400 rounded-br-xl opacity-80"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-1/4 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-60"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-teal-400 rounded-full animate-float-medium opacity-60"></div>
            <div className="absolute bottom-1/4 -left-2 w-1.5 h-1.5 bg-sky-400 rounded-full animate-float-fast opacity-60"></div>
          </div>
        </motion.div>

        {/* Content Section - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1 space-y-6"
        >
          {/* About Text */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-cyan-400/30 transition-all duration-300">
            <p
              className="text-neutral-300 leading-relaxed text-sm lg:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              I am <span className="text-cyan-400 font-semibold">Buddhima Vilochana</span>, a Software Engineering undergraduate at
              SLIIT, passionate about technology and innovation. Proficient in
              full-stack development, mobile apps, and databases, I create
              scalable, user-focused solutions using tools like React, Node.js,
              Flutter, and MongoDB. My portfolio includes projects like MediCare,
              FieldExpert, and OceanicCare, showcasing my ability to solve
              real-world problems. I am eager to integrate AI/ML into my work and
              continuously explore new technologies to drive innovation.
            </p>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-2xl text-neutral-900" />
              </div>
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {/* University */}
              <div className="relative pl-6 border-l-2 border-cyan-400/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Sri Lanka Institute of Information Technology
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-1">
                  BSc (Hons) in Information Technology
                </p>
                <p className="text-neutral-300 text-sm mb-2">
                  Specializing in Software Engineering
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Expected: Oct 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    CGPA: 2.81
                  </span>
                </div>
              </div>

              {/* School */}
              <div className="relative pl-6 border-l-2 border-teal-400/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  ST Aloysius' College, Galle
                </h3>
                <p className="text-teal-400 text-sm font-medium mb-1">
                  GCE Advanced Level
                </p>
                <p className="text-neutral-300 text-sm mb-2">
                  Physical Science Stream
                </p>
                <div className="flex items-center gap-1 text-sm text-neutral-400">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                  2018 - 2021
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes moveHorizontal {
            0% { width: 0; }
            100% { width: calc(100% - 80px); }
          }
          
          @keyframes moveVertical {
            0% { height: 0; }
            100% { height: calc(100% - 80px); }
          }

          .border-segment {
            opacity: 0.9;
            box-shadow: 0 0 12px #34d399;
          }

          .corner-piece {
            opacity: 0.9;
            box-shadow: 0 0 12px #34d399;
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default About;