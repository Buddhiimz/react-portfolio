import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Me", path: "about-me" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "project" },
    { name: "Services", path: "services" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 110,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-5 md:px-8 lg:px-32 font-poppins">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative flex items-center p-3 transition-all duration-300 ease-in-out border rounded-2xl ${
          scrolled
            ? " border-cyan-400/30 shadow-lg shadow-cyan-500/10"
            : " border-neutral-800"
        } backdrop-blur-md`}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="#"
            className="transition-opacity duration-300 hover:opacity-80"
            onClick={() => {
              if (window.location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const element = document.getElementById("home");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const element = document.getElementById("home");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img src={logo} alt="Logo" className="w-[180px] md:w-[200px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex-grow hidden p-2 px-4 xl:flex">
          <ul className="flex items-center justify-center flex-grow space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        scrollToSection(item.path);
                      }, 100);
                    } else {
                      scrollToSection(item.path);
                    }
                  }}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.path
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                  {/* Underline effect */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 ${
                      activeSection === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <motion.button
          whileHover={{ }}
          whileTap={{ scale: 0.95 }}
          className="hidden xl:block"
          onClick={() => scrollToSection("contact")}
        >
          <div className="relative group">
            <div className="absolute bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-neutral-900 font-semibold rounded-xl transition-all duration-300">
              Contact Me
            </div>
          </div>
        </motion.button>

        {/* Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 ml-auto text-white transition-all duration-300 xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>

        {/* Mobile/Tablet Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 z-50 p-4 mt-2 space-y-2 rounded-xl shadow-lg top-full bg-neutral-900/95 backdrop-blur-md border border-cyan-400/30 xl:hidden"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        scrollToSection(item.path);
                      }, 100);
                    } else {
                      scrollToSection(item.path);
                    }
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-3 text-left font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.path
                      ? "bg-gradient-to-r from-cyan-400/10 to-teal-400/10 text-cyan-400 border border-cyan-400/30"
                      : "text-white hover:bg-cyan-400/10 hover:text-cyan-400 hover:translate-x-2"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full px-4 py-3 mt-2 text-neutral-900 font-semibold transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:shadow-lg hover:shadow-cyan-500/50"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("contact");
                }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Navbar;