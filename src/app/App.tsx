import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import { BlogPage } from "./components/BlogPage";
import { PrivacyPolicy } from "./components/PrivacyPolicy"; 
import { TermsOfService } from "./components/TermsOfService";
import { CookiePolicy } from "./components/CookiePolicy";

// ⬆️ SCROLL TO TOP HELPER COMPONENT
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 🚀 SCANNER REDIRECTION COMPONENT
function ReviewRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = location.search;
    navigate(`/${searchParams}#testimonials`, { replace: true });
  }, [navigate, location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-4 border-[#8C1D2A] border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
          Connecting to DigiSaloon Network...
        </p>
      </div>
    </div>
  );
}

// 🏢 DEDICATED PARTNER PAGE COMPONENT
function PartnerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-[#991B1B] to-red-700 py-16 flex items-center justify-center">
      <Helmet>
        <title>Partner With DigiSaloon | Grow Your Salon in Ranchi</title>
        <meta name="description" content="Register your salon or spa with DigiSaloon for zero commission early access and automated queue management in Ranchi." />
        <link rel="canonical" href="https://digisaloon.in/partner" />
      </Helmet>

      <div className="w-full max-w-3xl px-4">
        <div className="text-center text-white mb-6 space-y-2">
          <span className="text-xs font-bold bg-white/15 border border-white/25 px-3 py-1 rounded-full uppercase tracking-widest">
            Salon Partner Portal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Grow Your Salon with DigiSaloon
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto">
            Register your salon in Ranchi for zero commission early access and automated queue management.
          </p>
        </div>
        <Waitlist initialType="salon" />
      </div>
    </div>
  );
}

// Main Landing Page Component
function HomePage() {
  useEffect(() => {
    if (window.location.hash === "#testimonials") {
      const element = document.getElementById("testimonials");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>DigiSaloon | Smart Salon & Spa Booking Platform in Ranchi</title>
        <meta name="description" content="Book hair, beauty, and spa appointments at premium salons in Ranchi instantly. Compare prices and check live slots." />
        <link rel="canonical" href="https://digisaloon.in/" />

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

      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>

      <FAQ />
      <Waitlist />
    </>
  );
}

// 🛡️ LAYOUT WRAPPER TO CONTROL HEADER & FOOTER VISIBILITY
function AppContent() {
  const location = useLocation();

  // In paths par Navbar aur Footer show nahi honge
  const hideHeaderFooter = [
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy"
  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans flex flex-col justify-between">
      {!hideHeaderFooter && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* QR Scanner Router */}
          <Route path="/review" element={<ReviewRedirect />} />
          
          {/* About Us Route */}
          <Route path="/about" element={<AboutUs />} />
          
          {/* Contact Us Route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Local SEO Blog Route */}
          <Route path="/blog/top-bridal-makeup-artists-ranchi" element={<BlogPage />} />

          {/* Salon Partner Dedicated Route */}
          <Route path="/partner" element={<PartnerPage />} />

          {/* 🔒 Legal Pages Routes (Header/Footer Hidden) */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

// 📦 MAIN APPLICATION COMPONENT
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}