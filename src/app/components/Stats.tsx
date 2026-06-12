import { Users, Store, Calendar, Star } from "lucide-react";
import { StaggerChildren } from "./AnimateIn";
import { AnimateIn } from "./AnimateIn";

const stats = [
  { icon: Users,    value: "150+",   label: "Early Users",            sub: "and growing" },
  { icon: Store,    value: "50+",   label: "Verified Salons",        sub: "in Ranchi" },
  { icon: Calendar, value: "500+",  label: "Expected Bookings",      sub: "at launch" },
  { icon: Star,     value: "4.9★",   label: "Customer Satisfaction",  sub: "goal" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          stagger={0.12}
          direction="up"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 lg:p-8 text-center group transition-all duration-300 cursor-default"
              style={{
                background: "linear-gradient(160deg, #FAFAFA 0%, #FDF2F2 100%)",
                border: "1px solid rgba(153,27,27,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(153,27,27,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)" }}
              >
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div
                className="mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#991B1B", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </div>
              <div className="text-sm mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#111827" }}>
                {s.label}
              </div>
              <div className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
