import React from "react";

export const TermsOfService: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Legal Agreement
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          TERMS & CONDITIONS
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          Welcome to DigiSaloon.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          These Terms & Conditions ("Terms") govern your access to and use of DigiSaloon's website, mobile applications, partner platforms and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By accessing, registering for or using DigiSaloon, you agree to these Terms. If you do not agree with these Terms, you should not use the applicable DigiSaloon services.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        {/* 1. About DigiSaloon */}
        <section id="t-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. About DigiSaloon
          </h2>
          <p>DigiSaloon is a technology platform that enables customers to discover participating salons, view available services and make appointments.</p>
          <p>DigiSaloon may provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer mobile application</li>
            <li>Website</li>
            <li>Salon Partner App</li>
            <li>Salon Partner Web App</li>
            <li>Manage Web App</li>
            <li>Administrative systems</li>
            <li>Booking and appointment management</li>
            <li>Payment and settlement functionality</li>
            <li>Customer reviews and ratings</li>
            <li>Notifications and communication services</li>
          </ul>
        </section>

        {/* 2. Eligibility */}
        <section id="t-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Eligibility
          </h2>
          <p>DigiSaloon services are intended for individuals aged 18 years or older.</p>
          <p>By using DigiSaloon, you confirm that you meet the applicable age requirement and are legally capable of entering into these Terms.</p>
        </section>

        {/* 3. Account Registration */}
        <section id="t-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Account Registration
          </h2>
          <p>Certain DigiSaloon features require an account.</p>
          <p>You agree to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Provide accurate information</li>
            <li>Keep your information updated</li>
            <li>Maintain the security of your account</li>
            <li>Not share your account credentials with unauthorized persons</li>
            <li>Notify DigiSaloon if you suspect unauthorized access</li>
          </ul>
          <p>DigiSaloon may take reasonable action where account information is false, misleading or associated with misuse.</p>
        </section>

        {/* 4. Customer Services */}
        <section id="t-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. Customer Services
          </h2>
          <p>Customers may use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Discover salons</li>
            <li>View salon information</li>
            <li>View services and prices</li>
            <li>Select available appointment times</li>
            <li>Make bookings</li>
            <li>Make eligible online payments</li>
            <li>Choose Pay-at-Salon where available</li>
            <li>Cancel bookings</li>
            <li>Submit eligible reviews and ratings</li>
          </ul>
          <p>Availability of specific features may vary by salon, location and platform functionality.</p>
        </section>

        {/* 5. Salon Services */}
        <section id="t-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            5. Salon Services
          </h2>
          <p>Salons listed on DigiSaloon are independent service providers unless expressly stated otherwise.</p>
          <p>The salon is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Providing the booked service</li>
            <li>Maintaining accurate service information</li>
            <li>Maintaining accurate pricing</li>
            <li>Maintaining salon availability</li>
            <li>Providing the service at the agreed appointment</li>
            <li>Maintaining appropriate service standards</li>
            <li>Managing its authorized staff</li>
          </ul>
          <p>DigiSaloon provides the technology platform for discovery and booking but does not directly provide the salon service.</p>
        </section>

        {/* 6. Salon Information */}
        <section id="t-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            6. Salon Information
          </h2>
          <p>Salon partners are responsible for ensuring that information provided to DigiSaloon is accurate, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Salon name</li>
            <li>Address</li>
            <li>Services</li>
            <li>Prices</li>
            <li>Operating hours</li>
            <li>Availability</li>
            <li>Contact information</li>
            <li>Images and business information</li>
          </ul>
          <p>DigiSaloon may update, restrict or remove information where reasonably necessary.</p>
        </section>

        {/* 7. Booking and Appointment */}
        <section id="t-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            7. Booking and Appointment
          </h2>
          <p>A booking is considered confirmed only when the applicable booking status is successfully generated by DigiSaloon.</p>
          <p>A payment attempt alone does not guarantee a confirmed appointment.</p>
          <p>Appointment availability may change due to salon operations, technical issues or other circumstances.</p>
        </section>

        {/* 8. Customer Cancellation */}
        <section id="t-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            8. Customer Cancellation
          </h2>
          <p>Customers may cancel eligible bookings according to DigiSaloon's Cancellation & Refund Policy.</p>
          <p>The first five eligible customer cancellations are not subject to a cancellation fee.</p>
          <p>From the sixth eligible cancellation onward, a 3% cancellation charge may apply according to the applicable cancellation rules.</p>
        </section>

        {/* 9. Salon Cancellation */}
        <section id="t-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            9. Salon Cancellation
          </h2>
          <p>If a salon cancels a confirmed paid booking, the customer is entitled to a 100% refund of the amount paid, subject to payment verification and applicable refund-processing procedures.</p>
          <p>Repeated or unreasonable salon cancellations may result in action under DigiSaloon's Partner Terms.</p>
        </section>

        {/* 10. Payments */}
        <section id="t-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            10. Payments
          </h2>
          <p>Customers may have the option to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Pay online at the time of booking; or</li>
            <li>Pay at the salon, where available.</li>
          </ul>
          <p>Online payments may be processed through authorized payment providers such as Razorpay.</p>
          <p>Payment processing is subject to applicable payment-provider procedures.</p>
        </section>

        {/* 11. Salon Commission */}
        <section id="t-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            11. Salon Commission
          </h2>
          <p>Under DigiSaloon's current commercial arrangement, DigiSaloon does not charge commission on salon bookings.</p>
          <p>DigiSaloon may modify its commercial arrangements in accordance with applicable partner agreements and notice requirements.</p>
        </section>

        {/* 12. Salon Settlement */}
        <section id="t-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            12. Salon Settlement
          </h2>
          <p>Eligible online booking amounts may be settled to participating salons on a same-day or next-day basis, subject to successful payment confirmation, reconciliation, refund status, banking processes and other applicable conditions.</p>
        </section>

        {/* 13. Refunds */}
        <section id="t-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            13. Refunds
          </h2>
          <p>Refunds will be handled according to DigiSaloon's Cancellation & Refund Policy.</p>
          <p>Refund processing times may depend on the applicable payment provider, bank, UPI provider, card network or other financial institution.</p>
        </section>

        {/* 14. Reviews and Ratings */}
        <section id="t-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            14. Reviews and Ratings
          </h2>
          <p>Customers may be permitted to submit ratings and reviews after eligible bookings.</p>
          <p>Reviews must represent genuine customer experiences.</p>
          <p>Users must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Submit fake reviews</li>
            <li>Manipulate ratings</li>
            <li>Create accounts for review manipulation</li>
            <li>Threaten or harass others through reviews</li>
            <li>Submit unlawful or abusive content</li>
          </ul>
          <p>DigiSaloon may remove or restrict content that violates its Review & Rating Policy.</p>
        </section>

        {/* 15. User Content */}
        <section id="t-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            15. User Content
          </h2>
          <p>Users and salon partners may submit content such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Reviews</li>
            <li>Ratings</li>
            <li>Images</li>
            <li>Service descriptions</li>
            <li>Business information</li>
          </ul>
          <p>The person submitting content remains responsible for ensuring that they have the necessary rights to submit it.</p>
          <p>By submitting content, you grant DigiSaloon the permission reasonably necessary to host, display and use the content for operating, improving and promoting the applicable DigiSaloon service, subject to applicable law.</p>
        </section>

        {/* 16. Prohibited Activities */}
        <section id="t-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            16. Prohibited Activities
          </h2>
          <p>You must not use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Commit fraud</li>
            <li>Create fake bookings</li>
            <li>Abuse refunds</li>
            <li>Manipulate reviews</li>
            <li>Gain unauthorized access</li>
            <li>Scrape or copy platform data without authorization</li>
            <li>Disrupt platform operations</li>
            <li>Upload malicious software</li>
            <li>Impersonate another person or DigiSaloon</li>
            <li>Misuse customer information</li>
            <li>Circumvent security controls</li>
            <li>Engage in unlawful activities</li>
          </ul>
        </section>

        {/* 17. Partner and Staff Access */}
        <section id="t-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            17. Partner and Staff Access
          </h2>
          <p>Salon partners and authorized staff may only access information and functionality for which they are authorized.</p>
          <p>They must not access another salon's information or customer data without authorization.</p>
          <p>Use of the Manage Web App is limited to legitimate salon appointment and operational activities.</p>
        </section>

        {/* 18. Customer Information */}
        <section id="t-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            18. Customer Information
          </h2>
          <p>Salon partners and authorized staff may receive customer information necessary to fulfill and manage appointments.</p>
          <p>Such information must not be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Sold</li>
            <li>Misused</li>
            <li>Shared without authorization</li>
            <li>Used for unrelated purposes</li>
            <li>Used for spam or harassment</li>
          </ul>
        </section>

        {/* 19. Location Services */}
        <section id="t-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            19. Location Services
          </h2>
          <p>DigiSaloon may use location information where the relevant permission has been granted to support features such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Nearby salon discovery</li>
            <li>Distance information</li>
            <li>Salon location</li>
            <li>Directions</li>
            <li>Location-based search</li>
          </ul>
          <p>Location use is also subject to DigiSaloon's Privacy Policy and Location Services Policy.</p>
        </section>

        {/* 20. Notifications and Communications */}
        <section id="t-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            20. Notifications and Communications
          </h2>
          <p>DigiSaloon may communicate with users through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Push notifications</li>
            <li>SMS</li>
            <li>WhatsApp</li>
            <li>Email</li>
            <li>In-app notifications</li>
          </ul>
          <p>Communications may include booking confirmations, reminders, cancellations, payment information, refunds, security alerts and promotional communications where applicable.</p>
        </section>

        {/* 21. Intellectual Property */}
        <section id="t-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            21. Intellectual Property
          </h2>
          <p>DigiSaloon's name, logo, software, website, application design, user interface, original content and other proprietary materials are protected by applicable intellectual property laws.</p>
          <p>Except where expressly permitted, you must not copy, reproduce, modify, distribute, reverse engineer or commercially exploit DigiSaloon's proprietary materials.</p>
        </section>

        {/* 22. Third-Party Services */}
        <section id="t-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            22. Third-Party Services
          </h2>
          <p>DigiSaloon may integrate or rely on third-party services including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Payment providers</li>
            <li>Cloud services</li>
            <li>Mapping services</li>
            <li>Communication providers</li>
            <li>Analytics services</li>
            <li>Authentication services</li>
            <li>Security services</li>
          </ul>
          <p>Third-party services may have their own terms and privacy policies.</p>
        </section>

        {/* 23. Razorpay and Payment Processing */}
        <section id="t-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            23. Razorpay and Payment Processing
          </h2>
          <p>Where Razorpay is used for online payment processing, payment transactions may be subject to Razorpay's applicable terms and procedures.</p>
          <p>DigiSaloon may use payment-provider dashboards and merchant tools for legitimate purposes such as transaction verification, reconciliation, refunds and settlement management.</p>
        </section>

        {/* 24. Platform Availability */}
        <section id="t-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            24. Platform Availability
          </h2>
          <p>DigiSaloon aims to maintain reliable services but does not guarantee that the platform will always be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Available</li>
            <li>Error-free</li>
            <li>Uninterrupted</li>
            <li>Completely secure</li>
            <li>Free from technical problems</li>
          </ul>
          <p>Temporary interruptions may occur due to maintenance, technical failures, network problems, third-party services or other circumstances.</p>
        </section>

        {/* 25. Account Suspension or Termination */}
        <section id="t-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            25. Account Suspension or Termination
          </h2>
          <p>DigiSaloon may suspend, restrict or terminate an account where reasonably necessary due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Fraud</li>
            <li>Security concerns</li>
            <li>Policy violations</li>
            <li>Abuse</li>
            <li>Fake bookings</li>
            <li>Review manipulation</li>
            <li>Payment abuse</li>
            <li>Unauthorized access</li>
            <li>Unlawful activity</li>
          </ul>
          <p>Where appropriate, DigiSaloon may provide notice before taking action, subject to the circumstances.</p>
        </section>

        {/* 26. Account Deletion */}
        <section id="t-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            26. Account Deletion
          </h2>
          <p>Users may delete their account through the available account-deletion functionality in the User App.</p>
          <p>Deletion does not necessarily require immediate deletion of every historical record.</p>
          <p>Certain information may be retained for legal, accounting, payment, security, fraud-prevention or dispute-resolution purposes.</p>
        </section>

        {/* 27. Privacy */}
        <section id="t-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            27. Privacy
          </h2>
          <p>DigiSaloon's collection and use of personal information is governed by its Privacy Policy.</p>
          <p>By using DigiSaloon, you acknowledge that applicable information may be processed as described in that policy.</p>
        </section>

        {/* 28. Disclaimer */}
        <section id="t-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            28. Disclaimer
          </h2>
          <p>DigiSaloon is a technology platform connecting customers with participating salons.</p>
          <p>Unless expressly stated otherwise, DigiSaloon does not directly provide salon services and does not employ the independent salon personnel providing those services.</p>
          <p>Information supplied by salons may change and DigiSaloon does not guarantee that every salon-provided detail will always be completely accurate or current.</p>
        </section>

        {/* 29. Limitation of Liability */}
        <section id="t-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            29. Limitation of Liability
          </h2>
          <p>To the extent permitted by applicable law, DigiSaloon will not be responsible for losses arising solely from:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Actions or omissions of independent salon partners</li>
            <li>Third-party payment or banking failures</li>
            <li>Internet or network failures</li>
            <li>Third-party service interruptions</li>
            <li>Information inaccurately provided by users or salons</li>
            <li>Unauthorized actions outside DigiSaloon's reasonable control</li>
          </ul>
          <p>Nothing in these Terms is intended to exclude liability that cannot legally be excluded.</p>
        </section>

        {/* 30. Indemnification */}
        <section id="t-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            30. Indemnification
          </h2>
          <p>To the extent permitted by applicable law, a user or partner may be responsible for losses, claims or expenses arising from their:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Violation of these Terms</li>
            <li>Unlawful use of DigiSaloon</li>
            <li>Fraudulent activity</li>
            <li>Unauthorized use of another person's information</li>
            <li>Infringement of third-party rights</li>
          </ul>
        </section>

        {/* 31. Changes to Services */}
        <section id="t-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            31. Changes to Services
          </h2>
          <p>DigiSaloon may add, modify, suspend or discontinue features of its services.</p>
          <p>Certain changes may be necessary because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Technical development</li>
            <li>Security requirements</li>
            <li>Business decisions</li>
            <li>Third-party service changes</li>
            <li>Legal or regulatory requirements</li>
          </ul>
        </section>

        {/* 32. Changes to These Terms */}
        <section id="t-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            32. Changes to These Terms
          </h2>
          <p>DigiSaloon may update these Terms from time to time.</p>
          <p>The updated version may be published through the DigiSaloon website or application.</p>
          <p>Your continued use of DigiSaloon after an applicable update may constitute acceptance of the updated Terms, subject to applicable law.</p>
        </section>

        {/* 33. Governing Law */}
        <section id="t-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            33. Governing Law
          </h2>
          <p>These Terms shall be governed by the applicable laws of India.</p>
          <p>Subject to applicable law, disputes relating to DigiSaloon may be subject to the jurisdiction of the appropriate courts in Ranchi, Jharkhand, India.</p>
        </section>

        {/* 34. Severability */}
        <section id="t-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            34. Severability
          </h2>
          <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.</p>
        </section>

        {/* 35. Entire Agreement */}
        <section id="t-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            35. Entire Agreement
          </h2>
          <p>These Terms, together with applicable DigiSaloon policies and agreements, form the applicable terms governing use of DigiSaloon services.</p>
          <p>Where a separate written agreement exists with a salon partner, the specific partner agreement may apply to matters covered by that agreement.</p>
        </section>

        {/* 36. Contact Us */}
        <section id="t-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            36. Contact Us
          </h2>
          <p>For questions regarding these Terms:</p>
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