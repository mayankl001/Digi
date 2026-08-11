import React from "react";

export const BookingPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Booking Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          BOOKING & APPOINTMENT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Booking & Appointment Policy explains the rules applicable to appointments booked through DigiSaloon.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="book-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This Policy applies to bookings made through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Other authorized DigiSaloon booking channels</li>
          </ul>
        </section>

        <section id="book-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Making a Booking</h2>
          <p>Customers may select an available:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Salon</li>
            <li>Service</li>
            <li>Date</li>
            <li>Appointment time</li>
            <li>Payment method</li>
          </ul>
          <p>The availability shown on DigiSaloon is based on information and availability provided through the platform.</p>
        </section>

        <section id="book-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Booking Confirmation</h2>
          <p>A booking is considered confirmed only when the DigiSaloon system generates a confirmed booking status.</p>
          <p>A payment attempt, pending payment or amount deducted from a bank account does not by itself guarantee appointment confirmation.</p>
          <p>Customers should check the booking confirmation/status in the DigiSaloon application.</p>
        </section>

        <section id="book-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Booking Information</h2>
          <p>A confirmed booking may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Booking ID</li>
            <li>Customer information</li>
            <li>Salon</li>
            <li>Selected service</li>
            <li>Date</li>
            <li>Appointment time</li>
            <li>Payment status</li>
            <li>Booking status</li>
          </ul>
          <p>Customers should verify their booking details after confirmation.</p>
        </section>

        <section id="book-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Appointment Time</h2>
          <p>Customers should arrive at the salon at or before the scheduled appointment time.</p>
          <p>The actual service start time may be affected by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Previous appointments</li>
            <li>Salon operations</li>
            <li>Customer arrival</li>
            <li>Service duration</li>
            <li>Unexpected operational circumstances</li>
          </ul>
        </section>

        <section id="book-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Salon Responsibilities</h2>
          <p>The salon partner is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintaining accurate availability</li>
            <li>Accepting and managing bookings</li>
            <li>Providing the booked service</li>
            <li>Maintaining appropriate service information</li>
            <li>Updating unavailable slots where required</li>
            <li>Managing authorized salon staff</li>
          </ul>
        </section>

        <section id="book-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Customer Responsibilities</h2>
          <p>Customers are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing accurate booking information</li>
            <li>Selecting the correct salon and service</li>
            <li>Checking appointment details</li>
            <li>Arriving on time</li>
            <li>Following reasonable salon rules</li>
            <li>Cancelling appointments when they cannot attend</li>
          </ul>
        </section>

        <section id="book-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Double Booking Prevention</h2>
          <p>DigiSaloon may use system controls to reduce the possibility of conflicting bookings.</p>
          <p>However, due to technical, operational or third-party circumstances, DigiSaloon cannot guarantee that scheduling conflicts will never occur.</p>
          <p>Where a verified conflict occurs, DigiSaloon may coordinate with the relevant salon and customer to determine an appropriate resolution.</p>
        </section>

        <section id="book-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Booking Modification</h2>
          <p>If the platform allows modification of a booking, customers may change eligible booking information subject to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Availability</li>
            <li>Salon rules</li>
            <li>System functionality</li>
            <li>Applicable cancellation rules</li>
          </ul>
          <p>A change may result in a new booking or modification of the existing booking depending on the system.</p>
        </section>

        <section id="book-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Customer Cancellation</h2>
          <p>Customers may cancel eligible bookings through the available cancellation functionality.</p>
          <p>The applicable cancellation rules are provided in the Cancellation & Refund Policy.</p>
          <p>Current cancellation structure:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>First five eligible cancellations: No cancellation fee</li>
            <li>From the sixth eligible cancellation onward: 3% cancellation charge may apply</li>
          </ul>
        </section>

        <section id="book-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Salon Cancellation</h2>
          <p>A salon may cancel a booking in circumstances such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Unexpected closure</li>
            <li>Staff unavailability</li>
            <li>Operational problems</li>
            <li>Service unavailability</li>
            <li>Other legitimate circumstances</li>
          </ul>
          <p>If a salon cancels a confirmed paid booking, the customer is eligible for a 100% refund of the amount paid, subject to applicable payment-processing procedures.</p>
        </section>

        <section id="book-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Customer No-Show</h2>
          <p>If a customer does not attend a confirmed appointment and does not cancel it, the booking may be recorded as a no-show.</p>
          <p>Repeated no-shows may be considered when managing future bookings or account activity.</p>
        </section>

        <section id="book-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Late Arrival</h2>
          <p>If a customer arrives late, the salon may be unable to provide the full service within the originally scheduled time.</p>
          <p>The salon may, where reasonably necessary:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Adjust the service timing</li>
            <li>Ask the customer to wait</li>
            <li>Reschedule the appointment</li>
            <li>Decline the service where operationally necessary</li>
          </ul>
          <p>Any applicable refund or cancellation outcome will depend on the circumstances and applicable policies.</p>
        </section>

        <section id="book-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Salon Unable to Provide Service</h2>
          <p>If a customer arrives for a confirmed booking but the salon cannot provide the booked service, the customer should contact DigiSaloon support promptly.</p>
          <p>DigiSaloon may review:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Booking information</li>
            <li>Salon information</li>
            <li>Payment status</li>
            <li>Cancellation information</li>
            <li>Other relevant records</li>
          </ul>
          <p>An appropriate resolution may be provided based on the circumstances.</p>
        </section>

        <section id="book-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Pay-at-Salon Bookings</h2>
          <p>Where Pay-at-Salon is available:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The customer pays the salon directly.</li>
            <li>DigiSaloon does not hold the payment.</li>
            <li>The salon is responsible for collecting the applicable amount.</li>
            <li>The customer should pay the amount applicable to the confirmed booking/service.</li>
          </ul>
        </section>

        <section id="book-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Online Paid Bookings</h2>
          <p>For online-paid bookings, payment may be processed through an authorized payment provider such as Razorpay.</p>
          <p>A booking should be considered paid only after the applicable payment status is successfully verified.</p>
        </section>

        <section id="book-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Pricing</h2>
          <p>The service price displayed at the time of booking may depend on information supplied by the salon.</p>
          <p>Salons are responsible for maintaining accurate service and pricing information.</p>
        </section>

        <section id="book-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Service Availability</h2>
          <p>A salon may temporarily make a service unavailable due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Staff availability</li>
            <li>Equipment issues</li>
            <li>Operational requirements</li>
            <li>Temporary closure</li>
            <li>Other legitimate circumstances</li>
          </ul>
          <p>DigiSaloon may update or restrict unavailable services where appropriate.</p>
        </section>

        <section id="book-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Booking Records</h2>
          <p>DigiSaloon may maintain booking records for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Appointment management</li>
            <li>Customer support</li>
            <li>Payment reconciliation</li>
            <li>Refunds</li>
            <li>Dispute resolution</li>
            <li>Fraud prevention</li>
            <li>Legal and business records</li>
          </ul>
        </section>

        <section id="book-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Fraudulent or Abusive Bookings</h2>
          <p>Users must not create bookings for fraudulent or abusive purposes.</p>
          <p>Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Fake bookings</li>
            <li>Repeated intentional cancellations</li>
            <li>Booking manipulation</li>
            <li>Creating multiple accounts to avoid restrictions</li>
            <li>Payment abuse</li>
          </ul>
          <p>DigiSaloon may restrict or suspend accounts involved in such activity.</p>
        </section>

        <section id="book-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Technical Issues</h2>
          <p>If a technical issue affects a booking, DigiSaloon may investigate the relevant system records.</p>
          <p>Where appropriate, DigiSaloon may contact the customer and/or salon to resolve the issue.</p>
        </section>

        <section id="book-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Third-Party Services</h2>
          <p>Booking functionality may depend on third-party services such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Payment providers</li>
            <li>Cloud infrastructure</li>
            <li>Communication services</li>
            <li>Maps or location services</li>
          </ul>
          <p>DigiSaloon is not responsible for delays caused solely by third-party systems outside its reasonable control.</p>
        </section>

        <section id="book-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Contact for Booking Issues</h2>
          <p>For booking or appointment-related concerns:</p>
          <p>Email: <a href="mailto:support@digisaloon.in" className="text-red-700 hover:underline">support@digisaloon.in</a></p>
          <p>Phone: 9973499471</p>
          <p className="text-xs text-slate-500">Customers should provide their Booking ID wherever available.</p>
        </section>

        <section id="book-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Policy Updates</h2>
          <p>DigiSaloon may update this Booking & Appointment Policy to reflect changes in its booking system, salon operations, payment processes or applicable requirements.</p>
        </section>

        <section id="book-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Contact</h2>
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