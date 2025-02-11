import React from "react"; // Adjust path if necessary
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Tech from "./pages/Tech";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Services from "./compotents/Services"; // Fixed typo in filename
import Navbar from "./compotents/Navbar"; // Import Navbar

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-400 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(24,24,40),rgba(255,255,255,0))]"></div>
      
      {/* Always visible Navbar */}
      <Navbar />

      {/* Using a single container for all sections */}
      <main className="pt-[80px]"> {/* Add padding to avoid overlap with the navbar */}
        <section id="home"><Home /></section>
        <section id="about-me"><AboutMe /></section>
        <section id="tech"><Tech /></section>
        <section id="project"><Project /></section>
        <section id="services"><Services /></section>
        <section id="contacts"><Contacts /></section>
      </main>
    </div>
  );
};

export default App;
