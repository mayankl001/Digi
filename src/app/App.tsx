import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { ContactPage } from "./components/Contact"; // 👈 Naya Contact page import kiya

// Main Landing Page Component (Yahan saare home sections ek sath hain)
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <ForSalons />
      <Testimonials />
      <FAQ />
      <Waitlist />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div
        className="min-h-screen"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFAFA" }}
      >
        {/* Navbar hamesha top par rahega har page me */}
        <Navbar />
        
        {/* URL ke hisab se sahi page dikhane ke liye Routes */}
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Dedicated About Us Page Route */}
          <Route path="/about" element={<AboutUs />} />
          
          {/* Dedicated For Salons Page Route */}
          <Route path="/for-salons" element={<ForSalons />} />

          {/* Dedicated Contact Us Page Route */}
          <Route path="/contact" element={<ContactPage />} /> {/* 👈 Naya Contact Route add kiya */}
        </Routes>
        
        {/* Footer hamesha bottom par rahega har page me */}
        <Footer />
      </div>
    </Router>
  );
}