import React from 'react';
import { Play, Scale, Award, Sparkles, ShieldCheck } from 'lucide-react';

export function HeroSection({ onOpenSandbox, onOpenPitchDeck, onNavigate }) {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-white text-slate-900">
      {/* Background Subtle Cyprus Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#004741]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-[#FF1E27]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EDE4] border border-[#004741]/20 text-xs font-bold text-[#004741] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Smart India Hackathon 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF1E27]/10 border border-[#FF1E27]/30 text-xs font-bold text-[#FF1E27]">
            <Award className="w-3.5 h-3.5 text-[#FF1E27]" />
            <span>Problem Statement ID: 26035</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#004741]/10 border border-[#004741]/30 text-xs font-bold text-[#004741]">
            <span>Ministry of Consumer Affairs (DoCA)</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#004741] leading-tight">
            Automated <span className="text-[#FF1E27]">OIML R-76</span> Test Reports for{' '}
            <span className="text-slate-800">
              Non-Automatic Weighing Instruments
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Eliminating manual spreadsheet calculation errors and delays in Legal Metrology model approvals. 
            An intelligent, cryptographic verification platform that automates type evaluation calculations, 
            permissible error compliance, and standardized multi-format reporting for Class I, II, III & IV NAWIs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={onOpenPitchDeck}
              className="px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-[#FF1E27] hover:bg-[#e01921] shadow-lg shadow-[#FF1E27]/30 hover:shadow-[#FF1E27]/50 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Judge Pitch Presentation</span>
            </button>

            <button
              onClick={() => onNavigate('content')}
              className="px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-[#004741] bg-[#F0EDE4] hover:bg-[#e6e2d5] border border-[#004741]/30 shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Scale className="w-4 h-4 text-[#004741]" />
              <span>OIML R-76 Engine</span>
            </button>
          </div>
        </div>

        {/* Live Metric Stats Cards in Cyprus & Sand */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 max-w-5xl mx-auto">
          
          <div className="bg-[#F0EDE4] p-5 rounded-2xl border border-[#004741]/20 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-[#004741] font-mono">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">OIML R-76-1:2006</div>
            <div className="text-[11px] text-slate-600 mt-0.5">Strict Metrological Compliance</div>
          </div>

          <div className="bg-[#F0EDE4] p-5 rounded-2xl border border-[#004741]/20 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-[#FF1E27] font-mono">0 Error</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Turning Point Engine</div>
            <div className="text-[11px] text-slate-600 mt-0.5">Automated delta-L Calculation</div>
          </div>

          <div className="bg-[#F0EDE4] p-5 rounded-2xl border border-[#004741]/20 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono">95% Faster</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Report Turnaround</div>
            <div className="text-[11px] text-slate-600 mt-0.5">From Days to Seconds</div>
          </div>

          <div className="bg-[#F0EDE4] p-5 rounded-2xl border border-[#004741]/20 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-[#004741] font-mono">SHA-256</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Tamper-Proof Audit</div>
            <div className="text-[11px] text-slate-600 mt-0.5">QR Verified Certificates</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
