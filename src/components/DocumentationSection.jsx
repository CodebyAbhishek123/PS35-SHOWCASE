import React, { useState } from 'react';
import { 
  FileText, Download, CheckCircle2, ShieldCheck, Calculator, ExternalLink, Eye 
} from 'lucide-react';

export function DocumentationSection({ onOpenSampleReport }) {
  const [activeDocTab, setActiveDocTab] = useState('math');

  const mathFormulas = [
    {
      title: "Corrected Indication (P)",
      formula: "P = I + 0.5e - ΔL",
      desc: "Clause A.4.4. Calculates actual load turning point by measuring small sub-division weights ΔL needed to cause indication I to flicker to I + e."
    },
    {
      title: "True Error (E)",
      formula: "E = P - L",
      desc: "Calculates difference between corrected indication P and actual applied test load L before zero adjustment."
    },
    {
      title: "Zero-Corrected Error (Ec)",
      formula: "Ec = E - E0",
      desc: "Adjusts true error by subtracting zero load error E0. This Ec value is compared directly against OIML R-76 MPE tables."
    }
  ];

  const legalClauses = [
    {
      clause: "Clause A.4.4",
      title: "Determination of Turning Point Error",
      detail: "Specifies use of small weights (0.1e) added to load receptor until display changes to next division."
    },
    {
      clause: "Table 3 & 4",
      title: "Maximum Permissible Errors (MPE)",
      detail: "Defines non-linear error limits: ±0.5e (0 to 500e), ±1.0e (500e to 2000e), ±1.5e (2000e to 10000e) for Class III."
    },
    {
      clause: "Clause A.4.7",
      title: "Eccentricity (Corner Load) Test",
      detail: "Requires testing at 1/3 Max (or 1/4 Max) across 5 standard platform locations with error not exceeding MPE."
    },
    {
      clause: "Clause A.4.10",
      title: "Repeatability Verification",
      detail: "Demands 10 successive weighings at 50% & 100% Max; max difference must not exceed absolute value of MPE."
    }
  ];

  return (
    <section id="documentation" className="py-20 md:py-28 relative border-t border-slate-200 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#5842F6]/20 text-xs font-bold text-[#5842F6]">
            <span>STATUTORY REFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Technical Documentation & <span className="text-[#5842F6]">OIML Formats</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed mathematical formulations, test clause references, and downloadable report samples.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#F8FAFC] p-1.5 rounded-2xl border border-slate-200 inline-flex gap-2">
            <button
              onClick={() => setActiveDocTab('math')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeDocTab === 'math' ? 'bg-[#5842F6] text-white shadow-md' : 'text-slate-600 hover:text-[#5842F6]'
              }`}
            >
              Math Engine Equations
            </button>
            <button
              onClick={() => setActiveDocTab('clauses')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeDocTab === 'clauses' ? 'bg-[#5842F6] text-white shadow-md' : 'text-slate-600 hover:text-[#5842F6]'
              }`}
            >
              OIML R-76 Clauses
            </button>
            <button
              onClick={() => setActiveDocTab('legal')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeDocTab === 'legal' ? 'bg-[#5842F6] text-white shadow-md' : 'text-slate-600 hover:text-[#5842F6]'
              }`}
            >
              Legal Metrology Act 2009
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#F8FAFC] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-12">
          
          {activeDocTab === 'math' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mathFormulas.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                  <div className="p-2.5 w-fit rounded-xl bg-[#EEF2FF] text-[#5842F6] border border-indigo-200">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                  <div className="p-3 rounded-xl bg-[#EEF2FF]/70 font-mono text-xs text-[#5842F6] font-bold border border-indigo-200">
                    {item.formula}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeDocTab === 'clauses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalClauses.map((c, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#EEF2FF] text-[#5842F6] border border-[#5842F6]/20">
                    {c.clause}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{c.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          )}

          {activeDocTab === 'legal' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#5842F6]" />
                <span>Statutory Mandate under Legal Metrology Act, 2009</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Section 19 mandates that every weight or measure model intended for manufacturing, importing, or commercial transaction must undergo rigorous prototype testing and obtain formal Model Approval from the Central Government.
              </p>
              <div className="p-4 rounded-xl bg-[#EEF2FF] text-xs text-slate-700 leading-relaxed space-y-2 border border-indigo-200">
                <div className="font-bold text-[#5842F6]">Seventh Schedule: Non-Automatic Weighing Instruments</div>
                <div>Requires testing laboratories to issue certificates containing complete metrological logs, environmental observations, and turning point calculations.</div>
              </div>
            </div>
          )}

        </div>

        {/* Sample Download Strip */}
        <div className="bg-[#EEF2FF] rounded-2xl p-6 border border-[#5842F6]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Download Benchmark OIML Datasets & Sample Reports</h4>
            <p className="text-xs text-slate-600">Sample evaluation certificate for Class III 15kg commercial retail scale.</p>
          </div>
          <button
            onClick={() => onOpenSampleReport('REP-2026-001')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#5842F6] hover:bg-[#4338CA] shadow-md shadow-[#5842F6]/30 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Eye className="w-4 h-4" />
            <span>Open Sample Certificate</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default DocumentationSection;
