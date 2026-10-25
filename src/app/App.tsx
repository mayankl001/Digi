import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUp } from "lucide-react";

// Critical layout & landing page components (Eagerly Loaded)
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

// 🚀 LAZY LOADED COMPONENTS (Bundle size reduce karne ke liye)
const AboutUs = lazy(() => import("./components/AboutUs").then((m) => ({ default: m.AboutUs })));
const ContactPage = lazy(() => import("./components/Contact").then((m) => ({ default: m.ContactPage })));
const BlogPage = lazy(() => import("./components/BlogPage").then((m) => ({ default: m.BlogPage })));
const PolicyHub = lazy(() => import("./components/PolicyHub").then((m) => ({ default: m.PolicyHub })));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import("./components/TermsOfService").then((m) => ({ default: m.TermsOfService })));
const CookiePolicy = lazy(() => import("./components/CookiePolicy").then((m) => ({ default: m.CookiePolicy })));

// ⬆️ ROUTE CHANGE SCROLL TO TOP HELPER
function RouteScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 🔝 FLOATING 'SCROLL TO TOP' BUTTON COMPONENT
function FloatingScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPos =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollPos > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[9990] flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#991B1B] text-white shadow-lg shadow-[#991B1B]/30 hover:bg-[#7f1616] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#991B1B] focus:ring-offset-2"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
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

      <div className="w-full max-w-2xl px-4 text-center text-white space-y-6">
        <span className="text-xs font-bold bg-white/15 border border-white/25 px-3 py-1 rounded-full uppercase tracking-widest">
          Salon Partner Portal
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Grow Your Salon with DigiSaloon
        </h1>
        <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Our partner onboarding app is now live for salons in Ranchi. Register your business directly through our vendor app or get in touch with our team.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:support@digisaloon.in"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 font-bold transition-all shadow-lg"
          >
            Contact Partner Team
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=in.digisaloon.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-red-900 bg-white hover:bg-gray-100 font-bold transition-all shadow-lg"
          >
            Download Partner App
          </a>
        </div>
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

  const hideHeaderFooter = location.pathname.startsWith("/policy") || [
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy"
  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans flex flex-col justify-between relative">
      {!hideHeaderFooter && <Navbar />}
      
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/review" element={<ReviewRedirect />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog/top-bridal-makeup-artists-ranchi" element={<BlogPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/policy/:policyType" element={<PolicyHub />} />
            <Route path="/policy" element={<PolicyHub />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>
      </main>
      
      {!hideHeaderFooter && <Footer />}

      {/* Floating Scroll To Top Button */}
      <FloatingScrollToTop />
    </div>
  );
}

// 📦 MAIN APPLICATION COMPONENT
export default function App() {
  return (
    <Router>
      <RouteScrollToTop />
      <AppContent />
    </Router>
  );
}