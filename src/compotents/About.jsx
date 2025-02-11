import React from 'react';
import { motion } from "framer-motion";
import Profile from '../assets/Profile.jpg';

const About = () => {
  return (
    <div id="about-me"
    className="w-full px-4 sm:px-6 md:px-8 mt-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl text-center -mt-14"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold"}}>
        <span
          className="text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text"}}>
          About Me</span>
      </motion.h1>

      <div className="flex flex-wrap mt-6">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center p-4">
          
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px]">
            <div className="border-segment-container" style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              right: '-20px',
              bottom: '-20px',
              borderRadius: '15px',
              overflow: 'hidden'
            }}>
              <div className="corner-piece top-left" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '40px',
                height: '40px',
                borderLeft: '3px solid #34d399',
                borderTop: '3px solid #34d399',
                borderRadius: '15px 0 0 0'
              }} />
              
              <div className="corner-piece top-right" style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '40px',
                height: '40px',
                borderRight: '3px solid #34d399',
                borderTop: '3px solid #34d399',
                borderRadius: '0 15px 0 0'
              }} />
              
              <div className="corner-piece bottom-left" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '40px',
                height: '40px',
                borderLeft: '3px solid #34d399',
                borderBottom: '3px solid #34d399',
                borderRadius: '0 0 0 15px'
              }} />
              
              <div className="corner-piece bottom-right" style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '40px',
                height: '40px',
                borderRight: '3px solid #34d399',
                borderBottom: '3px solid #34d399',
                borderRadius: '0 0 15px 0'
              }} />

              {/* Animated border segments */}
              <div className="border-segment top-segment" style={{
                position: 'absolute',
                top: '0',
                left: '40px',
                height: '3px',
                background: '#34d399',
                animation: 'moveHorizontal 3s infinite alternate'
              }} />
              
              <div className="border-segment right-segment" style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '3px',
                background: '#34d399',
                animation: 'moveVertical 3s infinite alternate'
              }} />
              
              <div className="border-segment bottom-segment" style={{
                position: 'absolute',
                bottom: '0',
                right: '40px',
                height: '3px',
                background: '#34d399',
                animation: 'moveHorizontal 3s infinite alternate'
              }} />
              
              <div className="border-segment left-segment" style={{
                position: 'absolute',
                bottom: '40px',
                left: '0',
                width: '3px',
                background: '#34d399',
                animation: 'moveVertical 3s infinite alternate'
              }} />
            </div>

            <img 
              src={Profile} 
              alt="Profile"
              className="w-full h-full rounded-lg transition-transform duration-300 ease-in-out transform mx-auto" 
              style={{ 
                borderRadius: "15px",
                objectFit: "cover",
                position: 'relative',
                zIndex: 1
              }} 
            />
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-3/5 p-4 lg:pl-16 lg:pt-2">
          <p className="text-left text-sm lg:text-base lg:w-11/12 p-4 lg:p-5 leading-relaxed"
             style={{ fontFamily: "'Poppins', sans-serif" }}>
            I am Buddhima Vilochana, a Software Engineering undergraduate at SLIIT, 
            passionate about technology and innovation. Proficient in full-stack 
            development, mobile apps, and databases, I create scalable, user-focused 
            solutions using tools like React, Node.js, Flutter, and MongoDB. My portfolio 
            includes projects like MediCare, FieldExpert, and OceanicCare, showcasing my 
            ability to solve real-world problems. I am eager to integrate AI/ML into my 
            work and continuously explore new technologies to drive innovation.
          </p>

          <div className="w-4/5 h-px bg-gray-700 mx-auto lg:mx-4 my-6"></div>
          
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="p-4 lg:w-5/6">
            
            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Education</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Sri Lanka Institute of Information Technology
              </h3>
              <p className="text-sm text-gray-300 mt-1">BSc (Hons) in Information Technology</p>
              <p className="text-sm text-gray-300">Specializing in Software Engineering</p>
              <p className="text-sm text-gray-400 mt-1">Expected Graduation: Oct 2026</p>
              <p className="text-sm text-gray-400">CGPA: 2.81</p>
            </div>

            <div>
              <h3 className="text-lg font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                ST Aloysius' College, Galle
              </h3>
              <p className="text-sm text-gray-300 mt-1">GCE Advanced Level</p>
              <p className="text-sm text-gray-300">Physical Science Stream</p>
              <p className="text-sm text-gray-400 mt-1">2018 - 2021</p>
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
}

export default About;