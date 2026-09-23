import React, { useState } from 'react';
import { BookOpen, FileText, Code, CheckCircle, ExternalLink, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { exportReportToJSON } from '../utils/exportUtils';
import { INITIAL_REPORTS } from '../utils/sampleReportsData';

export function DocumentationSection({ onOpenSampleReport }) {
  const [activeDocTab, setActiveDocTab] = useState('math');

  const oimlClauses = [
    { clause: "Clause 3.2", title: "Principles of Classification", description: "Defines Class I, II, III, IIII based on verification scale interval (e) and number of scale intervals (n = Max/e)." },
    { clause: "Clause 3.5.1", title: "Maximum Permissible Errors (MPE)", description: "Stepped permissible error limits on initial verification: ±0.5e, ±1.0e, ±1.5e." },
    { clause: "Clause A.4.4.3", title: "Turning Point Indication (P)", description: "Determination of true indication using delta-L weights: P = I + 0.5d - delta-L." },
    { clause: "Clause A.4.7", title: "Eccentricity (Corner Load)", description: "Applying 1/3 Max (or 1/4 Max) across four quadrants/corners to verify sensor load symmetry." },
    { clause: "Clause A.4.10", title: "Repeatability Determination", description: "Series of weighings at 50% and 100% Max where (E_max - E_min) <= |MPE|." },
    { clause: "Clause A.4.2", title: "Zero-Setting Accuracy", description: "Ensures residual zero error |E0| does not exceed 0.25e." }
  ];

  const downloadSampleData = () => {
    exportReportToJSON(INITIAL_REPORTS[0]);
  };

  return (
    <section id="documentation" className="py-20 md:py-28 relative border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004741]/10 border border-[#004741]/20 text-xs font-bold text-[#004741]">
            <span>METROLOGICAL SPECIFICATIONS & MANUAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004741]">
            Technical <span className="text-red-600">Documentation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Formal reference guide covering OIML R-76 mathematical formulas, Legal Metrology rules, and system integration.
          </p>
        </div>

        {/* Documentation Sub-Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-white border border-slate-300 shadow-sm">
            <button
              onClick={() => setActiveDocTab('math')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeDocTab === 'math' ? 'bg-[#004741] text-white shadow-md' : 'text-slate-600 hover:text-[#004741]'
              }`}
            >
              Calculation Methodology
            </button>
            <button
              onClick={() => setActiveDocTab('clauses')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeDocTab === 'clauses' ? 'bg-[#004741] text-white shadow-md' : 'text-slate-600 hover:text-[#004741]'
              }`}
            >
              OIML R-76 Clauses
            </button>
            <button
              onClick={() => setActiveDocTab('legal')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeDocTab === 'legal' ? 'bg-[#004741] text-white shadow-md' : 'text-slate-600 hover:text-[#004741]'
              }`}
            >
              Legal Metrology Act 2009
            </button>
          </div>
        </div>

        {/* Tab 1: Math Calculation Methodology */}
        {activeDocTab === 'math' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-teal-50 text-[#004741] border border-teal-200">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004741] text-base">1. Corrected Indication (P)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calculated using the Turning Point method (Clause A.4.4.3). Sub-division weights ($\Delta L$) are placed until the indication shifts by one scale division ($d$).
                </p>
                <div className="p-3 rounded-lg bg-[#F0EDE4] font-mono text-xs text-[#004741] font-bold border border-slate-300">
                  P = I + 0.5d - &Delta;L
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004741] text-base">2. True & Corrected Error</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  True error $E$ is the difference between $P$ and standard test load $L$. The zero-corrected error $E_c$ eliminates residual zero offset $E_0$.
                </p>
                <div className="p-3 rounded-lg bg-[#F0EDE4] font-mono text-xs text-emerald-800 font-bold border border-slate-300 space-y-1">
                  <div>E = P - L</div>
                  <div>Ec = E - E0</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004741] text-base">3. Compliance Determination</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The instrument passes if and only if the absolute zero-corrected error $|E_c|$ does not exceed the Maximum Permissible Error ($mpe$) for every evaluated load.
                </p>
                <div className="p-3 rounded-lg bg-[#F0EDE4] font-mono text-xs text-amber-800 font-bold border border-slate-300">
                  |Ec| &le; |mpe(L)|
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: OIML R-76 Clauses */}
        {activeDocTab === 'clauses' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {oimlClauses.map((c, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#004741]/10 text-[#004741] border border-[#004741]/20">
                  {c.clause}
                </div>
                <h4 className="font-bold text-[#004741] text-sm">{c.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Legal Metrology Act 2009 */}
        {activeDocTab === 'legal' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-[#004741] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Statutory Alignment with Legal Metrology (General) Rules, 2011
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 rounded-xl bg-[#F0EDE4] border border-slate-300 space-y-2">
                <span className="font-bold text-[#004741]">Seventh Schedule: Non-Automatic Weighing Instruments</span>
                <p className="text-slate-600 leading-relaxed">
                  Prescribes technical and metrological requirements aligning completely with OIML R-76 for instruments used in Indian trade and consumer safety.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F0EDE4] border border-slate-300 space-y-2">
                <span className="font-bold text-emerald-800">Section 19: Approval of Models</span>
                <p className="text-slate-600 leading-relaxed">
                  Requires central model approval testing before production or import, backed by standardized laboratory test reports generated by MetronAI.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Downloadable Assets Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F0EDE4] border border-slate-300 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[#004741] text-sm">Download Benchmark OIML Datasets & Sample Reports</h4>
            <p className="text-xs text-slate-600 mt-0.5">Explore machine-readable JSON schemas and verified test outputs.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadSampleData}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#004741]" />
              <span>Export Sample JSON</span>
            </button>

            <button
              onClick={() => onOpenSampleReport('REP-2026-001')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Official Report</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
