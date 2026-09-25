import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { CoreFeaturesSection } from './components/CoreFeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProductShowcaseSection } from './components/ProductShowcaseSection';
import { FeatureDeepDiveSection } from './components/FeatureDeepDiveSection';
import { ForLaboratoriesSection } from './components/ForLaboratoriesSection';
import { MultiLabSaaSSection } from './components/MultiLabSaaSSection';
import { RolesWorkflowSection } from './components/RolesWorkflowSection';
import { OIMLR76WorkflowSection } from './components/OIMLR76WorkflowSection';
import { ReportShowcaseSection } from './components/ReportShowcaseSection';
import { SecurityGovernanceSection } from './components/SecurityGovernanceSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PricingSection } from './components/PricingSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

// Interactive App Modals (Preserving actual TARAZU SaaS workflow)
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

  // Scroll navigation helper
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // offset for fixed navbar
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
        'how-it-works',
        'showcase',
        'for-laboratories',
        'governance',
        'reports',
        'pricing',
        'resources',
        'faq'
      ];
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

      {/* 1. NAVBAR */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSandbox={() => setSandboxOpen(true)}
      />

      {/* 2 - 18. MARKETING WEBSITE SECTIONS */}
      <main className="flex-grow">
        {/* 2. HERO */}
        <HeroSection onOpenSandbox={() => setSandboxOpen(true)} />

        {/* 3. PROBLEM → SOLUTION */}
        <ProblemSolutionSection />

        {/* 4. CORE FEATURES */}
        <CoreFeaturesSection onOpenSandbox={() => setSandboxOpen(true)} />

        {/* 5. HOW TARAZU WORKS */}
        <HowItWorksSection />

        {/* 6. PRODUCT SHOWCASE */}
        <ProductShowcaseSection onOpenSandbox={() => setSandboxOpen(true)} />

        {/* 7. FEATURE DEEP-DIVE */}
        <FeatureDeepDiveSection />

        {/* 8. FOR LABORATORIES */}
        <ForLaboratoriesSection onOpenSandbox={() => setSandboxOpen(true)} />

        {/* 9. MULTI-LAB SaaS */}
        <MultiLabSaaSSection />

        {/* 10. ROLES & WORKFLOW */}
        <RolesWorkflowSection />

        {/* 11. OIML R76 WORKFLOW */}
        <OIMLR76WorkflowSection />

        {/* 12. REPORT SHOWCASE */}
        <ReportShowcaseSection onOpenSampleReport={handleOpenSampleReport} />

        {/* 13. SECURITY & GOVERNANCE */}
        <SecurityGovernanceSection />

        {/* 14. BEFORE vs AFTER */}
        <BeforeAfterSection onOpenSandbox={() => setSandboxOpen(true)} />

        {/* 15. PRICING */}
        <PricingSection onOpenSandbox={() => setSandboxOpen(true)} />

        {/* 16. RESOURCES */}
        <ResourcesSection onOpenSampleReport={handleOpenSampleReport} />

        {/* 17. FAQ */}
        <FAQSection />

        {/* 18. FINAL CTA */}
        <FinalCTASection onOpenSandbox={() => setSandboxOpen(true)} />
      </main>

      {/* 19. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* ACTUAL TARAZU SAAS APPLICATION / WORKFLOW MODALS */}
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
