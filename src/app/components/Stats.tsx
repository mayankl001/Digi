import { Users, Store, Calendar, Star } from "lucide-react";
import { StaggerChildren } from "./AnimateIn";

const stats = [
  { icon: Users,    value: "150+",   label: "Early Users",          sub: "and growing" },
  { icon: Store,    value: "50+",    label: "Verified Salons",      sub: "in Ranchi" },
  { icon: Calendar, value: "500+",   label: "Expected Bookings",    sub: "at launch" },
  { icon: Star,     value: "4.9★",   label: "Customer Satisfaction", sub: "goal" },
];

// Salons ke naam
const salonNames = [
  "Style Studio Ranchi",
  "Glamour Lounge",
  "The Barber Room",
  "Elegance Beauty Salon",
  "Urban Cut & Spa",
  "Royal Touch Salon",
];

export function Stats() {
  return (
    <section className="pt-0 pb-16 lg:pb-20 bg-white">
      
      {/* Dynamic Keyframes Animation Style */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-smooth {
          display: flex;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-container:hover .animate-marquee-smooth {
          animation-play-state: paused;
        }
      `}</style>

      {/* TOP MARQUEE BANNER (Section ke top se bilkul touch) */}
      <div className="w-full bg-[#031530] py-3.5 mb-12 overflow-hidden flex select-none border-y border-[#991B1B]/20 marquee-container">
        <div className="animate-marquee-smooth shrink-0 items-center gap-8 min-w-full whitespace-nowrap pr-8">
          {salonNames.concat(salonNames).map((name, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-white font-bold text-sm tracking-widest uppercase font-sans">
                {name}
              </span>
              <span className="text-[#FF3377] text-xs">✦</span>
            </div>
          ))}
        </div>

        {/* Continuous Loop Duplicate */}
        <div 
          aria-hidden="true" 
          className="animate-marquee-smooth shrink-0 items-center gap-8 min-w-full whitespace-nowrap pr-8"
        >
          {salonNames.concat(salonNames).map((name, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-8">
              <span className="text-white font-bold text-sm tracking-widest uppercase font-sans">
                {name}
              </span>
              <span className="text-[#FF3377] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* STATS CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Entrance staggered animations */}
        <StaggerChildren
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          stagger={0.12}
          direction="up"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 lg:p-8 text-center bg-gradient-to-br from-[#FAFAFA] to-[#FDF2F2] border border-[#991B1B]/10 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(153,27,27,0.12)] transition-all duration-300 cursor-default font-sans group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#991B1B] to-[#B91C1C] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <s.icon className="w-5 h-5 text-white" />
              </div>

              {/* Stat Value */}
              <div className="text-3xl lg:text-4xl font-extrabold text-[#991B1B] tracking-tight mb-1">
                {s.value}
              </div>

              {/* Stat Label */}
              <div className="text-sm font-bold text-[#111827] mb-1">
                {s.label}
              </div>

              {/* Stat Sub-text */}
              <div className="text-xs text-[#6B7280]">
                {s.sub}
              </div>
            </div>
          ))}
        </StaggerChildren>
        
      </div>
    </section>
  );
}