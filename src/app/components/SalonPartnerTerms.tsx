import React from "react";

export const SalonPartnerTerms: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Partner Terms
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          SALON PARTNER TERMS & CONDITIONS
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          These Salon Partner Terms & Conditions ("Partner Terms") govern the participation of salons and their authorized representatives on the DigiSaloon platform.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="part-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>These Partner Terms apply to salons using:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DigiSaloon Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web App</li>
            <li>DigiSaloon booking and appointment services</li>
            <li>Other authorized partner services</li>
          </ul>
          <p>By registering as a DigiSaloon salon partner, the salon agrees to these Partner Terms.</p>
        </section>

        <section id="part-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Partner Eligibility</h2>
          <p>A salon partner must provide accurate and legitimate business information and must have the authority to operate and represent the salon.</p>
          <p>DigiSaloon may request reasonable information or verification before approving or continuing a partnership.</p>
        </section>

        <section id="part-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Salon Profile</h2>
          <p>Partners are responsible for maintaining accurate information, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon name</li>
            <li>Address</li>
            <li>Contact information</li>
            <li>Operating hours</li>
            <li>Services</li>
            <li>Service prices</li>
            <li>Images</li>
            <li>Staff/service information</li>
            <li>Appointment availability</li>
          </ul>
          <p>Partners should promptly update information that becomes inaccurate.</p>
        </section>

        <section id="part-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Services and Pricing</h2>
          <p>The salon partner is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Defining available services</li>
            <li>Setting applicable prices</li>
            <li>Maintaining accurate service descriptions</li>
            <li>Updating unavailable services</li>
            <li>Honoring confirmed booking information, subject to legitimate circumstances</li>
          </ul>
          <p>DigiSaloon may display information supplied by the partner.</p>
        </section>

        <section id="part-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Appointment Availability</h2>
          <p>Partners must maintain accurate appointment availability through the applicable DigiSaloon system.</p>
          <p>Partners should promptly update unavailable slots to reduce booking conflicts.</p>
        </section>

        <section id="part-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Booking Responsibilities</h2>
          <p>When a booking is received, the partner is responsible for appropriately managing the appointment.</p>
          <p>The salon should:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Review booking details</li>
            <li>Provide the booked service</li>
            <li>Maintain adequate staff availability</li>
            <li>Update booking status where required</li>
            <li>Communicate genuine operational issues promptly</li>
          </ul>
        </section>

        <section id="part-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon Cancellation</h2>
          <p>A salon should avoid cancelling confirmed appointments except where reasonably necessary.</p>
          <p>If a salon cancels a confirmed paid booking, the customer is eligible for a 100% refund of the amount paid, subject to applicable payment-processing procedures.</p>
          <p>Repeated or unreasonable cancellations may result in platform-level action.</p>
        </section>

        <section id="part-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Customer No-Show</h2>
          <p>A salon may record an eligible customer appointment as a no-show where the customer does not attend and does not cancel the appointment.</p>
          <p>Partners must not falsely mark customers as no-shows.</p>
        </section>

        <section id="part-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Customer Information</h2>
          <p>Partners may receive customer information necessary to manage bookings and provide the requested service.</p>
          <p>Such information must be:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Used only for legitimate business purposes</li>
            <li>Kept reasonably secure</li>
            <li>Not sold</li>
            <li>Not misused</li>
            <li>Not unnecessarily shared with third parties</li>
          </ul>
        </section>

        <section id="part-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Staff Access</h2>
          <p>Salon owners or authorized administrators may provide access to authorized salon staff.</p>
          <p>Partners are responsible for ensuring that staff members only receive appropriate access.</p>
          <p>Partners should promptly remove access when a staff member is no longer authorized.</p>
        </section>

        <section id="part-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Manage Web App</h2>
          <p>The Manage Web App is intended for authorized salon management and appointment operations.</p>
          <p>Partners must not share administrative access with unauthorized persons.</p>
          <p>Unauthorized access or misuse may result in account restrictions.</p>
        </section>

        <section id="part-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Payments</h2>
          <p>Customers may pay:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Online, where available; or</li>
            <li>Directly at the salon through Pay-at-Salon, where available.</li>
          </ul>
          <p>For Pay-at-Salon bookings, the salon is responsible for collecting the applicable payment directly from the customer.</p>
        </section>

        <section id="part-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Commission</h2>
          <p>Under DigiSaloon's current commercial arrangement, DigiSaloon does not charge commission on salon bookings.</p>
          <p>Any future change to the commercial arrangement will be governed by the applicable partner agreement and notice requirements.</p>
        </section>

        <section id="part-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Settlement</h2>
          <p>Eligible online-paid booking amounts may be settled to the participating salon on a same-day or next-day basis.</p>
          <p>Settlement timing may depend on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Successful payment confirmation</li>
            <li>Booking status</li>
            <li>Refund status</li>
            <li>Reconciliation</li>
            <li>Payment-provider processing</li>
            <li>Banking processes</li>
            <li>Other applicable conditions</li>
          </ul>
        </section>

        <section id="part-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Refund Cooperation</h2>
          <p>Partners must cooperate with DigiSaloon regarding eligible refunds, payment disputes and transaction verification.</p>
          <p>A salon must not intentionally obstruct a valid refund process.</p>
        </section>

        <section id="part-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Reviews and Ratings</h2>
          <p>Partners must not manipulate customer ratings or reviews.</p>
          <p>Partners must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Create fake reviews</li>
            <li>Create fake customer accounts</li>
            <li>Pressure customers to provide dishonest ratings</li>
            <li>Threaten customers over reviews</li>
            <li>Offer improper benefits for specific ratings</li>
          </ul>
          <p>Review-related matters are governed by DigiSaloon's Review & Rating Policy.</p>
        </section>

        <section id="part-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Customer Conduct</h2>
          <p>Partners should treat customers professionally and respectfully.</p>
          <p>Serious misconduct, harassment, threats or discriminatory behavior may result in platform-level action.</p>
        </section>

        <section id="part-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Business Compliance</h2>
          <p>Salon partners are responsible for complying with applicable laws and requirements relating to their business, including applicable requirements concerning:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Business operations</li>
            <li>Employees and staff</li>
            <li>Taxation</li>
            <li>Consumer protection</li>
            <li>Health and hygiene</li>
            <li>Safety</li>
            <li>Licenses and registrations</li>
          </ul>
          <p>DigiSaloon does not replace any legal or regulatory obligation applicable to the salon.</p>
        </section>

        <section id="part-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Intellectual Property</h2>
          <p>Partners must have the necessary rights to upload:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon logos</li>
            <li>Images</li>
            <li>Service descriptions</li>
            <li>Promotional material</li>
            <li>Other business content</li>
          </ul>
          <p>Partners must not upload content that infringes another person's intellectual property rights.</p>
        </section>

        <section id="part-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Partner Data</h2>
          <p>DigiSaloon may process partner information necessary to operate the platform, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Business information</li>
            <li>Contact information</li>
            <li>Booking information</li>
            <li>Payment and settlement information</li>
            <li>Account activity</li>
            <li>Technical information</li>
          </ul>
          <p>Processing is subject to applicable privacy requirements and DigiSaloon policies.</p>
        </section>

        <section id="part-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Security Responsibilities</h2>
          <p>Partners must:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Protect login credentials</li>
            <li>Use authorized devices where reasonably possible</li>
            <li>Avoid sharing passwords</li>
            <li>Report unauthorized access</li>
            <li>Follow reasonable security practices</li>
          </ul>
          <p>Partners must never request or share customer OTPs, UPI PINs, card PINs or banking passwords.</p>
        </section>

        <section id="part-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Prohibited Partner Activities</h2>
          <p>Partners must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Create fraudulent bookings</li>
            <li>Manipulate booking records</li>
            <li>Manipulate reviews</li>
            <li>Misuse customer information</li>
            <li>Access another salon's account</li>
            <li>Circumvent DigiSaloon security</li>
            <li>Upload malicious content</li>
            <li>Provide false business information</li>
            <li>Misuse payment or refund systems</li>
            <li>Engage in unlawful activity through DigiSaloon</li>
          </ul>
        </section>

        <section id="part-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Partner Account Suspension</h2>
          <p>DigiSaloon may suspend or restrict a partner account where reasonably necessary due to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fraud</li>
            <li>Repeated cancellations</li>
            <li>Security concerns</li>
            <li>Payment abuse</li>
            <li>Misuse of customer information</li>
            <li>Fake reviews</li>
            <li>False business information</li>
            <li>Policy violations</li>
            <li>Unlawful activity</li>
          </ul>
        </section>

        <section id="part-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Partner Account Termination</h2>
          <p>DigiSaloon may terminate a partner relationship where serious or repeated violations occur.</p>
          <p>Where appropriate, DigiSaloon may provide notice before termination, subject to security, legal and operational circumstances.</p>
        </section>

        <section id="part-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Platform Availability</h2>
          <p>DigiSaloon aims to maintain reliable partner services but does not guarantee uninterrupted operation.</p>
          <p>Partner functionality may be affected by:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maintenance</li>
            <li>Internet failures</li>
            <li>Technical problems</li>
            <li>Third-party service interruptions</li>
            <li>Payment-provider issues</li>
            <li>Other circumstances beyond reasonable control</li>
          </ul>
        </section>

        <section id="part-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Partner Support</h2>
          <p>Partners may contact DigiSaloon regarding:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Booking issues</li>
            <li>Payment issues</li>
            <li>Settlement</li>
            <li>Account access</li>
            <li>Technical problems</li>
            <li>Customer disputes</li>
            <li>Other platform-related matters</li>
          </ul>
          <p>Email: <a href="mailto:support@digisaloon.in" className="text-red-700 hover:underline">support@digisaloon.in</a></p>
          <p>Phone: 9973499471</p>
        </section>

        <section id="part-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Confidentiality</h2>
          <p>Partners should protect confidential information received through DigiSaloon and use it only for legitimate business purposes.</p>
          <p>Confidential information must not be disclosed unnecessarily to unauthorized persons.</p>
        </section>

        <section id="part-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Relationship Between DigiSaloon and Salon</h2>
          <p>Unless separately agreed in writing, DigiSaloon operates as a technology platform and does not directly employ the salon's staff or provide the salon's services.</p>
          <p>The salon remains responsible for its own business operations and service delivery.</p>
        </section>

        <section id="part-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Changes to Partner Services</h2>
          <p>DigiSaloon may modify, add or discontinue partner features, including booking, payment, reporting or management functionality.</p>
        </section>

        <section id="part-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Changes to Partner Terms</h2>
          <p>DigiSaloon may update these Partner Terms from time to time.</p>
          <p>Updated terms may be published through the DigiSaloon website, Partner App, Partner Web App or other appropriate communication channels.</p>
        </section>

        <section id="part-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Governing Law</h2>
          <p>These Partner Terms are governed by the applicable laws of India.</p>
          <p>Subject to applicable law, disputes may be subject to the jurisdiction of the appropriate courts in Ranchi, Jharkhand, India.</p>
        </section>

        <section id="part-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. Contact</h2>
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