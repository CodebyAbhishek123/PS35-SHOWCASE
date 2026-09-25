import React from 'react';
import { Cloud, Lock } from 'lucide-react';

export function MultiLabSaaSSection() {
  return (
    <section className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Multi-Lab <span className="text-[#007A8C]">SaaS Architecture</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Scale seamlessly from single testing benches to multi-regional laboratory networks with isolated tenant security.
          </p>
        </div>

        {/* Visual Architecture Hierarchy Diagram */}
        <div className="bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left border-b border-slate-200 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#007A8C] text-white flex items-center justify-center font-bold shadow-md shadow-[#007A8C]/30">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#007A8C] uppercase">TIER 1 ARCHITECTURE</span>
                <h3 className="text-xl font-black text-slate-900">TARAZU Cloud Platform</h3>
              </div>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#F6FAAE] border border-[#C0D725] text-xs font-bold text-slate-900">
              <span>99.99% UPTIME • TENANT ISOLATED</span>
            </div>
          </div>

          {/* Flow Hierarchy Cards with Alternating Deep Teal and Lime Accent Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            <div className="bg-white p-5 rounded-2xl border border-[#007A8C]/30 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-[#007A8C]">STEP 1</div>
              <h4 className="text-base font-bold text-slate-900">Organization</h4>
              <p className="text-xs text-slate-600">Central enterprise billing, policies, and global admin governance.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#C0D725]/60 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-[#007A8C]">STEP 2</div>
              <h4 className="text-base font-bold text-slate-900">Regional Labs</h4>
              <p className="text-xs text-slate-600">North, South, East & West laboratory branches with dedicated workspace isolation.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#007A8C]/30 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-[#007A8C]">STEP 3</div>
              <h4 className="text-base font-bold text-slate-900">Users & Roles</h4>
              <p className="text-xs text-slate-600">Testers, Technical Reviewers, Approvers, and Lab Admins.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#C0D725]/60 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-[#007A8C]">STEP 4</div>
              <h4 className="text-base font-bold text-slate-900">Instruments & Reports</h4>
              <p className="text-xs text-slate-600">Centralized database of test runs, calibration records, and SHA-256 seals.</p>
            </div>

          </div>

          {/* Data Separation Note */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#007A8C] shrink-0" />
            <span>
              <strong>Secure Tenant Isolation:</strong> Every organization and laboratory operates inside encrypted logical schemas. Data is never shared across tenants.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MultiLabSaaSSection;
