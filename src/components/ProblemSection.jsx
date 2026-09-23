import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, FileSpreadsheet, Clock, ShieldAlert } from 'lucide-react';

export function ProblemSection() {
  const painPoints = [
    {
      title: "Manual Spreadsheet Vulnerabilities",
      desc: "Laboratories manually calculate turning points, delta-L corrections, and zero adjustments in custom Excel sheets, resulting in frequent computational mistakes.",
      icon: FileSpreadsheet,
      impact: "Up to 18% calculation discrepancy rates in complex multi-range scales."
    },
    {
      title: "Complex OIML R-76 Stepped MPE Rules",
      desc: "MPE tolerances step non-linearly at 500e, 2000e, and 10000e thresholds across Class I to IV. Manual evaluation easily overlooks boundary limit breaches.",
      icon: AlertTriangle,
      impact: "Faulty models approved or legitimate models wrongfully rejected."
    },
    {
      title: "Lack of National Format Uniformity",
      desc: "Different state laboratories and RRSL centres produce test reports in divergent Word and spreadsheet formats, causing verification delays at the national registry.",
      icon: Clock,
      impact: "Weeks of back-and-forth communication between manufacturers and DoCA."
    },
    {
      title: "Zero Cryptographic Tamper Protection",
      desc: "Standard PDFs and printed sheets lack cryptographic hashing and tamper-evident signatures, leaving reports vulnerable to unauthorized post-test manipulation.",
      icon: ShieldAlert,
      impact: "Potential legal liabilities under the Legal Metrology Act 2009."
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 relative border-t border-slate-200 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-600">
            <span>THE CHALLENGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Why Manual NAWI Testing <span className="text-rose-600">Falls Short</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Type evaluation for model approval under OIML Recommendation R-76 is rigorous, demanding dozens of precise mathematical validations per instrument.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 relative overflow-hidden group hover:border-rose-300 transition-all shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2 text-xs font-bold text-rose-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>Impact: {item.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Before vs After */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Traditional Spreadsheets vs. <span className="text-[#5842F6]">TARAZU Platform</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Legacy Column */}
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-rose-600 font-extrabold pb-2 border-b border-rose-200">
                <XCircle className="w-5 h-5" />
                <span>Legacy Manual Workflow</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Manual entry of I and delta-L with spreadsheet formulas prone to cell corruption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Human cross-referencing against OIML R-76 MPE tables; high risk of misclassification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Report generation takes 3 to 7 days per instrument with manual Word formatting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Reports stored in local hard drives with no centralized search or cryptographic traceability.</span>
                </li>
              </ul>
            </div>

            {/* TARAZU Column */}
            <div className="bg-[#EEF2FF]/80 border border-indigo-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[#5842F6] font-extrabold pb-2 border-b border-indigo-200">
                <CheckCircle2 className="w-5 h-5" />
                <span>TARAZU Automated Engine</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5842F6] shrink-0 mt-0.5" />
                  <span>Real-time turning-point correction engine: P = I + 0.5e - deltaL, Ec = E - E0 with 100% precision.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5842F6] shrink-0 mt-0.5" />
                  <span>Automated MPE boundary verification for Classes I, II, III & IV with instant pass/fail badges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5842F6] shrink-0 mt-0.5" />
                  <span>Instant multi-format export: Printable A4, PDF, Editable Word (.doc), and JSON data interchange.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5842F6] shrink-0 mt-0.5" />
                  <span>SHA-256 cryptographic hash & tamper-evident QR verification compliant with Legal Metrology 2009.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ProblemSection;
