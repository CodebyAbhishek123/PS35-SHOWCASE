import React from 'react';
import { User, CheckSquare, Award, Shield, UserCog } from 'lucide-react';

export function RolesWorkflowSection() {
  const roles = [
    {
      role: "Metrology Tester",
      desc: "Creates test sessions, inputs raw load observations (L, I, ΔL), selects reference weights, and executes test modules.",
      icon: User,
      color: "border-[#007A8C]/30 text-[#007A8C] bg-[#E6F4F6]",
      stage: "Data Entry Stage"
    },
    {
      role: "Technical Reviewer",
      desc: "Inspects turning point calculations, environmental log stability, and formula corrections for accuracy.",
      icon: CheckSquare,
      color: "border-[#C0D725]/60 text-slate-900 bg-[#F6FAAE]",
      stage: "Quality Review Stage"
    },
    {
      role: "Authorized Approver",
      desc: "Applies digital authorization, triggers SHA-256 report locking, and approves final report release.",
      icon: Award,
      color: "border-[#007A8C]/30 text-[#007A8C] bg-[#E6F4F6]",
      stage: "Final Authorization Stage"
    },
    {
      role: "Lab Administrator",
      desc: "Manages lab user accounts, configures reference mass sets, equipment calibration certs, and lab defaults.",
      icon: UserCog,
      color: "border-[#C0D725]/60 text-slate-900 bg-[#F6FAAE]",
      stage: "Lab Governance"
    },
    {
      role: "Super Administrator",
      desc: "Controls organization billing, multi-lab workspace provisioning, global audit logs, and security policies.",
      icon: Shield,
      color: "border-[#007A8C]/30 text-[#007A8C] bg-[#E6F4F6]",
      stage: "Enterprise Security"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>ROLE-BASED GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Role-Based <span className="text-[#007A8C]">Access & Workflow</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Strict separation of duties ensures full compliance with ISO/IEC 17025 laboratory quality standards.
          </p>
        </div>

        {/* Roles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#007A8C]/40 transition-all">
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${r.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">{r.stage}</span>
                  <h3 className="text-base font-bold text-slate-900">{r.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default RolesWorkflowSection;
