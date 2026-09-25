import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Scale, 
  Play, 
  FileSpreadsheet, 
  ShieldCheck, 
  CheckSquare, 
  FileText, 
  History,
  ExternalLink
} from 'lucide-react';

export function ProductShowcaseSection({ onOpenSandbox }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'instruments', label: 'Instruments', icon: Scale },
    { id: 'session', label: 'Test Session', icon: Play },
    { id: 'workspace', label: 'Test Workspace', icon: FileSpreadsheet },
    { id: 'validation', label: 'Validation', icon: ShieldCheck },
    { id: 'review', label: 'Review', icon: CheckSquare },
    { id: 'report', label: 'Report Preview', icon: FileText },
    { id: 'audit', label: 'Audit Trail', icon: History },
  ];

  const showcaseData = {
    dashboard: {
      title: "Central Laboratory Operational Dashboard",
      desc: "Real-time metrics tracking total evaluated weighing instruments, OIML R-76 compliance pass rates, pending technical reviews, and SHA-256 security seals.",
      badges: ["Multi-Lab Overview", "Live Analytics", "Real-Time Telemetry"],
      metrics: [
        { label: "Instruments Tested", val: "1,254", change: "+148 this month", highlight: "text-[#007A8C]" },
        { label: "OIML Pass Rate", val: "96.4%", change: "1,181 Approved", highlight: "text-emerald-600" },
        { label: "Pending Sign-offs", val: "21", change: "36 Active in testing", highlight: "text-amber-600" },
        { label: "Cryptographic Seal", val: "SHA-256", change: "Tamper-Proof Audit", highlight: "text-[#007A8C]" }
      ]
    },
    instruments: {
      title: "Instrument Registry & NAWI Specifications",
      desc: "Centralized database of all client and internal weighing instruments, classified into OIML R-76 Class I, II, III & IV with complete scale parameter records.",
      badges: ["Class I - IV NAWI", "Serial Tracking", "Calibrated Standard Links"],
      metrics: [
        { label: "Class I Fine Precision", val: "142", change: "Max 500g • e=1mg", highlight: "text-[#007A8C]" },
        { label: "Class II High Precision", val: "489", change: "Max 5000g • e=0.01g", highlight: "text-[#007A8C]" },
        { label: "Class III Medium Industrial", val: "598", change: "Max 30kg • e=1g", highlight: "text-amber-600" },
        { label: "Class IV Ordinary Commercial", val: "25", change: "Max 150kg • e=50g", highlight: "text-slate-700" }
      ]
    },
    session: {
      title: "Digital Test Session Launcher",
      desc: "Configure test runs with automated selection of ambient sensors, standard weight sets, tester assignments, and standard operating procedures.",
      badges: ["Environment Sensor Link", "Weight Set Calibration", "SOP Enforcement"],
      metrics: [
        { label: "Active Test Run", val: "TS-2026-8891", change: "Lab #2 • Bench 4", highlight: "text-[#007A8C]" },
        { label: "Ambient Temp", val: "21.4 °C", change: "Permissible: 20-22°C", highlight: "text-emerald-600" },
        { label: "Relative Humidity", val: "52 %", change: "Permissible: 45-60%", highlight: "text-emerald-600" },
        { label: "Reference Mass Set", val: "M1-CAL-992", change: "Cert Valid to Dec 2026", highlight: "text-[#007A8C]" }
      ]
    },
    workspace: {
      title: "Interactive Metrological Test Workspace",
      desc: "Structured observation entry for Turning Point calculations, Delta-L corrections, indication error E = I + 0.5e - ΔL - L, and zero tracking.",
      badges: ["Turning Point Engine", "Delta-L Correction", "Zero-Tracking Check"],
      metrics: [
        { label: "Nominal Load (L)", val: "2000.00 g", change: "Applied Test Standard", highlight: "text-slate-800" },
        { label: "Indicated Load (I)", val: "2000.01 g", change: "Instrument Display", highlight: "text-[#007A8C]" },
        { label: "Additional Load (ΔL)", val: "0.004 g", change: "Change Point Weight", highlight: "text-amber-600" },
        { label: "Corrected Error (Ec)", val: "+0.006 g", change: "MPE Tolerance: ±0.015g", highlight: "text-[#007A8C]" }
      ]
    },
    validation: {
      title: "Intelligent Rule-Based Validation Engine",
      desc: "Automated step-by-step verification against non-linear OIML R-76 MPE thresholds (500e, 2000e, 10000e) with real-time pass/fail badges.",
      badges: ["OIML R-76 Stepped MPE", "500e / 2000e / 10000e", "Instant Pass/Fail"],
      metrics: [
        { label: "0 to 500e Step", val: "PASS", change: "MPE: ±0.5e (Ec = +0.2e)", highlight: "text-[#007A8C]" },
        { label: "501e to 2000e Step", val: "PASS", change: "MPE: ±1.0e (Ec = +0.4e)", highlight: "text-[#007A8C]" },
        { label: "2001e to 10000e Step", val: "PASS", change: "MPE: ±1.5e (Ec = +0.8e)", highlight: "text-[#007A8C]" },
        { label: "Overload Check", val: "COMPLIANT", change: "Trips at Max + 9e", highlight: "text-[#007A8C]" }
      ]
    },
    review: {
      title: "Multi-Tier Review & Sign-Off Workspace",
      desc: "Technical Reviewer inspection panel for verification of raw readings, environmental stability logs, and compliance calculations before authorization.",
      badges: ["Technical Review", "Sign-Off Pipeline", "Audit Verification"],
      metrics: [
        { label: "Tester Submission", val: "R. Sharma", change: "Submitted 14:22 UTC", highlight: "text-[#007A8C]" },
        { label: "Technical Reviewer", val: "Dr. A. Verma", change: "Approved 15:10 UTC", highlight: "text-emerald-600" },
        { label: "Authorized Signatory", val: "Lab Director", change: "Pending Seal", highlight: "text-amber-600" },
        { label: "Revision Status", val: "V1.0 FINAL", change: "Zero Rejections", highlight: "text-[#007A8C]" }
      ]
    },
    report: {
      title: "Automated Type Evaluation Report Generator",
      desc: "Standardized multi-format export generating publication-ready A4 test reports in PDF, editable Word (.docx), and JSON data structures.",
      badges: ["Printable A4 PDF", "Editable DOCX", "JSON Interchange"],
      metrics: [
        { label: "Report Document", val: "OIML-R76-2026-901", change: "Full Type Evaluation", highlight: "text-slate-900" },
        { label: "Cryptographic Seal", val: "SHA-256 Match", change: "e3b0c44298fc1c149af...", highlight: "text-emerald-600" },
        { label: "QR Code Seal", val: "Active QR", change: "Public Verification Link", highlight: "text-[#007A8C]" },
        { label: "Export Status", val: "Ready", change: "PDF, DOCX, JSON Available", highlight: "text-amber-600" }
      ]
    },
    audit: {
      title: "Immutable SHA-256 Audit Trail",
      desc: "Complete event history capturing every timestamp, user identity, value modification, and calculation result in a tamper-proof ledger.",
      badges: ["Immutable Ledger", "Timestamped Events", "User Action Tracking"],
      metrics: [
        { label: "Total Audit Events", val: "48 Entries", change: "100% Sequence Intact", highlight: "text-[#007A8C]" },
        { label: "Security Status", val: "SECURE", change: "Zero Tamper Flag", highlight: "text-emerald-600" },
        { label: "Latest Hash", val: "0x8f9a2c...", change: "Generated 2m ago", highlight: "text-amber-600" },
        { label: "Compliance Standard", val: "ISO/IEC 17025", change: "Full Audit Readiness", highlight: "text-[#007A8C]" }
      ]
    }
  };

  const current = showcaseData[activeTab];

  return (
    <section id="showcase" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>PRODUCT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore the <span className="text-[#007A8C]">TARAZU Workspace</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Interactive preview of the 8 core modules driving digital legal metrology evaluations.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#007A8C] text-white shadow-md shadow-[#007A8C]/30'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Screen Showcase Display */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {current.badges.map((b, i) => (
                  <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007A8C] bg-[#E6F4F6] px-2.5 py-0.5 rounded-md border border-[#007A8C]/20">
                    {b}
                  </span>
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">{current.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">{current.desc}</p>
            </div>

            <button
              onClick={onOpenSandbox}
              className="px-4 py-2 rounded-xl bg-[#E6F4F6] hover:bg-[#007A8C] text-[#007A8C] hover:text-white text-xs font-bold border border-[#007A8C]/30 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Launch Module in Sandbox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold">{m.label}</span>
                <div className={`text-2xl font-black font-mono ${m.highlight}`}>{m.val}</div>
                <div className="text-[11px] text-slate-500 font-medium">{m.change}</div>
              </div>
            ))}
          </div>

          {/* UI Screen Workspace Preview */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C0D725]" />
                <span>TARAZU HIGH-PRECISION METROLOGY WORKSPACE</span>
              </span>
              <span>SCREEN ID: {activeTab.toUpperCase()}-MODULE</span>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 space-y-2">
              <div className="text-[#C0D725] font-bold">// Active OIML R-76 Module Calculation Stream</div>
              <div>[00.01s] Instrument Profile loaded: Class II Precision NAWI (Max: 5000g, e: 0.01g)</div>
              <div>[00.04s] Environmental sensor calibration confirmed: Temp 21.4°C | RH 52%</div>
              <div>[00.09s] Turning Point calculation: P = I + 0.5e - ΔL =&gt; P = 2000.01 + 0.005 - 0.004 = 2000.011g</div>
              <div className="text-[#C0D725] font-bold">[00.12s] RESULT: Permissible Error Ec (+0.006g) WITHIN MPE LIMIT (±0.015g) -&gt; PASS</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductShowcaseSection;
