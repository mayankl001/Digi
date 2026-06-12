import { Star, Quote } from "lucide-react";
import { StaggerChildren } from "./AnimateIn";
import { AnimateIn } from "./AnimateIn";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    location: "Ranchi",
    rating: 5,
    review: "DigiSaloon changed the way I think about salon visits. I used to spend 30 minutes just calling around to check availability. Now I book in seconds and walk in knowing exactly what to expect. The verified salon feature is a game-changer!",
    avatar: "https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?w=80&h=80&fit=crop&auto=format",
    tag: "Early Beta User",
  },
  {
    name: "Anjali Singh",
    role: "Beauty Enthusiast",
    location: "Ranchi",
    rating: 5,
    review: "Finally, an app that understands what women in Ranchi need. The transparent pricing is everything — no more awkward surprises at the checkout. I've already referred 5 of my friends to join the waitlist!",
    avatar: "https://images.unsplash.com/photo-1533128361669-69c065857a13?w=80&h=80&fit=crop&auto=format",
    tag: "Waitlist Member",
  },
  {
    name: "Ritika Gupta",
    role: "Salon Owner",
    location: "Kanke Road, Ranchi",
    rating: 5,
    review: "As a salon owner, I've been struggling with managing bookings over WhatsApp. DigiSaloon's partner program is exactly what I needed — organized bookings, reduced no-shows, and new customers every week. Can't wait for the full launch!",
    avatar: "https://images.unsplash.com/photo-1496813146940-1601b02f81a4?w=80&h=80&fit=crop&auto=format",
    tag: "Partner Salon Owner",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn direction="up" className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              Testimonials
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
            People <span style={{ color: "#991B1B" }}>love</span> DigiSaloon
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            From early users to salon partners — here's what they're saying.
          </p>
        </AnimateIn>

        <StaggerChildren
          className="grid md:grid-cols-3 gap-6"
          stagger={0.13}
          direction="up"
          delay={0.05}
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={i !== 1 ? { y: -6, boxShadow: "0 20px 56px rgba(0,0,0,0.08)" } : {}}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: i === 1 ? "linear-gradient(160deg, #991B1B 0%, #7F1D1D 100%)" : "#FAFAFA",
                border: i === 1 ? "none" : "1px solid rgba(0,0,0,0.06)",
                boxShadow: i === 1 ? "0 24px 64px rgba(153,27,27,0.3)" : "none",
              }}
            >
              <div className="mb-4">
                <Quote className="w-6 h-6" style={{ color: i === 1 ? "rgba(255,255,255,0.4)" : "#E8B4B8" }} />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-current" style={{ color: i === 1 ? "rgba(255,255,255,0.9)" : "#F59E0B" }} />
                ))}
              </div>
              <p
                className="flex-1 mb-6 leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: i === 1 ? "rgba(255,255,255,0.88)" : "#374151", fontSize: "0.92rem", lineHeight: 1.7 }}
              >
                "{r.review}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ border: i === 1 ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E8B4B8" }}
                />
                <div>
                  <p className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: i === 1 ? "#fff" : "#111827" }}>
                    {r.name}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: i === 1 ? "rgba(255,255,255,0.65)" : "#6B7280" }}>
                    {r.role} · {r.location}
                  </p>
                </div>
                <div
                  className="ml-auto rounded-full px-2.5 py-1"
                  style={{ background: i === 1 ? "rgba(255,255,255,0.15)" : "rgba(153,27,27,0.07)" }}
                >
                  <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: i === 1 ? "rgba(255,255,255,0.85)" : "#991B1B" }}>
                    {r.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
