import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

export function Navbar({ activeSection, onNavigate }) {
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
    { id: 'home', label: 'Dashboard' },
    { id: 'problem', label: 'Problem' },
    { id: 'about', label: 'About' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Features' },
    { id: 'content', label: 'Content' },
    { id: 'team', label: 'Team' },
    { id: 'documentation', label: 'Documentation' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-indigo-100/80 shadow-xs' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo - Styled matching TARAZU design */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            {/* Purple Circular Icon Container with Scale Icon */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#5842F6] flex items-center justify-center text-white shadow-md shadow-[#5842F6]/30 group-hover:bg-[#4338CA] transition-all duration-200">
              <Scale className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            {/* Brand Text Stack */}
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl tracking-tight text-slate-900 font-sans">
                TARAZU<span className="text-[#5842F6]">.</span>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase -mt-0.5">
                OIML R 76-1 MVP
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-bold transition-all duration-200 rounded-xl cursor-pointer ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#5842F6]'
                      : 'text-slate-600 hover:text-[#5842F6] hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#5842F6] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#5842F6] hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
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
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-bold ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#5842F6] border border-[#5842F6]/30'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

