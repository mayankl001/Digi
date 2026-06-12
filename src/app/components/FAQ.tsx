import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  { q: "When will DigiSaloon officially launch in Ranchi?", a: "We're currently in our pre-launch phase and expect to go live in Ranchi by Q3 2025. Join our waitlist to be among the first to get access and receive exclusive early-bird benefits." },
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
    <section id="faq" className="py-20 lg:py-28" style={{ background: "#FAFAFA" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn direction="up" className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              FAQ
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently asked{" "}
            <span style={{ color: "#991B1B" }}>questions</span>
          </h2>
        </AnimateIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.04}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: `1px solid ${open === i ? "rgba(153,27,27,0.25)" : "rgba(0,0,0,0.06)"}`,
                  boxShadow: open === i ? "0 4px 24px rgba(153,27,27,0.08)" : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left flex items-center justify-between px-6 py-5 gap-4"
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: open === i ? "#991B1B" : "#111827",
                      lineHeight: 1.5,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "#991B1B" }} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-6 pb-5"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: "#6B7280",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          borderTop: "1px solid rgba(153,27,27,0.08)",
                          paddingTop: "1rem",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
