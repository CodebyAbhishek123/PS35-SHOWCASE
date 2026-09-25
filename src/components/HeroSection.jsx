import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  Lock, 
  FileText, 
  TrendingUp,
  Activity,
  Award,
  ExternalLink,
  Layers
} from 'lucide-react';

export function HeroSection({ onOpenSandbox, onOpenDemo }) {
  // 3D Tilt & Glass Parallax Physics State
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D rotation angles (up to ±8 degrees)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;
    
    // Specular light sheen position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      glareX,
      glareY,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false
    });
  };

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F3F7FB] via-white to-white text-slate-900 border-b border-slate-200">
      
      {/* Background Soft SaaS Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-10 left-1/4 w-[550px] h-[380px] bg-[#007A8C]/12 blur-[130px] rounded-full" />
        <div className="absolute top-20 right-10 w-[500px] h-[380px] bg-[#C0D725]/22 blur-[120px] rounded-full" />
        <div className="absolute top-60 right-1/3 w-[450px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Prop, Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Turn NAWI test readings into <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#0F2747] via-[#007A8C] to-[#0F9D8A] bg-clip-text text-transparent">
                audit-ready reports.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              NAWI TestPro helps laboratories capture observations, apply controlled compliance calculations, manage approvals, and generate standardized reports from one secure workspace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-7 py-3.5 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-base font-bold shadow-xl shadow-[#007A8C]/25 hover:shadow-2xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:scale-95 border-b-2 border-[#C0D725]"
              >
                <Calendar className="w-5 h-5 text-[#C0D725]" />
                <span>Book a Demo</span>
              </button>

              <button
                onClick={onOpenSandbox}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-base font-bold shadow-md border border-slate-200 hover:border-slate-300 transition-all cursor-pointer active:scale-95 flex items-center gap-2 group"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 text-[#007A8C] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust / Proof Indicators */}
            <div className="pt-3 space-y-2 border-t border-slate-200/80 text-xs text-slate-600 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F9D8A] shrink-0" />
                <span>Designed for technicians, reviewers &amp; laboratory managers</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F9D8A] shrink-0" />
                <span>Deterministic turning point ($P = I + 0.5e - \Delta L$) calculations</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F9D8A] shrink-0" />
                <span>Human technical sign-off and approval retained</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Tilt Glassmorphic Dashboard Window */}
          <div 
            className="lg:col-span-6 relative [perspective:1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* Dynamic Multi-Color Ambient Glow that reacts to tilt */}
            <div 
              className={`absolute -inset-3 bg-gradient-to-tr from-[#007A8C]/35 via-[#C0D725]/35 to-blue-500/30 rounded-3xl blur-2xl transition-opacity duration-500 pointer-events-none ${
                tilt.isHovered ? 'opacity-100 scale-105' : 'opacity-70'
              }`} 
            />

            {/* Main Interactive 3D Glass Container */}
            <div 
              ref={cardRef}
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${tilt.isHovered ? 'scale3d(1.025, 1.025, 1.025)' : 'scale3d(1, 1, 1)'}`,
                transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d'
              }}
              className="relative rounded-3xl backdrop-blur-2xl bg-white/45 border-2 border-white/85 p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,122,140,0.25)] ring-1 ring-white/60 cursor-pointer overflow-hidden group select-none"
              onClick={onOpenSandbox}
            >
              
              {/* Dynamic Glass Specular Glare Layer */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30 rounded-3xl"
                style={{
                  background: tilt.isHovered 
                    ? `radial-gradient(circle 380px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 40%, transparent 80%)`
                    : 'none',
                  opacity: tilt.isHovered ? 0.85 : 0
                }}
              />

              {/* Top Glass Chrome Browser Bar */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="flex items-center justify-between px-3.5 py-2 bg-white/75 backdrop-blur-md rounded-2xl border border-white/80 mb-2.5 text-xs font-mono shadow-xs relative z-20"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-xs" />
                </div>
                
                <div className="flex items-center gap-1.5 text-slate-800 font-bold bg-white/90 px-3 py-1 rounded-xl border border-slate-200/60 shadow-inner">
                  <Lock className="w-3 h-3 text-[#007A8C]" />
                  <span className="text-[11px] tracking-tight">app.nawitestpro.com/dashboard</span>
                </div>
                
                <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE WORKSPACE</span>
                </div>
              </div>

              {/* The Actual Real Dashboard Screenshot */}
              <div 
                style={{ transform: 'translateZ(10px)' }}
                className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 relative z-10"
              >
                <img 
                  src="/nawi-dashboard-hero.png" 
                  alt="NAWI TestPro Operational Laboratory Dashboard" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Subtle Hover Action Pill Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                  <span className="px-4.5 py-2.5 rounded-2xl bg-white/95 text-slate-900 text-xs font-black shadow-2xl flex items-center gap-2 border border-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Sparkles className="w-4 h-4 text-[#007A8C]" />
                    <span>Click to Launch Live Interactive Sandbox</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#007A8C]" />
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Outcome Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold">Supported Classes</span>
            <div className="text-2xl font-black text-slate-900 font-mono mt-1">Class I - IV</div>
            <div className="text-xs text-slate-500 mt-0.5">OIML R-76-1 Compliant</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold">Report Outputs</span>
            <div className="text-2xl font-black text-[#007A8C] font-mono mt-1">PDF &amp; DOCX</div>
            <div className="text-xs text-slate-500 mt-0.5">Plus JSON LIMS Sync</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold">Audit Integrity</span>
            <div className="text-2xl font-black text-[#007A8C] font-mono mt-1">SHA-256</div>
            <div className="text-xs text-slate-500 mt-0.5">Tamper-Evident QR Seals</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold">Integration</span>
            <div className="text-2xl font-black text-slate-900 font-mono mt-1">eMaap-Ready</div>
            <div className="text-xs text-slate-500 mt-0.5">API-Ready Architecture</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
