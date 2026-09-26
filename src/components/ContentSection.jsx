import React from 'react';
import { BookOpen, FileCode, CheckCircle, ArrowRight } from 'lucide-react';

export function ContentSection() {
  const contentModules = [
    {
      title: "Interactive OIML R-76 Technical Guide",
      category: "Documentation",
      desc: "Step-by-step walkthrough of turning-point calculations, delta-L corrections, and MPE boundary limits for all 4 accuracy classes.",
      tags: ["Clause A.4.4", "MPE Thresholds", "Class I - IV"]
    },
    {
      title: "Statutory Model Approval Workflow",
      category: "Legal Framework",
      desc: "Comprehensive roadmap covering application filing under Section 19 of Legal Metrology Act 2009 to RRSL laboratory testing and DoCA certificate issuance.",
      tags: ["Section 19", "RRSL Guidelines", "DoCA Approval"]
    },
    {
      title: "Cryptographic SHA-256 Seal Specification",
      category: "Security Protocol",
      desc: "Technical specification of the cryptographic hashing engine and dynamic QR verification system used to secure laboratory reports against tampering.",
      tags: ["SHA-256", "QR Seal", "Tamper-Proof"]
    }
  ];

  return (
    <section id="content" className="py-20 md:py-28 relative border-t border-slate-200 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Technical <span className="text-[#007A8C]">Repository & Modules</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Explore standard specifications, legal mandates, and algorithm documentation powering TARAZU.
          </p>
        </div>

        {/* 3 Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentModules.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-[#007A8C]/40 flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EEF2FF] text-[#007A8C] border border-[#007A8C]/20">
                  {item.category}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#007A8C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#007A8C]">Read Specification</span>
                  <ArrowRight className="w-4 h-4 text-[#007A8C]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContentSection;
