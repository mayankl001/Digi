import React from "react";

export const ContentPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Content Policy & Community Guidelines
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          CONTENT POLICY & COMMUNITY GUIDELINES
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Content Policy & Community Guidelines explains the standards that apply to content, reviews, ratings, profiles, service information, images, messages, and other user-generated content submitted or displayed through DigiSaloon.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          The purpose of this policy is to maintain a trustworthy, respectful, safe, and useful platform for customers, salon partners, barbers, and other users.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="content-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This policy applies to content submitted or displayed through DigiSaloon, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer reviews and ratings</li>
            <li>Salon reviews and responses</li>
            <li>Salon profiles</li>
            <li>Salon names and descriptions</li>
            <li>Service names and descriptions</li>
            <li>Service prices and information</li>
            <li>Salon photographs and images</li>
            <li>Profile information</li>
            <li>Comments and messages</li>
            <li>Promotional content</li>
            <li>Other user-generated content</li>
          </ul>
        </section>

        <section id="content-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. General Content Standards</h2>
          <p>All content submitted to DigiSaloon should be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accurate and relevant</li>
            <li>Respectful and appropriate</li>
            <li>Related to the salon, service, booking, or DigiSaloon platform</li>
            <li>Free from misleading information</li>
            <li>Compliant with applicable laws</li>
            <li>Respectful of the rights of other people and businesses</li>
          </ul>
          <p className="pt-2">Users should not submit content that may harm, deceive, threaten, harass, or unfairly target another person or business.</p>
        </section>

        <section id="content-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Reviews and Ratings</h2>
          <p>Customers may submit a review or rating after an eligible booking or service experience.</p>
          <p>Reviews should reflect the customer's genuine experience.</p>
          <p>Users must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Submit fake or fabricated reviews</li>
            <li>Review a salon without a genuine experience</li>
            <li>Submit multiple reviews intended to manipulate ratings</li>
            <li>Offer or request payment or other benefits in exchange for reviews</li>
            <li>Threaten a salon or customer to obtain a particular rating</li>
            <li>Submit reviews on behalf of another person</li>
            <li>Deliberately misrepresent a service or experience</li>
          </ul>
          <p className="pt-2">DigiSaloon may remove or restrict reviews that violate this policy.</p>
        </section>

        <section id="content-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Honest and Relevant Reviews</h2>
          <p>Reviews should focus on the actual salon or service experience.</p>
          <p>Examples of relevant review topics include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service experience</li>
            <li>Appointment experience</li>
            <li>Staff behaviour</li>
            <li>Cleanliness</li>
            <li>Waiting time</li>
            <li>Service quality</li>
            <li>Booking experience</li>
            <li>Accuracy of service information</li>
          </ul>
          <p className="pt-2">Personal attacks, unrelated accusations, or irrelevant content may be removed.</p>
        </section>

        <section id="content-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Prohibited Content</h2>
          <p>Users must not upload, publish, send, or otherwise distribute content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Is illegal or promotes illegal activity</li>
            <li>Contains threats or harassment</li>
            <li>Encourages violence or harm</li>
            <li>Contains hateful or discriminatory attacks</li>
            <li>Contains sexually explicit or inappropriate material</li>
            <li>Contains pornography</li>
            <li>Exploits or sexualizes minors</li>
            <li>Contains graphic or disturbing material</li>
            <li>Promotes dangerous activities</li>
            <li>Promotes fraud, scams, or deception</li>
            <li>Impersonates another person or organization</li>
            <li>Contains malicious software or harmful code</li>
            <li>Attempts to obtain passwords, payment information, or other sensitive information</li>
            <li>Violates another person's privacy</li>
            <li>Contains personal information of another person without appropriate authorization</li>
            <li>Infringes copyright, trademark, or other intellectual-property rights</li>
            <li>Is deliberately misleading or fraudulent</li>
          </ul>
        </section>

        <section id="content-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Harassment and Abuse</h2>
          <p>DigiSaloon does not permit harassment, bullying, intimidation, or abusive behaviour directed at customers, salon partners, employees, service providers, or other users.</p>
          <p>This includes:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Repeated unwanted contact</li>
            <li>Threats</li>
            <li>Personal attacks</li>
            <li>Abusive messages</li>
            <li>Intimidation</li>
            <li>Targeted harassment</li>
            <li>Attempts to deliberately damage another person's reputation through false information</li>
          </ul>
        </section>

        <section id="content-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Hate and Discrimination</h2>
          <p>Content that attacks, threatens, or promotes discrimination against individuals or groups based on protected characteristics is not permitted.</p>
          <p>DigiSaloon aims to provide an environment where customers, salon partners, employees, and other users can interact respectfully.</p>
        </section>

        <section id="content-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. False or Misleading Information</h2>
          <p>Users must not intentionally provide false or misleading information about:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon services</li>
            <li>Prices</li>
            <li>Offers</li>
            <li>Availability</li>
            <li>Booking status</li>
            <li>Qualifications</li>
            <li>Business identity</li>
            <li>Customer experiences</li>
            <li>Reviews</li>
            <li>Promotions</li>
          </ul>
          <p className="pt-2">Salon partners are responsible for keeping their salon information, services, prices, operating hours, and other business information accurate and up to date.</p>
        </section>

        <section id="content-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Promotional and Commercial Content</h2>
          <p>Salon partners may provide legitimate information about their services and offers through approved DigiSaloon features.</p>
          <p>Promotional content must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Mislead customers</li>
            <li>Contain fraudulent claims</li>
            <li>Misrepresent prices</li>
            <li>Create false urgency</li>
            <li>Impersonate another business</li>
            <li>Promote prohibited products or services</li>
            <li>Violate applicable advertising or consumer-protection requirements</li>
          </ul>
        </section>

        <section id="content-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Images and Media</h2>
          <p>Images, videos, logos, and other media uploaded to DigiSaloon must be appropriate and relevant to the purpose for which they are submitted.</p>
          <p>Users must have the necessary rights or authorization to upload content.</p>
          <p>Users must not upload:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Copyrighted material without permission</li>
            <li>Private photographs without appropriate authorization</li>
            <li>Explicit or inappropriate material</li>
            <li>Images intended to harass or threaten another person</li>
            <li>Misleading images that falsely represent a salon or service</li>
          </ul>
        </section>

        <section id="content-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Personal Information and Privacy</h2>
          <p>Users should not publicly post sensitive personal information belonging to themselves or another person.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Phone numbers</li>
            <li>Home addresses</li>
            <li>Passwords</li>
            <li>Payment information</li>
            <li>Government identification details</li>
            <li>Private communications</li>
            <li>Other sensitive personal information</li>
          </ul>
          <p className="pt-2">DigiSaloon may remove content that creates a privacy or security risk.</p>
        </section>

        <section id="content-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Intellectual Property</h2>
          <p>Users must respect copyrights, trademarks, logos, photographs, designs, written content, and other intellectual-property rights.</p>
          <p>You should only upload content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>You created yourself; or</li>
            <li>You have permission or legal rights to use.</li>
          </ul>
          <p className="pt-2">DigiSaloon may remove content where it receives a valid intellectual-property complaint or otherwise determines that the content may violate applicable rights.</p>
        </section>

        <section id="content-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Spam and Manipulation</h2>
          <p>Users must not use DigiSaloon to distribute spam or manipulate platform activity.</p>
          <p>Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Repeated irrelevant content</li>
            <li>Automated submissions intended to abuse the platform</li>
            <li>Fake accounts</li>
            <li>Artificial review activity</li>
            <li>Repeated promotional messages</li>
            <li>Attempts to manipulate ratings or rankings</li>
            <li>Abuse of booking or platform features</li>
          </ul>
        </section>

        <section id="content-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Platform and Booking Abuse</h2>
          <p>Users must not intentionally misuse DigiSaloon's booking, review, payment, or other platform features.</p>
          <p>This includes attempts to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create fraudulent bookings</li>
            <li>Manipulate availability</li>
            <li>Abuse cancellation or refund systems</li>
            <li>Exploit technical errors</li>
            <li>Circumvent platform restrictions</li>
            <li>Interfere with the normal operation of DigiSaloon</li>
          </ul>
        </section>

        <section id="content-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Salon Partner Responsibilities</h2>
          <p>Salon partners are responsible for ensuring that information submitted to DigiSaloon about their business is accurate and lawful.</p>
          <p>Salon partners should ensure that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service descriptions are accurate</li>
            <li>Prices are correctly displayed</li>
            <li>Operating hours are updated</li>
            <li>Images represent the actual salon or services</li>
            <li>Offers and promotions are genuine</li>
            <li>Customer interactions remain professional</li>
            <li>Content does not violate applicable laws or third-party rights</li>
          </ul>
        </section>

        <section id="content-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Customer Responsibilities</h2>
          <p>Customers are responsible for the content they submit to DigiSaloon.</p>
          <p>Customers should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Provide genuine reviews</li>
            <li>Provide accurate information where required</li>
            <li>Communicate respectfully</li>
            <li>Avoid abusive or threatening behaviour</li>
            <li>Avoid fraudulent bookings</li>
            <li>Respect salon staff and other users</li>
          </ul>
        </section>

        <section id="content-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Content Moderation</h2>
          <p>DigiSaloon may review content submitted through its platform where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Enforce this policy</li>
            <li>Protect users</li>
            <li>Investigate complaints</li>
            <li>Prevent fraud or abuse</li>
            <li>Maintain platform integrity</li>
            <li>Comply with applicable laws</li>
            <li>Respond to valid legal requests</li>
          </ul>
          <p className="pt-2">DigiSaloon may use automated systems, manual review, or a combination of both for content moderation.</p>
        </section>

        <section id="content-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Removal or Restriction of Content</h2>
          <p>DigiSaloon may remove, restrict, hide, edit, or disable access to content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Violates this policy</li>
            <li>Violates the Terms & Conditions</li>
            <li>Is unlawful</li>
            <li>Creates a security or safety risk</li>
            <li>Is fraudulent or misleading</li>
            <li>Violates another person's rights</li>
            <li>Is reported and determined to be inappropriate</li>
          </ul>
          <p className="pt-2">DigiSaloon may also restrict the ability of an account to submit content where repeated violations occur.</p>
        </section>

        <section id="content-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Account Restrictions</h2>
          <p>Serious or repeated violations of this Content Policy may result in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Removal of content</li>
            <li>Restriction of specific platform features</li>
            <li>Temporary account restrictions</li>
            <li>Suspension of an account</li>
            <li>Termination of an account</li>
          </ul>
          <p className="pt-2">The action taken may depend on the nature and severity of the violation.</p>
        </section>

        <section id="content-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Reporting Content</h2>
          <p>Users who believe that content on DigiSaloon violates this policy may report it to DigiSaloon.</p>
          <p>A report should include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Relevant booking or salon details, where applicable</li>
            <li>Description of the issue</li>
            <li>The content being reported</li>
            <li>Supporting information, where available</li>
          </ul>
          <p className="pt-2">DigiSaloon may review reported content and take appropriate action.</p>
        </section>

        <section id="content-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Appeals and Clarifications</h2>
          <p>If a user believes that their content was incorrectly removed or restricted, they may contact DigiSaloon support and request a review.</p>
          <p>DigiSaloon may reconsider the action based on the information provided and the applicable policies.</p>
        </section>

        <section id="content-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Legal and Regulatory Compliance</h2>
          <p>DigiSaloon may remove or restrict content and take other appropriate action when required to comply with applicable laws, regulations, court orders, or lawful government requests.</p>
        </section>

        <section id="content-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Changes to This Policy</h2>
          <p>DigiSaloon may update this Content Policy & Community Guidelines from time to time.</p>
          <p>Changes may be made to reflect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>New platform features</li>
            <li>Changes in business operations</li>
            <li>User feedback</li>
            <li>Security requirements</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">The updated policy will be published on the DigiSaloon platform with the revised effective date.</p>
        </section>

        <section id="content-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Contact Us</h2>
          <p>For content-related concerns, reports, or questions, please contact:</p>
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
          <p className="pt-2">By using DigiSaloon and submitting content to the platform, users acknowledge and agree to follow this Content Policy & Community Guidelines.</p>
        </section>

      </div>
    </div>
  );
};