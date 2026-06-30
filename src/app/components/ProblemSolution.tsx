import { X, Check } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const problems = [
  { text: "Long waiting times at salons" },
  { text: "Uncertain & hidden pricing" },
  { text: "Unverified or low-quality salons" },
  { text: "No way to compare services" },
];

const solutions = [
  { text: "Live seat availability in real-time" },
  { text: "100% transparent pricing upfront" },
  { text: "Verified & rated salon partners" },
  { text: "Instant booking, zero phone calls" },
];

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#991B1B]/10 border border-[#991B1B]/15">
            <span className="text-sm font-semibold text-[#991B1B] font-sans">
              The Problem & Our Fix
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight font-sans">
            The old way is broken.{" "}
            <span className="text-[#991B1B]">We fixed it.</span>
          </h2>
          
          <p className="mt-4 max-w-xl mx-auto text-base text-[#6B7280] leading-relaxed font-sans">
            Getting a salon appointment shouldn't be a chore. DigiSaloon reimagines the entire booking experience in Ranchi.
          </p>
        </AnimateIn>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 font-sans">
          
          {/* Left Card: The Old Way */}
          <AnimateIn direction="left" delay={0.1}>
            <div className="rounded-2xl p-8 lg:p-10 h-full bg-white border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-red-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-50">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-[#111827]">
                  The Old Way
                </h3>
              </div>
              
              <ul className="space-y-4">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-red-50 group-hover:bg-red-100 transition-colors">
                      <X className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-[#374151] leading-relaxed">
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Right Card: The DigiSaloon Way */}
          <AnimateIn direction="right" delay={0.2}>
            <div className="rounded-2xl p-8 lg:p-10 h-full bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] shadow-[0_16px_48px_rgba(153,27,27,0.22)] hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  The DigiSaloon Way
                </h3>
              </div>
              
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-white/20 group-hover:bg-white/30 transition-colors">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 leading-relaxed font-medium">
                      {s.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}