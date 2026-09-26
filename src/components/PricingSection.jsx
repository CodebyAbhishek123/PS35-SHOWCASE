import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Scale, 
  ShieldCheck, 
  Building2, 
  Zap, 
  Lock, 
  CheckCircle2,
  FileCheck,
  Cpu,
  Users,
  Layers,
  ChevronDown,
  ChevronUp,
  RotateCw,
  ExternalLink
} from 'lucide-react';

export function PricingSection({ onOpenSandbox, onOpenDemo }) {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [flippedCards, setFlippedCards] = useState({});
  const [showComparison, setShowComparison] = useState(false);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const plans = [
    {
      id: "starter",
      name: "Starter / Pilot Lab",
      badge: "SINGLE BENCH",
      audience: "Single calibration benches & small labs",
      desc: "Eliminate error-prone Excel sheets with automated OIML R-76-1 turning point math and tamper-sealed PDF exports.",
      priceMonthly: "$299",
      priceAnnual: "$249",
      period: "per month",
      billedAnnualTotal: "$2,988 / yr",
      savings: "Save $600 / yr",
      icon: Scale,
      featured: false,
      buttonText: "Request Pilot Access",
      highlights: [
        { label: "Seats", value: "2 Techs" },
        { label: "Benches", value: "1 Lab" },
        { label: "Reports", value: "100 / mo" },
      ],
      frontFeatures: [
        "Automated Turning Point Math (P = I + 0.5e − ΔL)",
        "Stepped MPE Pass/Fail Class I-IV Checks",
        "Standard Formal PDF Export with QR verification",
        "SHA-256 Digital Tamper-Proof Hash Seal",
        "Email Support with 24h SLA Response",
      ],
      backFeatures: [
        "Full OIML R-76 Stepped MPE Engine",
        "Official PDF Export with Verification QR",
        "Tamper-Proof SHA-256 Hash Verification",
        "Multi-Device Web Cloud Access"
      ]
    },
    {
      id: "professional",
      name: "Professional Lab",
      badge: "⭐ MOST POPULAR",
      audience: "Commercial testing & ISO 17025 facilities",
      desc: "Full-scale OIML R-76 metrology workspace with unlimited test reports, multi-tier sign-off, and mass set tracking.",
      priceMonthly: "$699",
      priceAnnual: "$599",
      period: "per month",
      billedAnnualTotal: "$7,188 / yr",
      savings: "Save $1,200 / yr",
      icon: ShieldCheck,
      featured: true,
      buttonText: "Book a 15-Min Live Demo",
      highlights: [
        { label: "Seats", value: "10 Seats" },
        { label: "Workspaces", value: "3 Labs" },
        { label: "Reports", value: "Unlimited" },
      ],
      frontFeatures: [
        "Unlimited Evaluated Test Reports",
        "Multi-Tier Review & Sign-Off Pipeline",
        "Automated PDF, DOCX & JSON Raw Export",
        "Reference Standard Mass Tracking & Due Alerts",
        "Priority 24/7 Dedicated Metrology Support SLA",
      ],
      backFeatures: [
        "Unlimited OIML R-76 Evaluations & Exports",
        "Multi-Tier Signatory Review & Approval Pipeline",
        "Custom Laboratory Branding & Dynamic QR Portal",
        "Reference Standard Mass Calibration Tracking",
        "24/7 Priority Metrology SLA"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise & Govt",
      badge: "STATUTORY & SCALE MFRS",
      audience: "Scale manufacturers & Metrology authorities",
      desc: "Custom deployment with tailored local regulations, private cloud / on-premise hosting, and direct eMaap API hooks.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "volume tailored",
      billedAnnualTotal: "Custom SLA roadmap",
      savings: "Pilot & Volume Discounts",
      icon: Building2,
      featured: false,
      buttonText: "Request Enterprise Consultation",
      highlights: [
        { label: "Seats", value: "Unlimited" },
        { label: "Benches", value: "Enterprise" },
        { label: "Hosting", value: "Cloud / On-Prem" },
      ],
      frontFeatures: [
        "Unlimited Users, Signatories & Benches",
        "Dedicated Private Cloud or On-Premise Air-Gapped",
        "Custom Rule Engine & Local MPE Adaptations",
        "eMaap-Ready Architecture & Direct LIMS APIs",
        "ISO/IEC 17025 Metrologist Audit Assistance",
      ],
      backFeatures: [
        "Air-Gapped On-Premise or Dedicated VPC",
        "Custom Metrology Rules & National Regulations",
        "Direct LIMS & ERP Automated REST/JSON API Sync",
        "Dedicated Metrology Technical Account Lead",
        "99.99% Enterprise Uptime SLA"
      ]
    }
  ];

  const comparisonCategories = [
    {
      category: "Metrology Calculations & Evaluation",
      rows: [
        { name: "OIML R-76-1 Turning Point Engine (P = I + 0.5e − ΔL)", starter: "Included", pro: "Included", ent: "Included (Customizable)" },
        { name: "Stepped MPE Table Evaluation (Class I, II, III, IIII)", starter: "Standard", pro: "Standard + Custom", ent: "Standard + Custom Rules" },
        { name: "Tare & Zero Setting Tests", starter: "Yes", pro: "Yes", ent: "Yes" },
        { name: "Eccentricity (Corner Load) Evaluation", starter: "Yes", pro: "Yes", ent: "Yes" },
        { name: "Repeatability (Run 1 / Run 2 ΔE Max)", starter: "Yes", pro: "Yes", ent: "Yes" },
        { name: "Reference Mass Set Tracking & Calibration Due Alerts", starter: "Basic", pro: "Advanced", ent: "Enterprise LIMS Sync" },
      ]
    },
    {
      category: "Workspaces & User Management",
      rows: [
        { name: "Included Laboratory Technicians", starter: "2 Seats", pro: "10 Seats", ent: "Unlimited" },
        { name: "Active Laboratory Workspaces / Benches", starter: "1 Workspace", pro: "3 Workspaces", ent: "Unlimited Regional Benches" },
        { name: "Role-Based Access Control (Technician, Signatory, Admin)", starter: "Standard", pro: "Granular Multi-Tier", ent: "Custom SSO & RBAC" },
        { name: "Single Sign-On (SAML / Okta / Azure AD)", starter: "—", pro: "Optional Add-on", ent: "Included" },
      ]
    },
    {
      category: "Reporting, Verification & Compliance",
      rows: [
        { name: "Monthly Evaluated Reports", starter: "100 / month", pro: "Unlimited", ent: "Unlimited" },
        { name: "Report Formats", starter: "PDF", pro: "PDF, DOCX, JSON", ent: "PDF, DOCX, JSON, XML, API" },
        { name: "SHA-256 Digital Tamper Hash", starter: "Yes", pro: "Yes", ent: "Yes" },
        { name: "Dynamic QR Code Verification Portal", starter: "Standard", pro: "Custom Branded", ent: "White-Label & Custom Domain" },
        { name: "eMaap-Ready Architecture & Legal Metrology API Hooks", starter: "—", pro: "Standard API", ent: "Full API + Custom Adapters" },
        { name: "ISO/IEC 17025 Audit Assistance", starter: "Self-serve Docs", pro: "Priority Support", ent: "Dedicated Metrologist Lead" },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-14 sm:py-18 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-slate-800 relative border-b border-slate-200 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#007A8C]/8 via-[#C0D725]/10 to-[#2563EB]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#007A8C_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">


          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Predictable Plans for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0F2747] via-[#007A8C] to-[#0F9D8A] bg-clip-text text-transparent">
              Every Laboratory Scale.
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Hover or tap any card to reveal dynamic pricing, annual savings, and instant lab access.
          </p>

          {/* Compact Billing Toggle Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#0F2747] text-white shadow-xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-[#007A8C] to-[#0E8B9E] text-white shadow-xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Annual</span>
                <span className="text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded bg-[#C0D725] text-slate-950 shadow-2xs">
                  SAVE 20%
                </span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              2 Months Free Included
            </span>
          </div>
        </div>

        {/* 3 Interactive 3D Flip Pricing Cards (Screen-fit Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((p) => {
            const PlanIcon = p.icon;
            const isFeatured = p.featured;
            const isEnterprise = p.id === 'enterprise';
            const isFlippedManual = flippedCards[p.id];

            return (
              <div 
                key={p.id} 
                className="perspective-1000 w-full h-[450px] relative group"
                onClick={() => toggleFlip(p.id)}
              >
                {/* 3D Flip Card Container */}
                <div 
                  className={`w-full h-full relative transform-style-3d transition-transform duration-700 ease-out cursor-pointer ${
                    isFlippedManual ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                  }`}
                >
                  
                  {/* ================= FRONT SIDE OF CARD ================= */}
                  <div 
                    className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                      isFeatured
                        ? 'bg-gradient-to-b from-[#0F2747] via-[#0B1E37] to-[#071322] text-white border-2 border-[#007A8C] shadow-[0_15px_45px_-10px_rgba(0,122,140,0.4)]'
                        : isEnterprise
                        ? 'bg-gradient-to-b from-slate-900 via-[#131F33] to-slate-950 text-white border border-slate-700 shadow-xl'
                        : 'bg-white text-slate-900 border border-slate-200/90 shadow-lg'
                    }`}
                  >
                    {/* Top Floating Badge for Featured */}
                    {isFeatured && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#007A8C] to-[#C0D725] text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-md border border-white/30 flex items-center gap-1.5 whitespace-nowrap z-20">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                        <span>MOST POPULAR</span>
                      </div>
                    )}

                    {/* Front Header */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className={`text-[9px] font-mono font-black tracking-widest uppercase px-2.5 py-0.5 rounded-md inline-block ${
                            isFeatured
                              ? 'bg-white/10 text-[#C0D725] border border-white/15'
                              : isEnterprise
                              ? 'bg-teal-950 text-teal-300 border border-teal-700/40'
                              : 'bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/20'
                          }`}>
                            {p.badge}
                          </span>
                          <h3 className={`text-xl sm:text-2xl font-black mt-1 ${isFeatured || isEnterprise ? 'text-white' : 'text-slate-950'}`}>
                            {p.name}
                          </h3>
                        </div>

                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                          isFeatured
                            ? 'bg-[#007A8C]/30 text-[#C0D725] border border-teal-400/30'
                            : isEnterprise
                            ? 'bg-slate-800 text-teal-300 border border-slate-700'
                            : 'bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/20'
                        }`}>
                          <PlanIcon className="w-5 h-5" />
                        </div>
                      </div>

                      <p className={`text-xs line-clamp-2 ${isFeatured ? 'text-slate-300' : isEnterprise ? 'text-slate-400' : 'text-slate-600'}`}>
                        {p.desc}
                      </p>

                      {/* 3 Metric Pills */}
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        {p.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className={`p-1.5 rounded-lg text-center border ${
                              isFeatured
                                ? 'bg-white/5 border-white/10'
                                : isEnterprise
                                ? 'bg-slate-800/40 border-slate-700/50'
                                : 'bg-slate-50 border-slate-200/60'
                            }`}
                          >
                            <div className={`text-[8px] font-mono uppercase ${isFeatured || isEnterprise ? 'text-slate-400' : 'text-slate-500'}`}>
                              {h.label}
                            </div>
                            <div className={`text-[11px] font-mono font-bold truncate ${
                              isFeatured ? 'text-[#C0D725]' : isEnterprise ? 'text-teal-300' : 'text-slate-900'
                            }`}>
                              {h.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Front Features List */}
                      <div className="space-y-2 pt-1">
                        <span className={`text-[9px] font-mono font-extrabold uppercase tracking-wider block ${
                          isFeatured || isEnterprise ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          INCLUDED CAPABILITIES:
                        </span>
                        <ul className="space-y-1.5">
                          {p.frontFeatures.slice(0, 4).map((f, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                                isFeatured
                                  ? 'bg-[#007A8C] text-[#C0D725]'
                                  : isEnterprise
                                  ? 'bg-teal-900 text-teal-300'
                                  : 'bg-[#E6F4F6] text-[#007A8C]'
                              }`}>
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className={`truncate ${isFeatured ? 'text-slate-200' : isEnterprise ? 'text-slate-300' : 'text-slate-700'}`}>
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Front Bottom Flip Prompt Pill */}
                    <div className="pt-3 border-t border-slate-200/15">
                      <div className={`py-2 px-3 rounded-xl border flex items-center justify-between text-xs font-medium transition-all ${
                        isFeatured
                          ? 'bg-[#C0D725]/15 border-[#C0D725]/40 text-[#C0D725]'
                          : isEnterprise
                          ? 'bg-teal-950/60 border-teal-700/40 text-teal-300'
                          : 'bg-[#E6F4F6] border-[#007A8C]/20 text-[#007A8C]'
                      }`}>
                        <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
                          <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                          <span>Hover to see Price &amp; SLAs</span>
                        </div>
                        <span className="text-xs font-bold">↻</span>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE OF CARD (REVEALED ON FLIP) ================= */}
                  <div 
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                      isFeatured
                        ? 'bg-gradient-to-b from-[#0F2747] via-[#0B1E37] to-[#071322] text-white border-2 border-[#007A8C] shadow-[0_20px_50px_-10px_rgba(0,122,140,0.5)]'
                        : isEnterprise
                        ? 'bg-gradient-to-b from-slate-900 via-[#131F33] to-slate-950 text-white border border-slate-700 shadow-2xl'
                        : 'bg-white text-slate-900 border-2 border-[#007A8C]/30 shadow-xl'
                    }`}
                  >
                    {/* Back Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-md ${
                          isFeatured
                            ? 'bg-white/10 text-[#C0D725]'
                            : isEnterprise
                            ? 'bg-teal-950 text-teal-300'
                            : 'bg-[#E6F4F6] text-[#007A8C]'
                        }`}>
                          {p.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <RotateCw className="w-3 h-3" /> Flipped
                        </span>
                      </div>

                      {/* Main Big Price Display */}
                      <div className={`p-4 rounded-2xl border ${
                        isFeatured
                          ? 'bg-white/6 border-teal-500/30'
                          : isEnterprise
                          ? 'bg-slate-800/60 border-slate-700/80'
                          : 'bg-slate-50 border-slate-200/80'
                      }`}>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${
                            isFeatured || isEnterprise ? 'text-white' : 'text-slate-950'
                          }`}>
                            {billingCycle === 'annual' ? p.priceAnnual : p.priceMonthly}
                          </span>
                          {p.priceAnnual !== 'Custom' ? (
                            <div className="flex flex-col">
                              <span className={`text-xs font-mono font-bold ${isFeatured || isEnterprise ? 'text-slate-300' : 'text-slate-700'}`}>
                                / mo
                              </span>
                              <span className={`text-[10px] font-mono ${isFeatured ? 'text-slate-400' : isEnterprise ? 'text-slate-500' : 'text-slate-500'}`}>
                                {billingCycle === 'annual' ? p.billedAnnualTotal : 'monthly'}
                              </span>
                            </div>
                          ) : (
                            <span className={`text-xs font-mono ${isFeatured || isEnterprise ? 'text-teal-300' : 'text-[#007A8C]'}`}>
                              / deployment
                            </span>
                          )}
                        </div>

                        <div className="mt-2 pt-2 border-t border-slate-200/15 flex items-center justify-between text-[11px]">
                          <span className={isFeatured ? 'text-[#C0D725] font-bold' : isEnterprise ? 'text-teal-300 font-bold' : 'text-emerald-600 font-bold'}>
                            {billingCycle === 'annual' ? p.savings : 'Flexible monthly'}
                          </span>
                          <span className={`text-[10px] font-mono ${isFeatured || isEnterprise ? 'text-slate-400' : 'text-slate-500'}`}>
                            {p.audience}
                          </span>
                        </div>
                      </div>

                      {/* Back Feature Summary Pills */}
                      <div className="space-y-1.5 pt-1">
                        <span className={`text-[9px] font-mono font-extrabold uppercase tracking-wider block ${
                          isFeatured || isEnterprise ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          CORE VALUE DELIVERABLES:
                        </span>
                        <ul className="space-y-1 text-xs">
                          {p.backFeatures.map((bf, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                                isFeatured ? 'text-[#C0D725]' : isEnterprise ? 'text-teal-300' : 'text-[#007A8C]'
                              }`} />
                              <span className={`truncate text-[11px] ${
                                isFeatured ? 'text-slate-200 font-medium' : isEnterprise ? 'text-slate-300' : 'text-slate-700'
                              }`}>
                                {bf}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Back Action Buttons */}
                    <div className="pt-3 border-t border-slate-200/15 space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDemo();
                        }}
                        className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                          isFeatured
                            ? 'bg-gradient-to-r from-[#C0D725] to-[#AEC41F] hover:from-[#C9E026] hover:to-[#B6CC22] text-slate-950 font-black shadow-[#C0D725]/30'
                            : isEnterprise
                            ? 'bg-gradient-to-r from-[#007A8C] to-[#0B5E6B] hover:from-[#008DA2] hover:to-[#0C6D7C] text-white font-black shadow-[#007A8C]/25 border border-teal-400/30'
                            : 'bg-[#0F2747] hover:bg-[#007A8C] text-white'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{p.buttonText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenSandbox();
                        }}
                        className={`w-full text-center text-[10px] font-mono transition-colors hover:underline cursor-pointer ${
                          isFeatured ? 'text-teal-300 hover:text-white' : isEnterprise ? 'text-teal-400 hover:text-white' : 'text-slate-500 hover:text-[#007A8C]'
                        }`}
                      >
                        Launch Interactive Sandbox →
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Accordion Toggle */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="text-center">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-[#007A8C] hover:border-[#007A8C]/40 font-bold text-xs shadow-sm transition-all cursor-pointer group"
            >
              <Layers className="w-3.5 h-3.5 text-[#007A8C]" />
              <span>{showComparison ? "Hide Detailed Feature Specifications" : "Compare All Plan Specifications"}</span>
              {showComparison ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />}
            </button>
          </div>

          {/* Detailed Matrix Table (Expandable) */}
          {showComparison && (
            <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden animate-fadeIn">
              <div className="p-4 bg-gradient-to-r from-[#0F2747] to-[#007A8C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-black tracking-tight">Granular Metrology Feature Matrix</h3>
                  <p className="text-[11px] text-teal-100">Full technical breakdown aligned with OIML R-76-1 &amp; ISO/IEC 17025.</p>
                </div>
                <button 
                  onClick={onOpenDemo}
                  className="px-3.5 py-1.5 rounded-lg bg-[#C0D725] text-slate-950 font-black text-xs hover:bg-lime-400 transition-colors cursor-pointer shadow-xs"
                >
                  Book Technical Walkthrough
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80">
                      <th className="py-3 px-5 font-bold text-slate-900 w-2/5">Specification</th>
                      <th className="py-3 px-3 font-black text-slate-900 text-center w-1/5">Starter Lab</th>
                      <th className="py-3 px-3 font-black text-[#007A8C] text-center w-1/5 bg-[#E6F4F6]/50">Professional</th>
                      <th className="py-3 px-3 font-black text-slate-900 text-center w-1/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonCategories.map((cat, cIdx) => (
                      <React.Fragment key={cIdx}>
                        <tr className="bg-slate-100/70 border-t border-b border-slate-200">
                          <td colSpan={4} className="py-2 px-5 font-mono font-bold text-slate-800 uppercase tracking-wider text-[9px]">
                            {cat.category}
                          </td>
                        </tr>
                        {cat.rows.map((r, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-2.5 px-5 font-medium text-slate-700 text-[11px]">{r.name}</td>
                            <td className="py-2.5 px-3 text-center font-mono text-slate-600 text-[11px]">{r.starter}</td>
                            <td className="py-2.5 px-3 text-center font-mono font-bold text-[#007A8C] bg-[#E6F4F6]/30 text-[11px]">{r.pro}</td>
                            <td className="py-2.5 px-3 text-center font-mono text-slate-900 font-semibold text-[11px]">{r.ent}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Compact Pilot Assurance Banner */}
        <div className="mt-10 max-w-5xl mx-auto bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-800 text-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C0D725] shrink-0" />
              <span className="text-slate-200"><strong>30-Day Pilot Guarantee:</strong> Live tests on your benches.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C0D725] shrink-0" />
              <span className="text-slate-200"><strong>ISO 17025 Alignment:</strong> Complete formula audit trails.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#C0D725] shrink-0" />
              <span className="text-slate-200"><strong>Metrologist Onboarding:</strong> Custom template support.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;

