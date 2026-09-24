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
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PRIVACY POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          DigiSaloon (“DigiSaloon”, “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Privacy Policy explains how DigiSaloon collects, uses, stores, shares, and protects information when you use our website, mobile application, salon partner applications, partner web platform, admin panel, or related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By using DigiSaloon, you agree to the practices described in this Privacy Policy.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="privacy-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. ABOUT DIGISALOON</h2>
          <p>DigiSaloon is a salon appointment booking platform that connects customers with participating salon partners.</p>
          <p>Customers can discover salons, view services, select available appointments, make bookings, and manage their bookings through DigiSaloon.</p>
          <p>DigiSaloon does not directly provide salon or beauty services. These services are provided by independent salon partners.</p>
        </section>

        <section id="privacy-2" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. INFORMATION WE COLLECT</h2>
          <p>We may collect different types of information depending on how you use DigiSaloon.</p>
          
          <div className="space-y-4 pt-2">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">2.1 Personal Information</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Profile information</li>
                <li>Date of birth, where voluntarily provided</li>
                <li>Account login information</li>
                <li>Booking information</li>
                <li>Appointment history</li>
                <li>Customer preferences</li>
                <li>Reviews and ratings</li>
              </ul>
            </div>
            
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">2.2 Location Information</h3>
              <p>With your permission, DigiSaloon may collect location information to provide features such as:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Finding nearby salons</li>
                <li>Showing salons based on location</li>
                <li>Improving location-based search</li>
                <li>Providing directions or map-related features</li>
              </ul>
              <p className="pt-2">You can control location permissions through your device settings.</p>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">2.3 Booking Information</h3>
              <p>When you make a booking, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Salon name</li>
                <li>Selected service</li>
                <li>Booking date</li>
                <li>Booking time</li>
                <li>Booking type</li>
                <li>Booking ID</li>
                <li>Booking status</li>
                <li>Amount paid through DigiSaloon</li>
                <li>Cancellation information</li>
                <li>Refund information</li>
                <li>Relevant transaction information</li>
              </ul>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">2.4 Payment Information</h3>
              <p>Online payments may be processed through third-party payment providers such as Razorpay.</p>
              <p>DigiSaloon may receive transaction-related information such as:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Payment status</li>
                <li>Transaction ID</li>
                <li>Payment amount</li>
                <li>Payment date and time</li>
                <li>Refund status</li>
                <li>Payment method information provided by the payment provider</li>
              </ul>
              <p className="pt-2">DigiSaloon does not intend to store complete card information such as full card numbers or CVV details on its own servers.</p>
            </div>
          </div>
        </section>

        <section id="privacy-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. BOOKING PAYMENT INFORMATION</h2>
          <p>For bookings made through DigiSaloon, the customer may be required to pay a booking amount through the DigiSaloon platform.</p>
          <p>For example, where applicable:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking payment: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Net amount after gateway fee: ₹49</li>
          </ul>
          <p className="pt-2">The remaining service amount is payable directly to the salon after the service is provided.</p>
          <p>For example, if the service price is ₹200, the customer may pay ₹50.19 through DigiSaloon and ₹151 directly to the salon, resulting in a total customer payment of ₹201.19.</p>
          <p>Payment processing and transaction information may be handled by DigiSaloon and its payment service providers according to applicable terms and policies.</p>
        </section>

        <section id="privacy-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. DEVICE AND TECHNICAL INFORMATION</h2>
          <p>When you use DigiSaloon, we may automatically collect certain technical information, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Device type</li>
            <li>Operating system</li>
            <li>App version</li>
            <li>IP address</li>
            <li>Device identifiers, where applicable</li>
            <li>Browser information</li>
            <li>Network information</li>
            <li>Crash reports</li>
            <li>Log information</li>
            <li>Approximate usage information</li>
          </ul>
          <p className="pt-2">This information may be used to maintain security, troubleshoot technical problems, and improve the platform.</p>
        </section>

        <section id="privacy-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. HOW WE USE YOUR INFORMATION</h2>
          <p>We may use collected information to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create and manage your account.</li>
            <li>Process bookings.</li>
            <li>Confirm appointments.</li>
            <li>Communicate booking updates.</li>
            <li>Process payments and refunds.</li>
            <li>Provide customer support.</li>
            <li>Show nearby salons.</li>
            <li>Improve search and recommendation features.</li>
            <li>Maintain platform security.</li>
            <li>Detect fraudulent or suspicious activity.</li>
            <li>Improve our website and applications.</li>
            <li>Analyze platform performance.</li>
            <li>Send important service-related notifications.</li>
            <li>Manage salon partner operations.</li>
            <li>Comply with applicable laws and legal obligations.</li>
          </ul>
        </section>

        <section id="privacy-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. COMMUNICATIONS</h2>
          <p>We may use your contact information to send:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking confirmations</li>
            <li>Appointment reminders</li>
            <li>Cancellation updates</li>
            <li>Refund updates</li>
            <li>Payment notifications</li>
            <li>Account-related notifications</li>
            <li>Customer support messages</li>
            <li>Important service announcements</li>
          </ul>
          <p className="pt-2">Where applicable, promotional communications may be controlled through available communication preferences.</p>
        </section>

        <section id="privacy-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. SHARING OF INFORMATION</h2>
          <p>We may share relevant information with trusted third parties when necessary to provide DigiSaloon services.</p>
          <p>These may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon partners</li>
            <li>Payment service providers</li>
            <li>Cloud hosting providers</li>
            <li>Database and infrastructure providers</li>
            <li>Communication service providers</li>
            <li>Analytics providers</li>
            <li>Security providers</li>
            <li>Customer support providers</li>
            <li>Legal or regulatory authorities where required</li>
          </ul>
          <p className="pt-2">We share only information reasonably necessary for the relevant purpose.</p>
        </section>

        <section id="privacy-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. INFORMATION SHARED WITH SALON PARTNERS</h2>
          <p>When a customer makes a booking, relevant booking information may be shared with the selected salon so that the salon can provide the booked service.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer name</li>
            <li>Contact information, where required</li>
            <li>Booking ID</li>
            <li>Selected service</li>
            <li>Appointment date and time</li>
            <li>Booking status</li>
            <li>Relevant booking information</li>
          </ul>
          <p className="pt-2">Salon partners are expected to handle customer information responsibly and only for legitimate business and service purposes.</p>
        </section>

        <section id="privacy-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. PAYMENT SERVICE PROVIDERS</h2>
          <p>DigiSaloon may use payment service providers such as Razorpay to process online payments.</p>
          <p>Payment providers may independently process payment-related information according to their own privacy policies and applicable laws.</p>
          <p>DigiSaloon does not control the privacy practices of independent third-party payment providers.</p>
        </section>

        <section id="privacy-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. REVIEWS AND RATINGS</h2>
          <p>Customers who have completed eligible bookings may be able to submit reviews and ratings.</p>
          <p>Information submitted as part of a review may be displayed publicly or to other users, depending on the functionality of the platform.</p>
          <p>Users should avoid including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Passwords</li>
            <li>Financial information</li>
            <li>Personal identification information</li>
            <li>Private contact information</li>
            <li>Other sensitive information</li>
          </ul>
          <p className="pt-2">in publicly visible reviews.</p>
        </section>

        <section id="privacy-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. COOKIES AND SIMILAR TECHNOLOGIES</h2>
          <p>DigiSaloon may use cookies, local storage, analytics tools, and similar technologies to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Keep the website functioning.</li>
            <li>Remember preferences.</li>
            <li>Improve user experience.</li>
            <li>Understand website usage.</li>
            <li>Maintain security.</li>
            <li>Analyze performance.</li>
          </ul>
          <p className="pt-2">You may control certain cookie settings through your browser.</p>
          <p>For more information, please refer to the DigiSaloon Cookie Policy.</p>
        </section>

        <section id="privacy-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. DATA STORAGE</h2>
          <p>Personal information may be stored using secure third-party infrastructure and cloud services.</p>
          <p>DigiSaloon takes reasonable technical and organizational measures to protect stored information from unauthorized access, alteration, disclosure, or destruction.</p>
          <p>However, no internet-based system can guarantee absolute security.</p>
        </section>

        <section id="privacy-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. DATA RETENTION</h2>
          <p>We retain personal information for as long as reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Provide our services.</li>
            <li>Maintain booking and transaction records.</li>
            <li>Resolve disputes.</li>
            <li>Prevent fraud.</li>
            <li>Maintain business records.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
          <p className="pt-2">When information is no longer required, we may delete, anonymize, or securely dispose of it where appropriate.</p>
        </section>

        <section id="privacy-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. DATA SECURITY</h2>
          <p>DigiSaloon uses reasonable security measures designed to protect user information.</p>
          <p>These may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Secure communication protocols.</li>
            <li>Access controls.</li>
            <li>Authentication mechanisms.</li>
            <li>Database security.</li>
            <li>Monitoring and logging.</li>
            <li>Secure cloud infrastructure.</li>
            <li>Restricted access to personal information.</li>
          </ul>
          <p className="pt-2">Despite these measures, users should understand that no electronic transmission or storage system is completely secure.</p>
        </section>

        <section id="privacy-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. ACCOUNT SECURITY</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
          <p>You should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Use secure login credentials.</li>
            <li>Avoid sharing account credentials.</li>
            <li>Log out from shared devices.</li>
            <li>Notify DigiSaloon if you suspect unauthorized account access.</li>
          </ul>
        </section>

        <section id="privacy-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. CHILDREN'S PRIVACY</h2>
          <p>DigiSaloon services are intended for users who are 18 years of age or older.</p>
          <p>We do not knowingly allow individuals under 18 to create or use DigiSaloon accounts.</p>
          <p>If we become aware that personal information has been collected from a person under 18 in violation of our requirements, we may take appropriate steps to delete the information.</p>
        </section>

        <section id="privacy-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. THIRD-PARTY SERVICES</h2>
          <p>DigiSaloon may integrate third-party services, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Razorpay</li>
            <li>Firebase</li>
            <li>Google services</li>
            <li>Mapping services</li>
            <li>Analytics services</li>
            <li>Cloud infrastructure services</li>
            <li>Communication services</li>
          </ul>
          <p className="pt-2">Third-party services may collect or process information according to their own terms and privacy policies.</p>
        </section>

        <section id="privacy-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. LEGAL DISCLOSURES</h2>
          <p>DigiSaloon may disclose personal information where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Comply with applicable law.</li>
            <li>Respond to lawful requests.</li>
            <li>Comply with court orders.</li>
            <li>Protect DigiSaloon's rights and property.</li>
            <li>Investigate fraud or security incidents.</li>
            <li>Protect users or the public from serious harm.</li>
          </ul>
        </section>

        <section id="privacy-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. BUSINESS TRANSFERS</h2>
          <p>If DigiSaloon is involved in a merger, acquisition, restructuring, investment, sale of assets, or similar business transaction, user information may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.</p>
        </section>

        <section id="privacy-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. YOUR PRIVACY RIGHTS</h2>
          <p>Depending on applicable law, you may have rights regarding your personal information, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Requesting access to certain information.</li>
            <li>Requesting correction of inaccurate information.</li>
            <li>Requesting deletion where legally applicable.</li>
            <li>Withdrawing certain permissions.</li>
            <li>Requesting information about how your data is processed.</li>
            <li>Raising privacy-related concerns.</li>
          </ul>
          <p className="pt-2">Some requests may be subject to legal, security, or operational limitations.</p>
        </section>

        <section id="privacy-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. LOCATION PERMISSION</h2>
          <p>If you allow location access, DigiSaloon may use your location to provide location-based features.</p>
          <p>You can disable location access through your device settings.</p>
          <p>Disabling location access may affect features that depend on location.</p>
        </section>

        <section id="privacy-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. MARKETING COMMUNICATIONS</h2>
          <p>DigiSaloon may send promotional communications where permitted by applicable law.</p>
          <p>You may opt out of certain promotional communications through available unsubscribe or communication preference options.</p>
          <p>Important transactional and service-related communications may still be sent when necessary to provide the requested service.</p>
        </section>

        <section id="privacy-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>DigiSaloon may update this Privacy Policy from time to time.</p>
          <p>When changes are made, the updated version will be published on the DigiSaloon platform with a revised “Last Updated” date.</p>
          <p>Users are encouraged to review this page periodically.</p>
        </section>

        <section id="privacy-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. CONTACT US</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, contact:</p>
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
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://digisaloon.in" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                digisaloon.in
              </a>
            </p>
          </div>
        </section>

        <section id="privacy-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. ACCEPTANCE</h2>
          <p>By using DigiSaloon, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described above, subject to applicable law.</p>
        </section>

      </div>
    </div>
  );
};