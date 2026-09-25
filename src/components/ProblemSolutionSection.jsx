import React from 'react';
import { XCircle, CheckCircle2, FileText, Calculator, Database, ShieldAlert, Cpu, ArrowRight, FolderX, History, FileSpreadsheet, ShieldCheck } from 'lucide-react';

export function ProblemSolutionSection() {
  const manualSteps = [
    { title: "Paper Forms", desc: "Handwritten logbooks & paper observations", icon: FileText, risk: "Risk: Unreadable or lost sheets" },
    { title: "Manual Calculations", desc: "Formulas entered by hand on calculators", icon: Calculator, risk: "Risk: Up to 18% calculation error" },
    { title: "Word / Excel", desc: "Custom unvalidated spreadsheet cells", icon: FileSpreadsheet, risk: "Risk: Broken cell formulas" },
    { title: "Scattered Files", desc: "Reports saved on individual PCs", icon: FolderX, risk: "Risk: Zero cloud backup" },
    { title: "Difficult Tracking", desc: "Manual email check-ins for sign-off", icon: ShieldAlert, risk: "Risk: Failed audit readiness" },
  ];

  const tarazuSteps = [
    { title: "Digital Testing", desc: "Structured inputs for Model W500 Class III", icon: CheckCircle2, benefit: "100% required field validation" },
    { title: "Automated Calculation", desc: "Deterministic Error E = 100.2 − 100.0 = +0.2 kg", icon: Cpu, benefit: "Deterministic 0% error engine" },
    { title: "Validation", desc: "Auto MPE evaluation (±0.5 kg boundary check)", icon: ShieldCheck, benefit: "Instant pass/fail thresholds" },
    { title: "Report Repository", desc: "Centralized cloud database storage", icon: Database, benefit: "Instant search & multi-export" },
    { title: "Audit Trail", desc: "Cryptographic SHA-256 event locking", icon: History, benefit: "Immutable ISO/IEC 17025 log" },
  ];

  return (
    <section id="product" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>THE PARADIGM SHIFT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            From Manual Friction to <span className="text-[#007A8C]">Digital Precision</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how TARAZU replaces legacy spreadsheet risks with a structured, automated metrology engine.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Traditional Manual Problems */}
          <div className="bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">MANUAL WORKFLOW</h3>
                  <p className="text-xs text-rose-600 font-bold">Paper forms &amp; unvalidated spreadsheets</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-700 text-[10px] font-mono font-bold">
                HIGH RISK
              </span>
            </div>

            {/* Visual Step-by-Step Flow */}
            <div className="space-y-3">
              {manualSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                        <p className="text-[11px] text-slate-500">{step.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                      {step.risk}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TARAZU Digital Solution */}
          <div className="bg-[#E6F4F6] p-6 sm:p-8 rounded-3xl border border-[#007A8C]/30 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#007A8C]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#007A8C] text-white flex items-center justify-center font-bold shadow-md shadow-[#007A8C]/20">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">TARAZU WORKFLOW</h3>
                  <p className="text-xs text-[#007A8C] font-bold">Structured, rule-based &amp; 100% traceable</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#C0D725] text-slate-950 text-[10px] font-mono font-black">
                VALIDATED
              </span>
            </div>

            {/* Visual Step-by-Step Flow */}
            <div className="space-y-3">
              {tarazuSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#007A8C]/20 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#007A8C]/10 text-[#007A8C]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                        <p className="text-[11px] text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#007A8C] font-bold bg-[#E6F4F6] px-2 py-0.5 rounded border border-[#007A8C]/20">
                      ✓ {step.benefit}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProblemSolutionSection;
