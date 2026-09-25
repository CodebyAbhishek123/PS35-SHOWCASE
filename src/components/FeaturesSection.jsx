import React, { useState } from 'react';
import { 
  Scale, Calculator, FileCheck, Database, ShieldCheck, Check, Eye
} from 'lucide-react';

export function FeaturesSection({ onOpenSandbox, onOpenSampleReport }) {
  const [activeTab, setActiveTab] = useState(0);

  const featureTabs = [
    {
      id: "tests",
      title: "Full OIML R-76 Test Suite",
      icon: Scale,
      badge: "7 Test Modules",
      summary: "Digital forms for every test prescribed in OIML R-76-1:2006 for type evaluation.",
      details: [
        { label: "Weighing Performance (Clause A.4.4)", desc: "Multi-point loading/unloading test with turning point delta-L resolution." },
        { label: "Eccentricity / Corner Load (Clause A.4.7)", desc: "1/3 Max or 1/4 Max loading at 5 platform positions with geometric tolerance." },
        { label: "Repeatability Test (Clause A.4.10)", desc: "Series of 3 to 10 measurements at 50% and 100% Max with automatic range verification." },
        { label: "Tare & Zero Tests (Clause A.4.2 & A.4.6)", desc: "Zero-setting error limit (|E0| <= 0.25e) and tare balancing accuracy." },
        { label: "Discrimination Test (Clause A.4.8)", desc: "1.4d extra load sensitivity detection without indication flicker." },
        { label: "Environmental Influence (Clause A.5)", desc: "Temperature span drift (-10°C to +40°C) and mains voltage variations (85% to 115%)." }
      ]
    },
    {
      id: "math",
      title: "Automated Metrological Engine",
      icon: Calculator,
      badge: "Zero Math Error",
      summary: "Eliminates all manual arithmetic and spreadsheet formula mistakes.",
      details: [
        { label: "Turning Point Method", desc: "Computes true corrected indication: P = I + 0.5e - deltaL automatically." },
        { label: "Zero-Corrected Error", desc: "Calculates true error E = P - L and zero-adjusted error Ec = E - E0." },
        { label: "Dynamic MPE Classification", desc: "Instant MPE lookup for Class I, II, III, IV across 500e, 2000e, 10000e tiers." },
        { label: "Scale Division Integrity", desc: "Validates verification scale interval (e) vs actual scale interval (d) rules (e = d or e = 10d)." },
        { label: "Automatic Pass/Fail Decision", desc: "Instant visual badges and warning alerts if any single test point breaches tolerance." }
      ]
    },
    {
      id: "reports",
      title: "Standardized Report Formatter",
      icon: FileCheck,
      badge: "Print / PDF / Word / JSON",
      summary: "Complies strictly with OIML R-76-2 Format of the Evaluation Report.",
      details: [
        { label: "DoCA Official Template", desc: "Standardized national header, Ministry watermark, and Legal Metrology Act references." },
        { label: "Pixel-Perfect Printable A4", desc: "Dedicated clean print stylesheet for physical paper archival and stamping." },
        { label: "High-Resolution PDF", desc: "One-click export to PDF with embedded vector tables and signatures." },
        { label: "Editable MS Word (.doc)", desc: "Exportable Word document for laboratory record keeping and administrative notes." },
        { label: "JSON Data Interchange", desc: "Machine-readable structured JSON format for syncing with national metrology databases." }
      ]
    },
    {
      id: "security",
      title: "Cryptographic Trust & Audit",
      icon: ShieldCheck,
      badge: "Legal Metrology Grade",
      summary: "Ensures tamper-proof reports and indisputable legal evidence.",
      details: [
        { label: "SHA-256 Digital Seal", desc: "Cryptographic hash generated over all input data, environment logs, and test results." },
        { label: "Tamper-Evident QR Code", desc: "Scannable QR code on every report linking directly to public verification URL." },
        { label: "Immutable Audit Trail", desc: "Logs testing officer, time stamps, equipment calibration certificate IDs, and approval status." },
        { label: "Digital Signature Support", desc: "Enables testing officers and laboratory directors to attach digital certificate signatures." }
      ]
    },
    {
      id: "repository",
      title: "National Digital Repository",
      icon: Database,
      badge: "Search & Retrieve",
      summary: "Centralized repository for all historical test evaluations and model approvals.",
      details: [
        { label: "Instant Multi-Filter Search", desc: "Search by Manufacturer, Model Name, Accuracy Class, Report ID, or Date Range." },
        { label: "Model Approval Tracking", desc: "Track pending, approved, and rejected model applications across all test labs." },
        { label: "Historical Instrument Lineage", desc: "Compare previous test iterations of revised models over time." },
        { label: "Cloud & Local Sync", desc: "Operates offline in laboratory test benches and syncs with Central DoCA portal when online." }
      ]
    }
  ];

  const currentTab = featureTabs[activeTab];

  return (
    <section id="features" className="py-20 md:py-28 relative border-t border-slate-200 bg-[#F8FAFC] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF2FF] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>ENTERPRISE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Comprehensive <span className="text-[#007A8C]">Feature Architecture</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Designed specifically to meet all key functional requirements of SIH Problem Statement 26035.
          </p>
        </div>

        {/* Feature Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {featureTabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#007A8C] text-white shadow-md shadow-[#007A8C]/30'
                    : 'bg-white text-slate-700 hover:text-[#007A8C] hover:bg-indigo-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Summary */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#007A8C]/30 text-xs font-bold text-[#007A8C]">
                <span>{currentTab.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {currentTab.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentTab.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenSampleReport('REP-2026-001')}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#007A8C] hover:bg-[#4338CA] shadow-md shadow-[#007A8C]/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Sample Report</span>
                </button>
              </div>
            </div>

            {/* Right Column: Detailed Clauses */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentTab.details.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1 hover:border-[#007A8C] transition-colors shadow-2xs">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;
