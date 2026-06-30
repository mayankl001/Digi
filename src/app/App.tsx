import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // 👈 SEO meta tags handle karne ke liye
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

// Main Landing Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <AppShowcase />
      <HowItWorks />
      {/* ForSalons yahan section ke roop me chalega, iska alag se duplicate page nahi banayenge */}
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
    <HelmetProvider> {/* 👈 Poori App ko wrap kiya taaki har page apna SEO Title set kar sake */}
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
            </Routes>
          </main>
          
          {/* Footer hamesha bottom par rahega */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}