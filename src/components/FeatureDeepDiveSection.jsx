import React, { useState, useEffect } from 'react';
import { Edit3, ShieldCheck, FileCheck, Lock, CheckCircle2, ArrowDown, Cpu, Calculator } from 'lucide-react';

export function FeatureDeepDiveSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const deepDives = [
    {
      id: "digital-testing",
      title: "Digital Testing Workspace",
      sub: "Structured Data Collection & Real-Time Guidance",
      icon: Edit3,
      bullets: [
        "Standardized observation tables for Model W500 load weight (L), indication (I), and change-point weights (ΔL).",
        "Built-in data validation prevents typing errors, invalid decimal places, or out-of-order readings.",
        "Automatic zero-setting tracking and zero-point error compensation calculations.",
        "Seamless integration with environmental sensors and standard weight set calibration logs."
      ],
      tag: "CORE TESTING WORKFLOW"
    },
    {
      id: "intelligent-validation",
      title: "Intelligent Validation Engine",
      sub: "Automated Non-Linear OIML R-76 MPE Boundary Checks",
      icon: ShieldCheck,
      bullets: [
        "Evaluates stepped maximum permissible errors (MPE) at 500e, 2000e, and 10000e thresholds.",
        "Calculates true corrected error Error = Indication − Reference with 100% mathematical precision.",
        "Instant visual pass/fail indicators per test point, load direction (ascending/descending), and test module.",
        "Supports multi-interval and multi-range weighing instruments without manual table lookups."
      ],
      tag: "RULE-BASED COMPLIANCE"
    },
    {
      id: "automated-reporting",
      title: "Automated Reporting Engine",
      sub: "Instant Multi-Format Report Generation",
      icon: FileCheck,
      bullets: [
        "Generates publication-ready A4 PDF reports compliant with Legal Metrology documentation standards.",
        "Provides editable Word (.docx) export for specialized client documentation requirements.",
        "Outputs structured JSON data payloads for lab information management systems (LIMS).",
        "Embeds dynamic QR codes linking to public tamper-verification portals."
      ],
      tag: "REPORT GENERATION"
    },
    {
      id: "governance-traceability",
      title: "Governance & Traceability",
      sub: "Cryptographic Tamper Security & Complete Audit Trail",
      icon: Lock,
      bullets: [
        "Generates immutable SHA-256 cryptographic hashes for every finalized test report.",
        "Multi-stage sign-off pipeline: Tester entry → Technical Review → Authorized Signatory approval.",
        "Role-Based Access Control (RBAC) enforcing laboratory security hierarchy.",
        "Complete timestamped audit log tracking every user interaction, edit, and state change."
      ],
      tag: "SECURITY & COMPLIANCE"
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>DEEP DIVE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Engineered for <span className="text-[#007A8C]">Metrological Rigor</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Detailed breakdown of TARAZU's 4 core functional pillars.
          </p>
        </div>

        {/* 4 Deep Dive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deepDives.map((item, idx) => {
            const Icon = item.icon;
            const isLime = idx % 2 === 1;
            const isValidationCard = item.id === "intelligent-validation";

            return (
              <div key={idx} className={`p-8 rounded-3xl border shadow-md space-y-6 flex flex-col justify-between transition-all ${
                isLime 
                  ? 'bg-[#C0D725] border-[#B3C91F] text-slate-900 hover:shadow-lg' 
                  : 'bg-[#007A8C] border-[#006372] text-white hover:shadow-lg'
              }`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                      isLime ? 'bg-slate-900 text-[#C0D725]' : 'bg-white text-[#007A8C]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-md ${
                      isLime ? 'bg-slate-900/15 text-slate-900 border border-slate-900/20' : 'bg-white/20 text-white border border-white/30'
                    }`}>
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black ${isLime ? 'text-slate-900' : 'text-white'}`}>{item.title}</h3>
                    <p className={`text-xs font-mono mt-1 font-bold ${isLime ? 'text-slate-900' : 'text-[#C0D725]'}`}>{item.sub}</p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLime ? 'text-slate-900' : 'text-[#C0D725]'}`} />
                        <span className={isLime ? 'text-slate-800' : 'text-teal-50'}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ANIMATED CALCULATION VISUAL (Requirement 5) inside the Validation Engine card */}
                {isValidationCard && (
                  <div className="mt-4 p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 font-mono text-xs space-y-2 shadow-inner">
                    <div className="text-[10px] text-[#C0D725] font-bold uppercase tracking-wider">
                      DETERMINISTIC CALCULATION PIPELINE
                    </div>
                    
                    <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Reference: 100.0 kg</span>
                      <span className="text-white font-bold">Indication: 100.2 kg</span>
                    </div>

                    <div className="flex justify-center text-[#007A8C]">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>

                    <div className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                      step >= 1 ? 'bg-[#007A8C]/20 border-[#007A8C] text-white' : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      <span className="text-slate-400">Calculated Error:</span>
                      <span className="font-bold text-white">{step >= 1 ? 'Error = +0.2 kg' : 'Running formula...'}</span>
                    </div>

                    <div className="flex justify-center text-[#007A8C]">
                      <ArrowDown className="w-4 h-4" />
                    </div>

                    <div className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                      step >= 3 ? 'bg-emerald-950 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}>
                      <span>Applicable Criterion: Within Limit</span>
                      <span className="font-black text-sm">{step >= 3 ? 'PASS ✓' : 'CHECKING'}</span>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FeatureDeepDiveSection;
