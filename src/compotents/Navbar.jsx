import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Me", path: "about-me" },
    { name: "Technologies", path: "tech" },
    { name: "Projects", path: "project" },
    { name: "Services", path: "services" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 110, // Adjust this value to your preference
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-5 md:px-8 lg:px-32 font-poppins">
      <header className="relative flex items-center p-3 transition-all duration-300 ease-in-out border-[1.7px] border-solid border-gray-500/15 backdrop-blur-md rounded-2xl bg-white/5">
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
            <img src={logo} alt="Logo" className="w-[200px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex-grow hidden p-2 px-4 xl:flex">
          <ul className="flex items-center justify-center flex-grow space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
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
                className="text-white hover:text-gray-300 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <button
          className="hidden xl:block text-white no-underline"
          onClick={() => scrollToSection("contact")}
        >
          <button
            className="px-5 py-3 text-white transition-all duration-300 rounded-xl bg-white/15 backdrop-blur-md hover:bg-white/20"
          >
            Contact Me
          </button>
        </button>

        {/* Menu Button */}
        <button
          className="p-2 ml-auto text-white transition-transform duration-300 xl:hidden hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="transition-transform duration-300 transform rotate-0 hover:rotate-90" />
          ) : (
            <Menu size={24} className="transition-transform duration-300 transform rotate-0 hover:-rotate-90" />
          )}
        </button>

        {/* Mobile/Tablet Navigation Menu */}
        <div
          className={`absolute left-0 right-0 z-50 p-4 mt-2 space-y-2 rounded-lg shadow-lg top-full bg-gray-900/95 backdrop-blur-md transform transition-all duration-300 ease-in-out xl:hidden ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
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
              className="block w-full px-4 py-2 text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:translate-x-2"
            >
              {item.name}
            </button>
          ))}
          <button
            className="w-full px-4 py-2 mt-2 text-white transition-all duration-300 rounded-lg bg-white/15 hover:bg-white/20 hover:scale-102"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection("contact"); // Scroll to contact section on mobile
            }}
          >
            Contact Me
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
