import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  { q: "What is DigiSaloon?", a: "DigiSaloon is a salon booking platform that helps you discover salons, explore services and prices, check available slots, and book appointments easily." },
  { q: "How can I book an appointment?", a: "Simply select your preferred salon, choose a service, select an available date and time, and confirm your booking through DigiSaloon." },
  { q: "Can I book an appointment for now or schedule it for later?", a: "Yes. DigiSaloon offers both Live Booking and Schedule Booking. You can book an available salon slot for immediate service through Live Booking or select a future date and time through Schedule Booking, depending on the salon's availability." },
  { q: "Can I choose the salon and service I want?", a: "Yes. You can browse available salons and select the services that best suit your requirements." },
  { q: "Can I pay online or at the salon?", a: "Yes. Depending on the salon and booking, you can either pay online during booking or choose the Pay at Salon option." },
  { q: "Can I cancel my appointment?", a: "Yes. You can cancel eligible bookings from the app. Applicable cancellation charges and refunds are based on DigiSaloon's Cancellation & Refund Policy." },
  { q: "What happens if the salon cancels my booking?", a: "If a salon cancels your confirmed booking, you are eligible for a 100% refund, subject to the applicable refund process." },
  { q: "Can I reschedule my appointment?", a: "Rescheduling may be available depending on the salon's availability and the booking conditions. You can check available options from your booking details." },
  { q: "Can I rate and review a salon?", a: "Yes. Customers can rate and review a salon after completing an eligible booking." },
  { q: "Are the salons on DigiSaloon verified?", a: "DigiSaloon works with salon partners who complete the required onboarding and verification process before being listed on the platform." },
  { q: "How can I contact DigiSaloon Support?", a: "For assistance with bookings, payments, cancellations, refunds, or other issues, you can contact DigiSaloon Support through the contact options available on our website or app." },
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