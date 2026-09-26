import React from 'react';

export function TeamSection() {
  const teamMembers = [
    {
      name: "Kunal Patil",
      tag: "Team Leader",
      role: "App & Web Developer, Research",
      photo: "/team/kunal_patil.jpg"
    },
    {
      name: "MD Ismile",
      tag: "Team Member",
      role: "AI & Web Developer",
      photo: "/team/md_ismile.png"
    },
    {
      name: "Maitri Patel",
      tag: "Team Member",
      role: "UI/UX & Web Developer",
      photo: "/team/maitri_patel.png"
    },
    {
      name: "Abhishek Kumar",
      tag: "Team Member",
      role: "Web Developer & Data Analyst",
      photo: "/team/abhishek_kumar.png"
    },
    {
      name: "Purnima Upadhyay",
      tag: "Team Member",
      role: "Research & Web Developer",
      photo: "/team/purnima_upadhyay.png"
    },
    {
      name: "Tushar Mahapatra",
      tag: "Team Member",
      role: "Web & Cloud Developer",
      photo: "/team/tushar_mahapatra.png"
    }
  ];

  return (
    <section id="team" className="py-20 md:py-28 relative border-t border-slate-200 bg-[#F8FAFC] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Teal Accent matching Tarazu theme */}
        <div className="text-left mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 inline-block relative pb-3">
            The Alchemists <span className="relative">
              Behind TARAZU
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#007A8C] rounded-full"></span>
            </span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            The minds behind TARAZU — transforming metrology challenges into intelligent, compliant solutions.
          </p>
        </div>

        {/* Team Members Grid - 6 Column Flex/Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Circular Avatar Container with Drop Shadow & Ring */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 p-1 bg-white ring-2 ring-slate-200 group-hover:ring-[#007A8C] group-hover:shadow-xl group-hover:shadow-[#007A8C]/20 transition-all duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full bg-slate-100"
                  onError={(e) => {
                    // Fallback avatar if image fails to load
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5842F6&color=FFFFFF&size=128&bold=true`;
                  }}
                />
              </div>

              {/* Member Name */}
              <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#007A8C] transition-colors">
                {member.name}
              </h3>

              {/* Tag - Green/Indigo font matching theme */}
              <div className="text-xs font-bold text-[#007A8C] mt-0.5 tracking-wide">
                {member.tag}
              </div>

              {/* Role & Description */}
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-1 max-w-[140px]">
                {member.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;
