import React from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import ProfilePic from '../assets/Profile.jpg';
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden:{x:-200,opacity: 0},
  visible:{x:1,opacity:1,transition:{duration:0.5,delay:delay}}

});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <div className="flex flex-wrap" style={{marginTop:"-30px"}}>
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-28">
                <motion.h1
                variants={container(0)} 
                initial="hidden"
                animate="visible"
                
                className="pb-6 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16">Buddhima Vilochana</motion.h1>

                <motion.span 
                variants={container(0.5)} 
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>

                <motion.p 
                variants={container(1)} 
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-5 text-base lg:text-lg font-light tracking-tighter">{HERO_CONTENT}</motion.p>

            </div>
        </div>

            <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
            <motion.img  
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1.4, delay: 0 }}
               src={ProfilePic} 
               alt="Buddhima" 
               className="max-w-xs lg:max-w-1/2 rounded-lg transform border-4 border-neutral-800 hover:border-purple-500" style={{borderRadius:"15px"  }}/>
            
            </div>
        </div>
    </div>
  );
};

export default Hero;


