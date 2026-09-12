import React from "react";

export const CancellationPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Cancellation Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          DIGISALOON CANCELLATION & REFUND POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Cancellation & Refund Policy explains the terms applicable when a customer cancels a salon appointment booked through the DigiSaloon platform.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="cancel-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope of This Policy</h2>
          <p>This policy applies to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customers using DigiSaloon</li>
            <li>Salon Partners registered with DigiSaloon</li>
            <li>Appointments booked through DigiSaloon</li>
            <li>Online payments made for DigiSaloon bookings</li>
            <li>Eligible refunds arising from cancellations</li>
          </ul>
          <p>This policy applies to bookings made through the DigiSaloon mobile application, website, or other officially supported platforms.</p>
        </section>

        <section id="cancel-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Customer Cancellation</h2>
          <p>Customers may cancel an eligible appointment through the My Bookings / My Appointments section of the DigiSaloon platform.</p>
          <p>The cancellation fee will depend on the amount of time remaining before the scheduled appointment.</p>
          
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="p-2.5 border border-slate-200 font-bold">Time Before Appointment</th>
                  <th className="p-2.5 border border-slate-200 font-bold">Cancellation Fee</th>
                  <th className="p-2.5 border border-slate-200 font-bold">Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2.5 border border-slate-200">24 hours or more</td>
                  <td className="p-2.5 border border-slate-200">5%</td>
                  <td className="p-2.5 border border-slate-200">95%</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 border border-slate-200">4 hours to less than 24 hours</td>
                  <td className="p-2.5 border border-slate-200">10%</td>
                  <td className="p-2.5 border border-slate-200">90%</td>
                </tr>
                <tr>
                  <td className="p-2.5 border border-slate-200">1 hour to less than 4 hours</td>
                  <td className="p-2.5 border border-slate-200">20%</td>
                  <td className="p-2.5 border border-slate-200">80%</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 border border-slate-200">Less than 1 hour</td>
                  <td className="p-2.5 border border-slate-200">45%</td>
                  <td className="p-2.5 border border-slate-200">55%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pt-1">The applicable cancellation fee will be calculated automatically by the DigiSaloon system based on the recorded cancellation time.</p>
        </section>

        <section id="cancel-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Cancellation Time Calculation</h2>
          <p>The cancellation period is calculated using the difference between the Scheduled Appointment Date & Time and Actual Cancellation Date & Time.</p>
          <p>The following rules apply:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>24 hours or more remaining: 5% cancellation fee</li>
            <li>4 hours or more but less than 24 hours: 10% cancellation fee</li>
            <li>1 hour or more but less than 4 hours: 20% cancellation fee</li>
            <li>Less than 1 hour: 45% cancellation fee</li>
          </ul>
          <p>The cancellation timestamp recorded by DigiSaloon will be considered for determining the applicable cancellation fee.</p>
        </section>

        <section id="cancel-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Example of Cancellation Charges</h2>
          <p>For example, if the eligible booking amount is ₹1,000:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li><strong>24 Hours or More Before Appointment:</strong> Cancellation Fee: ₹50 | Refund: ₹950</li>
            <li><strong>4–24 Hours Before Appointment:</strong> Cancellation Fee: ₹100 | Refund: ₹900</li>
            <li><strong>1–4 Hours Before Appointment:</strong> Cancellation Fee: ₹200 | Refund: ₹800</li>
            <li><strong>Less Than 1 Hour Before Appointment:</strong> Cancellation Fee: ₹450 | Refund: ₹550</li>
          </ul>
          <p>The final refund amount may vary where applicable payment, tax, promotional, coupon, or other non-refundable components apply.</p>
        </section>

        <section id="cancel-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. How to Cancel a Booking</h2>
          <p>To cancel a booking:</p>
          <ol className="list-decimal pl-5 space-y-1 text-xs md:text-sm">
            <li>Open the DigiSaloon App or Website.</li>
            <li>Go to My Bookings / My Appointments.</li>
            <li>Select the appointment you want to cancel.</li>
            <li>Tap Cancel Booking.</li>
            <li>Select the cancellation reason, if required.</li>
            <li>Review the applicable cancellation fee and refund amount.</li>
            <li>Confirm the cancellation.</li>
          </ol>
          <p>DigiSaloon will record the cancellation. If eligible, the applicable refund will be initiated. Once confirmed, the appointment may no longer be available for use.</p>
        </section>

        <section id="cancel-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Cancellation Confirmation</h2>
          <p>After successfully cancelling an appointment, DigiSaloon may provide a cancellation confirmation through app notification, push notification, email, SMS, website confirmation, or other available communication methods. Customers should retain the cancellation confirmation for future reference.</p>
        </section>

        <section id="cancel-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon-Initiated Cancellation</h2>
          <p>If a salon cancels a confirmed appointment, the customer will generally receive a 100% refund of the eligible amount paid for that appointment. No customer cancellation fee will be charged when the cancellation is initiated by likeness of the salon. DigiSaloon may take appropriate action against salons that repeatedly cancel confirmed appointments without reasonable justification.</p>
        </section>

        <section id="cancel-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Service Unavailability</h2>
          <p>If the salon is unable to provide the booked service due to circumstances attributable to the salon, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Provide a full refund</li>
            <li>Assist with rescheduling</li>
            <li>Help arrange an alternative solution</li>
            <li>Take another appropriate action based on the circumstances</li>
          </ul>
        </section>

        <section id="cancel-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Customer No-Show</h2>
          <p>A No-Show occurs when a customer does not attend the scheduled appointment and does not cancel the booking through the DigiSaloon platform. A no-show may be treated differently because the salon may have reserved staff, service time, equipment, resources, and appointment slots. Repeated no-shows may result in restrictions on future bookings, and any refund will be determined based on applicable booking terms.</p>
        </section>

        <section id="cancel-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Late Arrival</h2>
          <p>Customers are expected to arrive at the salon at or before their scheduled appointment time. If a customer arrives late, the salon may, depending on availability, provide the service within the remaining available time, reschedule, or decline the service where delay materially affects operations. Late arrival does not automatically qualify the customer for a refund.</p>
        </section>

        <section id="cancel-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Pay at Salon Bookings</h2>
          <p>For bookings made using Pay at Salon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>No online payment may be collected at booking time.</li>
            <li>The customer must still follow DigiSaloon's cancellation rules.</li>
            <li>Repeated cancellations or no-shows may result in booking restrictions.</li>
            <li>Where no amount was paid online, there may be no monetary refund to process.</li>
          </ul>
        </section>

        <section id="cancel-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Online Payment Bookings</h2>
          <p>For bookings paid online, the applicable cancellation fee is calculated based on cancellation time, eligible refunds are calculated after deductions, and refunds are processed through the original payment provider or bank.</p>
        </section>

        <section id="cancel-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Coupons, Offers and Discounts</h2>
          <p>If a booking was made using a coupon, promotional offer, discount, cashback, referral benefit, wallet credit, or other promotional benefit, the refund may be subject to specific offer terms. Promotional benefits may not be refundable in cash.</p>
        </section>

        <section id="cancel-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Rescheduling</h2>
          <p>Where rescheduling is available, customers may request a change to appointment date or time through DigiSaloon functionality, subject to availability and time restrictions.</p>
        </section>

        <section id="cancel-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Partial Cancellation</h2>
          <p>Unless specifically supported by DigiSaloon, individual services within a confirmed appointment may not be cancelled separately.</p>
        </section>

        <section id="cancel-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Refund Processing</h2>
          <p>Eligible refunds will generally be initiated after successful cancellation processing. Exact crediting times depend on the payment gateway, UPI provider, bank, or card issuer.</p>
        </section>

        <section id="cancel-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Refund to Original Payment Method</h2>
          <p>Where technically possible, refunds will be processed to the original payment method used for the booking, or via another permitted method due to provider limitations.</p>
        </section>

        <section id="cancel-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Failed or Unsuccessful Booking</h2>
          <p>If payment is deducted but the booking is not confirmed due to technical or processing issues, DigiSaloon may initiate a refund for the eligible amount.</p>
        </section>

        <section id="cancel-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Duplicate Payment</h2>
          <p>If charged more than once for the same booking due to a processing error, DigiSaloon will verify the transaction and process a refund for the confirmed duplicate amount.</p>
        </section>

        <section id="cancel-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Technical or Platform Errors</h2>
          <p>If an appointment is cancelled because of a verified technical issue, system error, or platform problem, DigiSaloon may provide a full/partial refund, rescheduling, or restoration.</p>
        </section>

        <section id="cancel-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Exceptional Circumstances</h2>
          <p>DigiSaloon reviews exceptional requests (salon closure, service unavailability, processing errors) on a case-by-case basis subject to applicable law.</p>
        </section>

        <section id="cancel-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Fraudulent or Abusive Refund Requests</h2>
          <p>DigiSaloon investigates suspected fraud, false info, duplicate claims, payment manipulation, or repeated misuse, and may restrict or suspend accounts accordingly.</p>
        </section>

        <section id="cancel-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Cancellation and Refund Disputes</h2>
          <p>Customers believing an incorrect fee was applied can contact Support with their Booking ID, mobile number/email, and payment reference.</p>
        </section>

        <section id="cancel-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Booking-Specific Terms</h2>
          <p>Certain salons, services, or offers may have additional terms displayed before confirmation, which customers are responsible for reviewing.</p>
        </section>

        <section id="cancel-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Policy Changes</h2>
          <p>DigiSaloon may update this policy periodically due to operational changes or requirement shifts. The latest version will be published on the platform.</p>
        </section>

        <section id="cancel-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Relationship With Other Policies</h2>
          <p>This policy should be read alongside Terms & Conditions, Privacy Policy, Payment & Settlement Policy, and other core DigiSaloon guidelines.</p>
        </section>

        <section id="cancel-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Contact & Support</h2>
          <p>For cancellation, refund, or booking assistance, contact DigiSaloon:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> support@digisaloon.in</p>
            <p><strong>Phone:</strong> +91 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

        <section id="cancel-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Customer Acknowledgement</h2>
          <p>By booking an appointment through DigiSaloon, the customer acknowledges they have read, understood, and agreed to this Cancellation & Refund Policy.</p>
        </section>

      </div>
    </div>
  );
};