import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function BeforeAfterSection({ onOpenSandbox }) {
  const comparisons = [
    {
      metric: "Test Report Turnaround Time",
      before: "3 to 7 business days per instrument",
      after: "Under 15 minutes automated generation"
    },
    {
      metric: "Turning-Point Calculation Errors",
      before: "Frequent manual spreadsheet cell errors (up to 18%)",
      after: "0% calculation error rate (validated algorithm)"
    },
    {
      metric: "MPE Tolerance Boundary Verification",
      before: "Manual lookup against paper OIML tables",
      after: "Automated step-by-step pass/fail engine"
    },
    {
      metric: "Report Storage & Searchability",
      before: "Scattered Word docs on local hard drives",
      after: "Centralized searchable cloud repository"
    },
    {
      metric: "Audit Trail & Cryptographic Security",
      before: "No tamper protection; unprotected PDF/Word files",
      after: "SHA-256 cryptographic seal & QR audit verification"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>TRANSFORMATION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Traditional Manual vs. <span className="text-[#007A8C]">TARAZU Digital</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Direct comparison of legacy laboratory operations versus TARAZU digital SaaS workflow.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                <th className="pb-4 font-bold">Workflow Category</th>
                <th className="pb-4 font-bold text-rose-600">Traditional Manual Workflow</th>
                <th className="pb-4 font-bold text-[#007A8C]">TARAZU Digital SaaS Workflow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisons.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 font-bold text-slate-900 pr-4">{c.metric}</td>
                  <td className="py-4 text-slate-600 pr-4 flex items-center gap-2 text-rose-600">
                    <XCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>{c.before}</span>
                  </td>
                  <td className="py-4 text-slate-800 font-semibold text-[#007A8C]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#007A8C]" />
                      <span>{c.after}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default BeforeAfterSection;
