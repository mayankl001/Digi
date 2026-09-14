import { AnimateIn, StaggerChildren } from "./AnimateIn";

const HOME_SCREEN = "/app1.jpeg";
const SALON_DISCOVERY = "/app2.jpeg";
const BOOKING_SCREEN = "/app3.jpeg";
const BOOKING_CONFIRMED = "/app4.jpeg";
const TRACKING_SCREEN = "/app5.jpeg";

const screens = [
  {
    label: "Home Screen",
    content: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white">
        <img src={HOME_SCREEN} alt="Home Screen" className="w-full h-full object-fill" />
      </div>
    ),
  },
  {
    label: "Salon Discovery",
    content: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white">
        <img src={SALON_DISCOVERY} alt="Salon Discovery" className="w-full h-full object-fill" />
      </div>
    ),
  },
  {
    label: "Booking Screen",
    content: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white">
        <img src={BOOKING_SCREEN} alt="Booking Screen" className="w-full h-full object-fill" />
      </div>
    ),
  },
  {
    label: "Booking Confirmed",
    content: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white">
        <img src={BOOKING_CONFIRMED} alt="Booking Confirmed" className="w-full h-full object-fill" />
      </div>
    ),
  },
  {
    label: "Tracking Screen",
    content: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden bg-white">
        <img src={TRACKING_SCREEN} alt="Tracking Screen" className="w-full h-full object-fill" />
      </div>
    ),
  },
];

export function AppShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#FDF2F2] to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#991B1B]/10 border border-[#991B1B]/15">
            <span className="text-sm font-semibold text-[#991B1B] font-sans">
              App Preview
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight font-sans">
            Beautiful experience,{" "}
            <span className="text-[#991B1B]">every screen</span>
          </h2>
          
          <p className="mt-4 max-w-lg mx-auto text-base text-[#6B7280] leading-relaxed font-sans">
            Designed to be effortless. From discovery to confirmed booking in under a minute.
          </p>
        </AnimateIn>

        {/* Showcase Grid */}
        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-items-center font-sans"
          stagger={0.13}
          direction="up"
          delay={0.05}
        >
          {screens.map((screen, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              
              {/* Black Phone Bezel Container */}
              <div className="relative w-[170px] h-[350px] sm:w-[190px] sm:h-[390px] rounded-[1.5rem] overflow-hidden border-[7px] border-slate-950 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.15),0_4px_16px_rgba(153,27,27,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(153,27,27,0.2)]">
                
                {/* Subtle Top Camera Notch Simulation */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-950 rounded-b-lg z-20 flex items-center justify-center">
                  <div className="w-6 h-1 bg-slate-800 rounded-full" />
                </div>
                
                {/* App Screen Content Wrapper */}
                <div className="h-full w-full overflow-hidden bg-white rounded-[1rem] relative z-10">
                  {screen.content}
                </div>
              </div>
              
              {/* Dynamic Text Label */}
              <p className="mt-4 text-sm font-bold text-gray-700 group-hover:text-[#991B1B] transition-colors duration-300 text-center">
                {screen.label}
              </p>
              
            </div>
          ))}
        </StaggerChildren>
        
      </div>
    </section>
  );
}