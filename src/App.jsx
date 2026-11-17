import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import EducationLeadership from './components/EducationLeadership';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import ProjectDetailPage from './components/ProjectDetailPage';
import BackToTop from './components/BackToTop';
import { featuredProjects, personal } from './data/portfolioData';
import { useTheme } from './hooks/useTheme';

const HOME_TITLE = `${personal.name} — Software Engineering Student · AI Engineer`;

function findProject(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase().replace(/^project\//, '');
  return featuredProjects.find((p) => p.id === s) || null;
}

function projectFromLocation() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const hashMatch = window.location.hash.match(/^#\/?project[/-]([a-z0-9-]+)/i);
  return findProject(path) || findProject(hashMatch?.[1]);
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [commandOpen, setCommandOpen] = useState(false);
  const [projectId, setProjectId] = useState(() => projectFromLocation()?.id ?? null);

  // Keep state in sync with the URL (initial load, back/forward)
  useEffect(() => {
    const sync = () => {
      const found = projectFromLocation();
      setProjectId(found?.id ?? null);
      if (found && window.location.pathname !== `/${found.id}`) {
        window.history.replaceState(null, '', `/${found.id}`);
      }
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    const project = featuredProjects.find((p) => p.id === projectId);
    document.title = project ? `${project.title} — ${personal.name}` : HOME_TITLE;
  }, [projectId]);

  const openProject = useCallback((id) => {
    window.history.pushState(null, '', `/${id}`);
    setProjectId(id);
    window.scrollTo({ top: 0 });
  }, []);

  const navigateHome = useCallback(
    (hash = '#top') => {
      const scroll = () => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      if (projectId) {
        window.history.pushState(null, '', `/${hash === '#top' ? '' : hash}`);
        setProjectId(null);
        setTimeout(scroll, 50);
      } else {
        window.history.replaceState(null, '', hash === '#top' ? '/' : hash);
        scroll();
      }
    },
    [projectId]
  );

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommandMenu={() => setCommandOpen(true)}
        onNavigate={navigateHome}
      />

      {projectId ? (
        <main>
          <ProjectDetailPage projectId={projectId} onBack={() => navigateHome('#work')} onNavigateProject={openProject} />
        </main>
      ) : (
        <main>
          <Hero />
          <Experience onOpenProject={openProject} />
          <Work onOpenProject={openProject} />
          <Skills />
          <EducationLeadership />
          <About />
          <Contact />
        </main>
      )}

      <Footer />
      <CommandMenu isOpen={commandOpen} setOpen={setCommandOpen} onOpenProject={openProject} onNavigate={navigateHome} />
      <BackToTop />
    </div>
  );
}
