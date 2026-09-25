import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is TARAZU and how does it digitize weighing instrument testing?",
      a: "TARAZU is a dedicated SaaS metrology platform that replaces manual paper forms and spreadsheet calculation sheets with a structured digital workspace. It automates turning point calculations, OIML R-76 MPE limit checks, multi-tier review workflows, and standardized PDF/DOCX report generation."
    },
    {
      q: "Which weighing instrument classes are supported?",
      a: "TARAZU supports Class I (Fine Precision), Class II (High Precision), Class III (Medium Industrial), and Class IV (Ordinary Commercial) non-automatic weighing instruments (NAWIs) as defined under OIML Recommendation R-76-1."
    },
    {
      q: "How does TARAZU handle turning point (P) and indication error (Ec) calculations?",
      a: "TARAZU uses built-in metrological algorithms executing P = I + 0.5e - ΔL and E = P - L, with zero error compensation Ec = E - E0. All formulas are executed automatically without manual formula entry."
    },
    {
      q: "Does TARAZU support multi-laboratory organizations?",
      a: "Yes. TARAZU features enterprise multi-tenant cloud architecture allowing organizations to manage multiple regional laboratory branches, assign testers and technical reviewers, and isolate data under tenant-level security."
    },
    {
      q: "How are evaluation reports secured against unauthorized modifications?",
      a: "Upon authorized sign-off, TARAZU generates a unique SHA-256 cryptographic hash seal for the entire report payload. The report is locked permanently, and an embedded QR code allows third parties to verify report authenticity online."
    },
    {
      q: "Can TARAZU integrate with existing Laboratory LIMS software?",
      a: "Yes. TARAZU provides REST APIs and JSON data export endpoints allowing seamless data sync with Laboratory Information Management Systems (LIMS) and enterprise ERP databases."
    },
    {
      q: "Does TARAZU replace official regulatory laboratory certification?",
      a: "No. TARAZU is a digital workflow, mathematical calculation, and report automation software platform. Measurement accuracy, physical testing execution, and regulatory approval remain under the authority of accredited laboratory personnel."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Got Questions? <span className="text-[#007A8C]">We Have Answers.</span>
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about TARAZU legal metrology testing software.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-[#007A8C]"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#007A8C] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;
