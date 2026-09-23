import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Scale, Sparkles } from 'lucide-react';

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
      const pitchText = "Welcome to TARAZU, the automated test report generation platform for Non-Automatic Weighing Instruments under OIML Recommendation R-76 and the Legal Metrology Act 2009. Developed for the Department of Consumer Affairs, Smart India Hackathon Problem Statement 26035.";
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
          
          {/* Brand Logo - Styled matching screenshot: Purple Icon + TARAZU. + OIML R 76-1 MVP */}
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
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl md:text-2xl tracking-tight text-slate-900 font-sans">
                  TARAZU<span className="text-[#5842F6]">.</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#5842F6]/10 text-[#5842F6] border border-[#5842F6]/20">
                  10/10 Automated
                </span>
              </div>
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

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
            
            {/* Audio Voiceover Narrator Toggle */}
            <button
              onClick={toggleVoiceNarration}
              title={isSpeaking ? "Stop Voice Narration" : "Listen to AI Project Overview"}
              className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                isSpeaking 
                  ? 'bg-[#5842F6]/15 text-[#5842F6] border border-[#5842F6]/40 animate-pulse' 
                  : 'text-slate-500 hover:text-[#5842F6] hover:bg-indigo-50'
              }`}
              aria-label="Voice Narration"
            >
              {isSpeaking ? (
                <VolumeX className="w-5 h-5 text-[#5842F6]" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {/* Live Sandbox CTA Button */}
            <button
              onClick={onOpenSandbox}
              className="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-[#5842F6] bg-[#EEF2FF] hover:bg-indigo-100 border border-[#5842F6]/20 transition-all duration-200 cursor-pointer"
            >
              <span>Launch Test Sandbox</span>
            </button>

            {/* SIH Pitch Deck CTA Button (Vibrant Indigo matching + New Test button in screenshot) */}
            <button
              onClick={onOpenPitchDeck}
              className="group relative inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-[#5842F6] hover:bg-[#4338CA] shadow-md shadow-[#5842F6]/30 hover:shadow-[#5842F6]/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 text-amber-300 transition-transform group-hover:scale-110" />
              <span>+ New Test Session</span>
            </button>
          </div>

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

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
            <button
              onClick={toggleVoiceNarration}
              className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-100 px-3 py-2 rounded-xl font-bold"
            >
              <Volume2 className="w-4 h-4 text-[#5842F6]" />
              <span>{isSpeaking ? "Stop" : "AI Audio"}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandbox();
              }}
              className="text-xs text-[#5842F6] bg-[#EEF2FF] border border-[#5842F6]/30 px-3 py-2 rounded-xl font-bold"
            >
              Sandbox
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitchDeck();
              }}
              className="text-xs text-white bg-[#5842F6] px-3 py-2 rounded-xl font-bold"
            >
              + New Test
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
