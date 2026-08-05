import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Sparkles, User, Mail, Store, Phone, MapPin, Loader2 } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

// FIREBASE IMPORTS
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface WaitlistProps {
  initialType?: "customer" | "salon";
}

export function Waitlist({ initialType = "customer" }: WaitlistProps) {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salonName, setSalonName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState<"customer" | "salon">(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mode = searchParams.get("type");
    if (mode === "salon") {
      setType("salon");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const waitlistData = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        type,
        salonName: type === "salon" ? salonName.trim() : null,
        phone: type === "salon" ? phone.trim() : null,
        city: type === "salon" ? city.trim() : null,
        timestamp: serverTimestamp()
      };

      await addDoc(collection(db, "waitlist"), waitlistData);
      setSubmitted(true);
    } catch (error) {
      console.error("Firebase data saving error: ", error);
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
      className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-red-950 via-[#991B1B] to-red-700 font-sans"
    >
      {/* Ambient Animated Background Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none translate-x-[30%] -translate-y-[30%]"
        style={{ background: "radial-gradient(circle, rgba(232,180,184,0.22) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none -translate-x-[40%] translate-y-[40%]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimateIn direction="up">
          {initialType === "customer" && (
            <>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 bg-white/15 border border-white/25 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-white/90" />
                <span className="text-sm text-white font-semibold">Limited Early Access</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Ready to Skip the Waiting Line?
              </h2>
              <p className="mb-10 max-w-xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
                Join 150+ early users and 50+ salon partners already on the waitlist. Be the first to experience DigiSaloon when we launch in Ranchi.
              </p>
            </>
          )}
        </AnimateIn>

        <AnimateIn direction="up" delay={0.15}>
          {!submitted ? (
            <div className="rounded-2xl p-6 lg:p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.15)] text-left">
              
              {/* Audience Type Switch */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-full p-1 bg-black/20 backdrop-blur-md border border-white/5">
                  {(["customer", "salon"] as const).map((t) => (
                    <button
                      key={t}
                      disabled={loading}
                      type="button"
                      onClick={() => handleTypeChange(t)}
                      className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative disabled:opacity-50 ${
                        type === t 
                          ? "bg-white text-[#991B1B] shadow-md scale-100" 
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {t === "customer" ? "I'm a Customer" : "I Own a Salon"}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
                <div className="relative flex items-center group">
                  <User className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-[#991B1B] transition-colors z-20" />
                  <input
                    type="text"
                    disabled={loading}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={type === "customer" ? "Your Full Name" : "Owner's Full Name"}
                    required
                    className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm text-gray-900 bg-white/95 focus:bg-white border-2 border-transparent focus:border-red-400 focus:ring-4 focus:ring-red-500/20 shadow-sm transition-all duration-200 font-medium placeholder-gray-400"
                  />
                </div>

                {type === "salon" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4 w-full"
                  >
                    <div className="relative flex items-center group">
                      <Store className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-[#991B1B] transition-colors z-20" />
                      <input
                        type="text"
                        disabled={loading}
                        value={salonName}
                        onChange={(e) => setSalonName(e.target.value)}
                        placeholder="Salon Name"
                        required={type === "salon"}
                        className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm text-gray-900 bg-white/95 focus:bg-white border-2 border-transparent focus:border-red-400 focus:ring-4 focus:ring-red-500/20 shadow-sm transition-all duration-200 font-medium placeholder-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative flex items-center group">
                        <Phone className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-[#991B1B] transition-colors z-20" />
                        <input
                          type="tel"
                          disabled={loading}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Contact Number"
                          required={type === "salon"}
                          className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm text-gray-900 bg-white/95 focus:bg-white border-2 border-transparent focus:border-red-400 focus:ring-4 focus:ring-red-500/20 shadow-sm transition-all duration-200 font-medium placeholder-gray-400"
                        />
                      </div>

                      <div className="relative flex items-center group">
                        <MapPin className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-[#991B1B] transition-colors z-20" />
                        <input
                          type="text"
                          disabled={loading}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="City (e.g. Ranchi)"
                          required={type === "salon"}
                          className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm text-gray-900 bg-white/95 focus:bg-white border-2 border-transparent focus:border-red-400 focus:ring-4 focus:ring-red-500/20 shadow-sm transition-all duration-200 font-medium placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="relative flex items-center group">
                  <Mail className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-[#991B1B] transition-colors z-20" />
                  <input
                    type="email"
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={type === "customer" ? "Enter your email address" : "Business Email Address"}
                    required
                    className="w-full pl-11 pr-5 py-3.5 rounded-full outline-none text-sm text-gray-900 bg-white/95 focus:bg-white border-2 border-transparent focus:border-red-400 focus:ring-4 focus:ring-red-500/20 shadow-sm transition-all duration-200 font-medium placeholder-gray-400"
                  />
                </div>
                
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold w-full bg-white text-[#991B1B] shadow-lg hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300 disabled:opacity-80"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving to Waitlist...
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
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-xs text-white/60 tracking-wide">
                No spam, ever. Unsubscribe anytime. Your data is safe with us.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-2xl p-8 text-center bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center bg-white/20">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {type === "customer" ? `Welcome aboard, ${name}! 🎉` : `Registration Successful, ${name}! 🏢`}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mx-auto">
                {type === "customer" ? (
                  <>You're on the list! We'll email you at <strong className="text-white font-semibold">{email}</strong> when we launch DigiSaloon.</>
                ) : (
                  <>Thank you for partnering with us. We have registered <strong className="text-white font-semibold">{salonName}</strong> ({city}). Our team will connect with you soon.</>
                )}
              </p>
            </motion.div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}