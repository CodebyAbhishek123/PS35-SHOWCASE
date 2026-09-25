import React from 'react';
import { Lock, KeyRound, History, GitBranch, Database, FileLock, Clock, UserCheck, ShieldCheck } from 'lucide-react';

export function SecurityGovernanceSection() {
  const timelineEvents = [
    { title: "Instrument Created", desc: "Model W500 Class III metadata registered" },
    { title: "Test Session Started", desc: "Session #TS-8942 ambient logs active" },
    { title: "Observation Entered", desc: "Ref 100.0 kg vs Ind 100.2 kg logged" },
    { title: "Calculation Completed", desc: "Error +0.2 kg (PASS) evaluated" },
    { title: "Submitted for Review", desc: "Session locked for peer audit" },
    { title: "Reviewed", desc: "Dr. Aris Thorne verified math proof" },
    { title: "Finalized", desc: "Cryptographic SHA-256 seal applied" },
  ];

  const securityItems = [
    {
      title: "Role-Based Access Control (RBAC)",
      desc: "Granular permissions for Testers, Reviewers, Approvers, Lab Admins, and Super Admins.",
      icon: KeyRound
    },
    {
      title: "Immutable Audit Logs",
      desc: "Cryptographic SHA-256 event recording capturing every user action, edit, and state change.",
      icon: History
    },
    {
      title: "Tenant-Level Data Isolation",
      desc: "Logical workspace boundaries ensuring organization and laboratory data is never mixed.",
      icon: Database
    },
    {
      title: "Cryptographic Report Locking",
      desc: "Finalized evaluation reports are sealed with digital hashes preventing post-sign-off edits.",
      icon: FileLock
    },
    {
      title: "Full Revision History",
      desc: "Complete version tracking of draft reports, observations, and technical reviewer comments.",
      icon: Lock
    },
    {
      title: "Controlled Rule Versions",
      desc: "Metrological formulas and evaluation algorithms locked under strict semantic version control.",
      icon: GitBranch
    }
  ];

  return (
    <section id="governance" className="py-24 bg-white text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4F6] border border-[#007A8C]/20 text-xs font-bold text-[#007A8C]">
            <span>ENTERPRISE SECURITY &amp; TRACEABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Security &amp; <span className="text-[#007A8C]">Governance</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Bank-grade data security and immutable audit trails designed for regulated laboratory environments.
          </p>
        </div>

        {/* Compact Audit Timeline Visual (Requirement 7) */}
        <div className="mb-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-[#007A8C] shadow-xl">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#007A8C]" />
              <h3 className="text-base font-bold text-white font-mono">TRACEABILITY AUDIT TIMELINE (W500)</h3>
            </div>
            <span className="text-xs font-mono text-[#C0D725] font-bold">SESSION #TS-8942</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Timeline Flow */}
            <div className="lg:col-span-8 overflow-x-auto pb-2">
              <div className="flex items-start space-x-4 min-w-[700px]">
                {timelineEvents.map((evt, idx) => (
                  <div key={idx} className="flex-1 bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs relative group">
                    <div className="text-[10px] text-[#007A8C] font-bold">STEP 0{idx + 1}</div>
                    <div className="font-bold text-white mt-0.5">{evt.title}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{evt.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metadata Box */}
            <div className="lg:col-span-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-2">
              <div className="text-[10px] text-[#C0D725] font-bold uppercase tracking-wider mb-2">AUDIT METADATA</div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Rule Version:</span>
                <span className="text-white font-bold">OIML R-76 v2.4</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Revision:</span>
                <span className="text-white font-bold">Rev 1.0 (Final)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Reviewer:</span>
                <span className="text-white font-bold">Dr. Aris Thorne</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Approver:</span>
                <span className="text-emerald-400 font-bold">Lab Director ✓</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityItems.map((sec, idx) => {
            const Icon = sec.icon;
            const isLime = idx % 2 === 1;
            return (
              <div key={idx} className={`p-6 rounded-2xl border space-y-3 transition-all shadow-2xs ${
                isLime ? 'bg-white border-[#C0D725]/60 hover:border-[#C0D725]' : 'bg-[#F8FAFC] border-slate-200 hover:border-[#007A8C]/40'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isLime ? 'bg-[#F6FAAE] text-slate-900 border border-[#C0D725]' : 'bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/20'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{sec.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sec.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SecurityGovernanceSection;
