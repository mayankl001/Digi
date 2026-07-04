import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 👈 Schema markup inject karne ke liye
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { ProblemSolution } from "./components/ProblemSolution";
import { Features } from "./components/Features";
import { AppShowcase } from "./components/AppShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { ForSalons } from "./components/ForSalons";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs"; 
import { ContactPage } from "./components/Contact";
import { BlogPage } from "./components/BlogPage.tsx";

// 🚀 SCANNER REDIRECTION COMPONENT
// Jab customer salon me QR code scan karega, toh yeh component handle karega
function ReviewRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // URL se query parameters (salon_id, name) ko parse karega
    const searchParams = location.search;
    
    // Seedhe home page par bhejega query parameters aur #testimonials hash ke sath
    navigate(`/${searchParams}#testimonials`, { replace: true });
  }, [navigate, location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="text-center space-y-3">
        {/* Fixed: JSX Comment Formatted Properly */}
        <div className="w-8 h-8 border-4 border-[#8C1D2A] border-t-transparent rounded-full animate-spin mx-auto"></div>
        {/* Fixed: Changed 'class' to 'className' */}
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
          Connecting to DigiSaloon Network...
        </p>
      </div>
    </div>
  );
}

// Main Landing Page Component
function HomePage() {
  useEffect(() => {
    // Agar URL me #testimonials ka hash laga hai, toh smoothly scroll karega niche
    if (window.location.hash === "#testimonials") {
      const element = document.getElementById("testimonials");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400); // 400ms delay taaki page completely render ho jaye pehle
      }
    }
  }, []);

  return (
    <>
      {/* 🌐 GOOGLE DECODER: HOMEPAGE SCHEMA MARKUP */}
      <Helmet>
        <title>DigiSaloon | Smart Salon & Spa Booking Platform in Ranchi</title>
        <meta name="description" content="Book hair, beauty, and spa appointments at premium salons in Ranchi instantly. Compare prices and check live slots." />
        <link rel="canonical" href="https://digisaloon.in/" />

        {/* JSON-LD Schema: Google Search me Stars aur Ratings lane ke liye */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DigiSaloon",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "description": "Smart salon and spa appointment booking platform in Ranchi with live slot availability and transparent pricing.",
            "url": "https://digisaloon.in",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "120",
              "bestRating": "5",
              "worstRating": "1"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "DigiSaloon India",
              "image": "https://digisaloon.in/og-image.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lalpur, Ranchi",
                "addressRegion": "Jharkhand",
                "addressCountry": "IN"
              },
              "priceRange": "₹₹"
            }
          })}
        </script>
      </Helmet>

      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <div id="for-salons">
        <ForSalons />
      </div>

      {/* 🎯 ID Wrapper taaki scanner direct isi section par customer ko le aaye */}
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>

      <FAQ />
      <Waitlist />
    </>
  );
}

// 📦 MAIN APPLICATION COMPONENT
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA] font-sans">
        {/* Navbar hamesha top par rahega */}
        <Navbar />
        
        {/* Main Content Area: Semantic SEO ke liye <main> tag lagana zaroori hai */}
        <main>
          <Routes>
            {/* Main Home Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* 🔥 NEW QR SCANNER ROUTER */}
            <Route path="/review" element={<ReviewRedirect />} />
            
            {/* Dedicated About Us Page Route */}
            <Route path="/about" element={<AboutUs />} />
            
            {/* Dedicated Contact Us Page Route */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 🔥 High-Value Local SEO Blog Route */}
            <Route path="/blog/top-bridal-makeup-artists-ranchi" element={<BlogPage />} />
          </Routes>
        </main>
        
        {/* Footer hamesha bottom par rahega */}
        <Footer />
      </div>
    </Router>
  );
}