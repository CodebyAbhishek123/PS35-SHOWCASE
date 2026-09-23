import React from 'react';
import { Scale, Landmark, ExternalLink, ShieldCheck, Heart, Award } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#F0EDE4] border-t border-slate-200 text-slate-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mandate */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-red-600" viewBox="0 0 40 40" fill="none">
                <path d="M12 8L4 20L12 32H18L10 20L18 8H12Z" fill="#FF1E27" />
                <path d="M28 8L36 20L28 32H22L30 20L22 8H28Z" fill="#FF1E27" />
              </svg>
              <span className="font-extrabold text-base text-[#004741] tracking-wider uppercase">
                METRON<span className="text-red-600">AI</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-600/10 text-red-600 border border-red-600/20">
                SIH 26035
              </span>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-md">
              Automated Type Evaluation and Standardized Test Report Generation Platform for Non-Automatic Weighing Instruments (NAWI) compliant with OIML Recommendation R 76 and the Legal Metrology Act, 2009.
            </p>

            <div className="text-[11px] text-slate-500 pt-1">
              Developed for the <strong className="text-slate-700">Ministry of Consumer Affairs, Food & Public Distribution</strong> (Department of Consumer Affairs - DoCA).
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2">
            <h4 className="text-[#004741] font-bold text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 text-slate-600">
              <li><button onClick={() => onNavigate('home')} className="hover:text-red-600 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('problem')} className="hover:text-red-600 transition-colors">The Problem</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-red-600 transition-colors">Statutory Mandate</button></li>
              <li><button onClick={() => onNavigate('solution')} className="hover:text-red-600 transition-colors">Automated Solution</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-red-600 transition-colors">Enterprise Features</button></li>
              <li><button onClick={() => onNavigate('content')} className="hover:text-red-600 transition-colors">Video Demonstrations</button></li>
            </ul>
          </div>

          {/* Standards & Links */}
          <div className="space-y-2">
            <h4 className="text-[#004741] font-bold text-xs uppercase tracking-wider">Official References</h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a 
                  href="https://consumeraffairs.gov.in/pages/legal-metrology-act" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-700 flex items-center gap-1"
                >
                  <span>DoCA Legal Metrology Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.oiml.org/en/publications/recommendations/en/files/pdf_r/r076-1-e06.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-700 flex items-center gap-1"
                >
                  <span>OIML R 76-1:2006 Standard (PDF)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sih.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-700 flex items-center gap-1"
                >
                  <span>Smart India Hackathon 2026</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © 2026 MetronAI • Smart India Hackathon (Problem Statement ID: 26035). All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium text-slate-600">Cryptographically Verified Metrological Engine</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
