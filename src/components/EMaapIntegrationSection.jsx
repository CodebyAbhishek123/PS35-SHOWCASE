import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Database, 
  Cpu, 
  FileCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  RefreshCw, 
  Sparkles, 
  Server,
  Layers,
  Lock,
  Workflow,
  Play,
  Pause,
  Zap,
  Activity
} from 'lucide-react';

export function EMaapIntegrationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [packetPosition, setPacketPosition] = useState(0);

  const tarazuSteps = [
    { label: "Instrument Metadata", sub: "Cap, e/d, Class I-IV", targetNode: 0 },
    { label: "Test Session Logging", sub: "Bench observations & env logs", targetNode: 0 },
    { label: "Turning-Point Calculations", sub: "P = I + 0.5e - ΔL", targetNode: 2 },
    { label: "MPE Validation", sub: "Automated clause A.4.4 audit", targetNode: 2 },
    { label: "Final SHA-256 Report", sub: "Tamper-evident QR certificate", targetNode: 1 }
  ];

  // Auto-advance active step animation loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % tarazuSteps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, tarazuSteps.length]);

  // Smooth data packet travelling animation effect
  useEffect(() => {
    setPacketPosition(0);
    const anim = setTimeout(() => {
      setPacketPosition(100);
    }, 100);
    return () => clearTimeout(anim);
  }, [activeStep]);

  const currentStepInfo = tarazuSteps[activeStep];

  const benefits = [
    {
      title: "Structured Data Transfer",
      desc: "Relevant evaluation and report data flows from TARAZU directly toward connected government workflows.",
      icon: Workflow,
      tag: "REST API Payload",
      bgGradient: "bg-gradient-to-br from-[#EEF2FF]/90 via-[#F8FAFC] to-white border-[#007A8C]/25"
    },
    {
      title: "Reduce Duplicate Entry",
      desc: "Avoid repeatedly entering the same instrument and application information where the integration supports it.",
      icon: RefreshCw,
      tag: "Zero Redundancy",
      bgGradient: "bg-gradient-to-br from-[#E6F4F6]/90 via-[#F8FAFC] to-white border-[#007A8C]/25"
    },
    {
      title: "Connected Records",
      desc: "Keep TARAZU's test and report workflow seamlessly connected with relevant government-side approval processes.",
      icon: Layers,
      tag: "End-to-End Audit",
      bgGradient: "bg-gradient-to-br from-[#F0FDF4]/90 via-[#F8FAFC] to-white border-emerald-500/25"
    }
  ];

  return (
    <section id="emaap-integration" className="py-8 md:py-12 relative border-t border-slate-200 bg-[#F3F7FB] text-slate-800 overflow-hidden min-h-[calc(100vh-70px)] flex flex-col justify-center">
      
      {/* Background Soft Ambient Light Spheres */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[380px] bg-[#007A8C]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[380px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 md:space-y-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">
            From Laboratory Testing <span className="bg-gradient-to-r from-[#007A8C] via-[#06B6D4] to-emerald-600 bg-clip-text text-transparent">to eMaap</span>
          </h2>

          <div className="text-[11px] sm:text-xs font-bold text-[#007A8C] bg-[#EEF2FF] px-3.5 py-1 rounded-full border border-[#007A8C]/30 inline-flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#007A8C] animate-pulse" />
            <span>eMaap Integration — Connecting TARAZU with India's Legal Metrology digital ecosystem.</span>
          </div>
        </div>

        {/* Animated Interactive Flow Visual Container (Seamless layout without outer white box) */}
        <div className="relative overflow-hidden transition-all">
          
          {/* Top Simulation Bar (Floating Glass Island Capsule styled like Navbar) */}
          <div className="backdrop-blur-2xl transition-all duration-500 rounded-2xl md:rounded-full border border-slate-200/90 bg-white/85 px-4 sm:px-6 py-1.5 shadow-[0_12px_35px_-5px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_-5px_rgba(0,122,140,0.12)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 font-mono mb-4">
            
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#EEF2FF] border border-[#007A8C]/30 text-[#007A8C]">
                <Server className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-xs">Live Data Pipeline Simulation</span>
                <span className="hidden sm:inline text-slate-400 ml-2 text-[11px]">| Interactive Flow</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300 text-[11px]">
                <Activity className="w-3 h-3 text-emerald-600 animate-bounce" />
                <span>Payload: AES-256 Encrypted</span>
              </div>
            </div>

          </div>

          {/* 3-Part Animated Layout: TARAZU -> Laser Data Stream -> eMaap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
            
            {/* Left Node: TARAZU Workspace (Soft Teal Background Tint) */}
            <div className="lg:col-span-5 bg-[#EEF2FF]/50 rounded-2xl p-4 sm:p-4 border border-[#007A8C]/20 space-y-2.5 shadow-2xs transition-all">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#007A8C]/15">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white border border-[#007A8C]/30 text-[#007A8C] shadow-2xs">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                      <span>TARAZU</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#007A8C] border border-[#007A8C]/30">
                        Lab Engine
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">Click any step to inspect payload</p>
                  </div>
                </div>
              </div>

              {/* 5 Clickable Interactive Steps inside TARAZU */}
              <div className="space-y-1.5">
                {tarazuSteps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button 
                      key={idx}
                      onClick={() => {
                        setActiveStep(idx);
                        setIsPlaying(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isActive 
                          ? 'bg-gradient-to-r from-white via-white to-[#EEF2FF] border-[#007A8C] text-[#007A8C] shadow-sm translate-x-1 ring-2 ring-[#007A8C]/20' 
                          : 'bg-white/80 border-slate-200/90 text-slate-700 hover:text-slate-950 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-5 h-5 rounded-full text-[11px] font-black flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#007A8C] text-white shadow-xs' : 'bg-slate-200/80 text-slate-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${isActive ? 'text-[#007A8C]' : 'text-slate-800'}`}>
                            {step.label}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">{step.sub}</div>
                        </div>
                      </div>

                      {isActive ? (
                        <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#007A8C] bg-[#EEF2FF] px-2 py-0.5 rounded-md border border-[#007A8C]/30">
                          <Zap className="w-2.5 h-2.5 text-[#007A8C] fill-[#007A8C]" />
                          <span>SENDING</span>
                        </div>
                      ) : (
                        <ArrowRight className="w-3 h-3 text-slate-300" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Node: Laser Beam Data Pipeline & Lock Pulse */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-3 py-2 lg:py-0">
              
              {/* Connector Pill Badge */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#007A8C]/25 rounded-full blur-sm animate-pulse" />
                <div className="relative px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#007A8C]/40 text-[10px] font-mono font-extrabold text-[#007A8C] flex items-center gap-1.5 shadow-xs">
                  <Lock className="w-3 h-3 text-[#007A8C]" />
                  <span>Secure Sync</span>
                </div>
              </div>

              {/* Animated Laser Data Pipe */}
              <div className="w-full relative flex items-center justify-center h-10">
                
                {/* Horizontal laser pipe for desktop */}
                <div className="hidden lg:block w-full h-2 bg-slate-200/80 rounded-full relative overflow-hidden border border-slate-300/80 shadow-inner">
                  
                  {/* Glowing Animated Laser Track */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007A8C] via-[#06B6D4] to-emerald-500 opacity-40 animate-pulse" />
                  
                  {/* Travelling Fast Particle Beam */}
                  <div 
                    className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-[#007A8C] to-emerald-400 rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_#007A8C]"
                    style={{ left: `${packetPosition * 0.75}%` }}
                  />

                  {/* Pulsing Energy Dot */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-200 transition-all duration-700 shadow-md"
                    style={{ left: `${Math.min(90, packetPosition)}%` }}
                  />
                </div>

                {/* Vertical laser pipe for mobile */}
                <div className="lg:hidden h-14 w-2 bg-slate-200/80 rounded-full relative overflow-hidden border border-slate-300/80 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#007A8C] via-[#06B6D4] to-emerald-500 opacity-40 animate-pulse" />
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-200 transition-all duration-700 shadow-md"
                    style={{ top: `${Math.min(90, packetPosition)}%` }}
                  />
                </div>

              </div>

              <div className="text-[10px] font-mono text-slate-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-slate-200 text-center shadow-2xs">
                JSON REST API / OAuth2
              </div>
            </div>

            {/* Right Node: eMaap Legal Metrology Ecosystem (Soft Emerald Background Tint) */}
            <div className="lg:col-span-5 bg-emerald-50/50 rounded-2xl p-4 sm:p-4 border border-emerald-200 space-y-2.5 shadow-2xs transition-all">
              <div className="flex items-center justify-between pb-2.5 border-b border-emerald-200/80">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-white border border-emerald-300 text-emerald-700 shadow-2xs">
                    <Globe className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm">eMaap</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Legal Metrology Digital Ecosystem</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Government Portal
                </span>
              </div>

              {/* Receiving Cards inside eMaap with Soft Tinting */}
              <div className="space-y-2 pt-0.5">
                
                {/* Node 0: Central Model Registry */}
                <div className={`p-3 rounded-xl border transition-all duration-300 space-y-1 ${
                  currentStepInfo.targetNode === 0 
                    ? 'bg-gradient-to-r from-white via-[#F0FDF4] to-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20 translate-x-1' 
                    : 'bg-[#F0FDF4]/70 border-emerald-200/80 text-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className={currentStepInfo.targetNode === 0 ? 'text-emerald-700' : ''}>
                      Central Model Registry
                    </span>
                    <div className="flex items-center gap-1">
                      {currentStepInfo.targetNode === 0 && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 border border-emerald-400">
                          RECEIVING
                        </span>
                      )}
                      <CheckCircle2 className={`w-3.5 h-3.5 ${currentStepInfo.targetNode === 0 ? 'text-emerald-600' : 'text-emerald-400'}`} />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-snug">
                    Direct ingestion of standardized instrument metadata and test session parameters.
                  </p>
                </div>

                {/* Node 1: Statutory Compliance Archival */}
                <div className={`p-3 rounded-xl border transition-all duration-300 space-y-1 ${
                  currentStepInfo.targetNode === 1 
                    ? 'bg-gradient-to-r from-white via-[#F0FDF4] to-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20 translate-x-1' 
                    : 'bg-[#F0FDF4]/70 border-emerald-200/80 text-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className={currentStepInfo.targetNode === 1 ? 'text-emerald-700' : ''}>
                      Statutory Compliance Archival
                    </span>
                    <div className="flex items-center gap-1">
                      {currentStepInfo.targetNode === 1 && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 border border-emerald-400">
                          RECEIVING
                        </span>
                      )}
                      <ShieldCheck className={`w-3.5 h-3.5 ${currentStepInfo.targetNode === 1 ? 'text-emerald-600' : 'text-emerald-400'}`} />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-snug">
                    Tamper-evident SHA-256 cryptographic hash and QR code verification binding.
                  </p>
                </div>

                {/* Node 2: State Metrology Synchronizer */}
                <div className={`p-3 rounded-xl border transition-all duration-300 space-y-1 ${
                  currentStepInfo.targetNode === 2 
                    ? 'bg-gradient-to-r from-white via-[#EEF2FF] to-[#E6F4F6] border-[#007A8C] shadow-sm ring-2 ring-[#007A8C]/20 translate-x-1' 
                    : 'bg-[#F0FDF4]/70 border-emerald-200/80 text-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className={currentStepInfo.targetNode === 2 ? 'text-[#007A8C]' : ''}>
                      State Metrology Synchronizer
                    </span>
                    <div className="flex items-center gap-1">
                      {currentStepInfo.targetNode === 2 && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#EEF2FF] text-[#007A8C] border border-[#007A8C]/30">
                          RECEIVING
                        </span>
                      )}
                      <RefreshCw className={`w-3.5 h-3.5 ${currentStepInfo.targetNode === 2 ? 'text-[#007A8C] animate-spin' : 'text-emerald-400'}`} />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-snug">
                    Automated turning-point calculations and MPE clause validation syncing across RRSLs.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 3 Benefit Cards with Harmonized UI Color Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className={`${b.bgGradient} rounded-xl p-4 hover:border-[#007A8C] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-2 shadow-2xs group cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-white border border-[#007A8C]/25 text-[#007A8C] group-hover:bg-[#007A8C] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 group-hover:bg-[#EEF2FF] group-hover:text-[#007A8C] group-hover:border-[#007A8C]/30 transition-colors shadow-2xs">
                    {b.tag}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#007A8C] transition-colors">
                  {b.title}
                </h4>

                <p className="text-[11px] text-slate-600 leading-snug">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default EMaapIntegrationSection;
