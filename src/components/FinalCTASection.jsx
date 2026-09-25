import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export function FinalCTASection({ onOpenSandbox }) {
  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#007A8C]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-[#C0D725]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-[#C0D725] border border-[#B3C91F] text-xs font-black text-slate-900 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-slate-900" />
          <span>JOIN ACCREDITED METROLOGY LABS WORLDWIDE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Ready to Move Beyond <br />
          <span className="text-[#007A8C]">
            Manual Test Reporting?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Transform your laboratory workflow today. Automate turning point calculations, enforce OIML R-76 compliance, and issue tamper-evident evaluation reports in minutes.
        </p>

        {/* Buttons - Dual Teal & Lime Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenSandbox}
            className="px-8 py-4 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-base font-extrabold shadow-xl shadow-[#007A8C]/30 transition-all cursor-pointer active:scale-95 flex items-center gap-2.5 border-b-2 border-[#C0D725]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 text-[#C0D725]" />
          </button>

          <button
            onClick={onOpenSandbox}
            className="px-8 py-4 rounded-2xl bg-[#C0D725] hover:bg-[#B3C91F] text-slate-900 text-base font-black shadow-lg shadow-[#C0D725]/30 transition-all cursor-pointer active:scale-95 flex items-center gap-2 border border-[#B3C91F]"
          >
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span>Launch Sandbox</span>
          </button>
        </div>

        {/* Trust bullets */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1.5 font-bold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-[#007A8C]" />
            No Credit Card Required
          </span>
          <span className="flex items-center gap-1.5 font-bold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-[#007A8C]" />
            Instant Sandbox Access
          </span>
        </div>

      </div>
    </section>
  );
}

export default FinalCTASection;
