import { Clock, Zap, ShieldCheck, Star, Tag, IndianRupee } from "lucide-react";
import { AnimateIn, StaggerChildren } from "./AnimateIn";
import { motion } from "motion/react";

const features = [
  { icon: Clock,         title: "Live Availability",    desc: "See real-time open slots at every salon. No more calling to check — just pick and book.", color: "#991B1B", bg: "#FEF2F2" },
  { icon: Zap,           title: "Instant Booking",      desc: "Book your appointment in under 30 seconds. Confirmation sent directly to your phone.",     color: "#D97706", bg: "#FFFBEB" },
  { icon: ShieldCheck,   title: "Verified Salons",      desc: "Every salon on DigiSaloon is vetted, licensed, and quality-checked before listing.",         color: "#16A34A", bg: "#F0FDF4" },
  { icon: Star,          title: "Real Reviews",         desc: "Authentic reviews from verified customers. Know exactly what to expect before you visit.",   color: "#7C3AED", bg: "#F5F3FF" },
  { icon: Tag,           title: "Exclusive Offers",     desc: "Access members-only deals, first-visit discounts, and seasonal promotions.",                  color: "#DB2777", bg: "#FDF2F8" },
  { icon: IndianRupee,   title: "Transparent Pricing",  desc: "Zero hidden charges. Full menu with upfront pricing — what you see is what you pay.",         color: "#0284C7", bg: "#F0F9FF" },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn direction="up" className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              Platform Features
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
            Everything you need for a{" "}
            <span style={{ color: "#991B1B" }}>perfect beauty experience</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Designed for customers who value their time and salons that want to grow.
          </p>
        </AnimateIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.09}
          direction="up"
          delay={0.05}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, boxShadow: "0 20px 56px rgba(0,0,0,0.09)", background: "#fff" }}
              className="rounded-2xl p-7 cursor-default transition-colors duration-200"
              style={{ background: "#FAFAFA", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: f.bg }}
              >
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#111827" }}
              >
                {f.title}
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", lineHeight: 1.65, fontSize: "0.9rem" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
