import { useState } from "react";
import { ArrowRight, CheckCircle, Sparkles, User, Mail, Store, Phone, MapPin, Loader2 } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion } from "framer-motion";

// FIREBASE IMPORTS
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salonName, setSalonName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState<"customer" | "salon">("customer");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state add ki h

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Data object taiyar kar rahe hain
      const waitlistData = {
        name,
        email,
        type,
        // Agar salon hai tabhi ye fields jayengi, nahi toh null
        salonName: type === "salon" ? salonName : null,
        phone: type === "salon" ? phone : null,
        city: type === "salon" ? city : null,
        timestamp: serverTimestamp() // Firebase ka server time tracking ke liye
      };

      // Firestore me 'waitlist' naam ke collection me data insert kar rahe hain
      await addDoc(collection(db, "waitlist"), waitlistData);
      
      setSubmitted(true);
    } catch (error) {
      console.error("Firebase me data save karne me error aaya: ", error);
      alert("Kuch dikkat aayi! Kripya dobara prayas karein.");
    } finally {
      setLoading(false);
    }
  };

  const handleTypeChange = (selectedType: "customer" | "salon") => {
    setType(selectedType);
    setSalonName("");
    setPhone("");
    setCity("");
  };

  return (
    <section
      id="waitlist"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #7F1D1D 0%, #991B1B 50%, #B91C1C 100%)" }}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8B4B8 0%, transparent 70%)", translateX: "30%", translateY: "-30%" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", translateX: "-40%", translateY: "40%" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimateIn direction="up">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-white opacity-80" />
            <span className="text-sm text-white opacity-90" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
              Limited Early Access
            </span>
          </div>

          {/* FIXED: Changed <p> to <div> to resolve validateDOMNesting warning */}
          <div>
            <div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
              }}
            >
              ⏳ Only First 500 Users Get Premium Benefits
            </div>
          </div>

          <h2
            className="mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Ready to Skip the Waiting Line?
          </h2>

          <p
            className="mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Join 150+ early users and 50+ salon partners already on the waitlist. Be the first to experience DigiSaloon when we launch in Ranchi.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.15}>
          {!submitted ? (
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              {/* Toggle */}
              <div className="inline-flex rounded-full p-1 mb-6" style={{ background: "rgba(0,0,0,0.2)" }}>
                {(["customer", "salon"] as const).map((t) => (
                  <motion.button
                    key={t}
                    disabled={loading}
                    onClick={() => handleTypeChange(t)}
                    layout
                    className="px-5 py-2 rounded-full text-sm relative disabled:opacity-50"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      background: type === t ? "#fff" : "transparent",
                      color: type === t ? "#991B1B" : "rgba(255,255,255,0.75)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    {t === "customer" ? "I'm a Customer" : "I Own a Salon"}
                  </motion.button>
                ))}
              </div>

              {/* Form Layout */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
                
                {/* 1. NAME FIELD */}
                <div className="relative flex items-center">
                  <User className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    disabled={loading}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={type === "customer" ? "Your Full Name" : "Owner's Full Name"}
                    required
                    className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm disabled:opacity-75"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "rgba(255,255,255,0.95)", color: "#111827", border: "none" }}
                  />
                </div>

                {/* 2. SALON SPECIFIC FIELDS */}
                {type === "salon" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4 w-full"
                  >
                    {/* Salon Name */}
                    <div className="relative flex items-center">
                      <Store className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        disabled={loading}
                        value={salonName}
                        onChange={(e) => setSalonName(e.target.value)}
                        placeholder="Salon Name"
                        required={type === "salon"}
                        className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm disabled:opacity-75"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "rgba(255,255,255,0.95)", color: "#111827", border: "none" }}
                      />
                    </div>

                    {/* Contact Number & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Contact Number */}
                      <div className="relative flex items-center">
                        <Phone className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                          type="tel"
                          disabled={loading}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Contact Number"
                          required={type === "salon"}
                          className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm disabled:opacity-75"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "rgba(255,255,255,0.95)", color: "#111827", border: "none" }}
                        />
                      </div>

                      {/* City */}
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          disabled={loading}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="City (e.g. Ranchi)"
                          required={type === "salon"}
                          className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm disabled:opacity-75"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "rgba(255,255,255,0.95)", color: "#111827", border: "none" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. EMAIL FIELD */}
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={type === "customer" ? "Enter your email address" : "Business Email Address"}
                    required
                    className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm disabled:opacity-75"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "rgba(255,255,255,0.95)", color: "#111827", border: "none" }}
                  />
                </div>
                
                {/* 4. ACTION BUTTON */}
                <div className="mt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
                    whileTap={loading ? {} : { scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold w-full disabled:opacity-80 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      background: "#fff",
                      color: "#991B1B",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : type === "customer" ? (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Partner With Us
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              <p className="mt-4 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)" }}>
                No spam, ever. Unsubscribe anytime. Your data is safe with us.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 text-center"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#fff" }}>
                {type === "customer" ? `Welcome aboard, ${name}! 🎉` : `Registration Successful, ${name}! 🏢`}
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {type === "customer" ? (
                  <>You're on the list! We'll email you at <strong className="text-white">{email}</strong> when we launch DigiSaloon. Stay tuned!</>
                ) : (
                  <>Thank you for partnering with us. We have registered <strong className="text-white">{salonName}</strong> ({city}). Our team will connect with you soon on <strong className="text-white">{phone}</strong> or via email.</>
                )}
              </p>
            </motion.div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}