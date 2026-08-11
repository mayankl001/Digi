import React from "react";

export const ReviewPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Review Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          REVIEW & RATING POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Review & Rating Policy explains the rules applicable to reviews, ratings and feedback submitted through DigiSaloon.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="rev-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>Reviews and ratings help customers share their experiences and help salons understand customer feedback.</p>
          <p>DigiSaloon aims to maintain a fair, useful and trustworthy review system.</p>
        </section>

        <section id="rev-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Who Can Submit a Review</h2>
          <p>Where the feature is available, customers may be allowed to submit a review or rating after an eligible booking or service.</p>
          <p>DigiSaloon may limit reviews to verified or eligible booking experiences.</p>
        </section>

        <section id="rev-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Genuine Experience</h2>
          <p>Reviews and ratings should reflect the user's genuine experience with the salon or service.</p>
          <p>Users must not submit reviews based on fabricated or misleading experiences.</p>
        </section>

        <section id="rev-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Prohibited Reviews</h2>
          <p>Users must not submit content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Is intentionally false or misleading</li>
            <li>Is fraudulent</li>
            <li>Is abusive or threatening</li>
            <li>Contains harassment</li>
            <li>Contains unlawful content</li>
            <li>Promotes discrimination or hatred</li>
            <li>Contains malicious software or harmful content</li>
            <li>Reveals another person's private information</li>
            <li>Attempts to manipulate ratings</li>
            <li>Is unrelated to the relevant service or experience</li>
          </ul>
        </section>

        <section id="rev-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Fake Reviews</h2>
          <p>The following activities are prohibited:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Creating fake accounts to submit reviews</li>
            <li>Posting reviews for services not actually received</li>
            <li>Paying or receiving payment for fake reviews</li>
            <li>Coordinating fake ratings</li>
            <li>Asking others to submit dishonest reviews</li>
            <li>Posting multiple reviews for the same experience where not permitted</li>
          </ul>
        </section>

        <section id="rev-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Rating Manipulation</h2>
          <p>Users and salon partners must not attempt to artificially increase or decrease ratings.</p>
          <p>Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fake bookings</li>
            <li>Fake accounts</li>
            <li>Coordinated rating campaigns</li>
            <li>Incentivized dishonest reviews</li>
            <li>Threatening customers to change reviews</li>
          </ul>
        </section>

        <section id="rev-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon Partner Conduct</h2>
          <p>Salon partners must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Submit reviews for their own salon using fake accounts</li>
            <li>Ask customers to provide dishonest ratings</li>
            <li>Threaten or pressure customers</li>
            <li>Offer improper benefits in exchange for specific ratings</li>
            <li>Remove or manipulate legitimate customer feedback outside the platform's permitted mechanisms</li>
          </ul>
        </section>

        <section id="rev-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Review Content</h2>
          <p>Reviews may contain text, ratings and other supported content.</p>
          <p>Users are responsible for ensuring that submitted content does not violate the rights of others.</p>
          <p>Users should avoid including unnecessary personal information about:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon staff</li>
            <li>Other customers</li>
            <li>Third parties</li>
          </ul>
        </section>

        <section id="rev-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Right to Moderate</h2>
          <p>DigiSaloon may review, restrict, hide or remove content where reasonably necessary if it appears to violate this Policy or applicable law.</p>
          <p>DigiSaloon may also take action against accounts involved in review abuse.</p>
        </section>

        <section id="rev-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. No Guarantee of Publication</h2>
          <p>Submitting a review does not guarantee that it will be published.</p>
          <p>A review may not be displayed or may be removed where it:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Violates this Policy</li>
            <li>Is unlawful</li>
            <li>Is irrelevant</li>
            <li>Appears fraudulent</li>
            <li>Contains prohibited content</li>
            <li>Creates a security or privacy concern</li>
          </ul>
        </section>

        <section id="rev-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Editing or Updating Reviews</h2>
          <p>Where the platform provides an editing feature, users may modify their review according to the available functionality.</p>
          <p>DigiSaloon may retain relevant records for legitimate business, security or dispute-resolution purposes.</p>
        </section>

        <section id="rev-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Complaints About Reviews</h2>
          <p>If a salon or user believes a review violates this Policy, they may contact DigiSaloon support.</p>
          <p>Complaints should include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Review details</li>
            <li>Relevant booking information</li>
            <li>Reason for the complaint</li>
            <li>Supporting information where available</li>
          </ul>
        </section>

        <section id="rev-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Disputed Reviews</h2>
          <p>DigiSaloon may investigate disputed reviews using available information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Booking records</li>
            <li>Account information</li>
            <li>Review history</li>
            <li>Communication records</li>
            <li>Other relevant platform information</li>
          </ul>
          <p>DigiSaloon may make reasonable platform-level decisions based on the available information.</p>
        </section>

        <section id="rev-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. No Guarantee of Accuracy</h2>
          <p>Reviews represent the opinions or experiences of the individuals who submit them.</p>
          <p>DigiSaloon does not guarantee that every review is completely accurate or representative of all customers' experiences.</p>
        </section>

        <section id="rev-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Use of Reviews</h2>
          <p>By submitting a review or rating, the user permits DigiSaloon to display and use the submitted content for purposes related to operating, improving and promoting the DigiSaloon platform, subject to applicable law.</p>
        </section>

        <section id="rev-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Intellectual Property</h2>
          <p>Users should only submit content that they have the right to submit.</p>
          <p>Users must not upload copyrighted or otherwise protected material belonging to another person without appropriate permission.</p>
        </section>

        <section id="rev-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Privacy</h2>
          <p>Users should avoid including sensitive or unnecessary personal information in reviews.</p>
          <p>DigiSaloon may process review information according to its Privacy Policy.</p>
        </section>

        <section id="rev-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Consequences of Abuse</h2>
          <p>Where review manipulation or abuse is identified, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Remove or restrict the review</li>
            <li>Restrict review functionality</li>
            <li>Suspend an account</li>
            <li>Restrict future bookings</li>
            <li>Take other appropriate platform-level action</li>
          </ul>
        </section>

        <section id="rev-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Legal Requests</h2>
          <p>DigiSaloon may disclose or retain review-related information where required by applicable law or lawful authority.</p>
        </section>

        <section id="rev-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Policy Updates</h2>
          <p>DigiSaloon may update this Review & Rating Policy as its review system, services or applicable requirements change.</p>
          <p>The latest version may be published on the DigiSaloon website or application.</p>
        </section>

        <section id="rev-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Contact</h2>
          <p>For review or rating-related concerns:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> support@digisaloon.in</p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};