import { MapPin, Star, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { AnimateIn, StaggerChildren } from "./AnimateIn";

const SALON_IMG = "https://images.unsplash.com/photo-1675034743339-0b0747047727?w=600&h=700&fit=crop&auto=format";
const SPA_IMG = "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&auto=format";

const screens = [
  {
    label: "Home Screen",
    content: (
      <div className="h-full flex flex-col" style={{ background: "#FAFAFA" }}>
        <div className="px-4 pt-4 pb-3" style={{ background: "#991B1B" }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-white text-xs opacity-75">Good morning, Priya 👋</p>
              <p className="text-white text-sm font-bold">Find your style</p>
            </div>
            <div className="w-7 h-7 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>
          <div className="rounded-lg px-3 py-1.5 flex items-center gap-2" style={{ background: "rgba(255,255,255,0.2)" }}>
            <MapPin className="w-3 h-3 text-white opacity-70" />
            <span className="text-white text-xs opacity-80">Ranchi, Jharkhand</span>
          </div>
        </div>
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          <p className="text-xs font-bold" style={{ color: "#111827" }}>Trending Near You</p>
          {["Luxe Studio", "Glow & Shine"].map((n, i) => (
            <div key={i} className="rounded-xl p-2 flex gap-2" style={{ background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
              <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ background: i === 0 ? "#FDE8E8" : "#EDE9FE" }} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate" style={{ color: "#111827" }}>{n}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-2.5 h-2.5 fill-current" style={{ color: "#F59E0B" }} />
                  <span className="text-xs" style={{ color: "#6B7280" }}>4.9 · 2.1km</span>
                </div>
              </div>
              <span className="text-xs self-end" style={{ color: "#991B1B", fontWeight: 700 }}>Book</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Salon Discovery",
    content: (
      <div className="h-full flex flex-col" style={{ background: "#FAFAFA" }}>
        <div className="px-3 pt-3 pb-2" style={{ background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-lg px-2 py-1 flex-1" style={{ background: "#F3F4F6" }}>
              <span className="text-xs" style={{ color: "#9CA3AF" }}>Search salons...</span>
            </div>
          </div>
          <div className="flex gap-2">
            {["All", "Hair", "Spa", "Nails"].map((c, i) => (
              <span key={c} className="text-xs px-2 py-1 rounded-full" style={{ background: i === 0 ? "#991B1B" : "#F3F4F6", color: i === 0 ? "#fff" : "#6B7280", fontWeight: 600 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          {[
            { name: "Luxe Beauty Studio", price: "₹299+", slots: "3 slots" },
            { name: "Radiance Spa",        price: "₹499+", slots: "1 slot"  },
            { name: "Style Hub",           price: "₹199+", slots: "5 slots" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-2.5" style={{ background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
              <div className="flex justify-between">
                <p className="text-xs font-bold" style={{ color: "#111827" }}>{s.name}</p>
                <span className="text-xs font-bold" style={{ color: "#991B1B" }}>{s.price}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-current" style={{ color: "#F59E0B" }} />
                  <span className="text-xs" style={{ color: "#6B7280" }}>4.8</span>
                </div>
                <span className="text-xs" style={{ color: "#16A34A", fontWeight: 600 }}>{s.slots}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Booking Screen",
    content: (
      <div className="h-full flex flex-col" style={{ background: "#FAFAFA" }}>
        <div className="px-3 pt-3 pb-2" style={{ background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#111827" }} />
            <p className="text-sm font-bold" style={{ color: "#111827" }}>Book Appointment</p>
          </div>
        </div>
        <div className="flex-1 p-3 space-y-3 overflow-hidden">
          <div className="rounded-xl p-3" style={{ background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "#111827" }}>Select Service</p>
            {["Haircut & Style — ₹299", "Facial — ₹499"].map((s, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 rounded-lg px-2 mt-1"
                style={{ background: i === 0 ? "#FEF2F2" : "transparent", border: i === 0 ? "1px solid rgba(153,27,27,0.2)" : "none" }}
              >
                <div className="w-3 h-3 rounded-full border-2 flex items-center justify-center" style={{ borderColor: i === 0 ? "#991B1B" : "#D1D5DB" }}>
                  {i === 0 && <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#991B1B" }} />}
                </div>
                <span className="text-xs" style={{ color: i === 0 ? "#991B1B" : "#6B7280", fontWeight: i === 0 ? 600 : 400 }}>{s}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3" style={{ background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
            <p className="text-xs font-bold mb-2" style={{ color: "#111827" }}>Pick Time Slot</p>
            <div className="grid grid-cols-3 gap-1">
              {["10:00", "11:30", "2:00", "3:30", "4:00", "5:30"].map((t, i) => (
                <div key={t} className="text-center py-1 rounded-lg text-xs"
                  style={{ background: i === 1 ? "#991B1B" : "#F3F4F6", color: i === 1 ? "#fff" : "#374151", fontWeight: i === 1 ? 700 : 400 }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full py-2.5 rounded-xl text-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)" }}
          >
            Confirm Booking
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Booking Confirmed",
    content: (
      <div className="h-full flex flex-col items-center justify-center p-4" style={{ background: "#FAFAFA" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)" }}
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <p className="text-base font-bold text-center mb-1" style={{ color: "#111827" }}>Booking Confirmed!</p>
        <p className="text-xs text-center mb-4" style={{ color: "#6B7280" }}>Your appointment is all set</p>
        <div className="w-full rounded-2xl p-4" style={{ background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
          {[["Salon","Luxe Beauty Studio"], ["Service","Haircut & Style"], ["Date & Time","Today, 11:30 AM"], ["Amount","₹299"]].map(([k, v], i) => (
            <div key={k} className={`flex justify-between ${i < 3 ? "mb-2" : ""}`}>
              <span className="text-xs" style={{ color: "#6B7280" }}>{k}</span>
              <span className="text-xs font-bold" style={{ color: i === 3 ? "#991B1B" : "#111827" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 w-full py-2 rounded-xl text-center text-xs font-bold" style={{ background: "#FEF2F2", color: "#991B1B" }}>
          Add to Calendar →
        </div>
      </div>
    ),
  },
];

export function AppShowcase() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(160deg, #FDF2F2 0%, #FAFAFA 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn direction="up" className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              App Preview
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
            Beautiful experience,{" "}
            <span style={{ color: "#991B1B" }}>every screen</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Designed to be effortless. From discovery to confirmed booking in under a minute.
          </p>
        </AnimateIn>

        <StaggerChildren
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 justify-items-center"
          stagger={0.13}
          direction="up"
          delay={0.05}
        >
          {screens.map((screen, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  width: 160,
                  height: 300,
                  background: "#111827",
                  border: "5px solid #1F2937",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.2), 0 4px 16px rgba(153,27,27,0.1)",
                }}
              >
                <div className="h-full overflow-hidden" style={{ background: "#FAFAFA" }}>
                  {screen.content}
                </div>
              </div>
              <p
                className="mt-4 text-sm text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#374151" }}
              >
                {screen.label}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
