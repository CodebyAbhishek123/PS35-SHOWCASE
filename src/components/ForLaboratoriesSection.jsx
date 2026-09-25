import React from 'react';
import { Building2, Users, Scale, History, Database, CheckSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export function ForLaboratoriesSection({ onOpenSandbox }) {
  const labBenefits = [
    {
      title: "Centralized Instrument Database",
      desc: "Maintain a single master inventory of all client instruments, specifications, serial numbers, and historical evaluation status.",
      icon: Scale
    },
    {
      title: "Multi-Tester Team Coordination",
      desc: "Assign test sessions to individual metrology technicians with live progress tracking and workload allocation.",
      icon: Users
    },
    {
      title: "Equipment & Calibration Tracking",
      desc: "Keep reference mass standards, environmental sensors, and calibration certificates automatically linked to every test run.",
      icon: Building2
    },
    {
      title: "Complete Test History & Trends",
      desc: "Access historical test logs for any instrument model to detect recurring drift patterns or manufacturing batch defects.",
      icon: History
    },
    {
      title: "Centralized Report Repository",
      desc: "Search, filter, and export any draft or finalized evaluation report in seconds from a secure cloud database.",
      icon: Database
    },
    {
      title: "Multi-Stage Review & Approval",
      desc: "Enforce strict separation between data entry, technical review, and final signatory authorization.",
      icon: CheckSquare
    },
    {
      title: "Instant Audit Readiness",
      desc: "Be 100% prepared for ISO/IEC 17025 accreditation audits with immutable SHA-256 logs and full traceability.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="for-laboratories" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>TAILORED FOR LAB OPERATORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Built for Modern <span className="text-[#007A8C]">Metrology Laboratories</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empower your lab team with centralized management, automated accuracy, and audit-proof report delivery.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {labBenefits.map((b, idx) => {
            const Icon = b.icon;
            const isLime = idx % 2 === 1;
            return (
              <div key={idx} className={`bg-white p-6 rounded-2xl border shadow-sm space-y-3 transition-all ${
                isLime ? 'border-[#C0D725]/60 hover:border-[#C0D725]' : 'border-slate-200 hover:border-[#007A8C]/40'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isLime ? 'bg-[#F6FAAE] text-slate-900 border border-[#C0D725]' : 'bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/20'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Lab CTA Card */}
        <div className="bg-[#E6F4F6] p-8 rounded-3xl border border-[#007A8C]/30 flex flex-wrap items-center justify-between gap-6 shadow-2xs">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Upgrade Your Metrology Lab to TARAZU SaaS</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Access automated lab workflows and OIML R-76 digital reporting with TARAZU SaaS.</p>
          </div>
          <button
            onClick={onOpenSandbox}
            className="px-6 py-3.5 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-sm font-extrabold shadow-md shadow-[#007A8C]/30 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-[#C0D725]" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default ForLaboratoriesSection;
