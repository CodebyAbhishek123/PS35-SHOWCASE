import React, { useState } from 'react';
import { 
  Edit3, 
  ShieldCheck, 
  GitBranch, 
  FileText, 
  UserCheck, 
  Database, 
  BarChart3, 
  Network,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle2,
  BookOpen,
  Lock
} from 'lucide-react';

export function CoreFeaturesSection({ onOpenSandbox, onOpenDemo }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: "forms",
      title: "Digital Test Forms",
      desc: "Capture instrument details, laboratory conditions, observations, photos, and calibration documents in guided digital forms.",
      icon: Edit3,
      tag: "Data Capture",
      clause: "OIML R-76 Clause A.4.1 & Clause A.4.2",
      details: "Eliminates manual paper worksheets by offering structured digital entry forms for Non-Automatic Weighing Instruments (NAWI). Captures ambient laboratory conditions (Temperature, Relative Humidity, Air Pressure), load receptor specifications, scale class (Class I, II, III, IIII), maximum capacity (Max), scale division (e, d), and photo evidence directly from testing benches.",
      highlights: ["Zero transcription errors", "Mandatory field validation", "Environmental sensor logs", "Photo & document uploads"]
    },
    {
      id: "passfail",
      title: "Explainable Pass/Fail",
      desc: "Shows the exact rule, mathematical calculation, permissible limit, and result behind every test observation.",
      icon: ShieldCheck,
      tag: "Deterministic Engine",
      clause: "OIML R-76 Table 3 & 4 (MPE Evaluation)",
      details: "Every calculated test result provides a complete, step-by-step mathematical trace behind its Pass/Fail status. Shows exact turning point equation P = I + 0.5e - ΔL, true error E, zero-corrected error Ec, and exact Maximum Permissible Error (MPE) thresholds (±0.5e, ±1.0e, ±1.5e) for the applied test load.",
      highlights: ["Full mathematical step disclosure", "Clause Table 3 & 4 MPE lookup", "Instant compliance status", "Zero black-box logic"]
    },
    {
      id: "rules",
      title: "Versioned Rules Engine",
      desc: "Keeps OIML rules and templates strictly controlled so every generated report uses the applicable version.",
      icon: GitBranch,
      tag: "Rule Control",
      clause: "ISO/IEC 17025 & Statutory Metrology Standard",
      details: "Ensures complete regulatory governance by locking metrological calculation rules into immutable versioned templates. When legal metrology standards or state regulations update, past test reports retain their exact versioned rules context for permanent audit validity.",
      highlights: ["Immutable version control", "Audit-safe template locking", "Multi-jurisdiction rule sets", "Historical compliance consistency"]
    },
    {
      id: "reports",
      title: "Few-Click Reports",
      desc: "Generate standardized, publication-ready PDF and editable DOCX report outputs from approved test data.",
      icon: FileText,
      tag: "Multi-Format Export",
      clause: "OIML R-76-1 Formal Evaluation Certificate Format",
      details: "Transforms verified bench observations into publication-grade evaluation reports and calibration certificates in under 30 seconds. Supports both tamper-evident PDF output with cryptographic SHA-256 digital seals and editable DOCX formats for laboratory record-keeping.",
      highlights: ["30-second report generation", "SHA-256 QR code verification", "PDF & editable DOCX export", "Standardized OIML layout"]
    },
    {
      id: "workflow",
      title: "Review Workflow",
      desc: "Route reports from technician to reviewer with controlled technical remarks, status, and approval history.",
      icon: UserCheck,
      tag: "Human-In-The-Loop",
      clause: "ISO 17025 Section 7.8 (Reporting of Results)",
      details: "Structured dual-role authorization pipeline preventing unverified reports from being released. Technicians submit completed test logs; qualified reviewers inspect turning point curves, error plots, and environmental logs before applying electronic signature approval or requesting corrections.",
      highlights: ["Role-based access (Technician / Reviewer)", "Technical remark trails", "Approval state locking", "Electronic signature binding"]
    },
    {
      id: "repository",
      title: "Secure Repository",
      desc: "Find reports instantly by model, serial number, manufacturer, test date, accuracy class, or approval status.",
      icon: Database,
      tag: "Searchable Archive",
      clause: "Statutory Archival & Data Integrity",
      details: "Centralized, encrypted cloud archive storing all historical calibration and type evaluation records. Provides instant multi-parametric search by instrument model, manufacturer, serial number, accuracy class, test technician, date range, or approval status.",
      highlights: ["Instant multi-parameter search", "Encrypted data isolation", "Historical trend analysis", "Audit-ready archival"]
    },
    {
      id: "analytics",
      title: "Dashboard Analytics",
      desc: "Real-time visibility into laboratory workload, pass rates, pending sign-offs, and compliance telemetry.",
      icon: BarChart3,
      tag: "Operational Visibility",
      clause: "Operational Quality & Telemetry",
      details: "Executive and operational dashboard providing real-time visibility into laboratory throughput. Tracks pending review queues, average report turnaround time, test pass/fail ratios across instrument classes, and technician workload metrics.",
      highlights: ["Real-time workload queue", "Turnaround time metrics", "Quality pass/fail ratios", "Technician productivity telemetry"]
    },
    {
      id: "emaap",
      title: "eMaap-Ready Integration",
      desc: "Designed for future secure workflow integration with Legal Metrology systems, subject to official API access and approval.",
      icon: Network,
      tag: "Integration Ready",
      clause: "Legal Metrology Portal Ecosystem",
      details: "Built from the ground up to interface with state and central Legal Metrology digital platforms (such as eMaap). Formats test metadata into encrypted JSON REST API payloads, ensuring seamless future data sync with government model approval registries.",
      highlights: ["AES-256 encrypted REST API payloads", "JSON model approval schema", "State/Central ecosystem readiness", "Zero duplicate data entry"]
    }
  ];

  return (
    <section id="features" className="py-8 md:py-12 bg-white text-slate-800 relative border-b border-slate-200 min-h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4 sm:space-y-6">
        
        {/* Header */}
        <div className="w-full text-center flex flex-col items-center justify-center space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight whitespace-nowrap">
            Engineered for <span className="text-[#007A8C]">OIML R-76 Rigor</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm whitespace-nowrap font-medium">
            Eight connected capabilities powering precision testing, strict compliance, and fast report turnaround.
          </p>
        </div>

        {/* 8 Core Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedFeature(feat)}
                className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-2xl border border-slate-200 hover:border-[#007A8C]/50 hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer active:scale-[0.99]"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#E6F4F6] text-[#007A8C] group-hover:bg-[#007A8C] group-hover:text-white flex items-center justify-center font-bold transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#007A8C] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#007A8C] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-snug font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#007A8C] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Human-Control Banner from Blueprint */}
        <div className="bg-[#007A8C] text-white p-4 sm:p-5 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border-b-4 border-[#C0D725]">
          <div className="space-y-0.5 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C0D725] font-bold">
              HUMAN-CONTROL PRINCIPLE
            </span>
            <h3 className="text-sm sm:text-base md:text-lg font-black">
              TARAZU automates calculations, validation, and reporting.
            </h3>
            <p className="text-[11px] sm:text-xs text-teal-100 max-w-2xl">
              Physical testing and final report approval remain under the authority of qualified laboratory personnel.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl bg-[#C0D725] hover:bg-[#B3C91F] text-slate-900 text-xs font-black shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0"
          >
            Get TARAZU →
          </button>
        </div>

      </div>

      {/* Interactive Detail Modal Card when Learn More is clicked */}
      {selectedFeature && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedFeature(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden animate-scale-up space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#007A8C] via-[#06B6D4] to-emerald-500" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pt-1">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/20">
                  {React.createElement(selectedFeature.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900">{selectedFeature.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007A8C] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md border border-[#007A8C]/20 inline-block mt-0.5">
                    {selectedFeature.tag}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedFeature(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* OIML Clause Pill Badge */}
            <div className="p-2.5 rounded-xl bg-[#EEF2FF] border border-[#007A8C]/20 flex items-center gap-2 text-xs font-bold text-[#007A8C]">
              <BookOpen className="w-4 h-4 text-[#007A8C] shrink-0" />
              <span>{selectedFeature.clause}</span>
            </div>

            {/* Detailed Overview Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {selectedFeature.details}
            </p>

            {/* Key Capabilities Highlights Checklist */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Technical Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedFeature.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-[#F8FAFC] p-2 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007A8C] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedFeature(null);
                  onOpenDemo();
                }}
                className="px-5 py-2 rounded-xl bg-[#007A8C] hover:bg-[#006372] text-white text-xs font-bold shadow-md transition-all cursor-pointer active:scale-95"
              >
                Get TARAZU
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default CoreFeaturesSection;
