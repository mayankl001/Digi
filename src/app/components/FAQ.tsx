import { useState } from "react";
import { ChevronDown, Mail, Phone, Globe } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What is DigiSaloon?",
    a: "DigiSaloon is an online salon booking platform that helps customers discover salons, explore services and prices, check available time slots, and book appointments conveniently.",
  },
  {
    q: "How can I book an appointment through DigiSaloon?",
    a: "Browse the available salons, select your preferred salon and service, choose an available time slot, provide the required details, and pay the booking amount online to confirm your appointment.",
  },
  {
    q: "Can I book an appointment for the same day?",
    a: "Yes, you can book an appointment for the same day (Live Booking), subject to the salon’s availability and the available time slots displayed on the platform.",
  },
  {
    q: "Can I schedule an appointment for a future date?",
    a: "Yes, you can schedule an appointment for a future date (Scheduled Booking) by selecting your preferred salon, service, date, and available time slot.",
  },
  {
    q: "How can I find the right salon for my needs?",
    a: "You can explore listed salons, compare available services and prices, check customer ratings and reviews, and choose a salon that suits your preferences.",
  },
  {
    q: "How does payment work on DigiSaloon?",
    a: "Customers must pay the specified booking amount online when confirming an appointment. The remaining service amount must be paid directly to the salon. Both prices are clearly displayed during the booking process.",
  },
  {
    q: "Can I cancel my appointment and receive a refund?",
    a: "Cancellation and refund eligibility depend on the booking type. Live Bookings are non-cancellable and non-refundable. Scheduled Bookings may be cancelled at least 1 hour before the appointment time. Cancellations made less than 1 hour before are non-refundable.",
  },
  {
    q: "How long does it take to receive a refund?",
    a: "For an eligible Scheduled Booking cancelled at least 1 hour before the appointment, the applicable refund amount is ₹49 (after payment gateway fee handling). Refunds are generally processed within 5–7 working days.",
  },
  {
    q: "Can I rate and review a salon after my appointment?",
    a: "Yes, customers can rate and review a salon after completing their booking. Your feedback helps other customers make informed decisions and helps salons improve their services.",
  },
  {
    q: "Is my personal information safe with DigiSaloon?",
    a: "Yes. DigiSaloon handles your personal information in accordance with its Privacy Policy and applicable data protection requirements.",
  },
  {
    q: "How can I contact DigiSaloon Support?",
    a: (
      <div className="space-y-3 pt-1">
        <p>
          Our Customer Experience team is available to assist you with booking management, payments, refunds, and salon inquiries. You can reach out through any of the following channels:
        </p>
        
        <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
          <a 
            href="mailto:support@digisaloon.in" 
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#991B1B]/30 hover:bg-[#991B1B]/5 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-lg bg-[#991B1B]/10 text-[#991B1B] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#991B1B] group-hover/item:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Support</p>
              <p className="text-sm font-medium text-gray-900 truncate">support@digisaloon.in</p>
            </div>
          </a>

          <a 
            href="tel:+919973499471" 
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#991B1B]/30 hover:bg-[#991B1B]/5 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-lg bg-[#991B1B]/10 text-[#991B1B] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#991B1B] group-hover/item:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Support</p>
              <p className="text-sm font-medium text-gray-900 truncate">+91 99734 99471</p>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-2 pt-1 text-xs text-gray-500">
          <Globe className="w-3.5 h-3.5 text-[#991B1B]" />
          <span>For faster resolution, please mention your <strong>Booking ID</strong> when reaching out.</span>
        </div>
      </div>
    ),
  },
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
              FAQs
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