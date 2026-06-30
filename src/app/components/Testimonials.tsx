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
        rating: Number(formRating),
        location: "Ranchi",
        role: "Customer",
        tag: "Verified User",
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formName)}`,
        timestamp: serverTimestamp()
      });

      setFormName("");
      setFormReview("");
      setFormRating(5);
      setFormOpen(false);
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Kuch दिक्कत आई! कृपया दोबारा प्रयास करें।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <AnimateIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#991B1B]/5 border border-[#991B1B]/12">
            <span className="text-sm font-semibold text-[#991B1B]">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            People <span className="text-[#991B1B]">love</span> DigiSaloon
          </h2>
          <p className="mt-4 max-w-lg mx-auto mb-8 text-base sm:text-lg text-gray-500 leading-relaxed">
            From early users to salon partners — here's what they're saying.
          </p>
        </AnimateIn>

        {/* WRITE A REVIEW TRIGGER BUTTON */}
        <div className="mb-12">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="px-6 py-3 rounded-full text-sm font-bold text-white bg-[#991B1B] shadow-md hover:bg-[#7F1D1D] hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            {formOpen ? "Close Review Box" : "Write a Review"}
          </button>
        </div>

        {/* --- PREMIUM COMPACT REVIEW FORM --- */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-md mx-auto mb-16 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl p-7 text-left"
            >
              <h3 className="text-xl font-bold mb-5 text-gray-950">
                Share Your Experience
              </h3>
              <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 outline-none focus:border-[#991B1B] transition-all bg-gray-50/50 focus:bg-white font-medium"
                />

                {/* Review Textarea */}
                <textarea
                  placeholder="Write your review here..."
                  disabled={isSubmitting}
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 outline-none focus:border-[#991B1B] transition-all bg-gray-50/50 focus:bg-white resize-none font-medium"
                />
                
                {/* --- SMART INTERACTIVE STAR BUTTONS --- */}
                <div className="flex flex-col gap-1.5 py-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Tap to Rate
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isGold = hoverRating !== null ? star <= hoverRating : star <= formRating;
                      return (
                        <motion.button
                          key={star}
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setFormRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="focus:outline-none p-0.5 transition-colors disabled:opacity-50"
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
                    <span className="text-sm font-extrabold text-gray-500 ml-2 bg-gray-100 px-2.5 py-0.5 rounded-full>">
                      {hoverRating !== null ? hoverRating : formRating}.0
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold py-3.5 mt-2 rounded-xl bg-[#991B1B] hover:bg-[#7F1D1D] transition-all flex justify-center items-center gap-2 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          stagger={0.13}
          direction="up"
          delay={0.05}
        >
          {liveReviews.map((r, i) => {
            const isFeatured = i === 1; // Middle card stands out
            const starCount = Math.min(Math.max(Math.round(r.rating || 5), 1), 5);

            return (
              <motion.div
                key={r.id || i}
                whileHover={!isFeatured ? { y: -6, boxShadow: "0 20px 56px rgba(0,0,0,0.06)" } : {}}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-shadow duration-300 ${
                  isFeatured 
                    ? "bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] text-white border-none shadow-[0_24px_64px_rgba(153,27,27,0.25)] md:scale-105 relative z-10" 
                    : "bg-[#FAFAFA] border border-gray-200/60 shadow-none"
                }`}
              >
                <div>
                  <div className="mb-4">
                    <Quote className={`w-6 h-6 ${isFeatured ? "text-white/40" : "text-[#E8B4B8]"}`} />
                  </div>
                  
                  {/* Safe Star Array Loop */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: starCount }).map((_, s) => (
                      <Star 
                        key={s} 
                        className={`w-4 h-4 fill-current ${isFeatured ? "text-white" : "text-amber-500"}`} 
                      />
                    ))}
                  </div>

                  <p className={`mb-6 text-[0.92rem] font-medium leading-relaxed ${isFeatured ? "text-white/90" : "text-gray-600"}`}>
                    "{r.review}"
                  </p>
                </div>

                {/* Reviewer Profile Meta footer */}
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <img
                    src={r.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${r.name}`}
                    alt={r.name}
                    className={`w-11 h-11 rounded-full object-cover bg-gray-100 border-2 ${
                      isFeatured ? "border-white/30" : "border-[#E8B4B8]"
                    }`}
                  />
                  <div>
                    <p className={`text-sm font-bold ${isFeatured ? "text-white" : "text-gray-900"}`}>
                      {r.name}
                    </p>
                    <p className={`text-xs ${isFeatured ? "text-white/70" : "text-gray-500"}`}>
                      {r.role || "Customer"} · {r.location || "Ranchi"}
                    </p>
                  </div>
                  <div className={`ml-auto rounded-full px-2.5 py-1 ${isFeatured ? "bg-white/15" : "bg-[#991B1B]/5"}`}>
                    <span className={`text-xs font-semibold ${isFeatured ? "text-white" : "text-[#991B1B]"}`}>
                      {r.tag || "Verified"}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </StaggerChildren>

      </div>
    </section>
  );
}