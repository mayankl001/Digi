import { TrendingUp, Eye, CalendarRange, IndianRupee, ArrowRight } from "lucide-react";
import { AnimateIn, StaggerChildren } from "./AnimateIn";
import { motion } from "motion/react";

const SALON_IMG = "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=600&h=500&fit=crop&auto=format";

const benefits = [
  { icon: TrendingUp,    title: "More Customers",            desc: "Get discovered by thousands of local customers actively looking to book beauty services." },
  { icon: Eye,           title: "Better Visibility",         desc: "Premium placement in search results, curated collections, and exclusive featured listings." },
  { icon: CalendarRange, title: "Smart Booking Management",  desc: "Manage your calendar, reduce no-shows with automated reminders, and optimize your schedule." },
  { icon: IndianRupee,   title: "Higher Revenue",            desc: "Fill empty slots, upsell services, and grow revenue with targeted promotions and loyalty programs." },
];

export function ForSalons() {
  return (
    <section id="for-salons" className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <AnimateIn direction="left">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.12)", height: 420 }}
              >
                <img src={SALON_IMG} alt="Salon interior" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "linear-gradient(to top, rgba(153,27,27,0.5) 0%, transparent 50%)" }}
                />
              </div>

              {/* Floating metric card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-4 lg:right-8 rounded-2xl p-5"
                style={{
                  background: "#fff",
                  boxShadow: "0 16px 48px rgba(153,27,27,0.15)",
                  border: "1px solid rgba(232,180,184,0.3)",
                  minWidth: 180,
                }}
              >
                <p className="text-xs mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280" }}>
                  Avg. monthly growth
                </p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#991B1B", letterSpacing: "-0.02em" }}>
                  +38%
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: "#16A34A" }} />
                  <span className="text-xs" style={{ color: "#16A34A", fontWeight: 600 }}>for partner salons</span>
                </div>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right: Content */}
          <AnimateIn direction="right" delay={0.1}>
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
                style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
              >
                <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
                  For Salon Owners
                </span>
              </div>

              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#111827",
                  letterSpacing: "-0.02em",
                }}
              >
                Grow Your Salon Business with{" "}
                <span style={{ color: "#991B1B" }}>DigiSaloon</span>
              </h2>

              <p
                className="mb-8"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                Join 150+ verified salons in Ranchi already on our waitlist. Get early access, free onboarding, and priority placement at launch.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(153,27,27,0.08)" }}
                    className="flex gap-3 p-4 rounded-xl transition-colors duration-200"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)" }}
                    >
                      <b.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#111827" }}>
                        {b.title}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280" }}>
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                id="partner"
                href="#waitlist"
                whileHover={{ y: -2, boxShadow: "0 10px 32px rgba(153,27,27,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-base"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                  boxShadow: "0 6px 24px rgba(153,27,27,0.3)",
                  textDecoration: "none",
                }}
              >
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
