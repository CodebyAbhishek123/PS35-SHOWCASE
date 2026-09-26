import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Edit3, 
  Calculator, 
  UserCheck, 
  FileText,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Scale,
  ShieldCheck,
  QrCode,
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export function ProductShowcaseSection({ onOpenSandbox, onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: '1. Operations Dashboard', icon: LayoutDashboard },
    { id: 'observation', label: '2. Guided Observations', icon: Edit3 },
    { id: 'calculation', label: '3. Calculation & MPE Trace', icon: Calculator },
    { id: 'reviewer', label: '4. Reviewer Approval', icon: UserCheck },
    { id: 'report', label: '5. Audit-Sealed Report', icon: FileText },
  ];

  return (
    <section id="showcase" className="py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore the <span className="text-[#007A8C]">TARAZU</span> Workspace
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-fidelity interactive previews of the 5 core modules driving digital legal metrology evaluations.
          </p>
        </div>

        {/* 5 Screen Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#007A8C] text-white shadow-md shadow-[#007A8C]/20 scale-102'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Window */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Window Chrome */}
          <div className="bg-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                app.tarazu.com/workspace/{activeTab}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="px-3.5 py-1.5 rounded-lg bg-[#C0D725] hover:bg-[#B3C91F] text-slate-900 text-xs font-black transition cursor-pointer"
              >
                Request Live Walkthrough
              </button>
              <button
                onClick={onOpenSandbox}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Launch in Sandbox</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Module Content Preview */}
          <div className="p-6 sm:p-8">
            
            {/* 1. DASHBOARD TAB */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#007A8C] uppercase">MODULE 01 • REAL-TIME TELEMETRY</span>
                    <h3 className="text-2xl font-black text-slate-900">Laboratory Operations Dashboard</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Outcome: Complete operational visibility over active test runs, turnaround bottlenecks, and pass rates.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    ● ALL SYSTEMS OPERATIONAL
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-400 font-mono font-bold">ACTIVE TEST RUNS</span>
                    <div className="text-2xl font-black text-slate-900 font-mono mt-1">36 Sessions</div>
                    <div className="text-xs text-teal-600 font-bold mt-1">Across 4 Lab Benches</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-400 font-mono font-bold">OIML R-76 PASS RATE</span>
                    <div className="text-2xl font-black text-emerald-600 font-mono mt-1">96.4%</div>
                    <div className="text-xs text-slate-500 mt-1">1,181 Approved</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-400 font-mono font-bold">PENDING REVIEW SIGN-OFF</span>
                    <div className="text-2xl font-black text-amber-600 font-mono mt-1">21 Reports</div>
                    <div className="text-xs text-slate-500 mt-1">Avg 12m Review Time</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-400 font-mono font-bold">TAMPER-PROOF AUDIT SEAL</span>
                    <div className="text-2xl font-black text-[#007A8C] font-mono mt-1">SHA-256</div>
                    <div className="text-xs text-teal-700 font-bold mt-1">100% Immutable Vault</div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. OBSERVATION FORM TAB */}
            {activeTab === 'observation' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#007A8C] uppercase">MODULE 02 • GUIDED INGESTION</span>
                    <h3 className="text-2xl font-black text-slate-900">Guided Digital Observation Form</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Outcome: Eliminates manual transcription mistakes with automated turning-point ΔL balance checks.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#E6F4F6] text-[#007A8C] text-xs font-mono font-bold">
                    MODEL W500 • CLASS III
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <label className="text-[11px] font-mono font-bold text-slate-500">APPLIED LOAD (L)</label>
                      <div className="text-lg font-mono font-black text-slate-900 mt-1">100.00 kg</div>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <label className="text-[11px] font-mono font-bold text-slate-500">INDICATED VALUE (I)</label>
                      <div className="text-lg font-mono font-black text-[#007A8C] mt-1">100.20 kg</div>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <label className="text-[11px] font-mono font-bold text-slate-500">ADDITIONAL LOAD (ΔL)</label>
                      <div className="text-lg font-mono font-black text-amber-600 mt-1">0.04 kg</div>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-800 font-medium">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Input validation passed: Indication matches Class III verification scale interval (e=100g).</span>
                    </span>
                    <span className="font-mono font-bold">LOCKED &amp; READY</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. CALCULATION TRACE TAB */}
            {activeTab === 'calculation' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#007A8C] uppercase">MODULE 03 • DETERMINISTIC METROLOGY ENGINE</span>
                    <h3 className="text-2xl font-black text-slate-900">Calculation Trace &amp; MPE Step Limit Check</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Outcome: Transparent mathematical breakdown proves compliance against stepped MPE thresholds.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    OIML R-76-1 CLAUSE A.4.4.1
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-white font-mono text-xs space-y-3">
                    <div className="text-[#C0D725] font-bold">// Turning Point Mathematical Proof</div>
                    <div className="text-slate-300">P = I + 0.5e - ΔL</div>
                    <div className="text-slate-300">P = 100.20 + (0.5 * 0.10) - 0.04 = 100.21 kg</div>
                    <div className="text-slate-300">Error E = P - L = 100.21 - 100.00 = +0.21 kg</div>
                    <div className="text-slate-300">Zero Error Correction (Ec) = E - E0 = +0.21 kg</div>
                  </div>

                  <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-3">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">MPE STEP BOUNDARY EVALUATION</span>
                    <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200 text-xs">
                      <span className="font-bold">0 to 500e Step (m &lt;= 50kg):</span>
                      <span className="font-mono text-slate-600">MPE: ±0.5e (±0.05kg)</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-bold">
                      <span>501e to 2000e Step (50kg &lt; m &lt;= 200kg):</span>
                      <span className="font-mono">Ec = +0.21kg &lt;= ±0.50kg -&gt; PASS ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. REVIEWER TAB */}
            {activeTab === 'reviewer' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#007A8C] uppercase">MODULE 04 • HUMAN SIGN-OFF PIPELINE</span>
                    <h3 className="text-2xl font-black text-slate-900">Authorised Reviewer Verification</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Outcome: Structured human governance retaining qualified technical authority before report release.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F6FAAE] text-slate-900 border border-[#C0D725] text-xs font-bold">
                    HUMAN APPROVAL REQUIRED
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="font-bold text-slate-900">1. Environmental Stability Check</div>
                      <p className="text-xs text-slate-500">Ambient Temp: 20.4°C (Permissible: 20-22°C) • RH: 52% (Permissible: 45-60%)</p>
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">VERIFIED STABLE</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="font-bold text-slate-900">2. Reference Standard Mass Traceability</div>
                      <p className="text-xs text-slate-500">Weight Set: Class F1 #CAL-2026-991 • Valid to Dec 2026</p>
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">CALIBRATION ACTIVE</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#007A8C]/30 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-slate-900">Authorised Signatory: Dr. Rajesh Sharma</div>
                      <div className="text-xs text-slate-500">Remarks: Type evaluation meets all OIML R-76-1 criteria. Approved for issue.</div>
                    </div>
                    <span className="px-4 py-2 rounded-xl bg-[#007A8C] text-white text-xs font-bold">
                      Signed &amp; Approved ✓
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 5. REPORT TAB */}
            {activeTab === 'report' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#007A8C] uppercase">MODULE 05 • STANDARDIZED DELIVERABLE</span>
                    <h3 className="text-2xl font-black text-slate-900">Audit-Sealed OIML R-76 Report Output</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Outcome: One-click generation of publication-ready PDF, editable DOCX, and JSON LIMS payloads.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                    SHA-256 SEALED
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#007A8C] text-white rounded-2xl flex items-center justify-center font-bold shadow-md">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">TARAZU-TR-2026-8942-W500.pdf</h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">SHA-256: 8f3c2b9a7d1e4f605219ba4328c0e192...</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold">PDF Format</span>
                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold">Editable DOCX</span>
                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold">JSON Payload</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <QrCode className="w-12 h-12 text-[#007A8C] p-1.5 bg-white rounded-xl border border-slate-200" />
                    <button
                      onClick={onOpenSandbox}
                      className="px-5 py-3 rounded-xl bg-[#007A8C] hover:bg-[#006372] text-white text-xs font-bold shadow-md transition cursor-pointer"
                    >
                      View in Live Sandbox →
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductShowcaseSection;
