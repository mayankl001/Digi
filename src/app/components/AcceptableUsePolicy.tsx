import React from "react";

export const AcceptableUsePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Acceptable Use & Customer Conduct Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          ACCEPTABLE USE & CUSTOMER CONDUCT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Acceptable Use & Customer Conduct Policy sets out the standards of conduct expected from customers using DigiSaloon's website, mobile application, booking services, communication features, reviews, and other related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By accessing or using DigiSaloon, customers agree to comply with this Policy, the DigiSaloon Terms & Conditions, Privacy Policy, Booking & Appointment Policy, Review & Rating Policy, Content Policy & Community Guidelines, and other applicable policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="acc-use-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose of This Policy</h2>
          <p>The purpose of this Policy is to help maintain a safe, respectful, reliable, and fair environment for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customers</li>
            <li>Salon partners</li>
            <li>Salon staff</li>
            <li>DigiSaloon employees and support personnel</li>
            <li>Other users</li>
            <li>Service providers</li>
          </ul>
          <p className="pt-2">Customers are expected to use DigiSaloon responsibly and in accordance with applicable laws and platform rules.</p>
        </section>

        <section id="acc-use-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Appropriate Use of DigiSaloon</h2>
          <p>Customers may use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Discover participating salons</li>
            <li>View available services</li>
            <li>Make eligible Live Bookings</li>
            <li>Make eligible Schedule Bookings</li>
            <li>Manage bookings</li>
            <li>Receive booking and appointment information</li>
            <li>Make applicable booking payments</li>
            <li>Submit genuine reviews and ratings after eligible bookings</li>
            <li>Communicate with DigiSaloon regarding bookings and support</li>
            <li>Use other features made available by DigiSaloon</li>
          </ul>
        </section>

        <section id="acc-use-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Customer Responsibilities</h2>
          <p>Customers are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing accurate account information</li>
            <li>Selecting the correct salon and service</li>
            <li>Providing accurate booking information</li>
            <li>Arriving at the salon according to the applicable appointment details</li>
            <li>Following reasonable salon rules</li>
            <li>Making applicable payments</li>
            <li>Treating salon staff respectfully</li>
            <li>Using DigiSaloon features honestly</li>
            <li>Keeping account credentials secure</li>
            <li>Following applicable DigiSaloon policies</li>
          </ul>
        </section>

        <section id="acc-use-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Respectful Conduct</h2>
          <p>Customers must interact respectfully with salon staff, salon owners, DigiSaloon personnel, and other users.</p>
          <p>Customers must not engage in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Threatening behavior</li>
            <li>Harassment</li>
            <li>Bullying</li>
            <li>Intimidation</li>
            <li>Abusive communication</li>
            <li>Repeated unwanted contact</li>
            <li>Discriminatory conduct</li>
            <li>Personal attacks</li>
            <li>Offensive or inappropriate behavior</li>
          </ul>
        </section>

        <section id="acc-use-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Prohibited Booking Activities</h2>
          <p>Customers must not use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create fraudulent bookings</li>
            <li>Make bookings using false information</li>
            <li>Deliberately create duplicate bookings to disrupt salon availability</li>
            <li>Manipulate appointment availability</li>
            <li>Repeatedly make bookings without genuine intention to use the service</li>
            <li>Use unauthorized methods to bypass booking restrictions</li>
            <li>Interfere with another customer's booking</li>
            <li>Misrepresent the identity of the person receiving the service</li>
          </ul>
        </section>

        <section id="acc-use-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Live Bookings</h2>
          <p>Customers making a Live Booking are expected to proceed with the appointment after receiving confirmation.</p>
          <p>Under the applicable DigiSaloon Booking & Appointment Policy, Live Bookings generally cannot be cancelled by the customer and the booking payment is non-refundable.</p>
          <p>Customers should therefore confirm the salon, service, and booking details before completing a Live Booking.</p>
        </section>

        <section id="acc-use-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Schedule Bookings</h2>
          <p>Customers making Schedule Bookings should select an appropriate appointment date and time.</p>
          <p>Where cancellation is permitted, the customer must follow the applicable cancellation requirements.</p>
          <p>Under the current DigiSaloon Cancellation & Refund Policy:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Cancellation at least 1 hour before the appointment may be eligible for a ₹49 refund after the applicable ₹1.19 payment gateway fee deduction.</li>
            <li>Cancellation with less than 1 hour remaining before the appointment is not permitted and is non-refundable.</li>
          </ul>
        </section>

        <section id="acc-use-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. No-Show Conduct</h2>
          <p>Customers should attend confirmed appointments at the scheduled time.</p>
          <p>Repeated no-shows or failure to attend confirmed appointments without reasonable explanation may be treated as misuse of the booking service.</p>
          <p>DigiSaloon may take reasonable action against repeated booking abuse, subject to applicable policies.</p>
        </section>

        <section id="acc-use-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Late Arrival</h2>
          <p>Customers should arrive sufficiently early to allow the salon to provide the booked service within the available appointment schedule.</p>
          <p>Late arrival may result in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Reduced service time</li>
            <li>Rescheduling where available</li>
            <li>Service limitations</li>
            <li>Salon-specific late-arrival rules</li>
          </ul>
          <p className="pt-2">Any such decision should be communicated by the salon to the customer where reasonably possible.</p>
        </section>

        <section id="acc-use-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Salon Rules</h2>
          <p>Customers are expected to follow reasonable rules communicated by the salon, including rules relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Appointment timing</li>
            <li>Hygiene</li>
            <li>Safety</li>
            <li>Salon premises</li>
            <li>Service procedures</li>
            <li>Staff interactions</li>
            <li>Use of salon facilities</li>
          </ul>
          <p className="pt-2">Salon-specific rules must not override applicable law or DigiSaloon platform policies.</p>
        </section>

        <section id="acc-use-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Payment Conduct</h2>
          <p>Customers must make applicable payments through the authorized payment method provided by DigiSaloon.</p>
          <p>DigiSaloon currently collects a fixed booking amount of ₹50.19 through the platform for applicable bookings.</p>
          <p>The remaining applicable service amount is payable directly to the salon according to the booking and payment terms.</p>
          <p>Customers must not attempt to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Manipulate payment records</li>
            <li>Make fraudulent payment claims</li>
            <li>Use unauthorized payment methods</li>
            <li>Reverse or dispute a legitimate transaction without a genuine basis</li>
            <li>Provide false payment information</li>
          </ul>
        </section>

        <section id="acc-use-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Payment Disputes</h2>
          <p>Customers should first contact DigiSaloon regarding legitimate payment issues, failed transactions, duplicate payments, or refund concerns.</p>
          <p>Customers must provide accurate information when raising a payment dispute.</p>
          <p>Fraudulent or knowingly false payment disputes may be treated as misuse of the platform.</p>
        </section>

        <section id="acc-use-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Reviews and Ratings</h2>
          <p>Customers may submit genuine reviews and ratings where eligible.</p>
          <p>Reviews and ratings must be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Honest</li>
            <li>Relevant to the actual experience</li>
            <li>Based on genuine interaction or service</li>
            <li>Respectful</li>
            <li>Free from threats or harassment</li>
          </ul>
          <p className="pt-2">Customers must not use reviews to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Extort a salon</li>
            <li>Demand unauthorized benefits</li>
            <li>Threaten negative reviews for personal gain</li>
            <li>Publish deliberately false information</li>
            <li>Manipulate ratings</li>
            <li>Impersonate another person</li>
          </ul>
          <p className="pt-2">Additional rules are provided in the DigiSaloon Review & Rating Policy.</p>
        </section>

        <section id="acc-use-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. False or Misleading Information</h2>
          <p>Customers must not knowingly provide false or misleading information relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Identity</li>
            <li>Account details</li>
            <li>Bookings</li>
            <li>Payments</li>
            <li>Reviews</li>
            <li>Refund requests</li>
            <li>Complaints</li>
            <li>Promotional eligibility</li>
            <li>Other platform activities</li>
          </ul>
        </section>

        <section id="acc-use-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Coupon and Offer Misuse</h2>
          <p>Customers must not misuse promotional offers, coupons, referral programs, or discounts.</p>
          <p>Prohibited conduct may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Creating multiple accounts to obtain the same new-user offer</li>
            <li>Using unauthorized coupon codes</li>
            <li>Self-referral</li>
            <li>Fraudulent referral activity</li>
            <li>Manipulating promotional systems</li>
            <li>Repeatedly exploiting technical errors</li>
            <li>Selling or distributing account-specific promotional benefits without authorization</li>
          </ul>
          <p className="pt-2">The DigiSaloon Offers & Coupon Policy also applies.</p>
        </section>

        <section id="acc-use-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Account Misuse</h2>
          <p>Customers must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Share accounts for unauthorized purposes</li>
            <li>Use another person's account without authorization</li>
            <li>Attempt to access another user's account</li>
            <li>Create fake accounts</li>
            <li>Circumvent account restrictions</li>
            <li>Use accounts for fraudulent activities</li>
            <li>Attempt to bypass platform security</li>
          </ul>
          <p className="pt-2">Account-related matters are also governed by the User Account & Account Deletion Policy.</p>
        </section>

        <section id="acc-use-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Personal Information</h2>
          <p>Customers must respect the privacy of salon staff, salon owners, other customers, and DigiSaloon personnel.</p>
          <p>Customers must not publish, collect, distribute, or misuse another person's personal information without appropriate authorization.</p>
          <p>This includes information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Private messages</li>
            <li>Personal photographs</li>
            <li>Identification information</li>
            <li>Private account information</li>
          </ul>
        </section>

        <section id="acc-use-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Photography and Recording</h2>
          <p>Customers must respect salon-specific privacy rules regarding photography, video recording, and audio recording.</p>
          <p>Customers should not record or publish another person without appropriate permission where permission is required.</p>
          <p>DigiSaloon is not responsible for private recordings independently made by users outside the platform, subject to applicable law.</p>
        </section>

        <section id="acc-use-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Harassment and Abuse</h2>
          <p>DigiSaloon does not permit harassment or abusive behavior directed toward:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon owners</li>
            <li>Salon staff</li>
            <li>Other customers</li>
            <li>DigiSaloon employees</li>
            <li>Customer support representatives</li>
          </ul>
          <p className="pt-2">Repeated abusive communications may result in communication restrictions or other appropriate action.</p>
        </section>

        <section id="acc-use-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Discrimination and Hate</h2>
          <p>Customers must not use DigiSaloon to promote or engage in discriminatory or hateful conduct toward individuals or groups.</p>
          <p>Content or conduct that targets individuals based on protected characteristics may be restricted or removed where it violates applicable law or DigiSaloon policies.</p>
        </section>

        <section id="acc-use-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Illegal Activities</h2>
          <p>Customers must not use DigiSaloon to facilitate or participate in unlawful activities.</p>
          <p>DigiSaloon may take appropriate action where it becomes aware of activity that appears to violate applicable law.</p>
          <p>Where legally required, DigiSaloon may cooperate with relevant authorities.</p>
        </section>

        <section id="acc-use-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Platform and System Security</h2>
          <p>Customers must not attempt to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Gain unauthorized access to DigiSaloon systems</li>
            <li>Access administrative areas without authorization</li>
            <li>Circumvent authentication</li>
            <li>Introduce malicious software</li>
            <li>Interfere with servers or networks</li>
            <li>Conduct unauthorized security testing</li>
            <li>Scrape or extract data through unauthorized methods</li>
            <li>Reverse engineer protected platform components where prohibited by law</li>
            <li>Exploit security vulnerabilities without authorization</li>
          </ul>
          <p className="pt-2">Security concerns should be reported to DigiSaloon rather than exploited.</p>
        </section>

        <section id="acc-use-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Automated or Abusive Use</h2>
          <p>Customers must not use bots, scripts, automated systems, or other unauthorized mechanisms to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create large numbers of accounts</li>
            <li>Generate fraudulent bookings</li>
            <li>Manipulate availability</li>
            <li>Abuse coupons</li>
            <li>Scrape restricted information</li>
            <li>Overload DigiSaloon systems</li>
            <li>Interfere with normal platform operation</li>
          </ul>
        </section>

        <section id="acc-use-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Spam and Unwanted Communication</h2>
          <p>Customers must not use DigiSaloon communication features to send:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Spam</li>
            <li>Repeated unwanted messages</li>
            <li>Unauthorized advertisements</li>
            <li>Malicious links</li>
            <li>Fraudulent offers</li>
            <li>Misleading promotional content</li>
          </ul>
        </section>

        <section id="acc-use-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Intellectual Property</h2>
          <p>Customers must respect the intellectual property rights of DigiSaloon, salons, users, and third parties.</p>
          <p>Customers must not use DigiSaloon content, branding, images, software, text, or other protected material in an unauthorized manner.</p>
        </section>

        <section id="acc-use-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Content Standards</h2>
          <p>Any content submitted through DigiSaloon should comply with the Content Policy & Community Guidelines.</p>
          <p>Prohibited content may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Illegal content</li>
            <li>Threats</li>
            <li>Harassment</li>
            <li>Hate or discriminatory content</li>
            <li>Fraudulent content</li>
            <li>Deliberately misleading information</li>
            <li>Inappropriate personal information</li>
            <li>Unauthorized advertising</li>
            <li>Spam</li>
            <li>Content infringing third-party rights</li>
          </ul>
        </section>

        <section id="acc-use-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Customer-Salon Disputes</h2>
          <p>DigiSaloon provides a booking platform connecting customers with participating salons.</p>
          <p>Customers should attempt to resolve genuine service-related concerns respectfully with the salon and may contact DigiSaloon support where platform assistance is appropriate.</p>
          <p>DigiSaloon may review booking records, payment records, communications, or other relevant information when handling a complaint.</p>
        </section>

        <section id="acc-use-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Customer Support Conduct</h2>
          <p>Customers contacting DigiSaloon support are expected to provide accurate information and communicate respectfully.</p>
          <p>DigiSaloon may restrict communication channels where there is repeated abusive, threatening, fraudulent, or otherwise inappropriate conduct.</p>
          <p>Customers with legitimate concerns will continue to have appropriate channels for raising those concerns.</p>
        </section>

        <section id="acc-use-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Reporting Misconduct</h2>
          <p>Customers may report suspected violations of this Policy to DigiSaloon.</p>
          <p>Reports may relate to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fraudulent bookings</li>
            <li>Abusive behavior</li>
            <li>Fake reviews</li>
            <li>Coupon misuse</li>
            <li>Security concerns</li>
            <li>Unauthorized account access</li>
            <li>Inappropriate content</li>
            <li>Other prohibited activity</li>
          </ul>
          <p className="pt-2">Reports should contain sufficient information for DigiSaloon to investigate where possible.</p>
        </section>

        <section id="acc-use-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Investigation and Enforcement</h2>
          <p>Where DigiSaloon receives a report or identifies potential misuse, it may review relevant information and take appropriate action.</p>
          <p>Depending on the circumstances, actions may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Removing content</li>
            <li>Cancelling an unauthorized booking</li>
            <li>Restricting certain account features</li>
            <li>Restricting promotional benefits</li>
            <li>Temporarily suspending an account</li>
            <li>Terminating an account</li>
            <li>Restricting access to specific platform features</li>
            <li>Taking other action permitted by applicable law and DigiSaloon policies</li>
          </ul>
          <p className="pt-2">The action taken will depend on the nature and circumstances of the issue.</p>
        </section>

        <section id="acc-use-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Emergency or Serious Safety Concerns</h2>
          <p>DigiSaloon should not be used as a substitute for emergency services.</p>
          <p>Where there is an immediate risk of harm or an emergency, users should contact the appropriate local emergency service or authority.</p>
          <p>DigiSaloon may cooperate with lawful requests from relevant authorities where required.</p>
        </section>

        <section id="acc-use-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. No Retaliation for Genuine Reports</h2>
          <p>Customers should be able to raise genuine complaints or report policy violations without unreasonable retaliation.</p>
          <p>However, knowingly false, fraudulent, malicious, or abusive reports may themselves violate this Policy.</p>
        </section>

        <section id="acc-use-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. Account Restrictions</h2>
          <p>Violation of this Policy may result in restrictions on the customer's account or access to certain DigiSaloon features.</p>
          <p>Depending on the circumstances, DigiSaloon may consider factors such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Nature of the conduct</li>
            <li>Frequency of violations</li>
            <li>Impact on other users</li>
            <li>Security concerns</li>
            <li>Evidence available</li>
            <li>Applicable law</li>
            <li>Previous account activity</li>
          </ul>
        </section>

        <section id="acc-use-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. Responsibility for Account Activity</h2>
          <p>Customers are responsible for activity carried out through their account, subject to applicable law and circumstances involving unauthorized access.</p>
          <p>Customers should promptly notify DigiSaloon if they believe their account has been compromised.</p>
        </section>

        <section id="acc-use-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. No Circumvention</h2>
          <p>Customers must not attempt to avoid or bypass restrictions imposed under DigiSaloon policies.</p>
          <p>This includes creating new accounts or using alternative methods to continue prohibited activity after an account or feature has been restricted.</p>
        </section>

        <section id="acc-use-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. Relationship With Other Policies</h2>
          <p>This Policy should be read together with the DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>User Account & Account Deletion Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Offers & Coupon Policy</li>
            <li>Review & Rating Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Security Policy</li>
            <li>Legal Disclaimer</li>
            <li>Grievance Redressal & Contact Policy</li>
          </ul>
        </section>

        <section id="acc-use-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. Changes to This Policy</h2>
          <p>DigiSaloon may update this Acceptable Use & Customer Conduct Policy from time to time to reflect changes in its services, platform features, security practices, legal requirements, or business operations.</p>
          <p>The updated version will be made available through the DigiSaloon website, mobile application, or other appropriate channels.</p>
        </section>

        <section id="acc-use-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. Contact Us</h2>
          <p>For questions, complaints, or reports relating to this Policy, please contact:</p>
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
          <p className="pt-2">By using DigiSaloon, customers agree to use the platform responsibly, respectfully, and in accordance with this Policy and applicable DigiSaloon policies.</p>
        </section>

      </div>
    </div>
  );
};