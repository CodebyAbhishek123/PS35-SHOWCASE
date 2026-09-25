import React from 'react';
import { Play, Scale, Award, Sparkles, ShieldCheck, CheckCircle2, TrendingUp, BarChart3 } from 'lucide-react';

export function HeroSection({ onOpenSandbox, onOpenPitchDeck, onNavigate }) {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-[#F8FAFC] text-slate-900">
      {/* Background Soft Indigo & Cyan Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#5842F6]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-[#06B6D4]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF2FF] border border-[#5842F6]/20 text-xs font-bold text-[#5842F6] shadow-2xs">
            <span>TARAZU. OIML R 76-1 MVP</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>10/10 Automated Evaluation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-[#5842F6]">
            <span>SIH PS 26035 — Department of Consumer Affairs</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Automated <span className="text-[#5842F6]">OIML R-76</span> Type Evaluation & <span className="text-[#5842F6]">Metrology Platform</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Eliminating manual spreadsheet calculation errors and delays in Legal Metrology model approvals. 
            An intelligent, cryptographic verification platform that automates turning-point calculations, 
            permissible error compliance, and standardized multi-format reporting for Class I, II, III & IV NAWIs.
          </p>


        </div>

        {/* Live Metric Dashboard Stats Cards matching TARAZU Screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#5842F6]/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Evaluated Instruments</span>
              <div className="w-8 h-8 rounded-xl bg-[#5842F6] text-white flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 font-mono">1,254<span className="text-base text-slate-400 font-normal">.00</span></div>
            <div className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>148 this month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">OIML R-76 Pass Rate</span>
              <div className="w-8 h-8 rounded-xl bg-[#00C853] text-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-emerald-600 font-mono">96.4%</div>
            <div className="text-xs text-slate-500 font-medium mt-2 flex items-center justify-between">
              <span className="text-emerald-700 font-bold">Approved: 1181</span>
              <span className="text-rose-500 font-bold">15 Non-compliant</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Pending Reviews</span>
              <div className="w-8 h-8 rounded-xl bg-[#FF9F00] text-white flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#FF9F00] font-mono">21<span className="text-base text-slate-400 font-normal">.00</span></div>
            <div className="text-xs text-amber-600 font-bold mt-2">
              <span>Active in testing: 36 (Awaiting sign-off)</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#5842F6]/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Security & Integrity</span>
              <div className="w-8 h-8 rounded-xl bg-[#5842F6]/10 text-[#5842F6] flex items-center justify-center border border-[#5842F6]/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#5842F6] font-mono">SHA-256</div>
            <div className="text-xs text-slate-600 font-bold mt-2">
              <span>Tamper-Proof QR Audit Seal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
