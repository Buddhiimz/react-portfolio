import React from 'react';
import { RiReactjsLine, RiJavaFill, RiBootstrapFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiPostman, SiCplusplus, SiCoursera, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiKotlin, SiPython, SiGit, SiGithub, SiMysql, SiSqlite, SiMicrosoftsqlserver } from 'react-icons/si';
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial : { y : -10 },
  animate : { y: [ 15, -15] , 
    transition : {
      duration:duration,
      ease: "linear",
      repeat: Infinity,
      repeaType: "reverse"
  }}
});

const TestComponent = () => {
  return (
    <div className="border-b border-neutral-800 pb-16">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="text-4xl lg:text-4xl tracking-tight text-center my-20">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.h1>

      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-purple-500">
            <SiCoursera className="text-4xl" style={{ color: '#0056D2' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500">
            <SiCplusplus className="text-4xl" style={{ color: '#00599C' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500">
            <RiJavaFill className="text-4xl" style={{ color: '#5382A1' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-500">
            <SiHtml5 className="text-4xl" style={{ color: '#E34F26' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500">
            <SiCss3 className="text-4xl" style={{ color: '#1572B6' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-purple-500">
            <RiBootstrapFill className="text-4xl" style={{ color: '#7952B3' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500">
            <RiTailwindCssFill className="text-4xl" style={{ color: '#06B6D4' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-yellow-500">
            <SiJavascript className="text-4xl" style={{ color: '#F7DF1E' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-500">
            <SiPostman className="text-4xl" style={{ color: '#FF6C37' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-cyan-500">
            <RiReactjsLine className="text-4xl" style={{ color: '#61DAFB' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-green-500">
            <SiMongodb className="text-4xl" style={{ color: '#47A248' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-green-600">
            <SiNodedotjs className="text-4xl" style={{ color: '#339933' }} />
        </motion.div>

        <div className="w-full"></div> {/* This forces the next icon to a new line */}
        
        <motion.div
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
          
          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-gray-500">
            <SiExpress className="text-4xl" style={{ color: '#F26D21' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-500">
            <SiKotlin className="text-4xl" style={{ color: '#0095D5' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(9.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-600">
            <SiPython className="text-4xl" style={{ color: '#3776AB' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-600">
            <SiGit className="text-4xl" style={{ color: '#F05032' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(10.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-gray-600">
            <SiGithub className="text-4xl" style={{ color: '#cccccc' }} />
        </motion.div>
        
        <motion.div 
          variants={iconVariants(11)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-700">
            <SiMysql className="text-4xl" style={{ color: '#4479A1' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(11.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-blue-800">
            <SiSqlite className="text-4xl" style={{ color: '#003B57' }} />
        </motion.div>
        
        <motion.div
          variants={iconVariants(12)}
          initial="initial"
          animate="animate"
          
          className="rounded-2xl border-4 border-neutral-800 p-4 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-4 hover:border-red-800">
            <SiMicrosoftsqlserver className="text-4xl" style={{ color: '#CC2927' }} />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TestComponent;
