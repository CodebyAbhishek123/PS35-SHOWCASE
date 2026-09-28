import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EMaapIntegrationSection } from './components/EMaapIntegrationSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { CoreFeaturesSection } from './components/CoreFeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DocumentationSection } from './components/DocumentationSection';
import { ForLaboratoriesSection } from './components/ForLaboratoriesSection';
import { PricingSection } from './components/PricingSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FAQSection } from './components/FAQSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

// Marketing Conversion & App Walkthrough Modals
import { BookDemoModal } from './components/BookDemoModal';
import { LiveSandboxModal } from './components/LiveSandboxModal';
import { TestReportModal } from './components/TestReportModal';

import { INITIAL_REPORTS } from './utils/sampleReportsData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [demoOpen, setDemoOpen] = useState(false);
  const [sandboxOpen, setSandboxOpen] = useState(false);
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

  // Scroll navigation helper
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -75; // offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scrollspy auto section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'product',
        'features',
        'documentation',
        'for-laboratories',
        'governance',
        'pricing',
        'resources',
        'faq',
        'team'
      ];
      const scrollPosition = window.scrollY + 130;

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

  const handleOpenSandbox = () => {
    window.open('https://sih-iota-five.vercel.app/', '_blank');
  };

  const handleOpenSampleReport = (reportId) => {
    const rep = reports.find(r => r.id === reportId) || reports[0];
    setActiveReport(rep);
  };

  const handleReportGenerated = (newReport) => {
    setReports(prev => [newReport, ...prev]);
    setActiveReport(newReport);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-[#007A8C] selection:text-white font-sans antialiased">

      {/* 1. NAVBAR WITH TOP ANNOUNCEMENT BAR & BOOK DEMO CTA */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSandbox={handleOpenSandbox}
        onOpenDemo={() => setDemoOpen(true)}
      />

      {/* 2 - 12. STREAMLINED MARKETING WEBSITE SECTIONS */}
      <main className="flex-grow">
        {/* 2. HERO (With interactive 3D glassmorphic dashboard image) */}
        <HeroSection 
          onOpenSandbox={handleOpenSandbox} 
          onOpenDemo={() => setDemoOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 2.5 EMAAP INTEGRATION (Animated Government Legal Metrology Ecosystem Pipeline) */}
        <EMaapIntegrationSection />

        {/* 3. PROBLEM → SOLUTION (Compact 4-column SaaS comparison) */}
        <ProblemSolutionSection />

        {/* 4. CORE FEATURES (8 Core Cards + Human Control Statement) */}
        <CoreFeaturesSection 
          onOpenSandbox={handleOpenSandbox} 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 5. HOW IT WORKS (5-Step Visual Pipeline) */}
        <HowItWorksSection 
          onOpenSandbox={handleOpenSandbox} 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 5.5 TECHNICAL DOCUMENTATION & OIML CLAUSES */}
        <DocumentationSection 
          onOpenSampleReport={handleOpenSampleReport} 
        />

        {/* 7. WHO IT IS FOR (4 Target Audience Cards) */}
        <ForLaboratoriesSection 
          onOpenSandbox={handleOpenSandbox} 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 9. PRICING & PILOT PLANS */}
        <PricingSection 
          onOpenSandbox={handleOpenSandbox} 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 10. RESOURCES & TECHNICAL GUIDES */}
        <ResourcesSection onOpenSampleReport={handleOpenSampleReport} />

        {/* 11. FAQ (8 Blueprint Starter Questions) */}
        <FAQSection />

        {/* 12. INNOVATORS / TEAM SECTION */}
        <TeamSection />
      </main>

      {/* 13. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* MODALS */}
      <BookDemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
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
