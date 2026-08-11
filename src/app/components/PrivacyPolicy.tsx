import React from "react";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Privacy Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PRIVACY POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          DigiSaloon ("DigiSaloon", "we", "us" or "our") respects your privacy and is committed to protecting the information processed through our website, applications and services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Privacy Policy explains what information DigiSaloon may collect, how we use it, how it may be shared, how we protect it and the choices available to you.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        {/* 1. About DigiSaloon */}
        <section id="sec-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. About DigiSaloon
          </h2>
          <p>
            DigiSaloon provides a technology platform that connects customers with participating salons and enables salon appointment booking and management.
          </p>
          <p>Our services may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web App</li>
            <li>Admin Panel</li>
            <li>Booking and appointment systems</li>
            <li>Payment and settlement systems</li>
            <li>Customer support services</li>
          </ul>
        </section>

        {/* 2. Information We May Collect */}
        <section id="sec-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Information We May Collect
          </h2>
          <p>Depending on how you use DigiSaloon, we may collect or receive the following categories of information.</p>
          
          <div className="space-y-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.1 Account Information</strong>
              <p className="text-xs">When you create an account, we may collect:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs">
                <li>Name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Login/authentication information</li>
                <li>Account preferences</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.2 Booking Information</strong>
              <p className="text-xs">When you make or manage a booking, we may process:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs">
                <li>Booking ID</li>
                <li>Selected salon</li>
                <li>Selected service</li>
                <li>Appointment date and time</li>
                <li>Booking status</li>
                <li>Cancellation information</li>
                <li>Service-related information</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.3 Payment Information</strong>
              <p className="text-xs">For online payments, DigiSaloon may receive transaction-related information such as:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs mb-2">
                <li>Transaction ID</li>
                <li>Payment status</li>
                <li>Payment amount</li>
                <li>Refund status</li>
                <li>Payment reference information</li>
              </ul>
              <p className="text-xs">Online payment processing may be handled by authorized third-party payment providers such as Razorpay.</p>
              <p className="text-xs font-medium text-slate-700">DigiSaloon does not intend to store sensitive payment credentials such as UPI PINs, card PINs or banking passwords.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.4 Location Information</strong>
              <p className="text-xs">Where location functionality is enabled and permission is granted, DigiSaloon may process location information to provide features such as:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs mb-2">
                <li>Nearby salon discovery</li>
                <li>Salon location display</li>
                <li>Distance information</li>
                <li>Directions</li>
                <li>Location-based search</li>
              </ul>
              <p className="text-xs">Users may manage location permissions through their device settings.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.5 Device and Technical Information</strong>
              <p className="text-xs">We may automatically receive technical information such as:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs">
                <li>Device type</li>
                <li>Operating system</li>
                <li>App version</li>
                <li>IP address</li>
                <li>Browser information</li>
                <li>Network information</li>
                <li>Device identifiers where applicable</li>
                <li>Error and diagnostic information</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.6 Reviews and Ratings</strong>
              <p className="text-xs">If you submit a review or rating after an eligible booking, we may process:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs">
                <li>Rating</li>
                <li>Review content</li>
                <li>Related booking information</li>
                <li>Information associated with the submitted review</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 block font-semibold">2.7 Communication Information</strong>
              <p className="text-xs">If you contact DigiSaloon, we may process information included in your communication, such as:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs">
                <li>Support requests</li>
                <li>Emails</li>
                <li>Messages</li>
                <li>Complaint details</li>
                <li>Screenshots or documents voluntarily provided</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Partner Information */}
        <section id="sec-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Partner Information
          </h2>
          <p>Salon partners may provide information including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon/business name</li>
            <li>Owner or authorized representative information</li>
            <li>Contact details</li>
            <li>Salon address</li>
            <li>Services</li>
            <li>Prices</li>
            <li>Working hours</li>
            <li>Business information</li>
            <li>Bank/settlement information</li>
            <li>Verification information</li>
            <li>Staff/barber information</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">Partners are responsible for ensuring that information they provide is accurate and that they have appropriate authority to provide it.</p>
        </section>

        {/* 4. How We Use Information */}
        <section id="sec-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. How We Use Information
          </h2>
          <p>DigiSaloon may use information for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Creating and managing accounts</li>
            <li>Providing salon discovery</li>
            <li>Processing bookings</li>
            <li>Managing appointments</li>
            <li>Processing payments</li>
            <li>Processing refunds</li>
            <li>Managing salon partner accounts</li>
            <li>Managing barber/staff access</li>
            <li>Sending appointment notifications</li>
            <li>Providing customer support</li>
            <li>Processing reviews and ratings</li>
            <li>Preventing fraud and abuse</li>
            <li>Protecting platform security</li>
            <li>Troubleshooting technical issues</li>
            <li>Improving services</li>
            <li>Maintaining business records</li>
            <li>Complying with applicable legal obligations</li>
          </ul>
        </section>

        {/* 5. Booking and Appointment Information */}
        <section id="sec-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            5. Booking and Appointment Information
          </h2>
          <p>
            Information relating to a booking may be shared with the relevant salon and authorized salon staff where reasonably necessary to fulfill and manage the appointment.
          </p>
          <p>
            For example, the salon may receive information necessary to identify and manage a customer's booking.
          </p>
        </section>

        {/* 6. Customer Information and Salon Partners */}
        <section id="sec-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            6. Customer Information and Salon Partners
          </h2>
          <p>
            Salon partners may receive customer information necessary for legitimate appointment and service operations.
          </p>
          <p>Partners must not misuse customer information.</p>
          <p>They must not sell, improperly share or use customer information for unrelated purposes.</p>
        </section>

        {/* 7. Payment Providers */}
        <section id="sec-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            7. Payment Providers
          </h2>
          <p>
            DigiSaloon may use third-party payment providers such as Razorpay to process online payments and related transactions.
          </p>
          <p>
            Payment providers may process information according to their own privacy policies, terms and applicable requirements.
          </p>
        </section>

        {/* 8. Communication Providers */}
        <section id="sec-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            8. Communication Providers
          </h2>
          <p>DigiSaloon may use third-party service providers for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>SMS</li>
            <li>WhatsApp</li>
            <li>Email</li>
            <li>Push notifications</li>
          </ul>
          <p>These providers may process the information necessary to deliver the relevant communication.</p>
        </section>

        {/* 9. Notifications */}
        <section id="sec-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            9. Notifications
          </h2>
          <p>We may send:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Booking confirmations</li>
            <li>Appointment reminders</li>
            <li>Payment notifications</li>
            <li>Refund updates</li>
            <li>Cancellation notifications</li>
            <li>Security alerts</li>
            <li>Important service communications</li>
            <li>Promotional communications where applicable</li>
          </ul>
          <p>Users may be able to control certain notification or promotional preferences.</p>
        </section>

        {/* 10. Location Information */}
        <section id="sec-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            10. Location Information
          </h2>
          <p>Where applicable, location information may be used to provide location-based functionality.</p>
          <p>DigiSaloon does not intend to continuously track a user's location unless a specific feature requires such functionality and the applicable permissions and requirements are satisfied.</p>
        </section>

        {/* 11. Cookies and Similar Technologies */}
        <section id="sec-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            11. Cookies and Similar Technologies
          </h2>
          <p>Our website and web applications may use cookies and similar technologies for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Authentication</li>
            <li>Session management</li>
            <li>Security</li>
            <li>Preferences</li>
            <li>Analytics</li>
            <li>Performance</li>
          </ul>
          <p>Further information is available in our Cookie Policy.</p>
        </section>

        {/* 12. Analytics */}
        <section id="sec-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            12. Analytics
          </h2>
          <p>DigiSaloon may use analytics and technical tools to understand platform usage and improve performance.</p>
          <p>Such tools may process information such as device, browser, usage and technical data.</p>
        </section>

        {/* 13. How We Share Information */}
        <section id="sec-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            13. How We Share Information
          </h2>
          <p>DigiSaloon may share information where reasonably necessary with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Relevant salon partners</li>
            <li>Authorized salon staff</li>
            <li>Payment providers</li>
            <li>Hosting and cloud providers</li>
            <li>SMS/WhatsApp/email providers</li>
            <li>Analytics providers</li>
            <li>Security providers</li>
            <li>Customer support providers</li>
            <li>Other service providers supporting DigiSaloon operations</li>
          </ul>
          <p>We may also disclose information where required or permitted by applicable law.</p>
        </section>

        {/* 14. Legal and Security Disclosures */}
        <section id="sec-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            14. Legal and Security Disclosures
          </h2>
          <p>Information may be disclosed where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Comply with legal obligations</li>
            <li>Respond to lawful requests</li>
            <li>Investigate fraud</li>
            <li>Prevent security threats</li>
            <li>Protect users</li>
            <li>Protect DigiSaloon's rights</li>
            <li>Resolve disputes</li>
            <li>Enforce applicable terms</li>
          </ul>
        </section>

        {/* 15. Data Security */}
        <section id="sec-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            15. Data Security
          </h2>
          <p>DigiSaloon uses reasonable technical and organizational measures intended to protect information against unauthorized access, misuse, alteration, disclosure or loss.</p>
          <p>However, no internet-based system can be guaranteed to be completely secure.</p>
        </section>

        {/* 16. Data Retention */}
        <section id="sec-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            16. Data Retention
          </h2>
          <p>DigiSaloon may retain information for as long as reasonably necessary for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Providing services</li>
            <li>Booking records</li>
            <li>Payment and settlement</li>
            <li>Refunds</li>
            <li>Customer support</li>
            <li>Security</li>
            <li>Fraud prevention</li>
            <li>Accounting</li>
            <li>Legal compliance</li>
            <li>Dispute resolution</li>
          </ul>
          <p>Information that is no longer required may be deleted, anonymized or de-identified where appropriate.</p>
        </section>

        {/* 17. Account Deletion */}
        <section id="sec-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            17. Account Deletion
          </h2>
          <p>Users can request account deletion through the account-deletion functionality available in the User App.</p>
          <p>Certain information may continue to be retained after deletion where required or reasonably necessary for legal, security, accounting, payment, dispute-resolution or fraud-prevention purposes.</p>
        </section>

        {/* 18. Children's Privacy */}
        <section id="sec-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            18. Children's Privacy
          </h2>
          <p>DigiSaloon services are intended for individuals aged 18 years or older.</p>
          <p>We do not knowingly intend to provide services to persons below the applicable minimum age.</p>
          <p>If we become aware that information has been submitted by a person who does not meet the applicable age requirement, we may take appropriate steps to address the situation.</p>
        </section>

        {/* 19. Data Rights and Requests */}
        <section id="sec-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            19. Data Rights and Requests
          </h2>
          <p>Subject to applicable law, users may contact DigiSaloon regarding requests relating to their personal information.</p>
          <p>Depending on the circumstances and applicable requirements, requests may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Access to information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of information</li>
            <li>Other applicable privacy requests</li>
          </ul>
          <p>Requests can be sent to:</p>
          <p><a href="mailto:support@digisaloon.in" className="text-red-700 font-mono hover:underline">support@digisaloon.in</a></p>
        </section>

        {/* 20. Account and Data Security Requests */}
        <section id="sec-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            20. Account and Data Security Requests
          </h2>
          <p>If you believe your account has been compromised or your information has been accessed without authorization, contact DigiSaloon promptly at:</p>
          <p><a href="mailto:support@digisaloon.in" className="text-red-700 font-mono hover:underline">support@digisaloon.in</a></p>
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 font-mono">
            Do not include passwords, OTPs, UPI PINs or other confidential authentication credentials in your communication.
          </div>
        </section>

        {/* 21. Third-Party Services */}
        <section id="sec-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            21. Third-Party Services
          </h2>
          <p>DigiSaloon may depend on third-party services for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Payments</li>
            <li>Cloud hosting</li>
            <li>Maps</li>
            <li>Communications</li>
            <li>Analytics</li>
            <li>Authentication</li>
            <li>Security</li>
            <li>Other technical functionality</li>
          </ul>
          <p>Third-party providers may process information according to their own terms and privacy policies.</p>
        </section>

        {/* 22. International or External Processing */}
        <section id="sec-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            22. International or External Processing
          </h2>
          <p>Depending on the service providers used by DigiSaloon, information may be processed or stored in locations outside the user's immediate location, subject to applicable law and contractual or technical safeguards where required.</p>
        </section>

        {/* 23. Changes to This Privacy Policy */}
        <section id="sec-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            23. Changes to This Privacy Policy
          </h2>
          <p>DigiSaloon may update this Privacy Policy from time to time to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Services</li>
            <li>Applications</li>
            <li>Data practices</li>
            <li>Third-party providers</li>
            <li>Security practices</li>
            <li>Applicable laws and requirements</li>
          </ul>
          <p>The updated policy will be published through the DigiSaloon website or applicable applications.</p>
        </section>

        {/* 24. Contact Us */}
        <section id="sec-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            24. Contact Us
          </h2>
          <p>For privacy-related questions, requests or complaints:</p>
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