import { Search, BarChart2, CalendarCheck, Sparkles } from "lucide-react";
import { AnimateIn, StaggerChildren } from "./AnimateIn";
import { motion } from "motion/react";

const steps = [
  { num: "01", icon: Search,        title: "Search",  desc: "Browse verified salons and spas near you in Ranchi. Filter by service, price, rating, and availability.", color: "#991B1B" },
  { num: "02", icon: BarChart2,     title: "Compare", desc: "Compare services, pricing, reviews, and live slot availability across multiple salons side by side.",     color: "#D97706" },
  { num: "03", icon: CalendarCheck, title: "Book",    desc: "Pick your preferred time slot and confirm in seconds. No waiting, no phone calls, no friction.",          color: "#16A34A" },
  { num: "04", icon: Sparkles,      title: "Enjoy",   desc: "Walk in and enjoy your appointment. Leave a review after and earn loyalty points for next time.",          color: "#7C3AED" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn direction="up" className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              How It Works
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
            From search to appointment{" "}
            <span style={{ color: "#991B1B" }}>in 4 easy steps</span>
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <AnimateIn
            direction="fade"
            className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 hidden lg:block"
            style={{ background: "linear-gradient(90deg, #991B1B22 0%, #991B1B44 50%, #991B1B22 100%)" }}
          />

          {steps.map((step, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.07)", background: "#fff" }}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl transition-colors duration-200"
                style={{ background: "#FAFAFA", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                {/* Step number bubble */}
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 z-10"
                  style={{
                    background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                    boxShadow: "0 8px 24px rgba(153,27,27,0.25)",
                  }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                  <div
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#fff", border: "2px solid #991B1B" }}
                  >
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.55rem", color: "#991B1B" }}>
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3
                  className="mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#111827" }}
                >
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", lineHeight: 1.65, fontSize: "0.875rem" }}>
                  {step.desc}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
