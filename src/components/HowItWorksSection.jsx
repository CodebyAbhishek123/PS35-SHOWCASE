import React, { useState } from 'react';
import { Play, Edit3, Calculator, UserCheck, FileCheck, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export function HowItWorksSection({ onOpenSandbox, onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "1",
      title: "Create Test Session",
      short: "Select the weighing instrument profile, configure ambient laboratory conditions, and link calibrated reference standards.",
      icon: Play,
      details: [
        "Select Instrument Model, Accuracy Class (I, II, III, IV), Max capacity, and e/d interval.",
        "Link ambient environmental sensors (Temperature, Humidity, Pressure).",
        "Select traceable reference mass standards with active calibration certificates."
      ],
      tag: "STEP 01: SETUP"
    },
    {
      num: "2",
      title: "Enter Observations",
      short: "Capture nominal loads, indicated readouts, and sub-division turning point weights in guided digital forms with input validation.",
      icon: Edit3,
      details: [
        "Guided observation tables prevent out-of-range inputs or typing mistakes.",
        "Capture load ascending and descending sequences seamlessly.",
        "Support zero-tracking, tare, eccentricity, and repeatability test modules."
      ],
      tag: "STEP 02: INGESTION"
    },
    {
      num: "3",
      title: "Validate & Calculate",
      short: "Deterministic rules engine computes turning points (P) and corrected errors (Ec), immediately checking against OIML R-76 MPE limits.",
      icon: Calculator,
      details: [
        "Instant calculation of P = I + 0.5e − ΔL and intrinsic error E = P − L.",
        "Automated comparison against stepped MPE thresholds (500e, 2000e, 10000e).",
        "Clear pass/fail indicators with transparent formula traceability."
      ],
      tag: "STEP 03: ENGINE"
    },
    {
      num: "4",
      title: "Reviewer Approval",
      short: "Route test records to an authorised technical reviewer for verification, remarks, and human-controlled sign-off.",
      icon: UserCheck,
      details: [
        "Reviewer verifies measurement stability, calibration validity, and calculations.",
        "Add controlled technical remarks or request re-testing if necessary.",
        "Applies authorized digital sign-off (human retains final technical approval)."
      ],
      tag: "STEP 04: GOVERNANCE"
    },
    {
      num: "5",
      title: "Generate & Store Report",
      short: "Issue standardized, tamper-evident PDF/DOCX reports with SHA-256 seals, archived in a searchable cloud repository.",
      icon: FileCheck,
      details: [
        "Generate publication-ready OIML R-76-1 evaluation reports in seconds.",
        "Embed cryptographic SHA-256 verification seals and QR audit codes.",
        "Archive reports in an indexed, searchable cloud database for instant audit access."
      ],
      tag: "STEP 05: REPORT"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5-STEP LABORATORY WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            How <span className="text-[#007A8C]">NAWI TestPro</span> Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From raw readings to audit-ready reports in five structured, transparent steps.
          </p>
        </div>

        {/* 5-Step Horizontal Diagram Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#007A8C] border-[#007A8C] text-white shadow-lg shadow-[#007A8C]/20 scale-102'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isActive ? 'bg-white/20 text-[#C0D725]' : 'bg-slate-100 text-[#007A8C]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#C0D725]' : 'text-slate-400'}`}>
                    0{step.num}
                  </span>
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-[11px] line-clamp-2 mt-1 ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>
                    {step.short}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase View */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E6F4F6] text-[#007A8C] text-xs font-mono font-bold">
              <span>{steps[activeStep].tag}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              {steps[activeStep].title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {steps[activeStep].short}
            </p>

            <ul className="space-y-2.5 pt-2">
              {steps[activeStep].details.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#007A8C] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-[#007A8C] hover:bg-[#006372] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-[#C0D725]" />
              </button>

              <button
                onClick={onOpenSandbox}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <span>Try in Sandbox</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-400 font-bold">
              <span>LIVE WORKFLOW SIMULATION</span>
              <span className="text-[#007A8C]">STAGE {steps[activeStep].num}/5</span>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl text-slate-200 space-y-2 border border-slate-800">
              <div className="text-[#C0D725] font-bold">// Stage Output Snapshot</div>
              <div className="text-slate-300">Target: NAWI Type Evaluation Session</div>
              <div className="text-slate-300">Method: OIML R-76-1 Compliant</div>
              <div className="text-emerald-400 font-bold">&gt; Status: Validated &amp; Ready for Next Step</div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#007A8C]" />
              <span>Human approval retained at Stage 4 before final seal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
