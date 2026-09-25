import React from 'react';
import { 
  Play, 
  Calculator, 
  ShieldCheck, 
  Layers, 
  Scale, 
  UserCheck, 
  FileCheck, 
  Database, 
  History, 
  GitBranch,
  ArrowRight,
  Cpu,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export function CoreFeaturesSection({ onOpenSandbox }) {
  const coreEngines = [
    {
      title: "Applicability Engine",
      desc: "Analyzes Model W500, Class III, Max 500 kg to auto-bind mandatory OIML R-76 test clauses.",
      icon: Sliders,
      tag: "Engine 01"
    },
    {
      title: "Rule Configuration",
      desc: "Houses legal metrology tolerance algorithms, MPE step limits, and regional standard rule sets.",
      icon: Cpu,
      tag: "Engine 02"
    },
    {
      title: "Calculation Engine",
      desc: "Computes Error E = 100.2 kg − 100.0 kg = +0.2 kg with zero human calculation error.",
      icon: Calculator,
      tag: "Engine 03"
    },
    {
      title: "Validation & Compliance",
      desc: "Evaluates calculated error (+0.2 kg) against MPE limit (±0.5 kg) to generate binary PASS/FAIL result.",
      icon: ShieldCheck,
      tag: "Engine 04"
    }
  ];

  const coreFeatures = [
    {
      title: "Digital Test Sessions",
      desc: "Create structured digital test runs linked to specific instruments, environmental conditions, and test standards.",
      icon: Play,
      tag: "Workflow"
    },
    {
      title: "Automated Calculations",
      desc: "Instant turning-point computation, delta-L corrections, and rounding calculations executed without manual formulas.",
      icon: Calculator,
      tag: "Engine"
    },
    {
      title: "Rule-Based Validation",
      desc: "Automatic evaluation of maximum permissible error (MPE) limits across Class I, II, III & IV NAWI categories.",
      icon: ShieldCheck,
      tag: "Compliance"
    },
    {
      title: "Applicability Engine",
      desc: "Intelligent selection of mandatory vs optional test modules based on instrument classification and capacity.",
      icon: Layers,
      tag: "Intelligence"
    },
    {
      title: "Test Equipment Tracking",
      desc: "Track reference standard weights, calibration certificate expiry dates, and uncertainty values per test.",
      icon: Scale,
      tag: "Traceability"
    },
    {
      title: "Review & Approval Workflow",
      desc: "Multi-tier approval pipeline separating Tester entry, Technical Reviewer sign-off, and Approver authorization.",
      icon: UserCheck,
      tag: "Governance"
    },
    {
      title: "Automated PDF/DOCX Reports",
      desc: "Generate standardized, print-ready OIML R-76 evaluation reports in PDF, DOCX, and JSON interchange formats.",
      icon: FileCheck,
      tag: "Reporting"
    },
    {
      title: "Central Report Repository",
      desc: "Searchable, filterable cloud database storing all historical test sessions, draft reports, and finalized seals.",
      icon: Database,
      tag: "Storage"
    },
    {
      title: "Immutable Audit Trail",
      desc: "Cryptographic event logging tracking every data entry, value change, timestamp, and user action.",
      icon: History,
      tag: "Security"
    },
    {
      title: "Version-Controlled Rules",
      desc: "Maintain strict version control over metrological evaluation algorithms, formulas, and tolerance tables.",
      icon: GitBranch,
      tag: "Versioning"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>ARCHITECTURE &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            The Central <span className="text-[#007A8C]">TARAZU CORE</span> &amp; Engines
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Four connected deterministic engines powering every NAWI type evaluation.
          </p>
        </div>

        {/* Central TARAZU CORE Visual Diagram */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-16 border-2 border-[#007A8C] shadow-2xl relative">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#C0D725] uppercase tracking-wider font-bold block mb-1">
              CENTRAL SYSTEM ARCHITECTURE
            </span>
            <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-2xl bg-[#007A8C] text-white font-black text-xl font-display shadow-lg shadow-[#007A8C]/30 border border-[#C0D725]/40">
              <Cpu className="w-6 h-6 text-[#C0D725]" />
              <span>TARAZU CORE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreEngines.map((eng, idx) => {
              const Icon = eng.icon;
              return (
                <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-[#007A8C] transition group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#007A8C]/20 text-[#C0D725] flex items-center justify-center font-bold border border-[#007A8C]/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#007A8C] font-bold">{eng.tag}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{eng.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono">{eng.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            const isLimeHighlight = idx % 2 === 1;
            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border shadow-md transition-all duration-300 group flex flex-col justify-between ${
                  isLimeHighlight 
                    ? 'bg-[#C0D725] border-[#B3C91F] text-slate-900 hover:shadow-lg'
                    : 'bg-[#007A8C] border-[#006372] text-white hover:shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-xs ${
                      isLimeHighlight 
                        ? 'bg-slate-900 text-[#C0D725]'
                        : 'bg-white text-[#007A8C]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      isLimeHighlight
                        ? 'bg-slate-900/15 text-slate-900 border border-slate-900/20'
                        : 'bg-white/20 text-white border border-white/30'
                    }`}>
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-black ${isLimeHighlight ? 'text-slate-900' : 'text-white'}`}>
                    {feat.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isLimeHighlight ? 'text-slate-800' : 'text-teal-50'}`}>
                    {feat.desc}
                  </p>
                </div>

                <div className={`pt-4 mt-4 border-t flex items-center justify-between text-xs font-black group-hover:translate-x-1 transition-transform ${
                  isLimeHighlight ? 'border-slate-900/20 text-slate-900' : 'border-white/20 text-[#C0D725]'
                }`}>
                  <span>Explore Feature</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenSandbox}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-base font-extrabold shadow-lg shadow-[#007A8C]/30 transition-all cursor-pointer active:scale-95 border-b-2 border-[#C0D725]"
          >
            <span>Launch Live Sandbox &amp; Experience All Features</span>
            <ArrowRight className="w-5 h-5 text-[#C0D725]" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default CoreFeaturesSection;
