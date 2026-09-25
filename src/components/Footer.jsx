import React from 'react';
import { ShieldCheck, Sparkles, Lock, ArrowUpRight } from 'lucide-react';

export function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200/90 text-slate-600 py-16 text-sm font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer select-none group" 
              onClick={() => onNavigate('home')}
            >
              <img 
                src="/tarazu-logo.png" 
                alt="TARAZU Logo" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col border-l border-slate-200 pl-2.5">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#007A8C] uppercase leading-none">
                  NAWI TestPro
                </span>
                <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase mt-0.5 leading-none">
                  OIML R-76 SaaS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              B2B SaaS platform for Legal Metrology, Calibration &amp; Type Evaluation testing laboratories. Digitizing raw observations into standardized, audit-ready OIML R-76-1 reports.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#007A8C] font-mono bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#007A8C]" />
              <span className="font-bold">SHA-256 Cryptographic Audit Integrity</span>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-900 tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('product')} className="hover:text-[#007A8C] transition-colors cursor-pointer">Problem &amp; Solution</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-[#007A8C] transition-colors cursor-pointer">8 Core Capabilities</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-[#007A8C] transition-colors cursor-pointer">5-Step Workflow</button></li>
              <li><button onClick={() => onNavigate('showcase')} className="hover:text-[#007A8C] transition-colors cursor-pointer">Product Screens</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-[#007A8C] transition-colors cursor-pointer">Pricing &amp; Pilots</button></li>
            </ul>
          </div>

          {/* Column 3: Laboratory Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-900 tracking-wider">For Laboratories</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('for-laboratories')} className="hover:text-[#007A8C] transition-colors cursor-pointer">Who It Is For</button></li>
              <li><button onClick={() => onNavigate('governance')} className="hover:text-[#007A8C] transition-colors cursor-pointer">Security &amp; RBAC</button></li>
              <li><button onClick={() => onNavigate('resources')} className="hover:text-[#007A8C] transition-colors cursor-pointer">Technical Guides</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-[#007A8C] transition-colors cursor-pointer">FAQ</button></li>
            </ul>
          </div>

          {/* Column 4: Compliance & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-900 tracking-wider">Compliance &amp; Trust</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-600 cursor-pointer hover:text-[#007A8C] transition-colors">Human-Control Policy</span></li>
              <li><span className="text-slate-600 cursor-pointer hover:text-[#007A8C] transition-colors">ISO/IEC 17025 Traceability</span></li>
              <li><span className="text-slate-600 cursor-pointer hover:text-[#007A8C] transition-colors">Tenant Data Isolation</span></li>
              <li><span className="text-slate-600 cursor-pointer hover:text-[#007A8C] transition-colors">Privacy Policy</span></li>
              <li><span className="text-slate-600 cursor-pointer hover:text-[#007A8C] transition-colors">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Disclaimer Card */}
        <div className="my-8 p-4 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-500 leading-relaxed shadow-2xs flex items-start gap-3">
          <Lock className="w-4 h-4 text-[#007A8C] shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-700">Regulatory &amp; Integration Notice:</strong> NAWI TestPro is designed to support OIML R-76 reporting workflows. Physical testing and final report approval remain under the authority of qualified laboratory personnel. eMaap-Ready positioning indicates architectural readiness for future secure workflow integration, subject to official API access and regulatory approval.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4 border-t border-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All systems operational • © {new Date().getFullYear()} TARAZU / NAWI TestPro.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Security</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Privacy</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Terms</span>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className="hover:text-[#007A8C] cursor-pointer transition-colors font-bold flex items-center gap-0.5"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
