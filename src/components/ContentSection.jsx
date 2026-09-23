import React from 'react';
import { Film } from 'lucide-react';

export function ContentSection() {
  const videos = [
    {
      id: 1,
      title: "OIML R-76 Type Evaluation & Testing Workflow",
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "MetronAI Test Report Generation Platform Walkthrough",
      youtubeEmbedUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
    }
  ];

  return (
    <section id="content" className="py-16 md:py-20 relative border-t border-slate-200 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EDE4] border border-[#004741]/20 text-xs font-bold text-[#004741]">
            <Film className="w-4 h-4 text-red-600" />
            <span>VIDEO DEMONSTRATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004741] tracking-tight">
            Video <span className="text-red-600">Demonstrations</span>
          </h2>
        </div>

        {/* 2 YouTube Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden transition-all hover:shadow-xl hover:border-[#004741]/30"
            >
              {/* YouTube Video Embed Container (16:9 Aspect Ratio) */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={video.youtubeEmbedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContentSection;
