import React from 'react';
import about from '../assets/about.jpg';
import { motion } from "framer-motion"

import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from 'react-icons/ri';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 w-6/7 mt-28 pb-8"> 

      <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="text-3xl lg:text-4xl text-center" style={{ marginTop: "-56px" }}>
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          About Me 
        </span> 
      </motion.h1>

      <div className="flex flex-wrap" style={{ marginTop: "50px" }}>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/5 flex justify-end items-end">
          
          <img src={about} alt="Buddhima" className="max-w-xs lg:max-w-1/2 rounded-lg lg:mt-12 mb-4 lg:mb-0 transition-transform duration-300 ease-in-out transform border-4 border-neutral-800 
          hover:border-purple-500 mx-auto lg:mx-0" style={{ marginTop: "0px", borderRadius: "15px" }} />

          
        </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}

        className="w-full lg:w-3/5 lg:pl-16 lg:pt-5">
          <p className="text-center lg:text-left text-sm lg:text-base block w-full lg:w-3/4 text-justify">
            I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I am currently pursuing my undergraduate studies at the Sri Lanka Institute of Information Technology. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PHP, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
          </p>
          
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}

          className="flex lg:w-3/5 items-center justify-center gap-4 mt-8 lg:mt-16 lg:ml-10">
            <a href="https://www.linkedin.com/in/buddhima-vilochana-47251328a" className="group">
              <FaLinkedin className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-pink-500" />
            </a>
            <a href="https://github.com/buddhima2002" className="group">
              <FaGithub className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-purple-500" />
            </a>
            <a href="https://instagram.com/buddhimxx" className="group">
              <FaInstagram className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-500" />
            </a>
            <a href="https://fb.com/ag buddhima" className="group">
              <FaFacebookSquare className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500" />
            </a>
            <a href="#" className="group">
              <RiTwitterXFill className="text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-gray-500" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
