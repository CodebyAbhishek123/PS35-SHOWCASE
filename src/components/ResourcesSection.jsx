import React from 'react';

export function ResourcesSection() {
  const videos = [
    {
      id: "demo",
      title: "TARAZU Digital Calibration & Legal Metrology Platform",
      subtitle: "Few Clicks. One Report. Verified Compliance.",
      badge: "FEATURED WALKTHROUGH",
      poster: "/tarazu-video-thumbnail.jpg",
      videoUrl: "/video/tarazu-demo.mp4"
    },
    {
      id: "emaap",
      title: "Government eMaap Ecosystem Integration Overview",
      subtitle: "Seamless statutory compliance API & multi-lab workflow sync",
      badge: "GOVT INTEGRATION",
      poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200 overflow-hidden">
      
      {/* Ambient Light Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#007A8C]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-7xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
            TARAZU Video Content & Platform Walkthroughs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">
            Watch live demonstrations of raw bench observation testing, turning-point calculation automation, and eMaap API integration.
          </p>
        </div>
        
        {/* 2 Clean Embedded Video Players Grid (Larger Page Fit) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {videos.map((vid) => (
            <div 
              key={vid.id} 
              className="bg-slate-900 rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-900/20"
            >
              <div className="aspect-video relative bg-slate-950 overflow-hidden">
                <video 
                  controls 
                  poster={vid.poster}
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={vid.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#007A8C]/30 text-[#C0D725] border border-teal-500/30">
                    {vid.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {vid.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ResourcesSection;

