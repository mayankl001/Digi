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

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFAFA" }}
    >
      <Navbar />
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
      <Footer />
    </div>
  );
}
