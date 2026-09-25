import React, { useState } from 'react';
import { 
  FilePlus, 
  Play, 
  Layers, 
  Edit3, 
  Calculator, 
  CheckSquare, 
  Award, 
  FileCheck,
  ChevronRight,
  Database,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Instrument",
      desc: "Register Model W500, Accuracy Class III, Max 500 kg, e=100 g specifications.",
      icon: FilePlus,
      previewTitle: "1. Instrument Specification",
      detail: "Specifies Model W500, Class III, Max 500 kg, and verification scale interval (e=100 g) per OIML R-76."
    },
    {
      num: "02",
      title: "Test Session",
      desc: "Initialize test session #TS-8942 with ambient temperature 20.4 °C and humidity logs.",
      icon: Play,
      previewTitle: "2. Test Session Configuration",
      detail: "Links standard mass set IDs, calibration cert numbers, and environmental sensors to the active session."
    },
    {
      num: "03",
      title: "Applicable Tests",
      desc: "Applicability engine auto-binds mandatory clauses: Weighing Performance A.4.4, Eccentricity, etc.",
      icon: Layers,
      previewTitle: "3. Applicable Test Selection",
      detail: "Auto-selects required evaluation clauses based on scale class III and maximum capacity parameters."
    },
    {
      num: "04",
      title: "Raw Observations",
      desc: "Input reference load (m = 100.0 kg) and DUT indication (I = 100.2 kg).",
      icon: Edit3,
      previewTitle: "4. Raw Observations Capture",
      detail: "Captures raw observation data with real-time validation checks during data entry."
    },
    {
      num: "05",
      title: "Calculation",
      desc: "Automated engine computes Error E = Indication (100.2 kg) − Reference (100.0 kg) = +0.2 kg.",
      icon: Calculator,
      previewTitle: "5. Calculation Engine Execution",
      detail: "Calculates intrinsic error E = +0.2 kg deterministically with zero human calculation error."
    },
    {
      num: "06",
      title: "Validation",
      desc: "Compares calculated error +0.2 kg against MPE tolerance boundary (±0.5 kg).",
      icon: ShieldCheck,
      previewTitle: "6. Validation & Compliance Check",
      detail: "Evaluates error against applicable maximum permissible error (MPE) thresholds: Result PASS."
    },
    {
      num: "07",
      title: "Review",
      desc: "Technical Lead inspects observations, mathematical proofs, and standard weight certs.",
      icon: CheckSquare,
      previewTitle: "7. Technical Review Workspace",
      detail: "Allows reviewers to inspect raw observation logs and verify calibration validity."
    },
    {
      num: "08",
      title: "Approval",
      desc: "Authorized Signatory applies cryptographic digital authorization seal.",
      icon: Award,
      previewTitle: "8. Approval & Digital Signoff",
      detail: "Cryptographically locks session data permanently with SHA-256 state hashing."
    },
    {
      num: "09",
      title: "Final Report",
      desc: "Generates standardized OIML R-76 Type Evaluation Test Report PDF.",
      icon: FileCheck,
      previewTitle: "9. Final Report Generation",
      detail: "Produces audit-ready documentation complete with embedded tamper-proof QR audit seal."
    },
    {
      num: "10",
      title: "Repository",
      desc: "Archives evaluation dataset, rule versions, and audit trail in secure cloud vault.",
      icon: Database,
      previewTitle: "10. Repository Archival",
      detail: "Persists evaluation record in indexed, searchable legal metrology repository."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>STREAMLINED PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            How <span className="text-[#007A8C]">TARAZU</span> Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A 10-stage end-to-end digital testing and reporting workflow engineered for metrology labs.
          </p>
        </div>

        {/* Connected Workflow Ribbon Visual */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center min-w-[950px] justify-between bg-slate-900 p-3 rounded-2xl border border-slate-800 shadow-lg text-white">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`flex flex-col items-center p-2.5 rounded-xl transition-all font-mono text-center ${
                      isActive 
                        ? 'bg-[#007A8C] text-white shadow-md shadow-[#007A8C]/30 scale-105' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] text-[#C0D725] font-bold">{step.num}</span>
                    <span className="text-xs font-bold whitespace-nowrap mt-0.5">{step.title}</span>
                  </button>

                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#007A8C] shrink-0 opacity-60" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 10-Step Interactive Visual Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Step Selector List */}
          <div className="lg:col-span-5 space-y-2 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? isEven
                        ? 'bg-[#007A8C] border-[#007A8C] shadow-md text-white'
                        : 'bg-[#C0D725] border-[#C0D725] shadow-md text-slate-900'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                      isActive 
                        ? isEven ? 'bg-[#C0D725] text-slate-900' : 'bg-[#007A8C] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step.num}
                    </span>
                    <div>
                      <h3 className={`text-sm font-bold ${
                        isActive 
                          ? isEven ? 'text-white' : 'text-slate-900' 
                          : 'text-slate-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs line-clamp-1 ${
                        isActive 
                          ? isEven ? 'text-teal-100' : 'text-slate-800'
                          : 'text-slate-500'
                      }`}>{step.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive 
                      ? isEven ? 'translate-x-1 text-[#C0D725]' : 'translate-x-1 text-[#007A8C]' 
                      : 'text-slate-400'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Active Step Detailed Visual Mockup */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#007A8C] text-white flex items-center justify-center font-bold shadow-md shadow-[#007A8C]/20">
                  {React.createElement(steps[activeStep].icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#007A8C] uppercase font-bold">STAGE {steps[activeStep].num} OF 10</span>
                  <h3 className="text-lg font-bold text-slate-900">{steps[activeStep].previewTitle}</h3>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-[#F6FAAE] border border-[#C0D725] text-xs font-bold text-slate-900">
                <span>ACTIVE WORKFLOW</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {steps[activeStep].detail}
            </p>

            {/* Mock Visual UI Container */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-3">
                <span>SAMPLE INSTRUMENT: W500 (CLASS III)</span>
                <span>OIML R-76 RULE ENGINE v2.4</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-500">Active Test Parameter</span>
                  <div className="text-slate-900 font-bold mt-1">Ref 100.0 kg | Ind 100.2 kg</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-500">Calculated Output</span>
                  <div className="text-[#007A8C] font-bold mt-1">Error +0.2 kg (PASS)</div>
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs text-[#C0D725] leading-relaxed font-mono">
                &gt; Execution payload validated for stage {steps[activeStep].num} ({steps[activeStep].title})...
                <br />
                &gt; SHA-256 Hash checksum match verified.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
