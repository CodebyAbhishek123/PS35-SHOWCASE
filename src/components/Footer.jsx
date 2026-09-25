import React from 'react';
import { Scale, ShieldCheck } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => onNavigate('home')}>
              <div className="w-9 h-9 rounded-xl bg-[#007A8C] flex items-center justify-center text-white shadow-md">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tight text-white">
                TARAZU<span className="text-[#C0D725]">.</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Automated OIML R-76 Type Evaluation & Metrology SaaS Platform. Transforming manual weighing instrument testing into a structured, validated, and cryptographically secure digital workflow.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C0D725] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#C0D725]" />
              <span>SHA-256 Cryptographic Audit Integrity</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('product')} className="hover:text-white transition-colors">Overview</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-white transition-colors">Core Features</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">Pricing Plans</button></li>
              <li><button onClick={() => onNavigate('governance')} className="hover:text-white transition-colors">Security & Governance</button></li>
            </ul>
          </div>

          {/* Laboratory Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">For Laboratories</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('for-laboratories')} className="hover:text-white transition-colors">Multi-Lab SaaS</button></li>
              <li><button onClick={() => onNavigate('reports')} className="hover:text-white transition-colors">Sample Evaluation Report</button></li>
              <li><button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">OIML R-76 Testing Guide</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">Frequently Asked Questions</button></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">Legal & Security</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400 cursor-pointer hover:text-white">Privacy Policy</span></li>
              <li><span className="text-slate-400 cursor-pointer hover:text-white">Terms of Service</span></li>
              <li><span className="text-slate-400 cursor-pointer hover:text-white">Security Architecture</span></li>
              <li><span className="text-slate-400 cursor-pointer hover:text-white">ISO/IEC 17025 Compliance</span></li>
              <li><span className="text-slate-400 cursor-pointer hover:text-white">Contact Metrology Support</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} TARAZU Metrology SaaS. All rights reserved. Department of Consumer Affairs Legal Metrology Compliance.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Security</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
