import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, TrendingUp, BarChart3, Cpu, RefreshCw, Activity, Sliders, FileText, Binary, Check } from 'lucide-react';

export function HeroSection({ onOpenSandbox }) {
  // Animated Sequence State: 0: Raw Ingestion, 1: Calculation, 2: Criterion Check, 3: PASS Result
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const stepsList = [
    { title: "1. Raw Ingestion", detail: "Ref Load & DUT Readout" },
    { title: "2. Calculation", detail: "Error E = Indication − Ref" },
    { title: "3. Criterion Check", detail: "MPE Step Boundary Check" },
    { title: "4. PASS Result", detail: "Cryptographic Seal Sealed" },
  ];

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#007A8C]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-[#C0D725]/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#007A8C]/10 border border-[#007A8C]/20 text-[#007A8C] text-xs font-mono font-bold uppercase">
            <span>NAWI TYPE EVALUATION • OIML R-76</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight">
            Digitalize NAWI Type Evaluation <span className="text-[#007A8C]">&amp; Test Reporting</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            TARAZU transforms manual weighing-instrument testing into a structured digital workflow — from instrument registration and applicable tests to deterministic calculations, validation, review and standardized reporting.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenSandbox}
              className="px-8 py-3.5 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-base font-extrabold shadow-lg shadow-[#007A8C]/30 transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:scale-95 border-b-2 border-[#C0D725]"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 text-[#C0D725]" />
            </button>

            <button
              onClick={onOpenSandbox}
              className="px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-base font-bold shadow-md border border-slate-200 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <span>Explore How It Works</span>
            </button>
          </div>
        </div>

        {/* Existing Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">

          <div className="bg-[#007A8C] p-6 rounded-2xl border border-[#006372] shadow-md text-white transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-100">Evaluated Instruments</span>
              <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-3xl font-black text-white font-mono">1,254<span className="text-base text-teal-200 font-normal">.00</span></div>
            <div className="text-xs text-[#C0D725] font-bold mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>148 this month</span>
            </div>
          </div>

          <div className="bg-[#C0D725] p-6 rounded-2xl border border-[#B3C91F] shadow-md text-slate-900 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">OIML R-76 Pass Rate</span>
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-[#C0D725] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#C0D725]" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 font-mono">96.4%</div>
            <div className="text-xs text-slate-800 font-bold mt-2 flex items-center justify-between">
              <span className="text-slate-900 font-bold">Approved: 1181</span>
              <span className="text-rose-700 font-bold">15 Non-compliant</span>
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

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#007A8C]/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#007A8C]">Security &amp; Integrity</span>
              <div className="w-8 h-8 rounded-xl bg-[#007A8C]/10 text-[#007A8C] flex items-center justify-center border border-[#007A8C]/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#007A8C] font-mono">SHA-256</div>
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
