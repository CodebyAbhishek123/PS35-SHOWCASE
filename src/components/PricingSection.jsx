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
  ExternalLink,
  Landmark
} from 'lucide-react';

export function PricingSection({ onOpenSandbox, onOpenDemo }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [flippedCards, setFlippedCards] = useState({});
  const [showComparison, setShowComparison] = useState(false);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const plans = [
    {
      id: "starter",
      name: "Starter",
      badge: "1-2 TECHNICIANS",
      audience: "Small private labs (1-2 technicians)",
      desc: "Essential digital calibration tools tailored for small private calibration labs.",
      priceMonthly: "₹2,999",
      priceAnnual: "₹29,999",
      periodMonthly: "/month",
      periodAnnual: "/year",
      billedAnnualTotal: "billed annually",
      savings: "Save ₹5,989 / yr",
      icon: Scale,
      featured: false,
      buttonText: "Request Pilot Access",
      highlights: [
        { label: "Reports", value: "50 / mo" },
        { label: "Users", value: "1 Account" },
        { label: "Export", value: "PDF Only" },
      ],
      frontFeatures: [
        "50 test reports/month",
        "1 user account",
        "PDF export only",
        "Email support",
      ],
      backFeatures: [
        "50 Test Reports / Month",
        "1 User Account",
        "PDF Export Only",
        "Email Support",
        "Target: Small private labs (1-2 techs)"
      ]
    },
    {
      id: "professional",
      name: "Professional",
      badge: "3-5 TECHNICIANS",
      audience: "Medium labs (3-5 technicians)",
      desc: "Complete metrology suite for growing medium labs needing multi-format exports & priority support.",
      priceMonthly: "₹7,999",
      priceAnnual: "₹79,999",
      periodMonthly: "/month",
      periodAnnual: "/year",
      billedAnnualTotal: "billed annually",
      savings: "Save ₹15,989 / yr",
      icon: ShieldCheck,
      featured: true,
      buttonText: "Book a Live Demo",
      highlights: [
        { label: "Reports", value: "200 / mo" },
        { label: "Users", value: "5 Accounts" },
        { label: "Export", value: "PDF + Word" },
      ],
      frontFeatures: [
        "200 test reports/month",
        "5 user accounts",
        "PDF + Word export",
        "Digital repository",
        "Priority support",
      ],
      backFeatures: [
        "200 Test Reports / Month",
        "5 User Accounts",
        "PDF + Word Export",
        "Digital Repository",
        "Priority Support",
        "Target: Medium labs (3-5 techs)"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "10+ TECHNICIANS",
      audience: "Large labs + RRSLs (10+ technicians)",
      desc: "Unlimited scale infrastructure with API access, custom branding, and on-premise deployment options.",
      priceMonthly: "₹14,999",
      priceAnnual: "₹1,49,999",
      periodMonthly: "/month",
      periodAnnual: "/year",
      billedAnnualTotal: "billed annually",
      savings: "Save ₹29,989 / yr",
      icon: Cpu,
      featured: false,
      buttonText: "Request Consultation",
      highlights: [
        { label: "Reports", value: "Unlimited" },
        { label: "Users", value: "Unlimited" },
        { label: "Deployment", value: "On-Premise" },
      ],
      frontFeatures: [
        "Unlimited reports & users",
        "API access",
        "Custom branding",
        "On-premise deployment option",
        "Dedicated support",
      ],
      backFeatures: [
        "Unlimited Reports & Users",
        "REST API Access",
        "Custom Branding",
        "On-Premise Deployment Option",
        "Dedicated Support",
        "Target: Large labs + RRSLs (10+ techs)"
      ]
    },
    {
      id: "government",
      name: "Government",
      badge: "STATE DEPARTMENTS",
      audience: "State Legal Metrology Depts",
      desc: "Custom statutory platform for state legal metrology departments with eMaap integration.",
      priceMonthly: "Custom pricing",
      priceAnnual: "Custom pricing",
      periodMonthly: "",
      periodAnnual: "",
      billedAnnualTotal: "Tailored Govt SLA",
      savings: "State Metrology SLA",
      icon: Landmark,
      featured: false,
      buttonText: "Request Consultation",
      highlights: [
        { label: "Dashboard", value: "Multi-Lab" },
        { label: "Reporting", value: "Centralized" },
        { label: "Govt API", value: "eMaap Sync" },
      ],
      frontFeatures: [
        "Multi-lab dashboard",
        "Centralized reporting",
        "eMaap integration",
        "SLA-based support",
      ],
      backFeatures: [
        "Multi-Lab Dashboard",
        "Centralized Reporting",
        "Direct eMaap Integration",
        "SLA-Based Support",
        "Target: State Legal Metrology Depts"
      ]
    }
  ];

  const comparisonCategories = [
    {
      category: "Plan Details & Target Audience",
      rows: [
        { name: "Target Audience", starter: "Small private labs (1-2 techs)", pro: "Medium labs (3-5 techs)", ent: "Large labs + RRSLs (10+ techs)", govt: "State Legal Metrology Depts" },
        { name: "Monthly Test Reports", starter: "50 / month", pro: "200 / month", ent: "Unlimited", govt: "Centralized Unlimited" },
        { name: "User Accounts", starter: "1 user account", pro: "5 user accounts", ent: "Unlimited users", govt: "Multi-lab users" },
      ]
    },
    {
      category: "Export & Compliance Capabilities",
      rows: [
        { name: "Export Formats", starter: "PDF export only", pro: "PDF + Word export", ent: "PDF, Word, JSON, API", govt: "PDF, Word, XML, eMaap API" },
        { name: "Digital Repository", starter: "Standard", pro: "Included", ent: "Enterprise Repository", govt: "Centralized Repository" },
        { name: "Custom Branding", starter: "—", pro: "—", ent: "Custom Branding", govt: "Government Seal & Custom Branding" },
        { name: "API Access", starter: "—", pro: "—", ent: "Included", govt: "Direct eMaap Integration" },
        { name: "On-Premise Deployment", starter: "—", pro: "—", ent: "On-premise option", govt: "On-premise / Govt Cloud" },
      ]
    },
    {
      category: "Support & SLA",
      rows: [
        { name: "Support Model", starter: "Email support", pro: "Priority support", ent: "Dedicated support", govt: "SLA-based support" },
        { name: "Pilot Onboarding", starter: "Self-serve Docs", pro: "Priority Onboarding", ent: "Dedicated Account Lead", govt: "Govt Pilot Walkthrough" },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-8 sm:py-12 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-slate-800 relative border-b border-slate-200 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#007A8C]/8 via-[#C0D725]/10 to-[#2563EB]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#007A8C_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-7 space-y-2.5">

          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#0F2747] via-[#007A8C] to-[#0F9D8A] bg-clip-text text-transparent">
              Transparent Pricing Plans for Every Metrology Laboratory.
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Hover or tap any card to view detailed price breakdowns, target lab sizes, and core features.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200/90 shadow-xs">
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
                  SAVE 17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Interactive 3D Flip Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto items-stretch">
          {plans.map((p) => {
            const PlanIcon = p.icon;
            const isFeatured = p.featured;
            const isGovt = p.id === 'government';
            const isFlippedManual = flippedCards[p.id];

            const currentPrice = billingCycle === 'annual' ? p.priceAnnual : p.priceMonthly;
            const currentPeriod = billingCycle === 'annual' ? p.periodAnnual : p.periodMonthly;

            return (
              <div 
                key={p.id} 
                className="perspective-1000 w-full h-[470px] relative group"
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
                    className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                      isFeatured
                        ? 'bg-gradient-to-b from-[#0F2747] via-[#0B1E37] to-[#071322] text-white border-2 border-[#007A8C] shadow-[0_15px_45px_-10px_rgba(0,122,140,0.4)]'
                        : isGovt
                        ? 'bg-gradient-to-b from-slate-900 via-[#191924] to-slate-950 text-white border border-amber-500/30 shadow-xl'
                        : 'bg-gradient-to-b from-slate-900 via-[#111C2D] to-slate-950 text-white border border-slate-800 shadow-xl'
                    }`}
                  >
                    {/* Front Header */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className={`text-[9px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded-md inline-block ${
                            isFeatured
                              ? 'bg-white/10 text-[#C0D725] border border-white/15'
                              : isGovt
                              ? 'bg-amber-950/80 text-amber-300 border border-amber-700/40'
                              : 'bg-teal-950/80 text-teal-300 border border-teal-700/40'
                          }`}>
                            {p.badge}
                          </span>
                          <h3 className="text-xl font-black mt-1 text-white">
                            {p.name}
                          </h3>
                        </div>

                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                          isFeatured
                            ? 'bg-[#007A8C]/30 text-[#C0D725] border border-teal-400/30'
                            : isGovt
                            ? 'bg-amber-950/60 text-amber-400 border border-amber-700/40'
                            : 'bg-slate-800 text-teal-300 border border-slate-700'
                        }`}>
                          <PlanIcon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Price Display on Front */}
                      <div className="pt-1 pb-1 border-y border-white/10">
                        <div className="flex items-baseline flex-wrap gap-1">
                          <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
                            {currentPrice}
                          </span>
                          {currentPeriod && (
                            <span className="text-xs font-mono font-medium text-slate-300">
                              {currentPeriod}
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">
                          Target: {p.audience}
                        </div>
                      </div>

                      {/* Front Metric Pills */}
                      <div className="grid grid-cols-3 gap-1 pt-1">
                        {p.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className={`p-1 rounded-lg text-center border ${
                              isFeatured
                                ? 'bg-white/5 border-white/10'
                                : 'bg-slate-800/40 border-slate-700/50'
                            }`}
                          >
                            <div className="text-[7.5px] font-mono uppercase text-slate-400">
                              {h.label}
                            </div>
                            <div className={`text-[10px] font-mono font-bold truncate ${
                              isFeatured ? 'text-[#C0D725]' : isGovt ? 'text-amber-300' : 'text-teal-300'
                            }`}>
                              {h.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Front Features List */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider block text-slate-400">
                          INCLUDED FEATURES:
                        </span>
                        <ul className="space-y-1.5">
                          {p.frontFeatures.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                                isFeatured
                                  ? 'bg-[#007A8C] text-[#C0D725]'
                                  : isGovt
                                  ? 'bg-amber-900 text-amber-300'
                                  : 'bg-teal-900 text-teal-300'
                              }`}>
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className="truncate text-[11px] text-slate-300">
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Front Bottom Flip Prompt Pill */}
                    <div className="pt-2 border-t border-slate-200/15">
                      <div className={`py-1.5 px-2.5 rounded-xl border flex items-center justify-between text-xs font-medium transition-all ${
                        isFeatured
                          ? 'bg-[#C0D725]/15 border-[#C0D725]/40 text-[#C0D725]'
                          : isGovt
                          ? 'bg-amber-950/60 border-amber-700/40 text-amber-300'
                          : 'bg-teal-950/60 border-teal-700/40 text-teal-300'
                      }`}>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold">
                          <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                          <span>Hover to flip card</span>
                        </div>
                        <span className="text-xs font-bold">↻</span>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE OF CARD (REVEALED ON FLIP) ================= */}
                  <div 
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                      isFeatured
                        ? 'bg-gradient-to-b from-[#0F2747] via-[#0B1E37] to-[#071322] text-white border-2 border-[#007A8C] shadow-[0_20px_50px_-10px_rgba(0,122,140,0.5)]'
                        : isGovt
                        ? 'bg-gradient-to-b from-slate-900 via-[#191924] to-slate-950 text-white border border-amber-500/40 shadow-2xl'
                        : 'bg-gradient-to-b from-slate-900 via-[#111C2D] to-slate-950 text-white border border-slate-800 shadow-2xl'
                    }`}
                  >
                    {/* Back Header */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-md ${
                          isFeatured
                            ? 'bg-white/10 text-[#C0D725]'
                            : isGovt
                            ? 'bg-amber-950 text-amber-300'
                            : 'bg-teal-950 text-teal-300'
                        }`}>
                          {p.name} PLAN
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                          <RotateCw className="w-3 h-3" /> Flipped
                        </span>
                      </div>

                      {/* Main Big Price Display */}
                      <div className={`p-3 rounded-2xl border ${
                        isFeatured
                          ? 'bg-white/6 border-teal-500/30'
                          : isGovt
                          ? 'bg-amber-950/40 border-amber-700/50'
                          : 'bg-slate-800/60 border-slate-700/80'
                      }`}>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black font-mono tracking-tight text-white">
                            {currentPrice}
                          </span>
                          {currentPeriod && (
                            <span className="text-xs font-mono font-bold text-slate-300">
                              {currentPeriod}
                            </span>
                          )}
                        </div>

                        <div className="mt-1.5 pt-1.5 border-t border-slate-200/15 flex items-center justify-between text-[10px]">
                          <span className={isFeatured ? 'text-[#C0D725] font-bold' : isGovt ? 'text-amber-300 font-bold' : 'text-teal-300 font-bold'}>
                            {billingCycle === 'annual' ? p.savings : 'Monthly billing'}
                          </span>
                          <span className="font-mono text-slate-400 truncate max-w-[120px]">
                            {p.billedAnnualTotal}
                          </span>
                        </div>
                      </div>

                      {/* Back Feature Summary List */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider block text-slate-400">
                          SPECIFICATION SUMMARY:
                        </span>
                        <ul className="space-y-1 text-xs">
                          {p.backFeatures.map((bf, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                                isFeatured ? 'text-[#C0D725]' : isGovt ? 'text-amber-400' : 'text-teal-300'
                              }`} />
                              <span className="truncate text-[10.5px] text-slate-200 font-medium">
                                {bf}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Back Action Buttons */}
                    <div className="pt-2 border-t border-slate-200/15 space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDemo();
                        }}
                        className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                          isFeatured
                            ? 'bg-gradient-to-r from-[#C0D725] to-[#AEC41F] hover:from-[#C9E026] hover:to-[#B6CC22] text-slate-950 font-black shadow-[#C0D725]/30'
                            : isGovt
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-amber-500/20'
                            : 'bg-gradient-to-r from-[#007A8C] to-[#0B5E6B] hover:from-[#008DA2] hover:to-[#0C6D7C] text-white font-black shadow-[#007A8C]/25 border border-teal-400/30'
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
                          isFeatured ? 'text-teal-300 hover:text-white' : isGovt ? 'text-amber-300 hover:text-white' : 'text-slate-400 hover:text-[#007A8C]'
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

      </div>
    </section>
  );
}

export default PricingSection;

