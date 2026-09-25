import React from 'react';
import { 
  Edit3, 
  ShieldCheck, 
  GitBranch, 
  FileText, 
  UserCheck, 
  Database, 
  BarChart3, 
  Network,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function CoreFeaturesSection({ onOpenSandbox, onOpenDemo }) {
  const features = [
    {
      title: "Digital Test Forms",
      desc: "Capture instrument details, laboratory conditions, observations, photos, and calibration documents in guided digital forms.",
      icon: Edit3,
      tag: "Data Capture"
    },
    {
      title: "Explainable Pass/Fail",
      desc: "Shows the exact rule, mathematical calculation, permissible limit, and result behind every test observation.",
      icon: ShieldCheck,
      tag: "Deterministic Engine"
    },
    {
      title: "Versioned Rules Engine",
      desc: "Keeps OIML rules and templates strictly controlled so every generated report uses the applicable version.",
      icon: GitBranch,
      tag: "Rule Control"
    },
    {
      title: "Few-Click Reports",
      desc: "Generate standardized, publication-ready PDF and editable DOCX report outputs from approved test data.",
      icon: FileText,
      tag: "Multi-Format Export"
    },
    {
      title: "Review Workflow",
      desc: "Route reports from technician to reviewer with controlled technical remarks, status, and approval history.",
      icon: UserCheck,
      tag: "Human-In-The-Loop"
    },
    {
      title: "Secure Repository",
      desc: "Find reports instantly by model, serial number, manufacturer, test date, accuracy class, or approval status.",
      icon: Database,
      tag: "Searchable Archive"
    },
    {
      title: "Dashboard Analytics",
      desc: "Real-time visibility into laboratory workload, pass rates, pending sign-offs, and compliance telemetry.",
      icon: BarChart3,
      tag: "Operational Visibility"
    },
    {
      title: "eMaap-Ready Integration",
      desc: "Designed for future secure workflow integration with Legal Metrology systems, subject to official API access and approval.",
      icon: Network,
      tag: "Integration Ready"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE METROLOGY PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Engineered for <span className="text-[#007A8C]">OIML R-76 Rigor</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Eight connected capabilities powering precision testing, strict compliance, and fast report turnaround.
          </p>
        </div>

        {/* 8 Core Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 hover:border-[#007A8C]/50 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#E6F4F6] text-[#007A8C] group-hover:bg-[#007A8C] group-hover:text-white flex items-center justify-center font-bold transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007A8C] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#007A8C] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Human-Control Banner from Blueprint */}
        <div className="mt-14 bg-[#007A8C] text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-[#C0D725]">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C0D725] font-bold">
              HUMAN-CONTROL PRINCIPLE
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              NAWI TestPro automates calculations, validation, and reporting.
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-2xl">
              Physical testing and final report approval remain under the authority of qualified laboratory personnel.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-6 py-3.5 rounded-2xl bg-[#C0D725] hover:bg-[#B3C91F] text-slate-900 text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0"
          >
            Book a Laboratory Walkthrough →
          </button>
        </div>

      </div>
    </section>
  );
}

export default CoreFeaturesSection;
