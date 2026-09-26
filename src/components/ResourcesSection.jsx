import React from 'react';

export function ResourcesSection() {
  const videos = [
    {
      id: "demo",
      title: "TARAZU Laboratory Workflow Demonstration",
      poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: "emaap",
      title: "Government eMaap Ecosystem Integration Overview",
      poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-[#F8FAFC] text-slate-800 relative border-b border-slate-200 overflow-hidden">
      
      {/* Ambient Light Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#007A8C]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* 2 Clean Embedded Video Players Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((vid) => (
            <div 
              key={vid.id} 
              className="bg-slate-950 rounded-3xl border border-slate-300 shadow-xl overflow-hidden aspect-video relative group transition-transform duration-300 hover:scale-[1.01]"
            >
              <video 
                controls 
                poster={vid.poster}
                className="w-full h-full object-cover"
              >
                <source src={vid.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ResourcesSection;

