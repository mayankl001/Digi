import React from "react";
import { ArrowRight, Star, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 👈 Step 1 ke liye helmet import kiya

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
}

function FloatingCard({ children, className = "" }: FloatingCardProps) {
  return (
    <div
      className={`absolute rounded-2xl px-4 py-3 bg-white/92 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(153,27,27,0.12)] border border-[#E8B4B8]/30 ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <>
      {/* 🌐 TECHNICAL SEO HEAD INJECTION START */}
      <Helmet>
        <title>DigiSaloon | Best Salon & Spa Booking Platform in Ranchi</title>
        <meta 
          name="description" 
          content="Book top hair, luxury beauty, and spa appointments at premium salons in Ranchi instantly. Compare prices, check live slot availability, and enjoy effortless bookings with DigiSaloon." 
        />
        <link rel="canonical" href="https://digisaloon.in/" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DigiSaloon | Smart Salon & Spa Booking Platform in Ranchi" />
        <meta property="og:description" content="Discover verified premium salons in Ranchi, compare pricing, and book your styling slots instantly." />
        <meta property="og:image" content="https://digisaloon.in/og-image.png" />
        <meta property="og:url" content="https://digisaloon.in/" />

        {/* Twitter Share Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigiSaloon | Premium Salon Experience in Ranchi" />
        <meta name="twitter:description" content="Skip the salon queues. Book trusted salon and spa treatments instantly across Ranchi in just a few taps." />
        <meta name="twitter:image" content="https://digisaloon.in/og-image.png" />
      </Helmet>
      {/* 🌐 TECHNICAL SEO HEAD INJECTION END */}

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[#FAFAFA] via-[#FDF2F2] to-[#FEF0F0]">
        
        {/* Background decorative blobs */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,#E8B4B8_0%,transparent_70%)] opacity-20 translate-x-[30%] -translate-y-[20%]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.25, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,#991B1B_0%,transparent_70%)] opacity-12 -translate-x-[40%] translate-y-[30%]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="relative z-10 font-sans">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-[#991B1B]/10 border border-[#991B1B]/15"
              >
                <div className="w-2 h-2 rounded-full animate-pulse bg-[#991B1B]" />
                <span className="text-sm font-semibold text-[#991B1B]">
                  Premium Salon Experience
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight mb-6"
              >
                Book Salon & Spa{" "}
                <span className="bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#E8B4B8] bg-clip-text text-transparent">
                  Appointments Instantly
                </span>{" "}
                in Ranchi.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-[#4B5563] leading-relaxed mb-8 max-w-xl"
              >
                Discover verified salons in Ranchi, check live availability, compare prices, and book your styling session in seconds.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link
                  to="/#waitlist"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-base font-bold bg-gradient-to-r from-[#991B1B] to-[#B91C1C] shadow-[0_6px_24px_rgba(153,27,27,0.35)] hover:shadow-[0_10px_32px_rgba(153,27,27,0.45)] hover:-translateY-0.5 active:scale-[0.97] transition-all duration-200 no-underline"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  to="/#waitlist"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#991B1B] text-base font-semibold text-[#991B1B] bg-[#991B1B]/5 hover:bg-[#991B1B] hover:text-white active:scale-[0.97] transition-all duration-200 no-underline"
                >
                  Partner With Us
                </Link>
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
                      alt="DigiSaloon Early User"
                      className="w-9 h-9 rounded-full border-2 border-[#FAFAFA] object-cover"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-[#FAFAFA] flex items-center justify-center text-xs bg-[#991B1B] text-white font-bold">
                    +
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                    <span className="text-sm ml-1 font-bold text-[#111827]">4.9</span>
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    150+ Ranchi salon partners & users joined
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main phone mockup */}
                <div className="relative p-3 rounded-[45px] bg-[#111827] w-[320px] max-w-full shadow-[0_32px_80px_rgba(153,27,27,0.25),0_8px_32px_rgba(0,0,0,0.2)]">
                  <img
                    src="/homepage.png"
                    alt="DigiSaloon App Interface - Best Salon App in Ranchi"
                    className="w-full rounded-[35px]"
                  />
                </div>
              </motion.div>

              {/* Floating cards */}
              <FloatingCard className="top-[10%] left-[-5%] z-10">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FEF2F2]">
                    <Clock className="w-4 h-4 text-[#991B1B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111827]">Live Slots</p>
                    <p className="text-xs text-[#6B7280]">11 available now</p>
                  </div>
                </motion.div>
              </FloatingCard>

              <FloatingCard className="bottom-[18%] left-[-8%] z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F0FDF4]">
                    <CheckCircle className="w-4 h-4 text-[#16A34A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111827]">Booking confirmed!</p>
                    <p className="text-xs text-[#6B7280]">Looks salon</p>
                  </div>
                </motion.div>
              </FloatingCard>

              <FloatingCard className="top-[35%] right-[-5%] z-10">
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs mt-1 font-semibold text-[#111827]">4.9 ★ Rating</p>
                </motion.div>
              </FloatingCard>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}