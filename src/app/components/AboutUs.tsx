import React from "react";
import { Scissors, Target, Users, Sparkles, ShieldCheck, Heart, Award } from "lucide-react";

export function AboutUs() {
  return (
    <div className="min-h-screen text-[#111827] bg-[#FAFAFA] font-sans overflow-hidden">
      
      {/* Hero Section (Soft Light Gradient) */}
      <section 
        className="relative py-24 lg:py-32 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, rgba(153, 27, 27, 0.05) 0%, #FAFAFA 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(153, 27, 27, 0.06)", border: "1px solid rgba(153, 27, 27, 0.15)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#991B1B]" />
            <span className="text-sm font-semibold text-[#991B1B]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              About Us
            </span>
          </div>

          <h1 
            className="mb-6 tracking-tight text-[#111827]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1
            }}
          >
            Redefining Salon Booking <br />
            <span className="text-[#991B1B]">
              For The Modern Era
            </span>
          </h1>

          <p 
            className="text-base md:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            DigiSaloon is Ranchi's upcoming premium smart salon platform. We are bridging the gap between luxury grooming and effortless technology.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision (Clean White Cards) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 border border-red-100">
              <Target className="w-6 h-6 text-[#991B1B]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Mission</h3>
            <p className="text-[#4B5563] leading-relaxed text-sm md:text-base">
              To empower users with a transparent, real-time, and zero-wait salon booking experience. We want to eliminate the traditional hassle of standing in lines, giving you complete control over your time and style.
            </p>
          </div>

          <div 
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 border border-red-100">
              <Award className="w-6 h-6 text-[#991B1B]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Vision</h3>
            <p className="text-[#4B5563] leading-relaxed text-sm md:text-base">
              To become India's leading tech partner for the salon and wellness industry, starting right from Ranchi. We aim to help local salon owners digitize their business, maximize revenue, and deliver premium service to every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Core Values */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What Drives Us
            </h2>
            <p className="text-[#6B7280] max-w-lg mx-auto text-sm md:text-base">
              The core principles that shape the luxury experience we deliver to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "100% Trust", desc: "Verified salon partners, authentic reviews, and completely upfront, transparent pricing." },
              { icon: Sparkles, title: "Luxury Experience", desc: "Handpicked premium partners to ensure you get the high-end grooming you deserve." },
              { icon: Users, title: "Community First", desc: "Built with love for the people and local businesses of Ranchi." },
              { icon: Heart, title: "Effortless Ease", desc: "Book in under 30 seconds with instant confirmations and zero cancellation drama." }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl border border-gray-50 text-center bg-[#FAFAFA] transition-all duration-200 hover:bg-white hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4 border border-red-100">
                  <value.icon className="w-5 h-5 text-[#991B1B]" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{value.title}</h4>
                <p className="text-[#6B7280] text-xs md:text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Banner (Contrast Section matching Home page buttons) */}
      <section className="py-20 text-center max-w-5xl mx-auto px-4">
        <div 
          className="p-8 md:p-12 rounded-3xl relative overflow-hidden text-white"
          style={{ 
            background: "linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)",
            boxShadow: "0 10px 30px rgba(153, 27, 27, 0.2)"
          }}
        >
          <Scissors className="w-12 h-12 text-white/10 absolute -top-4 -left-4 rotate-45 pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            The Momentum is Already Here
          </h3>
          <p className="text-red-100 max-w-xl mx-auto mb-8 text-sm md:text-base">
            We haven't even officially launched yet, and the numbers speak for themselves. Ranchi is ready for the revolution!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">150+</div>
              <div className="text-xs md:text-sm text-red-200 mt-1">Early Users Registered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">50+</div>
              <div className="text-xs md:text-sm text-red-200 mt-1">Salon Partners Live</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-extrabold text-white">1st</div>
              <div className="text-xs md:text-sm text-red-200 mt-1">Smart Platform in Ranchi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}