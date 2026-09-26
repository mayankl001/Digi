import React from "react";

export const PartnerServicePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Partner Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PARTNER SERVICE, PRICING & CANCELLATION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Partner Service, Pricing & Cancellation Policy governs the responsibilities of salon partners listed on DigiSaloon regarding service information, pricing, appointment availability, service delivery, and cancellation of bookings.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By registering and operating as a salon partner on DigiSaloon, the partner agrees to comply with this Policy along with the DigiSaloon Partner Terms & Conditions and other applicable policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="sec-psp-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>The purpose of this Policy is to ensure that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon services are accurately listed.</li>
            <li>Prices displayed to customers are correct.</li>
            <li>Service duration and availability are properly maintained.</li>
            <li>Confirmed appointments are honored.</li>
            <li>Customers receive the services they booked.</li>
            <li>Partner cancellations are handled appropriately.</li>
            <li>Customers are not misled regarding service prices or availability.</li>
          </ul>
        </section>

        <section id="sec-psp-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. SERVICE INFORMATION</h2>
          <p>Salon partners are responsible for providing accurate information about every service listed on DigiSaloon. Service information may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service name</li>
            <li>Service category</li>
            <li>Description</li>
            <li>Applicable gender/category</li>
            <li>Price</li>
            <li>Service duration</li>
            <li>Available variants</li>
            <li>Applicable offers or discounts</li>
            <li>Availability</li>
            <li>Other relevant service information</li>
          </ul>
          <p className="pt-2">Partners must ensure that the information submitted to DigiSaloon is accurate and up to date.</p>
        </section>

        <section id="sec-psp-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. SERVICE AVAILABILITY</h2>
          <p>Partners are responsible for maintaining accurate availability information. Partners should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Keep their working hours updated.</li>
            <li>Maintain accurate appointment availability.</li>
            <li>Avoid accepting appointments that cannot reasonably be fulfilled.</li>
            <li>Update unavailable services where necessary.</li>
            <li>Inform DigiSaloon about temporary closures or major operational changes.</li>
          </ul>
          <p className="pt-2">If a service is temporarily unavailable, the partner should update or notify DigiSaloon as applicable.</p>
        </section>

        <section id="sec-psp-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. SERVICE PRICING</h2>
          <p>Partners are responsible for providing accurate service prices to DigiSaloon. The price displayed on DigiSaloon should correspond to the price communicated by the partner for the applicable service, subject to any clearly stated offer, discount, tax, or other applicable charge.</p>
          <p>Partners must not intentionally provide an incorrect price to obtain bookings.</p>
        </section>

        <section id="sec-psp-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. PRICE CHANGES</h2>
          <p>If a partner wants to change the price of a service, the partner should update the service information through the applicable DigiSaloon partner system or notify DigiSaloon where required.</p>
          <p>A price change should not be used to unfairly alter the price of an already confirmed booking. For an already confirmed appointment, the applicable booking details should generally be honored unless:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The customer agrees to a change;</li>
            <li>The booking is cancelled in accordance with applicable policy; or</li>
            <li>A genuine technical, legal, or operational issue requires otherwise.</li>
          </ul>
        </section>

        <section id="sec-psp-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. TAXES AND OTHER CHARGES</h2>
          <p>Where applicable, partners are responsible for providing accurate information regarding taxes, applicable registrations, and charges associated with their services.</p>
          <p>If a partner provides GST or other tax-related information to DigiSaloon, the information must be accurate and valid. DigiSaloon may request appropriate information or verification where necessary.</p>
        </section>

        <section id="sec-psp-7" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. CUSTOMER BOOKING AMOUNT</h2>
          <p>DigiSaloon currently collects a fixed booking amount from the customer through the online payment system. The standard booking amount is: <strong>₹50.19 per applicable booking</strong>.</p>
          <p>From this amount:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>₹1.19 may be deducted as payment gateway/processing fee.</li>
            <li>₹49 is the net booking amount attributable to the salon.</li>
            <li>The remaining service amount is paid directly by the customer to the salon.</li>
          </ul>
          <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Example (If the booked service price is ₹200):</h3>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Customer pays online: ₹50.19</li>
              <li>Payment gateway/processing fee: ₹1.19</li>
              <li>Net booking amount attributable to salon: ₹49</li>
              <li>Remaining service amount: ₹151 (paid directly to salon)</li>
              <li>Customer's total out-of-pocket payment: ₹201.19</li>
            </ul>
          </div>
          <p className="pt-2">The ₹49 booking amount is not described as a separate DigiSaloon commission.</p>
        </section>

        <section id="sec-psp-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. SERVICE DELIVERY</h2>
          <p>Partners must make reasonable efforts to provide the booked service as described on DigiSaloon. The partner should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Provide the booked service professionally.</li>
            <li>Follow the displayed service description.</li>
            <li>Maintain reasonable hygiene and service standards.</li>
            <li>Avoid unauthorized substitution of services.</li>
            <li>Inform the customer before making material changes to the booked service.</li>
            <li>Avoid charging customers for undisclosed additional services.</li>
          </ul>
          <p className="pt-2">If additional services are requested by the customer, the applicable price should be clearly communicated before providing the additional service.</p>
        </section>

        <section id="sec-psp-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. APPOINTMENT CONFIRMATION</h2>
          <p>Once a booking is confirmed, the partner is expected to honor the appointment. Partners should ensure that appropriate staff are available, the required service can be provided, the salon is operating during the appointment period, and the customer is not unnecessarily asked to cancel a confirmed booking.</p>
          <p>Repeated failure to honor confirmed appointments may result in review of the partner account.</p>
        </section>

        <section id="sec-psp-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. PARTNER-INITIATED CANCELLATION</h2>
          <p>Partners should avoid cancelling confirmed bookings except where genuinely necessary. A partner may need to cancel or be unable to fulfill an appointment because of circumstances such as salon closure, staff unavailability, emergency situations, operational issues, incorrect availability, technical problems, or other circumstances preventing reasonable service delivery.</p>
          <p>Where possible, the partner should inform DigiSaloon and the customer as soon as reasonably possible.</p>
        </section>

        <section id="sec-psp-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. CUSTOMER REFUND WHEN PARTNER CANCELS</h2>
          <p>If a confirmed booking cannot be fulfilled because of the salon partner, DigiSaloon may process an applicable refund to the customer in accordance with the applicable Cancellation & Refund Policy.</p>
          <p>Any amount already received or pending settlement may be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Refunded to the customer;</li>
            <li>Reversed;</li>
            <li>Adjusted against the partner's settlement; or</li>
            <li>Otherwise handled according to the applicable transaction and refund process.</li>
          </ul>
          <p className="pt-2">The exact refund amount may depend on the transaction status, applicable payment gateway charges, and the circumstances of the cancellation.</p>
        </section>

        <section id="sec-psp-12" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. CUSTOMER CANCELLATION</h2>
          <p>Customer cancellations are governed by DigiSaloon's applicable Cancellation & Refund Policy. Partners must not independently promise a refund or cancellation arrangement that conflicts with DigiSaloon's published policies.</p>
          
          <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Live Booking</h3>
            <p>Customer cancellation is not permitted under the standard Live Booking rules.</p>
          </div>

          <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Schedule Booking</h3>
            <p>A Schedule Booking may be cancelled by the customer when at least 1 hour before the appointment, subject to the applicable refund rules:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Booking amount paid: ₹50.19</li>
              <li>Applicable payment gateway fee: ₹1.19</li>
              <li>Refund amount: ₹49</li>
              <li>General refund processing period: 5–7 working days</li>
            </ul>
            <p className="pt-2">For cancellations made less than 1 hour before the scheduled appointment, the standard policy does not permit customer cancellation or refund.</p>
          </div>
        </section>

        <section id="sec-psp-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. PARTNER NO-SHOW</h2>
          <p>A partner should not be absent or unavailable for a confirmed appointment without a legitimate reason. Repeated partner no-shows may result in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Partner account review</li>
            <li>Temporary restriction</li>
            <li>Suspension of booking availability</li>
            <li>Removal of certain services</li>
            <li>Other appropriate action under DigiSaloon policies</li>
          </ul>
          <p className="pt-2">Any action will depend on the circumstances and available information.</p>
        </section>

        <section id="sec-psp-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. DELAYED SERVICE</h2>
          <p>Partners should make reasonable efforts to serve customers at the scheduled time. If a significant delay occurs, the partner should communicate the delay to the customer where reasonably possible.</p>
          <p>Customers should not be intentionally kept waiting without reasonable communication.</p>
        </section>

        <section id="sec-psp-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. SERVICE MODIFICATION</h2>
          <p>A partner should not materially change a customer's booked service without the customer's knowledge or agreement. Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Replacing the booked service with another service.</li>
            <li>Increasing the price without prior communication.</li>
            <li>Changing a service variant.</li>
            <li>Adding an undisclosed charge.</li>
          </ul>
          <p className="pt-2">If a material change is necessary, the customer should be informed before the change is made.</p>
        </section>

        <section id="sec-psp-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. OFFERS AND DISCOUNTS</h2>
          <p>Partners must honor valid offers, discounts, or promotional prices displayed through DigiSaloon according to their applicable terms. Partners must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Misrepresent an offer.</li>
            <li>Increase the underlying price solely to create a misleading discount.</li>
            <li>Refuse a valid applicable offer without a legitimate reason.</li>
            <li>Create unauthorized promotional claims using DigiSaloon's name.</li>
          </ul>
        </section>

        <section id="sec-psp-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. CUSTOMER COMMUNICATION</h2>
          <p>Partners should communicate with customers professionally. Partners must not use customer contact information obtained through DigiSaloon for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Spam</li>
            <li>Harassment</li>
            <li>Unauthorized marketing</li>
            <li>Fraud</li>
            <li>Unrelated commercial activities</li>
            <li>Selling or sharing customer information</li>
          </ul>
          <p className="pt-2">Customer information must be handled in accordance with DigiSaloon's applicable privacy and data protection policies.</p>
        </section>

        <section id="sec-psp-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. PRICING DISPUTES</h2>
          <p>If a customer disputes a service price, the partner may be required to provide supporting information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service catalogue information</li>
            <li>Applicable price</li>
            <li>Booking details</li>
            <li>Offer or discount details</li>
            <li>Other relevant information</li>
          </ul>
          <p className="pt-2">DigiSaloon may review available information to determine how the matter should be handled.</p>
        </section>

        <section id="sec-psp-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. FALSE OR MISLEADING PRICING</h2>
          <p>Partners must not intentionally provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>False prices</li>
            <li>Fake discounts</li>
            <li>Misleading service descriptions</li>
            <li>Hidden mandatory charges</li>
            <li>Incorrect service durations</li>
            <li>Misleading promotional claims</li>
          </ul>
          <p className="pt-2">DigiSaloon may take appropriate action if such activity is identified.</p>
        </section>

        <section id="sec-psp-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. REPEATED CANCELLATIONS</h2>
          <p>Frequent partner cancellations may negatively affect customer experience. DigiSaloon may review a partner's cancellation history and may take appropriate operational action, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Requesting an explanation;</li>
            <li>Temporarily limiting bookings;</li>
            <li>Removing affected services;</li>
            <li>Temporarily suspending the partner account; or</li>
            <li>Taking other action permitted under applicable terms.</li>
          </ul>
        </section>

        <section id="sec-psp-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. SETTLEMENT AFTER CANCELLATION</h2>
          <p>A booking amount should not be treated as finally payable to the partner where the applicable transaction is cancelled, refunded, reversed, disputed, or otherwise subject to adjustment.</p>
          <p>Where a refund or reversal is required after settlement, DigiSaloon may adjust the applicable amount against future settlements or otherwise recover the amount in accordance with applicable terms and law.</p>
        </section>

        <section id="sec-psp-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. PARTNER RESPONSIBILITIES</h2>
          <p>Every partner is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accurate service information.</li>
            <li>Accurate pricing.</li>
            <li>Accurate availability.</li>
            <li>Proper appointment management.</li>
            <li>Timely service delivery.</li>
            <li>Professional customer conduct.</li>
            <li>Compliance with applicable laws.</li>
            <li>Maintaining valid business information.</li>
            <li>Informing DigiSaloon about material changes.</li>
            <li>Following DigiSaloon's policies.</li>
          </ul>
        </section>

        <section id="sec-psp-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. POLICY VIOLATIONS</h2>
          <p>If DigiSaloon identifies a violation of this Policy, it may take appropriate action depending on the nature and seriousness of the issue. Possible actions may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Warning</li>
            <li>Request for clarification</li>
            <li>Correction of service information</li>
            <li>Temporary booking restriction</li>
            <li>Removal of services</li>
            <li>Suspension</li>
            <li>Termination of partner access</li>
            <li>Settlement adjustment where applicable</li>
            <li>Other appropriate action under DigiSaloon's policies</li>
          </ul>
        </section>

        <section id="sec-psp-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. POLICY UPDATES</h2>
          <p>DigiSaloon may update this Policy from time to time to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Business operations</li>
            <li>Booking procedures</li>
            <li>Payment processes</li>
            <li>Technology</li>
            <li>Legal or regulatory requirements</li>
            <li>Partner operations</li>
          </ul>
          <p className="pt-2">The updated version will be published through the applicable DigiSaloon platform.</p>
        </section>

        <section id="sec-psp-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. RELATED POLICIES</h2>
          <p>This Policy should be read together with applicable DigiSaloon policies, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Partner Terms & Conditions</li>
            <li>Partner Onboarding & Verification Policy</li>
            <li>Partner Payout & Settlement Terms</li>
            <li>Booking & Appointment Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </section>

        <section id="sec-psp-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. CONTACT INFORMATION</h2>
          <p>For questions or concerns regarding partner services, pricing, bookings, or cancellations, partners may contact DigiSaloon through the details below:</p>
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

      </div>
    </div>
  );
};