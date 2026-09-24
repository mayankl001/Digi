import React from "react";

export const PartnerOnboardingPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Partner Onboarding & Verification Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PARTNER ONBOARDING & VERIFICATION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Partner Onboarding & Verification Policy explains the process and requirements for salons, salon owners, businesses, and authorized representatives who wish to register and operate as Salon Partners on DigiSaloon.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          The purpose of this Policy is to help ensure that participating salons provide accurate business information and meet the applicable requirements for using DigiSaloon's booking and partner services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By applying to become a DigiSaloon Salon Partner, you agree to this Policy, the DigiSaloon Salon Partner Terms & Conditions, Privacy Policy, Payment & Settlement Policy, Booking & Appointment Policy, and other applicable DigiSaloon policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="onboarding-policy-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose of Partner Onboarding</h2>
          <p>DigiSaloon may onboard salons to enable them to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>List their salon on DigiSaloon</li>
            <li>Display salon information</li>
            <li>List available services</li>
            <li>Receive customer bookings</li>
            <li>Manage Live Bookings</li>
            <li>Manage Schedule Bookings</li>
            <li>Receive applicable booking settlements</li>
            <li>Manage salon availability</li>
            <li>Respond to customer-related booking information</li>
            <li>Access applicable partner tools and services</li>
          </ul>
        </section>

        <section id="onboarding-policy-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Who Can Apply</h2>
          <p>The following may apply to become a DigiSaloon Partner, subject to eligibility and verification:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon owners</li>
            <li>Sole proprietors</li>
            <li>Partnership businesses</li>
            <li>Companies</li>
            <li>LLPs</li>
            <li>Other legally permitted business entities</li>
            <li>Authorized representatives of a salon</li>
          </ul>
          <p className="pt-2">The applicant must have appropriate authority to represent the salon or business.</p>
        </section>

        <section id="onboarding-policy-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Partner Application</h2>
          <p>A prospective Partner may be required to submit information through the DigiSaloon partner onboarding process.</p>
          <p>Information requested may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon name</li>
            <li>Owner or authorized representative name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Salon address</li>
            <li>Business details</li>
            <li>Services offered</li>
            <li>Service prices</li>
            <li>Operating hours</li>
            <li>Bank account information</li>
            <li>Tax information</li>
            <li>GSTIN, where applicable</li>
            <li>Business registration information, where applicable</li>
            <li>Identity or authorization documents</li>
            <li>Salon photographs</li>
            <li>Other information reasonably required for verification</li>
          </ul>
          <p className="pt-2">The exact requirements may vary depending on the nature of the salon and applicable legal or operational requirements.</p>
        </section>

        <section id="onboarding-policy-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Accurate Information Requirement</h2>
          <p>All information submitted during onboarding must be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accurate</li>
            <li>Complete</li>
            <li>Current</li>
            <li>Authentic</li>
            <li>Not misleading</li>
          </ul>
          <p className="pt-2">The applicant is responsible for checking all submitted information before completing the onboarding process.</p>
          <p>Providing false, misleading, forged, or unauthorized information may result in rejection, suspension, or termination of the Partner account.</p>
        </section>

        <section id="onboarding-policy-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Identity Verification</h2>
          <p>DigiSaloon may verify the identity of the salon owner or authorized representative.</p>
          <p>Depending on the onboarding process, DigiSaloon may request appropriate identity or authorization information.</p>
          <p>Verification may be used to confirm that the person applying has the authority to operate or represent the salon.</p>
        </section>

        <section id="onboarding-policy-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Business Verification</h2>
          <p>DigiSaloon may verify information relating to the salon business, including where applicable:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Business name</li>
            <li>Business address</li>
            <li>Ownership or authorization</li>
            <li>Registration details</li>
            <li>Contact details</li>
            <li>Tax information</li>
            <li>Other business information</li>
          </ul>
          <p className="pt-2">Verification may be performed using documents, information provided by the Partner, or appropriate verification services.</p>
        </section>

        <section id="onboarding-policy-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon Address Verification</h2>
          <p>The Partner must provide the actual operating address of the salon.</p>
          <p>DigiSaloon may use reasonable methods to verify the salon location where required.</p>
          <p>The Partner must notify DigiSaloon if the salon moves to another location or the registered address changes.</p>
        </section>

        <section id="onboarding-policy-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Contact Information Verification</h2>
          <p>The Partner may be required to verify:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Other contact information</li>
          </ul>
          <p className="pt-2">The Partner must maintain access to the registered contact information because DigiSaloon may use it for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account verification</li>
            <li>Booking communication</li>
            <li>Settlement communication</li>
            <li>Security alerts</li>
            <li>Support</li>
            <li>Important platform notices</li>
          </ul>
        </section>

        <section id="onboarding-policy-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Bank Account Verification</h2>
          <p>To receive applicable settlements, the Partner may be required to provide valid bank account information.</p>
          <p>The Partner is responsible for ensuring that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bank details are accurate</li>
            <li>The account is active</li>
            <li>The account belongs to or is authorized for the relevant salon/business</li>
            <li>Required verification information is provided</li>
          </ul>
          <p className="pt-2">Incorrect bank information may result in settlement delays.</p>
        </section>

        <section id="onboarding-policy-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. GST and Tax Information</h2>
          <p>Where applicable, DigiSaloon may request tax information such as a GSTIN.</p>
          <p>If a Partner provides a GSTIN, the Partner represents that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The GSTIN belongs to the relevant business</li>
            <li>The information provided is accurate</li>
            <li>The Partner is authorized to provide it</li>
          </ul>
          <p className="pt-2">DigiSaloon may verify GST-related information through appropriate verification methods or services.</p>
          <p>The Partner remains responsible for its own tax registration, filing, invoicing, and statutory obligations.</p>
        </section>

        <section id="onboarding-policy-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Salon Service Verification</h2>
          <p>The Partner may be required to provide information about services offered by the salon, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service name</li>
            <li>Service category</li>
            <li>Price</li>
            <li>Duration</li>
            <li>Applicable gender/category</li>
            <li>Description</li>
            <li>Availability</li>
          </ul>
          <p className="pt-2">DigiSaloon may review service information before or after listing it on the platform.</p>
        </section>

        <section id="onboarding-policy-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Pricing Verification</h2>
          <p>Partners must provide accurate service prices.</p>
          <p>DigiSaloon may review pricing information to identify:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Missing information</li>
            <li>Incorrect pricing</li>
            <li>Inconsistent information</li>
            <li>Unclear service descriptions</li>
            <li>Other information that may cause customer confusion</li>
          </ul>
          <p className="pt-2">The Partner is responsible for confirming that the final information displayed for its salon is accurate.</p>
        </section>

        <section id="onboarding-policy-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Salon Images and Content</h2>
          <p>The Partner may be asked to provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon photographs</li>
            <li>Logo</li>
            <li>Service images</li>
            <li>Service descriptions</li>
            <li>Promotional information</li>
            <li>Other business content</li>
          </ul>
          <p className="pt-2">The Partner must have the necessary rights or authorization to submit such content.</p>
          <p>DigiSaloon may reject or remove content that is misleading, inappropriate, unlawful, or violates third-party rights.</p>
        </section>

        <section id="onboarding-policy-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Operating Hours</h2>
          <p>The Partner must provide accurate operating hours.</p>
          <p>The Partner should promptly update DigiSaloon if there are changes due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Holidays</li>
            <li>Temporary closure</li>
            <li>Renovation</li>
            <li>Staff availability</li>
            <li>Emergency situations</li>
            <li>Permanent changes in business hours</li>
          </ul>
        </section>

        <section id="onboarding-policy-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Booking Availability Verification</h2>
          <p>Before activating bookings, DigiSaloon may require the Partner to configure:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Available services</li>
            <li>Operating hours</li>
            <li>Appointment slots</li>
            <li>Service duration</li>
            <li>Booking availability</li>
            <li>Other required booking settings</li>
          </ul>
          <p className="pt-2">Partners are responsible for maintaining accurate availability after onboarding.</p>
        </section>

        <section id="onboarding-policy-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Verification Process</h2>
          <p>DigiSaloon may conduct verification in one or more stages.</p>
          <p>The process may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Application submission</li>
            <li>Information review</li>
            <li>Contact verification</li>
            <li>Identity or authorization verification</li>
            <li>Business verification</li>
            <li>Bank account verification</li>
            <li>Tax information verification where applicable</li>
            <li>Service and pricing review</li>
            <li>Location or operational verification where required</li>
            <li>Partner account activation</li>
          </ul>
          <p className="pt-2">Not every Partner will necessarily require every verification step.</p>
        </section>

        <section id="onboarding-policy-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Additional Information Requests</h2>
          <p>DigiSaloon may request additional information or documents where reasonably necessary.</p>
          <p>Additional verification may be required if:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Information is incomplete</li>
            <li>Information conflicts with available records</li>
            <li>Business ownership is unclear</li>
            <li>Bank details require verification</li>
            <li>Tax information requires verification</li>
            <li>Suspicious activity is detected</li>
            <li>The Partner changes important account information</li>
          </ul>
        </section>

        <section id="onboarding-policy-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Verification Time</h2>
          <p>The time required for onboarding may vary depending on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Completeness of submitted information</li>
            <li>Document availability</li>
            <li>Verification requirements</li>
            <li>Third-party verification services</li>
            <li>Manual review</li>
            <li>Technical issues</li>
            <li>Other operational factors</li>
          </ul>
          <p className="pt-2">DigiSaloon does not guarantee that every onboarding application will be approved within a specific time unless expressly stated.</p>
        </section>

        <section id="onboarding-policy-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Approval Is Not Automatic</h2>
          <p>Submitting an application does not guarantee Partner approval.</p>
          <p>DigiSaloon may approve, reject, pause, or request additional information regarding an application based on applicable onboarding requirements.</p>
        </section>

        <section id="onboarding-policy-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Provisional or Conditional Approval</h2>
          <p>DigiSaloon may, where appropriate, provide provisional or conditional access subject to completion of additional verification requirements.</p>
          <p>The Partner may have limited access to certain features until verification is completed.</p>
        </section>

        <section id="onboarding-policy-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Rejection of Application</h2>
          <p>DigiSaloon may reject an application where:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Required information is missing</li>
            <li>Information cannot be verified</li>
            <li>The applicant lacks authority to represent the salon</li>
            <li>Business information appears materially inaccurate</li>
            <li>Required eligibility conditions are not satisfied</li>
            <li>The proposed activity violates DigiSaloon policies</li>
            <li>There are legitimate legal, security, fraud, or operational concerns</li>
          </ul>
          <p className="pt-2">Where appropriate, DigiSaloon may communicate the reason or general basis for rejection.</p>
        </section>

        <section id="onboarding-policy-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Re-Application</h2>
          <p>A rejected applicant may be permitted to apply again after correcting incomplete or inaccurate information, subject to DigiSaloon's onboarding requirements.</p>
          <p>Re-application does not guarantee approval.</p>
        </section>

        <section id="onboarding-policy-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Verification of Existing Partners</h2>
          <p>DigiSaloon may periodically review or re-verify existing Partner information.</p>
          <p>Re-verification may be required when:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Ownership changes</li>
            <li>Salon address changes</li>
            <li>Bank details change</li>
            <li>GST or tax information changes</li>
            <li>Important business information changes</li>
            <li>Security concerns arise</li>
            <li>Required information becomes outdated</li>
            <li>DigiSaloon's verification requirements change</li>
          </ul>
        </section>

        <section id="onboarding-policy-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Changes to Partner Information</h2>
          <p>The Partner must promptly update DigiSaloon regarding material changes to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Owner or authorized representative</li>
            <li>Salon address</li>
            <li>Contact information</li>
            <li>Bank account</li>
            <li>GSTIN or tax information</li>
            <li>Business registration</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Operating hours</li>
          </ul>
          <p className="pt-2">DigiSaloon may require re-verification after significant changes.</p>
        </section>

        <section id="onboarding-policy-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Bank Account Changes</h2>
          <p>Changes to settlement bank account information may require additional verification.</p>
          <p>DigiSaloon may temporarily delay applicable settlements while updated bank information is being verified.</p>
          <p>This is intended to reduce the risk of unauthorized settlement redirection.</p>
        </section>

        <section id="onboarding-policy-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. GSTIN Changes</h2>
          <p>If a Partner's GST registration information changes, is cancelled, expires, or otherwise becomes inaccurate, the Partner must notify DigiSaloon where applicable.</p>
          <p>DigiSaloon may request updated documentation or verification information.</p>
        </section>

        <section id="onboarding-policy-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Verification and Payment Settlement</h2>
          <p>Partner verification may be required before applicable settlement functionality is activated.</p>
          <p>The current DigiSaloon payment model provides:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer booking payment: ₹50.19</li>
            <li>Applicable payment gateway deduction: ₹1.19</li>
            <li>Net booking amount attributable to salon: ₹49</li>
          </ul>
          <p className="pt-2">The applicable ₹49 amount may be settled to the Partner's verified settlement account.</p>
          <p>DigiSaloon generally targets settlement on the same day or next working day, subject to successful payment processing, reconciliation, bank processing, and applicable holds.</p>
        </section>

        <section id="onboarding-policy-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Verification and Customer Trust</h2>
          <p>Partner verification is intended to help confirm relevant business information.</p>
          <p>Verification does not constitute a guarantee or certification by DigiSaloon regarding:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service quality</li>
            <li>Business profitability</li>
            <li>Customer satisfaction</li>
            <li>Professional qualifications beyond information verified</li>
            <li>Future salon performance</li>
            <li>Any specific service outcome</li>
          </ul>
          <p className="pt-2">Customers should consider the information available on the platform and make their own booking decisions.</p>
        </section>

        <section id="onboarding-policy-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. False or Fraudulent Information</h2>
          <p>The Partner must not submit:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Forged documents</li>
            <li>False identity information</li>
            <li>False business information</li>
            <li>False GST information</li>
            <li>Unauthorized bank details</li>
            <li>Misleading service information</li>
            <li>Fraudulent salon photographs</li>
            <li>Information belonging to another business without authorization</li>
          </ul>
          <p className="pt-2">DigiSaloon may suspend or terminate the Partner account if such information is discovered.</p>
        </section>

        <section id="onboarding-policy-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Unauthorized Representation</h2>
          <p>A person must not register a salon on DigiSaloon without appropriate authority from the salon owner or business.</p>
          <p>If DigiSaloon receives a credible complaint regarding unauthorized representation, it may review the account and supporting information.</p>
        </section>

        <section id="onboarding-policy-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Security and Fraud Prevention</h2>
          <p>DigiSaloon may use onboarding information to help prevent:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Identity fraud</li>
            <li>Business impersonation</li>
            <li>Payment fraud</li>
            <li>Fake salon listings</li>
            <li>Unauthorized account access</li>
            <li>Promotional abuse</li>
            <li>Other platform misuse</li>
          </ul>
          <p className="pt-2">Additional verification may be requested where reasonably necessary.</p>
        </section>

        <section id="onboarding-policy-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. Partner Data and Privacy</h2>
          <p>Information collected during onboarding will be handled according to the DigiSaloon Privacy Policy and applicable law.</p>
          <p>DigiSaloon may use Partner information for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account creation</li>
            <li>Verification</li>
            <li>Booking operations</li>
            <li>Payment and settlement</li>
            <li>Customer support</li>
            <li>Security</li>
            <li>Fraud prevention</li>
            <li>Legal compliance</li>
            <li>Platform administration</li>
          </ul>
        </section>

        <section id="onboarding-policy-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. Third-Party Verification Services</h2>
          <p>DigiSaloon may use authorized third-party service providers to assist with verification, payment processing, communication, hosting, security, or other platform functions.</p>
          <p>The specific information shared with such providers will depend on the relevant service and applicable legal requirements.</p>
        </section>

        <section id="onboarding-policy-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. Document Retention</h2>
          <p>DigiSaloon may retain certain onboarding and verification records where reasonably necessary for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Legal compliance</li>
            <li>Tax and accounting requirements</li>
            <li>Payment and settlement</li>
            <li>Fraud prevention</li>
            <li>Security</li>
            <li>Dispute resolution</li>
            <li>Business records</li>
            <li>Enforcement of agreements</li>
          </ul>
          <p className="pt-2">Retention will be handled according to the DigiSaloon Privacy Policy and applicable law.</p>
        </section>

        <section id="onboarding-policy-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. Verification Failure</h2>
          <p>If a Partner fails to complete required verification, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Pause onboarding</li>
            <li>Restrict account functionality</li>
            <li>Disable booking access</li>
            <li>Delay applicable settlement processing</li>
            <li>Request additional information</li>
            <li>Suspend the Partner account</li>
            <li>Take other appropriate action</li>
          </ul>
          <p className="pt-2">The specific action may depend on the nature of the verification issue.</p>
        </section>

        <section id="onboarding-policy-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. Partner Account Suspension During Review</h2>
          <p>DigiSaloon may temporarily restrict a Partner account while reviewing:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Ownership information</li>
            <li>Bank details</li>
            <li>Tax information</li>
            <li>Fraud concerns</li>
            <li>Security concerns</li>
            <li>Material business changes</li>
            <li>Other verification issues</li>
          </ul>
          <p className="pt-2">Where appropriate, DigiSaloon may notify the Partner of the relevant action.</p>
        </section>

        <section id="onboarding-policy-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. Partner Responsibility After Approval</h2>
          <p>Approval does not remove the Partner's responsibility to maintain accurate information.</p>
          <p>The Partner remains responsible for ensuring that all information shown on DigiSaloon remains current and accurate.</p>
        </section>

        <section id="onboarding-policy-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. No Guarantee of Continuous Listing</h2>
          <p>Partner approval does not guarantee that the salon will remain listed on DigiSaloon indefinitely.</p>
          <p>DigiSaloon may suspend, deactivate, or remove a listing where permitted under its policies, agreement, or applicable law.</p>
        </section>

        <section id="onboarding-policy-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. Partner Onboarding Fees</h2>
          <p>Unless separately communicated or agreed, submitting a Partner onboarding application does not itself guarantee or imply a particular onboarding fee or commercial arrangement.</p>
          <p>Any applicable commercial charges will be communicated through the relevant Partner agreement or applicable DigiSaloon terms.</p>
        </section>

        <section id="onboarding-policy-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. Relationship With Salon Partner Terms</h2>
          <p>This Policy forms part of the overall terms governing the DigiSaloon-Salon Partner relationship.</p>
          <p>The Partner must also comply with the DigiSaloon Salon Partner Terms & Conditions and other applicable Partner policies.</p>
        </section>

        <section id="onboarding-policy-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. Changes to This Policy</h2>
          <p>DigiSaloon may update this Partner Onboarding & Verification Policy from time to time to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Verification procedures</li>
            <li>Platform features</li>
            <li>Payment systems</li>
            <li>Security requirements</li>
            <li>Legal requirements</li>
            <li>Tax requirements</li>
            <li>Business operations</li>
          </ul>
          <p className="pt-2">The updated version will be made available through appropriate DigiSaloon channels.</p>
        </section>

        <section id="onboarding-policy-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. Contact Us</h2>
          <p>For questions regarding Partner onboarding, verification, documents, account activation, or verification status, please contact:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-3 text-xs md:text-sm mt-3">
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
          <p className="pt-2 text-xs text-slate-500">Partners should provide sufficient information to help DigiSaloon identify the relevant application or account.</p>
          <p className="pt-2">By applying to become or continuing to operate as a DigiSaloon Salon Partner, the Partner acknowledges and agrees to comply with this Partner Onboarding & Verification Policy.</p>
        </section>

      </div>
    </div>
  );
};