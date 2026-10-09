import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { Star, Quote, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// FIREBASE IMPORTS
import { db } from "../../firebase"; 
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

export function Testimonials() {
  const location = useLocation(); 
  const [liveReviews, setLiveReviews] = useState<any[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  
  // Form states
  const [formName, setFormName] = useState("");
  const [formReview, setFormReview] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Live Data Fetching with Safety Fallback
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hasSalonId = searchParams.has("salon_id");

    if (hasSalonId || window.location.hash === "#testimonials") {
      setFormOpen(true);
    }

    const q = query(collection(db, "reviews"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      reviewsData.sort((a: any, b: any) => (b.timestamp || 0) - (a.timestamp || 0));
      
      if (reviewsData.length > 0) {
        setLiveReviews(reviewsData);
      } else {
        setLiveReviews([
          {
            id: "default-1",
            name: "Priya Sharma",
            review: "DigiSaloon is an absolute game-changer for managing appointments seamlessly!",
            rating: 5,
            location: "Ranchi",
            role: "Customer",
            tag: "Verified User"
          },
          {
            id: "default-2",
            name: "Rahul Verma",
            review: "Loved the live slot availability feature. Zero wait time at the salon!",
            rating: 5,
            location: "Ranchi",
            role: "Customer",
            tag: "Verified User"
          },
          {
            id: "default-3",
            name: "Ananya Roy",
            review: "Super easy booking process and transparent pricing. Highly recommended!",
            rating: 5,
            location: "Ranchi",
            role: "Customer",
            tag: "Verified User"
          }
        ]);
      }
    }, (error) => {
      console.error("Firestore snapshot error: ", error);
      setLiveReviews([
        {
          id: "default-1",
          name: "Priya Sharma",
          review: "DigiSaloon is an absolute game-changer for managing appointments seamlessly!",
          rating: 5,
          location: "Ranchi",
          role: "Customer",
          tag: "Verified User"
        },
        {
          id: "default-2",
          name: "Rahul Verma",
          review: "Loved the live slot availability feature. Zero wait time at the salon!",
          rating: 5,
          location: "Ranchi",
          role: "Customer",
          tag: "Verified User"
        },
        {
          id: "default-3",
          name: "Ananya Roy",
          review: "Super easy booking process and transparent pricing. Highly recommended!",
          rating: 5,
          location: "Ranchi",
          role: "Customer",
          tag: "Verified User"
        }
      ]);
    });

    return () => unsubscribe();
  }, [location]);

  // 2. Submit Review to Firebase
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formReview) return;

    setIsSubmitting(true);

    const searchParams = new URLSearchParams(location.search);
    const scannedSalonId = searchParams.get("salon_id") || "direct_website";
    const scannedSalonName = searchParams.get("name") || "Ranchi"; 

    try {
      await addDoc(collection(db, "reviews"), {
        name: formName,
        review: formReview,
        rating: Number(formRating),
        location: scannedSalonName, 
        salon_id: scannedSalonId,   
        role: "Customer",
        tag: "Verified User",
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formName)}`,
        timestamp: Date.now()
      });

      setFormName("");
      setFormReview("");
      setFormRating(5);
      setFormOpen(false);
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Review save nahi ho paya.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Duplicate list for seamless infinite loop
  const marqueeReviews = [...liveReviews, ...liveReviews, ...liveReviews, ...liveReviews];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 mb-3 sm:mb-4 bg-[#991B1B]/5 border border-[#991B1B]/12">
          <span className="text-xs sm:text-sm font-semibold text-[#991B1B]">
            Testimonials
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          People <span className="text-[#991B1B]">love</span> DigiSaloon
        </h2>
        <p className="mt-2 sm:mt-4 max-w-lg mx-auto mb-6 sm:mb-8 text-sm sm:text-lg text-gray-500 leading-relaxed px-2">
          From early users to salon partners — here's what they're saying.
        </p>

        {/* WRITE A REVIEW TRIGGER BUTTON */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#991B1B] shadow-md hover:bg-[#7F1D1D] active:scale-95 transition-all duration-200"
          >
            {formOpen ? "Close Review Box" : "Write a Review"}
          </button>
        </div>

        {/* REVIEW FORM */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-md mx-auto mb-12 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white shadow-xl p-5 sm:p-7 text-left"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-gray-950">
                Share Your Experience
              </h3>
              <form onSubmit={handleReviewSubmit} className="flex flex-col gap-3.5 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm rounded-xl border border-gray-200 outline-none focus:border-[#991B1B] transition-all bg-gray-50/50 focus:bg-white font-medium"
                />

                <textarea
                  placeholder="Write your review here..."
                  disabled={isSubmitting}
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm rounded-xl border border-gray-200 outline-none focus:border-[#991B1B] transition-all bg-gray-50/50 focus:bg-white resize-none font-medium"
                />
                
                <div className="flex flex-col gap-1.5 py-1">
                  <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Tap to Rate
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isGold = hoverRating !== null ? star <= hoverRating : star <= formRating;
                      return (
                        <button
                          key={star}
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setFormRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="focus:outline-none p-0.5 transition-colors disabled:opacity-50"
                        >
                          <Star
                            className={`w-6 h-6 sm:w-7 sm:h-7 transition-all ${
                              isGold 
                                ? "text-amber-400 fill-amber-400 drop-shadow-[0_2px_4px_rgba(245,158,11,0.2)]" 
                                : "text-gray-200"
                            }`}
                          />
                        </button>
                      );
                    })}
                    <span className="text-xs sm:text-sm font-extrabold text-gray-500 ml-2 bg-gray-100 px-2 py-0.5 rounded-full">
                      {hoverRating !== null ? hoverRating : formRating}.0
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold py-3 sm:py-3.5 mt-1 rounded-xl bg-[#991B1B] hover:bg-[#7F1D1D] transition-all flex justify-center items-center gap-2 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      Submit Review
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* --- MOBILE OPTIMIZED MARQUEE CAROUSEL --- */}
      <div className="relative w-full overflow-hidden py-2 sm:py-4">
        {/* Side Soft Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 400, // Very slow reading speed
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          whileTap={{ animationPlayState: "paused" }}
        >
          {marqueeReviews.map((r, i) => {
            const starCount = Math.min(Math.max(Math.round(r.rating || 5), 1), 5);
            return (
              <div
                key={`${r.id}-${i}`}
                className="w-[82vw] max-w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-[#FAFAFA] border border-gray-200/60 shadow-sm hover:shadow-md hover:border-[#991B1B]/30 transition-all duration-300 text-left"
              >
                <div>
                  <div className="mb-2 sm:mb-3">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8B4B8]" />
                  </div>
                  
                  <div className="flex gap-1 mb-2.5 sm:mb-3">
                    {Array.from({ length: starCount }).map((_, s) => (
                      <Star 
                        key={s} 
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" 
                      />
                    ))}
                  </div>

                  <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium leading-relaxed text-gray-700 line-clamp-4">
                    "{r.review}"
                  </p>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-gray-100">
                  <img
                    src={r.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${r.name}`}
                    alt={r.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover bg-gray-100 border-2 border-[#E8B4B8]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                      {r.name}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-500 truncate">
                      {r.role || "Customer"} · {r.location || "Ranchi"}
                    </p>
                  </div>
                  <div className="rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#991B1B]/5 flex-shrink-0">
                    <span className="text-[10px] sm:text-xs font-semibold text-[#991B1B]">
                      {r.tag || "Verified User"}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}