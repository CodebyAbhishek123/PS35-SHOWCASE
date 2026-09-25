import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle2, QrCode, Lock, ArrowRight, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export function ReportShowcaseSection({ onOpenSampleReport }) {
  const [transitionStage, setTransitionStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionStage((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    { title: "1. Raw Test Data", desc: "Observations: Ref 100.0 kg | Indication 100.2 kg" },
    { title: "2. Validated Data", desc: "Engine Error: +0.2 kg | MPE Boundary check PASS" },
    { title: "3. Final Report", desc: "TARAZU-TR-2026-8942 Certified OIML R-76 PDF" },
  ];

  return (
    <section id="reports" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>STANDARDIZED REPORT OUTPUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Sample <span className="text-[#007A8C]">Type Evaluation Report</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Inspect the standardized OIML R-76 Type Evaluation Report generated for Model W500.
          </p>
        </div>

        {/* Transition Pipeline Banner */}
        <div className="max-w-4xl mx-auto mb-8 bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 font-mono text-xs shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-bold uppercase text-[10px]">DATA TRANSFORMATION PIPELINE:</span>
            <span className="text-[#C0D725] font-bold">AUTOMATED TRANSITION ACTIVE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            {stages.map((st, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-xl border transition-all ${
                  transitionStage === idx 
                    ? 'bg-[#007A8C] border-[#007A8C] text-white shadow-md' 
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className="font-bold">{st.title}</div>
                <div className="text-[10px] opacity-80 mt-0.5">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Realistic Report Preview Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Report Top Banner */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#007A8C] text-white flex items-center justify-center font-bold shadow-md shadow-[#007A8C]/20">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#007A8C] font-bold uppercase">OFFICIAL EVALUATION RECORD</span>
                <h3 className="text-xl font-black text-slate-900">OIML R-76 Type Evaluation Certificate</h3>
                <p className="text-xs text-slate-500 font-mono">Report ID: TARAZU-TR-2026-8942 • Model W500 Class III</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3.5 py-1.5 rounded-full bg-[#F6FAAE] border border-[#C0D725] text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>APPROVED &amp; SEALED</span>
              </div>
            </div>
          </div>

          {/* Report Sample Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs font-mono">
            
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="text-[#007A8C] font-bold uppercase block text-[11px]">1. Instrument Details</span>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Model Designation:</span>
                <span className="text-slate-900 font-bold">W500 Industrial Scale</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Accuracy Class:</span>
                <span className="text-[#007A8C] font-bold">Class III</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Max Capacity:</span>
                <span className="text-slate-900 font-bold">500 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Verification Scale Interval (e):</span>
                <span className="text-slate-900 font-bold">100 g</span>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="text-[#007A8C] font-bold uppercase block text-[11px]">2. Test Results &amp; Compliance</span>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Weighing Performance (A.4.4):</span>
                <span className="text-emerald-600 font-bold">PASS ✓</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Raw Load vs Indication:</span>
                <span className="text-slate-900 font-bold">100.0 kg vs 100.2 kg</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Calculated Intrinsic Error:</span>
                <span className="text-[#007A8C] font-bold">+0.2 kg (Limit ±0.5 kg)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Compliance Evaluation:</span>
                <span className="text-emerald-600 font-bold">PASS (Within Limit)</span>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="text-[#007A8C] font-bold uppercase block text-[11px]">3. Governance &amp; Signoff</span>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Reviewer / Approver:</span>
                <span className="text-slate-900 font-bold">Dr. Aris Thorne</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Approval Status:</span>
                <span className="text-emerald-600 font-bold">SEALED &amp; LOCKED</span>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="text-[#007A8C] font-bold uppercase block text-[11px]">4. Ruleset Versioning</span>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span className="text-slate-500">Rule Version:</span>
                <span className="text-slate-900 font-bold">OIML R-76-1 (2006) v2.4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Revision:</span>
                <span className="text-slate-900 font-bold">Rev 1.0 (Final)</span>
              </div>
            </div>

          </div>

          {/* Cryptographic Hash & QR Seal Bar */}
          <div className="bg-[#E6F4F6] p-4 rounded-2xl border border-[#007A8C]/20 flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <QrCode className="w-10 h-10 text-[#007A8C] p-1 bg-white rounded-lg border border-[#007A8C]/20" />
              <div>
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">CRYPTOGRAPHIC INTEGRITY SEAL</span>
                <span className="text-xs font-mono text-[#007A8C] font-bold">SHA-256: 8f3c2b9a7d1e4f605219ba4328c0e192...</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#007A8C] font-bold">
              <Lock className="w-4 h-4 text-[#007A8C]" />
              <span>IMMUTABLE LOCK ACTIVE</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="text-center">
            <button
              onClick={() => onOpenSampleReport && onOpenSampleReport('REP-2026-001')}
              className="px-7 py-3.5 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-sm font-extrabold shadow-md shadow-[#007A8C]/30 flex items-center gap-2.5 mx-auto cursor-pointer active:scale-95 border-b-2 border-[#C0D725]"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Sample Report (W500)</span>
              <ArrowRight className="w-4 h-4 text-[#C0D725]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ReportShowcaseSection;
