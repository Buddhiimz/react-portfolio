import React from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Tech from "./pages/Tech";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Services from "./compotents/Services"; // Fixed typo in filename
import Navbar from "./compotents/Navbar"; // Import Navbar
import Experience from "./pages/Experience";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-400 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(24,24,40),rgba(255,255,255,0))]"></div>
      
      {/* Enhanced Scrollbar CSS with Updated Colors */}
      <style>{`
        /* Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a1a30;
          border-radius: 10px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #0ea5e9, #06b6d4, #14b8a6);
          border-radius: 10px;
          border: 2px solid #0a1a30;
          transition: all 0.3s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #0284c7, #0891b2, #0d9488);
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.7);
        }
        
        /* Firefox scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 #0a1a30;
        }
        
        /* Handle scrollbar corner */
        ::-webkit-scrollbar-corner {
          background: #0a1a30;
        }
      `}</style>

      {/* Always visible Navbar */}
      <Navbar />

      {/* Scrollable main content */}
      <main className="pt-[80px]">
        <section id="home"><Home /></section>
        <section id="about-me"><AboutMe /></section>
        <section id="tech"><Tech /></section>
        <section id="Experience"><Experience /></section>
        <section id="project"><Project /></section>
        <section id="services"><Services /></section>
        <section id="contacts"><Contacts /></section>
      </main>
    </div>
  );
};

export default App;