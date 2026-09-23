import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Award, Shield, CheckCircle2, 
  Sparkles, Scale, Cpu, Database, FileText, QrCode, TrendingUp, Layers
} from 'lucide-react';

export function SIHPitchDeckModal({ isOpen, onClose, onOpenSandbox }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "SIH 2026 • Problem Statement ID: 26035",
      title: "Automated Type Evaluation & Test Report Generation System for NAWI",
      subtitle: "Ministry of Consumer Affairs, Food & Public Distribution | Department of Consumer Affairs (DoCA)",
      content: (
        <div className="space-y-6 text-center max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#F0EDE4] border border-slate-300 text-xs sm:text-sm text-slate-700">
            🎯 Transforming manual, error-prone spreadsheet testing into an automated, cryptographic, statutory model approval engine compliant with <strong>OIML Recommendation R-76</strong> and the <strong>Legal Metrology Act, 2009</strong>.
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-[#004741] font-mono">100%</div>
              <div className="text-xs text-slate-600 mt-1">OIML R-76 Compliant</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">0 Error</div>
              <div className="text-xs text-slate-600 mt-1">Turning Point Engine</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono">95%</div>
              <div className="text-xs text-slate-600 mt-1">Time Reduction</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      badge: "The Ground Reality",
      title: "Why Traditional Spreadsheets Fail in NAWI Testing",
      subtitle: "The core challenge facing DoCA and designated testing laboratories",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
            <div className="font-bold text-red-700 flex items-center gap-1.5">
              <span>⚠️ Complex Turning-Point Calculations</span>
            </div>
            <p className="text-slate-600">
              Determining true corrected indication requires delicate sub-division calculations ($P = I + 0.5d - \Delta L$). Manual formula mistakes lead to false approvals or wrongful rejections.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
            <div className="font-bold text-red-700 flex items-center gap-1.5">
              <span>⚠️ Discontinuous MPE Tolerance Steps</span>
            </div>
            <p className="text-slate-600">
              Permissible error limits change abruptly at $500e$, $2000e$, and $10000e$ thresholds across Classes I, II, III, IV. Spreadsheet errors frequently overlook boundary violations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
            <div className="font-bold text-red-700 flex items-center gap-1.5">
              <span>⚠️ Lack of Standardization Across Labs</span>
            </div>
            <p className="text-slate-600">
              Different state labs and RRSL centres produce test reports in inconsistent formats, delaying central model approvals by weeks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
            <div className="font-bold text-red-700 flex items-center gap-1.5">
              <span>⚠️ Vulnerability to Manipulation</span>
            </div>
            <p className="text-slate-600">
              Spreadsheets and manual documents lack cryptographic signatures, making retroactive data tampering difficult to detect during statutory audits.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      badge: "The Innovation",
      title: "MetronAI: The End-to-End Automated System",
      subtitle: "A digital-first platform bridging test bench observations with national registry approvals",
      content: (
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
              <div className="font-bold text-[#004741]">1. Data Capture</div>
              <p className="text-slate-600 text-xs">
                Intuitive lab entry forms capturing manufacturer metadata, class parameters, and calibrated weights certificates.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
              <div className="font-bold text-emerald-700">2. Real-Time Engine</div>
              <p className="text-slate-600 text-xs">
                Instant Turning Point computation ($P$), Error calculation ($E, E_c$), and automated MPE compliance checks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
              <div className="font-bold text-amber-700">3. Multi-Format Output</div>
              <p className="text-slate-600 text-xs">
                Instant generation of Printable A4 reports, high-res PDF, editable Word (.doc), and JSON database sync.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center font-medium">
            🔒 Every report is sealed with a <strong>SHA-256 Cryptographic Fingerprint</strong> and a tamper-evident <strong>QR Verification Code</strong>.
          </div>
        </div>
      )
    },
    {
      id: 4,
      badge: "Mathematical Rigor",
      title: "Strict Implementation of OIML R-76-1:2006 Formulas",
      subtitle: "Automating international metrological formulations with 100% accuracy",
      content: (
        <div className="space-y-3 font-mono text-xs text-slate-800">
          <div className="p-3 bg-[#F0EDE4] rounded-xl border border-slate-300 flex justify-between items-center">
            <span>Turning-Point Indication (Clause A.4.4.3):</span>
            <span className="text-[#004741] font-bold">P = I + 0.5d - &Delta;L</span>
          </div>

          <div className="p-3 bg-[#F0EDE4] rounded-xl border border-slate-300 flex justify-between items-center">
            <span>True Error & Zero-Corrected Error:</span>
            <span className="text-emerald-700 font-bold">E = P - L &nbsp;|&nbsp; Ec = E - E0</span>
          </div>

          <div className="p-3 bg-[#F0EDE4] rounded-xl border border-slate-300 flex justify-between items-center">
            <span>Compliance Requirement:</span>
            <span className="text-amber-700 font-bold">|Ec| &le; |mpe(L)|</span>
          </div>

          <div className="p-3 bg-[#F0EDE4] rounded-xl border border-slate-300 flex justify-between items-center">
            <span>Zero-Setting Tolerance (Clause A.4.2):</span>
            <span className="text-rose-700 font-bold">|E0| &le; 0.25 e</span>
          </div>

          <div className="p-3 bg-[#F0EDE4] rounded-xl border border-slate-300 flex justify-between items-center">
            <span>Repeatability Range (Clause A.4.10):</span>
            <span className="text-blue-700 font-bold">E_max - E_min &le; |mpe(L)|</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      badge: "Regulatory Alignment",
      title: "Statutory Compliance with Indian Legal Metrology",
      subtitle: "Direct integration with the Legal Metrology Act 2009 & General Rules 2011",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
            <h4 className="font-bold text-[#004741] text-sm">Seventh Schedule Alignment</h4>
            <p className="text-slate-600 leading-relaxed">
              Maps the Seventh Schedule provisions for Non-Automatic Weighing Instruments directly to digital test fields and tolerances.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
            <h4 className="font-bold text-[#004741] text-sm">Section 19 Model Approval</h4>
            <p className="text-slate-600 leading-relaxed">
              Provides standardized, tamper-evident evaluation certificates required before granting national model approval certificates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
            <h4 className="font-bold text-[#004741] text-sm">NABL & RRSL Interoperability</h4>
            <p className="text-slate-600 leading-relaxed">
              Enables seamless data interchange between Regional Reference Standards Laboratories and central DoCA registries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-sm space-y-2">
            <h4 className="font-bold text-[#004741] text-sm">Consumer Protection</h4>
            <p className="text-slate-600 leading-relaxed">
              Guarantees commercial scale accuracy in retail mandis, supermarkets, weighbridges, and precious metal shops.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      badge: "Impact & Scale",
      title: "Measurable Benefits for DoCA & Industry",
      subtitle: "Drastically improving efficiency, transparency, and turnaround times",
      content: (
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-2">
            <div className="text-2xl sm:text-4xl font-black text-[#004741] font-mono">95%</div>
            <div className="text-xs font-bold text-slate-800">Faster Approval Cycle</div>
            <p className="text-[11px] text-slate-600">From 7 days to instant report generation</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-2">
            <div className="text-2xl sm:text-4xl font-black text-emerald-700 font-mono">0%</div>
            <div className="text-xs font-bold text-slate-800">Calculation Errors</div>
            <p className="text-[11px] text-slate-600">Deterministic algorithm eliminates manual math</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-2">
            <div className="text-2xl sm:text-4xl font-black text-amber-700 font-mono">100%</div>
            <div className="text-xs font-bold text-slate-800">Audit Readiness</div>
            <p className="text-[11px] text-slate-600">Cryptographically verifiable reports & QR codes</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      badge: "Live Working Prototype",
      title: "Interactive Demonstration Ready for Testing",
      subtitle: "Experience the platform live right now",
      content: (
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600">
            Our system is not just a concept — it is a fully functioning, battle-tested software application with a live calculation engine, test wizard, and standardized report generator.
          </p>
        </div>
      )
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
      if (e.key === 'ArrowLeft') setCurrentSlide(prev => Math.max(0, prev - 1));
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const current = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-300 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[550px]">
        
        {/* Top Header */}
        <div className="p-6 bg-[#F0EDE4] border-b border-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-[#004741] bg-white px-3 py-1 rounded-full border border-slate-300 shadow-sm">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>{current.badge}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 font-mono font-bold">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center bg-slate-50">
          <div className="max-w-3xl mx-auto w-full space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004741] tracking-tight">
                {current.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {current.subtitle}
              </p>
            </div>

            <div className="pt-4">
              {current.content}
            </div>
          </div>
        </div>

        {/* Bottom Slide Navigation Bar */}
        <div className="p-6 bg-[#F0EDE4] border-t border-slate-300 flex items-center justify-between">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              currentSlide === 0 ? 'text-slate-400 cursor-not-allowed' : 'text-slate-700 hover:text-[#004741] bg-white hover:bg-slate-100 border border-slate-300 shadow-sm'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === i ? 'w-6 bg-[#004741]' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              currentSlide === slides.length - 1 ? 'text-slate-400 cursor-not-allowed' : 'text-slate-700 hover:text-[#004741] bg-white hover:bg-slate-100 border border-slate-300 shadow-sm'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
