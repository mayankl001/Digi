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
    <section className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              The Problem & Our Fix
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            The old way is broken.{" "}
            <span style={{ color: "#991B1B" }}>We fixed it.</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Getting a salon appointment shouldn't be a chore. DigiSaloon reimagines the entire booking experience.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <AnimateIn direction="left" delay={0.1}>
            <div
              className="rounded-2xl p-8 lg:p-10 h-full"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#FEF2F2" }}>
                  <X className="w-5 h-5" style={{ color: "#DC2626" }} />
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#111827" }}>
                  The Old Way
                </h3>
              </div>
              <ul className="space-y-4">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "#FEF2F2" }}>
                      <X className="w-3 h-3" style={{ color: "#DC2626" }} />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#374151", lineHeight: 1.6 }}>
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.2}>
            <div
              className="rounded-2xl p-8 lg:p-10 h-full"
              style={{ background: "linear-gradient(160deg, #991B1B 0%, #7F1D1D 100%)", boxShadow: "0 16px 48px rgba(153,27,27,0.25)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff" }}>
                  The DigiSaloon Way
                </h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "rgba(255,255,255,0.2)" }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
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
