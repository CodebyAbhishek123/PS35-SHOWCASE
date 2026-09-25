import React from 'react';
import { Cpu, CheckCircle2, FileCheck2, Database, ShieldCheck, Zap } from 'lucide-react';

export function SolutionSection({ onOpenSandbox }) {
  const steps = [
    {
      step: "01",
      title: "Instrument & Environment Capture",
      desc: "Digital entry forms capture manufacturer metadata, accuracy class, Max/Min, e/d values, ambient temperature, humidity, pressure, and calibrated test weight references.",
      icon: Database,
      badge: "Zero Transcription Error"
    },
    {
      step: "02",
      title: "Real-time OIML R-76 Math Engine",
      desc: "Automates turning-point calculations using delta-L sub-division weights: P = I + 0.5e - deltaL. Computes true errors E and zero-corrected errors Ec automatically.",
      icon: Cpu,
      badge: "Clause A.4.4 Compliant"
    },
    {
      step: "03",
      title: "Instant MPE Boundary Verification",
      desc: "Dynamically maps applied test loads against OIML R-76 MPE step functions (±0.5e, ±1.0e, ±1.5e) for Initial Verification and In-Service inspection with instant pass/fail.",
      icon: Zap,
      badge: "Automated Evaluation"
    },
    {
      step: "04",
      title: "Cryptographic SHA-256 Sealing",
      desc: "Generates an immutable cryptographic hash of all test observations and attaches a tamper-evident QR verification code for statutory audits under Legal Metrology Rules.",
      icon: ShieldCheck,
      badge: "Tamper-Proof"
    },
    {
      step: "05",
      title: "Standardized Multi-Format Output",
      desc: "Instantly produces standardized OIML R-76-2 type evaluation test reports formatted for Print/A4, high-resolution PDF, editable Microsoft Word (.doc), and JSON data interchange.",
      icon: FileCheck2,
      badge: "DoCA Standard Format"
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-28 relative border-t border-slate-200 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF2FF] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>OUR PROPOSED ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            End-to-End <span className="text-[#007A8C]">Automated Type Evaluation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From test bench observations to digitally signed, tamper-evident statutory reports in seconds.
          </p>
        </div>

        {/* 5-Step Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 flex flex-col justify-between relative group hover:border-[#007A8C] transition-all shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#007A8C] font-mono transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-[#EEF2FF] text-[#007A8C]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#EEF2FF] text-[#007A8C] border border-[#007A8C]/20">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SolutionSection;
