import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Lock, Calendar, Sparkles } from 'lucide-react';

export function Navbar({ activeSection, onNavigate, onOpenSandbox, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'Problem & Solution' },
    { id: 'features', label: 'Capabilities' },
    { id: 'how-it-works', label: 'Workflow' },
    { id: 'showcase', label: 'Screens' },
    { id: 'for-laboratories', label: 'Who It Is For' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 transition-all duration-300 pointer-events-none animate-nav-slide-down">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        
        {/* Floating Glass Island Capsule with Ambient Glow */}
        <div className={`backdrop-blur-2xl transition-all duration-500 rounded-2xl md:rounded-full border px-3.5 sm:px-5 py-2 flex items-center justify-between ${
          scrolled
            ? 'bg-white/95 border-slate-300/90 shadow-[0_20px_45px_-10px_rgba(0,122,140,0.15)] ring-1 ring-slate-900/5 scale-[0.99]'
            : 'bg-white/85 border-slate-200/90 shadow-[0_12px_35px_-5px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_-5px_rgba(0,122,140,0.12)]'
        }`}>

          {/* Left Brand Identity with Hover Animation */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2.5 cursor-pointer group select-none py-0.5"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="/tarazu-logo.png" 
                alt="TARAZU Logo" 
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
              />
            </div>

            <div className="hidden sm:flex items-center gap-2 border-l border-slate-200/80 pl-2.5">
              <span className="text-[10px] font-mono font-black tracking-wider text-[#007A8C] uppercase bg-[#E6F4F6] px-2 py-0.5 rounded-full border border-[#007A8C]/20 flex items-center gap-1.5 transition-colors group-hover:bg-[#007A8C] group-hover:text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007A8C] group-hover:bg-[#C0D725] animate-pulse" />
                <span>OIML R-76</span>
              </span>
            </div>
          </div>

          {/* Center Interactive Pill Navigation Links */}
          <nav 
            className="hidden xl:flex items-center space-x-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/70 shadow-inner relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  className={`relative px-3 py-1.5 text-xs font-bold transition-all duration-300 rounded-full cursor-pointer z-10 ${
                    isActive
                      ? 'text-[#007A8C] font-black'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {/* Active Highlight Capsule */}
                  {isActive && (
                    <span className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/90 -z-10 animate-fade-in" />
                  )}

                  {/* Hover Floating Pill Highlight */}
                  {!isActive && isHovered && (
                    <span className="absolute inset-0 bg-white/60 rounded-full -z-10 transition-all duration-200" />
                  )}

                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs with Animated Shimmer Light Sheen */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={onOpenSandbox}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-[#007A8C] hover:bg-slate-100 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 border border-transparent hover:border-slate-200 active:scale-95"
            >
              <Lock className="w-3.5 h-3.5 text-[#007A8C]" />
              <span>Sandbox</span>
            </button>

            {/* Book a Demo Button with Continuous Shimmer Wave */}
            <button
              onClick={onOpenDemo}
              className="relative overflow-hidden px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#007A8C] via-[#008d9b] to-[#0F9D8A] hover:from-[#006372] hover:to-[#0c7f6f] text-white text-xs font-black shadow-md shadow-[#007A8C]/25 hover:shadow-lg hover:shadow-[#007A8C]/40 transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95 border-b border-[#C0D725] group"
            >
              {/* Shimmer Light Reflection Sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-btn-shimmer" />

              <Calendar className="w-3.5 h-3.5 text-[#C0D725] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">Book a Demo</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 rounded-full bg-[#007A8C] text-white text-xs font-bold shadow-xs active:scale-95 transition-transform"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-slate-700 hover:text-[#007A8C] hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown Sheet with Spring Fade-in */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-4 space-y-3 shadow-2xl animate-fade-in pointer-events-auto">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/30 shadow-2xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSandbox();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
              >
                <Lock className="w-3.5 h-3.5 text-[#007A8C]" />
                <span>Live Sandbox</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 rounded-xl bg-[#007A8C] text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C0D725]" />
                <span>Book a Demo</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;
