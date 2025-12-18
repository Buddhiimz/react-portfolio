import React from "react";
import { Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const CONTACT = {
  address: "Malabe, Sri Lanka",
  phoneNo: "+94 76 583 1021",
  email: "agbvilochana@gmail.com"
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-me" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#project" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/buddhiimz", color: "text-cyan-400" },
    { icon: FaGithub, href: "https://github.com/Buddhiimz", color: "text-neutral-300" },
    { icon: FaInstagram, href: "https://instagram.com/buddhimxx", color: "text-teal-400" },
    { icon: FaFacebookSquare, href: "https://fb.com/ag buddhima", color: "text-cyan-500" },
  ];

  return (
    <footer 
      className="relative text-white pt-12 pb-8 px-4 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Buddhima Vilochana
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Software Engineer passionate about creating innovative solutions and building impactful applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center ${social.color} hover:border-cyan-400/50 transition-all duration-300`}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pl-0 sm:pl-0 md:pl-12 lg:pl-20"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/10 to-teal-400/10 flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneNo}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/10 to-teal-400/10 flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs">{CONTACT.phoneNo}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/10 to-teal-400/10 flex items-center justify-center border border-cyan-400/20">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs">{CONTACT.address}</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter/CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Let's connect and discuss how we can work together on exciting projects.
            </p>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="relative group">
                <div className="absolute bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg opacity-70 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-neutral-900 font-semibold text-sm rounded-lg transition-all duration-300">
                  Get In Touch
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-sm"
          >
            © {new Date().getFullYear()} Buddhima Vilochana. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a href="#privacy" className="text-neutral-400 hover:text-cyan-400 transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#terms" className="text-neutral-400 hover:text-cyan-400 transition-colors text-xs">
              Terms of Service
            </a>
          </motion.div>
        </div>

        {/* Designed By */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-neutral-500 text-xs flex items-center justify-center gap-1">
            Designed & Built with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >

            </motion.span>
            by Buddhima Vilochana
          </p>
        </motion.div>
      </div>
      
    </footer>
  );
};

export default Footer;