import { Clock, Zap, ShieldCheck, Star, Tag, IndianRupee } from "lucide-react";
import { AnimateIn, StaggerChildren } from "./AnimateIn";
import { motion } from "motion/react";

const features = [
  { icon: Clock,        title: "Live Availability",    desc: "See real-time open slots at every salon. No more calling to check — just pick and book.", color: "#991B1B", bg: "#FEF2F2" },
  { icon: Zap,          title: "Instant Booking",      desc: "Book your appointment in under 30 seconds. Confirmation sent directly to your phone.",     color: "#D97706", bg: "#FFFBEB" },
  { icon: ShieldCheck,   title: "Verified Salons",      desc: "Every salon on DigiSaloon is vetted, licensed, and quality-checked before listing.",         color: "#16A34A", bg: "#F0FDF4" },
  { icon: Star,          title: "Real Reviews",         desc: "Authentic reviews from verified customers. Know exactly what to expect before you visit.",   color: "#7C3AED", bg: "#F5F3FF" },
  { icon: Tag,           title: "Exclusive Offers",     desc: "Access members-only deals, first-visit discounts, and seasonal promotions.",                  color: "#DB2777", bg: "#FDF2F8" },
  { icon: IndianRupee,   title: "Transparent Pricing",  desc: "Zero hidden charges. Full menu with upfront pricing — what you see is what you pay.",         color: "#0284C7", bg: "#F0F9FF" },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#991B1B]/10 border border-[#991B1B]/15">
            <span className="text-sm font-semibold text-[#991B1B] font-sans">
              Platform Features
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight font-sans">
            Everything you need for a{" "}
            <span className="text-[#991B1B]">perfect beauty experience</span>
          </h2>
          
          <p className="mt-4 max-w-lg mx-auto text-base text-[#6B7280] leading-relaxed font-sans">
            Designed for customers who value their time and salons that want to grow.
          </p>
        </AnimateIn>

        {/* Features Staggered Grid */}
        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans"
          stagger={0.09}
          direction="up"
          delay={0.05}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-7 cursor-default bg-[#FAFAFA] border border-gray-200/60 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_56px_rgba(153,27,27,0.06)] hover:border-[#991B1B]/20 group"
            >
              {/* Dynamic Icon Box with dynamic styles for unique background/tokens */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300"
                style={{ background: f.bg }}
              >
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              
              {/* Card Title */}
              <h3 className="text-base font-bold text-[#111827] mb-2">
                {f.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
        
      </div>
    </section>
  );
}