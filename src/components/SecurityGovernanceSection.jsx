import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  History, 
  FileSpreadsheet, 
  QrCode, 
  Cpu, 
  Database, 
  FileDown, 
  Sparkles,
  Network
} from 'lucide-react';

export function SecurityGovernanceSection() {
  const roleBadges = [
    {
      role: "Technician / Tester",
      desc: "Digital test creation, guided observation entry, reference weight binding, and preliminary validation checks.",
      icon: UserCheck,
      badge: "DATA CAPTURE"
    },
    {
      role: "Reviewer / Metrologist",
      desc: "Traceability verification, calculation proof inspection, technical remarks, and stage approval sign-off.",
      icon: ShieldCheck,
      badge: "TECHNICAL SIGN-OFF"
    },
    {
      role: "Laboratory Admin",
      desc: "Laboratory workspace configuration, user access management, test bench provisioning, and reference weight certs.",
      icon: Database,
      badge: "LAB GOVERNANCE"
    },
    {
      role: "Auditor / Quality Head",
      desc: "Read-only access to immutable SHA-256 audit trails, historical report revisions, and ISO/IEC 17025 logs.",
      icon: History,
      badge: "AUDIT READINESS"
    }
  ];

  const integrations = [
    {
      title: "CSV & Excel Import / Export",
      desc: "Import instrument fleets and historical records seamlessly; export clean data tables for external analysis.",
      icon: FileSpreadsheet
    },
    {
      title: "Cryptographic QR Verification",
      desc: "Every generated report contains a verifiable QR code linking to the tamper-evident certificate seal.",
      icon: QrCode
    },
    {
      title: "Future Device Capture APIs",
      desc: "Designed to ingest live digital balance readouts (RS232/USB/Bluetooth) directly into observation forms.",
      icon: Cpu
    },
    {
      title: "eMaap-Ready Architecture",
      desc: "Engineered for future secure workflow integration with national Legal Metrology systems, subject to official API access and approval.",
      icon: Network
    }
  ];

  return (
    <section id="governance" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECURITY, ROLES &amp; INTEGRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Security &amp; <span className="text-[#007A8C]">Governance Controls</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Role-based access control, tenant isolation, immutable audit logs, and integration-ready pathways.
          </p>
        </div>

        {/* 4 Role Badges Grid */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 text-center sm:text-left">
            ROLE-BASED ACCESS CONTROL (RBAC)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roleBadges.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div key={idx} className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 hover:border-[#007A8C]/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E6F4F6] text-[#007A8C] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#007A8C] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {r.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{r.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Pillars & Integrations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Security & Traceability Features */}
          <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#007A8C] uppercase">
              <Lock className="w-4 h-4" />
              <span>Data Protection &amp; Traceability</span>
            </div>
            <h3 className="text-xl font-black text-slate-900">
              Enterprise Tenant Security
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 pt-2">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#007A8C] shrink-0 mt-0.5" />
                <span><strong>Multi-Tenant Data Isolation:</strong> Laboratory records, instruments, and reports operate in isolated, encrypted partitions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#007A8C] shrink-0 mt-0.5" />
                <span><strong>Immutable SHA-256 Audit Logs:</strong> Every test entry, edit, remark, and sign-off is logged with timestamp and user ID.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#007A8C] shrink-0 mt-0.5" />
                <span><strong>Controlled Downloads &amp; Storage:</strong> Secure storage with revision tracking, preventing unauthorized alterations of approved reports.</span>
              </li>
            </ul>
          </div>

          {/* Integration-Ready Section */}
          <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#007A8C] uppercase">
              <Network className="w-4 h-4" />
              <span>Integrations &amp; Interoperability</span>
            </div>
            <h3 className="text-xl font-black text-slate-900">
              Integration-Ready Architecture
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {integrations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                      <Icon className="w-4 h-4 text-[#007A8C]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SecurityGovernanceSection;
