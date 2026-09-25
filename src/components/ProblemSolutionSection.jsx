import React, { useState } from 'react';
import { 
  Sparkles, 
  XCircle, 
  CheckCircle2, 
  FileText, 
  Calculator, 
  FileSpreadsheet, 
  Lock,
  ArrowRight,
  RotateCw,
  ShieldCheck,
  Zap,
  Cpu
} from 'lucide-react';

export function ProblemSolutionSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const challenges = [
    {
      id: "01",
      num: "01",
      title: "Manual Data Entry",
      icon: FileSpreadsheet,
      badge: "LEGACY SPREADSHEET RISK",
      problemSubtitle: "Fatigue & Typo Risks",
      problem: "Paper note-taking and manual Excel copy-paste cause technician fatigue and transcription errors in tare & load values.",
      impact: "~45 mins wasted per test run",
      
      // Solution Side
      solutionBadge: "TARAZU DIGITAL ENGINE",
      solutionTitle: "Guided Digital Entry",
      solutionSubtitle: "Instant Validation & Range Checks",
      solution: "Smart guided digital forms with instant range boundaries, auto-fill standard loads, and automated field validation.",
      benefitPills: ["Range Bounds", "Auto-Fill Standard", "Zero Typos"],
      solutionIcon: Zap,
    },
    {
      id: "02",
      num: "02",
      title: "Calculation Errors",
      icon: Calculator,
      badge: "BROKEN EXCEL FORMULAS",
      problemSubtitle: "Incorrect MPE Limits",
      problem: "Accidental formula modifications in Excel risk false pass/fail conclusions on stepped Maximum Permissible Error tables.",
      impact: "High risk of audit failure",
      
      // Solution Side
      solutionBadge: "OIML R-76-1 MATH ENGINE",
      solutionTitle: "Stepped MPE Engine",
      solutionSubtitle: "Automated Turning Point Math",
      solution: "Deterministic calculation of P = I + 0.5e − ΔL, auto rounding, and stepped MPE pass/fail checks for Class I–IV scales.",
      benefitPills: ["P = I + 0.5e − ΔL", "Stepped MPE", "Class I–IV Auto"],
      solutionIcon: Cpu,
    },
    {
      id: "03",
      num: "03",
      title: "Inconsistent Reports",
      icon: FileText,
      badge: "WORD TEMPLATE CHAOS",
      problemSubtitle: "Missing Mandatory Clauses",
      problem: "Scattered Word templates lead to broken table alignments, missing OIML clauses, and unstandardized lab branding.",
      impact: "1-2 hours reformatting per report",
      
      // Solution Side
      solutionBadge: "ONE-CLICK UNIFIED EXPORT",
      solutionTitle: "Standardized Reports",
      solutionSubtitle: "Publication-Ready PDF & DOCX",
      solution: "One-click generation of ISO/IEC 17025 audit-ready PDFs, editable DOCX certificates, and structured JSON raw data.",
      benefitPills: ["Formal PDF", "Editable DOCX", "Branded Header"],
      solutionIcon: FileText,
    },
    {
      id: "04",
      num: "04",
      title: "Zero Traceability",
      icon: Lock,
      badge: "NO AUDIT INTEGRITY",
      problemSubtitle: "Unverified Modifications",
      problem: "Unprotected spreadsheets cannot prove who recorded raw data, when reviews happened, or if values were altered after the test.",
      impact: "Zero defensible audit trail",
      
      // Solution Side
      solutionBadge: "SHA-256 DIGITAL TAMPER SEAL",
      solutionTitle: "Cryptographic Audit Trail",
      solutionSubtitle: "Immutable History & QR Portal",
      solution: "Tamper-evident SHA-256 cryptographic verification hashes, multi-tier digital sign-off pipeline, and live QR code checks.",
      benefitPills: ["SHA-256 Hash", "Multi-Tier Sign-off", "QR Verification"],
      solutionIcon: ShieldCheck,
    }
  ];

  return (
    <section id="product" className="py-14 sm:py-18 bg-white text-slate-800 relative border-b border-slate-200 overflow-hidden">
      
      {/* Background Soft Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[300px] bg-[#007A8C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-[11px] font-mono font-bold text-[#007A8C] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>THE PARADIGM SHIFT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Stop rebuilding the same report in <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0F2747] via-[#007A8C] to-[#0F9D8A] bg-clip-text text-transparent">
              Excel and Word.
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Hover or tap any card below to flip between the legacy spreadsheet risk and the automated TARAZU solution.
          </p>
        </div>

        {/* 4-Column 3D Flip Cards Grid (Screen-fit & Interactive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {challenges.map((item) => {
            const ProblemIcon = item.icon;
            const SolutionIcon = item.solutionIcon;
            const isFlippedManual = flippedCards[item.id];

            return (
              <div
                key={item.id}
                className="perspective-1000 w-full h-[320px] relative group"
                onClick={() => toggleFlip(item.id)}
              >
                {/* 3D Flip Inner Card */}
                <div
                  className={`w-full h-full relative transform-style-3d transition-transform duration-700 ease-out cursor-pointer ${
                    isFlippedManual ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                  }`}
                >
                  
                  {/* ================= FRONT FACE: THE PROBLEM (LEGACY RISK) ================= */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-5 bg-gradient-to-b from-[#FFF5F5] via-white to-[#FFF0F2] border border-rose-200 shadow-md hover:shadow-lg flex flex-col justify-between transition-all">
                    
                    {/* Front Header */}
                    <div>
                      <div className="flex items-center justify-between pb-2.5 border-b border-rose-100 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-rose-100/80 border border-rose-200 text-rose-600 flex items-center justify-center font-bold shadow-2xs">
                            <ProblemIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-extrabold text-rose-500">
                            #{item.num}
                          </span>
                        </div>

                        <span className="text-[9px] font-mono font-black text-rose-700 bg-rose-100/90 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          LEGACY RISK
                        </span>
                      </div>

                      {/* Title & Pain */}
                      <div className="space-y-1.5">
                        <h3 className="text-base font-black text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-rose-600">
                          {item.problemSubtitle}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed pt-1">
                          {item.problem}
                        </p>
                      </div>
                    </div>

                    {/* Front Bottom Prompt */}
                    <div className="pt-2 border-t border-rose-100/80 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-rose-700/80 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/60">
                        {item.impact}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-[#007A8C] font-mono">
                        <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>Hover to Solve</span>
                      </div>
                    </div>

                  </div>

                  {/* ================= BACK FACE: THE SOLUTION (TARAZU ENGINE) ================= */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-5 bg-gradient-to-b from-[#0F2747] via-[#0B1E37] to-[#08172C] text-white border-2 border-[#007A8C] shadow-xl flex flex-col justify-between transition-all">
                    
                    {/* Back Header */}
                    <div>
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#007A8C]/30 border border-teal-400/40 text-[#C0D725] flex items-center justify-center font-bold shadow-2xs">
                            <SolutionIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-extrabold text-[#C0D725]">
                            SOLVED
                          </span>
                        </div>

                        <span className="text-[9px] font-mono font-black text-slate-950 bg-[#C0D725] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                          TARAZU WAY
                        </span>
                      </div>

                      {/* Title & Solution Description */}
                      <div className="space-y-1.5">
                        <h3 className="text-base font-black text-white tracking-tight flex items-center gap-1.5">
                          <span>{item.solutionTitle}</span>
                        </h3>
                        <p className="text-[11px] font-semibold text-teal-300">
                          {item.solutionSubtitle}
                        </p>
                        <p className="text-xs text-slate-300 leading-relaxed pt-1">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {/* Back Bottom Benefit Pills */}
                    <div className="pt-2 border-t border-white/10">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.benefitPills.map((pill, pIdx) => (
                          <span 
                            key={pIdx}
                            className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/10 text-teal-200 border border-white/10"
                          >
                            ✓ {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProblemSolutionSection;
