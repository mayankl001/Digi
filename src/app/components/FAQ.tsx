import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  { q: "When will DigiSaloon officially launch in Ranchi?", a: "We're currently in our pre-launch phase and expect to go live in Ranchi by Q3 2026. Join our waitlist to be among the first to get access and receive exclusive early-bird benefits." },
  { q: "Is DigiSaloon free to use for customers?", a: "Absolutely! Downloading and using DigiSaloon is completely free for customers. You can discover salons, browse services, check availability, and book appointments at zero cost." },
  { q: "How does DigiSaloon verify its salon partners?", a: "Every salon goes through a rigorous verification process — including license checks, physical inspection, hygiene standards review, and staff credential verification — before being listed on the platform." },
  { q: "Can I cancel or reschedule my appointment?", a: "Yes! You can cancel or reschedule your appointment up to 2 hours before the scheduled time through the app — free of charge. Last-minute cancellations may incur a small fee depending on the salon's policy." },
  { q: "What payment methods are supported?", a: "DigiSaloon supports all major payment methods including UPI (PhonePe, GPay, Paytm), debit/credit cards, net banking, and cash payment at the salon. Your payment data is 100% secure and encrypted." },
  { q: "How do I become a salon partner?", a: "Click 'Become a Partner' or 'Partner With Us' anywhere on the page, fill in your salon details, and our team will reach out within 24 hours for onboarding. Early partners get priority placement, free listing, and dedicated support." },
  { q: "What services can I book on DigiSaloon?", a: "From haircuts, coloring, and styling to facials, massages, manicures, pedicures, waxing, and bridal packages — DigiSaloon covers the full spectrum of beauty and wellness services." },
  { q: "Is my personal data safe with DigiSaloon?", a: "Yes. We take data privacy extremely seriously. Your personal information is encrypted, never sold to third parties, and protected under our comprehensive privacy policy. We comply with all applicable Indian data protection laws." },
  { q: "Will DigiSaloon expand beyond Ranchi?", a: "Ranchi is our launch city, and we plan to expand to other Tier-2 cities across Jharkhand and India in the next 12–18 months. If you're from another city, join the waitlist and we'll notify you when we reach your area." },
  { q: "What happens after I join the waitlist?", a: "You'll receive an instant confirmation email with your waitlist position. As a waitlist member, you'll get early access to the app, exclusive launch offers, priority booking privileges, and a chance to be a founding member of the DigiSaloon community." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAFAFA] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#991B1B]/5 border border-[#991B1B]/12">
            <span className="text-sm font-semibold text-[#991B1B]">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Frequently asked <span className="text-[#991B1B]">questions</span>
          </h2>
        </AnimateIn>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <AnimateIn key={i} direction="up" delay={i * 0.03}>
                <div
                  className={`rounded-2xl overflow-hidden bg-white border transition-all duration-300 ${
                    isOpen 
                      ? "border-[#991B1B]/25 shadow-[0_8px_32px_rgba(153,27,27,0.06)]" 
                      : "border-gray-200/60 shadow-none hover:border-gray-300"
                  }`}
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${i}`}
                    className="w-full text-left flex items-center justify-between px-6 py-5 gap-4 group focus:outline-none"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold leading-relaxed transition-colors duration-200 ${
                        isOpen ? "text-[#991B1B]" : "text-[#111827] group-hover:text-black"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-[#991B1B]" : "text-gray-400 group-hover:text-gray-600"}`} />
                    </motion.div>
                  </button>

                  {/* Collapsible Content Wrapper */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${i}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-3 text-sm sm:text-[0.95rem] text-[#6B7280] leading-relaxed border-t border-[#991B1B]/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}