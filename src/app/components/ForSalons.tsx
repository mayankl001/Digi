import { TrendingUp, Eye, CalendarRange, IndianRupee, ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion } from "motion/react";

const SALON_IMG = "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=600&h=500&fit=crop&auto=format";

const benefits = [
  { icon: TrendingUp,    title: "More Customers",           desc: "Get discovered by thousands of local customers actively looking to book beauty services." },
  { icon: Eye,           title: "Better Visibility",        desc: "Premium placement in search results, curated collections, and exclusive featured listings." },
  { icon: CalendarRange, title: "Smart Booking Management",  desc: "Manage your calendar, reduce no-shows with automated reminders, and optimize your schedule." },
  { icon: IndianRupee,   title: "Higher Revenue",            desc: "Fill empty slots, upsell services, and grow revenue with targeted promotions and loyalty programs." },
];

export function ForSalons() {
  return (
    <section id="for-salons" className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Premium Image Mockup Layout */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[420px] shadow-[0_32px_80px_rgba(0,0,0,0.12)] relative">
                <img src={SALON_IMG} alt="Salon interior" className="w-full h-full object-cover" />
                {/* Visual Depth Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#991B1B]/40 to-transparent rounded-3xl" />
              </div>

              {/* Floating Metric Entry Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-4 lg:right-8 rounded-2xl p-5 bg-white border border-red-200/30 shadow-[0_16px_48px_rgba(153,27,27,0.14)] min-w-[180px] font-sans group hover:border-[#991B1B]/20 transition-colors duration-300"
              >
                <p className="text-xs font-medium text-gray-500 mb-1">
                  Avg. monthly growth
                </p>
                <p className="text-3xl font-extrabold text-[#991B1B] tracking-tight">
                  +38%
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-xs font-semibold text-emerald-600">for partner salons</span>
                </div>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right Side: High-Conversion Content Copy */}
          <AnimateIn direction="right" delay={0.1} className="font-sans">
            <div>
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 bg-[#991B1B]/10 border border-[#991B1B]/15">
                <span className="text-sm font-semibold text-[#991B1B]">
                  For Salon Owners
                </span>
              </div>

              {/* Header Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-5">
                Grow Your Salon Business with{" "}
                <span className="text-[#991B1B]">DigiSaloon</span>
              </h2> 

              <p className="text-base text-[#6B7280] leading-relaxed mb-8">
                Join 150+ verified salons in Ranchi already on our waitlist. Get early access, free onboarding, and priority placement at launch.
              </p>

              {/* Benefits Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:-translate-y-1 hover:border-[#991B1B]/15 hover:shadow-[0_8px_24px_rgba(153,27,27,0.06)] transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#991B1B] to-[#B91C1C] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <b.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#111827] mb-0.5">
                        {b.title}
                      </p>
                      <p className="text-xs text-[#6B7280] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* B2B CTA Primary Button */}
              <a
                id="partner"
                href="#waitlist"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-base font-bold bg-gradient-to-br from-[#991B1B] to-[#B91C1C] shadow-[0_6px_24px_rgba(153,27,27,0.25)] hover:shadow-[0_12px_32px_rgba(153,27,27,0.38)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 no-underline group"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
            </div>
          </AnimateIn>
          
        </div>
      </div>
    </section>
  );
}