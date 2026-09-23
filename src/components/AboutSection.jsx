import React from 'react';
import { ShieldCheck, Scale, Award, Layers, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';

export function AboutSection() {
  const nawiCategories = [
    {
      class: "Class I",
      title: "Special Accuracy (Analytical Balances)",
      eRange: "e ≤ 1 mg, n > 50,000",
      desc: "Used in micro-laboratories, pharmaceutical R&D, chemical analysis, and precious mass standards verification."
    },
    {
      class: "Class II",
      title: "High Accuracy (Jewellery & Precision Scales)",
      eRange: "1 mg ≤ e ≤ 50 mg, n ≤ 100,000",
      desc: "Used in gold bullion trading, gemstones, precision manufacturing, and commercial assay laboratories."
    },
    {
      class: "Class III",
      title: "Medium Accuracy (Retail & Commercial Scales)",
      eRange: "0.1 g ≤ e ≤ 2 g, n ≤ 10,000",
      desc: "Used in grocery retail, supermarket checkout scales, package weighing, agricultural mandi trading, and industrial shipping."
    },
    {
      class: "Class IV",
      title: "Ordinary Accuracy (Weighbridges & Heavy Industrial)",
      eRange: "e ≥ 5 g, n ≤ 1,000",
      desc: "Used in highway weighbridges, truck scale terminals, freight depots, bulk cargo, and construction material yards."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200 bg-[#F8FAFC] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF2FF] border border-[#5842F6]/20 text-xs font-bold text-[#5842F6]">
            <span>LEGAL METROLOGY CONTEXT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            About <span className="text-[#5842F6]">Legal Metrology & OIML R-76</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Legal metrology protects trade fairness and consumer rights by establishing uniform legal standards for measuring instruments across India.
          </p>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EEF2FF] border border-[#5842F6]/30 text-[#5842F6]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">The Statutory Mandate</h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Under Section 19 of the <strong className="text-slate-900 font-bold">Legal Metrology Act, 2009</strong>, every Non-Automatic Weighing Instrument (NAWI) intended for trade, commerce, healthcare, or industrial weighing must obtain <strong className="text-[#5842F6] font-bold">Model Approval</strong> from the Central Government before manufacture, import, or sale.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Model approvals are granted only after designated laboratories (such as Regional Reference Standards Laboratories - RRSLs and NABL accredited centres) conduct exhaustive type evaluation as per <strong className="text-slate-900 font-bold">OIML Recommendation R 76-1:2006</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold text-slate-400">Primary Technical Standard</div>
                <div className="text-sm font-black text-[#5842F6] mt-0.5">OIML R-76-1 (2006)</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold text-slate-400">Protected Economic Base</div>
                <div className="text-sm font-black text-[#5842F6] mt-0.5">1.4 Billion Consumers & Trade</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-black text-slate-900">OIML Accuracy Class Hierarchy</span>
                <span className="text-xs font-bold text-[#5842F6] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full">Table 3 Guidelines</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#EEF2FF] border border-[#5842F6]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#5842F6]" />
                    <span className="text-xs font-black text-slate-900">Class I</span>
                  </div>
                  <span className="text-xs font-bold text-[#5842F6]">Special Accuracy</span>
                </div>

                <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#06B6D4]" />
                    <span className="text-xs font-black text-slate-900">Class II</span>
                  </div>
                  <span className="text-xs font-bold text-[#06B6D4]">High Accuracy</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#00C853]" />
                    <span className="text-xs font-black text-slate-900">Class III</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700">Medium Accuracy</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-slate-500" />
                    <span className="text-xs font-black text-slate-900">Class IIII</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">Ordinary Accuracy</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 NAWI Categories Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-slate-900">NAWI Categories Covered Under The System</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nawiCategories.map((inst, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#5842F6] transition-all shadow-2xs">
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#EEF2FF] text-[#5842F6] uppercase mb-2">
                  {inst.class}
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{inst.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{inst.desc}</p>
                <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-indigo-900 font-bold">
                  {inst.eRange}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
