import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";

import Projects from "./compotents/Projects";
import Services from "./compotents/Services";
import Navbar from "./compotents/Navbar";
import Footer from "./compotents/footer";
import ScrollToTop from "./compotents/ScrollToTop";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-400 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(24,24,40),rgba(255,255,255,0))]"></div>

      {/* Always visible Navbar */}
      <Navbar />

      <ScrollToTop />
      
      <main className="pt-[80px]">

        <Routes>
          {/* Main one-page site */}
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about-me"><AboutMe /></section>
                <section id="experience"><Experience /></section>
                <section id="project">

                  <Projects limit={3} showViewMore />
                </section>

                <section id="services"><Services /></section>
                <section id="contacts"><Contacts /></section>
                <Footer />
              </>
            }
          />

          {/* URL-only page */}
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
