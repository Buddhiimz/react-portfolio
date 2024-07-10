import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = ({ homeRef, aboutMeRef, techRef, projectRef, contactsRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 lg:px-8 px-4">
      <div className="flex-shrink-0 flex items-center lg:ml-28 ml-4">
        <img src={logo} alt="logo" className="w-24 h-auto" />
      </div>
      <div className="hidden lg:flex items-center justify-center gap-4 lg:mr-40 mr-4 text-2xl leading-6">
        <ul className="flex space-x-8">
          <li>
            <button onClick={() => scrollToRef(homeRef)} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Home</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(aboutMeRef)} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">About Me</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(techRef)} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Technologies</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(projectRef)} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToRef(contactsRef)} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Contacts</button>
          </li>
        </ul>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <button onClick={() => { toggleMenu(); scrollToRef(aboutMeRef); }} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">About Me</button>
            </li>
            <li>
              <button onClick={() => { toggleMenu(); scrollToRef(techRef); }} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Technologies</button>
            </li>
            <li>
              <button onClick={() => { toggleMenu(); scrollToRef(projectRef); }} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Projects</button>
            </li>
            <li>
              <button onClick={() => { toggleMenu(); scrollToRef(contactsRef); }} className="text-lg font-medium text-gray-500 hover:text-gray-300 cursor-pointer">Contacts</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
