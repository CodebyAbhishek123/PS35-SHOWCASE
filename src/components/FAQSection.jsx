import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is NAWI TestPro (TARAZU)?",
      a: "NAWI TestPro (TARAZU) is a B2B SaaS platform for laboratories that need a controlled digital workflow for NAWI test observations, OIML R-76 compliance calculations, reviewer approval pipelines, and standardized audit-ready report generation."
    },
    {
      q: "Does the software make the final approval decision?",
      a: "No. The platform provides a traceable system compliance calculation and flags non-conformities based on configured OIML R-76 rules. Qualified laboratory personnel retain full authority and responsibility for physical testing, review, and final report approval."
    },
    {
      q: "Can we use our current report format?",
      a: "The platform supports controlled templates. During onboarding, the laboratory can map required report sections, custom fields, and laboratory branding/logos to an approved, standardized format."
    },
    {
      q: "Can we import existing Excel records?",
      a: "Yes, CSV/Excel import can be included for weighing instrument specifications and selected historical test records, subject to data-quality review and validation."
    },
    {
      q: "Is eMaap integrated?",
      a: "NAWI TestPro is designed to be eMaap-ready for future secure workflow integration. Any live eMaap integration depends on official API availability, technical access, and regulatory approvals."
    },
    {
      q: "Is our data secure?",
      a: "The product architecture uses role-based access control (Technician, Reviewer, Admin, Auditor), laboratory-level tenant isolation, immutable SHA-256 audit logs, and encrypted cloud storage documented in the customer security brief."
    },
    {
      q: "Can the platform work for multiple laboratories?",
      a: "Yes. The multi-lab SaaS architecture is designed for separate organizations and regional branches with isolated records, user permissions, custom test benches, and dedicated report archives."
    },
    {
      q: "How do we start?",
      a: "Request a demo or pilot inquiry. A pilot can begin with a sample test workflow, approved report template, and validated rules configuration tailored to your laboratory's weighing instruments."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#007A8C]">Questions</span>
          </h2>
          <p className="text-slate-600 text-base">
            Essential information regarding OIML R-76 compliance, human approval control, security, and deployment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all ${
                  isOpen ? 'border-[#007A8C]/40 bg-[#F8FAFC] shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-[#007A8C]"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#007A8C] font-bold">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#007A8C] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Human control callout */}
        <div className="mt-10 p-4 rounded-2xl bg-[#E6F4F6] border border-[#007A8C]/20 flex items-center gap-3 text-xs text-[#007A8C] font-medium">
          <ShieldCheck className="w-5 h-5 text-[#007A8C] shrink-0" />
          <span>
            <strong>Human-Control Guarantee:</strong> NAWI TestPro automates calculations, validation, reporting, and traceability. Physical testing and final report approval remain under qualified laboratory personnel.
          </span>
        </div>

      </div>
    </section>
  );
}

export default FAQSection;
