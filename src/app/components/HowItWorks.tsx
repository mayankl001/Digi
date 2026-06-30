import { Search, BarChart2, CalendarCheck, Sparkles } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const steps = [
  { num: "01", icon: Search,        title: "Search",  desc: "Browse verified salons and spas near you in Ranchi. Filter by service, price, rating, and availability." },
  { num: "02", icon: BarChart2,     title: "Compare", desc: "Compare services, pricing, reviews, and live slot availability across multiple salons side by side." },
  { num: "03", icon: CalendarCheck, title: "Book",    desc: "Pick your preferred time slot and confirm in seconds. No waiting, no phone calls, no friction." },
  { num: "04", icon: Sparkles,      title: "Enjoy",   desc: "Walk in and enjoy your appointment. Leave a review after and earn loyalty points for next time." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#991B1B]/10 border border-[#991B1B]/15">
            <span className="text-sm font-semibold text-[#991B1B] font-sans">
              How It Works
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight font-sans">
            From search to appointment{" "}
            <span className="text-[#991B1B]">in 4 easy steps</span>
          </h2>
        </AnimateIn>

        {/* Steps Workflow Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative font-sans">
          
          {/* Subtle Desktop Connector Line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] hidden lg:block bg-gradient-to-r from-[#991B1B]/5 via-[#991B1B]/20 to-[#991B1B]/5 pointer-events-none" />

          {/* Sequential Step Cards Loop */}
          {steps.map((step, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.12} className="h-full">
              <div className="relative flex flex-col items-center text-center p-6 h-full rounded-2xl bg-[#FAFAFA] border border-gray-200/60 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_48px_rgba(153,27,27,0.06)] hover:border-[#991B1B]/20 group">
                
                {/* Step Icon & Floating Number Badge */}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 z-10 bg-gradient-to-br from-[#991B1B] to-[#B91C1C] shadow-[0_8px_24px_rgba(153,27,27,0.2)] group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-5 h-5 text-white" />
                  
                  {/* Absolute Top-Right Counter Dot */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-white border-2 border-[#991B1B] shadow-sm">
                    <span className="text-[10px] font-extrabold text-[#991B1B] leading-none">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Typography Layer */}
                <h3 className="text-lg font-bold text-[#111827] mb-2.5">
                  {step.title}
                </h3>
                
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {step.desc}
                </p>
                
              </div>
            </AnimateIn>
          ))}
        </div>
        
      </div>
    </section>
  );
}