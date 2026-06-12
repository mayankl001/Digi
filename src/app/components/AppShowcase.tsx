import { MapPin, Star, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { AnimateIn, StaggerChildren } from "./AnimateIn";

const SALON_IMG = "https://images.unsplash.com/photo-1675034743339-0b0747047727?w=600&h=700&fit=crop&auto=format";
const SPA_IMG = "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&auto=format";
const HOME_SCREEN = "/homepage.png";
const SALON_DISCOVERY = "/salondiscovery.jpeg";
const BOOKING_SCREEN = "/bookingscreen.jpeg";
const BOOKING_CONFIRMED = "/bookingconfirm.jpeg";
const TRACKING_SCREEN = "/trackingscreen.jpeg";

const screens = [
  {
    label: "Home Screen",
    content: (
      <div className="h-full flex items-center justify-center overflow-hidden">
        <img src={HOME_SCREEN} alt="Home Screen" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    label: "Salon Discovery",
    content: (
      <div className="h-full flex items-center justify-center overflow-hidden">
        <img src={SALON_DISCOVERY} alt="Salon Discovery" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    label: "Booking Screen",
    content: (
      <div className="h-full flex items-center justify-center overflow-hidden">
        <img src={BOOKING_SCREEN} alt="Booking Screen" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    label: "Booking Confirmed",
    content: (
      <div className="h-full flex items-center justify-center overflow-hidden">
        <img src={BOOKING_CONFIRMED} alt="Booking Confirmed" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    label: "Tracking screen",
    content: (
      <div className="h-full flex items-center justify-center overflow-hidden">
        <img src={TRACKING_SCREEN} alt="Booking Confirmed" className="w-full h-full object-cover" />
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
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center"
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
