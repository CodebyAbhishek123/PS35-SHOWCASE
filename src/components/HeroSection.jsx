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

        {/* HERO VISUAL — REDESIGNED LEGAL METROLOGY LABORATORY CONSOLE */}
        <div className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative">
          
          {/* Top Laboratory Console Bar */}
          <div className="bg-slate-900 text-white px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#C0D725] animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  METROLOGY LABORATORY BENCH CONSOLE
                </span>
                <span className="text-slate-500 font-mono">|</span>
                <span className="text-xs font-mono text-slate-300">SESSION #TS-8942</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#007A8C] text-white font-bold">
                OIML R-76-1 (2006)
              </span>
              <span className="text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                20.4 °C | 52% RH
              </span>
            </div>
          </div>

          {/* Instrument Header Strip */}
          <div className="bg-[#E6F4F6] px-6 py-4 border-b border-[#007A8C]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-white p-3 rounded-xl border border-[#007A8C]/20 shadow-2xs">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Instrument Model</span>
              <span className="text-slate-900 font-extrabold text-sm">Model W500</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#007A8C]/20 shadow-2xs">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Accuracy Class</span>
              <span className="text-[#007A8C] font-extrabold text-sm">Class III</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#007A8C]/20 shadow-2xs">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Max Capacity (Max)</span>
              <span className="text-slate-900 font-extrabold text-sm">500 kg (e=100g)</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#007A8C]/20 shadow-2xs">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Active Test Suite</span>
              <span className="text-slate-900 font-extrabold text-sm">Weighing Performance</span>
            </div>
          </div>

          {/* Console Main Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Interactive Step Sequence Stepper */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stepsList.map((st, idx) => {
                const isActive = animStep === idx;
                const isPassed = animStep > idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setAnimStep(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all font-mono ${
                      isActive
                        ? 'bg-[#007A8C] border-[#007A8C] text-white shadow-lg shadow-[#007A8C]/20 scale-102'
                        : isPassed
                        ? 'bg-[#F6FAAE] border-[#C0D725] text-slate-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] uppercase font-extrabold ${isActive ? 'text-[#C0D725]' : 'text-slate-400'}`}>
                        STAGE 0{idx + 1}
                      </span>
                      {isPassed && <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />}
                    </div>
                    <div className="text-xs font-bold">{st.title}</div>
                    <div className={`text-[10px] mt-0.5 ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>{st.detail}</div>
                  </button>
                );
              })}
            </div>

            {/* Central Metrology Data Cockpit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Live Inputs & Observations */}
              <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center space-x-2">
                    <Binary className="w-4 h-4 text-[#007A8C]" />
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                      RAW OBSERVATION DATA
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#007A8C]/10 text-[#007A8C] px-2 py-0.5 rounded font-bold">
                    OIML A.4.4
                  </span>
                </div>

                <div className="space-y-3 font-mono">
                  {/* Ref Load Card */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="text-xs text-slate-500 block">Reference Load Mass (m)</span>
                      <span className="text-xl font-extrabold text-slate-900">100.0 kg</span>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold">
                      Class F1 Standard
                    </span>
                  </div>

                  {/* Indication Card */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="text-xs text-slate-500 block">DUT Indication Readout (I)</span>
                      <span className="text-xl font-extrabold text-[#007A8C]">100.2 kg</span>
                    </div>
                    <span className="text-[10px] bg-[#E6F4F6] text-[#007A8C] px-2 py-1 rounded font-bold">
                      Digital Load Cell
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Deterministic Calculation & MPE Gauge */}
              <div className="lg:col-span-6 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-[#C0D725]" />
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      DETERMINISTIC ENGINE EVALUATION
                    </span>
                  </div>
                  <button 
                    onClick={() => setAnimStep((prev) => (prev + 1) % 4)}
                    className="text-slate-400 hover:text-[#C0D725] transition"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3 font-mono">
                  {/* Calculation Result */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Calculated Error (E = I − m)</span>
                      <span className="text-2xl font-black text-white">
                        {animStep >= 1 ? '+0.2 kg' : 'Calculating...'}
                      </span>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-[#C0D725] px-2.5 py-1 rounded font-bold">
                      Intrinsic Error
                    </span>
                  </div>

                  {/* MPE Tolerance Spectrum Gauge Bar */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">MPE Boundary (±0.5 kg):</span>
                      <span className={`font-bold ${animStep >= 3 ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {animStep >= 2 ? 'Within Limit (0.4e)' : 'Evaluating...'}
                      </span>
                    </div>
                    
                    {/* Visual Tolerance Bar */}
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden relative">
                      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white z-10"></div>
                      <div 
                        className="h-full bg-[#007A8C] transition-all duration-500 rounded-full"
                        style={{
                          width: animStep >= 1 ? '70%' : '50%',
                          marginLeft: '15%'
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>-0.5 kg MPE</span>
                      <span>0.0 kg</span>
                      <span>+0.5 kg MPE</span>
                    </div>
                  </div>

                  {/* Final PASS Result Banner */}
                  <div className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    animStep >= 3
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-950 text-slate-400 border-slate-800 font-bold'
                  }`}>
                    <span>FINAL COMPLIANCE EVALUATION:</span>
                    <span className="text-base font-black tracking-wider">
                      {animStep >= 3 ? 'RESULT: PASS ✓' : 'EVALUATING...'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Signature Connected Nodes Ribbon */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-center mb-3">
                TARAZU CONNECTED WORKFLOW PIPELINE
              </div>
              <div className="flex items-center justify-between max-w-3xl mx-auto px-4 py-3 rounded-2xl bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-mono">
                <span className="text-slate-900 font-bold">Instrument</span>
                <span className="text-[#007A8C] font-bold">→</span>
                <span className="text-slate-900 font-bold">Tests</span>
                <span className="text-[#007A8C] font-bold">→</span>
                <span className="text-slate-900 font-bold">Observations</span>
                <span className="text-[#007A8C] font-bold">→</span>
                <span className="text-[#007A8C] font-black">Calculation</span>
                <span className="text-[#007A8C] font-bold">→</span>
                <span className="text-slate-900 font-bold">Validation</span>
                <span className="text-[#007A8C] font-bold">→</span>
                <span className="text-[#007A8C] font-black bg-[#C0D725] px-2 py-0.5 rounded text-slate-900 font-black">Report</span>
              </div>
            </div>

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
