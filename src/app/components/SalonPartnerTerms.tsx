import React from "react";

export const SalonPartnerTerms: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Salon Partner Terms & Conditions
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          SALON PARTNER TERMS & CONDITIONS
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          These Salon Partner Terms & Conditions ("Partner Terms") govern the relationship between DigiSaloon and salons, salon owners, businesses, or authorized representatives ("Salon Partner", "Partner", "you", or "your") who register with or use DigiSaloon's salon partner services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By registering as a Salon Partner, submitting salon information, accepting bookings, or using any DigiSaloon partner platform, you agree to these Partner Terms and all other applicable DigiSaloon policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="partner-terms-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. About DigiSaloon</h2>
          <p>DigiSaloon is a salon discovery and appointment booking platform that enables customers to discover participating salons, view available services, and make Live or Schedule Bookings.</p>
          <p>DigiSaloon provides technology and platform services connecting customers with participating salons.</p>
          <p>The Salon Partner remains responsible for the salon's business operations and delivery of salon services.</p>
        </section>

        <section id="partner-terms-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Partner Eligibility</h2>
          <p>To become a DigiSaloon Salon Partner, the applicant must provide the information and documents reasonably required by DigiSaloon.</p>
          <p>The Partner must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Be legally permitted to operate the salon business</li>
            <li>Have authority to represent the salon</li>
            <li>Provide accurate business information</li>
            <li>Provide valid contact details</li>
            <li>Provide valid bank account details for applicable settlements</li>
            <li>Provide applicable business, tax, or registration information where requested</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
          <p className="pt-2">DigiSaloon may verify submitted information before approving or activating a salon.</p>
        </section>

        <section id="partner-terms-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Partner Account</h2>
          <p>A Salon Partner may receive access to applicable DigiSaloon partner platforms, which may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon Partner mobile application</li>
            <li>Partner web application</li>
            <li>Salon management tools</li>
            <li>Booking management features</li>
            <li>Other partner services introduced by DigiSaloon</li>
          </ul>
          <p className="pt-2">The Partner is responsible for maintaining the security of its partner account and login credentials.</p>
        </section>

        <section id="partner-terms-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Accurate Salon Information</h2>
          <p>The Partner must provide accurate and updated information about the salon, including where applicable:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon name</li>
            <li>Address</li>
            <li>Contact details</li>
            <li>Operating hours</li>
            <li>Services</li>
            <li>Service prices</li>
            <li>Service duration</li>
            <li>Service categories</li>
            <li>Availability</li>
            <li>Images</li>
            <li>Business information</li>
            <li>Applicable tax information</li>
            <li>Bank and settlement information</li>
          </ul>
          <p className="pt-2">The Partner must promptly update information that becomes inaccurate or outdated.</p>
        </section>

        <section id="partner-terms-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Salon Services</h2>
          <p>The Partner is responsible for ensuring that listed services are:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Actually offered by the salon</li>
            <li>Accurately described</li>
            <li>Available at the displayed price</li>
            <li>Performed by appropriately qualified personnel where required</li>
            <li>Provided in accordance with applicable laws and professional requirements</li>
          </ul>
          <p className="pt-2">DigiSaloon does not independently provide the salon services.</p>
        </section>

        <section id="partner-terms-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Service Pricing</h2>
          <p>The Partner is responsible for providing accurate service prices to DigiSaloon.</p>
          <p>Any change in service pricing should be updated through the applicable partner platform or communicated to DigiSaloon as required.</p>
          <p>The Partner should not charge a customer a different price from the applicable displayed or agreed service price without a legitimate and clearly communicated reason.</p>
        </section>

        <section id="partner-terms-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Booking Types</h2>
          <p>DigiSaloon may support:</p>
          <div className="space-y-2 pt-1">
            <h3 className="font-semibold text-slate-800">A. Live Booking</h3>
            <p>A Live Booking allows a customer to request/book an available service for immediate or near-immediate appointment, subject to the applicable salon availability and platform functionality.</p>
            <h3 className="font-semibold text-slate-800 pt-2">B. Schedule Booking</h3>
            <p>A Schedule Booking allows a customer to book a service for a future date and time based on available appointment slots.</p>
            <p>The Partner is responsible for maintaining accurate availability.</p>
          </div>
        </section>

        <section id="partner-terms-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Booking Acceptance</h2>
          <p>The Partner is responsible for appropriately managing bookings received through DigiSaloon.</p>
          <p>Once a booking is confirmed, the Partner should make reasonable efforts to provide the booked service according to the confirmed booking details.</p>
          <p>The Partner must not intentionally accept bookings that it cannot reasonably fulfil.</p>
        </section>

        <section id="partner-terms-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Salon Availability</h2>
          <p>The Partner must maintain accurate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Operating hours</li>
            <li>Service availability</li>
            <li>Appointment slots</li>
            <li>Staff availability where applicable</li>
            <li>Temporary closures</li>
            <li>Holiday schedules</li>
            <li>Other relevant availability information</li>
          </ul>
          <p className="pt-2">Failure to maintain accurate availability may result in customer complaints and booking issues.</p>
        </section>

        <section id="partner-terms-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Salon Cancellation</h2>
          <p>If the Partner is unable to fulfil a confirmed booking, the Partner should notify DigiSaloon and the customer as soon as reasonably possible.</p>
          <p>Where a salon cancellation occurs, DigiSaloon may take appropriate action under its applicable booking and refund policies.</p>
          <p>If a customer is eligible for a refund because of a salon cancellation, the applicable refund may be processed according to DigiSaloon's Cancellation & Refund Policy.</p>
        </section>

        <section id="partner-terms-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Customer Cancellation</h2>
          <p>Customer cancellations are governed by DigiSaloon's Cancellation & Refund Policy.</p>
          <p>The Partner must follow the applicable booking status and cancellation information displayed through the DigiSaloon partner platform.</p>
          <p>The Partner must not independently promise a refund that conflicts with DigiSaloon's applicable platform policies without authorization.</p>
        </section>

        <section id="partner-terms-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Booking Payment Model</h2>
          <p>For applicable DigiSaloon bookings, the customer pays a fixed booking amount of ₹50.19 through DigiSaloon.</p>
          <p>The payment may be processed through an authorized payment gateway such as Razorpay.</p>
          <p>The applicable payment gateway may deduct its applicable charges.</p>
          <p>Under the current model:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer pays ₹50.19 through DigiSaloon.</li>
            <li>₹1.19 may be deducted as the applicable payment gateway fee.</li>
            <li>₹49 remains as the net booking amount attributable to the salon.</li>
            <li>The remaining service amount is paid directly by the customer to the salon.</li>
          </ul>
        </section>

        <section id="partner-terms-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Example of Booking Payment</h2>
          <p>For example, if the salon service price is ₹200:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking amount paid through DigiSaloon: ₹50.19</li>
            <li>Applicable payment gateway fee: ₹1.19</li>
            <li>Net booking amount attributable to salon: ₹49</li>
            <li>Remaining service amount paid directly to salon: ₹151</li>
            <li>Total amount paid by customer: ₹201.19</li>
          </ul>
          <p className="pt-2">The exact amount payable may vary where a valid offer, coupon, additional service, tax, or other applicable adjustment applies.</p>
        </section>

        <section id="partner-terms-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Salon Settlement</h2>
          <p>The applicable net booking amount of ₹49 per booking, after the applicable payment gateway deduction, may be settled to the Partner's registered settlement account.</p>
          <p>DigiSaloon generally targets settlement on the same day or next working day, subject to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Successful payment confirmation</li>
            <li>Payment gateway processing</li>
            <li>Bank processing</li>
            <li>Reconciliation</li>
            <li>Settlement cycles</li>
            <li>Account verification</li>
            <li>Absence of applicable holds, disputes, or reversals</li>
          </ul>
        </section>

        <section id="partner-terms-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Remaining Service Amount</h2>
          <p>The remaining service amount is collected directly by the Salon Partner from the customer after the service, according to the applicable booking and pricing details.</p>
          <p>This amount is not normally collected or settled by DigiSaloon.</p>
          <p>The Partner is responsible for issuing appropriate bills, invoices, receipts, or tax documents for the salon service where required by applicable law.</p>
        </section>

        <section id="partner-terms-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. DigiSaloon Commission</h2>
          <p>Under the current payment model, DigiSaloon does not charge a separate commission on the salon's service amount unless a different commercial arrangement is separately agreed with the Partner.</p>
          <p>The applicable payment gateway fee may be deducted from the ₹50.19 booking payment before settlement.</p>
          <p>Any future commercial fee, subscription, service fee, or other charge will be subject to the applicable Partner agreement or communicated terms.</p>
        </section>

        <section id="partner-terms-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Refunds</h2>
          <p>Where a customer is eligible for a refund, DigiSaloon will process the refund according to the applicable Cancellation & Refund Policy.</p>
          <p>For an eligible Schedule Booking cancellation made at least 1 hour before the appointment:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Original booking payment: ₹50.19</li>
            <li>Applicable payment gateway fee deduction: ₹1.19</li>
            <li>Applicable refund: ₹49</li>
          </ul>
          <p className="pt-2">Refunds are generally processed within 5–7 working days, subject to payment gateway and banking processes.</p>
        </section>

        <section id="partner-terms-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Salon Responsibility for Customer Payments</h2>
          <p>The Partner must not misrepresent the payment status of a DigiSaloon booking.</p>
          <p>The Partner should verify the booking status through the authorized DigiSaloon partner platform before providing the service.</p>
          <p>The Partner must not request the customer to make an additional payment to DigiSaloon through an unauthorized method.</p>
        </section>

        <section id="partner-terms-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Customer Service Standards</h2>
          <p>The Partner is expected to provide services in a professional and respectful manner.</p>
          <p>The Partner should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Treat customers respectfully</li>
            <li>Provide the booked service as described</li>
            <li>Maintain reasonable hygiene and safety standards</li>
            <li>Respect customer privacy</li>
            <li>Avoid discriminatory conduct</li>
            <li>Handle customer complaints professionally</li>
            <li>Follow applicable laws and regulations</li>
          </ul>
        </section>

        <section id="partner-terms-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Service Quality</h2>
          <p>The Partner is responsible for the quality, safety, suitability, and delivery of salon services provided at its premises.</p>
          <p>DigiSaloon does not guarantee the quality or outcome of a service independently provided by a Salon Partner.</p>
          <p>Customer complaints regarding service quality may be reviewed by DigiSaloon where they relate to the platform or booking experience.</p>
        </section>

        <section id="partner-terms-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Salon Staff</h2>
          <p>The Partner is responsible for its employees, barbers, beauticians, technicians, contractors, and other personnel involved in providing salon services.</p>
          <p>The Partner should ensure that its personnel:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Follow applicable laws</li>
            <li>Maintain appropriate professional conduct</li>
            <li>Respect customers</li>
            <li>Follow salon safety procedures</li>
            <li>Protect customer information</li>
            <li>Follow applicable DigiSaloon platform requirements</li>
          </ul>
        </section>

        <section id="partner-terms-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Health, Safety and Hygiene</h2>
          <p>The Partner is responsible for maintaining appropriate hygiene, sanitation, and safety standards applicable to its salon and services.</p>
          <p>The Partner must comply with applicable health, safety, municipal, licensing, and other legal requirements.</p>
        </section>

        <section id="partner-terms-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Licenses and Registrations</h2>
          <p>The Partner is responsible for obtaining and maintaining all licenses, registrations, approvals, permits, and other authorizations required for operating its salon and providing its services.</p>
          <p>DigiSaloon may request evidence of applicable registrations or permissions where reasonably necessary.</p>
        </section>

        <section id="partner-terms-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Tax and GST Information</h2>
          <p>Where applicable, the Partner must provide accurate tax information, including GST-related information, to DigiSaloon.</p>
          <p>If the Partner provides a GSTIN or other tax information, the Partner represents that the information is accurate and belongs to the relevant business.</p>
          <p>DigiSaloon may verify submitted information through appropriate verification methods or services.</p>
          <p>The Partner remains responsible for its own tax compliance and statutory obligations.</p>
        </section>

        <section id="partner-terms-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Bank Account and Settlement Information</h2>
          <p>The Partner must provide accurate bank account and settlement information.</p>
          <p>The Partner is responsible for ensuring that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The bank account details are correct</li>
            <li>The account is active</li>
            <li>The account is authorized for receiving salon settlements</li>
            <li>Any required verification is completed</li>
          </ul>
          <p className="pt-2">DigiSaloon is not responsible for delays caused by incorrect or incomplete bank information provided by the Partner.</p>
        </section>

        <section id="partner-terms-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Customer Information</h2>
          <p>The Partner may receive limited customer information necessary to fulfil a booking.</p>
          <p>The Partner must use customer information only for legitimate purposes related to the booking and applicable DigiSaloon services.</p>
          <p>The Partner must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Sell customer information</li>
            <li>Share customer information without authorization</li>
            <li>Use customer information for unrelated marketing without appropriate permission</li>
            <li>Contact customers for unauthorized purposes</li>
            <li>Misuse customer information</li>
          </ul>
        </section>

        <section id="partner-terms-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Privacy and Data Protection</h2>
          <p>The Partner must handle customer information responsibly and apply reasonable safeguards to protect it.</p>
          <p>The Partner should comply with applicable privacy and data-protection requirements.</p>
          <p>Any suspected unauthorized access, disclosure, or loss of customer information should be reported to DigiSaloon promptly.</p>
        </section>

        <section id="partner-terms-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Reviews and Ratings</h2>
          <p>Customers may submit reviews and ratings based on their genuine experience.</p>
          <p>The Partner must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create fake reviews</li>
            <li>Ask customers to submit false reviews</li>
            <li>Threaten customers regarding reviews</li>
            <li>Offer unauthorized benefits in exchange for positive reviews</li>
            <li>Manipulate ratings</li>
            <li>Create accounts to artificially increase ratings</li>
          </ul>
          <p className="pt-2">The Partner may respond professionally to customer reviews where the relevant feature is available.</p>
        </section>

        <section id="partner-terms-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Salon Content</h2>
          <p>The Partner may provide information, photographs, descriptions, logos, service details, and other content for display on DigiSaloon.</p>
          <p>The Partner represents that it has the necessary rights or authorization to provide such content.</p>
          <p>The Partner must not submit content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Infringes third-party rights</li>
            <li>Is false or misleading</li>
            <li>Contains unauthorized personal information</li>
            <li>Is unlawful</li>
            <li>Violates DigiSaloon policies</li>
          </ul>
        </section>

        <section id="partner-terms-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Intellectual Property</h2>
          <p>DigiSaloon retains its rights in its platform, software, branding, trademarks, logos, designs, content, and technology.</p>
          <p>The Partner retains ownership of its own business content and intellectual property, subject to the rights granted to DigiSaloon for operating and promoting the platform.</p>
          <p>The Partner must not copy, modify, reverse engineer, or misuse DigiSaloon's protected materials except as permitted by law or authorized by DigiSaloon.</p>
        </section>

        <section id="partner-terms-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Use of Salon Name and Content</h2>
          <p>The Partner authorizes DigiSaloon, during the Partner's participation in the platform, to use relevant salon information and approved promotional content for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Displaying the salon on DigiSaloon</li>
            <li>Enabling customer bookings</li>
            <li>Providing search and discovery</li>
            <li>Promoting the salon through DigiSaloon channels</li>
            <li>Providing customer support</li>
            <li>Operating the platform</li>
          </ul>
        </section>

        <section id="partner-terms-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. Promotions and Offers</h2>
          <p>A Partner may participate in DigiSaloon promotional campaigns where agreed or made available.</p>
          <p>The Partner must comply with the applicable terms of each promotional campaign.</p>
          <p>The Partner must not independently advertise a DigiSaloon offer with conditions that differ from the official offer terms without authorization.</p>
        </section>

        <section id="partner-terms-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. Prohibited Partner Conduct</h2>
          <p>The Partner must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create fraudulent bookings</li>
            <li>Manipulate availability</li>
            <li>Reject valid bookings without reasonable grounds</li>
            <li>Repeatedly cancel confirmed bookings without reasonable justification</li>
            <li>Misrepresent services or prices</li>
            <li>Submit false business information</li>
            <li>Manipulate reviews</li>
            <li>Misuse customer information</li>
            <li>Engage in discriminatory or abusive conduct</li>
            <li>Attempt unauthorized access to DigiSaloon systems</li>
            <li>Circumvent platform controls</li>
            <li>Use DigiSaloon data for unauthorized purposes</li>
            <li>Engage in unlawful activities</li>
          </ul>
        </section>

        <section id="partner-terms-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. Unauthorized Payments</h2>
          <p>The Partner must not ask customers to make DigiSaloon booking payments through unauthorized personal accounts, payment links, QR codes, or other methods while representing such payment as an official DigiSaloon payment.</p>
          <p>Any additional salon service amount payable directly to the salon must be clearly communicated to the customer.</p>
        </section>

        <section id="partner-terms-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. No Unauthorized Charges</h2>
          <p>The Partner should not impose hidden or unauthorized charges relating to a confirmed DigiSaloon booking.</p>
          <p>Any additional service requested by the customer should be clearly communicated and agreed upon before the additional service is provided.</p>
        </section>

        <section id="partner-terms-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. Booking Changes</h2>
          <p>If the Partner needs to change a booking because of availability, staffing, operational issues, or other legitimate reasons, the Partner should use the applicable DigiSaloon partner tools or contact DigiSaloon support as soon as possible.</p>
          <p>The Partner should not make material changes to a customer's confirmed booking without appropriate communication.</p>
        </section>

        <section id="partner-terms-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. Customer No-Show</h2>
          <p>If a customer does not arrive for a confirmed booking, the Partner should update the booking status through the applicable DigiSaloon partner platform where such functionality is available.</p>
          <p>DigiSaloon may use booking status information for operational, dispute, payment, and reporting purposes.</p>
        </section>

        <section id="partner-terms-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. Salon Closure</h2>
          <p>If the salon is temporarily closed because of an emergency, holiday, maintenance, staffing issue, or other reason, the Partner should update its availability promptly.</p>
          <p>The Partner should notify DigiSaloon as soon as reasonably possible where confirmed bookings may be affected.</p>
        </section>

        <section id="partner-terms-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. Partner Support</h2>
          <p>Salon Partners may contact DigiSaloon for assistance relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bookings</li>
            <li>Payments</li>
            <li>Settlements</li>
            <li>Account access</li>
            <li>Salon information</li>
            <li>Customer issues</li>
            <li>Technical issues</li>
            <li>Policy questions</li>
          </ul>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm mt-3">
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
        </section>

        <section id="partner-terms-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. Technical Requirements</h2>
          <p>The Partner is responsible for maintaining reasonable access to the device, internet connection, and software required to use the DigiSaloon partner platform.</p>
          <p>DigiSaloon may experience temporary interruptions due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintenance</li>
            <li>Network problems</li>
            <li>Third-party service issues</li>
            <li>Payment gateway issues</li>
            <li>Server or infrastructure issues</li>
            <li>Technical failures</li>
            <li>Other circumstances beyond DigiSaloon's reasonable control</li>
          </ul>
        </section>

        <section id="partner-terms-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. Partner Account Security</h2>
          <p>The Partner must keep its login credentials and authentication information confidential.</p>
          <p>The Partner must immediately notify DigiSaloon if it suspects:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized access</li>
            <li>Credential compromise</li>
            <li>Suspicious transactions</li>
            <li>Unauthorized booking activity</li>
            <li>Other security incidents</li>
          </ul>
        </section>

        <section id="partner-terms-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. Monitoring and Verification</h2>
          <p>DigiSaloon may review partner information and platform activity for legitimate purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account verification</li>
            <li>Fraud prevention</li>
            <li>Booking integrity</li>
            <li>Payment reconciliation</li>
            <li>Customer protection</li>
            <li>Security</li>
            <li>Policy compliance</li>
            <li>Legal compliance</li>
          </ul>
        </section>

        <section id="partner-terms-43" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">43. Suspension or Restriction</h2>
          <p>DigiSaloon may temporarily restrict a Partner account where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Investigate suspected fraud</li>
            <li>Investigate serious policy violations</li>
            <li>Protect customers</li>
            <li>Protect salon partners</li>
            <li>Protect platform security</li>
            <li>Resolve payment or settlement issues</li>
            <li>Comply with legal requirements</li>
          </ul>
        </section>

        <section id="partner-terms-44" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">44. Termination</h2>
          <p>Either DigiSaloon or the Partner may terminate the partnership subject to applicable contractual terms and outstanding obligations.</p>
          <p>DigiSaloon may terminate or suspend a Partner account where permitted by applicable law and agreement, including for serious or repeated violations of these Partner Terms.</p>
        </section>

        <section id="partner-terms-45" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">45. Effect of Termination</h2>
          <p>After termination:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The Partner may lose access to DigiSaloon partner systems.</li>
            <li>New bookings may no longer be accepted through DigiSaloon.</li>
            <li>Pending bookings may be handled according to applicable circumstances.</li>
            <li>Outstanding eligible settlements may continue to be processed subject to reconciliation.</li>
            <li>Applicable financial, legal, tax, and transaction records may be retained as required.</li>
            <li>Confidentiality and other provisions that reasonably survive termination will continue to apply.</li>
          </ul>
        </section>

        <section id="partner-terms-46" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">46. Outstanding Settlements</h2>
          <p>Termination does not automatically eliminate valid settlement obligations.</p>
          <p>DigiSaloon may complete, hold, adjust, or reconcile pending settlements where reasonably necessary because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Refunds</li>
            <li>Reversals</li>
            <li>Payment disputes</li>
            <li>Duplicate transactions</li>
            <li>Fraud investigations</li>
            <li>Incorrect settlement information</li>
            <li>Other legitimate reconciliation requirements</li>
          </ul>
        </section>

        <section id="partner-terms-47" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">47. Indemnification</h2>
          <p>To the extent permitted by applicable law, the Partner may be responsible for claims, losses, liabilities, damages, or expenses arising from the Partner's:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Breach of these Partner Terms</li>
            <li>Violation of applicable law</li>
            <li>Misuse of customer information</li>
            <li>Unauthorized conduct</li>
            <li>False business information</li>
            <li>Service delivery</li>
            <li>Intellectual property infringement</li>
            <li>Negligence or misconduct</li>
          </ul>
          <p className="pt-2">The specific scope of any indemnification obligation may be governed by the applicable partner agreement and law.</p>
        </section>

        <section id="partner-terms-48" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">48. Independent Business Relationship</h2>
          <p>The Salon Partner operates its own salon business independently.</p>
          <p>Nothing in these Partner Terms is intended to create an employment, agency, franchise, joint venture, or partnership relationship between DigiSaloon and the Salon Partner unless expressly agreed in writing.</p>
          <p>DigiSaloon provides the technology platform and booking infrastructure.</p>
        </section>

        <section id="partner-terms-49" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">49. Service Responsibility</h2>
          <p>The Salon Partner remains responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon operations</li>
            <li>Staff</li>
            <li>Service delivery</li>
            <li>Service quality</li>
            <li>Pricing</li>
            <li>Hygiene</li>
            <li>Safety</li>
            <li>Licenses and registrations</li>
            <li>Applicable taxes</li>
            <li>Customer service at the salon</li>
          </ul>
          <p className="pt-2">DigiSaloon is not the provider of the salon service unless expressly stated otherwise.</p>
        </section>

        <section id="partner-terms-50" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">50. Disputes</h2>
          <p>Partners should contact DigiSaloon support regarding platform-related disputes.</p>
          <p>For service-related customer complaints, DigiSaloon may facilitate communication or review relevant platform information, but responsibility for the actual salon service remains with the Salon Partner.</p>
        </section>

        <section id="partner-terms-51" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">51. Confidentiality</h2>
          <p>The Partner should keep confidential information received from DigiSaloon confidential and use it only for legitimate purposes related to the partnership.</p>
          <p>Confidential information may include non-public business information, platform information, operational information, and other information identified as confidential.</p>
        </section>

        <section id="partner-terms-52" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">52. Compliance With Law</h2>
          <p>The Partner must comply with applicable laws and regulations relevant to its salon business, employees, customers, taxation, payments, health and safety, advertising, privacy, and other applicable matters.</p>
        </section>

        <section id="partner-terms-53" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">53. Force Majeure</h2>
          <p>DigiSaloon will not be responsible for delays or failures caused by circumstances beyond its reasonable control, including natural disasters, major network failures, government actions, widespread technical outages, payment infrastructure failures, or other extraordinary events.</p>
        </section>

        <section id="partner-terms-54" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">54. Changes to Partner Terms</h2>
          <p>DigiSaloon may update these Partner Terms from time to time to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Platform features</li>
            <li>Payment and settlement processes</li>
            <li>Partner services</li>
            <li>Legal requirements</li>
            <li>Security practices</li>
            <li>Business operations</li>
          </ul>
          <p className="pt-2">Material changes may be communicated through appropriate channels.</p>
          <p>Continued use of DigiSaloon partner services after applicable changes may constitute acceptance of the updated Partner Terms, subject to applicable law.</p>
        </section>

        <section id="partner-terms-55" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">55. Relationship With Other DigiSaloon Policies</h2>
          <p>These Partner Terms should be read together with applicable DigiSaloon policies, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Privacy Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Security Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Review & Rating Policy</li>
            <li>Offers & Coupon Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
            <li>Legal Disclaimer</li>
            <li>Other applicable Partner policies or agreements</li>
          </ul>
        </section>

        <section id="partner-terms-56" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">56. Contact DigiSaloon</h2>
          <p>For partner registration, account support, booking issues, payment and settlement queries, complaints, or other partner-related matters, please contact:</p>
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
          <p className="pt-2">By registering with or using DigiSaloon as a Salon Partner, you acknowledge that you have read, understood, and agreed to these Salon Partner Terms & Conditions.</p>
        </section>

      </div>
    </div>
  );
};