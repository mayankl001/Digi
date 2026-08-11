import React from "react";

export const AcceptableUsePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Acceptable Use
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          ACCEPTABLE USE & CUSTOMER CONDUCT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Acceptable Use & Customer Conduct Policy sets out the standards that customers and other DigiSaloon users are expected to follow when using DigiSaloon services.
        </p>
      </div>

      {/* Sections with IDs */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="use-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This Policy applies to the use of:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DigiSaloon User App, DigiSaloon website</li>
            <li>Booking services, Review and rating features</li>
            <li>Customer support, Other customer-facing DigiSaloon services</li>
          </ul>
          <p>Additional rules may apply to salon partners and authorized staff.</p>
        </section>

        <section id="use-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Appropriate Use</h2>
          <p>Users may use DigiSaloon for legitimate purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Discovering salons, Viewing services, Making appointments</li>
            <li>Managing bookings, Making legitimate payments</li>
            <li>Providing genuine reviews, Communicating with DigiSaloon support</li>
          </ul>
        </section>

        <section id="use-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Accurate Information</h2>
          <p>Users should provide accurate and up-to-date information when creating an account, making a booking, making a payment, contacting support, or submitting a review.</p>
          <p>Users must not knowingly provide materially false information.</p>
        </section>

        <section id="use-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Respectful Conduct</h2>
          <p>Users must communicate respectfully with salon owners, staff, barbers, DigiSaloon employees, customer support, and other users.</p>
          <p>Threatening, abusive or harassing behavior is not permitted.</p>
        </section>

        <section id="use-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Prohibited Activities</h2>
          <p>Users must not use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Commit fraud, Create fake bookings, Abuse refunds</li>
            <li>Manipulate cancellation records, Manipulate reviews or ratings</li>
            <li>Impersonate another person, Misuse another person's account</li>
            <li>Gain unauthorized access, Disrupt platform operations</li>
            <li>Circumvent security controls, Engage in unlawful activity</li>
          </ul>
        </section>

        <section id="use-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Fake Bookings</h2>
          <p>Users must not create bookings that they do not genuinely intend to use. Examples include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Repeated fake reservations, Bookings made to block salon availability</li>
            <li>Automated fake bookings, Bookings created to manipulate salon performance</li>
          </ul>
        </section>

        <section id="use-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Cancellation Abuse</h2>
          <p>Users must not intentionally misuse the cancellation system to avoid legitimate charges or manipulate platform records.</p>
          <p>Creating multiple accounts to bypass cancellation restrictions is prohibited.</p>
        </section>

        <section id="use-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Payment Abuse</h2>
          <p>Users must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use unauthorized payment credentials, Submit fraudulent transactions</li>
            <li>Manipulate payment status, Abuse refund systems</li>
            <li>Attempt fraudulent chargebacks, Circumvent legitimate payment procedures</li>
          </ul>
        </section>

        <section id="use-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Review and Rating Abuse</h2>
          <p>Users must not submit fake reviews, manipulate ratings, create accounts for review manipulation, threaten others, or submit reviews for services they did not receive.</p>
          <p>Reviews are governed by the Review & Rating Policy.</p>
        </section>

        <section id="use-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Misuse of Offers</h2>
          <p>Users must not abuse promotional offers by creating multiple accounts, using fake information, circumventing eligibility requirements, creating fraudulent bookings, or manipulating cancellations to obtain benefits.</p>
        </section>

        <section id="use-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Unauthorized Access</h2>
          <p>Users must not attempt to access another user's account, another salon's information, admin systems, internal databases, restricted APIs, or other protected DigiSaloon systems.</p>
        </section>

        <section id="use-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Automated Access</h2>
          <p>Users must not use unauthorized bots, crawlers, scripts, scraping tools, or automated booking systems to access or manipulate DigiSaloon services.</p>
        </section>

        <section id="use-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Harmful Content</h2>
          <p>Users must not upload, submit or distribute content that is illegal, threatening, harassing, fraudulent, malicious, infringing, or intended to disrupt the platform.</p>
        </section>

        <section id="use-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Personal Information</h2>
          <p>Users must not collect, share or misuse another person's personal information through DigiSaloon, including information relating to customers, salon staff, other users, or DigiSaloon employees.</p>
        </section>

        <section id="use-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Security Testing</h2>
          <p>Users must not conduct unauthorized security testing, penetration testing or vulnerability exploitation against DigiSaloon systems.</p>
          <p>Suspected security vulnerabilities should instead be reported to: <strong>support@digisaloon.in</strong></p>
        </section>

        <section id="use-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Platform Interference</h2>
          <p>Users must not intentionally interfere with DigiSaloon servers, applications, networks, APIs, databases, booking systems, or security systems.</p>
        </section>

        <section id="use-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Customer-Salon Relationship</h2>
          <p>Customers must follow reasonable salon rules while using salon services.</p>
          <p>DigiSaloon may take platform-level action where serious or repeated misconduct affects the platform or other users.</p>
        </section>

        <section id="use-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Customer No-Show</h2>
          <p>Customers should cancel appointments when they know they cannot attend. Repeated no-shows may be considered when managing future bookings or account activity.</p>
        </section>

        <section id="use-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Consequences of Violation</h2>
          <p>Where a violation occurs, DigiSaloon may take appropriate action, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Warning, Content removal, Feature restriction</li>
            <li>Booking restriction, Account suspension, Account termination</li>
            <li>Partner or salon restriction where applicable, Investigation, Legal action</li>
          </ul>
        </section>

        <section id="use-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Emergency Restrictions</h2>
          <p>DigiSaloon may immediately restrict access where reasonably necessary to protect users, salon partners, customer information, payment systems, platform infrastructure, or security.</p>
        </section>

        <section id="use-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Reporting Misuse</h2>
          <p>Users may report suspected abuse, fraud or security concerns to: <strong>support@digisaloon.in</strong>. Reports should include relevant information where available.</p>
        </section>

        <section id="use-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Relationship With Other Policies</h2>
          <p>This Policy should be read together with Terms & Conditions, Privacy Policy, Booking & Appointment Policy, Cancellation & Refund Policy, Review & Rating Policy, Offers & Coupon Policy, and Security Policy.</p>
        </section>

        <section id="use-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Policy Updates</h2>
          <p>DigiSaloon may update this Policy to reflect changes in its services, technology, security practices or applicable requirements.</p>
        </section>

        <section id="use-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Contact</h2>
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