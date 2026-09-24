import React from "react";

export const ReviewPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Review & Rating Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          REVIEW & RATING POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Review & Rating Policy explains the rules and guidelines governing customer reviews, ratings, salon responses, and other feedback submitted through DigiSaloon.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          DigiSaloon aims to provide customers with useful and genuine information while giving salon partners an opportunity to receive and respond to customer feedback.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="review-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>Reviews and ratings on DigiSaloon are intended to help customers share their genuine experiences and help salon partners understand customer feedback.</p>
          <p>Reviews and ratings should be honest, relevant, respectful, and based on an actual experience with the concerned salon or service.</p>
        </section>

        <section id="review-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Who Can Submit a Review or Rating</h2>
          <p>A customer may submit a review or rating after an eligible booking or salon service experience.</p>
          <p>DigiSaloon may limit reviews or ratings to users who have a genuine booking or service relationship with the concerned salon.</p>
        </section>

        <section id="review-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Genuine Experience Requirement</h2>
          <p>Reviews and ratings must be based on the customer's genuine experience.</p>
          <p>Users must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Submit fake reviews</li>
            <li>Submit reviews for a salon they have not genuinely experienced</li>
            <li>Create multiple accounts to submit multiple reviews</li>
            <li>Submit reviews on behalf of another person</li>
            <li>Purchase or sell reviews</li>
            <li>Exchange money or benefits for positive or negative reviews</li>
            <li>Manipulate ratings through coordinated activity</li>
          </ul>
        </section>

        <section id="review-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Honest and Accurate Reviews</h2>
          <p>Customers should provide truthful and reasonably accurate feedback based on their actual experience.</p>
          <p>Reviews may discuss matters such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service quality</li>
            <li>Staff behaviour</li>
            <li>Cleanliness</li>
            <li>Appointment experience</li>
            <li>Waiting time</li>
            <li>Booking experience</li>
            <li>Service pricing</li>
            <li>Salon environment</li>
            <li>Overall customer experience</li>
          </ul>
          <p className="pt-2">Customers should avoid making statements they know to be false or misleading.</p>
        </section>

        <section id="review-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Ratings</h2>
          <p>Customers may provide a rating based on their genuine experience.</p>
          <p>Ratings should reflect the customer's actual experience with the salon or service.</p>
          <p>Users must not deliberately manipulate a salon's overall rating through fake, duplicate, coordinated, or fraudulent ratings.</p>
        </section>

        <section id="review-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Review Content Guidelines</h2>
          <p>Reviews should be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Relevant</li>
            <li>Respectful</li>
            <li>Clear</li>
            <li>Genuine</li>
            <li>Related to the salon or service experience</li>
          </ul>
          <p className="pt-2">Reviews should not contain unnecessary personal attacks, abusive language, threats, or unrelated information.</p>
        </section>

        <section id="review-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Prohibited Review Content</h2>
          <p>The following types of content are not permitted:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fake or fabricated reviews</li>
            <li>Fraudulent reviews</li>
            <li>Reviews intended to manipulate ratings</li>
            <li>Threats or harassment</li>
            <li>Hate or discriminatory content</li>
            <li>Sexually explicit or inappropriate content</li>
            <li>Graphic or disturbing content</li>
            <li>Personal information belonging to another person</li>
            <li>Passwords or payment information</li>
            <li>Malicious links or harmful code</li>
            <li>Illegal content</li>
            <li>Content that infringes intellectual-property rights</li>
            <li>False accusations presented as facts</li>
            <li>Spam or repetitive content</li>
            <li>Advertising unrelated to the review</li>
            <li>Content intended to extort or threaten a salon or customer</li>
          </ul>
        </section>

        <section id="review-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Reviews Must Not Be Used for Extortion</h2>
          <p>Users must not threaten a salon, employee, customer, or other person with a negative review in order to obtain:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Money</li>
            <li>Free services</li>
            <li>Discounts</li>
            <li>Refunds that are not otherwise applicable</li>
            <li>Special treatment</li>
            <li>Other benefits</li>
          </ul>
          <p className="pt-2">Similarly, salons must not threaten customers with retaliation for leaving an honest review.</p>
        </section>

        <section id="review-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Reviews and Refunds</h2>
          <p>A customer must not be required to provide a positive review in order to receive a refund that they are otherwise entitled to under DigiSaloon's Cancellation & Refund Policy.</p>
          <p>Similarly, customers must not demand an unauthorized refund or benefit in exchange for removing or changing a review.</p>
        </section>

        <section id="review-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Salon Partner Responses</h2>
          <p>Where DigiSaloon provides a response feature, salon partners may respond to customer reviews.</p>
          <p>Salon responses should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Remain professional</li>
            <li>Address the relevant concern</li>
            <li>Avoid personal attacks</li>
            <li>Avoid revealing private customer information</li>
            <li>Avoid threats or harassment</li>
            <li>Follow applicable DigiSaloon policies</li>
          </ul>
          <p className="pt-2">Salon partners should not disclose confidential customer information in a public response.</p>
        </section>

        <section id="review-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Personal Information</h2>
          <p>Reviews should not contain unnecessary personal information about customers, salon employees, or other individuals.</p>
          <p>Users should not publicly post information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Personal phone numbers</li>
            <li>Home addresses</li>
            <li>Passwords</li>
            <li>Payment details</li>
            <li>Government identification information</li>
            <li>Private communications</li>
            <li>Other sensitive personal information</li>
          </ul>
          <p className="pt-2">DigiSaloon may remove content that creates a privacy or security concern.</p>
        </section>

        <section id="review-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Intellectual Property</h2>
          <p>Users must only upload photographs, videos, text, or other material that they have the right to use.</p>
          <p>Users should not submit copyrighted content belonging to another person or organization without appropriate authorization.</p>
          <p>DigiSaloon may remove content where it receives a valid intellectual-property complaint or otherwise determines that removal may be appropriate.</p>
        </section>

        <section id="review-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Review Moderation</h2>
          <p>DigiSaloon may use automated systems, manual review, or both to identify content that may violate this policy.</p>
          <p>DigiSaloon may review a review or rating when:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>It is reported by a user or salon</li>
            <li>It appears to violate this policy</li>
            <li>Fraudulent activity is suspected</li>
            <li>There is a credible dispute regarding its authenticity</li>
            <li>It contains prohibited content</li>
            <li>It creates a security or privacy concern</li>
          </ul>
        </section>

        <section id="review-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Removal or Restriction of Reviews</h2>
          <p>DigiSaloon may remove, hide, restrict, or otherwise limit access to a review or rating if it:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Violates this policy</li>
            <li>Violates the Terms & Conditions</li>
            <li>Contains prohibited content</li>
            <li>Is fraudulent or fabricated</li>
            <li>Is unrelated to the relevant salon or service</li>
            <li>Violates another person's rights</li>
            <li>Contains unauthorized personal information</li>
            <li>Is submitted through abusive or manipulative activity</li>
          </ul>
          <p className="pt-2">DigiSaloon does not guarantee that every review will remain permanently available.</p>
        </section>

        <section id="review-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Honest Negative Reviews</h2>
          <p>A negative review is not automatically considered a policy violation.</p>
          <p>Customers may provide negative feedback when it reflects their genuine experience.</p>
          <p>However, the review must still comply with this policy and must not contain threats, harassment, fabricated information, or other prohibited content.</p>
        </section>

        <section id="review-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Positive Reviews</h2>
          <p>Positive reviews must also be genuine.</p>
          <p>Users must not create or submit positive reviews in exchange for money, discounts, free services, gifts, or other benefits unless such activity is permitted under applicable law and appropriately disclosed.</p>
        </section>

        <section id="review-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Conflicts of Interest</h2>
          <p>Users should not submit reviews intended to unfairly promote or damage a business where the reviewer has a conflict of interest that makes the review misleading.</p>
          <p>Salon owners, employees, representatives, competitors, or other interested parties must not create fake customer reviews to manipulate the reputation or rating of a salon.</p>
        </section>

        <section id="review-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Review Editing</h2>
          <p>Where DigiSaloon provides an editing feature, users may be able to modify their review or rating.</p>
          <p>Any edited review must continue to comply with this policy.</p>
          <p>DigiSaloon may retain relevant records for security, moderation, fraud prevention, and legal purposes.</p>
        </section>

        <section id="review-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Review Reporting</h2>
          <p>Customers and salon partners may report a review that they believe violates this policy.</p>
          <p>A report should include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Review details</li>
            <li>Relevant salon information</li>
            <li>Reason for reporting</li>
            <li>Supporting information, where available</li>
          </ul>
          <p className="pt-2">DigiSaloon may review the report and take appropriate action.</p>
        </section>

        <section id="review-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Disputes About Reviews</h2>
          <p>DigiSaloon may receive complaints from salons or customers regarding the accuracy or appropriateness of a review.</p>
          <p>DigiSaloon may consider available information when reviewing the complaint.</p>
          <p>However, DigiSaloon may not be able to independently verify every statement made in a customer review.</p>
        </section>

        <section id="review-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. No Guarantee of Review Accuracy</h2>
          <p>Reviews represent the experiences and opinions of the users who submit them.</p>
          <p>DigiSaloon does not necessarily endorse or independently verify every statement contained in a review.</p>
          <p>Customers should consider reviews as one source of information when evaluating a salon.</p>
        </section>

        <section id="review-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Rating Calculations</h2>
          <p>Where DigiSaloon displays an overall salon rating, the displayed rating may be calculated using ratings submitted through the platform.</p>
          <p>The displayed rating may change as new ratings are submitted or existing ratings are removed or restricted in accordance with applicable policies.</p>
        </section>

        <section id="review-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Manipulation and Abuse</h2>
          <p>DigiSaloon may investigate activity that appears to manipulate reviews or ratings.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Multiple accounts</li>
            <li>Repeated ratings</li>
            <li>Coordinated review campaigns</li>
            <li>Fake bookings</li>
            <li>Incentivized reviews intended to manipulate ratings</li>
            <li>Automated submissions</li>
            <li>Other fraudulent activity</li>
          </ul>
          <p className="pt-2">Appropriate action may be taken against accounts involved in such activity.</p>
        </section>

        <section id="review-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Account Restrictions</h2>
          <p>Serious or repeated violations of this Review & Rating Policy may result in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Removal of reviews</li>
            <li>Restriction of review functionality</li>
            <li>Temporary account restrictions</li>
            <li>Suspension of an account</li>
            <li>Termination of an account</li>
          </ul>
          <p className="pt-2">The action taken may depend on the nature and circumstances of the violation.</p>
        </section>

        <section id="review-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Privacy</h2>
          <p>Information associated with reviews and ratings may be processed according to the DigiSaloon Privacy Policy.</p>
          <p>DigiSaloon may process review-related information for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Review publication</li>
            <li>Moderation</li>
            <li>Fraud prevention</li>
            <li>Customer support</li>
            <li>Dispute resolution</li>
            <li>Platform improvement</li>
            <li>Legal and regulatory compliance</li>
          </ul>
        </section>

        <section id="review-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Changes to This Policy</h2>
          <p>DigiSaloon may update this Review & Rating Policy from time to time to reflect changes in its services, features, moderation practices, technology, or applicable requirements.</p>
          <p>The updated policy will be published on the DigiSaloon website or application with the revised effective date.</p>
        </section>

        <section id="review-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Contact Us</h2>
          <p>For questions, complaints, or reports regarding reviews and ratings, please contact:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-3 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline">
                support@digisaloon.in
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:9973499471" className="text-red-400 hover:underline">
                9973499471
              </a>
            </p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand 835103</p>
          </div>
          <p className="pt-2">By submitting a review or rating through DigiSaloon, users acknowledge and agree to follow this Review & Rating Policy.</p>
        </section>

      </div>
    </div>
  );
};