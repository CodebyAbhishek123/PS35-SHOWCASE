import React from 'react';
import { Building2, Scale, Factory, Landmark, ArrowRight, CheckCircle2, Sparkles, Calendar } from 'lucide-react';

export function ForLaboratoriesSection({ onOpenSandbox, onOpenDemo }) {
  const audiences = [
    {
      title: "Commercial Testing Laboratories",
      sub: "Third-party type evaluation & verification labs",
      desc: "Streamline multi-bench testing, eliminate spreadsheet calculation risks, and deliver standardized PDF/DOCX reports to clients faster.",
      icon: Building2,
      points: [
        "Multi-bench workload coordination",
        "Deterministic OIML R-76 MPE evaluation",
        "Standardized client-ready deliverables"
      ]
    },
    {
      title: "Calibration & Metrology Labs",
      sub: "ISO/IEC 17025 accredited facilities",
      desc: "Maintain strict equipment calibration tracking, reference mass cert linkage, and audit-ready SHA-256 logs for accreditation inspections.",
      icon: Scale,
      points: [
        "Calibrated reference standard tracking",
        "Sub-division turning-point precision",
        "Tamper-evident audit trail"
      ]
    },
    {
      title: "Scale Manufacturers",
      sub: "R&D and in-house compliance laboratories",
      desc: "Accelerate pre-compliance model evaluations, test prototype weighing instruments under OIML criteria, and resolve non-conformities before regulatory filing.",
      icon: Factory,
      points: [
        "Rapid prototype batch evaluation",
        "Stepped MPE boundary verification",
        "Pre-submission validation reports"
      ]
    },
    {
      title: "Government & Enterprise Authorities",
      sub: "State & National Legal Metrology departments",
      desc: "Centralize regional laboratory oversight with multi-tenant data isolation, role-based review workflows, and eMaap-ready system architecture.",
      icon: Landmark,
      points: [
        "Regional laboratory oversight",
        "eMaap-ready integration pathways",
        "Centralized statutory repository"
      ]
    }
  ];

  return (
    <section id="for-laboratories" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO IT IS FOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Tailored for <span className="text-[#007A8C]">Metrology Teams</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built to meet the distinct operational needs of laboratories, manufacturers, and legal metrology departments.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-[#007A8C]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F4F6] text-[#007A8C] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900">{aud.title}</h3>
                    <p className="text-xs text-[#007A8C] font-mono font-bold mt-0.5">{aud.sub}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {aud.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {aud.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#007A8C] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={onOpenDemo}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#E6F4F6] text-[#007A8C] text-xs font-bold border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Lab Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pilot CTA Callout Box */}
        <div className="bg-[#007A8C] p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-[#C0D725]">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-[#C0D725] uppercase tracking-wider">
              PILOT INQUIRIES OPEN
            </span>
            <h3 className="text-2xl font-black">
              Modernize your NAWI reporting workflow today.
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              See NAWI TestPro configured with your laboratory's weighing instruments and report templates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 rounded-2xl bg-[#C0D725] hover:bg-[#B3C91F] text-slate-900 text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Demo</span>
            </button>
            <button
              onClick={onOpenSandbox}
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <span>Explore Live Sandbox</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ForLaboratoriesSection;
