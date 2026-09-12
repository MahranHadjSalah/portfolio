import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import TechStack from './components/TechStack';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <FeaturedProjects />
        <OtherProjects />
        <TechStack />
        <About />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
