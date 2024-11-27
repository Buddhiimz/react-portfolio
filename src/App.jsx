import React, { useRef } from 'react';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Tech from './pages/Tech';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import Services from './pages/Servicers';
import Navbar from './compotents/Navbar';

const App = () => {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const techRef = useRef();
  const projectRef = useRef();
  const contactsRef = useRef();

  return (
    <div className="overflow-x-hidden text-neutral-400 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(24,24,40),rgba(255,255,255,0))]"></div>
      <Navbar 
        homeRef={homeRef} 
        aboutMeRef={aboutMeRef} 
        techRef={techRef} 
        projectRef={projectRef}   
        contactsRef={contactsRef}
      />
      <div className="container mx-auto p-8 relative z-10">
        <section ref={homeRef}><Home /></section>
        <section ref={aboutMeRef}><AboutMe /></section>
        <section ref={techRef}><Tech /></section>
        <section ref={projectRef}><Project /></section>        
        <section ><Services /></section>
        <section ref={contactsRef}><Contacts /></section>
      </div>
    </div>
  );
};

export default App;
