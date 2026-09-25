import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function PricingSection({ onOpenSandbox }) {
  const [billingCycle, setBillingCycle] = useState('annual');

  const plans = [
    {
      name: "Starter Lab",
      desc: "Ideal for single testing benches & small accredited laboratories.",
      priceMonthly: "$299",
      priceAnnual: "$249",
      period: "/month billed annually",
      features: [
        "Up to 2 Laboratory Technicians",
        "1 Active Laboratory Workspace",
        "100 Evaluated Reports / Month",
        "Automated OIML R-76 Turning Point Engine",
        "Standard PDF Report Export",
        "SHA-256 Cryptographic Report Hash",
        "Standard Email Support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional Lab",
      desc: "Designed for growing commercial & state metrology testing centers.",
      priceMonthly: "$699",
      priceAnnual: "$599",
      period: "/month billed annually",
      features: [
        "Up to 10 Laboratory Technicians & Reviewers",
        "3 Regional Laboratory Workspaces",
        "Unlimited Evaluated Test Reports",
        "Automated PDF, DOCX & JSON Export",
        "Reference Weight Set & Calibration Tracking",
        "Multi-Tier Review & Sign-Off Pipeline",
        "Custom Branding & Watermarks",
        "Priority 24/7 SLA Support"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise Network",
      desc: "For multi-national manufacturers & central government metrology authorities.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "Tailored to lab volume & branches",
      features: [
        "Unlimited Users & Multi-Lab Workspaces",
        "Dedicated Private Tenant Cloud / On-Prem",
        "Custom Rule Engine & Local MPE Adaptations",
        "LIMS & ERP API Integration Hooks",
        "Custom Cryptographic QR Audit Verification",
        "Dedicated Metrology Account Director",
        "ISO/IEC 17025 Audit Assistance",
        "Custom SLA & 99.99% Uptime Guarantee"
      ],
      popular: false,
      buttonText: "Contact Enterprise Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Simple Plans for <span className="text-[#007A8C]">Every Laboratory</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose the right tier for your laboratory volume. No hidden fees or hardware lock-in.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-[#007A8C] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-[#007A8C] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C0D725] text-slate-900 font-black">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-3xl border relative flex flex-col justify-between transition-all duration-300 ${
                p.popular 
                  ? 'border-2 border-[#C0D725] shadow-xl shadow-[#C0D725]/20 scale-105 z-10' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C0D725] text-slate-900 text-[11px] font-black uppercase tracking-wider shadow-md border border-[#B3C91F]">
                  MOST POPULAR FOR LABS
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{p.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 min-h-[32px]">{p.desc}</p>
                </div>

                <div className="border-y border-slate-100 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black font-mono text-slate-900">
                      {billingCycle === 'annual' ? p.priceAnnual : p.priceMonthly}
                    </span>
                    {p.priceAnnual !== 'Custom' && (
                      <span className="text-xs font-mono text-slate-500">{p.period}</span>
                    )}
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.popular ? 'text-[#007A8C] font-bold' : 'text-[#007A8C]'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={onOpenSandbox}
                  className={`w-full py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                    p.popular
                      ? 'bg-[#C0D725] hover:bg-[#B3C91F] text-slate-900 font-black shadow-md shadow-[#C0D725]/30'
                      : 'bg-[#007A8C] hover:bg-[#006372] text-white shadow-sm'
                  }`}
                >
                  <span>{p.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PricingSection;
