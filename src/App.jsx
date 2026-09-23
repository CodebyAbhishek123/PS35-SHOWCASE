import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { AboutSection } from './components/AboutSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ContentSection } from './components/ContentSection';
import { TeamSection } from './components/TeamSection';
import { DocumentationSection } from './components/DocumentationSection';
import { Footer } from './components/Footer';

import { LiveSandboxModal } from './components/LiveSandboxModal';
import { SIHPitchDeckModal } from './components/SIHPitchDeckModal';
import { TestReportModal } from './components/TestReportModal';

import { INITIAL_REPORTS } from './utils/sampleReportsData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [pitchDeckOpen, setPitchDeckOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(null);

  // Reports state with local persistence
  const [reports, setReports] = useState(() => {
    try {
      const saved = localStorage.getItem('metronai_reports');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_REPORTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('metronai_reports', JSON.stringify(reports));
    } catch (e) {
      console.error(e);
    }
  }, [reports]);

  // Handle section scrolling and active state tracking
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scrollspy to automatically update active nav item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'about', 'solution', 'features', 'content', 'team', 'documentation'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open a specific sample or generated report by ID
  const handleOpenSampleReport = (reportId) => {
    const rep = reports.find(r => r.id === reportId) || reports[0];
    setActiveReport(rep);
  };

  // When a new report is generated in the sandbox
  const handleReportGenerated = (newReport) => {
    setReports(prev => [newReport, ...prev]);
    setActiveReport(newReport);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-[#FF1E27] selection:text-white font-sans">
      
      {/* Navbar with exact design requested */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSandbox={() => setSandboxOpen(true)}
        onOpenPitchDeck={() => setPitchDeckOpen(true)}
      />

      {/* Main Showcase Page Content */}
      <main className="flex-grow">
        <HeroSection
          onOpenSandbox={() => setSandboxOpen(true)}
          onOpenPitchDeck={() => setPitchDeckOpen(true)}
          onNavigate={handleNavigate}
        />

        <ProblemSection />

        <AboutSection />

        <SolutionSection onOpenSandbox={() => setSandboxOpen(true)} />

        <FeaturesSection
          onOpenSandbox={() => setSandboxOpen(true)}
          onOpenSampleReport={handleOpenSampleReport}
        />

        <ContentSection />

        <TeamSection />

        <DocumentationSection onOpenSampleReport={handleOpenSampleReport} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <LiveSandboxModal
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
        onReportGenerated={handleReportGenerated}
      />

      <SIHPitchDeckModal
        isOpen={pitchDeckOpen}
        onClose={() => setPitchDeckOpen(false)}
        onOpenSandbox={() => {
          setPitchDeckOpen(false);
          setSandboxOpen(true);
        }}
      />

      {activeReport && (
        <TestReportModal
          report={activeReport}
          onClose={() => setActiveReport(null)}
        />
      )}

    </div>
  );
}
export default App;
