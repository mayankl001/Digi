import { ArrowRight, Star, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";



function FloatingCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-2xl px-4 py-3 ${className}`}
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(153,27,27,0.12)",
        border: "1px solid rgba(232,180,184,0.3)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(160deg, #FAFAFA 0%, #FDF2F2 40%, #FEF0F0 100%)" }}
    >
      {/* Background decorative blobs */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8B4B8 0%, transparent 70%)", opacity: 0.2, translateX: "30%", translateY: "-20%" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.25, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #991B1B 0%, transparent 70%)", opacity: 0.12, translateX: "-40%", translateY: "30%" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(153,27,27,0.08)", border: "1px solid rgba(153,27,27,0.15)" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#991B1B" }} />
              <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
                Now launching in Ranchi, India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              Book Salon & Spa{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 60%, #E8B4B8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Appointments Instantly.
              </span>{" "}
              No Waiting.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "1.125rem", color: "#4B5563", lineHeight: 1.7 }}
            >
              Discover verified salons, check live availability, compare prices, and book in seconds — all in one premium app.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#waitlist"
                whileHover={{ y: -2, boxShadow: "0 10px 32px rgba(153,27,27,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-base"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                  boxShadow: "0 6px 24px rgba(153,27,27,0.35)",
                  textDecoration: "none",
                }}
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#partner"
                whileHover={{ background: "#991B1B", color: "#fff" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border text-base"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  borderColor: "#991B1B",
                  color: "#991B1B",
                  background: "rgba(153,27,27,0.04)",
                  textDecoration: "none",
                }}
              >
                Partner With Us
              </motion.a>
            </motion.div>

            

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex -space-x-2">
                {["1706943262459-3ef6ce03305c", "1533128361669-69c065857a13", "1496813146940-1601b02f81a4"].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${id}?w=40&h=40&fit=crop&auto=format`}
                    alt="Early user"
                    className="w-9 h-9 rounded-full border-2 object-cover"
                    style={{ borderColor: "#FAFAFA" }}
                  />
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs"
                  style={{ borderColor: "#FAFAFA", background: "#991B1B", color: "#fff", fontWeight: 700 }}
                >
                  +
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" style={{ color: "#F59E0B" }} />
                  ))}
                  <span className="text-sm ml-1" style={{ color: "#111827", fontWeight: 700 }}>4.9</span>
                </div>
                <p className="text-xs" style={{ color: "#6B7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  150+ early users joined
                </p>
              </div>
            </motion.div>
          </div>

          

          {/* Right: App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Subtle float animation on the phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main phone mockup */}
              <div
                className="relative p-3 rounded-[45px] shadow-2xl"
                style={{
                  background: "#111827",
                  width: 320,
                  maxWidth: "100%",
                  boxShadow:
                    "0 32px 80px rgba(153,27,27,0.25), 0 8px 32px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="/homepage.png"
                  alt="DigiSaloon App"
                  className="w-full rounded-[35px]"
                />
              </div>
            </motion.div>

            {/* Floating cards with staggered entrance */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ top: "10%", left: "-5%", zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <FloatingCard>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#FEF2F2" }}>
                      <Clock className="w-4 h-4" style={{ color: "#991B1B" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ fontWeight: 700, color: "#111827" }}>Live Slots</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>12 available now</p>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ bottom: "18%", left: "-8%", zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FloatingCard>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#F0FDF4" }}>
                      <CheckCircle className="w-4 h-4" style={{ color: "#16A34A" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ fontWeight: 700, color: "#111827" }}>Booking confirmed!</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>Looks salon</p>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{ top: "35%", right: "-5%", zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <FloatingCard>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-current" style={{ color: "#F59E0B" }} />
                    ))}
                  </div>
                  <p className="text-xs mt-1" style={{ fontWeight: 600, color: "#111827" }}>4.9 ★ Rating</p>
                </FloatingCard>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
