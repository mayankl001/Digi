import { Sparkles } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion } from "framer-motion";

export function AppDownload() {
  return (
    <section
      id="download"
      className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-red-950 via-[#991B1B] to-red-700 font-sans"
    >
      {/* Ambient Animated Background Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none translate-x-[30%] -translate-y-[30%]"
        style={{ background: "radial-gradient(circle, rgba(232,180,184,0.22) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none -translate-x-[40%] translate-y-[40%]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimateIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 bg-white/15 border border-white/25 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span className="text-sm text-white font-semibold">DigiSaloon is Live Now!</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Experience Luxury Salon Bookings Today
          </h2>
          
          <p className="mb-10 max-w-xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
            Download the DigiSaloon app now to discover top salons in Ranchi, skip waiting lines, and book your appointments instantly.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Google Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=in.digisaloon.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-[0.97] transition-all duration-200 no-underline"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.36 1.36 0 0 1-.61-.1.97.97 0 0 1-.5-.87V2.784a.97.97 0 0 1 .5-.87 1.36 1.36 0 0 1 .61-.1zM15.208 13.416l2.187 2.187-11.455 6.62a1.05 1.05 0 0 1-1.05 0l10.318-8.807zM17.395 11.23l2.187 2.187-2.187 2.187L15.208 13.416l2.187-2.187zM5.89 2.784l11.455 6.62-2.187 2.187L3.73 3.65a1.05 1.05 0 0 1 1.05 0l1.11-.866z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Get it on</p>
                <p className="text-base font-bold text-white -mt-0.5">Google Play</p>
              </div>
            </a>

            {/* Apple App Store Button */}
            <a
              href="https://apps.apple.com/app/digisaloon/id..."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-[0.97] transition-all duration-200 no-underline"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.67-.82 1.12-1.96.99-3.1-0.97.04-2.16.65-2.85 1.47-.62.72-1.16 1.88-1 3.01 1.09.08 2.19-.58 2.86-1.38z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Download on the</p>
                <p className="text-base font-bold text-white -mt-0.5">App Store</p>
              </div>
            </a>

          </div>
        </AnimateIn>
      </div>
    </section>
  );
}