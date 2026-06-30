import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// Main Landing Page Component
function HomePage() {
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
      <Testimonials />
      <FAQ />
      <Waitlist />
    </>
  );
}

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