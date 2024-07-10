import React from 'react'
import { PROJECTS } from '../constants/index.js'
import { motion } from "framer-motion"
import {FaGithub} from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-4xl tracking-tight text-center my-20" 
        style={{ marginTop: "40px" }}
      >
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Projects
        </span> 
      </motion.h1>

      <div style={{ marginTop: "-30px" }}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center items-center"
          >
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-24 sm:w-48 sm:h-28 md:w-52 md:h-32 lg:w-60 lg:h-36 xl:w-72 xl:h-44 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 border-4 border-neutral-800 hover:border-purple-500"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:max-w-xl lg:w-3/4 mt-4 lg:mt-0 lg:ml-20">
              <h6 className="mb-2 font-semibold text-center lg:text-left">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-center lg:text-left">{project.description}</p>

              <div className="flex flex-wrap justify-center lg:justify-start">
  {project.technologies.map((tech, techIndex) => (
    <span
      key={techIndex}
      className="mr-2 mb-2 rounded px-2 py-1 text-sm font-medium text-purple-500 transform transition-transform duration-300 hover:scale-105 hover:text-purple-700"
    >
      {tech}
    </span>
  ))}

                <a href={project.link} className="group">
                <FaGithub className="text-2xl lg:text-3xl lg:ml-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-purple-500" /></a>

              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
