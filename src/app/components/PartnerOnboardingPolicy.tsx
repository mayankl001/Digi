import React from "react";

export const PartnerOnboardingPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Onboarding Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PARTNER ONBOARDING & VERIFICATION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Partner Onboarding & Verification Policy explains the process and requirements for salons that wish to register and operate as partners on the DigiSaloon platform.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="onb-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>The purpose of this Policy is to establish a consistent process for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon registration</li>
            <li>Partner onboarding</li>
            <li>Business verification</li>
            <li>Document verification</li>
            <li>Account activation</li>
            <li>Partner information updates</li>
          </ul>
        </section>

        <section id="onb-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Eligibility</h2>
          <p>A salon wishing to become a DigiSaloon partner must:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Operate a legitimate salon or applicable grooming business</li>
            <li>Have authority to represent the business</li>
            <li>Provide accurate business information</li>
            <li>Provide required verification information</li>
            <li>Agree to DigiSaloon's applicable Partner Terms and policies</li>
          </ul>
          <p className="text-xs text-slate-500">DigiSaloon may refuse or delay onboarding where required information or verification is incomplete.</p>
        </section>

        <section id="onb-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Partner Registration</h2>
          <p>The salon owner or authorized representative may register through the designated DigiSaloon partner platform.</p>
          <p>The registration process may require information including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon/business name</li>
            <li>Owner or authorized representative name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Salon address</li>
            <li>Operating hours</li>
            <li>Services offered</li>
            <li>Service pricing</li>
            <li>Bank/settlement information</li>
            <li>Other information reasonably required for onboarding</li>
          </ul>
        </section>

        <section id="onb-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Authorized Representative</h2>
          <p>The person registering a salon must have the authority to represent the salon.</p>
          <p>If an employee or other representative registers the salon, the salon owner remains responsible for ensuring that the person has appropriate authorization.</p>
        </section>

        <section id="onb-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Business Information</h2>
          <p>Partners must provide accurate and current information about the salon.</p>
          <p>False, misleading or materially incomplete information may result in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verification failure</li>
            <li>Delayed activation</li>
            <li>Account restriction</li>
            <li>Suspension</li>
            <li>Termination of the partner relationship</li>
          </ul>
        </section>

        <section id="onb-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Verification Information</h2>
          <p>DigiSaloon may request documents or information reasonably necessary to verify the salon or its authorized representative.</p>
          <p>Depending on the applicable onboarding process, this may include:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Identity information</li>
            <li>Business information</li>
            <li>Address information</li>
            <li>Bank account information</li>
            <li>Applicable registration or license information</li>
            <li>Other verification documents</li>
          </ul>
          <p className="text-xs text-slate-500">The exact requirements may vary depending on the salon and applicable legal or operational requirements.</p>
        </section>

        <section id="onb-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Document Verification</h2>
          <p>Documents submitted during onboarding may be reviewed for:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Authenticity</li>
            <li>Completeness</li>
            <li>Consistency</li>
            <li>Validity</li>
            <li>Relevance to the registered business</li>
          </ul>
          <p>DigiSaloon may request clarification or additional documentation where necessary.</p>
        </section>

        <section id="onb-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Bank and Settlement Verification</h2>
          <p>Where online-paid bookings are eligible for salon settlement, DigiSaloon may require accurate bank or settlement information.</p>
          <p>The partner is responsible for ensuring that:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Account details are correct</li>
            <li>The account belongs to or is authorized for the salon/business</li>
            <li>Settlement information is kept updated</li>
          </ul>
          <p className="text-xs font-semibold text-slate-900">Incorrect information may cause settlement delays.</p>
        </section>

        <section id="onb-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Partner Approval</h2>
          <p>Completion of registration does not automatically guarantee partner approval.</p>
          <p>DigiSaloon may review the submitted information before activating the salon.</p>
          <p>A partner account may be activated only after the applicable onboarding requirements have been satisfied.</p>
        </section>

        <section id="onb-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Verification Failure</h2>
          <p>DigiSaloon may decline or delay verification where:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Required information is missing</li>
            <li>Documents are unclear</li>
            <li>Information is inconsistent</li>
            <li>Verification cannot be completed</li>
            <li>Information appears false or misleading</li>
            <li>Security or compliance concerns exist</li>
          </ul>
        </section>

        <section id="onb-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Account Activation</h2>
          <p>After successful onboarding, the partner may receive access to applicable DigiSaloon partner functionality, including:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web functionality, where applicable</li>
            <li>Booking management</li>
            <li>Service management</li>
            <li>Business profile management</li>
            <li>Other authorized features</li>
          </ul>
          <p className="text-xs text-slate-500">Access may depend on the partner's role and permissions.</p>
        </section>

        <section id="onb-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Profile Accuracy</h2>
          <p>Partners must keep their DigiSaloon profile accurate.</p>
          <p>Partners should update information relating to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon address</li>
            <li>Contact information</li>
            <li>Operating hours</li>
            <li>Services</li>
            <li>Prices</li>
            <li>Availability</li>
            <li>Bank/settlement information</li>
            <li>Authorized staff</li>
          </ul>
        </section>

        <section id="onb-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Changes in Ownership</h2>
          <p>If ownership or control of a salon changes, the partner must notify DigiSaloon where the change affects the registered partner information.</p>
          <p>DigiSaloon may require re-verification before continuing certain partner services.</p>
        </section>

        <section id="onb-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Changes in Bank Information</h2>
          <p>Partners must promptly notify DigiSaloon of changes to settlement information.</p>
          <p>DigiSaloon may temporarily restrict settlements where necessary to verify updated banking information.</p>
        </section>

        <section id="onb-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Partner Staff</h2>
          <p>Salon owners may provide authorized staff with appropriate access to DigiSaloon systems.</p>
          <p>The salon owner is responsible for ensuring that staff access is:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Authorized</li>
            <li>Appropriate</li>
            <li>Secure</li>
            <li>Removed when no longer required</li>
          </ul>
        </section>

        <section id="onb-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Duplicate Salon Accounts</h2>
          <p>Partners should not create multiple accounts for the same salon without authorization from DigiSaloon.</p>
          <p>Duplicate or misleading accounts may be restricted or removed.</p>
        </section>

        <section id="onb-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Verification Re-check</h2>
          <p>DigiSaloon may request verification again when reasonably necessary, including where:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Business information changes</li>
            <li>Ownership changes</li>
            <li>Bank details change</li>
            <li>Security concerns arise</li>
            <li>Information becomes outdated</li>
            <li>Legal or operational requirements change</li>
          </ul>
        </section>

        <section id="onb-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Suspension During Verification</h2>
          <p>DigiSaloon may temporarily restrict certain partner functionality while verification or re-verification is pending.</p>
          <p>Such restrictions may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>New booking acceptance</li>
            <li>Settlement</li>
            <li>Account access</li>
            <li>Profile changes</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">depending on the circumstances.</p>
        </section>

        <section id="onb-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Fraudulent Information</h2>
          <p>Providing forged, fraudulent or intentionally misleading information may result in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Immediate account restriction</li>
            <li>Verification failure</li>
            <li>Suspension</li>
            <li>Termination</li>
            <li>Further action where appropriate</li>
          </ul>
        </section>

        <section id="onb-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Data Handling</h2>
          <p>Information collected during partner onboarding may be processed for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Partner verification</li>
            <li>Account creation</li>
            <li>Payment and settlement</li>
            <li>Security</li>
            <li>Fraud prevention</li>
            <li>Customer service</li>
            <li>Legal compliance</li>
            <li>Platform operations</li>
          </ul>
          <p>DigiSaloon will handle applicable personal information according to its Privacy Policy and applicable requirements.</p>
        </section>

        <section id="onb-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Third-Party Verification</h2>
          <p>DigiSaloon may use authorized third-party service providers where reasonably necessary for:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Identity verification</li>
            <li>Payment verification</li>
            <li>Document verification</li>
            <li>Fraud prevention</li>
            <li>Security</li>
            <li>Other onboarding-related functions</li>
          </ul>
          <p>Such providers may process information according to applicable agreements and policies.</p>
        </section>

        <section id="onb-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. No Guarantee of Approval</h2>
          <p>Submitting an onboarding application does not guarantee that DigiSaloon will approve or activate the salon.</p>
          <p>DigiSaloon may make onboarding decisions based on applicable verification, operational, security and compliance requirements.</p>
        </section>

        <section id="onb-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Partner Responsibilities After Approval</h2>
          <p>After activation, the partner must continue to comply with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon Partner Terms & Conditions</li>
            <li>Partner Service, Pricing & Cancellation Policy</li>
            <li>Partner Payout & Settlement Terms</li>
            <li>Review & Rating Policy</li>
            <li>Security requirements</li>
            <li>Applicable DigiSaloon policies</li>
          </ul>
        </section>

        <section id="onb-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Policy Updates</h2>
          <p>DigiSaloon may update this Policy to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Onboarding procedures</li>
            <li>Verification requirements</li>
            <li>Technology</li>
            <li>Security practices</li>
            <li>Payment systems</li>
            <li>Applicable legal or regulatory requirements</li>
          </ul>
          <p>The latest version may be published through the DigiSaloon website or partner platform.</p>
        </section>

        <section id="onb-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Contact</h2>
          <p>For partner onboarding and verification support:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};