import React from 'react';
import { Scale, Activity, RefreshCw, Eye, Thermometer, Zap, Shield, Droplets, Sliders, CheckCircle2 } from 'lucide-react';

export function OIMLR76WorkflowSection() {
  const oimlModules = [
    {
      name: "Weighing Performance",
      desc: "Evaluates error of indication across ascending and descending load points up to Maximum capacity.",
      icon: Scale,
      standard: "OIML R-76 A.4.4"
    },
    {
      name: "Eccentricity (Off-Center Load)",
      desc: "Checks indication stability when test weights are placed at 1/3 Max on corners of the load receptor.",
      icon: Activity,
      standard: "OIML R-76 A.4.7"
    },
    {
      name: "Repeatability Test",
      desc: "Measures standard deviation across 10 consecutive applications of 50% Max and 100% Max loads.",
      icon: RefreshCw,
      standard: "OIML R-76 A.4.10"
    },
    {
      name: "Discrimination Test",
      desc: "Verifies instrument sensitivity when an additional small load of 1.4e is gently added during load test.",
      icon: Eye,
      standard: "OIML R-76 A.4.8"
    },
    {
      name: "Temperature Effect",
      desc: "Evaluates zero and span drift across extended temperature ranges (-10°C to +40°C or specified limits).",
      icon: Thermometer,
      standard: "OIML R-76 A.5.3"
    },
    {
      name: "Voltage Variations",
      desc: "Verifies performance during mains power fluctuations (Vmin to Vmax) and low battery conditions.",
      icon: Zap,
      standard: "OIML R-76 A.5.4"
    },
    {
      name: "Electrical Disturbances",
      desc: "Tests immunity against electrostatic discharges (ESD), burst transients, and surge disturbances.",
      icon: Shield,
      standard: "OIML R-76 B.3"
    },
    {
      name: "Damp Heat Steady State",
      desc: "Evaluates performance under high ambient humidity (85% RH at 40°C over 48 hours).",
      icon: Droplets,
      standard: "OIML R-76 B.2"
    },
    {
      name: "Span Stability Test",
      desc: "Tracks long-term span calibration drift over 28-day continuous evaluation intervals.",
      icon: Sliders,
      standard: "OIML R-76 A.6"
    },
    {
      name: "Construction Examination",
      desc: "Visual and structural check of scale markings, sealing points, leveling device, and security features.",
      icon: CheckCircle2,
      standard: "OIML R-76 Section 3 & 4"
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Supported <span className="text-[#007A8C]">OIML R-76</span> Test Areas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            TARAZU provides structured digital data collection and automated evaluation logic across all 10 core non-automatic weighing instrument (NAWI) test categories.
          </p>
        </div>

        {/* 10 OIML Modules Grid - Alternating Solid Deep Teal and Solid Lime Yellow-Green Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {oimlModules.map((m, idx) => {
            const Icon = m.icon;
            const isLime = idx % 2 === 1;
            return (
              <div key={idx} className={`p-5 rounded-2xl border space-y-3 transition-all flex flex-col justify-between shadow-sm ${
                isLime 
                  ? 'bg-[#C0D725] border-[#B3C91F] text-slate-900' 
                  : 'bg-[#007A8C] border-[#006372] text-white'
              }`}>
                <div className="space-y-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                    isLime ? 'bg-slate-900 text-[#C0D725]' : 'bg-white text-[#007A8C]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-sm font-black ${isLime ? 'text-slate-900' : 'text-white'}`}>{m.name}</h3>
                  <p className={`text-[11px] leading-relaxed font-medium ${isLime ? 'text-slate-800' : 'text-teal-50'}`}>{m.desc}</p>
                </div>
                <div className={`pt-2 border-t text-[10px] font-mono font-bold ${
                  isLime ? 'border-slate-900/20 text-slate-900' : 'border-white/20 text-[#C0D725]'
                }`}>
                  {m.standard}
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Disclaimer Notice */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center text-xs text-slate-500 font-mono">
          * Note: TARAZU is a digital workflow, calculation, and reporting software platform. Test execution, physical measurement accuracy, and official regulatory certification remain the responsibility of accredited laboratory personnel.
        </div>

      </div>
    </section>
  );
}

export default OIMLR76WorkflowSection;
