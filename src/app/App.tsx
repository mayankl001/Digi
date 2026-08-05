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

// ⬆️ SCROLL TO TOP HELPER COMPONENT (Page change hone par top par le jayega)
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

// 📦 MAIN APPLICATION COMPONENT
export default function App() {
  return (
    <Router>
      {/* 👈 ScrollToTop component har route change par top par bhej dega */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#FAFAFA] font-sans">
        <Navbar />
        
        <main>
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

            {/* 🔒 Legal Pages Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}