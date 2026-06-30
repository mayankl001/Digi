import React from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowRight } from "lucide-react";

export function BlogPage() {
  return (
    <>
      {/* 🌐 SPECIFIC BLOG SEO TARGETING */}
      <Helmet>
        <title>Top 10 Bridal Makeup Artists in Ranchi (2026) | DigiSaloon</title>
        <meta 
          name="description" 
          content="Looking for the best bridal makeup in Ranchi? Check out the top 10 verified artists in Lalpur, Kanke Road, and Doranda with price comparison and live booking." 
        />
        <link rel="canonical" href="https://digisaloon.in/blog/top-bridal-makeup-artists-ranchi" />
      </Helmet>

      <div className="min-h-screen bg-[#FAFAFA] pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          
          {/* Blog Meta */}
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            <span className="bg-[#991B1B]/10 text-[#991B1B] px-3 py-1 rounded-full">Bridal Guide</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>June 2026</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Top 10 Bridal Makeup Artists in Ranchi with Price Comparison
          </h1>
          
          {/* Introduction */}
          <p className="text-base text-[#6B7280] mt-6 leading-relaxed">
            Shaadi ka season aate hi Ranchi me sabse badi tension hoti hai ek perfect makeup artist dhoondna. Agar aap Lalpur, Kanke Road ya Doranda me best bridal glow dhoond rahe hain, toh humne aapke liye Ranchi ke top 10 verified artists ki list unke real prices ke sath taiyar ki hai.
          </p>

          <hr className="my-8 border-gray-100" />

          {/* Dummy Artist Section - Yeh content loop hoga ya static likha jayega */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200/60">
              <h3 className="text-xl font-bold text-[#111827]">1. Studio Glow by Priya (Lalpur, Ranchi)</h3>
              <p className="text-sm text-gray-500 mt-1">Estimated Cost: ₹15,000 - ₹25,000</p>
              <p className="text-sm text-[#6B7280] mt-3 leading-relaxed">
                Priya is famous for HD Makeup and Airbrush bridal packages in Ranchi. Her studio in Lalpur has top-rated reviews for premium bridal services.
              </p>
              
              {/* 🔥 THE CONVERSION CALL TO ACTION BUTTON */}
              <a 
                href="/#waitlist" 
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#991B1B] hover:underline"
              >
                <span>Check Live Availability & Book Instantly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}