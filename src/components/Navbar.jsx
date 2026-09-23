import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Menu, X, Shield, Sparkles } from 'lucide-react';

export function Navbar({ activeSection, onNavigate, onOpenSandbox, onOpenPitchDeck }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Voice narration using Web Speech API
  const toggleVoiceNarration = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in your browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const pitchText = "Welcome to Metron AI, the automated test report generation platform for Non-Automatic Weighing Instruments under OIML Recommendation R-76 and the Legal Metrology Act 2009. Developed for the Department of Consumer Affairs, Smart India Hackathon Problem Statement 26035.";
      const utterance = new SpeechSynthesisUtterance(pitchText);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
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
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo - Styled with Cyprus & Sand + Red Chevron */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center space-x-2.5 cursor-pointer group select-none"
          >
            {/* Red Angular Chevron Icon */}
            <div className="relative flex items-center justify-center">
              <svg 
                className="w-8 h-8 md:w-9 md:h-9 text-[#FF1E27] transition-transform group-hover:scale-105 duration-200" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left chevron */}
                <path d="M12 8L4 20L12 32H18L10 20L18 8H12Z" fill="#FF1E27" />
                {/* Right chevron */}
                <path d="M28 8L36 20L28 32H22L30 20L22 8H28Z" fill="#FF1E27" />
                {/* Center diamond/slash */}
                <path d="M18 18L22 22M22 18L18 22" stroke="#004741" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Brand Title */}
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-lg md:text-xl tracking-wider text-[#004741] uppercase font-sans">
                METRON<span className="text-[#FF1E27]">AI</span>
              </span>

              {/* Red AI badge pill */}
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/30 uppercase tracking-wide">
                AI
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
                  className={`relative px-3.5 py-2 text-sm font-bold transition-all duration-200 rounded-md cursor-pointer ${
                    isActive
                      ? 'text-[#FF1E27] font-black'
                      : 'text-slate-700 hover:text-[#004741] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {/* Red bottom underline indicator for active item */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF1E27] rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
            
            {/* Audio Voiceover Narrator Toggle */}
            <button
              onClick={toggleVoiceNarration}
              title={isSpeaking ? "Stop Voice Narration" : "Listen to AI Project Overview"}
              className={`p-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                isSpeaking 
                  ? 'bg-[#FF1E27]/15 text-[#FF1E27] border border-[#FF1E27]/40 animate-pulse' 
                  : 'text-slate-600 hover:text-[#FF1E27] hover:bg-slate-100'
              }`}
              aria-label="Voice Narration"
            >
              {isSpeaking ? (
                <VolumeX className="w-5 h-5 text-[#FF1E27]" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {/* SIH Pitch Deck CTA Button */}
            <button
              onClick={onOpenPitchDeck}
              className="group relative inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold text-white bg-[#FF1E27] hover:bg-[#e01921] shadow-md shadow-[#FF1E27]/30 hover:shadow-[#FF1E27]/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 text-amber-300 transition-transform group-hover:scale-110" />
              <span>Pitch Presentation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#004741] hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
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
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                    isActive
                      ? 'bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/30'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={toggleVoiceNarration}
              className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-100 px-3 py-2 rounded-lg font-bold"
            >
              <Volume2 className="w-4 h-4 text-[#FF1E27]" />
              <span>{isSpeaking ? "Stop Narration" : "AI Voice Overview"}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitchDeck();
              }}
              className="text-xs text-[#004741] bg-[#F0EDE4] border border-[#004741]/30 px-3 py-2 rounded-lg font-bold"
            >
              🏆 SIH Pitch Deck
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
