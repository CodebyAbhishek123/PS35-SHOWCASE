import React, { useState } from 'react';
import { 
  Play, 
  X, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  Server,
  ArrowRight,
  Video
} from 'lucide-react';

export function ResourcesSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: "demo",
      title: "TARAZU Laboratory Workflow & OIML R-76 Test Demonstration",
      category: "PRODUCT WALKTHROUGH",
      duration: "05:24",
      desc: "Watch how testing technicians record raw bench observations, automatically execute turning-point calculations (P = I + 0.5e − ΔL), evaluate MPE compliance, and issue tamper-evident SHA-256 PDF reports in real time.",
      poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      highlights: [
        "Raw Bench Data Entry & Validation",
        "Automated Turning-Point Formula (P = I + 0.5e − ΔL)",
        "OIML R-76 Stepped MPE Pass/Fail Check",
        "Cryptographic SHA-256 PDF Report Export"
      ]
    },
    {
      id: "emaap",
      title: "Government eMaap Ecosystem & REST API Integration Overview",
      category: "SYSTEM ARCHITECTURE",
      duration: "04:15",
      desc: "Technical breakdown of TARAZU's REST API & encrypted JSON payload architecture connecting legal metrology laboratories with India's central eMaap digital ecosystem.",
      poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      highlights: [
        "AES-256 Encrypted Rest API Payloads",
        "Automated eMaap Central Model Sync",
        "RRSL State Metrology Synchronizer",
        "Zero Duplicate Data Entry Workflow"
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200 overflow-hidden">
      
      {/* Ambient Light Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#007A8C]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Video Showcase &amp; <span className="text-[#007A8C]">Product Demos</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Watch in-depth video walkthroughs of the TARAZU metrology engine and government eMaap integration.
          </p>
        </div>

        {/* 2 Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((vid) => (
            <div 
              key={vid.id} 
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-[#007A8C]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div 
                className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer group/thumb"
                onClick={() => setSelectedVideo(vid)}
              >
                <img 
                  src={vid.poster} 
                  alt={vid.title} 
                  className="w-full h-full object-cover opacity-85 group-hover/thumb:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Duration Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
                  <Clock className="w-3 h-3 text-[#C0D725]" />
                  <span>{vid.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#007A8C]/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
                  {vid.category}
                </div>

                {/* Center Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#007A8C] text-white flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 group-hover/thumb:bg-[#006372] transition-all duration-300 border-2 border-white/80 pl-1">
                    <Play className="w-7 h-7 fill-white" />
                  </div>
                </div>

                {/* Bottom Title Overlay on Thumbnail */}
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-mono font-bold flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-[#C0D725]" />
                  <span>Click to play HD Video Demonstration</span>
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug group-hover:text-[#007A8C] transition-colors">
                    {vid.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {vid.desc}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Key Highlights Covered:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {vid.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-[#F8FAFC] p-2 rounded-xl border border-slate-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#007A8C] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Watch Video Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedVideo(vid)}
                    className="w-full py-3 px-4 rounded-2xl bg-[#007A8C] hover:bg-[#006372] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group/btn"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Video Walkthrough</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Video Player Modal Overlay */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-700 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#007A8C] text-white">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">{selectedVideo.title}</h3>
                  <span className="text-[10px] font-mono text-teal-400 font-semibold">{selectedVideo.category} • {selectedVideo.duration}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video 
                controls 
                autoPlay 
                poster={selectedVideo.poster}
                className="w-full h-full object-contain"
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>TARAZU Legal Metrology Platform Video Walkthrough</span>
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default ResourcesSection;

