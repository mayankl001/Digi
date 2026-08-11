import React from "react";

export const PartnerServicePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Service Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PARTNER SERVICE, PRICING & CANCELLATION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Partner Service, Pricing & Cancellation Policy sets out the rules applicable to salon services, pricing, availability and cancellations managed by DigiSaloon salon partners.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="ps-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>This Policy is intended to ensure that salon partners maintain accurate:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Services, Prices, Availability, Operating hours</li>
            <li>Booking information, Cancellation information</li>
          </ul>
        </section>

        <section id="ps-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Service Listing</h2>
          <p>Partners are responsible for maintaining accurate service listings on DigiSaloon.</p>
          <p>Each service listing should, where applicable, include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service name, Description, Applicable price</li>
            <li>Estimated duration, Availability, Applicable conditions</li>
          </ul>
        </section>

        <section id="ps-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Service Accuracy</h2>
          <p>Partners must provide the service that a customer has legitimately booked, subject to reasonable operational circumstances.</p>
          <p>If a listed service is no longer available, the partner should update or remove the service promptly.</p>
        </section>

        <section id="ps-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Pricing</h2>
          <p>Salon partners are responsible for setting and maintaining their service prices.</p>
          <p>Prices displayed to customers should be accurate and current.</p>
          <p>Partners should update pricing whenever there is a genuine change in their service charges.</p>
        </section>

        <section id="ps-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Price Changes</h2>
          <p>A partner may change the price of a service through the applicable partner system.</p>
          <p>Where a customer has already made a confirmed booking at a displayed price, the partner should generally honor the confirmed booking price unless a legitimate exception applies.</p>
        </section>

        <section id="ps-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Additional Charges</h2>
          <p>Partners should not impose unexpected mandatory charges that were not reasonably disclosed to the customer before the booking.</p>
          <p>Any applicable additional charge should be clearly communicated to the customer where required.</p>
        </section>

        <section id="ps-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Service Availability</h2>
          <p>Partners are responsible for maintaining accurate service and appointment availability.</p>
          <p>Partners should update unavailable services or slots as soon as reasonably possible.</p>
        </section>

        <section id="ps-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Operating Hours</h2>
          <p>Partners must maintain accurate salon operating hours.</p>
          <p>If the salon is temporarily closed or operating on different hours, the partner should update the applicable information.</p>
        </section>

        <section id="ps-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Appointment Acceptance</h2>
          <p>Partners are responsible for managing appointments received through DigiSaloon.</p>
          <p>Where a booking is confirmed, the salon should make reasonable efforts to provide the booked service at the scheduled time.</p>
        </section>

        <section id="ps-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Partner Cancellation</h2>
          <p>A salon should avoid cancelling confirmed appointments except where reasonably necessary.</p>
          <p>Valid reasons may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Emergency circumstances, Unexpected staff unavailability</li>
            <li>Temporary salon closure, Technical or operational issues</li>
            <li>Other circumstances beyond reasonable control</li>
          </ul>
        </section>

        <section id="ps-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Customer Refund for Salon Cancellation</h2>
          <p>If a salon cancels a confirmed booking for which the customer has already paid online, the customer will be eligible for a 100% refund of the amount paid, subject to applicable payment-processing procedures.</p>
        </section>

        <section id="ps-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Pay-at-Salon Bookings</h2>
          <p>For Pay-at-Salon bookings, the customer pays the applicable amount directly to the salon.</p>
          <p>If the salon cancels such a booking before the customer receives the service, no service payment should be collected from the customer.</p>
        </section>

        <section id="ps-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Repeated Cancellations</h2>
          <p>Repeated or unreasonable cancellation of confirmed appointments may affect the partner's account.</p>
          <p>DigiSaloon may take appropriate action, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Warning, Temporary booking restrictions</li>
            <li>Reduced visibility, Suspension, Termination</li>
          </ul>
        </section>

        <section id="ps-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Customer Cancellation</h2>
          <p>Customers may cancel bookings according to DigiSaloon's applicable Cancellation & Refund Policy.</p>
          <p>Partners should not prevent legitimate customer cancellations through the DigiSaloon platform.</p>
        </section>

        <section id="ps-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Customer No-Show</h2>
          <p>Where a customer does not attend an appointment and does not cancel it, the partner may mark the booking as a no-show through the applicable system.</p>
          <p>Partners must not falsely mark a customer as a no-show.</p>
        </section>

        <section id="ps-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Booking Time</h2>
          <p>Partners should make reasonable efforts to provide the service at the confirmed appointment time.</p>
          <p>Minor delays may occur due to normal salon operations, but unreasonable or repeated delays should be avoided.</p>
        </section>

        <section id="ps-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Service Substitution</h2>
          <p>A partner should not substitute a materially different service without the customer's agreement.</p>
          <p>If a requested service is unavailable, the partner should communicate the issue to the customer and follow the applicable DigiSaloon process.</p>
        </section>

        <section id="ps-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Service Quality</h2>
          <p>The salon partner remains responsible for the actual delivery and quality of salon services provided to customers.</p>
          <p>DigiSaloon provides the booking technology and does not directly provide the salon service.</p>
        </section>

        <section id="ps-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Hygiene and Safety</h2>
          <p>Partners are responsible for maintaining appropriate standards relating to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon cleanliness, Staff hygiene</li>
            <li>Equipment, Customer safety, Applicable local requirements</li>
          </ul>
        </section>

        <section id="ps-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Offers and Discounts</h2>
          <p>Partners must honor eligible DigiSaloon offers applicable to their salon and services according to the stated promotional terms.</p>
          <p>Partners must not intentionally misrepresent offer eligibility or pricing.</p>
        </section>

        <section id="ps-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Reviews and Ratings</h2>
          <p>Partners must not manipulate customer ratings or reviews.</p>
          <p>Any attempt to artificially increase or decrease ratings may result in platform-level action.</p>
        </section>

        <section id="ps-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Booking Conflicts</h2>
          <p>Partners should maintain accurate availability to minimize conflicts between DigiSaloon bookings and bookings received through other channels.</p>
          <p>If a conflict occurs, the partner should promptly take reasonable steps to resolve it and inform DigiSaloon where necessary.</p>
        </section>

        <section id="ps-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Unauthorized Price or Service Changes</h2>
          <p>Partners must not intentionally alter booking information in a way that misleads the customer.</p>
          <p>Any legitimate changes should be communicated appropriately.</p>
        </section>

        <section id="ps-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Partner Responsibility</h2>
          <p>The salon partner is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service accuracy, Price accuracy, Appointment availability</li>
            <li>Salon operating hours, Service delivery, Appropriate customer communication</li>
            <li>Timely booking updates</li>
          </ul>
        </section>

        <section id="ps-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Violations</h2>
          <p>DigiSaloon may take appropriate action where a partner:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Repeatedly cancels bookings, Provides misleading prices</li>
            <li>Falsely marks bookings, Manipulates availability</li>
            <li>Refuses confirmed bookings without reasonable cause</li>
            <li>Misuses customer information, Engages in fraudulent activity</li>
          </ul>
        </section>

        <section id="ps-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Relationship With Other Policies</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon Partner Terms & Conditions, Cancellation & Refund Policy</li>
            <li>Booking & Appointment Policy, Offers & Coupon Policy</li>
            <li>Review & Rating Policy, Partner Payout & Settlement Terms</li>
          </ul>
        </section>

        <section id="ps-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Policy Updates</h2>
          <p>DigiSaloon may update this Policy to reflect changes in platform functionality, partner operations, pricing systems or applicable requirements.</p>
        </section>

        <section id="ps-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Contact</h2>
          <p>For partner service, pricing or cancellation concerns:</p>
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