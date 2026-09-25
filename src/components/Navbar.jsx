import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, ArrowRight, Lock } from 'lucide-react';

export function Navbar({ activeSection, onNavigate, onOpenSandbox }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'Product' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'for-laboratories', label: 'For Laboratories' },
    { id: 'resources', label: 'Resources' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#007A8C]/15 shadow-sm'
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Brand Logo - Styled matching TARAZU design */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#007A8C] flex items-center justify-center text-white shadow-md shadow-[#007A8C]/30 group-hover:bg-[#006372] transition-all duration-200">
              <Scale className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl tracking-tight text-slate-900 font-sans">
                TARAZU<span className="text-[#C0D725]">.</span>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase -mt-0.5">
                OIML R 76-1 MVP
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-bold transition-all duration-200 rounded-xl cursor-pointer ${isActive
                      ? 'bg-[#E6F4F6] text-[#007A8C]'
                      : 'text-slate-600 hover:text-[#007A8C] hover:bg-slate-100/70'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#007A8C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenSandbox}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#007A8C] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-[#007A8C]" />
              <span>Login</span>
            </button>

            <button
              onClick={onOpenSandbox}
              className="px-4.5 py-2.5 rounded-xl bg-[#007A8C] hover:bg-[#006372] text-white text-sm font-bold shadow-md shadow-[#007A8C]/30 hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSandbox}
              className="px-3 py-1.5 rounded-lg bg-[#007A8C] text-white text-xs font-bold mr-1"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#007A8C] hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-bold ${isActive
                      ? 'bg-[#E6F4F6] text-[#007A8C] border border-[#007A8C]/30'
                      : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-[#007A8C]" />
              <span>Login to App</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="w-full py-2.5 rounded-xl bg-[#007A8C] text-white text-sm font-bold shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
