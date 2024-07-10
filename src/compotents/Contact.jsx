import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-8 ">
      <motion.h1
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -50 }}
       transition={{ duration: 1 }}
      className="text-4xl lg:text-4xl tracking-tight text-center my-10" style={{ marginTop: "40px" }}>
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Get In Touch
        </span> 
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.address}</motion.p>

        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
