import { Users, Store, Calendar, Star } from "lucide-react";
import { StaggerChildren } from "./AnimateIn";

const stats = [
  { icon: Users,    value: "150+",   label: "Early Users",          sub: "and growing" },
  { icon: Store,    value: "50+",    label: "Verified Salons",      sub: "in Ranchi" },
  { icon: Calendar, value: "500+",   label: "Expected Bookings",    sub: "at launch" },
  { icon: Star,     value: "4.9★",   label: "Customer Satisfaction", sub: "goal" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-white">
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
              {/* Icon Container with subtle zoom on card hover */}
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