import React from 'react';
import { Landmark, Scale, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export function AboutSection() {
  const instruments = [
    {
      title: "Commercial Retail Scales",
      desc: "Supermarket price-computing, counter scales (Class III) protecting everyday consumer grocery transactions.",
      eRange: "e = 1 g to 10 g",
      capacity: "Up to 30 kg"
    },
    {
      title: "Industrial Platform Scales",
      desc: "Heavy-duty platform scales (Class III) for warehouses, factories, and agricultural APMC mandis.",
      eRange: "e = 20 g to 200 g",
      capacity: "100 kg to 2,000 kg"
    },
    {
      title: "Road & Rail Weighbridges",
      desc: "Multi-load cell weighbridges (Class III) for interstate transport, freight, and toll plaza compliance.",
      eRange: "e = 10 kg to 50 kg",
      capacity: "20,000 kg to 100,000 kg"
    },
    {
      title: "Analytical & Lab Balances",
      desc: "High precision electromagnetic force balances (Class I & II) for pharmaceuticals and bullion/gold trading.",
      eRange: "e = 0.1 mg to 10 mg",
      capacity: "50 g to 500 g"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EDE4] border border-[#004741]/20 text-xs font-bold text-[#004741]">
            <span>REGULATORY CONTEXT & SCOPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#004741]">
            Department of Consumer Affairs <span className="text-[#FF1E27]">& Legal Metrology</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ensuring measurement accuracy and consumer protection across all commercial transactions in India under statutory mandates.
          </p>
        </div>

        {/* 2 Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F0EDE4] border border-[#004741]/30 text-[#004741]">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#004741]">The Statutory Mandate</h3>
                <p className="text-xs text-slate-500">Legal Metrology Act, 2009 & General Rules 2011</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Under Section 19 of the <strong className="text-[#004741] font-bold">Legal Metrology Act, 2009</strong>, every Non-Automatic Weighing Instrument (NAWI) intended for trade, commerce, healthcare, or industrial weighing must obtain <strong className="text-[#FF1E27] font-bold">Model Approval</strong> from the Central Government before manufacture, import, or sale.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Model approvals are granted only after designated laboratories (such as Regional Reference Standards Laboratories - RRSLs and NABL accredited centres) conduct exhaustive type evaluation as per <strong className="text-[#004741] font-bold">OIML Recommendation R 76-1:2006</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F0EDE4] border border-[#004741]/20">
                <div className="text-xs text-slate-600">Standard Followed</div>
                <div className="text-sm font-black text-[#004741] mt-0.5">OIML R-76-1 (2006)</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F0EDE4] border border-[#004741]/20">
                <div className="text-xs text-slate-600">Beneficiary</div>
                <div className="text-sm font-black text-[#004741] mt-0.5">1.4 Billion Consumers & Trade</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#F0EDE4] p-6 rounded-2xl border border-[#004741]/20 space-y-4 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[#004741]/20">
                <span className="text-sm font-black text-[#004741]">OIML Accuracy Class Hierarchy</span>
                <span className="text-xs text-emerald-700 font-mono font-bold">Table 3 (Clause 3.2)</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-white border border-emerald-300 flex justify-between items-center shadow-xs">
                  <div>
                    <div className="font-bold text-emerald-700">Class I (Special)</div>
                    <div className="text-slate-600">Analytical & Micro Balances (n ≥ 50,000)</div>
                  </div>
                  <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">±0.5e to ±1.5e</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-cyan-300 flex justify-between items-center shadow-xs">
                  <div>
                    <div className="font-bold text-cyan-700">Class II (High)</div>
                    <div className="text-slate-600">Pharma & Gold Scales (100 ≤ n ≤ 100,000)</div>
                  </div>
                  <span className="px-2 py-1 rounded bg-cyan-100 text-cyan-800 font-mono font-bold">±0.5e to ±1.5e</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-blue-300 flex justify-between items-center shadow-xs">
                  <div>
                    <div className="font-bold text-blue-700">Class III (Medium)</div>
                    <div className="text-slate-600">Retail, Platform Scales, Weighbridges (100 ≤ n ≤ 10,000)</div>
                  </div>
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 font-mono font-bold">±0.5e to ±1.5e</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-amber-300 flex justify-between items-center shadow-xs">
                  <div>
                    <div className="font-bold text-amber-700">Class IV (Ordinary)</div>
                    <div className="text-slate-600">Crane & Heavy Bulk Scales (100 ≤ n ≤ 1,000)</div>
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-mono font-bold">±0.5e to ±1.5e</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Instruments in Scope Cards */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-[#004741]">NAWI Categories Covered Under The System</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {instruments.map((inst, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#F0EDE4] border border-[#004741]/20 hover:border-[#004741] transition-colors shadow-sm">
                <h4 className="font-bold text-[#004741] text-sm mb-1">{inst.title}</h4>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{inst.desc}</p>
                <div className="pt-2 border-t border-[#004741]/20 space-y-1 text-[11px]">
                  <div className="text-slate-600">Scale Interval: <span className="text-[#FF1E27] font-mono font-bold">{inst.eRange}</span></div>
                  <div className="text-slate-600">Capacity: <span className="text-slate-900 font-mono font-bold">{inst.capacity}</span></div>
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
