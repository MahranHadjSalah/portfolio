import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import ProjectDetailPage from './components/ProjectDetailPage';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  // Sync with URL Pathname and Browser History (Popstate)
  useEffect(() => {
    const parseRoute = () => {
      // 1. Check pathname: e.g. /autoreply, /lux-dental, /supportai
      const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
      let candidate = rawPath;
      if (candidate.toLowerCase().startsWith('project/')) {
        candidate = candidate.slice(8);
      }

      if (candidate) {
        const found = portfolioData.featuredProjects.find(
          (p) => p.id.toLowerCase() === candidate.toLowerCase()
        );
        if (found) {
          setCurrentProjectId(found.id);
          document.title = `${found.title} — Mahran Bouallegue`;
          if (window.location.pathname !== `/${found.id}`) {
            window.history.replaceState({ projectId: found.id }, '', `/${found.id}`);
          }
          return;
        }
      }

      // 2. Fallback check for hash: e.g. #/project/autoreply or #project-autoreply
      const hash = window.location.hash;
      const match = hash.match(/^#\/?project\/([a-zA-Z0-9-]+)/) || hash.match(/^#project-([a-zA-Z0-9-]+)/);
      if (match && match[1]) {
        const found = portfolioData.featuredProjects.find(
          (p) => p.id.toLowerCase() === match[1].toLowerCase()
        );
        if (found) {
          setCurrentProjectId(found.id);
          document.title = `${found.title} — Mahran Bouallegue`;
          window.history.replaceState({ projectId: found.id }, '', `/${found.id}`);
          return;
        }
      }

      // 3. Otherwise we are on home page
      setCurrentProjectId(null);
      document.title = 'Mahran Bouallegue — AI & Full-Stack Systems Engineer';
    };

    parseRoute();
    window.addEventListener('popstate', parseRoute);
    window.addEventListener('hashchange', parseRoute);

    return () => {
      window.removeEventListener('popstate', parseRoute);
      window.removeEventListener('hashchange', parseRoute);
    };
  }, []);

  const handleOpenProject = (id) => {
    setCurrentProjectId(id);
    window.history.pushState({ projectId: id }, '', `/${id}`);
    const found = portfolioData.featuredProjects.find((p) => p.id === id);
    if (found) {
      document.title = `${found.title} — Mahran Bouallegue`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (targetHash = '#work') => {
    setCurrentProjectId(null);
    window.history.pushState(null, '', `/${targetHash}`);
    document.title = 'Mahran Bouallegue — AI & Full-Stack Systems Engineer';
    setTimeout(() => {
      const elId = targetHash.replace(/^#/, '');
      const el = document.getElementById(elId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleBackToHome = () => {
    handleNavigateHome('#work');
  };

  const handleNavigateProject = (id) => {
    setCurrentProjectId(id);
    window.history.pushState({ projectId: id }, '', `/${id}`);
    const found = portfolioData.featuredProjects.find((p) => p.id === id);
    if (found) {
      document.title = `${found.title} — Mahran Bouallegue`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a single project is open, render the dedicated single project page
  if (currentProjectId) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#38BDF8]">
        <ProjectDetailPage 
          projectId={currentProjectId}
          onBack={handleBackToHome}
          onNavigateProject={handleNavigateProject}
        />

        {/* Global Developer Resume / CV Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Command Palette (Ctrl+K) */}
        <CommandMenu
          isOpen={isCommandMenuOpen}
          onClose={setIsCommandMenuOpen}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenProject={handleOpenProject}
          onNavigateHome={handleNavigateHome}
        />
      </div>
    );
  }

  // Otherwise, render the general home page
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#38BDF8]">
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
      />
      
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
        />
        <FeaturedProjects 
          onOpenProject={handleOpenProject}
          onSelectCaseStudy={(project) => setSelectedCaseStudy(project)} 
        />
        <TechStack />
        <Process />
        <ExperienceEducation 
          onOpenResume={() => setIsResumeOpen(true)} 
        />
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
        onOpenProject={handleOpenProject}
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
}
