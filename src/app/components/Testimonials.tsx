import { useState, useEffect } from "react";
import { Star, Quote, Send, Loader2 } from "lucide-react";
import { StaggerChildren, AnimateIn } from "./AnimateIn";
import { motion, AnimatePresence } from "framer-motion";

// FIREBASE IMPORTS
import { db } from "../../firebase"; 
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from "firebase/firestore";

export function Testimonials() {
  const [liveReviews, setLiveReviews] = useState<any[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  
  // Form states
  const [formName, setFormName] = useState("");
  const [formReview, setFormReview] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null); // Premium star hover effect
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Live Data Fetching (Limit to 3 reviews)
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"), limit(3));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLiveReviews(reviewsData);
    });
    return () => unsubscribe();
  }, []);

  // 2. Submit Review to Firebase
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formReview) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "reviews"), {
        name: formName,
        review: formReview,
        rating: formRating,
        location: "Ranchi",
        role: "Customer",
        tag: "Verified User",
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${formName}`,
        timestamp: serverTimestamp()
      });

      setFormName("");
      setFormReview("");
      setFormRating(5);
      setFormOpen(false);
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Kuch dikkat aayi! Kripya dobara prayas karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <AnimateIn direction="up">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "rgba(153,27,27,0.07)", border: "1px solid rgba(153,27,27,0.12)" }}
          >
            <span className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#991B1B" }}>
              Testimonials
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            People <span style={{ color: "#991B1B" }}>love</span> DigiSaloon
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            From early users to salon partners — here's what they're saying.
          </p>
        </AnimateIn>

        {/* WRITE A REVIEW TRIGGER BUTTON */}
        <div className="mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormOpen(!formOpen)}
            className="px-6 py-3 rounded-full text-sm font-bold text-white shadow-md transition-all"
            style={{ backgroundColor: "#991B1B" }}
          >
            Write a Review 
          </motion.button>
        </div>

        {/* --- PREMIUM COMPACT REVIEW FORM --- */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-md mx-auto mb-16 overflow-hidden rounded-3xl shadow-xl p-7 text-left border bg-white"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              <h3 className="text-xl font-bold mb-5 text-gray-950" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Share Your Experience
              </h3>
              <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 outline-none focus:border-red-800 transition-all bg-gray-50/50 focus:bg-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />

                {/* Review Textarea */}
                <textarea
                  placeholder="Write your review..."
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 outline-none focus:border-red-800 transition-all bg-gray-50/50 focus:bg-white resize-none"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
                
                {/* --- SMART INTERACTIVE STAR BUTTONS --- */}
                <div className="flex flex-col gap-1.5 py-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Tap to Rate
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isGold = hoverRating !== null ? star <= hoverRating : star <= formRating;
                      return (
                        <motion.button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="focus:outline-none p-0.5 transition-colors"
                        >
                          <Star
                            className={`w-7 h-7 transition-all ${
                              isGold 
                                ? "text-amber-400 fill-amber-400 drop-shadow-[0_2px_4px_rgba(245,158,11,0.2)]" 
                                : "text-gray-200"
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                    <span className="text-sm font-extrabold text-gray-500 ml-2 bg-gray-100 px-2.5 py-0.5 rounded-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {hoverRating !== null ? hoverRating : formRating}.0
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold py-3.5 mt-2 rounded-xl transition-all flex justify-center items-center gap-2 active:scale-[0.99]"
                  style={{ backgroundColor: "#991B1B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      Submit Review
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3-COLUMN REVIEWS GRID */}
        <StaggerChildren
          className="grid md:grid-cols-3 gap-6 text-left"
          stagger={0.13}
          direction="up"
          delay={0.05}
        >
          {liveReviews.map((r, i) => (
            <motion.div
              key={r.id || i}
              whileHover={i !== 1 ? { y: -6, boxShadow: "0 20px 56px rgba(0,0,0,0.08)" } : {}}
              className="rounded-2xl p-7 flex flex-col justify-between"
              style={{
                background: i === 1 ? "linear-gradient(160deg, #991B1B 0%, #7F1D1D 100%)" : "#FAFAFA",
                border: i === 1 ? "none" : "1px solid rgba(0,0,0,0.06)",
                boxShadow: i === 1 ? "0 24px 64px rgba(153,27,27,0.3)" : "none",
              }}
            >
              <div>
                <div className="mb-4">
                  <Quote className="w-6 h-6" style={{ color: i === 1 ? "rgba(255,255,255,0.4)" : "#E8B4B8" }} />
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" style={{ color: i === 1 ? "rgba(255,255,255,0.9)" : "#F59E0B" }} />
                  ))}
                </div>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: i === 1 ? "rgba(255,255,255,0.88)" : "#374151", fontSize: "0.92rem", lineHeight: 1.7 }}
                >
                  "{r.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover bg-gray-200"
                  style={{ border: i === 1 ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E8B4B8" }}
                />
                <div>
                  <p className="text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: i === 1 ? "#fff" : "#111827" }}>
                    {r.name}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: i === 1 ? "rgba(255,255,255,0.65)" : "#6B7280" }}>
                    {r.role} · {r.location}
                  </p>
                </div>
                <div
                  className="ml-auto rounded-full px-2.5 py-1"
                  style={{ background: i === 1 ? "rgba(255,255,255,0.15)" : "rgba(153,27,27,0.07)" }}
                >
                  <span className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: i === 1 ? "rgba(255,255,255,0.85)" : "#991B1B" }}>
                    {r.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}