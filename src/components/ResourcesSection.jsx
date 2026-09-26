import React from 'react';
import { BookOpen, FileText, Newspaper, Bookmark, ArrowRight } from 'lucide-react';

export function ResourcesSection({ onOpenSampleReport }) {
  const resources = [
    {
      title: "OIML R-76 Testing Guide",
      category: "Technical Guide",
      desc: "Comprehensive manual explaining turning point calculations, ΔL corrections, and MPE threshold formulas for Class I to IV NAWIs.",
      icon: BookOpen,
      action: "Read Guide"
    },
    {
      title: "Sample OIML R-76 Test Report",
      category: "Sample Document",
      desc: "Download a full publication-ready Type Evaluation report with SHA-256 seal and QR verification.",
      icon: FileText,
      action: "View Sample Report",
      onClick: () => onOpenSampleReport && onOpenSampleReport('rep-1')
    },
    {
      title: "Legal Metrology ISO 17025 Checklist",
      category: "Compliance",
      desc: "Audit readiness checklist for non-automatic weighing instrument testing laboratories.",
      icon: Bookmark,
      action: "Download Checklist"
    },
    {
      title: "TARAZU Developer & API Docs",
      category: "Documentation",
      desc: "Technical REST & JSON API documentation for integrating TARAZU with laboratory LIMS software.",
      icon: Newspaper,
      action: "Explore API Docs"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Metrology & <span className="text-[#007A8C]">Learning Hub</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Free technical guides, sample test reports, and compliance documentation for laboratory teams.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => {
            const Icon = res.icon;
            const isLime = idx % 2 === 1;
            return (
              <div 
                key={idx} 
                onClick={res.onClick}
                className={`bg-white p-6 rounded-2xl border shadow-sm space-y-4 transition-all cursor-pointer group flex flex-col justify-between ${
                  isLime ? 'border-[#C0D725]/60 hover:border-[#C0D725]' : 'border-slate-200 hover:border-[#007A8C]/40'
                }`}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                    isLime ? 'bg-[#F6FAAE] text-slate-900 border-[#C0D725]' : 'bg-[#E6F4F6] text-[#007A8C] border-[#007A8C]/20 group-hover:bg-[#007A8C] group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">{res.category}</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007A8C] transition-colors">{res.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{res.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-[#007A8C] font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>{res.action}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#007A8C]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ResourcesSection;
