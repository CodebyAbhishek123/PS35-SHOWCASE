import React from 'react';
import { Scale, Heart, Shield, Award } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 rounded-xl bg-[#5842F6] flex items-center justify-center text-white font-bold">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-black text-xl tracking-tight text-white uppercase font-sans">
                TARAZU<span className="text-[#5842F6]">.</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">
                OIML R 76-1 MVP
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              An intelligent metrology engine built for Smart India Hackathon (SIH) Problem Statement 26035. Automating OIML R-76 type evaluation calculations, turning-point resolution, and statutory report generation for the Department of Consumer Affairs.
            </p>

            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 pt-2">
              <span className="flex items-center gap-1 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Legal Metrology Act 2009 Compliant</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#5842F6] transition-colors cursor-pointer">Dashboard</button></li>
              <li><button onClick={() => onNavigate('problem')} className="hover:text-[#5842F6] transition-colors cursor-pointer">Problem Statement</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#5842F6] transition-colors cursor-pointer">About OIML R-76</button></li>
              <li><button onClick={() => onNavigate('solution')} className="hover:text-[#5842F6] transition-colors cursor-pointer">Proposed Solution</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-[#5842F6] transition-colors cursor-pointer">System Features</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-[#5842F6] transition-colors cursor-pointer">SIH Innovators Team</button></li>
            </ul>
          </div>

          {/* References */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Official References</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://www.oiml.org" target="_blank" rel="noreferrer" className="hover:text-[#5842F6] transition-colors">OIML Recommendation R 76-1</a></li>
              <li><a href="https://consumeraffairs.nic.in" target="_blank" rel="noreferrer" className="hover:text-[#5842F6] transition-colors">Dept. of Consumer Affairs (DoCA)</a></li>
              <li><a href="https://sih.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#5842F6] transition-colors">Smart India Hackathon Portal</a></li>
              <li><span className="text-slate-500">Problem ID: 26035</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 <strong className="text-white font-bold">TARAZU.</strong> Developed for Smart India Hackathon. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with precision for Legal Metrology Laboratories</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
