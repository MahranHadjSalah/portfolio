import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import Process from './components/Process';
import ExperienceEducation from './components/ExperienceEducation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import CommandMenu from './components/CommandMenu';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#E6FFFA] selection:text-[#0F766E]">
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
      />
      
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
        />
        <FeaturedProjects 
          onSelectCaseStudy={(project) => setSelectedCaseStudy(project)} 
        />
        <ValueProps />
        <TechStack />
        <Process />
        <ExperienceEducation />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Real Developer Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={setIsCommandMenuOpen}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}
